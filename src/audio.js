export class SoundEngine {
  constructor() { this.ctx=null; this.playing=false; this.preset='studio'; this.cache=new Map();this.ready=null; }
  async start(sources) {
    if(this.ready) await this.ready;
    if(this.ctx) { await this.ctx.resume(); this.playing=true; return; }
    const ctx=this.ctx=new AudioContext(); await ctx.resume();
    this.master=ctx.createGain(); this.master.gain.value=.65;
    const limiter=ctx.createDynamicsCompressor(); limiter.threshold.value=-12; limiter.ratio.value=6;
    this.master.connect(limiter).connect(ctx.destination);
    this.dry=ctx.createGain(); this.dry.connect(this.master);
    this.rooms={};
    for(const [name,seconds,decay] of [['studio',.35,3],['cathedral',5.5,2.8]]) {
      const convolution=ctx.createConvolver(), wet=ctx.createGain();
      const impulse=ctx.createBuffer(2,Math.ceil(ctx.sampleRate*seconds),ctx.sampleRate);
      let seed=42;
      for(let c=0;c<2;c++) for(let i=0;i<impulse.length;i++) {
        seed=(seed*1664525+1013904223)>>>0;
        const t=i/ctx.sampleRate;
        impulse.getChannelData(c)[i]=t<.018?0:((seed/4294967296)*2-1)*Math.pow(1-i/impulse.length,decay);
      }
      convolution.buffer=impulse; convolution.connect(wet).connect(this.master);
      this.rooms[name]={convolution,wet};
    }
    try {
      this.epoch=ctx.currentTime+.15;
      this.ready=Promise.all(sources.map(s=>this.add(s)));
      await this.ready;this.ready=null;
      this.setPreset(this.preset); this.playing=true;
    } catch(error) { sources.forEach(s=>this.remove(s));await ctx.close(); this.ctx=null;this.ready=null;this.cache.clear(); throw error; }
  }
  async add(s) {
    if(!s.sound||!this.ctx||s.audio||s.loading)return;
    s.loading=true;
    try {
      if(!this.cache.has(s.sound))this.cache.set(s.sound,(async()=>{
        const response=await fetch(`audio/${s.sound}.wav`);
        if(!response.ok)throw new Error(`Could not load ${s.sound}`);
        return this.ctx.decodeAudioData(await response.arrayBuffer());
      })().catch(e=>{this.cache.delete(s.sound);throw e;}));
      const buffer=await this.cache.get(s.sound);if(s.removed)return;
      const ctx=this.ctx,player=ctx.createBufferSource(),gain=ctx.createGain(),panner=ctx.createPanner();
      player.buffer=buffer;player.loop=true;gain.gain.value=s.muted?0:s.volume;
      panner.panningModel='HRTF';panner.distanceModel='inverse';panner.refDistance=2;panner.maxDistance=25;panner.rolloffFactor=1.2;
      player.connect(gain).connect(panner);panner.connect(this.dry);
      for(const room of Object.values(this.rooms))panner.connect(room.convolution);
      s.audio={player,gain,panner};this.move(s);
      const when=Math.max(ctx.currentTime+.03,this.epoch);player.start(when,Math.max(0,when-this.epoch)%buffer.duration);
    } finally {s.loading=false;}
  }
  remove(s) {if(s.audio){s.audio.player.stop();s.audio.player.disconnect();s.audio.gain.disconnect();s.audio.panner.disconnect();s.audio=null;}}
  async toggle(sources) {
    if(!this.ctx) return this.start(sources);
    if(this.playing) { await this.ctx.suspend(); this.playing=false; }
    else { await this.ctx.resume(); this.playing=true; }
  }
  move(s) { this.moveTo(s,s.x,s.z); }
  moveTo(s,x,z) { if(s.audio) { const p=s.audio.panner; p.positionX.value=x; p.positionY.value=1; p.positionZ.value=z; } }
  mute(s) { if(s.audio) s.audio.gain.gain.setTargetAtTime(s.muted?0:s.volume,this.ctx.currentTime,.025); }
  setPreset(name) {
    this.preset=name; if(!this.ctx||!this.rooms) return;
    const t=this.ctx.currentTime;
    this.dry.gain.setTargetAtTime(name==='studio'?.95:.66,t,.12);
    this.rooms.studio.wet.gain.setTargetAtTime(name==='studio'?.15:0,t,.15);
    this.rooms.cathedral.wet.gain.setTargetAtTime(name==='cathedral'?.85:0,t,.15);
  }
  listener(camera) {
    if(!this.ctx) return;
    const l=this.ctx.listener, p=camera.position;
    const e=camera.matrixWorld.elements;
    if(l.positionX) {
      l.positionX.value=p.x; l.positionY.value=p.y; l.positionZ.value=p.z;
      l.forwardX.value=-e[8]; l.forwardY.value=-e[9]; l.forwardZ.value=-e[10];
      l.upX.value=e[4]; l.upY.value=e[5]; l.upZ.value=e[6];
    } else { l.setPosition(p.x,p.y,p.z); l.setOrientation(-e[8],-e[9],-e[10],e[4],e[5],e[6]); }
  }
}

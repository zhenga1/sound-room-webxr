import {SoundEngine} from './audio.js';
// Public deployment adapter. No SATIE runtime, evaluation recordings or account data.
export class PublicSoundEngine extends SoundEngine {
  constructor(){super();this.mixerOpen=false;}
  attach(){return Promise.resolve();}
  prepare(){}
  openMixer(){}
  closeMixer(){}
  setBirdActive(){}
  async start(sources,traces=[]){return super.start([...sources,...traces.map(t=>t.player)]);}
  async toggle(sources,traces=[]){return super.toggle([...sources,...traces.map(t=>t.player)]);}
  addTrace(source){return this.add(source);}
  removeTrace(source){this.remove(source);}
  moveTrace(source,x,z){this.moveTo(source,x,z);}
  muteTrace(source){this.mute(source);}
  diagnostics(){return {provider:'Original procedural loops / Web Audio',playing:this.playing,context:this.ctx?.state};}
}

import * as THREE from 'three';
export const moods={calm:{energy:.2,nature:.6,dreaminess:.2},wonder:{energy:.45,nature:.95,dreaminess:.85},freedom:{energy:.8,nature:.45,dreaminess:.5}};
export const livelyDefaults={energy:.68,nature:.9,dreaminess:.42};
export function personalize(feeling='',place=''){
  const text=(feeling+' '+place).toLowerCase();const result={...( /adventur|free|energet|explor/.test(text)?moods.freedom:/wonder|curious|inspir|magic/.test(text)?moods.wonder:moods.calm)};
  if(/garden|forest|grove|lush/.test(text))result.nature=.95;if(/beach|shore|ocean/.test(text))result.nature=.25;if(/glow|float|imaginar|dream|surreal/.test(text))result.dreaminess=.9;return result;
}
export function islandBounds(x,z){const dx=x/13,dz=(z-10)/18,r=Math.hypot(dx,dz);return r>1?{x:x/r,z:10+(z-10)/r}:{x,z};}
export function islandHeight(x,z){const distance=Math.hypot(x+8,z-21);return Math.max(0,1-distance/4.2)*1.5;}
export function buildParadise(scene,root){
  const additions=new THREE.Group();additions.name='Inner Eden - shore grove overlook';root.add(additions);
  const material=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.85,...extra});
  const sand=material('#e7cb92'),grass=material('#82b66a'),bark=material('#9b7652'),leaf=material('#50a876');
  function mesh(geometry,mat,x,y,z,parent=additions){const o=new THREE.Mesh(geometry,mat);o.position.set(x,y,z);parent.add(o);return o;}
  const island=mesh(new THREE.CylinderGeometry(1,1.04,.7,64),sand,0,-.4,10);island.scale.set(14,1,19);
  const oceanMaterial=material('#57bbcb',{roughness:.3,metalness:.12});const ocean=mesh(new THREE.PlaneGeometry(180,180,36,36),oceanMaterial,0,-.47,9);ocean.rotation.x=-Math.PI/2;
  const grove=mesh(new THREE.CircleGeometry(5.5,48),grass,4,-.015,16);grove.rotation.x=-Math.PI/2;
  // A broad, walkable mound frames the overlook without replacing the courtyard.
  const hill=mesh(new THREE.ConeGeometry(4.2,1.5,48),grass,-8,.7,21);
  const stream=mesh(new THREE.PlaneGeometry(.8,9),material('#7cd5ce',{roughness:.2}),4,.025,14);stream.rotation.x=-Math.PI/2;stream.rotation.z=.25;
  const trees=[];
  for(let i=0;i<28;i++){
    const angle=i*2.39996,r=2.1+(i%6)*.65,x=4+Math.cos(angle)*r,z=16+Math.sin(angle)*r;
    const tree=new THREE.Group();tree.position.set(x,0,z);additions.add(tree);
    mesh(new THREE.CylinderGeometry(.07,.15,2.5,7),bark,0,1.25,0,tree);
    const crown=mesh(new THREE.SphereGeometry(.9,10,8),leaf,0,2.5,0,tree);crown.scale.set(1,1.3,1);trees.push(tree);
  }
  for(const [x,z] of [[-10,1],[-9,8],[-11,12]]){
    const trunk=mesh(new THREE.CylinderGeometry(.1,.2,3.4,8),bark,x,1.7,z);trunk.rotation.z=.16;
    for(let i=0;i<6;i++){const frond=mesh(new THREE.SphereGeometry(1,8,6),leaf,x+Math.cos(i)*.6,3.4,z+Math.sin(i)*.6);frond.scale.set(.35,.1,1.5);frond.rotation.y=i;}
  }
  const cloth=material('#d9a680');const hammock=mesh(new THREE.SphereGeometry(1,16,8),cloth,-9,.7,5);hammock.scale.set(1.7,.12,.55);
  for(const x of [-10.7,-7.3])mesh(new THREE.CylinderGeometry(.07,.07,1.7,8),bark,x,.85,5);
  const glow=material('#b5f0c9',{emissive:'#66f4c0',emissiveIntensity:.4});
  for(let i=0;i<30;i++){const angle=i*2.4,r=1+(i%8)*.45;const flower=mesh(new THREE.SphereGeometry(.08,6,5),glow,4+Math.cos(angle)*r,.3+(i%4)*.13,16+Math.sin(angle)*r);flower.name='Glowing grove blossom';}
  const points=new Float32Array(180*3);for(let i=0;i<points.length;i+=3){points[i]=Math.sin(i*7.3)*11;points[i+1]=.6+(i%17)*.22;points[i+2]=2+(i%29)*.75;}
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(points,3));
  const motes=new THREE.Points(geometry,new THREE.PointsMaterial({color:'#fff4b4',size:.045,transparent:true,opacity:.6,depthWrite:false}));additions.add(motes);
  const sun=mesh(new THREE.SphereGeometry(6,20,12),new THREE.MeshBasicMaterial({color:'#ffe5b1'}),-48,20,-65);
  const hemisphere=new THREE.HemisphereLight('#fff2d3','#a7bb91',2.4);additions.add(hemisphere);
  const sunlight=new THREE.DirectionalLight('#ffedcb',2.1);sunlight.position.set(-10,15,3);additions.add(sunlight);
  function sign(text,x,y,z){const canvas=document.createElement('canvas');canvas.width=768;canvas.height=128;const context=canvas.getContext('2d');context.fillStyle='#214b44';context.fillRect(0,0,768,128);context.fillStyle='#f4f2dd';context.font='36px system-ui';context.textAlign='center';context.fillText(text,384,78);const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;const board=mesh(new THREE.PlaneGeometry(2.4,.4),new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide}),x,y,z);board.rotation.y=Math.PI;}
  sign('THE SHORE - rest & spaciousness',-9,1.6,2);sign('THE GROVE - curiosity & wonder',4,1.6,11.5);sign('THE OVERLOOK - freedom & possibility',-8,2.4,18);
  let settings={...livelyDefaults},target={...settings};
  return {root:additions,target,
    set(values){for(const key of ['energy','nature','dreaminess'])if(Number.isFinite(values[key]))target[key]=THREE.MathUtils.clamp(values[key],0,1);},
    update(dt,time){
      for(const key of Object.keys(settings))settings[key]=THREE.MathUtils.lerp(settings[key],target[key],1-Math.exp(-dt*1.8));
      const {energy,nature,dreaminess}=settings;
      scene.background=new THREE.Color('#c0e5e9').lerp(new THREE.Color('#b6a5dc'),dreaminess*.5);
      if(scene.fog){scene.fog.color.copy(scene.background);scene.fog.density=.006;}
      hemisphere.intensity=2.1+energy*.6;sunlight.intensity=1.8+energy*.5;leaf.color.set('#59aa74').lerp(new THREE.Color('#7dcbac'),dreaminess*.4);grass.color.set('#91b66f');
      glow.emissiveIntensity=.25+dreaminess*2;glow.color.set('#a1dbaa').lerp(new THREE.Color('#b7bcff'),dreaminess);
      for(let i=0;i<trees.length;i++){trees[i].visible=i<8+Math.floor(nature*20);trees[i].rotation.z=Math.sin(time*(.3+energy)+i)*(.008+energy*.02);}
      motes.material.opacity=.12+dreaminess*.65;motes.rotation.y=time*(.005+energy*.008);oceanMaterial.color.set('#62c8cd').lerp(new THREE.Color('#83aed1'),dreaminess*.4);
      const positions=ocean.geometry.attributes.position;for(let i=0;i<positions.count;i++){const x=positions.getX(i),y=positions.getY(i);positions.setZ(i,Math.sin(x*.22+time*(.4+energy))*Math.cos(y*.19+time*.3)*(.025+energy*.1));}positions.needsUpdate=true;
    },get settings(){return settings;}
  };
}
// A small procedural ambience layer supplements, rather than replaces, SATIE.
export const courtyardSounds=[
  {id:'shore',label:'Ocean waves',x:-9,y:1,z:5,frequency:320,type:'lowpass'},
  {id:'stream',label:'Grove stream',x:4,y:.4,z:15,frequency:1500,type:'lowpass'},
  {id:'wind',label:'Overlook wind',x:-8,y:1,z:21,frequency:650,type:'lowpass'},
  {id:'fountain',label:'Fountain water and splashes',x:0,y:.85,z:6,frequency:1100,type:'bandpass'},
  {id:'entrance-leaves',label:'Entrance hedge rustling',x:-1.55,y:.8,z:1.6,frequency:2400,type:'bandpass'},
  {id:'back-leaves',label:'Back hedge rustling',x:0,y:.8,z:11,frequency:1900,type:'bandpass'},
  {id:'grove-leaves',label:'Grove canopy rustling',x:4,y:2.5,z:17,frequency:2800,type:'bandpass'}
];
export const outdoorChannels=[
  {id:'fountain',label:'Fountain & splashes',level:.65},
  {id:'birds',label:'Garden birds',level:.8},
  {id:'entrance-leaves',label:'Entrance leaves',level:.6},
  {id:'back-leaves',label:'Back hedge',level:.55},
  {id:'grove-leaves',label:'Tree canopy',level:.65},
  {id:'stream',label:'Grove stream',level:.6},
  {id:'shore',label:'Ocean waves',level:.5},
  {id:'wind',label:'Soft breeze',level:.3},
  {id:'chimes',label:'Gentle chimes',level:.45},
  {id:'insects',label:'Meadow crickets',level:.3}
];
export class ParadiseAmbience{
  constructor(){this.ctx=null;this.nodes=[];this.instances=[];this.serial=0;this.active=false;this.volume=1;this.buses=new Map();this.observers=new Set();this.mix=new Map(outdoorChannels.map(item=>[item.id,{level:item.level,muted:false}]));
    try{const saved=JSON.parse(localStorage.getItem('inner-eden-mix-v1'));for(const item of outdoorChannels){const value=saved?.[item.id];if(value&&Number.isFinite(value.level)&&typeof value.muted==='boolean')this.mix.set(item.id,{level:THREE.MathUtils.clamp(value.level,0,1),muted:value.muted});}}catch{}
  }
  channels(){return [...outdoorChannels,...this.instances].map(item=>({...item,...this.mix.get(item.id)}));}
  channelGain(id){const item=this.mix.get(id);return item&&!item.muted?item.level*2:0;}
  setChannel(id,level){const item=this.mix.get(id);if(!item||!Number.isFinite(level))return;item.level=THREE.MathUtils.clamp(level,0,1);this.changed();}
  toggleChannel(id){const item=this.mix.get(id);if(item){item.muted=!item.muted;this.changed();}}
  muteAll(muted=true){for(const item of this.mix.values())item.muted=muted;this.changed();}
  resetMix(){for(const item of [...outdoorChannels,...this.instances])this.mix.set(item.id,{level:item.level,muted:false});this.changed();}
  subscribe(callback){this.observers.add(callback);return()=>this.observers.delete(callback);}
  changed(){try{localStorage.setItem('inner-eden-mix-v1',JSON.stringify(Object.fromEntries(this.mix)));}catch{}this.applyMix();for(const callback of this.observers)callback();}
  applyMix(){if(!this.ctx)return;for(const [id,bus] of this.buses)bus.gain.setTargetAtTime(this.channelGain(id),this.ctx.currentTime,.06);}
  setMasterVolume(value){if(Number.isFinite(value))this.volume=THREE.MathUtils.clamp(value,0,2);}
  async start(){
    if(this.ctx){await this.ctx.resume();return;}const ctx=this.ctx=new AudioContext();await ctx.resume();
    this.master=ctx.createGain();this.master.gain.value=0;this.master.connect(ctx.destination);
    for(const item of [...outdoorChannels,...this.instances]){const bus=ctx.createGain();bus.gain.value=this.channelGain(item.id);bus.connect(this.master);this.buses.set(item.id,bus);}
    const buffer=this.noiseBuffer=ctx.createBuffer(1,ctx.sampleRate*8,ctx.sampleRate),data=buffer.getChannelData(0);let seed=81;for(let i=0;i<data.length;i++){seed=(seed*1664525+1013904223)>>>0;const fade=Math.min(1,i/(ctx.sampleRate*.01),(data.length-i-1)/(ctx.sampleRate*.01));data[i]=((seed/4294967296)*2-1)*fade;}
    for(const [index,definition] of courtyardSounds.entries()){
      const {x,y,z,frequency,type}=definition;
      const source=ctx.createBufferSource(),filter=ctx.createBiquadFilter(),gain=ctx.createGain(),pan=ctx.createPanner();source.buffer=buffer;source.loop=true;filter.type=type;filter.frequency.value=frequency;filter.Q.value=.6;gain.gain.value=0;pan.panningModel='HRTF';pan.distanceModel='inverse';pan.refDistance=definition.id==='fountain'?2:3;pan.maxDistance=60;pan.rolloffFactor=1;pan.positionX.value=x;pan.positionY.value=y;pan.positionZ.value=z;source.connect(filter).connect(gain).connect(pan).connect(this.buses.get(definition.id));source.start(0,index*.73%8);this.nodes.push({...definition,source,gain,filter,pan});
    }
    for(const item of this.instances)this.connectInstance(item);
  }
  addInstance(soundId,position){const definition=outdoorChannels.find(item=>item.id===soundId);if(!definition||this.instances.length>=16)return null;
    const id='placed-'+(++this.serial),item={id,soundId,label:definition.label+' #'+this.serial,level:.65,x:position.x,y:position.y??1,z:position.z};this.instances.push(item);this.mix.set(id,{level:item.level,muted:false});if(this.master)this.connectInstance(item);this.changed();return item;
  }
  connectInstance(item){const ctx=this.ctx;if(!this.buses.has(item.id)){const bus=ctx.createGain();bus.gain.value=this.channelGain(item.id);bus.connect(this.master);this.buses.set(item.id,bus);}const definition=courtyardSounds.find(source=>source.id===item.soundId);if(!definition)return;
    const source=ctx.createBufferSource(),filter=ctx.createBiquadFilter(),gain=ctx.createGain(),pan=ctx.createPanner();source.buffer=this.noiseBuffer;source.loop=true;filter.type=definition.type;filter.frequency.value=definition.frequency;filter.Q.value=.6;gain.gain.value=0;pan.panningModel='HRTF';pan.distanceModel='inverse';pan.refDistance=2;pan.rolloffFactor=1;pan.positionX.value=item.x;pan.positionY.value=item.y;pan.positionZ.value=item.z;source.connect(filter).connect(gain).connect(pan).connect(this.buses.get(item.id));source.start();this.nodes.push({...item,source,filter,gain,pan});
  }
  removeInstance(id){const index=this.instances.findIndex(item=>item.id===id);if(index<0)return;this.instances.splice(index,1);for(const node of this.nodes.filter(item=>item.id===id)){node.source.stop();node.source.disconnect();node.filter.disconnect();node.gain.disconnect();node.pan.disconnect();}this.nodes=this.nodes.filter(item=>item.id!==id);this.buses.get(id)?.disconnect();this.buses.delete(id);this.mix.delete(id);this.changed();}
  update(camera,settings,time){if(!this.ctx||!this.master)return;const ctx=this.ctx,volume=this.active?1:0;
    this.master.gain.setTargetAtTime(volume*this.volume,ctx.currentTime,.2);
    this.nodes.forEach(node=>{
      let texture;const kind=node.soundId||node.id;
      if(kind==='shore')texture=.075+.025*Math.sin(time*.45);
      else if(kind==='stream')texture=.045+settings.nature*.045;
      else if(kind==='wind')texture=.025+settings.energy*.055;
      else if(kind==='fountain')texture=(.10+settings.energy*.035)*(.8+.12*Math.sin(time*3.7)+.08*Math.sin(time*8.3));
      else{const phase=node.x+node.z;const gust=.45+.2*Math.sin(time*(.7+settings.energy)+phase)+.15*Math.sin(time*4.7+phase);texture=(.025+settings.nature*.04+settings.energy*.04)*gust;}
      node.gain.gain.setTargetAtTime(volume*texture,ctx.currentTime,.2);
    });
    if(this.active&&ctx.currentTime>=(this.nextDrop||0)){this.tone(650+(Math.sin(time*13)*.5+.5)*800,Math.sin(time*7)*.35,6+Math.cos(time*5)*.3,.013+settings.energy*.008,'drop');this.nextDrop=ctx.currentTime+.18+(1-settings.energy)*.25;}
    if(this.active&&ctx.currentTime>=(this.nextBird||0)){this.tone(1800+settings.energy*900,4,17,.012+settings.energy*.012,true);this.nextBird=ctx.currentTime+2+(1-settings.energy)*5;}
    if(this.active&&settings.dreaminess>.3&&ctx.currentTime>=(this.nextChime||0)){const notes=[261.63,329.63,392,523.25,659.25];this.tone(notes[Math.floor(time/5)%notes.length],-8,21,.014,false);this.nextChime=ctx.currentTime+5;}
    if(this.active&&settings.nature>.35&&ctx.currentTime>=(this.nextInsect||0)){this.tone(3400+Math.sin(time)*250,5,14,.006,'insect');this.nextInsect=ctx.currentTime+1.8+(1-settings.energy)*2;}
    for(const item of this.instances){if(!this.active||ctx.currentTime<(item.next||0))continue;
      if(['birds','chimes','insects'].includes(item.soundId)){const kind=item.soundId==='birds'?true:item.soundId==='insects'?'insect':false;this.tone(item.soundId==='birds'?2300:item.soundId==='insects'?3500:523.25,item.x,item.z,item.soundId==='insects'?.008:.025,kind,item.id,item.y);item.next=ctx.currentTime+(item.soundId==='chimes'?4:2);}}
    const p=new THREE.Vector3(),q=new THREE.Quaternion();camera.getWorldPosition(p);camera.getWorldQuaternion(q);const f=new THREE.Vector3(0,0,-1).applyQuaternion(q),u=new THREE.Vector3(0,1,0).applyQuaternion(q),listener=ctx.listener;
    if(listener.positionX){listener.positionX.value=p.x;listener.positionY.value=p.y;listener.positionZ.value=p.z;listener.forwardX.value=f.x;listener.forwardY.value=f.y;listener.forwardZ.value=f.z;listener.upX.value=u.x;listener.upY.value=u.y;listener.upZ.value=u.z;}
  }
  tone(frequency,x,z,volume,kind,busId=null,height=null){const ctx=this.ctx,osc=ctx.createOscillator(),gain=ctx.createGain(),pan=ctx.createPanner(),t=ctx.currentTime,duration=kind==='drop'?.18:kind==='insect'?.4:kind?.25:2;osc.type='sine';osc.frequency.setValueAtTime(frequency,t);if(kind)osc.frequency.exponentialRampToValueAtTime(frequency*(kind==='drop'?.48:1.5),t+duration*.7);gain.gain.setValueAtTime(.0001,t);gain.gain.exponentialRampToValueAtTime(volume,t+.012);gain.gain.exponentialRampToValueAtTime(.0001,t+duration);pan.panningModel='HRTF';pan.refDistance=3;pan.positionX.value=x;pan.positionY.value=height??(kind==='drop'?.8:2);pan.positionZ.value=z;const id=kind==='drop'?'fountain':kind==='insect'?'insects':kind?'birds':'chimes';osc.connect(gain).connect(pan).connect(this.buses.get(busId||id)||this.master);osc.start();osc.stop(t+duration);osc.onended=()=>{osc.disconnect();gain.disconnect();pan.disconnect();};}
}
export function createDoor(root,{x=0,z=-2,title='Return to bedroom',onOpen=()=>{}}={}){
  const group=new THREE.Group();group.position.set(x,0,z);root.add(group);const wood=new THREE.MeshStandardMaterial({color:'#b09266'}),leaf=new THREE.Group();leaf.position.x=-.65;group.add(leaf);
  const slab=new THREE.Mesh(new THREE.BoxGeometry(1.3,2.5,.12),wood);slab.position.set(.65,1.25,0);leaf.add(slab);
  const frame=new THREE.Mesh(new THREE.BoxGeometry(1.6,.16,.2),wood);frame.position.set(0,2.63,0);group.add(frame);
  for(const side of [-.74,.74]){const post=new THREE.Mesh(new THREE.BoxGeometry(.12,2.65,.2),wood);post.position.set(side,1.3,0);group.add(post);}
  const canvas=document.createElement('canvas');canvas.width=640;canvas.height=128;const context=canvas.getContext('2d');context.fillStyle='#244a43';context.fillRect(0,0,640,128);context.fillStyle='#fff3d5';context.textAlign='center';context.font='30px system-ui';context.fillText(title,320,76);const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
  const label=new THREE.Mesh(new THREE.PlaneGeometry(1.65,.33),new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide}));label.position.set(0,2.95,.05);group.add(label);
  let opened=false;slab.userData.portal=()=>{if(!opened){opened=true;onOpen();}else onOpen();};
  return {group,leaf,hit:slab,get opened(){return opened;},reset(){opened=false;leaf.rotation.y=0;},update(dt){leaf.rotation.y=THREE.MathUtils.lerp(leaf.rotation.y,opened?-Math.PI*.48:0,1-Math.exp(-dt*6));},open(){slab.userData.portal();}};
}

import {OutdoorTraces} from './outdoor-traces.js';
import {OutdoorObjects} from './outdoor-objects.js';
import * as THREE from 'three';
import {createCourtyard} from './partner-courtyard.js';
import {buildParadise,ParadiseAmbience,createDoor,moods,personalize,islandBounds,islandHeight} from './paradise-world.js';
import {mountOutdoorMixer} from './outdoor-mixer.js';
export class ParadisePortal{
  constructor({scene,camera,door,engine,sources,toast,keys}){
    Object.assign(this,{scene,camera,engine,sources,toast,keys});this.active=false;this.paused=false;this.travel=null;this.indoorSaved=new Map();
    const previous=[...scene.children];this.indoor=new THREE.Group();this.indoor.name='Original bedroom';scene.add(this.indoor);for(const child of previous)if(child!==camera)this.indoor.attach(child);
    this.indoorStyle={background:scene.background.clone(),fog:scene.fog?.clone()};
    const courtyard=createCourtyard();this.outdoor=courtyard.root;this.outdoor.visible=false;scene.add(this.outdoor);this.eden=buildParadise(scene,courtyard.hosts);this.ambience=new ParadiseAmbience();this.traces=new OutdoorTraces(this.outdoor,this.ambience);this.objects=new OutdoorObjects(this.outdoor,this.ambience,()=>this.view||this.camera);
    const original=[...door.children];door.updateWorldMatrix(true,true);this.hinge=new THREE.Group();this.hinge.position.x=-.65;door.add(this.hinge);for(const index of [0,5,6,7,8,12,13])if(original[index])this.hinge.attach(original[index]);
    this.indoorHit=original[0];this.indoorHit.userData.portal=()=>this.open(true);
    this.returnDoor=createDoor(courtyard.hosts,{x:0,z:-2,title:'Open door - return to bedroom',onOpen:()=>this.open(false)});
    const labelCanvas=document.createElement('canvas');labelCanvas.width=768;labelCanvas.height=128;const ctx=labelCanvas.getContext('2d');ctx.fillStyle='#244b43';ctx.fillRect(0,0,768,128);ctx.fillStyle='#fff7df';ctx.font='34px system-ui';ctx.textAlign='center';ctx.fillText('INNER EDEN - open door',384,80);const tex=new THREE.CanvasTexture(labelCanvas);tex.colorSpace=THREE.SRGBColorSpace;
    const sign=new THREE.Mesh(new THREE.PlaneGeometry(1.7,.28),new THREE.MeshBasicMaterial({map:tex,side:THREE.DoubleSide}));sign.position.set(0,2.95,.12);door.add(sign);
    const target=document.getElementById('eden-status');this.status=target;
    const mixer=document.getElementById('outdoor-mixer');if(mixer?.replaceChildren)mountOutdoorMixer(mixer,this.ambience,this.objects,this.traces);
    document.getElementById('eden-mix-toggle').onclick=()=>{mixer.hidden=!mixer.hidden;this.keys.clear();if(document.pointerLockElement)document.exitPointerLock();};
    for(const button of document.querySelectorAll('[data-eden-preset]'))button.onclick=()=>this.set(moods[button.dataset.edenPreset]);
    for(const key of ['energy','nature','dreaminess'])document.getElementById('eden-'+key).oninput=e=>this.set({[key]:Number(e.target.value)/100});
    document.getElementById('eden-personalize').onclick=()=>{this.set(personalize(document.getElementById('eden-feeling').value,document.getElementById('eden-place').value));this.toast('Your words selected an existing paradise setting.');};
    document.getElementById('eden-save').onclick=()=>this.favorite();document.getElementById('eden-load').onclick=()=>this.loadFavorite();
    document.getElementById('eden-enter').onclick=()=>{document.getElementById('eden-dialog').close();this.open(true);};document.getElementById('eden-close').onclick=()=>document.getElementById('eden-dialog').close();
    document.getElementById('eden-setup').onclick=()=>{this.keys.clear();document.getElementById('eden-dialog').showModal();};
    document.getElementById('eden-back').onclick=()=>this.open(false);this.sync();
  }
  registerIndoor(object){this.indoor.attach(object);}
  get hits(){return this.active?[this.returnDoor.hit]:[this.indoorHit];}
  get bounds(){return this.active?{outdoor:true}:null;}
  set(values){this.eden.set(values);this.sync();}
  sync(){for(const key of ['energy','nature','dreaminess'])document.getElementById('eden-'+key).value=Math.round(this.eden.target[key]*100);}
  favorite(){const name=document.getElementById('eden-name').value.trim()||'My paradise';localStorage.setItem('sound-room-eden-favorite',JSON.stringify({name,settings:this.eden.target}));this.toast('Saved '+name);}
  loadFavorite(){try{const saved=JSON.parse(localStorage.getItem('sound-room-eden-favorite'));if(saved?.settings){this.set(saved.settings);document.getElementById('eden-name').value=saved.name||'My paradise';this.toast('Favorite restored.');}}catch{this.toast('No saved favorite yet.');}}
  open(outdoor){if(this.travel||this.active===outdoor)return;this.keys.clear();this.travel={outdoor,time:0};void this.ambience.start().catch(console.error);this.toast(outdoor?'Door opening to Inner Eden…':'Door opening to the bedroom…');}
  update(dt,time,xr,view){
    this.view=view;this.returnDoor.update(dt);
    if(this.travel){this.travel.time+=dt;if(this.travel.outdoor)this.hinge.rotation.y=THREE.MathUtils.lerp(this.hinge.rotation.y,-Math.PI*.48,1-Math.exp(-dt*6));
      if(this.travel.time>.7){const outside=this.travel.outdoor;this.travel=null;this.objects.cancelDrags();this.traces.cancel();this.traces.armed=false;this.active=outside;this.indoor.visible=!outside;this.outdoor.visible=outside;this.paused=false;this.ambience.active=outside;if(outside)this.returnDoor.reset();
        const position=outside?new THREE.Vector3(0,0,0):new THREE.Vector3(-3.85,0,-4.2);
        if(xr.renderer.xr.isPresenting){const head=xr.syncHead();xr.rig.position.x+=position.x-head.position.x;xr.rig.position.z+=position.z-head.position.z;xr.rig.position.y=0;xr.rig.rotation.y=Math.PI;xr.menu.visible=false;}
        else{this.camera.position.set(position.x,1.7,position.z);this.camera.rotation.set(-.04,Math.PI,0);}
        if(this.engine.master&&this.engine.ctx)this.engine.master.gain.setTargetAtTime(outside?0:.65,this.engine.ctx.currentTime,.4);
        if(!outside){this.scene.background=this.indoorStyle.background.clone();this.scene.fog=this.indoorStyle.fog?.clone();this.hinge.rotation.y=0;}
        document.body.classList.toggle('in-eden',outside);this.keys.clear();xr.buildMenu();this.toast(outside?'Inner Eden: shore, grove and overlook. Open EDEN controls.':'Welcome back to the bedroom.');
      }
    }
    if(this.active){this.traces.update(dt);this.eden.update(dt,time);this.status.textContent=this.paused?'Paused here — enjoy your favorite spot.':'Explore the shore, grove and overlook.';}
    this.ambience.update(view,this.eden.settings,time);
  }
  clamp(x,z){return this.active?islandBounds(x,z):{x:THREE.MathUtils.clamp(x,-5.35,5.35),z:THREE.MathUtils.clamp(z,-5.35,5.35)};}
  height(x,z){return this.active?islandHeight(x,z):0;}
}

import * as THREE from 'three';
import {thumbstick,samplePoint,validStroke} from './xr-math.js';
import {controlPages} from './controls-guide.js';
const colors=['#d6f48a','#8dc8e8','#f4b879','#f2a4cc','#ffffff'];
const MAX_POINTS=4096;
export class BedroomXR {
  constructor(api){
    Object.assign(this,api);this.mode='draw';this.color=0;this.width=.012;this.strokes=[];this.selected=null;this.controls=[];this.menuPage=0;this.soundPage=0;this.helpPage=0;this.panel=new URLSearchParams(globalThis.location?.search||'').has('controls')?'controls':'sound';this.snapReady=true;
    this.rig=new THREE.Group();this.scene.add(this.rig);this.ray=new THREE.Raycaster();this.floor=new THREE.Plane(new THREE.Vector3(0,1,0),0);
    this.worldHead=new THREE.PerspectiveCamera();this.position=new THREE.Vector3();this.rotation=new THREE.Quaternion();this.scale=new THREE.Vector3();
    this.renderer.xr.enabled=true;this.renderer.xr.setReferenceSpaceType('local-floor');this.renderer.xr.setFramebufferScaleFactor(.85);
    this.menu=new THREE.Group();this.scene.add(this.menu);this.menu.visible=false;
    this.buttons=[];this.textures=[];this.buildMenu();
    // A persistent, ray-clickable menu target remains available when the main panel is closed.
    this.menuDock=new THREE.Group();this.scene.add(this.menuDock);this.menuDock.visible=false;
    const dock=new THREE.Mesh(new THREE.PlaneGeometry(.3,.09),new THREE.MeshBasicMaterial({map:this.textTexture('MENU / SOUNDS','#466338'),side:THREE.DoubleSide,depthTest:false}));
    dock.renderOrder=100;dock.userData.action=()=>{this.panel='sound';this.buildMenu();this.showMenu();};this.menuDock.add(dock);this.dockButton=dock;
    this.cursor=new THREE.Mesh(new THREE.SphereGeometry(.012,10,8),new THREE.MeshBasicMaterial({color:'#ffffff',depthTest:false}));this.cursor.renderOrder=101;this.scene.add(this.cursor);this.cursor.visible=false;
    this.ink=new THREE.InstancedMesh(new THREE.CylinderGeometry(1,1,1,6),new THREE.MeshBasicMaterial(),MAX_POINTS);this.ink.instanceMatrix.setUsage(THREE.DynamicDrawUsage);this.ink.count=0;this.ink.frustumCulled=false;this.scene.add(this.ink);
    this.tip=new THREE.Mesh(new THREE.SphereGeometry(.018,10,8),new THREE.MeshBasicMaterial({color:colors[0]}));this.tip.visible=false;this.scene.add(this.tip);
    this.teleport=new THREE.Mesh(new THREE.RingGeometry(.18,.22,30),new THREE.MeshBasicMaterial({color:'#8dc8e8',side:THREE.DoubleSide}));this.teleport.rotation.x=-Math.PI/2;this.teleport.visible=false;this.scene.add(this.teleport);
    for(let i=0;i<2;i++){
      const controller=this.renderer.xr.getController(i);this.rig.add(controller);
      const beam=new THREE.Mesh(new THREE.BoxGeometry(.003,.003,1),new THREE.MeshBasicMaterial({color:'#d6f48a'}));beam.position.z=-.5;controller.add(beam);
      const grip=this.renderer.xr.getControllerGrip(i);this.rig.add(grip);
      const handle=new THREE.Mesh(new THREE.CapsuleGeometry(.025,.09,3,8),new THREE.MeshStandardMaterial({color:'#c9d5cf',roughness:.6}));handle.rotation.x=Math.PI/3;grip.add(handle);
      const data={controller,grip,beam,source:null,trigger:false,squeeze:false,buttons:[],stroke:null,floorPoints:null,held:null,hover:null};this.controls.push(data);
      controller.addEventListener('connected',e=>{data.source=e.data;});
      controller.addEventListener('disconnected',()=>{this.finish(data);data.source=null;data.trigger=false;data.squeeze=false;});
      controller.addEventListener('selectstart',()=>{data.trigger=true;this.press(data);});
      controller.addEventListener('selectend',()=>{data.trigger=false;this.finish(data);});
      controller.addEventListener('squeezestart',()=>{data.squeeze=true;this.grab(data);});
      controller.addEventListener('squeezeend',()=>{data.squeeze=false;data.held=null;this.saveLayout();});
    }
    try{const strokes=JSON.parse(localStorage.getItem('sound-room-xr-ink-v1'));if(Array.isArray(strokes)){let count=0;for(const stroke of strokes){if(!validStroke(stroke)||count+stroke.points.length>MAX_POINTS)continue;this.strokes.push(stroke);count+=stroke.points.length;}}}catch{}
    this.rebuildInk();
    this.renderer.xr.addEventListener('sessionstart',()=>this.begin());this.renderer.xr.addEventListener('sessionend',()=>this.end());
    const enter=document.getElementById('enter-vr');enter.disabled=true;
    if(navigator.xr&&isSecureContext)navigator.xr.isSessionSupported('immersive-vr').then(ok=>{enter.disabled=!ok;enter.textContent=ok?'Enter VR · Quest':'VR unavailable on this browser';}).catch(()=>{enter.textContent='VR unavailable';});
    else enter.textContent='Open in Quest Browser for VR';
    enter.onclick=()=>this.enter(enter);
  }
  async enter(button){
    button.disabled=true;
    try{
      // Request XR in the original click gesture; do not await audio first.
      const audio=this.startAudio();
      const session=await navigator.xr.requestSession('immersive-vr',{requiredFeatures:['local-floor'],optionalFeatures:['bounded-floor']});
      try{await audio;await this.renderer.xr.setSession(session);}catch(error){await session.end();throw error;}
    }catch(error){this.toast(`Could not enter VR: ${error.message}`);console.error(error);}finally{button.disabled=false;}
  }
  begin(){
    this.desktop={position:this.camera.position.clone(),quaternion:this.camera.quaternion.clone(),shadow:this.renderer.shadowMap.enabled};
    this.rig.position.set(this.camera.position.x,0,this.camera.position.z);this.rig.rotation.set(0,this.camera.rotation.y,0);
    this.rig.add(this.camera);this.camera.position.set(0,0,0);this.camera.quaternion.identity();this.renderer.shadowMap.enabled=false;this.renderer.xr.setFoveation(1);
    document.body.classList.add('in-xr');document.getElementById('library').close();document.getElementById('help-dialog').close();
    this.keys.clear();this.menuPending=true;this.syncHead();this.menuDock.visible=true;
  }
  end(){
    for(const data of this.controls){this.finish(data);data.held=null;data.trigger=false;data.squeeze=false;data.buttons=[];}
    this.scene.add(this.camera);if(this.desktop){this.camera.position.copy(this.desktop.position);this.camera.quaternion.copy(this.desktop.quaternion);this.renderer.shadowMap.enabled=this.desktop.shadow;}
    this.rig.position.set(0,0,0);this.rig.rotation.set(0,0,0);this.menu.visible=false;this.tip.visible=false;this.teleport.visible=false;this.menuDock.visible=false;this.cursor.visible=false;document.body.classList.remove('in-xr');this.keys.clear();
  }
  syncHead(){
    this.rig.updateMatrixWorld(true);this.renderer.xr.updateCamera(this.camera);
    const head=this.renderer.xr.getCamera();head.matrixWorld.decompose(this.position,this.rotation,this.scale);
    this.worldHead.position.copy(this.position);this.worldHead.quaternion.copy(this.rotation);this.worldHead.updateMatrixWorld();return this.worldHead;
  }
  showMenu(){
    const head=this.syncHead(),forward=new THREE.Vector3(0,0,-1).applyQuaternion(head.quaternion);forward.y=0;forward.normalize();
    this.menu.position.copy(head.position).addScaledVector(forward,1.55);this.menu.position.y=Math.max(1.25,head.position.y);
    this.menu.rotation.set(0,Math.atan2(forward.x,forward.z)+Math.PI,0);this.menu.visible=true;this.refreshMenu();
  }
  toggleMenu(){if(this.menu.visible)this.menu.visible=false;else this.showMenu();}
  textTexture(text,bg='#1e3036',fg='#e9eee5'){
    const canvas=document.createElement('canvas');canvas.width=768;canvas.height=96;const context=canvas.getContext('2d');context.fillStyle=bg;context.fillRect(0,0,768,96);context.fillStyle=fg;context.textAlign='center';context.textBaseline='middle';context.font='500 32px sans-serif';context.fillText(text,384,49,744);
    const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;return texture;
  }
  label(text,x,y,w,h,action,bg){
    const texture=this.textTexture(text,bg);this.textures.push(texture);
    const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide}));mesh.position.set(x,y,.015);this.menu.add(mesh);
    mesh.userData.label=text;if(action){mesh.userData.action=action;this.buttons.push(mesh);}return mesh;
  }
  buildMenu(){
    for(const child of [...this.menu.children]){child.geometry?.dispose();child.material?.dispose();this.menu.remove(child);}for(const t of this.textures)t.dispose();this.textures=[];this.buttons=[];
    const back=new THREE.Mesh(new THREE.PlaneGeometry(2.3,2.25),new THREE.MeshBasicMaterial({color:'#0d1b22',side:THREE.DoubleSide}));this.menu.add(back);
    this.label('SOUND ROOM / QUEST',0,1,2.15,.12);this.statusLabel=this.label('',0,.85,2.15,.1);
    ['sound','view','objects','controls'].forEach((panel,i)=>this.label(panel.toUpperCase(),(i-1.5)*.56,.67,.53,.14,()=>{this.panel=panel;this.buildMenu();},panel===this.panel?'#466338':'#1e3036'));
    if(this.panel==='controls'){
      const page=controlPages[this.helpPage];this.label(page.title,0,.44,2.15,.13,undefined,'#304d35');
      page.lines.forEach((line,i)=>this.label(line,0,.24-i*.16,2.15,.12));
      this.label('← Previous',-.57,-.59,1.05,.14,()=>{this.helpPage=(this.helpPage+controlPages.length-1)%controlPages.length;this.buildMenu();});
      this.label('Next →',.57,-.59,1.05,.14,()=>{this.helpPage=(this.helpPage+1)%controlPages.length;this.buildMenu();});
    }else if(this.panel==='sound'){
      const entries=this.soundEntries(),pages=Math.max(1,Math.ceil(entries.length/4));this.soundPage%=pages;
      entries.slice(this.soundPage*4,this.soundPage*4+4).forEach((item,i)=>{
        const y=.43-i*.25,input=item.row.querySelector('input'),percent=input?input.value:0;
        this.label(item.name+' '+percent+'%',-.45,y,1.2,.18,()=>{this.selected=item;this.refreshMenu();});
        const muted=item.muted??item.player?.muted;
        this.label(muted?'Play':'Mute',.36,y,.34,.18,()=>{item.row.querySelector('.mute,.trace-mute')?.click();this.buildMenu();});
        this.label('−',.68,y,.23,.18,()=>{this.volumeItem(item,-10);this.buildMenu();});
        this.label('+',.96,y,.23,.18,()=>{this.volumeItem(item,10);this.buildMenu();});
      });
      if(!entries.length)this.label('Add a sound object in OBJECTS',0,.3,2.1,.15);
      this.label('More sounds →',-.57,-.59,1.05,.14,()=>{this.soundPage=(this.soundPage+1)%pages;this.buildMenu();});
      this.label(this.engine.playing?'Pause all':'Play all',.57,-.59,1.05,.14,()=>{this.toggleAudio?.();});
    }else if(this.panel==='view'){
      this.label('Turn left',-.57,.43,1.05,.17,()=>{this.turn(Math.PI/6);this.showMenu();});
      this.label('Turn right',.57,.43,1.05,.17,()=>{this.turn(-Math.PI/6);this.showMenu();});
      this.label('Closer / zoom in',-.57,.19,1.05,.17,()=>{this.dolly(.6);this.showMenu();});
      this.label('Further / zoom out',.57,.19,1.05,.17,()=>{this.dolly(-.6);this.showMenu();});
      this.label('Smaller menu',-.57,-.05,1.05,.17,()=>{this.menu.scale.multiplyScalar(.85).clampScalar(.5,1.4);this.showMenu();});
      this.label('Larger menu',.57,-.05,1.05,.17,()=>{this.menu.scale.multiplyScalar(1.15).clampScalar(.5,1.4);this.showMenu();});
      this.label('Recenter view & menu',0,-.29,2.15,.17,()=>this.showMenu());
      this.label('Undo ink',-.57,-.52,1.05,.14,()=>this.undo());
      this.label('Clear ink',.57,-.52,1.05,.14,()=>{for(const data of this.controls)if(data.stroke)this.finish(data);this.clearBackup=this.strokes.slice();this.strokes=[];this.rebuildInk();this.saveInk();});
    }else{
      const page=this.catalog.slice(this.menuPage*6,this.menuPage*6+6);
      page.forEach((item,i)=>this.label('+ '+item.name,(i%2-.5)*1.12,.43-Math.floor(i/2)*.17,1.05,.14,()=>{
        const head=this.syncHead(),forward=new THREE.Vector3(0,0,-1).applyQuaternion(head.quaternion);forward.y=0;forward.normalize();const p=head.position.clone().addScaledVector(forward,2.8);const source=this.addObject(item.type,{x:p.x,z:p.z});if(source)this.selected=source;this.refreshMenu();
      }));
      this.label('More objects →',0,-.1,2.15,.13,()=>{this.menuPage=(this.menuPage+1)%Math.ceil(this.catalog.length/6);this.buildMenu();});
      this.label('Rotate',-.57,-.3,1.05,.14,()=>this.selected?.row.querySelector('.rotate')?.click());
      this.label('Remove',.57,-.3,1.05,.14,()=>{if(this.selected&&!this.selected.player){this.removeObject(this.selected);this.selected=null;this.refreshMenu();}});
      this.label('Studio / Cathedral',0,-.5,2.15,.14,()=>{this.setPreset(this.engine.preset==='studio'?'cathedral':'studio');this.refreshMenu();});
    }
    this.label('Mode: '+this.mode.toUpperCase(),-.75,-.78,.68,.14,()=>this.cycleMode(),'#466338');
    this.label('Color / sound',0,-.78,.68,.14,()=>{this.color=(this.color+1)%colors.length;this.traceSound=(this.traceSound+1)%this.soundChoices.length;this.tip.material.color.set(colors[this.color]);this.refreshMenu();});
    this.label('Close',.75,-.78,.68,.14,()=>{this.menu.visible=false;});
    this.label('Sticks work with menu open · A / stick click: menu',0,-.96,2.15,.08);
    this.label('B: mode · X: undo · L trigger: teleport · Grip: move',0,-1.07,2.15,.08);this.refreshMenu();
  }
  soundEntries(){return [...(this.getSources?.()||[]).filter(s=>s.sound),...(this.getTraces?.()||[]).map(t=>({...t,name:(this.soundChoices.find(s=>s.sound===t.sound)?.name||t.sound)+' trace'}))];}
  cycleMode(){this.mode=this.mode==='draw'?'trace':this.mode==='trace'?'move':'draw';this.buildMenu();}
  volumeItem(item,delta){const input=item.row.querySelector('input');if(input){input.value=Math.max(0,Math.min(100,Number(input.value)+delta));input.dispatchEvent(new Event('input'));}}
  turn(angle){const head=this.syncHead().position.clone(),q=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),angle);this.rig.position.sub(head).applyQuaternion(q).add(head);this.rig.quaternion.premultiply(q);}
  dolly(distance){const head=this.syncHead(),forward=new THREE.Vector3(0,0,-1).applyQuaternion(head.quaternion);forward.y=0;forward.normalize();this.rig.position.addScaledVector(forward,distance);this.clampPosition();}
  clampPosition(){const head=this.syncHead();this.rig.position.x+=THREE.MathUtils.clamp(head.position.x,-5.35,5.35)-head.position.x;this.rig.position.z+=THREE.MathUtils.clamp(head.position.z,-5.35,5.35)-head.position.z;}
  hitUI(data){this.controllerRay(data);const targets=this.menu.visible?[...this.buttons]:[];if(this.menuDock.visible)targets.push(this.dockButton);this.menu.updateWorldMatrix(true,true);this.menuDock.updateWorldMatrix(true,true);return this.ray.intersectObjects(targets)[0];}
  refreshMenu(){
    if(!this.statusLabel)return;const text=`${this.mode.toUpperCase()} | ${this.selected?.name||'No object selected'} | ${this.engine.preset} | trace: ${this.soundChoices[this.traceSound]?.name||'Bird'}`;
    const old=this.statusLabel.material.map;const texture=this.textTexture(text,'#243e43');this.statusLabel.material.map=texture;const index=this.textures.indexOf(old);if(index>=0)this.textures[index]=texture;old.dispose();
  }
  volume(delta){if(!this.selected)return;const input=this.selected.row.querySelector('input');if(input){input.value=Number(input.value)+delta;input.dispatchEvent(new Event('input'));this.refreshMenu();}}
  controllerRay(data){data.controller.updateWorldMatrix(true,false);const origin=new THREE.Vector3().setFromMatrixPosition(data.controller.matrixWorld),direction=new THREE.Vector3(0,0,-1).transformDirection(data.controller.matrixWorld);this.ray.set(origin,direction);return this.ray;}
  floorPoint(data){const point=new THREE.Vector3();return this.controllerRay(data).ray.intersectPlane(this.floor,point)&&this.ray.ray.origin.distanceTo(point)<15&&Math.abs(point.x)<5.7&&Math.abs(point.z)<5.7?point:null;}
  press(data){
    const button=this.hitUI(data);
    if(button){button.object.userData.action();return;}
    if(this.menu.visible)return;
    if(data.source?.handedness==='left'){data.teleporting=true;return;}
    if(this.mode==='move'){this.grab(data);return;}
    if(this.mode==='trace'){data.floorPoints=[];return;}
    if(this.inkPointCount>=MAX_POINTS)return;
    data.stroke={color:colors[this.color],width:this.width,points:[]};this.strokes.push(data.stroke);
  }
  grab(data){
    if(this.menu.visible)return;this.controllerRay(data);const hit=this.ray.intersectObjects(this.pickables).find(h=>!h.object.userData.source?.removed);
    if(hit){data.held=hit.object.userData.source;this.selected=data.held;this.refreshMenu();}
  }
  finish(data){
    if(data.teleporting){const target=this.floorPoint(data);if(target){const head=this.syncHead();this.rig.position.x+=target.x-head.position.x;this.rig.position.z+=target.z-head.position.z;}data.teleporting=false;}
    if(data.floorPoints?.length>=2)this.addFloorTrace(this.soundChoices[this.traceSound].sound,data.floorPoints);data.floorPoints=null;
    if(data.stroke){if(data.stroke.points.length<2)this.strokes=this.strokes.filter(s=>s!==data.stroke);data.stroke=null;this.rebuildInk();this.saveInk();}
    if(data.held&&!data.squeeze){data.held=null;this.saveLayout();}
  }
  undo(){for(const data of this.controls)if(data.stroke)this.finish(data);if(this.strokes.length)this.strokes.pop();else if(this.clearBackup){this.strokes=this.clearBackup;this.clearBackup=null;}this.rebuildInk();this.saveInk();}
  saveInk(){try{localStorage.setItem('sound-room-xr-ink-v1',JSON.stringify(this.strokes.filter(s=>s.points.length>=2)));}catch{this.toast('Drawing storage is full.');}}
  rebuildInk(){
    let index=0;this.inkPointCount=0;const y=new THREE.Vector3(0,1,0),matrix=new THREE.Matrix4(),q=new THREE.Quaternion();
    for(const stroke of this.strokes){this.inkPointCount+=stroke.points.length;for(let i=1;i<stroke.points.length&&index<MAX_POINTS;i++){
      const a=new THREE.Vector3(...stroke.points[i-1]),b=new THREE.Vector3(...stroke.points[i]),delta=b.clone().sub(a),length=delta.length();if(length<.001)continue;
      q.setFromUnitVectors(y,delta.divideScalar(length));matrix.compose(a.add(b).multiplyScalar(.5),q,new THREE.Vector3(stroke.width,length,stroke.width));this.ink.setMatrixAt(index,matrix);this.ink.setColorAt(index,new THREE.Color(stroke.color));index++;
    }}this.ink.count=index;this.ink.instanceMatrix.needsUpdate=true;if(this.ink.instanceColor)this.ink.instanceColor.needsUpdate=true;
  }
  update(dt){
    if(!this.renderer.xr.isPresenting)return this.camera;
    const liveSources=Array.from(this.renderer.xr.getSession?.()?.inputSources||[]);
    for(let i=0;i<this.controls.length;i++){const data=this.controls[i];const current=liveSources.find(source=>source.handedness===data.source?.handedness)||liveSources[i];if(current)data.source=current;}
    this.syncHead();if(this.menuPending&&this.renderer.xr.getFrame()?.getViewerPose(this.renderer.xr.getReferenceSpace())){this.menuPending=false;this.showMenu();}
    const forward=new THREE.Vector3(0,0,-1).applyQuaternion(this.worldHead.quaternion);forward.y=0;forward.normalize();
    let inkChanged=false;this.teleport.visible=false;this.tip.visible=false;
    for(const data of this.controls){
      if(!data.source)continue;const gamepad=data.source.gamepad,[x,y]=thumbstick(gamepad),left=data.source.handedness==='left';
      if(left){const right=new THREE.Vector3().crossVectors(forward,new THREE.Vector3(0,1,0));this.rig.position.addScaledVector(forward,-y*dt*1.6).addScaledVector(right,x*dt*1.6);}
      if(!left){if(Math.abs(x)<.3)this.snapReady=true;if(Math.abs(x)>.75&&this.snapReady){this.turn(-Math.sign(x)*Math.PI/6);this.snapReady=false;}}
      const buttons=gamepad?.buttons||[];for(const [index,action] of [[3,()=>this.toggleMenu()],[4,left?()=>this.undo():()=>this.toggleMenu()],[5,left?()=>{this.color=(this.color+1)%colors.length;this.tip.material.color.set(colors[this.color]);}:()=>this.cycleMode()]]){
        const pressed=!!buttons[index]?.pressed;if(pressed&&!data.buttons[index])action();data.buttons[index]=pressed;
      }
      if(data.hover)data.hover.material.color.set('#ffffff');const hit=this.hitUI(data);data.hover=hit?.object||null;if(data.hover)data.hover.material.color.set('#d6f48a');
      data.beam.scale.z=hit?hit.distance:4;data.beam.position.z=-data.beam.scale.z/2;
      if(!left){this.cursor.visible=true;this.cursor.position.copy(hit?hit.point:this.ray.ray.at(2,new THREE.Vector3()));}
      if(data.held&&(data.squeeze||data.trigger)&&!this.menu.visible){const point=this.floorPoint(data);if(point)this.move(data.held,point.x,point.z);}
      if(data.teleporting){const point=this.floorPoint(data);if(point){this.teleport.visible=true;this.teleport.position.set(point.x,.025,point.z);}}
      if(data.floorPoints&&data.trigger){const point=this.floorPoint(data);if(point){const last=data.floorPoints.at(-1);if(!last||Math.hypot(last[0]-point.x,last[1]-point.z)>.14)if(data.floorPoints.length<120)data.floorPoints.push([point.x,point.z]);this.teleport.visible=true;this.teleport.position.set(point.x,.03,point.z);}}
      if(!left&&!this.menu.visible&&this.mode==='draw'){
        data.grip.updateWorldMatrix(true,false);const point=new THREE.Vector3(0,0,-.12).applyMatrix4(data.grip.matrixWorld);this.tip.visible=true;this.tip.position.copy(point);
        if(data.stroke&&data.trigger&&this.inkPointCount<MAX_POINTS&&Math.abs(point.x)<5.8&&Math.abs(point.z)<5.8&&point.y>.05&&point.y<8){if(samplePoint(data.stroke.points,point.toArray())){this.inkPointCount++;inkChanged=true;}}
      }
    }
    this.clampPosition();const head=this.syncHead();this.menuDock.position.set(-.26,-.24,-.65).applyQuaternion(head.quaternion).add(head.position);this.menuDock.quaternion.copy(head.quaternion);
    if(inkChanged)this.rebuildInk();return this.syncHead();
  }
}
BedroomXR.prototype.traceSound=0;

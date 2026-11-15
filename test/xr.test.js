import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {deadzone,thumbstick,samplePoint,validStroke} from '../src/xr-math.js';
import {BedroomXR} from '../src/webxr.js';
import {catalog,bedroom,buildObject} from '../src/objects.js';
import {existsSync,readFileSync,readdirSync} from 'node:fs';
test('Quest sticks use xr-standard axes with drift suppression',()=>{assert.equal(deadzone(.1),0);assert.deepEqual(thumbstick({axes:[0,0,1,-1]}),[1,-1]);assert.deepEqual(thumbstick({axes:[0,0]}),[0,0]);});
test('stroke sampling is bounded and restored data must be finite',()=>{const points=[];assert.ok(samplePoint(points,[0,1,0]));assert.equal(samplePoint(points,[.001,1,0]),false);assert.ok(samplePoint(points,[.1,1,0]));assert.ok(validStroke({color:'#d6f48a',width:.012,points}));assert.equal(validStroke({color:'#d6f48a',width:.012,points:[[NaN,0,0],[0,0,0]]}),false);assert.equal(samplePoint(points,[1,1,0],.01,2),false);});
test('every public sound is a bundled original WAV, with no private runtime dependency',()=>{
 for(const item of catalog)if(item.sound)assert.ok(existsSync(`src/audio/${item.sound}.wav`),item.sound);
 for(const item of bedroom)assert.ok(catalog.some(c=>c.type===item.type));
 assert.ok(!JSON.stringify(JSON.parse(readFileSync('package.json'))).includes('satie-runtime'));
 assert.ok(!existsSync('src/.satie'));assert.ok(!existsSync('src/satie'));
});
function setup(extra={}){
 const canvas=()=>({width:0,height:0,getContext:()=>({fillRect(){},fillText(){},set fillStyle(v){},set font(v){},set textAlign(v){},set textBaseline(v){}})});
 const button={disabled:false,textContent:'',onclick:null,close(){}};
 globalThis.document={createElement:()=>canvas(),getElementById:()=>button,body:{classList:{add(){},remove(){}}}};
 Object.defineProperty(globalThis,'navigator',{configurable:true,value:{}});globalThis.isSecureContext=true;globalThis.localStorage={getItem:()=>null,setItem(){}};
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera();camera.position.set(0,1.7,5);scene.add(camera);
 const controllers=[new THREE.Group(),new THREE.Group()],grips=[new THREE.Group(),new THREE.Group()];
 const head=new THREE.PerspectiveCamera();head.position.set(0,1.7,5);head.updateMatrixWorld();
 const xr={enabled:false,isPresenting:false,setReferenceSpaceType(){},setFramebufferScaleFactor(){},getController:i=>controllers[i],getControllerGrip:i=>grips[i],addEventListener(){},updateCamera(){head.updateMatrixWorld();},getCamera:()=>head,setFoveation(){},getFrame:()=>null};
 const renderer={xr,shadowMap:{enabled:true}};
 return new BedroomXR({scene,camera,renderer,engine:{preset:'studio'},keys:new Set(),catalog,soundChoices:catalog.filter(i=>i.sound),pickables:[],toast(){},saveLayout(){},addObject(){},removeObject(){},move(){},setPreset(){},startAudio(){},addFloorTrace(){},...extra});
}
test('VR menu initializes, controller draw makes mesh instances, undo and session exit clean up',()=>{
 const app=setup();assert.ok(app.buttons.some(b=>b.userData.label==='SOUND'));assert.equal(app.mode,'draw');
 const data=app.controls[0];data.source={handedness:'right'};app.press(data);assert.ok(data.stroke);
 data.stroke.points.push([0,1,0],[.2,1,0],[.3,1.1,0]);app.finish(data);assert.equal(app.ink.count,2);assert.equal(app.strokes.length,1);
 app.undo();assert.equal(app.ink.count,0);assert.equal(app.strokes.length,0);
 const position=app.camera.position.clone();app.begin();assert.equal(app.camera.parent,app.rig);app.end();assert.equal(app.camera.parent,app.scene);assert.deepEqual(app.camera.position.toArray(),position.toArray());assert.equal(app.menu.visible,false);
});
test('open menu does not lock walking or snap turns',()=>{
 const app=setup();app.renderer.xr.isPresenting=true;app.menu.visible=true;
 app.controls[0].source={handedness:'left',gamepad:{axes:[0,0,0,-1],buttons:[]}};
 app.update(.1);assert.ok(app.rig.position.z<0);
 app.controls[0].source.gamepad.axes=[0,0,0,0];app.controls[1].source={handedness:'right',gamepad:{axes:[0,0,1,0],buttons:[]}};
 app.update(.1);assert.ok(Math.abs(app.rig.quaternion.y)>.1);
});
test('visible view buttons turn and dolly, and menu dock stays available',()=>{
 const app=setup();app.panel='view';app.buildMenu();
 const get=label=>app.buttons.find(b=>b.userData.label===label);
 assert.ok(get('Closer / zoom in'));get('Turn right').userData.action();assert.ok(Math.abs(app.rig.quaternion.y)>.1);
 const before=app.rig.position.clone();get('Closer / zoom in').userData.action();assert.ok(app.rig.position.distanceTo(before)>.5);
 app.menuDock.visible=true;app.menu.visible=false;app.dockButton.userData.action();assert.equal(app.panel,'sound');assert.equal(app.menu.visible,true);
});
test('sound panel provides mute and volume controls for room sources',()=>{
 let muted=false;const input={value:30,dispatchEvent(){}};const row={querySelector(selector){return selector==='input'?input:{click(){muted=!muted;}};}};
 const app=setup({getSources:()=>[{name:'Bird',sound:'bird',row,muted:false}],getTraces:()=>[]});
 app.buttons.find(b=>b.userData.label==='Mute').userData.action();assert.equal(muted,true);
 app.buttons.find(b=>b.userData.label==='+').userData.action();assert.equal(input.value,40);
});
test('in-headset controls guide navigates all four pages',()=>{
 const app=setup();app.panel='controls';app.buildMenu();
 assert.ok(app.menu.children.some(m=>m.userData.label==='1 / MOVE & LOOK'));
 app.buttons.find(b=>b.userData.label==='Next →').userData.action();assert.equal(app.helpPage,1);
 app.buttons.find(b=>b.userData.label==='← Previous').userData.action();assert.equal(app.helpPage,0);
 app.buttons.find(b=>b.userData.label==='← Previous').userData.action();assert.equal(app.helpPage,3);
 assert.ok(app.menu.children.some(m=>m.userData.label==='4 / SOUNDS & TRACES'));
});
test('menu textures keep the same aspect ratio as their geometry',()=>{
 const app=setup();for(const mesh of app.menu.children.filter(m=>m.material.map)){
  const {width,height}=mesh.geometry.parameters,canvas=mesh.material.map.image;assert.ok(Math.abs(canvas.width/canvas.height-width/height)<.02,mesh.userData.label);
 }
 assert.ok(Math.abs(app.dockButton.material.map.image.width/app.dockButton.material.map.image.height-4)<.02);
});
test('next trace sound and saved trace sound can be configured independently',()=>{
 const trace={id:'t1',sound:'bird',points:[[0,0],[1,1]],row:{querySelector:()=>({value:30})}};let next=null;const originalPoints=JSON.stringify(trace.points);
 const app=setup({getTraces:()=>[trace],setNextTraceSound:sound=>next=sound,changeTraceSound:(t,sound)=>{t.sound=sound;}});
 app.panel='traces';app.buildMenu();const originalNext=app.traceSound;
 app.buttons.find(b=>b.userData.label==='Track →').userData.action();assert.notEqual(trace.sound,'bird');assert.equal(app.traceSound,originalNext);assert.equal(JSON.stringify(trace.points),originalPoints);
 const saved=trace.sound;app.buttons.find(b=>b.userData.label==='Next sound →').userData.action();assert.equal(next,app.soundChoices[app.traceSound].sound);assert.equal(trace.sound,saved);
 const soundIndex=app.traceSound;app.buttons.find(b=>b.userData.label==='Ink color').userData.action();assert.equal(app.traceSound,soundIndex);
});
test('public build uses relative URLs and contains all clips',()=>{
 if(!existsSync('dist/index.html'))return;
 const html=readFileSync('dist/index.html','utf8');assert.ok(!html.includes('src="/assets/'));
 for(const file of readdirSync('src/audio').filter(f=>f.endsWith('.wav')))assert.ok(existsSync(`dist/audio/${file}`));
});

test('outdoor sound menu uses courtyard channels with working volume and mute',()=>{
 let level=.5,muted=false;const ambience={channels:()=>[{id:'birds',label:'Garden birds',level,muted}],setChannel:(id,value)=>{assert.equal(id,'birds');level=value;},toggleChannel:()=>{muted=!muted;}};
 const app=setup({getParadise:()=>({active:true,ambience})});assert.equal(app.soundEntries()[0].outdoor,true);app.buttons.find(b=>b.userData.label==='+').userData.action();assert.equal(level,.6);app.buttons.find(b=>b.userData.label==='Mute').userData.action();assert.equal(muted,true);
});

test('outdoor objects tab adds outdoor sources without calling indoor catalog',()=>{
 let added=null;const objects={add:type=>{added=type;},selected:null};const ambience={channels:()=>[]};const app=setup({getParadise:()=>({active:true,objects,ambience})});app.panel='objects';app.buildMenu();app.buttons.find(b=>b.userData.label==='+ Small fountain').userData.action();assert.equal(added,'fountain');assert.ok(app.buttons.some(b=>b.userData.label==='Point + hold grip to drag'));
});

test('outdoor trace menu starts right-trigger drawing and release finishes outdoors only',()=>{
 let begun=0,finished=0,indoor=0;const traces={renderVR(button,draw){button('Draw outdoor trace',0,0,1,.2,draw);},begin(){begun++;return true;},finish(){finished++;}};const app=setup({getParadise:()=>({active:true,traces,ambience:{channels:()=>[]}}),addFloorTrace:()=>indoor++});app.panel='traces';app.buildMenu();app.buttons.find(b=>b.userData.label==='Draw outdoor trace').userData.action();assert.equal(app.mode,'trace');assert.equal(app.menu.visible,false);app.hitUI=()=>null;const data=app.controls[1];data.source={handedness:'right'};app.press(data);assert.equal(begun,1);assert.equal(data.outdoorTrace,true);app.finish(data);assert.equal(finished,1);assert.equal(indoor,0);assert.equal(data.outdoorTrace,false);
});

test('Quest grip starts outdoor drag and release clears it independently of indoor movement',()=>{
 let grabbed=null,released=null;const objects={beginDrag:(ray,owner)=>{grabbed=owner;return true;},endDrag:owner=>released=owner};const app=setup({getParadise:()=>({active:true,objects,ambience:{channels:()=>[]}})});app.menu.visible=false;const data=app.controls[1];data.controller.dispatchEvent({type:'squeezestart'});assert.equal(grabbed,data);assert.equal(data.outdoorDrag,true);data.controller.dispatchEvent({type:'squeezeend'});assert.equal(released,data);assert.equal(data.outdoorDrag,false);
});

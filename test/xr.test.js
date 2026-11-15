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
test('public build uses relative URLs and contains all clips',()=>{
 if(!existsSync('dist/index.html'))return;
 const html=readFileSync('dist/index.html','utf8');assert.ok(!html.includes('src="/assets/'));
 for(const file of readdirSync('src/audio').filter(f=>f.endsWith('.wav')))assert.ok(existsSync(`dist/audio/${file}`));
});

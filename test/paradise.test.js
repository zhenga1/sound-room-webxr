import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {moods,personalize,islandBounds,islandHeight,buildParadise,createDoor} from '../src/paradise-world.js';
import {createCourtyard} from '../src/partner-courtyard.js';
import {ParadisePortal} from '../src/paradise-portal.js';
function dom(){const elements=new Map();globalThis.document={body:{classList:{toggle(){}}},querySelectorAll:()=>[],createElement:()=>({width:0,height:0,getContext:()=>({fillRect(){},fillText(){}})}),getElementById:id=>{if(!elements.has(id))elements.set(id,{value:'',textContent:'',close(){},showModal(){}});return elements.get(id);}};}
test('creative prompts select bounded existing settings and island stays traversable',()=>{
 assert.equal(personalize('free and curious','island with glowing forests').dreaminess,.9);assert.equal(personalize('free','forest').nature,.95);
 for(const settings of Object.values(moods))for(const value of Object.values(settings))assert.ok(value>=0&&value<=1);
 const edge=islandBounds(100,100);assert.ok((edge.x/13)**2+((edge.z-10)/18)**2<1.00001);assert.equal(islandHeight(0,0),0);assert.equal(islandHeight(-8,21),1.5);
});
test('original courtyard hosts remain and brighter paradise geometry is added around them',()=>{
 dom();const scene=new THREE.Scene();scene.background=new THREE.Color('#123456');scene.fog=new THREE.FogExp2('#123456',.02);const courtyard=createCourtyard();scene.add(courtyard.root);
 for(const name of ['central_fountain','entrance_hedge','back_hedge','outer_shrub','left_lantern','right_lantern'])assert.ok(courtyard.root.getObjectByName(name),name);
 const eden=buildParadise(scene,courtyard.hosts);eden.set(moods.wonder);eden.update(1,10);assert.ok(eden.root.children.length>40);assert.ok(scene.background.r>.5);assert.equal(scene.fog.density,.006);
});
test('doors animate and reset without navigating twice automatically',()=>{
 dom();let count=0;const door=createDoor(new THREE.Group(),{onOpen:()=>count++});door.open();door.update(1);assert.equal(count,1);assert.ok(door.leaf.rotation.y<-.5);door.reset();assert.equal(door.opened,false);assert.equal(door.leaf.rotation.y,0);
});
test('bedroom door changes worlds and return restores the same indoor scene',()=>{
 dom();const scene=new THREE.Scene();scene.background=new THREE.Color('#172329');scene.fog=new THREE.FogExp2('#172329',.045);
 const camera=new THREE.PerspectiveCamera(),door=new THREE.Group();scene.add(door);for(let i=0;i<14;i++)door.add(new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial()));
 const portal=new ParadisePortal({scene,camera,door,engine:{},sources:[],toast(){},keys:new Set()});portal.ambience.start=async()=>{};
 const xr={renderer:{xr:{isPresenting:false}},buildMenu(){}};
 portal.open(true);portal.update(1,1,xr,camera);assert.ok(portal.active);assert.equal(portal.indoor.visible,false);assert.equal(portal.outdoor.visible,true);
 portal.open(false);portal.update(1,2,xr,camera);assert.equal(portal.active,false);assert.equal(portal.indoor.visible,true);assert.equal(scene.background.getHexString(),'172329');
});

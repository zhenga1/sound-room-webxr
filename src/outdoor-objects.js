import * as THREE from 'three';
import {islandBounds,islandHeight} from './paradise-world.js';
export const outdoorObjects=[
 {type:'fountain',name:'Small fountain',sound:'fountain'},
 {type:'birdhouse',name:'Birdhouse',sound:'birds'},
 {type:'tree',name:'Leafy tree',sound:'grove-leaves'},
 {type:'hedge',name:'Rustling hedge',sound:'entrance-leaves'},
 {type:'stream',name:'Water garden',sound:'stream'},
 {type:'waves',name:'Wave pool',sound:'shore'},
 {type:'breeze',name:'Breeze sculpture',sound:'wind'},
 {type:'chimes',name:'Wind chimes',sound:'chimes'},
 {type:'flowers',name:'Cricket meadow',sound:'insects'}
];
export class OutdoorObjects{
 constructor(root,audio,getView){this.root=root;this.audio=audio;this.getView=getView;this.items=[];this.selected=null;this.drags=new Map();}
 ahead(){const view=this.getView(),p=new THREE.Vector3(),q=new THREE.Quaternion();view.getWorldPosition(p);view.getWorldQuaternion(q);const f=new THREE.Vector3(0,0,-1).applyQuaternion(q);f.y=0;f.normalize();p.addScaledVector(f,2.8);return islandBounds(p.x,p.z);}
 add(type,position=this.ahead()){
  const definition=outdoorObjects.find(item=>item.type===type);if(!definition)return null;const p=islandBounds(position.x,position.z),base=islandHeight(p.x,p.z),voice=this.audio.addInstance(definition.sound,{...p,y:base+1});if(!voice)return null;
  const group=new THREE.Group();group.name=definition.name;group.position.set(p.x,base,p.z);this.root.add(group);
  const mesh=(geometry,color,x,y,z)=>{const item=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color,roughness:.7}));item.position.set(x,y,z);group.add(item);return item;};
  const pole=()=>mesh(new THREE.CylinderGeometry(.06,.09,1.6,8),'#af865b',0,.8,0);
  if(['fountain','stream','waves'].includes(type)){mesh(new THREE.CylinderGeometry(.7,.65,.3,24),'#b6b09b',0,.15,0);mesh(new THREE.CylinderGeometry(.61,.61,.035,24),'#5ec9d3',0,.32,0);if(type==='fountain'){mesh(new THREE.CylinderGeometry(.1,.18,.6,12),'#d4c5a2',0,.6,0);mesh(new THREE.SphereGeometry(.22,12,8),'#9ce2ed',0,.98,0);}}
  else if(type==='tree'||type==='hedge'){pole();mesh(new THREE.SphereGeometry(type==='tree'?.85:.65,12,8),'#64b76e',0,type==='tree'?1.9:.75,0);}
  else if(type==='birdhouse'){pole();mesh(new THREE.BoxGeometry(.55,.5,.4),'#e9ba79',0,1.65,0);const roof=mesh(new THREE.ConeGeometry(.47,.35,4),'#b95643',0,2.05,0);roof.rotation.y=Math.PI/4;mesh(new THREE.SphereGeometry(.1,12,8),'#263e37',0,1.7,.21);}
  else if(type==='chimes'){pole();mesh(new THREE.BoxGeometry(.9,.08,.15),'#d6bb7b',0,1.8,0);for(let i=0;i<5;i++)mesh(new THREE.CylinderGeometry(.035,.035,.45+i*.08,8),'#e6d89e',(i-2)*.17,1.4,0);}
  else if(type==='breeze'){pole();const ring=mesh(new THREE.TorusGeometry(.45,.055,8,20),'#a9d7cd',0,1.7,0);ring.rotation.y=.4;}
  else{mesh(new THREE.CylinderGeometry(.65,.7,.2,16),'#8c794e',0,.1,0);for(let i=0;i<9;i++){const a=i*2.4;mesh(new THREE.SphereGeometry(.14,8,6),i%2?'#fff1a5':'#e2a2c2',Math.cos(a)*.45,.4+(i%3)*.1,Math.sin(a)*.45);}}
  const item={...voice,type,name:definition.name,group};this.items.push(item);this.selected=item;this.audio.changed();void this.audio.start().catch(console.error);return item;
 }
 move(id,x,z){const item=this.items.find(item=>item.id===id);if(!item||!Number.isFinite(x)||!Number.isFinite(z))return;const p=islandBounds(x,z),y=islandHeight(p.x,p.z);item.group.position.set(p.x,y,p.z);Object.assign(item,{x:p.x,y:y+1,z:p.z});this.audio.moveInstance(id,p.x,y+1,p.z);}
 beginDrag(ray,owner){if(this.drags.has(owner))return false;this.root.updateWorldMatrix(true,true);const hit=ray.intersectObjects(this.items.map(item=>item.group),true).find(hit=>hit.distance<=60);if(!hit)return false;const item=this.items.find(item=>{let node=hit.object;while(node){if(node===item.group)return true;node=node.parent;}return false;});if(!item||[...this.drags.values()].some(d=>d.item===item))return false;
  const materials=[];item.group.traverse(mesh=>{if(mesh.material?.emissive){materials.push({material:mesh.material,color:mesh.material.emissive.clone(),intensity:mesh.material.emissiveIntensity});mesh.material.emissive.set('#a6d66a');mesh.material.emissiveIntensity=.35;}});const plane=new THREE.Plane(new THREE.Vector3(0,1,0),-hit.point.y);this.drags.set(owner,{item,plane,offset:new THREE.Vector2(item.group.position.x-hit.point.x,item.group.position.z-hit.point.z),materials});this.selected=item;return true;
 }
 drag(ray,owner){const data=this.drags.get(owner);if(!data)return false;const point=new THREE.Vector3();if(!ray.ray.intersectPlane(data.plane,point)||point.distanceTo(ray.ray.origin)>100)return false;this.move(data.item.id,point.x+data.offset.x,point.z+data.offset.y);return true;}
 endDrag(owner){const data=this.drags.get(owner);if(!data)return;for(const {material,color,intensity} of data.materials){material.emissive.copy(color);material.emissiveIntensity=intensity;}this.drags.delete(owner);}
 cancelDrags(){for(const owner of [...this.drags.keys()])this.endDrag(owner);}
 bindDesktop(canvas,camera,isActive){const ray=new THREE.Raycaster();let pointer=null,suppressClick=false;const setRay=e=>{const rect=canvas.getBoundingClientRect();camera.updateWorldMatrix(true,false);ray.setFromCamera(new THREE.Vector2((e.clientX-rect.left)/rect.width*2-1,1-(e.clientY-rect.top)/rect.height*2),camera);};
  canvas.addEventListener('pointerdown',e=>{if(e.button!==0||pointer!==null||!isActive())return;setRay(e);if(!this.beginDrag(ray,'mouse'))return;if(document.pointerLockElement===canvas)document.exitPointerLock();pointer=e.pointerId;canvas.setPointerCapture(pointer);canvas.style.cursor='grabbing';e.preventDefault();e.stopImmediatePropagation();},true);
  canvas.addEventListener('pointermove',e=>{if(pointer!==e.pointerId)return;if(!isActive()){cancel();return;}setRay(e);this.drag(ray,'mouse');e.preventDefault();e.stopImmediatePropagation();},true);
  const cancel=()=>{this.endDrag('mouse');const previous=pointer;pointer=null;if(previous!==null&&canvas.hasPointerCapture?.(previous))canvas.releasePointerCapture(previous);canvas.style.cursor='';};
  canvas.addEventListener('pointerup',e=>{if(pointer!==e.pointerId)return;setRay(e);this.drag(ray,'mouse');suppressClick=true;cancel();e.preventDefault();e.stopImmediatePropagation();},true);
  canvas.addEventListener('pointercancel',cancel,true);canvas.addEventListener('lostpointercapture',cancel,true);window.addEventListener('blur',cancel);document.addEventListener('visibilitychange',()=>{if(document.hidden)cancel();});canvas.addEventListener('click',e=>{if(suppressClick){suppressClick=false;e.preventDefault();e.stopImmediatePropagation();}},true);
 }
 remove(id){const item=this.items.find(item=>item.id===id);if(!item)return;for(const [owner,data] of this.drags)if(data.item===item)this.endDrag(owner);this.root.remove(item.group);item.group.traverse(mesh=>{mesh.geometry?.dispose();mesh.material?.dispose();});this.items=this.items.filter(item=>item.id!==id);if(this.selected===item)this.selected=this.items.at(-1)||null;this.audio.removeInstance(id);}
}

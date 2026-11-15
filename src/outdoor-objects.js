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
 constructor(root,audio,getView){this.root=root;this.audio=audio;this.getView=getView;this.items=[];this.selected=null;}
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
 moveHere(id){const item=this.items.find(item=>item.id===id);if(!item)return;const p=this.ahead(),y=islandHeight(p.x,p.z);item.group.position.set(p.x,y,p.z);const voice=this.audio.instances.find(voice=>voice.id===id);Object.assign(voice,{...p,y:y+1});const node=this.audio.nodes.find(node=>node.id===id);if(node){node.pan.positionX.value=p.x;node.pan.positionY.value=y+1;node.pan.positionZ.value=p.z;}this.audio.changed();}
 remove(id){const item=this.items.find(item=>item.id===id);if(!item)return;this.root.remove(item.group);item.group.traverse(mesh=>{mesh.geometry?.dispose();mesh.material?.dispose();});this.items=this.items.filter(item=>item.id!==id);if(this.selected===item)this.selected=this.items.at(-1)||null;this.audio.removeInstance(id);}
}

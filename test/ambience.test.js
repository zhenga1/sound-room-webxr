import {OutdoorTraces} from '../src/outdoor-traces.js';
import {OutdoorObjects} from '../src/outdoor-objects.js';
import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {ParadiseAmbience,courtyardSounds} from '../src/paradise-world.js';
const parameter=()=>({value:0,setTargetAtTime(value){this.value=value;},setValueAtTime(value){this.value=value;},exponentialRampToValueAtTime(value){this.value=value;}});
class AudioNode{constructor(){this.gain=parameter();this.frequency=parameter();this.Q=parameter();this.positionX=parameter();this.positionY=parameter();this.positionZ=parameter();this.connections=[];}connect(node){this.connections.push(node);return node;}start(...args){this.started=args;}stop(){}disconnect(){this.disconnected=true;}}
class Context{constructor(){this.sampleRate=1000;this.currentTime=1;this.destination={};this.listener={};for(const key of ['positionX','positionY','positionZ','forwardX','forwardY','forwardZ','upX','upY','upZ'])this.listener[key]=parameter();}async resume(){}createBuffer(channels,length){const values=new Float32Array(length);return {getChannelData:()=>values};}createGain(){return new AudioNode();}createBufferSource(){return new AudioNode();}createBiquadFilter(){return new AudioNode();}createPanner(){return new AudioNode();}createOscillator(){return new AudioNode();}}
test('fountain and three foliage regions have distinct positional audio',async()=>{
 globalThis.AudioContext=Context;const audio=new ParadiseAmbience();await audio.start();assert.equal(audio.nodes.length,7);
 const fountain=audio.nodes.find(node=>node.id==='fountain');assert.deepEqual([fountain.pan.positionX.value,fountain.pan.positionY.value,fountain.pan.positionZ.value],[0,.85,6]);assert.equal(audio.nodes.filter(node=>node.id.endsWith('leaves')).length,3);
 assert.equal(fountain.pan.panningModel,'HRTF');assert.equal(fountain.source.loop,true);assert.equal(Math.abs(fountain.source.buffer.getChannelData(0)[0]),0);assert.equal(Math.abs(fountain.source.buffer.getChannelData(0).at(-1)),0);
 for(const node of audio.nodes){assert.ok(node.pan.connections.includes(audio.buses.get(node.id)));assert.ok(audio.buses.get(node.id).connections.includes(audio.master));}assert.ok(courtyardSounds.some(sound=>sound.id==='stream'));
});
test('effects follow energy, master volume and leaving the outdoor room',async()=>{
 globalThis.AudioContext=Context;const audio=new ParadiseAmbience();await audio.start();const camera=new THREE.PerspectiveCamera();camera.position.set(0,1.6,5);camera.updateMatrixWorld();audio.active=true;
 audio.update(camera,{energy:0,nature:.6,dreaminess:.2},1);const low=audio.nodes.find(node=>node.id==='fountain').gain.gain.value;
 audio.update(camera,{energy:1,nature:1,dreaminess:.8},1);assert.ok(audio.nodes.find(node=>node.id==='fountain').gain.gain.value>low);
 audio.setMasterVolume(0);audio.update(camera,{energy:1,nature:1,dreaminess:.8},1);assert.equal(audio.master.gain.value,0);
 audio.active=false;audio.update(camera,{energy:.2,nature:.6,dreaminess:.2},2);for(const node of audio.nodes)assert.equal(node.gain.gain.value,0);
 assert.equal(audio.ctx.listener.positionZ.value,5);
});
test('pending audio startup can be updated without throwing',()=>{const audio=new ParadiseAmbience();audio.ctx={};assert.doesNotThrow(()=>audio.update(null,{},0));});

test('outdoor mixer controls separate buses and preserves volume through mute and moods',async()=>{
 globalThis.AudioContext=Context;const audio=new ParadiseAmbience();await audio.start();assert.equal(audio.channels().length,10);let changes=0;const unsubscribe=audio.subscribe(()=>changes++);
 audio.setChannel('fountain',.25);assert.equal(audio.buses.get('fountain').gain.value,.5);audio.toggleChannel('fountain');assert.equal(audio.buses.get('fountain').gain.value,0);assert.equal(audio.channels().find(c=>c.id==='fountain').level,.25);
 audio.active=true;audio.update(new THREE.PerspectiveCamera(),{energy:1,nature:1,dreaminess:1},1);assert.equal(audio.buses.get('fountain').gain.value,0);audio.toggleChannel('fountain');assert.equal(audio.buses.get('fountain').gain.value,.5);
 audio.muteAll(true);assert.ok(audio.channels().every(c=>c.muted));audio.muteAll(false);assert.ok(audio.channels().every(c=>!c.muted));audio.setChannel('birds',2);assert.equal(audio.channels().find(c=>c.id==='birds').level,1);audio.resetMix();assert.equal(audio.channels().find(c=>c.id==='birds').level,.8);assert.ok(changes>5);unsubscribe();
});

test('added objects have independent voices, bounded positions, relocation and complete removal',async()=>{
 globalThis.AudioContext=Context;const audio=new ParadiseAmbience(),root=new THREE.Group(),camera=new THREE.PerspectiveCamera();camera.position.set(0,1.6,5);camera.updateMatrixWorld();const objects=new OutdoorObjects(root,audio,()=>camera);
 const first=objects.add('fountain',{x:0,z:4}),second=objects.add('fountain',{x:3,z:6});await audio.start();assert.notEqual(first.id,second.id);assert.equal(audio.instances.length,2);assert.equal(root.children.length,2);assert.equal(audio.nodes.filter(n=>n.soundId==='fountain').length,2);
 audio.setChannel(first.id,.2);audio.toggleChannel(first.id);assert.equal(audio.buses.get(first.id).gain.value,0);assert.ok(audio.buses.get(second.id).gain.value>0);camera.position.x=2;camera.updateMatrixWorld();objects.moveHere(first.id);assert.equal(first.group.position.x,2);assert.equal(audio.nodes.find(n=>n.id===first.id).pan.positionX.value,2);
 const node=audio.nodes.find(n=>n.id===first.id);objects.remove(first.id);assert.equal(node.pan.disconnected,true);assert.equal(audio.channels().some(c=>c.id===first.id),false);assert.equal(root.children.length,1);
 const birds=objects.add('birdhouse',{x:100,z:100});assert.ok(Math.abs(birds.group.position.x)<=13);assert.ok(audio.buses.has(birds.id));for(let i=0;i<30;i++)objects.add('tree');assert.equal(objects.items.length,16);assert.equal(objects.add('tree'),null);
});

test('outdoor traces move independent sounds along paths and change track without changing geometry',async()=>{
 globalThis.AudioContext=Context;const audio=new ParadiseAmbience(),root=new THREE.Group(),traces=new OutdoorTraces(root,audio);await audio.start();
 const item=traces.add('stream',[[0,4],[4,4]]),other=traces.add('birds',[[1,6],[3,6]]);assert.equal(traces.items.length,2);const points=JSON.stringify(item.points);traces.update(1);const voice=audio.instances.find(v=>v.id===item.id);assert.ok(voice.x>0&&voice.x<4);assert.equal(audio.nodes.find(v=>v.id===item.id).pan.positionX.value,voice.x);
 audio.setChannel(item.id,.22);audio.toggleChannel(item.id);const oldId=item.id;traces.changeSound(item,1);assert.notEqual(item.id,oldId);assert.notEqual(item.sound,'stream');assert.equal(JSON.stringify(item.points),points);assert.equal(audio.mix.get(item.id).level,.22);assert.equal(audio.mix.get(item.id).muted,true);assert.ok(!audio.buses.has(oldId));
 traces.remove(item);assert.equal(traces.items.length,1);assert.equal(audio.channels().some(c=>c.id===item.id),false);assert.ok(audio.channels().some(c=>c.id===other.id));
});
test('trace drawing rejects invalid or short paths and cancelling leaves no sound or preview',()=>{
 globalThis.AudioContext=Context;const audio=new ParadiseAmbience(),root=new THREE.Group(),traces=new OutdoorTraces(root,audio);
 assert.equal(traces.add('birds',[[0,4],[0,4.1]]),null);assert.equal(traces.add('birds',[[NaN,4],[1,4]]),null);assert.equal(traces.add('birds',[[100,4],[101,4]]),null);assert.equal(traces.add('unknown',[[0,4],[1,4]]),null);
 traces.begin();traces.sample({x:0,z:4});traces.sample({x:1,z:4});assert.ok(traces.previewLine);traces.cancel();assert.equal(root.children.length,0);assert.equal(audio.instances.length,0);
 traces.nextSound='birds';traces.begin();traces.sample({x:0,z:4});traces.sample({x:1,z:4});const item=traces.finish();assert.equal(item.sound,'birds');assert.equal(traces.draft,null);assert.equal(traces.previewLine,null);
});

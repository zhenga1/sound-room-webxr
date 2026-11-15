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

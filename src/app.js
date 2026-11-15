import * as THREE from 'three';
import { PublicSoundEngine } from './public-audio.js';
import { BedroomXR } from './webxr.js';
import { catalog, bedroom, buildObject } from './objects.js';
import { closestPointOnTrace, pointAlongTrace, traceLength, traceVisualStyle } from './traces.js';
const $=s=>document.querySelector(s), engine=new PublicSoundEngine();
const sources=[],traces=[],keys=new Set();let nextId=1,nextTraceId=1;
const scene=new THREE.Scene(); scene.background=new THREE.Color('#172329'); scene.fog=new THREE.FogExp2('#172329',.045);
const camera=new THREE.PerspectiveCamera(62,innerWidth/innerHeight,.08,65); camera.rotation.order='YXZ';
const renderer=new THREE.WebGLRenderer({antialias:true}); renderer.setSize(innerWidth,innerHeight); renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.shadowMap.enabled=true; renderer.shadowMap.type=THREE.PCFSoftShadowMap; renderer.outputColorSpace=THREE.SRGBColorSpace; renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=1.25;
$('#world').append(renderer.domElement);
$('#enter').disabled=true;$('#enter').textContent='Loading room audio…';
$('#open-satie-mixer').disabled=true;
engine.attach({scene,camera,renderer}).then(()=>{
  engine.prepare(sources);
  $('#enter').disabled=false;$('#enter').innerHTML='Enter the room <span>↗</span>';
  $('#open-satie-mixer').disabled=false;
}).catch(error=>{console.error(error);$('#enter').textContent='Audio failed to load';$('#status').textContent='AUDIO UNAVAILABLE';});
engine.onMixerOpenChange=open=>{
  document.body.classList.toggle('satie-mixing',open);
  $('#open-satie-mixer').textContent=open?'Use room mix':'Use SATIE mixer';
  $('#open-satie-mixer').setAttribute('aria-pressed',String(open));
  if(open){keys.clear();setDrawMode(false);if($('#library').open)$('#library').close();if($('#help-dialog').open)$('#help-dialog').close();}
  for(const s of sources)if(s.ring)s.ring.visible=!open;
};
$('#open-satie-mixer').onclick=()=>engine.mixerOpen?engine.closeMixer():engine.openMixer();
$('#open-satie-mixer').hidden=true;
scene.add(new THREE.HemisphereLight('#c4dbe1','#28302c',2));
const key=new THREE.DirectionalLight('#ffe2bd',3); key.position.set(-3,7,4); key.castShadow=true; key.shadow.mapSize.set(2048,2048); key.shadow.camera.left=-8; key.shadow.camera.right=8; key.shadow.camera.top=8; key.shadow.camera.bottom=-8; scene.add(key);
const mat=(color,roughness=.7,metalness=0)=>new THREE.MeshStandardMaterial({color,roughness,metalness});
const wood=mat('#4c4137'),dark=mat('#182225'),metal=mat('#9aa7a4',.25,.7),ivory=mat('#e7e1c9'),bronze=mat('#c8a66c',.3,.55);
function box(parent,w,h,d,x,y,z,m){const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function cylinder(parent,r1,r2,h,x,y,z,m){const o=new THREE.Mesh(new THREE.CylinderGeometry(r1,r2,h,40),m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
const architecture=new THREE.Group(); scene.add(architecture);
box(scene,12,.15,12,0,-.1,0,mat('#394444'));
for(let i=-6;i<=6;i+=.6) box(scene,.012,.005,12,i,.002,0,mat('#6a7267'));
// The back wall has a glazed window and a framed doorway.
const wall=mat('#354247');
box(architecture,1.55,4,.18,-5.225,2,-6,wall);
box(architecture,1.95,4,.18,-2.275,2,-6,wall);
box(architecture,1.2,1.4,.18,-3.85,3.3,-6,wall);
box(architecture,4.7,4,.18,3.65,2,-6,wall);
box(architecture,2.6,.8,.18,0,.4,-6,mat('#354247'));
box(architecture,2.6,.85,.18,0,3.575,-6,mat('#354247'));
box(architecture,.18,4,12,-6,2,0,mat('#303a3e'));
box(architecture,.18,4,12,6,2,0,mat('#354247'));
for(let x=-5;x<=5;x+=2){if(Math.abs(x)<1.5||x===-3)continue;box(architecture,.5,2.5,.16,x,2,-5.85,dark);for(let j=0;j<5;j++)box(architecture,.035,2.4,.09,x-.18+j*.09,2,-5.72,wood);}
const door=new THREE.Group();door.position.set(-3.85,0,-5.89);architecture.add(door);
const doorWood=mat('#866a50'),panelWood=mat('#705841'),trim=mat('#c8bda4');
box(door,1.22,2.52,.09,0,1.27,.015,doorWood);
for(const x of [-.66,.66])box(door,.12,2.65,.16,x,1.33,.1,trim);
box(door,1.45,.15,.17,0,2.65,.1,trim);
box(door,1.36,.055,.24,0,.045,.15,mat('#6c6557'));
for(const y of [.73,1.86]){
  box(door,.91,.89,.035,0,y,.082,trim);
  box(door,.79,.77,.025,0,y,.107,panelWood);
}
for(const y of [.36,1.45,2.22])box(door,.045,.12,.025,-.59,y,.11,bronze);
box(door,.13,.28,.025,.44,1.04,.09,bronze);
const knob=new THREE.Mesh(new THREE.SphereGeometry(.07,16,12),bronze);knob.position.set(.44,1.04,.18);door.add(knob);
box(architecture,1.4,.015,.47,-3.85,.012,-5.45,mat('#5b5147'));
for(let x of [-5.7,5.7]) {box(architecture,.045,.035,10,x,.12,0,mat('#b6ca96'));}
const cathedral=new THREE.Group(); cathedral.visible=false;scene.add(cathedral);
for(let side of [-1,1])for(let z=-5;z<=5;z+=2.5){cylinder(cathedral,.26,.35,9,side*5.6,4.5,z,mat('#637274'));box(cathedral,.8,.2,.8,side*5.6,.1,z,mat('#71807e'));}
// High vault ribs preserve the same walkable footprint.
for(let z=-5;z<=5;z+=2.5){const curve=new THREE.EllipseCurve(0,6,5.6,3.8,0,Math.PI,false,0);const points=curve.getPoints(50).map(p=>new THREE.Vector3(p.x,p.y,z)); const rib=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),50,.08,8,false),mat('#84908a'));cathedral.add(rib);}
const ceilingLight=new THREE.PointLight('#b8d5eb',18,20);ceilingLight.position.set(0,6,-3);scene.add(ceilingLight);
const pickables=[];
function mount(s){
  const group=s.group=new THREE.Group(); group.position.set(s.x,0,s.z);group.rotation.y=s.rotation||0; scene.add(group);
  const accent=mat(s.color);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(s.radius,.012,8,80),new THREE.MeshBasicMaterial({color:s.color}));ring.rotation.x=Math.PI/2;ring.position.y=.09;ring.visible=!engine.mixerOpen;group.add(ring);s.ring=ring;
  if(buildObject(s,group,{box,cylinder,mat,wood,dark,ivory,metal})){} else if(s.type==='piano'){
    box(group,1.7,.52,.75,0,1.05,0,dark);box(group,1.76,.08,.85,0,1.35,0,wood);
    for(let i=0;i<21;i++)box(group,.068,.05,.32,-.74+i*.074,.96,.48,ivory);
    for(let i=0;i<20;i++)if(![2,6].includes(i%7))box(group,.043,.05,.2,-.70+i*.074,1,.4,dark);
    for(let x of [-.68,.68])for(let z of [-.22,.22])box(group,.07,.8,.07,x,.43,z,dark);
    box(group,.65,.1,.32,0,.52,.95,wood);for(let x of [-.25,.25])box(group,.06,.5,.25,x,.25,.95,dark);
  } else if(s.type==='drums') {
    const bass=cylinder(group,.42,.42,.5,0,.47,.25,accent);bass.rotation.x=Math.PI/2;
    const face=cylinder(group,.39,.39,.02,0,.47,.51,ivory);face.rotation.x=Math.PI/2;
    for(let x of [-.46,.43]){cylinder(group,.25,.25,.3,x,.9,-.05,accent);cylinder(group,.25,.25,.02,x,1.06,-.05,ivory);}
    for(let x of [-.8,.8]){cylinder(group,.025,.025,1.2,x,.6,-.35,metal);cylinder(group,.38,.38,.025,x,1.2,-.35,bronze);}
    cylinder(group,.26,.26,.08,0,.5,-.65,dark);cylinder(group,.04,.04,.45,0,.25,-.65,metal);
    // Minimal musician: head, torso and stick arms.
    const head=new THREE.Mesh(new THREE.SphereGeometry(.15,20,20),mat('#c4ab91'));head.position.set(0,1.55,-.65);group.add(head);
    box(group,.34,.45,.22,0,1.18,-.65,mat('#667f80'));
    for(let x of [-.2,.2]){const stick=box(group,.025,.025,.55,x,1.2,-.24,wood);stick.rotation.x=-.2;}
  } else {
    box(group,1.4,2.2,.08,0,1.2,0,dark);box(group,1.2,1.95,.05,0,1.2,.06,new THREE.MeshStandardMaterial({color:'#659aa9',transparent:true,opacity:.38,metalness:.5,roughness:.1}));
    box(group,.04,2.1,.09,0,1.2,.1,metal);box(group,1.35,.04,.09,0,1.2,.1,metal);
    const drops=[];for(let i=0;i<75;i++)drops.push((Math.random()-.5)*1.15,Math.random()*1.9+.23,.13);
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(drops,3));s.drops=new THREE.Points(geometry,new THREE.PointsMaterial({color:s.color,size:.024}));group.add(s.drops);
  }
  const glow=new THREE.PointLight(s.color,2,4);glow.position.y=1.8;group.add(glow);
  group.traverse(o=>{if(o.isMesh){o.userData.source=s;pickables.push(o);}});
  const label=document.createElement('div');label.className='source-label';label.style.setProperty('--c',s.color);label.textContent=s.name.toUpperCase()+' ↔';$('#source-labels').append(label);s.label=label;
  const row=document.createElement('div');row.className='track';row.style.setProperty('--c',s.color);
  row.innerHTML=`<div class="track-top"><span class="swatch"></span><div class="track-title">${s.name}<small>${s.desc}</small></div>${s.sound?`<button class="mute" aria-pressed="${!!s.muted}" aria-label="${s.muted?'Unmute':'Mute'} ${s.name}">${s.muted?'Unmute':'Mute'}</button>`:'<span class="quiet-badge">Quiet</span>'}<button class="remove-object" aria-label="Remove ${s.name}">×</button></div><div class="track-bottom"><div class="arrows">${[['←',-.5,0],['↑',0,-.5],['↓',0,.5],['→',.5,0]].map(([label,x,z])=>`<button aria-label="Move ${s.name} ${label}" data-x="${x}" data-z="${z}">${label}</button>`).join('')}</div><div class="meter">${[6,12,8,15,10,5,11,7].map(h=>`<i style="--h:${h}px"></i>`).join('')}</div></div>`;
  if(s.sound)row.querySelector('.mute').onclick=e=>{s.muted=!s.muted;engine.mute(s);e.target.textContent=s.muted?'Unmute':'Mute';e.target.setAttribute('aria-pressed',s.muted);e.target.setAttribute('aria-label',`${s.muted?'Unmute':'Mute'} ${s.name}`);row.querySelector('.meter').style.opacity=s.muted?.15:1;saveLayout();};
  row.querySelectorAll('[data-x]').forEach(b=>b.onclick=()=>move(s,s.x+Number(b.dataset.x),s.z+Number(b.dataset.z)));
  const tools=document.createElement('div');tools.className='object-tools';
  tools.innerHTML=`<button class="rotate" aria-label="Rotate ${s.name}">↻ Rotate</button>${s.sound?`<label>Volume <input aria-label="${s.name} volume" type="range" min="0" max="100" value="${Math.round(s.volume*100)}"></label>`:''}`;
  tools.querySelector('.rotate').onclick=()=>{s.rotation=(s.rotation||0)+Math.PI/4;s.group.rotation.y=s.rotation;saveLayout();};
  const volume=tools.querySelector('input');if(volume)volume.oninput=()=>{s.volume=Number(volume.value)/100;engine.mute(s);saveLayout();};
  row.append(tools);row.querySelector('.remove-object').onclick=()=>removeObject(s);
  $('#tracks').append(row);s.row=row;
  const dot=document.createElementNS('http://www.w3.org/2000/svg','circle');dot.setAttribute('r',7);dot.setAttribute('fill',s.color);dot.dataset.id=s.id;dot.innerHTML=`<title>${s.name}: drag to move</title>`;$('#map-dots').append(dot);s.dot=dot;
}
function move(s,x,z){s.x=THREE.MathUtils.clamp(x,-6+s.radius,6-s.radius);s.z=THREE.MathUtils.clamp(z,-6+s.radius,6-s.radius);s.group.position.set(s.x,0,s.z);engine.move(s);saveLayout();}
let comparisonTimer,toastTimer;
function toast(text){$('#toast').textContent=text;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3500);}
function setPreset(name){engine.setPreset(name);for(const n of ['studio','cathedral']){$('#'+n).classList.toggle('active',n===name);$('#'+n).setAttribute('aria-pressed',n===name);}cathedral.visible=name==='cathedral';architecture.scale.y=name==='cathedral'?2.5:1;$('#acoustic-note').textContent=name==='cathedral'?'Long reflections · 5.5 s tail':'Short reflections · 0.35 s tail';scene.fog.density=name==='cathedral'?.028:.045;}
for(const name of ['studio','cathedral'])$('#'+name).onclick=()=>{clearTimeout(comparisonTimer);$('#compare').disabled=false;$('#compare').textContent='↔ Hear the before / after';setPreset(name);toast(name==='studio'?'Small studio · intimate & dry':'Large cathedral · same performance, different space');};
async function start(){try{await engine.start(sources,traces);$('#welcome').classList.add('hidden');syncPlayback();}catch(e){toast('Audio could not start. Please retry.');console.error(e);}}
function syncPlayback(){$('#sound').textContent=engine.playing?'Ⅱ Pause listening':'▶ Start listening';$('#status').textContent=engine.playing?'LIVE / SPATIAL AUDIO':'PAUSED';}
$('#enter').onclick=start;
$('#sound').onclick=async()=>{try{await engine.toggle(sources,traces);syncPlayback();}catch(e){toast('Unable to start audio. Please retry.');console.error(e);}};
$('#compare').onclick=async()=>{if(!engine.playing){await start();if(!engine.playing)return;}setPreset('studio');toast('Before: small studio. Listen to the dry notes…');$('#compare').disabled=true;$('#compare').textContent='Listening to the studio…';comparisonTimer=setTimeout(()=>{setPreset('cathedral');toast('After: large cathedral. Same loops, longer reflections.');$('#compare').disabled=false;$('#compare').textContent='↔ Hear the before / after';},4500);};
function resetCamera(){camera.position.set(0,1.7,5);camera.rotation.set(-.08,0,0);}
resetCamera();
$('#reset').onclick=()=>{clearTimeout(comparisonTimer);$('#compare').disabled=false;$('#compare').textContent='↔ Hear the before / after';for(const s of [...sources])removeObject(s,false);for(const t of [...traces])removeTrace(t,false);setDrawMode(false);for(const item of bedroom)addObject(item.type,item,false);setPreset('studio');resetCamera();saveLayout();saveTraces();toast('Bedroom restored. Add objects or draw traces to make it yours.');};
$('#help').onclick=()=>$('#help-dialog').showModal();$('#close-help').onclick=()=>$('#help-dialog').close();
addEventListener('keydown',e=>{if(!engine.mixerOpen&&$('#welcome').classList.contains('hidden')&&!$('#help-dialog').open&&!$('#library').open&&!['BUTTON','INPUT'].includes(document.activeElement.tagName)){if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code)){e.preventDefault();keys.add(e.code);}}});addEventListener('keyup',e=>keys.delete(e.code));addEventListener('blur',()=>{keys.clear();drag=null;looking=false;});
const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2(),floor=new THREE.Plane(new THREE.Vector3(0,1,0),0),hit=new THREE.Vector3();let drag=null,looking=false,lastX=0,lastY=0;
function ray(e){pointer.set(e.clientX/innerWidth*2-1,-e.clientY/innerHeight*2+1);raycaster.setFromCamera(pointer,camera);}
renderer.domElement.addEventListener('contextmenu',e=>e.preventDefault());
renderer.domElement.addEventListener('pointerdown',e=>{if(engine.mixerOpen||!$('#welcome').classList.contains('hidden'))return;if(e.button===2){looking=true;lastX=e.clientX;lastY=e.clientY;renderer.domElement.setPointerCapture(e.pointerId);return;}if(document.pointerLockElement)return;ray(e);const hits=raycaster.intersectObjects(pickables);if(hits.length){drag=hits[0].object.userData.source;renderer.domElement.setPointerCapture(e.pointerId);toast(`Moving ${drag.name}. Drag across the floor.`);}else renderer.domElement.requestPointerLock?.()?.catch?.(()=>toast('Hold right mouse and drag to look around.'));});
addEventListener('pointermove',e=>{if(engine.mixerOpen)return;if(document.pointerLockElement===renderer.domElement){camera.rotation.y-=e.movementX*.002;camera.rotation.x=THREE.MathUtils.clamp(camera.rotation.x-e.movementY*.002,-1.1,1.1);}else if(looking){camera.rotation.y-=(e.clientX-lastX)*.004;camera.rotation.x=THREE.MathUtils.clamp(camera.rotation.x-(e.clientY-lastY)*.004,-1.1,1.1);lastX=e.clientX;lastY=e.clientY;}else if(drag){ray(e);if(raycaster.ray.intersectPlane(floor,hit))move(drag,hit.x,hit.z);}});
addEventListener('pointerup',()=>{drag=null;looking=false;});document.addEventListener('pointerlockchange',()=>{document.body.classList.toggle('locked',document.pointerLockElement===renderer.domElement);keys.clear();});
const traceChoices=catalog.filter(item=>item.sound);
for(const item of traceChoices){const option=document.createElement('option');option.value=item.sound;option.textContent=item.name;$('#trace-sound').append(option);}
$('#trace-sound').value='bird';
let drawingMode=false,editingTrace=null,draft=null,mapDrag=null;
const map=$('#map');
function mapPoint(e){const rect=map.getBoundingClientRect();return [THREE.MathUtils.clamp(((e.clientX-rect.left)/rect.width*200-100)/15,-5.8,5.8),THREE.MathUtils.clamp(((e.clientY-rect.top)/rect.height*200-100)/15,-5.8,5.8)];}
function moveMap(e){const [x,z]=mapPoint(e);move(mapDrag,x,z);}
function traceColor(sound){return traceChoices.find(item=>item.sound===sound)?.color||'#d6f48a';}
function mountTraceVisual(t){
  const material=new THREE.MeshBasicMaterial({color:traceColor(t.sound),transparent:true,opacity:.76});
  t.group=new THREE.Group();scene.add(t.group);
  t.line=new THREE.Mesh(new THREE.BufferGeometry(),material);t.group.add(t.line);
  t.ends=[0,1].map(()=>{const marker=new THREE.Mesh(new THREE.SphereGeometry(.075,10,8),material);t.group.add(marker);return marker;});
  t.mapPath=document.createElementNS('http://www.w3.org/2000/svg','polyline');
  for(const [key,value] of Object.entries({fill:'none',stroke:traceColor(t.sound),'stroke-width':'4','stroke-linecap':'round','stroke-linejoin':'round','pointer-events':'none'}))t.mapPath.setAttribute(key,value);
  $('#map-traces').append(t.mapPath);refreshTraceStyle(t);refreshTraceVisual(t);
}
function refreshTraceStyle(t){
  const style=t.style=traceVisualStyle(t.sound),color=traceColor(t.sound);
  t.line.material.color.set(color);t.mapPath.setAttribute('stroke',color);t.mapPath.setAttribute('stroke-dasharray',style.dash);
  t.mapPath.classList.add('trace-map-line');t.mapPath.style.animationDuration=`${12/style.pace}s`;
  for(const effect of t.effects||[]){t.group.remove(effect);effect.geometry.dispose();effect.material.dispose();}
  t.effects=[];
  if(t.isDraft)return;
  for(let i=0;i<style.count;i++){
    let geometry;
    if(['spin','ring'].includes(style.effect))geometry=new THREE.TorusGeometry(style.effect==='ring'?.11:.08,.012,5,16);
    else if(style.effect==='flutter')geometry=new THREE.ConeGeometry(.06,.14,3);
    else if(['page','flicker','tick','key'].includes(style.effect))geometry=new THREE.BoxGeometry(style.effect==='page'?.13:.07,style.effect==='tick'?.16:.07,.045);
    else geometry=new THREE.SphereGeometry(style.effect==='drop'?.04:.055,8,6);
    const material=new THREE.MeshBasicMaterial({color,transparent:true,opacity:.85});
    const effect=new THREE.Mesh(geometry,material);t.group.add(effect);t.effects.push(effect);
  }
}
function refreshTraceVisual(t){
  const points=t.points;
  t.mapPath.setAttribute('points',points.map(([x,z])=>`${100+x*15},${100+z*15}`).join(' '));
  t.line.geometry.dispose();
  t.line.visible=points.length>1;
  t.line.geometry=points.length>1?new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(([x,z])=>new THREE.Vector3(x,.065,z))),Math.max(8,points.length*3),t.style.effect==='wave'?.04:.028,5,false):new THREE.BufferGeometry();
  for(const [i,p] of [[0,points[0]],[1,points.at(-1)]])t.ends[i].position.set(p[0],.07,p[1]);
}
function animateTrace(t,time){
  const style=t.style;
  t.line.material.opacity=t.muted?.2:.62+.15*Math.sin(time*style.pace*2);
  for(let i=0;i<t.effects.length;i++){
    const effect=t.effects[i],phase=(i/style.count+time*style.pace/10)%1,p=pointAlongTrace(t.points,phase);
    const pulse=Math.sin(time*(style.effect==='tick'?8:2)+i*2.4);
    effect.position.set(p.x,.12,p.z);effect.rotation.set(0,-p.angle,0);effect.scale.setScalar(1);
    effect.visible=!t.muted;
    if(style.effect==='drop'){effect.position.y=.08+.28*(1-(time*.7+i/style.count)%1);effect.scale.y=1.8;}
    else if(style.effect==='flutter'){effect.position.y=.17+.09*pulse;effect.rotation.z=time*5+i;}
    else if(style.effect==='page'){effect.position.y=.13+.07*pulse;effect.rotation.z=pulse*.55;}
    else if(style.effect==='flicker'){effect.visible=!t.muted&&pulse>-.3;effect.rotation.y=time*3+i;}
    else if(style.effect==='tick'){effect.visible=!t.muted&&pulse>.35;}
    else if(style.effect==='key'){effect.position.y=.12+.05*Math.max(0,pulse);effect.scale.y=.6+.7*Math.max(0,pulse);}
    else if(style.effect==='wave'){effect.position.y=.14+.12*Math.sin(time*1.3+i*.8);effect.scale.setScalar(.8+.35*Math.sin(time+i));}
    else{effect.rotation.x=Math.PI/2;effect.rotation.z=time*(style.effect==='spin'?4:1.5);effect.scale.setScalar(.75+.28*pulse);}
  }
}
function unmountTraceVisual(t){scene.remove(t.group);t.group.traverse(o=>{o.geometry?.dispose();o.material?.dispose?.();});t.mapPath.remove();}
function updateTraceCount(){
  $('#trace-count').textContent=String(traces.length).padStart(2,'0');
  $('#trace-empty').hidden=traces.length>0;
  traces.forEach((trace,index)=>{trace.row.querySelector('.trace-number').textContent=String(index+1).padStart(2,'0');});
}
function saveTraces(){try{localStorage.setItem('sound-room-pages-traces-v1',JSON.stringify(traces.map(t=>({sound:t.sound,points:t.points,volume:t.volume,muted:t.muted}))));}catch{}}
function tracePlayer(t){return {sound:t.sound,x:t.x,z:t.z,volume:t.volume,muted:t.muted};}
function changeTraceSound(t,sound){
  if(t.sound===sound)return;
  t.player.removed=true;engine.removeTrace(t.player);
  t.sound=sound;t.player=tracePlayer(t);refreshTraceStyle(t);refreshTraceVisual(t);
  const item=traceChoices.find(choice=>choice.sound===sound);
  t.row.style.setProperty('--c',traceColor(sound));
  t.row.querySelector('strong').textContent=`${item.name} trace`;
  t.row.querySelector('select').setAttribute('aria-label',`Sound for ${item.name} trace`);
  t.row.querySelector('.trace-delete').setAttribute('aria-label',`Delete ${item.name} trace`);
  t.row.querySelector('.trace-mute').setAttribute('aria-label',`${t.muted?'Unmute':'Mute'} ${item.name} trace`);
  t.row.querySelector('input').setAttribute('aria-label',`${item.name} trace volume`);
  if(engine.ctx)engine.addTrace(t.player).catch(error=>{toast('Trace sound could not load. Choose another sound.');console.error(error);});
  saveTraces();
}
function mountTraceRow(t){
  const item=traceChoices.find(item=>item.sound===t.sound);
  const row=t.row=document.createElement('div');row.className='trace-row';row.setAttribute('role','listitem');row.style.setProperty('--c',traceColor(t.sound));
  row.innerHTML=`<div class="trace-row-head"><span class="trace-number"></span><span class="trace-swatch"></span><strong>${item.name} trace</strong><button class="trace-delete" aria-label="Delete ${item.name} trace">Delete</button></div><label class="trace-source">Sound <select aria-label="Sound for ${item.name} trace"></select></label><div class="trace-row-controls"><button class="trace-mute" aria-label="${t.muted?'Unmute':'Mute'} ${item.name} trace">${t.muted?'Unmute':'Mute'}</button><label>Volume <input type="range" min="0" max="100" value="${Math.round(t.volume*100)}" aria-label="${item.name} trace volume"></label><button class="trace-redraw">Redraw</button></div>`;
  const select=row.querySelector('select');for(const choice of traceChoices){const option=document.createElement('option');option.value=choice.sound;option.textContent=choice.name;select.append(option);}select.value=t.sound;
  select.onchange=e=>changeTraceSound(t,e.target.value);
  row.querySelector('.trace-delete').onclick=()=>removeTrace(t);
  row.querySelector('.trace-mute').onclick=e=>{t.muted=!t.muted;t.player.muted=t.muted;engine.muteTrace(t.player);e.target.textContent=t.muted?'Unmute':'Mute';e.target.setAttribute('aria-label',`${t.muted?'Unmute':'Mute'} ${traceChoices.find(choice=>choice.sound===t.sound).name} trace`);saveTraces();};
  row.querySelector('input').oninput=e=>{t.volume=Number(e.target.value)/100;t.player.volume=t.volume;engine.muteTrace(t.player);saveTraces();};
  row.querySelector('.trace-redraw').onclick=()=>{setDrawMode(true,t);toast('Redraw this trace on the floor plan.');};
  $('#trace-list').append(row);
}
function addTrace(t,persist=true){
  t.player=tracePlayer(t);traces.push(t);mountTraceVisual(t);mountTraceRow(t);updateTraceCount();
  if(engine.ctx)engine.addTrace(t.player).catch(error=>{toast('Trace sound could not load. Remove and redraw it.');console.error(error);});
  if(persist)saveTraces();
}
function removeTrace(t,persist=true){
  if(editingTrace===t)setDrawMode(false);
  t.player.removed=true;engine.removeTrace(t.player);unmountTraceVisual(t);t.row.remove();traces.splice(traces.indexOf(t),1);updateTraceCount();if(persist)saveTraces();
}
function setDrawMode(on,edit=null){
  if(draft){unmountTraceVisual(draft);draft=null;}
  drawingMode=on;editingTrace=edit;
  document.body.classList.toggle('drawing-trace',on);
  $('#draw-trace').setAttribute('aria-pressed',String(on));
  $('#draw-trace').textContent=on?'Cancel drawing':'✎ Draw sound trace';
  $('#trace-sound').disabled=!!edit;
  if(edit)$('#trace-sound').value=edit.sound;
  $('#trace-hint').textContent=on?'Drag a line on the floor plan; release to make it sound.':`Choose a sound, then draw a line. ${traceVisualStyle($('#trace-sound').value).description}.`;
}
$('#trace-sound').onchange=()=>{if(!drawingMode)$('#trace-hint').textContent=`Choose a sound, then draw a line. ${traceVisualStyle($('#trace-sound').value).description}.`;};
$('#draw-trace').onclick=()=>{if(!drawingMode&&traces.length>=12){toast('Maximum of 12 sound traces. Remove one before drawing another.');return;}setDrawMode(!drawingMode);if(drawingMode)toast('Drag on the floor plan to draw a sound trace.');};
map.addEventListener('pointerdown',e=>{
  if(drawingMode&&e.button===0){
    e.preventDefault();
    const start=mapPoint(e),sound=editingTrace?.sound||$('#trace-sound').value;
    draft={id:`trace-${nextTraceId++}`,sound,points:[start],x:start[0],z:start[1],volume:.3,muted:false,isDraft:true};
    mountTraceVisual(draft);map.setPointerCapture(e.pointerId);return;
  }
  const s=sources.find(s=>s.id===e.target.dataset.id);if(s){mapDrag=s;map.setPointerCapture(e.pointerId);moveMap(e);}
});
map.addEventListener('pointermove',e=>{
  if(draft){const p=mapPoint(e),last=draft.points.at(-1);if(Math.hypot(p[0]-last[0],p[1]-last[1])>=.14&&draft.points.length<120){draft.points.push(p);refreshTraceVisual(draft);}return;}
  if(mapDrag)moveMap(e);
});
map.addEventListener('pointerup',e=>{
  if(draft){
    const p=mapPoint(e),last=draft.points.at(-1);if(Math.hypot(p[0]-last[0],p[1]-last[1])>.05)draft.points.push(p);
    if(traceLength(draft.points)<.55){unmountTraceVisual(draft);draft=null;toast('Draw a longer trace on the floor plan.');}
    else if(editingTrace){editingTrace.points=draft.points;editingTrace.x=draft.points[0][0];editingTrace.z=draft.points[0][1];refreshTraceVisual(editingTrace);unmountTraceVisual(draft);draft=null;saveTraces();setDrawMode(false);toast('Sound trace redrawn.');}
    else{const t=draft;draft=null;unmountTraceVisual(t);t.isDraft=false;addTrace(t);setDrawMode(false);toast(`${traceChoices.find(item=>item.sound===t.sound).name} trace added.`);}
  }
  mapDrag=null;
});
map.addEventListener('pointercancel',()=>{if(draft){unmountTraceVisual(draft);draft=null;}mapDrag=null;});
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});
const clock=new THREE.Clock(),v=new THREE.Vector3(),proj=new THREE.Vector3();let elapsed=0;
function frame(){const dt=Math.min(clock.getDelta(),.05);elapsed+=dt;const view=xr.update(dt);
  if(!renderer.xr.isPresenting&&!engine.mixerOpen&&!$('#help-dialog').open&&!$('#library').open){const f=Number(keys.has('KeyW')||keys.has('ArrowUp'))-Number(keys.has('KeyS')||keys.has('ArrowDown')),r=Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft'));v.set(r,0,-f);if(v.lengthSq()){v.normalize().applyAxisAngle(new THREE.Vector3(0,1,0),camera.rotation.y).multiplyScalar(dt*2.5);camera.position.add(v);camera.position.x=THREE.MathUtils.clamp(camera.position.x,-5.35,5.35);camera.position.z=THREE.MathUtils.clamp(camera.position.z,-5.35,5.35);}}
  for(const s of sources)if(s.type==='bird'&&s.birds){
    // One bird is always nearby. Two companions visit on staggered cycles.
    const present=[true,Math.sin(elapsed*.13-.7)>.15,Math.sin(elapsed*.09-2.3)>.42];
    s.birds.forEach((bird,i)=>{
      const phase=elapsed*(.55+i*.09)+i*2.1;
      const approach=.5+.5*Math.sin(elapsed*(.24+i*.035)+i*1.8);
      bird.group.position.set(
        Math.sin(phase)*(.45+i*.24)+(i-1)*.2,
        1.95+Math.sin(phase*1.9)*.16+i*.2,
        -.95-(1-approach)*(2.1+i*.5)
      );
      bird.group.rotation.y=Math.cos(phase)*.28;
      bird.wing.rotation.z=Math.sin(elapsed*(13+i*1.5))*.55;
      bird.otherWing.rotation.z=-bird.wing.rotation.z;
      if(bird.active!==present[i]){bird.active=present[i];bird.group.visible=present[i];engine.setBirdActive(s,i,present[i]);}
    });
  }
  for(const t of traces){const point=closestPointOnTrace(t.points,view.position.x,view.position.z);if(point)engine.moveTrace(t.player,point.x,point.z);animateTrace(t,elapsed);}
  camera.updateMatrixWorld();engine.listener(view);
  for(const s of sources){s.dot.setAttribute('cx',100+s.x*15);s.dot.setAttribute('cy',100+s.z*15);proj.set(s.x,s.height,s.z).project(view);s.label.style.left=(proj.x*.5+.5)*innerWidth+'px';s.label.style.top=(-proj.y*.5+.5)*innerHeight+'px';s.label.style.display=proj.z<1&&Math.abs(proj.x)<1?'block':'none';s.ring.material.opacity=s.muted?.2:1;s.ring.material.transparent=true;
    if(s.drops&&engine.playing){const a=s.drops.geometry.attributes.position;for(let i=0;i<a.count;i++){a.array[i*3+1]-=dt*1.3;if(a.array[i*3+1]<.23)a.array[i*3+1]=2.13;}a.needsUpdate=true;}
    if(s.spinner&&engine.playing&&!s.muted)s.spinner.rotation.z-=dt*12;
    const bars=s.row.querySelectorAll('.meter i');bars.forEach((b,i)=>b.style.transform=`scaleY(${engine.playing&&s.sound&&!s.muted?.4+.6*Math.abs(Math.sin(elapsed*4+i*1.2)): .15})`);
  }
  $('#listener').setAttribute('transform',`translate(${100+camera.position.x*15},${100+camera.position.z*15}) rotate(${-camera.rotation.y*180/Math.PI})`);
  renderer.render(scene,camera);
}

function saveLayout(){try{localStorage.setItem('sound-room-pages-bedroom-v1',JSON.stringify(sources.map(s=>({type:s.type,x:s.x,z:s.z,rotation:s.rotation||0,volume:s.volume,muted:!!s.muted}))));}catch{}}
function updateCount(){$('#object-count').textContent=String(sources.length).padStart(2,'0');}
function addObject(type,options={},persist=true){
  if(sources.length>=24){toast('Room full: remove an object before adding another.');return;}
  const item=catalog.find(c=>c.type===type);if(!item)return;
  const forward=new THREE.Vector3(0,0,-2.5).applyAxisAngle(new THREE.Vector3(0,1,0),camera.rotation.y);
  const s={...item,id:`${type}-${nextId++}`,x:camera.position.x+forward.x,z:camera.position.z+forward.z,volume:item.volume||0,...options,type};
  s.x=THREE.MathUtils.clamp(s.x,-6+s.radius,6-s.radius);s.z=THREE.MathUtils.clamp(s.z,-6+s.radius,6-s.radius);
  sources.push(s);mount(s);updateCount();
  if(engine.ctx)engine.add(s).catch(error=>{toast(`${s.name} sound could not load. Remove and re-add to retry.`);console.error(error);});
  if(persist){saveLayout();toast(`${s.name} added. Drag to place it.`);}
  return s;
}
function removeObject(s,persist=true){
  s.removed=true;engine.remove(s);if(drag===s)drag=null;if(mapDrag===s)mapDrag=null;
  for(let i=pickables.length-1;i>=0;i--)if(pickables[i].userData.source===s)pickables.splice(i,1);
  scene.remove(s.group);s.group.traverse(o=>{o.geometry?.dispose();});s.row.remove();s.dot.remove();s.label.remove();sources.splice(sources.indexOf(s),1);updateCount();if(persist)saveLayout();
}
$('#add-object').onclick=()=>{keys.clear();if(document.pointerLockElement)document.exitPointerLock();$('#library').showModal();};
$('#close-library').onclick=()=>$('#library').close();
let category='All';
function renderLibrary(){const query=$('#object-search').value.toLowerCase();const list=catalog.filter(item=>(category==='All'||item.category===category)&&`${item.name} ${item.desc}`.toLowerCase().includes(query));$('#object-library').replaceChildren();
  for(const item of list){const button=document.createElement('button');button.className='catalog-item';button.style.setProperty('--c',item.color);button.innerHTML=`<span class="catalog-icon">${{bed:'▰',books:'▤',shelf:'▥',lamp:'♧',rug:'▱',plant:'♧',fan:'✣',clock:'◷',bird:'♪',tv:'▣',record:'◉',rain:'☂',piano:'♬',strings:'♩',drums:'◌'}[item.type]}</span><span><b>${item.name}</b><small>${item.desc}</small></span><span class="catalog-plus">+</span>`;button.setAttribute('aria-label',`Add ${item.name}`);button.onclick=()=>addObject(item.type);$('#object-library').append(button);}
  if(!list.length)$('#object-library').textContent='No objects match. Try a different search.';
}
$('#object-search').oninput=renderLibrary;
document.querySelectorAll('[data-category]').forEach(button=>button.onclick=()=>{category=button.dataset.category;document.querySelectorAll('[data-category]').forEach(b=>b.setAttribute('aria-pressed',b===button));renderLibrary();});
let layout=bedroom;try{
  const current=JSON.parse(localStorage.getItem('sound-room-pages-bedroom-v1'));
  const previous=current??JSON.parse(localStorage.getItem('sound-room-pages-previous-v1'));
  if(Array.isArray(previous)&&previous.length<=24){
    layout=previous.filter(i=>i&&catalog.some(c=>c.type===i.type)&&Number.isFinite(i.x)&&Number.isFinite(i.z)).map(i=>({type:i.type,x:i.x,z:i.type==='bird'&&i.x===0&&i.z===-4.6?-5.15:i.z,rotation:Number.isFinite(i.rotation)?i.rotation:0,volume:Number.isFinite(i.volume)?THREE.MathUtils.clamp(i.volume,0,1):catalog.find(c=>c.type===i.type).volume||0,muted:!!i.muted}));
    if(!current&&layout.length<24&&!layout.some(i=>i.type==='strings'))layout.push({type:'strings',x:-1.8,z:2.4});
  }
}catch{}
for(const item of layout)addObject(item.type,item,false);saveLayout();renderLibrary();
try{
  const stored=JSON.parse(localStorage.getItem('sound-room-pages-traces-v1'));
  if(Array.isArray(stored))for(const item of stored.slice(0,12)){
    if(!traceChoices.some(choice=>choice.sound===item?.sound)||!Array.isArray(item.points)||item.points.length<2||item.points.length>120)continue;
    const points=item.points;
    if(!points.every(p=>Array.isArray(p)&&p.length===2&&p.every(n=>Number.isFinite(n)&&Math.abs(n)<=5.8))||traceLength(points)<.55)continue;
    addTrace({id:`trace-${nextTraceId++}`,sound:item.sound,points,x:points[0][0],z:points[0][1],volume:Number.isFinite(item.volume)?THREE.MathUtils.clamp(item.volume,0,1):.3,muted:!!item.muted},false);
  }
}catch{}
updateTraceCount();saveTraces();

const xr=new BedroomXR({scene,camera,renderer,engine,keys,pickables,catalog,soundChoices:traceChoices,toast,addObject,removeObject,move,saveLayout,setPreset,
  startAudio:async()=>{await start();if(!engine.playing)throw new Error('Audio could not start. Try Start listening first.');},
  addFloorTrace:(sound,points)=>{if(traces.length>=12){toast('Maximum of 12 sound traces.');return;}if(traceLength(points)<.55)return;addTrace({id:`trace-${nextTraceId++}`,sound,points,x:points[0][0],z:points[0][1],volume:.3,muted:false});}
});
renderer.setAnimationLoop(frame);
// Read-only diagnostics for local smoke checks.
window.soundRoom={getState:()=>({preset:engine.preset,playing:engine.playing,listener:camera.position.toArray(),sources:sources.map(({id,x,z,muted})=>({id,x,z,muted:!!muted})),traces:traces.map(({id,sound,points,muted})=>({id,sound,points:points.length,muted:!!muted}))})};

if(import.meta.env.DEV){
  window.soundRoom.getAudioState=()=>engine.diagnostics();
  setInterval(()=>{$('#status').dataset.audio=JSON.stringify(engine.diagnostics());},1000);
}

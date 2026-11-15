import {outdoorObjects} from './outdoor-objects.js';
/** @param {HTMLElement} container @param {any} audio @param {any} objects @param {any} traces */
export function mountOutdoorMixer(container,audio,objects=null,traces=null){
  container.replaceChildren();const heading=document.createElement('h2');heading.textContent='Outdoor sound mixer';container.append(heading);
  const intro=document.createElement('p');intro.textContent='Birds and rustling leaves lead the mix; water, a soft breeze and gentle chimes fill the background. Each control affects only its named source.';container.append(intro);
  if(objects){const title=document.createElement('h3');title.textContent='Add an outdoor object';container.append(title);const hint=document.createElement('p');hint.textContent='Choose one to place it in front of you. Drag objects with your mouse; in Quest, point and hold grip, then release to drop. Each added object has its own sound and mixer row. Up to 16 added objects; these last for this visit.';container.append(hint);const choices=document.createElement('div');choices.className='outdoor-mix-tools';for(const item of outdoorObjects){const button=document.createElement('button');button.textContent='+ '+item.name;button.onclick=()=>objects.add(item.type);choices.append(button);}container.append(choices);}
  traces?.mount(container);
  const signature=()=>audio.channels().map(c=>c.id).join()+"/"+(traces?traces.items.map(t=>t.id+t.sound).join()+traces.nextSound+traces.armed+traces.message:"");const initialSignature=signature();
  const rows=new Map();
  for(const item of audio.channels()){
    const row=document.createElement('div');row.className='outdoor-mix-row';const label=document.createElement('label');label.textContent=item.label;
    const input=document.createElement('input');input.type='range';input.min='0';input.max='100';input.value=String(Math.round(item.level*100));input.setAttribute('aria-label',item.label+' volume');label.append(input);
    const output=document.createElement('output');output.textContent=input.value+'%';const mute=document.createElement('button');mute.type='button';mute.setAttribute('aria-label','Mute '+item.label);
    input.oninput=()=>audio.setChannel(item.id,Number(input.value)/100);mute.onclick=()=>audio.toggleChannel(item.id);row.append(label,output,mute);container.append(row);if(objects?.items.some(object=>object.id===item.id)){const actions=document.createElement('div');actions.className='outdoor-mix-tools';for(const [text,action] of [['Remove',()=>objects.remove(item.id)]]){const button=document.createElement('button');button.textContent=text;button.onclick=action;actions.append(button);}container.append(actions);}rows.set(item.id,{input,output,mute});
  }
  const tools=document.createElement('div');tools.className='outdoor-mix-tools';for(const [text,action] of [['Mute all',()=>audio.muteAll(true)],['Unmute all',()=>audio.muteAll(false)],['Reset lively mix',()=>audio.resetMix()]]){const button=document.createElement('button');button.type='button';button.textContent=text;button.onclick=action;tools.append(button);}container.append(tools);
  let unsubscribe=()=>{};function refresh(){if(signature()!==initialSignature){unsubscribe();mountOutdoorMixer(container,audio,objects,traces);return;}for(const item of audio.channels()){const row=rows.get(item.id);row.input.value=String(Math.round(item.level*100));row.output.textContent=row.input.value+'%';row.mute.textContent=item.muted?'Unmute':'Mute';row.mute.setAttribute('aria-pressed',String(item.muted));row.mute.setAttribute('aria-label',(item.muted?'Unmute ':'Mute ')+item.label);}}
  refresh();unsubscribe=audio.subscribe(refresh);return unsubscribe;
}

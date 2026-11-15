import * as THREE from 'three';
export const catalog = [
  {type:'bed',name:'Bed',desc:'Soft duvet & pillows · quiet',category:'Furniture',color:'#a8c9ac',radius:1.6,height:1.5},
  {type:'books',name:'Books',desc:'Gentle pages turning',category:'Everyday',sound:'books',volume:.3,color:'#e7be8e',radius:.65,height:1.2},
  {type:'shelf',name:'Bookshelf',desc:'A little library · quiet',category:'Furniture',color:'#c49c78',radius:1,height:2.4},
  {type:'lamp',name:'Bedside lamp',desc:'A warm pool of light · quiet',category:'Furniture',color:'#ffe2a3',radius:.65,height:1.9},
  {type:'rug',name:'Rug',desc:'Make a cozy corner · quiet',category:'Furniture',color:'#b4a7cc',radius:1.5,height:.3},
  {type:'plant',name:'Houseplant',desc:'A little green · quiet',category:'Furniture',color:'#9ec998',radius:.6,height:1.6},
  {type:'fan',name:'Desk fan',desc:'A steady, gentle whirr',category:'Sounds',sound:'fan',volume:.22,color:'#9bcbd3',radius:.7,height:1.9},
  {type:'clock',name:'Alarm clock',desc:'A soft tick, not an alarm',category:'Sounds',sound:'clock',volume:.28,color:'#f2bf81',radius:.65,height:1.5},
  {type:'bird',name:'Birds at the window',desc:'One to three birds fly closer and farther',category:'Sounds',sound:'bird',volume:.35,color:'#efd887',radius:.8,height:2.5},
  {type:'tv',name:'Television',desc:'A quiet electronic hum',category:'Sounds',sound:'tv',volume:.2,color:'#a6b9e5',radius:1,height:1.9},
  {type:'record',name:'Record player',desc:'Soft vinyl groove & crackle',category:'Sounds',sound:'record',volume:.4,color:'#e6b9ad',radius:.8,height:1.6},
  {type:'rain',name:'Rain window',desc:'Rain against the glass',category:'Sounds',sound:'rain',volume:.25,color:'#8dc8e8',radius:1,height:2.55},
  {type:'piano',name:'Piano',desc:'Warm lo-fi keys · 80 BPM',category:'Music',sound:'piano',volume:.6,color:'#d6f48a',radius:1.05,height:1.9},
  {type:'strings',name:'Ambient strings',desc:'Slow viola drone & bowed bass',category:'Music',sound:'strings',volume:.3,color:'#cda77e',radius:1,height:2.2},
  {type:'drums',name:'Drummer',desc:'Instrument display · quiet',category:'Music',color:'#f4b879',radius:1.05,height:1.9}
];
export const bedroom = [
  {type:'bed',x:2.7,z:-1.2},{type:'lamp',x:4.3,z:-2.6},{type:'books',x:.1,z:-.7},
  {type:'shelf',x:-4.2,z:-3.9},{type:'rug',x:0,z:1.5},{type:'fan',x:-2.6,z:-.7},
  {type:'clock',x:4.3,z:.1},{type:'bird',x:0,z:-5.15},{type:'strings',x:-1.8,z:2.4}
];
export function buildObject(s, group, kit) {
  const {box,cylinder,mat,wood,dark,ivory,metal}=kit;
  const tint=mat(s.color), cream=mat('#e9e1ce');
  const table=()=>{box(group,.85,.11,.65,0,.72,0,wood);for(const x of [-.34,.34])for(const z of [-.23,.23])box(group,.055,.68,.055,x,.34,z,wood);};
  const sphere=(r,x,y,z,m)=>{const o=new THREE.Mesh(new THREE.SphereGeometry(r,20,16),m);o.position.set(x,y,z);o.castShadow=true;group.add(o);return o;};
  if(s.type==='bed'){
    box(group,2.05,.22,3.1,0,.32,0,wood);for(const x of [-.82,.82])for(const z of [-1.25,1.25])box(group,.14,.3,.14,x,.15,z,wood);
    box(group,2.08,1.12,.14,0,.75,-1.5,wood);box(group,1.96,.32,2.9,0,.59,0,cream);box(group,1.99,.12,2.03,0,.8,.43,tint);
    box(group,1.99,.06,.28,0,.87,-.44,cream);for(const x of [-.49,.49])box(group,.79,.16,.49,x,.83,-1.02,ivory);
    box(group,2.01,.48,.045,0,.54,1.46,tint);for(const x of [-.99,.99])box(group,.045,.4,1.98,x,.58,.43,tint);
  }else if(s.type==='books'){
    table();for(let i=0;i<3;i++){const cover=mat(['#9c6652','#8faaa0','#bfaa7e'][i]);const b=new THREE.Group();b.position.set(0,.81+i*.13,0);b.rotation.y=i*.18;group.add(b);box(b,.55,.085,.36,0,0,0,cream);for(const y of [-.05,.05])box(b,.58,.02,.39,0,y,0,cover);box(b,.025,.11,.39,-.28,0,0,cover);}
  }else if(s.type==='shelf'){
    for(const x of [-.72,.72])box(group,.09,2,.45,x,1,0,wood);box(group,1.5,2,.06,0,1,-.22,wood);
    for(let level=0;level<4;level++){const y=.1+level*.58;box(group,1.5,.07,.48,0,y,0,wood);for(let i=0;i<9;i++){const h=.26+(i%3)*.06;box(group,.1,h,.26,-.59+i*.145,y+.04+h/2,0,mat(['#b87760','#8cafa1','#bbab78','#8d98b3'][i%4]));}}
  }else if(s.type==='lamp'){
    table();cylinder(group,.19,.22,.04,0,.81,0,metal);cylinder(group,.025,.025,.5,0,1.08,0,metal);cylinder(group,.18,.34,.38,0,1.4,0,tint);
    const light=new THREE.PointLight('#ffd691',2.4,3.5);light.position.set(0,1.25,0);group.add(light);
  }else if(s.type==='rug'){
    box(group,2.8,.025,2.15,0,.025,0,tint);for(const x of [-1.28,1.28])box(group,.04,.005,1.95,x,.042,0,cream);
    for(const z of [-.96,.96])box(group,2.6,.005,.04,0,.042,z,cream);
  }else if(s.type==='plant'){
    cylinder(group,.24,.17,.42,0,.22,0,mat('#ba8264'));cylinder(group,.025,.025,.78,0,.78,0,wood);
    for(let i=0;i<7;i++){const a=i*2.4;const leaf=sphere(.2,Math.cos(a)*.2,.65+i*.08,Math.sin(a)*.2,tint);leaf.scale.set(.55,1.2,.7);leaf.rotation.z=Math.sin(a)*.9;}
  }else if(s.type==='fan'){
    table();cylinder(group,.19,.24,.045,0,.81,0,metal);box(group,.055,.43,.055,0,1.03,0,metal);
    const rim=new THREE.Mesh(new THREE.TorusGeometry(.34,.025,8,40),metal);rim.position.set(0,1.4,0);group.add(rim);
    const blades=s.spinner=new THREE.Group();blades.position.set(0,1.4,0);group.add(blades);
    for(let i=0;i<3;i++){const blade=box(blades,.13,.4,.025,0,0,0,tint);blade.position.set(Math.sin(i*2.094)*.12,Math.cos(i*2.094)*.12,0);blade.rotation.z=-i*2.094;}
    sphere(.06,0,1.4,.04,metal);
    for(let i=0;i<8;i++){const a=i*Math.PI/4;const wire=box(group,.009,.66,.012,0,1.4,.07,metal);wire.rotation.z=a;}
  }else if(s.type==='clock'){
    table();const face=cylinder(group,.26,.26,.12,0,1.06,0,tint);face.rotation.x=Math.PI/2;
    const dial=cylinder(group,.225,.225,.012,0,1.06,.07,ivory);dial.rotation.x=Math.PI/2;
    box(group,.018,.16,.018,0,1.12,.09,dark);const hand=box(group,.14,.018,.018,.06,1.06,.09,dark);hand.rotation.z=-.4;
    for(const x of [-.19,.19])sphere(.09,x,1.31,0,tint);
  }else if(s.type==='bird'){
    // Open pane and frame. The wall opening is behind this object in the starter room.
    for(const x of [-1.25,1.25])box(group,.1,2.45,.1,x,2,-.68,wood);
    for(const y of [.78,3.22])box(group,2.6,.1,.1,0,y,-.68,wood);
    box(group,2.55,.045,.4,0,.75,-.49,ivory);
    box(group,.045,2.4,.06,0,2,-.62,ivory);
    box(group,2.5,.04,.06,0,2,-.62,ivory);
    s.birds=[];
    for(let i=0;i<3;i++){
      const flyer=new THREE.Group();group.add(flyer);
      const birdTint=mat(['#efd887','#b9d3bc','#e7b698'][i]);
      const body=new THREE.Mesh(new THREE.SphereGeometry(.12,16,12),birdTint);body.scale.set(1,1,1.45);flyer.add(body);
      const head=new THREE.Mesh(new THREE.SphereGeometry(.075,12,10),birdTint);head.position.set(0,.08,.1);flyer.add(head);
      const beak=new THREE.Mesh(new THREE.ConeGeometry(.035,.095,6),mat('#da9462'));beak.rotation.x=Math.PI/2;beak.position.set(0,.07,.2);flyer.add(beak);
      const wing=new THREE.Group(),otherWing=new THREE.Group();flyer.add(wing,otherWing);
      for(const [part,side] of [[wing,-1],[otherWing,1]]){part.position.x=side*.08;const feather=new THREE.Mesh(new THREE.ConeGeometry(.07,.28,5),birdTint);feather.rotation.z=side*Math.PI/2;feather.position.x=side*.14;part.add(feather);}
      s.birds.push({group:flyer,wing,otherWing,active:i===0});
      flyer.visible=i===0;
    }
  }else if(s.type==='strings'){
    const amber=mat('#9a6340',.42),maple=mat('#bd8656',.4),fingerboard=mat('#2d2826');
    for(const [x,y,scale,color,isBass] of [[-.31,.58,.58,amber,false],[.34,.13,1.08,maple,true]]){
      const instrument=new THREE.Group();instrument.position.set(x,y,0);instrument.scale.setScalar(scale);group.add(instrument);
      const body=new THREE.Mesh(new THREE.SphereGeometry(.27,20,16),color);body.scale.set(.78,1.3,.4);body.position.y=.76;instrument.add(body);
      box(instrument,.11,.9,.1,0,1.49,0,color);
      box(instrument,.065,1.12,.025,0,1.37,.075,fingerboard);
      for(const side of [-1,1])box(instrument,.035,.13,.07,side*.11,1.87,.04,fingerboard);
      if(isBass)box(instrument,.025,.45,.025,0,.15,0,metal);
      for(const side of [-1,1])box(instrument,.025,.32,.02,side*.1,.81,.12,fingerboard);
    }
    for(const x of [-.47,-.15])box(group,.025,.55,.025,x,.31,0,metal);
    box(group,.37,.025,.17,-.31,.55,0,metal);
    box(group,.92,.07,.46,0,.08,0,wood);
  }else if(s.type==='tv'){
    box(group,1.55,.5,.5,0,.3,0,wood);box(group,1.42,.83,.11,0,1.04,0,dark);box(group,1.3,.71,.015,0,1.04,.065,new THREE.MeshStandardMaterial({color:'#7c9bb0',emissive:'#466f85',emissiveIntensity:.35}));box(group,.1,.24,.12,0,.57,0,metal);
  }else if(s.type==='record'){
    table();box(group,.74,.1,.54,0,.85,0,tint);cylinder(group,.22,.22,.02,-.08,.92,0,dark);cylinder(group,.065,.065,.025,-.08,.94,0,cream);box(group,.025,.025,.32,.24,.95,0,metal);
  }else return false;
  return true;
}

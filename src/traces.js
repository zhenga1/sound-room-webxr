export function traceLength(points){
  let length=0;
  for(let i=1;i<points.length;i++)length+=Math.hypot(points[i][0]-points[i-1][0],points[i][1]-points[i-1][1]);
  return length;
}

const styles={
  books:{dash:'7 4',effect:'page',pace:.18,count:5,description:'floating page flecks'},
  fan:{dash:'2 4',effect:'spin',pace:.42,count:5,description:'spinning air rings'},
  clock:{dash:'1 5',effect:'tick',pace:.25,count:7,description:'rhythmic light ticks'},
  bird:{dash:'3 7',effect:'flutter',pace:.34,count:6,description:'fluttering motes'},
  tv:{dash:'4 2',effect:'flicker',pace:.55,count:6,description:'flickering pixels'},
  record:{dash:'10 4',effect:'ring',pace:.27,count:4,description:'spinning vinyl rings'},
  rain:{dash:'1 4',effect:'drop',pace:.45,count:8,description:'falling droplets'},
  piano:{dash:'6 3',effect:'key',pace:.28,count:6,description:'pulsing keys'},
  strings:{dash:'12 5',effect:'wave',pace:.14,count:7,description:'slow glowing waves'}
};
export function traceVisualStyle(sound){return styles[sound]??styles.strings;}

export function pointAlongTrace(points,progress){
  if(!points.length)return null;
  if(points.length===1)return {x:points[0][0],z:points[0][1],angle:0};
  const total=traceLength(points);
  if(total===0)return {x:points[0][0],z:points[0][1],angle:0};
  let remaining=((progress%1)+1)%1*total;
  for(let i=1;i<points.length;i++){
    const [ax,az]=points[i-1],[bx,bz]=points[i],length=Math.hypot(bx-ax,bz-az);
    if(remaining<=length||i===points.length-1){const amount=length?remaining/length:0;return {x:ax+(bx-ax)*amount,z:az+(bz-az)*amount,angle:Math.atan2(bz-az,bx-ax)};}
    remaining-=length;
  }
}

// A line is an extended sound source. The listener hears its nearest point.
export function closestPointOnTrace(points,x,z){
  if(!points.length)return null;
  let best={x:points[0][0],z:points[0][1],distance:Infinity};
  for(let i=1;i<points.length;i++){
    const [ax,az]=points[i-1],[bx,bz]=points[i],dx=bx-ax,dz=bz-az;
    const amount=dx*dx+dz*dz;
    const t=amount?Math.max(0,Math.min(1,((x-ax)*dx+(z-az)*dz)/amount)):0;
    const px=ax+dx*t,pz=az+dz*t,distance=Math.hypot(x-px,z-pz);
    if(distance<best.distance)best={x:px,z:pz,distance};
  }
  if(points.length===1)best.distance=Math.hypot(x-best.x,z-best.z);
  return best;
}

const aliases={w:'KeyW',a:'KeyA',s:'KeyS',d:'KeyD',arrowup:'ArrowUp',arrowdown:'ArrowDown',arrowleft:'ArrowLeft',arrowright:'ArrowRight'};
const codes=new Set(Object.values(aliases));
export function movementCode(event){return codes.has(event.code)?event.code:aliases[event.key?.toLowerCase()]||null;}
export function isEditing(target){return !!target&&(target.isContentEditable||['INPUT','TEXTAREA','SELECT','BUTTON'].includes(target.tagName)||!!target.closest?.('[role="dialog"],dialog,[contenteditable="true"]'));}

// Key releases are handled even when controls are blocked. A short repeat lease
// also stops motion if a browser/virtual keyboard loses its release event entirely.
export class MovementInput {
  constructor(pressed,{now=()=>performance.now(),firstLease=800,repeatLease=180}={}){this.pressed=pressed;this.now=now;this.firstLease=firstLease;this.repeatLease=repeatLease;this.deadlines=new Map();}
  down(event,enabled=true){
    const code=movementCode(event);if(!code)return;
    if(!enabled||event.ctrlKey||event.metaKey||event.altKey||isEditing(event.target)){this.clear();return;}
    // Repeats cannot restart a key after focus/menu cancellation: require a fresh press.
    if(event.repeat&&!this.pressed.has(code))return;
    event.preventDefault?.();this.pressed.add(code);this.deadlines.set(code,this.now()+(event.repeat?this.repeatLease:this.firstLease));
  }
  up(event){const code=movementCode(event);if(code){this.pressed.delete(code);this.deadlines.delete(code);}}
  clear(){this.pressed.clear();this.deadlines.clear();}
  tick(enabled=true){if(!enabled){this.clear();return;}const now=this.now();for(const [code,deadline] of this.deadlines)if(!this.pressed.has(code)||deadline<=now){this.pressed.delete(code);this.deadlines.delete(code);}}
}

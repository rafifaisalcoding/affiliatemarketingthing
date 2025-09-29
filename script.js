const root=document.documentElement;
let last=0;
function tick(t){
  if(!last) last=t;
  const delta=(t-last);
  last=t;
  const speed=0.00006;
  const s=Math.sin(t*speed);
  const c=Math.cos(t*speed);
  const h1=215 + s*12;
  const h2=245 + c*12;
  const l1=52 + s*4;
  const l2=28 + c*3;
  root.style.setProperty('--color1', `hsl(${h1} 80% ${l1}%)`);
  root.style.setProperty('--color2', `hsl(${h2} 70% ${l2}%)`);
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

const btns=[...document.querySelectorAll('.filter-btn')];
const blocks=[...document.querySelectorAll('[data-theme-block]')];
btns.forEach(btn=>btn.addEventListener('click',()=>{
  btns.forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});
  btn.classList.add('active');btn.setAttribute('aria-pressed','true');
  const filter=btn.dataset.filter;
  blocks.forEach(block=>{block.hidden=!(filter==='all'||block.dataset.themeBlock===filter)});
}));

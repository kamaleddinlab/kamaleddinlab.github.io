const navToggle=document.querySelector('.nav-toggle');
if(navToggle){navToggle.addEventListener('click',()=>{const open=document.body.classList.toggle('nav-open');navToggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('nav-open')));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -30px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());


const btns=[...document.querySelectorAll('.filter-btn')], rows=[...document.querySelectorAll('[data-theme]')];
btns.forEach(b=>b.addEventListener('click',()=>{btns.forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;rows.forEach(r=>r.hidden=!(f==='all'||r.dataset.theme.includes(f)));}));


const ICONS={
brain:'<svg viewBox="0 0 24 24"><path d="M9.5 4.5A3.5 3.5 0 0 0 6 8v.2A3.8 3.8 0 0 0 4 15a3.5 3.5 0 0 0 5.5 2.9V6.2a3 3 0 0 1 3-3"/><path d="M14.5 4.5A3.5 3.5 0 0 1 18 8v.2a3.8 3.8 0 0 1 2 6.8 3.5 3.5 0 0 1-5.5 2.9V6.2a3 3 0 0 0-3-3"/><path d="M6 10h3.5M18 10h-3.5M6.5 16h3M17.5 16h-3"/></svg>',
chat:'<svg viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><path d="M8 9h8M8 13h5"/></svg>',
shield:'<svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 4.8-3 8-7 10-4-2-7-5.2-7-10V6z"/><path d="m9 12 2 2 4-4"/></svg>',
activity:'<svg viewBox="0 0 24 24"><path d="M3 12h4l2-6 4 12 2-6h6"/></svg>',
users:'<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
grad:'<svg viewBox="0 0 24 24"><path d="m2 10 10-5 10 5-10 5z"/><path d="M6 12v5c3 2 9 2 12 0v-5M22 10v6"/></svg>',
microscope:'<svg viewBox="0 0 24 24"><path d="M6 18h8M3 22h18M14 22a6 6 0 0 0 0-12h-1"/><path d="M9 14 6 11l5-5 3 3zM8 7 6 5l3-3 2 2"/></svg>',
file:'<svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>',
github:'<svg viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1 0S17.9-.4 15 1.5a13.4 13.4 0 0 0-6 0C6.1-.4 4.9 0 4.9 0a5.4 5.4 0 0 0-.2 3A5.8 5.8 0 0 0 3.2 7.1c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 9 18v4"/><path d="M9 19c-3 .9-3-1.5-4-2"/></svg>',
link:'<svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>',
map:'<svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/></svg>',
mail:'<svg viewBox="0 0 24 24"><path d="M3 5h18v14H3z"/><path d="m3 6 9 7 9-7"/></svg>',
building:'<svg viewBox="0 0 24 24"><path d="M4 22V6l8-4v20M12 8h8v14M2 22h20"/><path d="M7 9h2M7 13h2M7 17h2M15 12h2M15 16h2"/></svg>',
arrow:'<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
heart:'<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/><path d="M8 12h2l1-3 2 6 1-3h2"/></svg>',
network:'<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="m7.7 7 3.2 9M16.3 7l-3.2 9M8 6h8"/></svg>',
book:'<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5z"/><path d="M4 6.5v13A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>',
code:'<svg viewBox="0 0 24 24"><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></svg>',
spark:'<svg viewBox="0 0 24 24"><path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z"/></svg>',
search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
globe:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.2 2.4 3.5 5.4 3.5 9S14.2 18.6 12 21M12 3c-2.2 2.4-3.5 5.4-3.5 9S9.8 18.6 12 21"/></svg>'
};
document.querySelectorAll('[data-icon]').forEach(el=>{const k=el.dataset.icon;if(ICONS[k]){el.classList.add('icon');el.innerHTML=ICONS[k];}});
const toggle=document.querySelector('.nav-toggle'), links=document.querySelector('.nav-links');
if(toggle&&links) toggle.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));

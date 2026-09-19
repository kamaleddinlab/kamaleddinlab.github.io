const THEME_META={
 clinical:{label:'Clinical & agentic AI',icon:'chat',img:'assets/img/pub-clinical.svg'},
 safety:{label:'Safety & digital twins',icon:'shield',img:'assets/img/pub-safety.svg'},
 population:{label:'Population mental health & causal ML',icon:'network',img:'assets/img/pub-population.svg'},
 clinicalepi:{label:'Clinical epidemiology',icon:'search',img:'assets/img/pub-clinicalepi.svg'},
 neurotech:{label:'Neurotechnology & neuromodulation',icon:'activity',img:'assets/img/pub-neurotech.svg'},
 neural:{label:'Neural coding & neurophysiology',icon:'brain',img:'assets/img/pub-neural.svg'},
 biomed:{label:'Biomedical foundations',icon:'microscope',img:'assets/img/pub-biomed.svg'}
};
const STATUS_ORDER=['Published','Accepted','Preprint','Under review'];
const THEME_ORDER=['clinical','safety','population','clinicalepi','neurotech','neural','biomed'];
let activeTheme='all', activeStatus='all';
const library=document.querySelector('#publication-library');
const stats=document.querySelector('#publication-stats');
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function slug(s){return s.toLowerCase().replace(/\s+/g,'-');}
function renderStats(){
 const p=window.PUBLICATIONS_DATA||[]; const counts={}; p.forEach(x=>counts[x.status]=(counts[x.status]||0)+1);
 stats.innerHTML=`<span><b>${p.length}</b> total works</span><span><b>${counts['Published']||0}</b> published</span><span><b>${counts['Accepted']||0}</b> accepted</span><span><b>${counts['Preprint']||0}</b> preprints</span><span><b>${counts['Under review']||0}</b> under review</span>`;
}
function card(p,meta){
 return `<a class="publication-card" href="${esc(p.url)}" target="_blank" rel="noopener"><div class="publication-thumb"><img src="${meta.img}" alt="${esc(meta.label)} visual summary"/></div><div class="publication-body"><div class="publication-kicker"><span>${p.year}</span><span class="status status-${slug(p.status)}">${esc(p.status)}</span></div><h3>${esc(p.title)}</h3><div class="publication-venue">${esc(p.venue)}</div><div class="publication-link">${p.status==='Under review'?'Search title':'Open publication'} <span data-icon="arrow"></span></div></div></a>`;
}
function render(){
 const data=(window.PUBLICATIONS_DATA||[]).filter(p=>(activeTheme==='all'||p.theme===activeTheme)&&(activeStatus==='all'||p.status===activeStatus));
 if(!data.length){library.innerHTML='<div class="empty-state">No publications match these filters.</div>';return;}
 library.innerHTML=THEME_ORDER.map(theme=>{
   const themeItems=data.filter(p=>p.theme===theme); if(!themeItems.length)return '';
   const meta=THEME_META[theme];
   const statusGroups=STATUS_ORDER.map(status=>{
      const items=themeItems.filter(p=>p.status===status).sort((a,b)=>b.year-a.year||a.title.localeCompare(b.title));
      if(!items.length)return '';
      return `<div class="pub-status-group"><div class="pub-status-head"><span class="status status-${slug(status)}">${esc(status)}</span><span>${items.length} ${items.length===1?'work':'works'}</span></div><div class="publication-grid">${items.map(p=>card(p,meta)).join('')}</div></div>`;
   }).join('');
   return `<section class="pub-theme-section"><div class="pub-theme-head"><div><span class="pub-theme-icon" data-icon="${meta.icon}"></span><h2>${meta.label}</h2></div><span>${themeItems.length} ${themeItems.length===1?'work':'works'}</span></div>${statusGroups}</section>`;
 }).join('');
 document.querySelectorAll('[data-icon]').forEach(el=>{if(window.ICONS&&window.ICONS[el.dataset.icon]){el.classList.add('icon');el.innerHTML=window.ICONS[el.dataset.icon];}});
}
document.querySelectorAll('[data-theme-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-theme-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');activeTheme=b.dataset.themeFilter;render();}));
document.querySelectorAll('[data-status-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-status-filter]').forEach(x=>x.classList.remove('active'));b.classList.add('active');activeStatus=b.dataset.statusFilter;render();}));
renderStats(); render();

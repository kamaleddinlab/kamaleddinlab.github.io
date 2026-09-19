(()=>{
  const cards=[...document.querySelectorAll('[data-pub-card]')];
  const sections=[...document.querySelectorAll('[data-theme-section]')];
  const themeBtns=[...document.querySelectorAll('[data-theme-filter]')];
  const statusBtns=[...document.querySelectorAll('[data-status-filter]')];
  const search=document.getElementById('pub-search');
  const empty=document.getElementById('pub-empty');
  let theme='all', status='all', query='';
  function apply(){
    let visible=0;
    cards.forEach(card=>{
      const t=card.dataset.theme, s=card.dataset.status, hay=card.dataset.search||'';
      const themeOk=theme==='all'||t===theme;
      const statusOk=status==='all'||(status==='published-group'?(s==='published'||s==='editorial'):s===status);
      const searchOk=!query||hay.includes(query);
      const show=themeOk&&statusOk&&searchOk;
      card.hidden=!show; if(show) visible++;
    });
    sections.forEach(sec=>{sec.hidden=![...sec.querySelectorAll('[data-pub-card]')].some(c=>!c.hidden);});
    if(empty) empty.hidden=visible!==0;
  }
  themeBtns.forEach(btn=>btn.addEventListener('click',()=>{theme=btn.dataset.themeFilter;themeBtns.forEach(b=>b.classList.toggle('active',b===btn));apply();}));
  statusBtns.forEach(btn=>btn.addEventListener('click',()=>{status=btn.dataset.statusFilter;statusBtns.forEach(b=>b.classList.toggle('active',b===btn));apply();}));
  if(search) search.addEventListener('input',()=>{query=search.value.trim().toLowerCase();apply();});
})();
const publications = [
  {year:2026, area:'Agentic AI', status:'published', title:'A multi-agent large language model framework for structured clinical interviewing and psychiatric screening: A proof-of-concept.', authors:'Kamaleddin, M.A., et al.', journal:'Nature Translational Psychiatry', link:'https://www.nature.com/articles/s41398-026-04335-5'},
  {year:2026, area:'Agentic AI', status:'published', title:'Multiagent large language model framework for psychotherapy fidelity assessment in motivational interviewing and cognitive behavioral therapy training.', authors:'Kamaleddin, M.A., et al.', journal:'JMIR Medical Education', link:'https://mededu.jmir.org/2026/1/e92964'},
  {year:2026, area:'Agentic AI', status:'published', title:'Enhancing psychiatry training using an agentic AI simulated consultation tool: Prospective cohort study.', authors:'Rueda, A., Al-Shamali, H.F., Cote, Z., Roy, N., Janssen-Aguilar, R., Joseph, J., Kamaleddin, M.A., et al.', journal:'JMIR Medical Education', link:'https://mededu.jmir.org/2026/1/e88580'},
  {year:2026, area:'Agentic AI', status:'published', title:'Reimagining psychiatric care with agentic AI: Promise, challenges, and a roadmap forward.', authors:'Sharma, D., Meshkat, S., Perivolaris, A., Kamaleddin, M.A., et al.', journal:'npj Digital Medicine', link:'https://www.nature.com/articles/s41746-026-02453-4'},
  {year:2026, area:'Agentic AI', status:'review', title:'Evaluating single- and multi-agent large language model psychotherapy systems for motivational interviewing.', authors:'Kamaleddin, M.A., et al.', journal:'Journal of the American Medical Informatics Association'},
  {year:2026, area:'Agentic AI', status:'review', title:'End-to-end redesign of psychiatric outpatient services using a conceptual human-governed multi-agent system: A discrete-event simulation study.', authors:'Joseph, J., Rueda, A., Janssen-Aguilar, R., Li, Y., Kamaleddin, M.A., et al.', journal:'Journal of Medical Systems'},
  {year:2026, area:'Agentic AI', status:'review', title:'Foundation models in psychiatry: From generalist tools to precision mental health agents.', authors:'Sharma, D., Kamaleddin, M.A., et al.', journal:'NEJM AI'},
  {year:2026, area:'Agentic AI', status:'review', title:'Precision psychiatry needs precision models: Systematic review and vision for disorder-specific foundation models in psychiatry.', authors:'Sharma, D., Al-Shamali, H., Teferra, B.G., Kamaleddin, M.A., et al.', journal:'npj Digital Medicine'},

  {year:2026, area:'Responsible AI', status:'published', title:'Assessing the impact of safety guardrails on large language models using irritability metrics.', authors:'Teferra, B.G., Johny, N., Huang, S., Rueda, A., Kamaleddin, M.A., et al.', journal:'npj Digital Medicine', link:'https://www.nature.com/articles/s41746-025-02333-3'},
  {year:2026, area:'Responsible AI', status:'published', title:'Too agreeable to be accurate? Sycophancy and diagnostic instability of large language models in medical diagnosis.', authors:'Dharma, C., Samsel, K., Bahakeen, A., Ravikumar, K., Bhat, V., Kamaleddin, M.A., et al.', journal:'Artificial Intelligence in Medicine', link:'https://www.sciencedirect.com/science/article/abs/pii/S0933365726001685'},
  {year:2026, area:'Responsible AI', status:'preprint', title:'Evaluating the open-source toxicity detector “Detoxify” in sensitive migration and health contexts.', authors:'Xie, S., Meyappan, V., Karimi, H., Daneshvar, H., Kamaleddin, M.A., et al.', journal:'arXiv / preprint', link:'https://www.torontomu.ca/content/dam/bridging-divides/documents/events/tiai-may-2026-papers.pdf'},
  {year:2026, area:'Responsible AI', status:'review', title:'Persona configuration and the safety of large language model responses to mental health questions.', authors:'Kamaleddin, M.A., et al.', journal:'British Journal of Psychiatry'},
  {year:2026, area:'Responsible AI', status:'accepted', title:'Do toxicity detectors and guardrails reliably measure LLM safety?', authors:'Xie, S., Daneshvar, H., Karimi, H., Kamaleddin, M.A., et al.', journal:'18th Asian Conference on Machine Learning (ACML)'},
  {year:2026, area:'Responsible AI', status:'review', title:'Digital twin evaluation as prompt-prior infrastructure: A multi-model audit for economic preference prediction.', authors:'Kamaleddin, M.A., et al.', journal:'40th Annual Conference on Neural Information Processing Systems (NeurIPS)'},
  {year:2026, area:'Responsible AI', status:'review', title:'Evaluating LLM-based clinical digital twins for longitudinal patient forecasting.', authors:'Kamaleddin, M.A., et al.', journal:'NeurIPS 2026 Workshop on GenAI for Health'},
  {year:2026, area:'Responsible AI', status:'review', title:'Does the simulator know the person? Identity-specific validation of large language models for clinical user simulation.', authors:'Kamaleddin, M.A., et al.', journal:'NeurIPS 2026 Workshop on Grounded User Simulation for Model Evaluation and Training'},

  {year:2026, area:'Population & Causal ML', status:'review', title:'Causal machine learning for precision psychiatry: Applications, challenges, and future directions.', authors:'Kamaleddin, M.A., Mirjalili, M., et al.', journal:'Nature Mental Health'},
  {year:2026, area:'Population & Causal ML', status:'review', title:'Interpretable machine learning to characterize treatment-seeking among adults with unmet mental health need.', authors:'Kamaleddin, M.A., et al.', journal:'American Journal of Epidemiology'},
  {year:2026, area:'Population & Causal ML', status:'review', title:'Machine learning classification of suicidality among US adults: A nationally representative cross-sectional study.', authors:'Kamaleddin, M.A., et al.', journal:'Social Psychiatry and Psychiatric Epidemiology'},
  {year:2026, area:'Population & Causal ML', status:'review', title:'A multimodal machine learning model for predicting incident neuropsychiatric symptoms in older adults.', authors:'Mirjalili, M., Kamaleddin, M.A., et al.', journal:'Scientific Reports'},
  {year:2026, area:'Population & Causal ML', status:'review', title:'Psychological distress, functional health, and memory difficulty in later life: A population-based machine learning study.', authors:'Kamaleddin, M.A., et al.', journal:'International Journal of Medical Informatics'},
  {year:2026, area:'Population & Causal ML', status:'review', title:'Social and clinical information in the cross-sectional classification of major depressive episode: Evidence from a national U.S. survey.', authors:'Kamaleddin, M.A., et al.', journal:'Health Information Management Journal'},
  {year:2015, area:'Population & Causal ML', status:'published', title:'Distribution of ABO and Rh blood groups in patients with keratoconus: A case-control study.', authors:'Naderan, M., Rajabi, M.T., Shoar, S., Kamaleddin, M.A., et al.', journal:'Eye & Contact Lens', link:'https://www.ovid.com/jnls/claojournal/abstract/10.1097/icl.0000000000000098~distribution-of-abo-and-rh-blood-groups-in-patients-with'},
  {year:2015, area:'Population & Causal ML', status:'published', title:'Keratoconus clinical findings according to different classifications.', authors:'Naderan, M., Shoar, S., Kamaleddin, M.A., et al.', journal:'Cornea', link:'https://www.ovid.com/jnls/corneajrnl/abstract/10.1097/ico.0000000000000537~keratoconus-clinical-findings-according-to-different'},
  {year:2015, area:'Population & Causal ML', status:'published', title:'Association between the prevalence of obstructive sleep apnoea and the severity of keratoconus.', authors:'Naderan, M., Rezagholizadeh, F., Zolfaghari, M., Kamaleddin, M.A., et al.', journal:'British Journal of Ophthalmology', link:'https://bjo.bmj.com/content/99/12/1675.long'},
  {year:2015, area:'Population & Causal ML', status:'published', title:'Comparison of corneal measurements in keratoconic eyes using rotating Scheimpflug camera and scanning-slit topography.', authors:'Naderan, M., Shoar, S., Kamaleddin, M.A., et al.', journal:'International Journal of Ophthalmology', link:'https://pmc.ncbi.nlm.nih.gov/articles/PMC4413582/'},

  {year:2026, area:'Neurotechnology', status:'published', title:'EEG-AI: An agentic system for AI-assisted semi-automated EEG preprocessing and artifact removal.', authors:'Abdou, A., Ivanov, M., Shaya, S., Rueda, A., Gholamali-Nezhad, F., Demchenko, I., Kamaleddin, M.A., et al.', journal:'Journal of Neuroscience Methods', link:'https://www.sciencedirect.com/science/article/abs/pii/S0165027026000890'},
  {year:2026, area:'Neurotechnology', status:'published', title:'Fronto-cingulate gamma synchrony predicts deep brain stimulation response in treatment-resistant depression: Preliminary evidence.', authors:'Gholamali-Nezhad, F., Tailor, I., Chegini, S., Demchenko, I., Rueda, A., Kamaleddin, M.A., et al.', journal:'Journal of Psychiatry and Neuroscience', link:'https://cdnsciencepub.com/doi/abs/10.1139/jpn-2026-0016'},
  {year:2026, area:'Neurotechnology', status:'review', title:'Temporal interference stimulation: From mechanisms to circuit-based therapeutics.', authors:'Demchenko, I., Tailor, I., Chegini, S., Kamaleddin, M.A., et al.', journal:'Brain'},

  {year:2026, area:'Neural Coding', status:'published', title:'Advancements in neural coding: Sensory perception and multiplexed encoding strategies.', authors:'Kamaleddin, M.A.', journal:'Frontiers in Computational Neuroscience', link:'https://www.frontiersin.org/journals/computational-neuroscience/articles/10.3389/fncom.2026.1834521/full'},
  {year:2025, area:'Neural Coding', status:'published', title:'Simultaneous encoding of sensory features: The role of multiplexing and noise in tactile perception and neural representation.', authors:'Kamaleddin, M.A.', journal:'Biological Reviews', link:'https://onlinelibrary.wiley.com/doi/full/10.1111/brv.70093'},
  {year:2025, area:'Neural Coding', status:'published', title:'Biophysical properties of the membrane influence spike initiation dynamics and neuronal excitability: A focus on Kv1 channels in myelinated axons.', authors:'Kamaleddin, M.A.', journal:'Proceedings of the Royal Society B', link:'https://royalsocietypublishing.org/rspb/article/292/2051/20250687/234499'},
  {year:2022, area:'Neural Coding', status:'published', title:'Physiological noise facilitates multiplexed coding of vibrotactile-like signals in somatosensory cortex.', authors:'Kamaleddin, M.A., et al.', journal:'Proceedings of the National Academy of Sciences (PNAS)', link:'https://www.pnas.org/doi/abs/10.1073/pnas.2118163119'},
  {year:2022, area:'Neural Coding', status:'published', title:'Degeneracy in the nervous system: From neuronal excitability to neural coding.', authors:'Kamaleddin, M.A.', journal:'BioEssays', link:'https://onlinelibrary.wiley.com/doi/abs/10.1002/bies.202100148'},
  {year:2021, area:'Neural Coding', status:'preprint', title:'Spike initiation properties in the axon support high-fidelity signal transmission.', authors:'Kamaleddin, M.A., et al.', journal:'bioRxiv', link:'https://www.biorxiv.org/content/10.1101/2021.12.13.472435v1.abstract'},
  {year:2018, area:'Neural Coding', status:'published', title:'Molecular, biophysical, and pharmacological properties of calcium-activated chloride channels.', authors:'Kamaleddin, M.A.', journal:'Journal of Cellular Physiology', link:'https://onlinelibrary.wiley.com/doi/abs/10.1002/jcp.25823'},
  {year:2017, area:'Neural Coding', status:'published', title:'Nano-ophthalmology: Applications and considerations.', authors:'Kamaleddin, M.A.', journal:'Nanomedicine', link:'https://www.sciencedirect.com/science/article/abs/pii/S1549963417300266'},
  {year:2017, area:'Neural Coding', status:'published', title:'A comprehensive review on exosomes and microvesicles as epigenetic factors.', authors:'Bakhshandeh, B., Kamaleddin, M.A., et al.', journal:'Current Stem Cell Research & Therapy', link:'https://www.benthamdirect.com/content/journals/cscr/10.2174/1574888X11666160709211528'},
  {year:2016, area:'Neural Coding', status:'published', title:'The paradoxical pro- and antiangiogenic actions of resveratrol: Therapeutic applications in cancer and diabetes.', authors:'Kamaleddin, M.A.', journal:'Annals of the New York Academy of Sciences', link:'https://nyaspubs.onlinelibrary.wiley.com/doi/abs/10.1111/nyas.13283'}
];

const statusLabels = { published:'Published', review:'Under review', preprint:'Preprint', accepted:'Accepted' };
const list = document.getElementById('publication-list');
const search = document.getElementById('pub-search');
const count = document.getElementById('pub-count');
let activeArea = 'All';

function iconExternal(){
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3h7v7"/><path d="M10 14L21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>';
}

function render(){
  if (!list) return;
  const q = (search?.value || '').trim().toLowerCase();
  const filtered = publications.filter(p => {
    const areaOk = activeArea === 'All' || p.area === activeArea;
    const hay = `${p.title} ${p.authors} ${p.journal} ${p.area} ${p.year}`.toLowerCase();
    return areaOk && (!q || hay.includes(q));
  }).sort((a,b) => b.year-a.year);
  count.textContent = `${filtered.length} of ${publications.length} works`;
  list.innerHTML = filtered.length ? filtered.map(p => `
    <article class="pub-item reveal visible">
      <div class="pub-year">${p.year}</div>
      <div>
        <div class="pub-title">${p.title}</div>
        <div class="pub-authors">${p.authors}</div>
        <div class="pub-journal"><span>${p.journal}</span><span class="status ${p.status}">${statusLabels[p.status]}</span><span class="pill">${p.area}</span></div>
      </div>
      ${p.link ? `<a class="pub-link" href="${p.link}" target="_blank" rel="noopener" aria-label="Open publication">${iconExternal()}</a>` : '<span></span>'}
    </article>`).join('') : '<div class="empty-state">No publications match those filters.</div>';
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeArea = btn.dataset.area;
    render();
  });
});
search?.addEventListener('input', render);
render();

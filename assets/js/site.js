const menuButton = document.querySelector('.menu-btn');
menuButton?.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
  menuButton.setAttribute('aria-expanded', document.body.classList.contains('nav-open') ? 'true' : 'false');
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => document.body.classList.remove('nav-open')));

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

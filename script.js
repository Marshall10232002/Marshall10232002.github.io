// ----- Tab-style page switching -----
// script.js
const brand    = document.querySelector('nav .brand');
const navLinks = document.querySelectorAll('nav a[href^="#"]:not(.brand)');
const sections = document.querySelectorAll('.page-section');

function showSection(id) {
  sections.forEach(sec => sec.classList.toggle('active', sec.id === id));
  navLinks.forEach(link => link.classList.toggle('active', link.hash === `#${id}`));
  if (brand) brand.classList.remove('active'); // never style brand as active
}

function go(id, push = true) {
  showSection(id);
  if (push) history.pushState(null, '', `#${id}`);
  window.scrollTo(0, 0);
}

// On load: default to Projects unless URL already points to a known section
document.addEventListener('DOMContentLoaded', () => {
  const allowed = new Set(['projects', 'about', 'contact']);
  const current = location.hash ? location.hash.slice(1) : '';
  const start = allowed.has(current) ? current : 'projects';
  showSection(start);
  if (start !== current) history.replaceState(null, '', `#${start}`);
  window.scrollTo(0, 0);
});

// Handle nav clicks
navLinks.forEach(link => link.addEventListener('click', e => {
  e.preventDefault();
  go(link.hash.slice(1));
}));

// Brand click: go to Projects without giving the brand the "active" pill
if (brand) {
  brand.addEventListener('click', e => {
    e.preventDefault();
    go('projects');
  });
}

// Back/forward support
window.addEventListener('popstate', () => {
  const id = (location.hash || '#projects').slice(1);
  showSection(id);
  window.scrollTo(0, 0);
});
// ----- Tab-style page switching -----
const brand    = document.querySelector('nav .brand');
const navLinks = document.querySelectorAll('nav a[href^="#"]:not(.brand)');
const sections = document.querySelectorAll('.page-section');
const allowed  = new Set(['projects', 'about', 'contact']);

function showSection(id) {
  sections.forEach(sec => sec.classList.toggle('active', sec.id === id));
  navLinks.forEach(link => link.classList.toggle('active', link.hash === `#${id}`));
  if (brand) brand.classList.remove('active'); // brand is always plain text
}

function go(id, push = true) {
  if (!allowed.has(id)) id = 'projects';
  showSection(id);
  if (push) history.pushState(null, '', `#${id}`);
  window.scrollTo(0, 0);
}

// On load: default to Projects unless URL points to a known section
document.addEventListener('DOMContentLoaded', () => {
  const current = location.hash ? location.hash.slice(1) : '';
  const start = allowed.has(current) ? current : 'projects';
  showSection(start);
  if (start !== current) history.replaceState(null, '', `#${start}`);
  window.scrollTo(0, 0);
});

// Handle tab clicks (Projects / About / Contact)
navLinks.forEach(link => link.addEventListener('click', e => {
  e.preventDefault();
  go(link.hash.slice(1));
}));

// Brand click: go to Projects without getting "active"
if (brand) {
  brand.addEventListener('click', e => {
    e.preventDefault();
    go('projects', location.hash !== '#projects'); // avoid duplicate history
  });
}

// Back/forward buttons
window.addEventListener('popstate', () => {
  const id = (location.hash || '#projects').slice(1);
  go(id, false);
});
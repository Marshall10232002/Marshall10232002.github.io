// ----- Tab-style page switching -----

// 1) Disable browser's automatic scroll restoration & hash jump effects.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

const brand    = document.querySelector('nav .brand');
const navLinks = document.querySelectorAll('nav a[href^="#"]:not(.brand)');
const sections = document.querySelectorAll('.page-section');
const allowed  = new Set(['projects', 'about', 'contact']);

function showSection(id) {
  sections.forEach(sec => sec.classList.toggle('active', sec.id === id));
  navLinks.forEach(link => link.classList.toggle('active', link.hash === `#${id}`));
  if (brand) brand.classList.remove('active'); // brand always plain
}

function go(id, push = true) {
  if (!allowed.has(id)) id = 'projects';
  showSection(id);
  if (push) history.pushState(null, '', `#${id}`);   // update URL without anchor jump
  window.scrollTo(0, 0);                              // force top
}

// 2) On first load: clamp to a valid section, default to Projects, and reset hash without scrolling.
document.addEventListener('DOMContentLoaded', () => {
  const current = location.hash ? location.hash.slice(1) : '';
  const start   = allowed.has(current) ? current : 'projects';
  showSection(start);
  // put #projects (or the valid hash) in the URL without triggering the native jump
  history.replaceState(null, '', `#${start}`);
  // make sure we're truly at the very top after layout settles
  requestAnimationFrame(() => window.scrollTo(0, 0));
});

// 3) Handle tab clicks (Projects / About / Contact)
navLinks.forEach(link => link.addEventListener('click', e => {
  e.preventDefault();
  go(link.hash.slice(1));
}));

// Brand click: go to Projects without getting "active"
if (brand) {
  brand.addEventListener('click', e => {
    e.preventDefault();
    go('projects', location.hash !== '#projects'); // avoid duplicate history entries
  });
}

// 4) Back/forward buttons
window.addEventListener('popstate', () => {
  const id = (location.hash || '#projects').slice(1);
  go(id, false);
});

// 5) Final guard: if the browser still scrolled to an anchor after all resources load, snap back to top
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});
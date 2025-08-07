// ----- Tab-style page switching -----
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.page-section');

function showSection(id) {
  sections.forEach(sec =>
    sec.classList.toggle('active', sec.id === id)
  );
  navLinks.forEach(link =>
    link.classList.toggle('active', link.hash === `#${id}`)
  );
}

/* 1️⃣  Always start on About  */
showSection('about');
location.hash = '#about';   // keeps the URL consistent—optional

/* 2️⃣  Handle nav clicks     */
navLinks.forEach(link => link.addEventListener('click', e => {
  e.preventDefault();
  showSection(link.hash.slice(1));
}));
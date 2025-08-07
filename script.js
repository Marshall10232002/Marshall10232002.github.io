// Page switching logic
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

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();         // stop “jump” scrolling
    showSection(link.hash.slice(1));
  });
});

// Show correct section if opened with a hash
if (location.hash) showSection(location.hash.slice(1));
// Grab nav links and page sections
const navLinks  = document.querySelectorAll('nav a');
const sections  = document.querySelectorAll('.page-section');

function showSection(id) {
  // Show the matching section, hide the rest
  sections.forEach(sec =>
    sec.classList.toggle('active', sec.id === id)
  );
  // Highlight the correct nav link
  navLinks.forEach(link =>
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`)
  );
}

// Attach click handler to every nav link
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();                 // stop the jump-scroll
    showSection(link.getAttribute('href').substring(1));
  });
});

// Optional: show correct section if page is opened with #hash
if (location.hash) showSection(location.hash.slice(1));
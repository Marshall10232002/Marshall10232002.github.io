// Highlight nav link while scrolling
const links = document.querySelectorAll('nav a');
const sections = [...links].map(l => document.querySelector(l.getAttribute('href')));

function onScroll() {
  const pos = window.scrollY + 100;
  sections.forEach((sec, i) => {
    if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
      links.forEach(l => l.classList.remove('active'));
      links[i].classList.add('active');
    }
  });
}
document.addEventListener('scroll', onScroll);
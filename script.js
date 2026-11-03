const navLinks = [...document.querySelectorAll('.nav a')];
const sections = navLinks
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    navLinks.forEach(link => {
      const active = link.getAttribute('href') === `#${entry.target.id}`;
      link.style.color = active ? '#087e91' : '';
    });
  }
}, { rootMargin: '-28% 0px -64% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));


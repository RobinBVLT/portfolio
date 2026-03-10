const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1  
});

fadeElements.forEach(el => observer.observe(el));

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  
  
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 80) {
      currentSection = section.id;
    }
  });

  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    link.style.color = href === '#' + currentSection ? 'var(--accent)' : '';
  });
});

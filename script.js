// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animation on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Dynamic year in footer
const footer = document.querySelector("footer p");
if (footer) {
  const year = new Date().getFullYear();
  footer.innerHTML = `© ${year} Mounir Zerrougui`;
}

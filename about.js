document.addEventListener("DOMContentLoaded", () => {
  const features = document.querySelectorAll(".feature-inner");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  }, {threshold: 0.3});
  features.forEach(feature => observer.observe(feature));
});

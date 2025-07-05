
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Highlight current section in navbar
  highlightCurrentSection();
});

// Function to highlight current nav link based on scroll position
function highlightCurrentSection() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-menu a");

  let index = sections.length;

  while (--index && window.scrollY + 150 < sections[index].offsetTop) {}

  navLinks.forEach((link) => link.classList.remove("active"));
  navLinks[index].classList.add("active");
}

// Optional: Close mobile nav on link click (if you plan to add a mobile menu)
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.remove("open");
  });
});
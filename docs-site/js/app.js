const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelectorAll(".nav a");
const current = window.location.pathname.split("/").pop() || "index.html";

if (toggle && sidebar) {
  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("is-open");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => sidebar.classList.remove("is-open"));
  });
}

links.forEach((link) => {
  const href = link.getAttribute("href");
  if (href === current) {
    link.classList.add("active");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));

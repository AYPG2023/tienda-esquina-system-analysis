const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelectorAll(".nav a");

function normalizePath(path) {
  const cleaned = path.split("#")[0].split("?")[0];
  return cleaned.split("/").filter(Boolean).pop() || "index.html";
}

const current = normalizePath(window.location.pathname);

if (toggle && sidebar) {
  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("is-open");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => sidebar.classList.remove("is-open"));
  });
}

links.forEach((link) => {
  const href = normalizePath(link.getAttribute("href") || "");
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

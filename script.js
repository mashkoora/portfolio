
// =================== THEME TOGGLE ===================
const themeToggle = document.getElementById("themeToggle");

// Get saved theme
const currentTheme = localStorage.getItem("theme");

// Apply theme & icon on page load
if (currentTheme === "light") {
  document.documentElement.classList.add("light");
  if (themeToggle) themeToggle.textContent = "🌙";
} else {
  document.documentElement.classList.remove("light");
  if (themeToggle) themeToggle.textContent = "☀️";
}

// Toggle theme when clicked
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("light");
    if (document.documentElement.classList.contains("light")) {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙";
    } else {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀️";
    }
  });
}

// =================== MENU TOGGLE ===================
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Auto-close after clicking a link
  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
}

const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// Varsayılan light mode
let darkMode = false;

toggleBtn.addEventListener("click", () => {
  darkMode = !darkMode;
  body.classList.toggle("dark", darkMode);
  
  if (darkMode) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
});

// Dynamically shrinking navigation
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > nav.offsetHeight + 100) nav.classList.add("nav-active");
  else nav.classList.remove("nav-active");
});

// Hamburger menu close on link click
document.querySelectorAll("header label a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menuToggle").checked = false;
  });
});

// Profile image dynamicly loaded based on theme
const profileImg = document.getElementById("intro-profile");

function updateProfileImage() {
  const isDark = document.documentElement.classList.contains("dark");
  profileImg.src = isDark
    ? "Images/ProfileDark.png"
    : "Images/Profile.png";
}

// Initialize some stuff on load
updateProfileImage();
initParticles();
initGPA();

// Theme toggle
document.querySelectorAll(".theme-toggle").forEach(toggle => {
  toggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    document.querySelectorAll(".moon").forEach(m => m.classList.toggle("sun"));
    document.querySelectorAll(".theme-toggle").forEach(t => t.classList.toggle("day"));

    // Refresh theme related visuals
    updateProfileImage();
    initParticles();
    initGPA();
  });
});

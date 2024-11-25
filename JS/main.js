// Dynamic sized navigation menu
const nav = document.querySelector("nav");
const logo = document.querySelector("#logo");

window.addEventListener("scroll", selfMinimizeNav);

function selfMinimizeNav() {
  if (window.scrollY > nav.offsetHeight + 100) {
    nav.classList.add("nav-active");
  } else {
    nav.classList.remove("nav-active");
  }
}

// Closing hamburger menu when clicking a link in it (on phones)
document.querySelectorAll("header label a").forEach((link) => {
  link.addEventListener("click", function () {
    // Uncheck the hamburger menu checkbox
    document.getElementById("menuToggle").checked = false;
  });
});

// Animated progress circle for GPA
document.addEventListener("DOMContentLoaded", function () {
  const gpa = 3.85;
  const maxGPA = 4;
  const percentage = (gpa / maxGPA) * 100;
  const progressCircle = document.getElementById("progress-circle");
  const gpaText = document.getElementById("gpa-text");

  let currentPercentage = 0;
  const duration = 2000; // Duration of the animation in milliseconds
  const interval = 6; // Update interval in milliseconds

  const step = (percentage / duration) * interval;

  const updateProgress = () => {
    currentPercentage += step;
    if (currentPercentage >= percentage) {
      currentPercentage = percentage;
      clearInterval(progressInterval);
    }
    progressCircle.style.background = `conic-gradient(#cf78e0 0%, #1c469c ${currentPercentage}%, #eee ${currentPercentage}% 100%)`;
    gpaText.innerText = ((currentPercentage / 100) * maxGPA).toFixed(2);
  };

  let progressInterval;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressInterval = setInterval(updateProgress, interval);
          observer.unobserve(progressCircle);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(progressCircle);
});

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

// Self typing text:
const text = "- Hey There :) ";
var index = 1;
const textElement = document.querySelector("#animated-title");

function writeText() {
  textElement.innerHTML = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 1;
  }

  setTimeout(() => {
    writeText();
  }, 200);
}
writeText();

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
  const duration = 3500; // Duration of the animation in milliseconds
  const interval = 10; // Update interval in milliseconds

  const step = (percentage / duration) * interval;

  const updateProgress = () => {
    currentPercentage += step;
    if (currentPercentage >= percentage) {
      currentPercentage = percentage;
      clearInterval(progressInterval);
    }
    progressCircle.style.background = `conic-gradient(rgba(124, 160, 233, 1) 0%, rgba(33,88,196, 1) ${currentPercentage}%, #eee ${currentPercentage}% 100%)`;
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

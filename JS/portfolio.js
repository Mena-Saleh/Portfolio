import { projects } from "./constants/portfolio.js";

document.addEventListener("DOMContentLoaded", () => {

  const template = (entry, index) => `
    <div class="work-entry ${index % 2 == 0 ? "animated-block-2" : "animated-block-3"
    }" data-type="${entry.type}">
      <div class="work-entry-top">
        <div class="work-entry-title">
          <h2>${entry.title}</h2>
          <h3>${entry.tags.map((tag) => `<span>${tag}</span>`).join(" ")}</h3>
        </div>
        <div class="work-entry-img">
          <img src="${entry.imgSrc}" alt="${entry.imgAlt}" />
        </div>
      </div>
      <div class="work-entry-desc">
        <p>${entry.description}</p>
        ${entry.hasSiteLink
      ? `<a target="_blank" href="${entry.siteLink}" class="link-site">Visit site <i class="fa-solid fa-eye"></i></a>`
      : ""
    }
        <a target="_blank" href="${entry.repoLink
    }" class="link-repo">GitHub repo <i class="fa-brands fa-github"></i></a>
      </div>
    </div>
  `;

  const portfolioSection = document.getElementById("portfolio-grid");

  if (!portfolioSection) return;

  // Render all entries
  const renderEntries = () => {
    portfolioSection.innerHTML = "";
    projects.forEach((entry, index) => {
      portfolioSection.innerHTML += template(entry, index);
    });
  };

  renderEntries(); // Initial rendering

  // Filtering functionality
  const filterSelect = document.getElementById("project-type-filter");
  filterSelect.addEventListener("change", (event) => {
    const selectedType = event.target.value;
    const workEntries = document.querySelectorAll(".work-entry");


    // Display if matching filters, hide otherwise
    workEntries.forEach((entry) => {
      const entryType = entry.getAttribute("data-type");
      if (selectedType === "All" || entryType === selectedType) {
        entry.style.display = "flex";
      } else {
        entry.style.display = "none";
      }
    });
  });
});

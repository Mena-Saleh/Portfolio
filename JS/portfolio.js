document.addEventListener("DOMContentLoaded", () => {
  const entries = [
    {
      title: "TreeVis",
      tags: ["JavaScript", "Algorithms", "Visualization"],
      description:
        "A dynamic and interactive tool built entirely with vanilla JavaScript. It allows users to visually explore the execution of recursive code as a beautifully structured recursion tree.",
      siteLink: "https://mena-saleh.github.io/TreeVis/",
      repoLink: "https://github.com/Mena-saleh/TreeVis",
      hasSiteLink: true,
      imgSrc: "Images/Portfolio/TreeVis.png",
      imgAlt: "TreeVis",
      type: "Web",
    },
    {
      title: "TraveLog",
      tags: [".NET Core", "MVC", "Identity"],
      description:
        "A website tailored for travelers, it allows them to discover global attractions, log their journeys, and visualize their travels on an interactive world map",
      siteLink: "",
      repoLink: "https://github.com/Mena-saleh/TraveLog",
      hasSiteLink: false,
      imgSrc: "Images/Portfolio/TraveLog.png",
      imgAlt: "TraveLog",
      type: "Web",
    },
    {
      title: "ProjeX",
      tags: [".NET Core", "Web API", "React"],
      description:
        "A straightforward project management system that enables users to connect together and collaborate by visualizing tasks on boards.",
      siteLink: "",
      repoLink: "https://github.com/Mena-saleh/ProjeX-Web-App",
      hasSiteLink: false,
      imgSrc: "Images/Portfolio/ProjeX.png",
      imgAlt: "ProjeX",
      type: "Web",
    },
    {
      title: "Deception Detection",
      tags: ["AI", "Data Fusion", "Django", "React"],
      description:
        "My graduation project, it is an AI-based system that analyzes and detects deceptive patterns in videos by leveraging vocal, visual, and textual cues.",
      siteLink: "",
      repoLink:
        "https://github.com/Mena-saleh/Multimodal-Deception-Detection-System",
      hasSiteLink: false,
      imgSrc: "Images/Portfolio/Deception Detection System.png",
      imgAlt: "Deception Detection System",
      type: "AI",
    },
    {
      title: "Questions Tagging System",
      tags: ["AI", "NLP", "Transformers"],
      description:
        "An automatic question tagging system leveraging NLP pipelines and multi-label classification techniques on a 10% sample of Stack Overflow questions",
      siteLink: "",
      repoLink: "https://github.com/Mena-saleh/Questions-Tagging-System",
      hasSiteLink: false,
      imgSrc: "Images/Portfolio/Questions Tagging System.png",
      imgAlt: "Questions Tagging System",
      type: "AI",
    },
    {
      title: "Orders Forecasting",
      tags: ["AI", "Time Series Analysis", "Regression"],
      description:
        "Applied time series analysis and regression modeling to forecast order volumes at Rohlik Group’s selected warehouses, accurately predicting demand for the next 60 days using real-world data.",
      siteLink: "",
      repoLink: "https://github.com/Mena-saleh/Time-Series-Forecasting",
      hasSiteLink: false,
      imgSrc: "Images/Portfolio/Orders Forecasting.png",
      imgAlt: "Orders Forecasting",
      type: "AI",
    },
    {
      title: "3D Animal Runner",
      tags: ["Unity", "C#"],
      description:
        "A 3D endless runner game built with Unity, featuring monster attacks, randomly spawning obstacles, coin collection, and a high score system.",
      siteLink: "",
      repoLink: "https://github.com/Mena-saleh/Animal-Runner-Game",
      hasSiteLink: false,
      imgSrc: "Images/Portfolio/Animal Runner.png",
      imgAlt: "Animal Runner",
      type: "Game",
    },
    {
      title: "Photo Gallery",
      tags: ["HTML", "CSS", "JavaScript"],
      description:
        "A photo gallery app featuring photos from Unsplash API, additionally, photos can be uploaded to local storage and custom validation is applied.",
      siteLink: "https://mena-saleh.github.io/Photo-Gallery/",
      repoLink: "https://github.com/Mena-saleh/Photo-Gallery",
      hasSiteLink: true,
      imgSrc: "Images/Portfolio/Photo Gallery.png",
      imgAlt: "Photo Gallery",
      type: "Web",
    },
    {
      title: "Mena's Italian",
      tags: ["HTML", "CSS", "JavaScript"],
      description:
        "The first website I ever created, inspired by my passion for cooking. It showcases a simple modern design using basic front-end technologies.",
      siteLink: "https://mena-saleh.github.io/Mena-s-Italian/",
      repoLink: "https://github.com/Mena-Saleh/Mena-s-Italian",
      hasSiteLink: true,
      imgSrc: "Images/Portfolio/Mena's Italian.png",
      imgAlt: "Mena's Italian",
      type: "Web",
    },
  ];

  const template = (entry, index) => `
    <div class="work-entry ${
      index % 2 == 0 ? "animated-block-2" : "animated-block-3"
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
        ${
          entry.hasSiteLink
            ? `<a target="_blank" href="${entry.siteLink}" class="link-site">Visit site <i class="fa-solid fa-eye"></i></a>`
            : ""
        }
        <a target="_blank" href="${
          entry.repoLink
        }" class="link-repo">GitHub repo <i class="fa-brands fa-github"></i></a>
      </div>
    </div>
  `;

  const portfolioSection = document.getElementById("portfolio-grid");

  // Render all entries
  const renderEntries = () => {
    portfolioSection.innerHTML = ""; // Clear previous entries
    entries.forEach((entry, index) => {
      portfolioSection.innerHTML += template(entry, index); // Directly append the innerHTML
    });
  };

  renderEntries(); // Initial rendering

  // Filtering functionality
  const filterSelect = document.getElementById("project-type-filter");
  filterSelect.addEventListener("change", (event) => {
    const selectedType = event.target.value;
    const workEntries = document.querySelectorAll(".work-entry");

    workEntries.forEach((entry) => {
      const entryType = entry.getAttribute("data-type");
      if (selectedType === "All" || entryType === selectedType) {
        entry.style.display = "flex"; // Display if matching the filter
      } else {
        entry.style.display = "none"; // Hide if not matching
      }
    });
  });
});

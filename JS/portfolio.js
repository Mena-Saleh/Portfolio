document.addEventListener("DOMContentLoaded", () => {
  const entries = [
    {
      title: "TraveLog",
      tags: [".NET Core", "MVC", "Identity"],
      description:
        "A website designed for travelers, allowing them to discover global attractions, log their journeys, and visualize their travels on an interactive world map.",
      siteLink: "",
      repoLink: "https://github.com/Mena-Ibrahim/TraveLog",
      hasSiteLink: false,
      imgSrc: "Images/Portfolio/TraveLog.png",
      imgAlt: "TraveLog",
    },
    {
      title: "ProjeX",
      tags: [".NET Core", "Web API", "React"],
      description:
        "A straightforward project management system that enables users to connect together and collaborate by visualizing tasks on boards.",
      siteLink: "",
      repoLink: "https://github.com/Mena-Ibrahim/ProjeX-Web-App",
      hasSiteLink: false,
      imgSrc: "Images/Portfolio/ProjeX.png",
      imgAlt: "ProjeX",
    },
    {
      title: "3D Animal Runner Game",
      tags: ["Unity", "C#"],
      description:
        "A 3D endless runner game built with Unity, featuring monster attacks, randomly spawning obstacles, coin collection, and a high score system.",
      siteLink: "",
      repoLink: "https://github.com/Mena-Ibrahim/Animal-Runner-Game",
      hasSiteLink: false,
      imgSrc: "Images/Portfolio/Animal Runner.png",
      imgAlt: "Animal Runner",
    },
    {
      title: "Photo Gallery",
      tags: ["HTML", "CSS", "JS"],
      description:
        "A photo gallery app featuring photos from Unsplash API, additionally, photos can be uploaded to local storage and custom validation is applied.",
      siteLink: "https://mena-ibrahim.github.io/Photo-Gallery/",
      repoLink: "https://github.com/Mena-Ibrahim/Photo-Gallery",
      hasSiteLink: true,
      imgSrc: "Images/Portfolio/Photo Gallery.png",
      imgAlt: "Photo Gallery",
    },
    {
      title: "Mena's Italian",
      tags: ["HTML", "CSS", "JS"],
      description:
        "The first website I ever created, inspired by my passion for cooking. It showcases a simple yet modern design, leveraging foundational front-end technologies.",
      siteLink: "https://mena-ibrahim.github.io/Mena-s-Italian/",
      repoLink: "https://github.com/Mena-Ibrahim/Mena-s-Italian-WebSite-Design",
      hasSiteLink: true,
      imgSrc: "Images/Portfolio/Mena's Italian.png",
      imgAlt: "Mena's Italian",
    },
  ];

  const template = (entry) => `
                <div class="work-entry animated-block">
                    <div class="work-entry-text">
                        <div class="work-entry-title">
                            <h1>${entry.title}</h1>
                            <h2>${entry.tags
                              .map((tag) => `<span>${tag}</span>`)
                              .join(" ")}</h2>
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
                            }" class="link-repo">Github Repo <i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                    <div class="work-entry-img">
                        <img src="${entry.imgSrc}" alt="${entry.imgAlt}" />
                    </div>
                </div>
            `;

  const portfolioSection = document.getElementById("portfolio");
  entries.forEach((entry) => {
    const div = document.createElement("div");
    div.innerHTML = template(entry);
    portfolioSection.appendChild(div);
  });
});

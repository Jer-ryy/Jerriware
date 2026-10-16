// Add projects here. Leave imgSrc empty to show a placeholder cover; siteLink (a live demo) is optional.
const projects = [
  {
    title: "AIGC Image Detector",
    category: "ai",
    tools: ["Python", "PyTorch", "CLIP", "OpenCV"],
    desc: "Team prototype that flags AI-generated images, even after JPEG, blur and resizing. Fuses a frozen CLIP ViT-B/16 with an SRM artifact branch; 0.996 AUROC on clean images. I led evaluation and deliverables.",
    projLink: "https://github.com/windyheng/choochoo",
    imgSrc: "aigcImg.png",
  },
  {
    title: "Stardust Neverland",
    category: "web",
    tools: ["Node.js", "Express", "PostgreSQL", "React", "D3.js"],
    desc: "Full-stack web game built by a five-person team: climb floors, play mini-games for currency, gear up and fight bosses. Includes JWT auth and an admin dashboard with D3 analytics.",
    projLink: "https://github.com/Jer-ryy/stardustneverland",
    siteLink: "https://stardustneverland.onrender.com/",
    imgSrc: "stardustNvrLandGame.png",
  },
  {
    title: "Movie Poster",
    category: "design",
    tools: ["Photoshop"],
    desc: "A Black Adam fan poster built around the lightning-bolt silhouette.",
    projLink: "",
    imgSrc: "",
  },
  {
    title: "Card Profile Poster",
    category: "design",
    tools: ["Photoshop", "Illustrator"],
    desc: "A trading-card style self portrait with a JoJo twist.",
    projLink: "",
    imgSrc: "",
  },
  {
    title: "Magical Moments",
    category: "design",
    tools: ["Photoshop"],
    desc: "A framed product ad for the Samsung Galaxy S6.",
    projLink: "",
    imgSrc: "",
  },
  {
    title: "Website Design",
    category: "web",
    tools: ["HTML/CSS", "JavaScript", "Bootstrap"],
    desc: "JARRIE, my first portfolio site, with filterable design and code work.",
    projLink: "",
    imgSrc: "",
  },
];

const grid = document.getElementById('project-grid');

function linksHTML(project) {
  const link = (href, icon, label) =>
    `<a class="card-link mono" href="${href}" target="_blank" rel="noopener"><i class="bi ${icon}"></i> ${label} <i class="bi bi-arrow-up-right"></i></a>`;
  const links = [
    project.projLink && link(project.projLink, 'bi-github', 'Repository'),
    project.siteLink && link(project.siteLink, 'bi-globe2', 'Website'),
  ].filter(Boolean);
  return links.length ? `<div class="card-links">${links.join('')}</div>` : '';
}

function cardHTML(project) {
  const icons = { ai: 'bi-cpu', web: 'bi-code-slash', design: 'bi-palette' };
  const icon = icons[project.category] || 'bi-folder';
  const media = project.imgSrc
    ? `<div class="cover">
        <img src="assets/${project.imgSrc}" class="cover-image" alt="${project.title}" loading="lazy" />
      </div>`
    : `<div class="cover cover-placeholder" aria-hidden="true">
        <i class="bi ${icon}"></i>
        <span class="mono">image coming soon</span>
      </div>`;

  return `
    <div class="col-sm-6 col-lg-4 col-xl-3 project" data-category="${project.category}">
      <article class="project-card">
        ${project.projLink ? `<a href="${project.projLink}" target="_blank" rel="noopener">${media}</a>` : media}
        <div class="project-body">
          <span class="project-cat mono">${project.category}</span>
          <h2>${project.title}</h2>
          <p class="text-muted">${project.desc}</p>
          <div class="tools">${project.tools.map((t) => `<span>${t}</span>`).join('')}</div>
          ${linksHTML(project)}
        </div>
      </article>
    </div>`;
}

grid.innerHTML = projects.map(cardHTML).join('');

document.querySelectorAll('.filter').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((b) => b.classList.toggle('active', b === btn));
    const filter = btn.dataset.filter;
    grid.querySelectorAll('.project').forEach((el) => {
      el.hidden = filter !== 'all' && el.dataset.category !== filter;
    });
  });
});

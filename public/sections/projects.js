// Add projects here. Leave imgSrc empty to show a placeholder cover.
const projects = [
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

function cardHTML(project) {
  const icon = project.category === 'web' ? 'bi-code-slash' : 'bi-palette';
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

// Add projects here.
const projects = [
  {
    title: "Movie Poster",
    category: "design",
    tools: ["Photoshop"],
    desc: "A Black Adam fan poster built around the lightning-bolt silhouette.",
    projLink: "",
    imgSrc: "Movie-Poster.png",
  },
  {
    title: "Card Profile Poster",
    category: "design",
    tools: ["Photoshop", "Illustrator"],
    desc: "A trading-card style self portrait with a JoJo twist.",
    projLink: "",
    imgSrc: "Card.png",
  },
  {
    title: "Magical Moments",
    category: "design",
    tools: ["Photoshop"],
    desc: "A framed product ad for the Samsung Galaxy S6.",
    projLink: "",
    imgSrc: "Magical-Moments.png",
  },
  {
    title: "Website Design",
    category: "web",
    tools: ["HTML/CSS", "JavaScript", "Bootstrap"],
    desc: "JARRIE, my first portfolio site, with filterable design and code work.",
    projLink: "",
    imgSrc: "Website-Portfolio.png",
  },
];

const grid = document.getElementById('project-grid');

function cardHTML(project) {
  const media = `
    <div class="cover">
      <img src="../assets/${project.imgSrc}" class="cover-image" alt="${project.title}" loading="lazy" />
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

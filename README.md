# Jerriware Portfolio

My personal portfolio site. I'm a software engineer moving into applied AI, studying for a Bachelor in Applied AI at the Singapore Institute of Technology.

The site is a dark-themed, single scrolling page with no front-end framework or build step. It's hosted on GitHub Pages, and a small Express server runs it locally.

## Sections

| Section | What's on it |
| --- | --- |
| **Home** | Typewriter hero, tech stack and a Python "code card" intro |
| **About** | Three cards: applied AI, automation and full stack |
| **Projects** | Project grid with category filters (All / Design / Web) |
| **Resume** | Experience, projects, education and skills in VS Code-style panels, with a PDF download |
| **Contact** | Validated contact form that opens a pre-filled email |

## Tech stack

- **Server:** Node.js, Express
- **Front end:** HTML, CSS, vanilla JavaScript, Bootstrap 5
- **Fonts and icons:** Inter, JetBrains Mono, Bootstrap Icons

## Project structure

```
app.js              Express server for running the site locally
public/
  index.html        The whole site: home, about, projects, resume and contact sections
  global/
    theme.css       Shared dark theme: colours, buttons, panels, forms, navbar, footer
    layout.js       Injects the navbar and footer; their links jump to each section
  sections/         Styles and scripts for each section (home, projects, resume, contact)
  assets/           Images and the resume PDF
  bootstrap/        Bootstrap 5 CSS and JS
.github/workflows/
  static.yml        Deploys public/ to GitHub Pages on every push to main
```

## Running locally

Requires Node.js 18 or later.

```bash
npm install
node app.js
```

Then open http://localhost:3000. Set the `PORT` environment variable to use a different port.

## Adding a project

Add an entry to the `projects` array in `public/sections/projects.js`:

```js
{
  title: "Project name",
  category: "web",            // matches a filter button: "design" or "web"
  tools: ["Python", "Node.js"],
  desc: "One-line description.",
  projLink: "https://...",    // leave empty for no link
  imgSrc: "Cover-Image.png",  // file in public/assets/, or "" for a placeholder cover
}
```

## Contact

- Email: [jerryngsw2@gmail.com](mailto:jerryngsw2@gmail.com)
- LinkedIn: [linkedin.com/in/jerry-ng-05ab18211](https://www.linkedin.com/in/jerry-ng-05ab18211/)

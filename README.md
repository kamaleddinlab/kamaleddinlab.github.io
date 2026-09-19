# Kamaleddin Lab website

Production website for **https://kamaleddinlab.github.io/**.

## Deploy

This is a build-free static site. Upload/push the full contents of this folder to the `main` branch of:

`kamaleddinlab/kamaleddinlab.github.io`

In GitHub: **Settings → Pages → Deploy from a branch → main → /(root)**.

## Important structure

Do not omit the `assets/` directory.

```text
kamaleddinlab.github.io/
├── index.html
├── research.html
├── people.html
├── publications.html
├── join.html
├── 404.html
├── assets/
│   ├── css/site.css
│   ├── js/site.js
│   ├── js/publications.js
│   └── img/
├── robots.txt
├── sitemap.xml
├── site.webmanifest
└── .nojekyll
```

## Editing

- Homepage story: `index.html`
- Research programs: `research.html`
- People / trainees: `people.html`
- Publication database: `assets/js/publications.js`
- Opportunities/contact: `join.html`
- Visual system and responsive styling: `assets/css/site.css`

## Local preview in VS Code

Use the **Live Server** extension and open `index.html`, or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Design direction

This version deliberately avoids a CV/resume structure. The homepage is organized around:

1. A single lab thesis.
2. Three connected research programs.
3. A shared research/evaluation process.
4. Four representative pieces of work.
5. Training and collaboration culture.

The complete historical CV is not reproduced on the site. Earlier publications remain discoverable through Google Scholar.

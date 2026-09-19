# Kamaleddin Research Group website

A build-free research website designed for GitHub Pages. The site uses only HTML, CSS, JavaScript, and SVG, so GitHub can publish it directly from the repository root.

## Target public URL

This package is configured for the organization/user Pages address:

`https://kamaleddinlab.github.io/`

To obtain that exact `github.io` address, the GitHub **owner** must be named `kamaleddinlab`, and the Pages repository owned by that account must be named exactly:

`kamaleddinlab.github.io`

A repository named `kamallab` under the personal account `amin-kamaleddin` would instead publish by default at `https://amin-kamaleddin.github.io/kamallab/`.

## Recommended account structure

Keep your personal GitHub account:

`amin-kamaleddin`

Create a GitHub organization named:

`kamaleddinlab`

Then create this public repository inside the organization:

`kamaleddinlab/kamaleddinlab.github.io`

Add your personal account `amin-kamaleddin` as an organization owner so you retain full control.

## What is included

- `index.html` — homepage and research-program overview
- `research.html` — detailed five-pillar research program
- `publications.html` — searchable/filterable publication list
- `people.html` — research lead, trainees/alumni, mentorship philosophy
- `join.html` — collaboration and trainee inquiry page
- `404.html` — custom not-found page
- `assets/css/style.css` — complete visual system and responsive styles
- `assets/js/main.js` — navigation, scroll reveal, current year
- `assets/js/publications.js` — structured publication data and filters
- `assets/img/krg-logo.svg` — custom KRG logo
- `assets/img/hero-network.svg` — hero research network visualization
- `assets/img/research-continuum.svg` — program continuum visualization
- `assets/img/collaboration-map.svg` — international research visualization
- `.nojekyll` — tells GitHub Pages to publish the files as-is
- `robots.txt` and `sitemap.xml` — search-engine discovery files

## Before publishing

### Recommended optional change: add a real portrait

The CV did not contain a headshot, so `people.html` deliberately uses a polished monogram treatment rather than inventing a portrait.

To add a photo later:

1. Put a square/cropped image at `assets/img/amin-kamaleddin.jpg`.
2. Replace the `<div class="profile-portrait">...</div>` block in `people.html` with an `<img>` or use the image as its CSS background.
3. Prefer at least 1000 × 1000 px, professional lighting, and a simple background.

## How to update publications

Edit `assets/js/publications.js`.

Each entry follows this pattern:

```js
{
  year: 2026,
  area: 'Agentic AI',
  status: 'published',
  title: 'Paper title',
  authors: 'Author list',
  journal: 'Journal name',
  link: 'https://...'
}
```

Allowed `status` values are `published`, `accepted`, `preprint`, and `review`.

Current research areas are `Agentic AI`, `Responsible AI`, `Population & Causal ML`, `Neurotechnology`, and `Neural Coding`.

## How to update people

Trainees are currently written directly in `people.html` to keep deployment dependency-free. Duplicate a `.person` card and change the initials, name, institution, and outcome.

## How to update site text

- Homepage: `index.html`
- Research descriptions: `research.html`
- Trainees/background: `people.html`
- Collaboration/recruiting copy: `join.html`
- Visual system/mobile layout: `assets/css/style.css`

## Exact GitHub setup for kamaleddinlab.github.io

1. Sign in to GitHub as `amin-kamaleddin`.
2. Create a new GitHub organization named **`kamaleddinlab`**.
3. Make `amin-kamaleddin` an owner of that organization.
4. Inside the **kamaleddinlab organization**, create a new **public** repository named exactly **`kamaleddinlab.github.io`**.
5. Upload the **contents of this folder** into the repository root. Do not upload the ZIP itself and do not put everything inside an extra folder.
6. Confirm `index.html` is visible at the top level of the repository.
7. Commit everything to the `main` branch.
8. Open **Settings → Pages**.
9. Under **Build and deployment**, choose **Deploy from a branch**.
10. Select **`main`** and **`/(root)`**, then save.
11. The public site will be `https://kamaleddinlab.github.io/`.

## What to do with the existing personal repo

Your current repository `amin-kamaleddin/kamallab` is not needed for the final public Pages address. You can keep it as a private/public development mirror, archive it, or delete it later. The production Pages repository should be `kamaleddinlab/kamaleddinlab.github.io`.

## Git deployment — command line

From inside this folder, after you have created the organization repository:

```bash
git init
git add .
git commit -m "Launch Kamal Lab website"
git branch -M main
git remote add origin https://github.com/kamaleddinlab/kamaleddinlab.github.io.git
git push -u origin main
```

Then enable **Settings → Pages → Deploy from a branch → main → /(root)**.

## Custom domain later

If you later buy a domain such as `kamaleddinlab.org`, add it in **Settings → Pages → Custom domain** and follow GitHub's DNS instructions. At that point update canonical/OpenGraph URLs, `sitemap.xml`, `robots.txt`, and the web manifest to the custom domain.

## Privacy/design decisions made intentionally

- The phone number from the CV is not published.
- No portrait was fabricated; a branded monogram is used until a real headshot is supplied.
- Under-review manuscripts do not have invented links.
- Institutional names are used in text, while the site uses an original visual identity rather than copying university/hospital trademarks.

## Local preview

You can double-click `index.html`, but a local server is better:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

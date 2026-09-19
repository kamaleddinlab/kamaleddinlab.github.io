# Kamaleddin Lab website — v3

Production target: https://kamaleddinlab.github.io/

## What is included
- Compact research-group homepage with the motto **“AI for mental health that is testable, trusted, and translated.”**
- Complete publication portfolio: **39 research contributions**, organized by five themes and publication status.
- Original scientific thumbnails for every publication; they are site-native visual summaries rather than copied publisher figures.
- Complete supervision roster: principal investigator + 4 current trainees + 11 previous supervised trainees.
- LinkedIn-resolved public profile photo for the PI and for previous trainees whose identities can be matched confidently; local fallbacks preserve the grid if remote images fail.
- Research, News, Join/Collaborate, affiliations, contact details, sitemap, manifest, and 404 page.

## Deploy
Copy every file and folder in this directory into the root of `kamaleddinlab/kamaleddinlab.github.io`, then:

```bash
git add .
git commit -m "Update complete publications and trainee roster"
git push origin main
```

GitHub Pages settings should remain: **Deploy from a branch → main → /(root)**.

## Updating portraits
Local fallbacks live under `assets/img/people/`. For a member with an approved portrait, replace the image URL in `people.html` or replace the corresponding SVG with a JPG/PNG and update the `src`.

## Updating publications
Publication cards are in `publications.html`. Visual thumbnails live under `assets/img/publications/`. Filtering/search logic is in `assets/js/publications.js`.

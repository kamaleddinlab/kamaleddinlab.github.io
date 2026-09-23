# Kamaleddin Research Group website

Static GitHub Pages site for `https://kamaleddinlab.github.io/`.

## Deploy
Copy every file and folder in this package to the root of `kamaleddinlab/kamaleddinlab.github.io`, then:

```bash
git add .
git commit -m "Redesign Kamaleddin Research Group website"
git push origin main
```

GitHub Pages settings: **Deploy from a branch → main → /(root)**.

## Trainees and collaborators portraits
Current-team person cards use the same 4:5 frame and `object-fit: cover`; supervision-history portraits use compact square frames, so replacement photos stay visually consistent within each section.

For the current-team cards, two public identities could be matched unambiguously during the site research:
- Mohammad Amin Kamaleddin — official University of Toronto portrait
- Erzheng (Erwin) Zhang — public professional portrait, with LinkedIn and personal website confirming the identity

For the supervision history, verified LinkedIn profile links are included for Luca Baiocchi, Niloufar Naeeni, Reza Barzegar, Areez Visram, Agilan Sivakumaran, and Nghia Le. LinkedIn did not expose stable reusable public profile-image URLs in the indexed results, so the site keeps neutral initials rather than attaching an uncertain or wrong portrait.

Public searches for Zachary Korte, Karthika Karthika, and Ming Xuan Yue returned multiple or clearly unrelated people. The package therefore uses neutral, same-format monogram portraits instead of risking a wrong identity. Replace these files when you have a verified photo:
- `assets/img/zachary-korte.svg`
- `assets/img/karthika-karthika.svg`
- `assets/img/ming-xuan-yue.svg`

## Main content files
- `index.html` — group-oriented homepage
- `research.html` — three research programs and methods
- `people.html` — current trainees plus supervision history and CV-listed current positions
- `publications.html` — featured work plus the complete 39-item CV publication/manuscript record organized into five themes
- `news.html` — selected research updates
- `join.html` — research opportunities and collaboration

## Visual approach
The site intentionally avoids long biographical timelines, award lists, and citation counters. Research, people, projects, publications, and collaboration are the primary hierarchy. The publications page now preserves the full CV record while grouping it by research theme; the people page preserves the CV supervision list and current destinations/statuses.


## Published figures
The site uses unmodified published figures only where the article license permits website reuse and includes source/license credit. Other publication visuals are site-native summaries to avoid reproducing restricted publisher artwork.


## Publication and people data notes

- Published/publicly accessible publication bylines were expanded from publisher, PubMed, or preprint records checked in September 2026.
- Manuscripts without a public publication URL retain the author wording in the supplied CV/site package rather than inferring unpublished coauthors.
- Mohammad Amin Kamaleddin is visually emphasized in every publication byline.
- Each publication has a compact visual. Two cards use verified published figures already present in the source website; the remaining cards use clearly labeled local visual summaries so unpublished or inaccessible figures are not misrepresented.
- Trainee LinkedIn links are included only when the identity matched the name plus the institution/employer context. LinkedIn profile images were not substituted with ambiguous search results; neutral initial portraits remain where a public photo could not be confidently verified.
- Karthika's displayed name is **Karthika Karthika**.

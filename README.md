# Kamaleddin Research Group website

Static GitHub Pages site for `https://kamaleddinlab.github.io/`.

## Deploy
Copy every file and folder in this package to the root of `kamaleddinlab/kamaleddinlab.github.io`. If an older deployment still contains `news.html`, delete that file as well. Then:

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

For the supervision history, verified LinkedIn profile links are included for Luca Baiocchi, Niloufar Naeeni, Reza Barzegar, Areez Visram, Agilan Sivakumaran, and Nghia Le. Luca Baiocchi, Niloufar Naeeni, Reza Barzegar, Agilan Sivakumaran, and Nghia Le continue to request the matching LinkedIn profile image through the public Unavatar LinkedIn-avatar endpoint, with the local monogram SVG retained as a fallback if a remote image is unavailable.

Local profile photos supplied with this update are now used for Zachary Korte, Karthika Karthika, Ming Xuan Yue, Maryam Ashktorab, Anne Rose De Kort, Devanshi Shah, Areez Visram, Xiaoyang Liu, and Hoorya Rafiq. The existing monogram SVGs are retained as fallbacks if a local image cannot be loaded.

## Main content files
- `index.html` — group-oriented homepage
- `research.html` — three research programs and methods
- `people.html` — current trainees plus supervision history and CV-listed current positions
- `publications.html` — complete 39-item CV publication/manuscript record organized into five themes
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
- Trainee LinkedIn links are included only when the identity matched the name plus the institution/employer context. Verified LinkedIn-linked profiles use their current profile image when available, with local monogram fallbacks.
- Karthika's displayed name is **Karthika Karthika**.

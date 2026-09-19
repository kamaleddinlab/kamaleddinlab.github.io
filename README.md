# Kamaleddin Lab website

Static GitHub Pages site for `https://kamaleddinlab.github.io/`.

## Deploy
Copy every file and folder in this package to the root of `kamaleddinlab/kamaleddinlab.github.io`, then:

```bash
git add .
git commit -m "Redesign Kamaleddin Lab website"
git push origin main
```

GitHub Pages settings: **Deploy from a branch → main → /(root)**.

## Team portraits
All person cards use the same 4:5 frame and `object-fit: cover`, so replacement photos stay visually consistent.

Two public identities could be matched unambiguously during the site research:
- Mohammad Amin Kamaleddin — official University of Toronto portrait
- Erzheng (Erwin) Zhang — public professional portrait, with LinkedIn and personal website confirming the identity

Public searches for Zachary Korte, Karthika Baiju, and Ming Xuan Yue returned multiple or clearly unrelated people. The package therefore uses neutral, same-format monogram portraits instead of risking a wrong identity. Replace these files when you have a verified photo:
- `assets/img/zachary-korte.svg`
- `assets/img/karthika-baiju.svg`
- `assets/img/ming-xuan-yue.svg`

## Main content files
- `index.html` — group-oriented homepage
- `research.html` — three research programs and methods
- `people.html` — team and lab culture
- `publications.html` — selected visual publications, not an exhaustive bibliography
- `news.html` — current work and lab updates
- `join.html` — trainee and collaborator information

## Visual approach
The site intentionally avoids long biographical timelines, award lists, and citation counters. Research, people, projects, and collaboration are the primary hierarchy.


## Content coverage in this revision

- Publications page contains all 39 research contributions represented in the current site source, organized by theme and status.
- Current team plus all recorded previous trainees/mentees are included on the People page.
- The homepage motto is: **AI for mental health that can be tested, trusted, and translated.**
- Publication visual tiles are original lab-site illustrations rather than copied publisher figures, keeping sizing and licensing consistent.


## LinkedIn portrait note
The PI card links directly to the public LinkedIn profile. LinkedIn does not expose a stable hotlinkable profile-avatar URL to logged-out websites, so the deployed image uses a verified public University of Toronto professional portrait. If you want the exact LinkedIn avatar, save it as `assets/img/amin-linkedin.jpg` and replace the PI `<img src=...>` in `people.html` with `assets/img/amin-linkedin.jpg`.

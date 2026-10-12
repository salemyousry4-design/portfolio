# Portfolio Rebrand: Salem Yousry

Converting this portfolio from **Ahmed Ibrahim (Frontend Developer)** to
**Salem Yousry Abdelaziz: Machine Learning Engineer (Intermediate) | Business Development & Strategy**.

👉 **Start with [PLAN.md](PLAN.md)**: full plan, rationale, timeline, and open questions.

## Files

| File | Contents | Feeds |
|---|---|---|
| [PLAN.md](PLAN.md) | Diagnosis, positioning, phases, CV scoring, timeline | — |
| [GITHUB-REVIEW.md](GITHUB-REVIEW.md) | Review of the 3 ML repos on `salemyousry4-design` + fixes | CV v2, Projects page |
| [handoff/](handoff/) | Fixed churn project, ready to upload + `HANDOFF.md` guide (Arabic) | Salem's GitHub |
| [01-profile.md](01-profile.md) | Name, title, contact, bio, languages | `personalInfo` |
| [02-copy-and-seo.md](02-copy-and-seo.md) | Hero, Tech × Business, Services, SEO, footer | hardcoded component text |
| [03-skills.md](03-skills.md) | ML techniques, Python, business, languages | `skillCategories`, `SkillsSphere.jsx` |
| [04-experience.md](04-experience.md) | 1 role: Business Development, restaurant & F&B (2022 → present) | `experiences` |
| [05-education.md](05-education.md) | MBA, AASTMT, 2023 | `education` |
| [06-projects.md](06-projects.md) | 6-project ML roadmap + case-study data shape | `projects`, `images.js` |
| [cv/salem-cv.html](cv/salem-cv.html) | CV source (rebuild command inside) | `public/Salem_Yousry_Abdelaziz_CV.pdf` |

## Assets added to `public/`

- `salem.jpg`: profile photo
- `salem-logo.png`: Salem tech logo, **transparent**: use this one
- `salem-logo.jpg`: same logo on cream background (social banners)
- `Salem_Yousry_Abdelaziz_CV.pdf`: CV v1.3 (single 4-year role, German A2)

## Code change checklist (website rebrand: done 2026-10-12)

### Data (`app/constants/data.js`)
- [x] `personalInfo`, `hero`, `qualification`, `services`, `stats`, `skillCategories`, `sphereSkills`, `experiences`, `education`, `certifications`
- [x] `projects = []` and `showProjects` hide the Projects nav link until there are 3 case studies

### Components
- [x] `app/layout.tsx`: title, description, icons, manifest, OG image (`metadataBase` from `NEXT_PUBLIC_SITE_URL`)
- [x] `Landing.jsx`: name, photo, typing lines, intro, "Download CV" (instead of "View Projects")
- [x] `Qualification.jsx` → "Tech × Business"
- [x] `Services.jsx` (new): "What I Do" with 4 services + stats strip
- [x] `SkillsSphere.jsx`: words from `data.sphereSkills`
- [x] `Navbar.jsx`: S-mark logo, no LinkedIn, GitHub only if `personalInfo.github` is set
- [x] `Footer.jsx`: WhatsApp + email from `personalInfo`, "Made by Salem Yousry"
- [x] `About.jsx`: no Age / LinkedIn, CV links, education focus, certification with Verify link
- [x] `Contact.jsx`: WhatsApp card, stats from data, EmailJS from env vars (falls back to `mailto`)
- [x] `Projects.jsx`: case-study cards (Problem / Approach / Result) + empty state

### Assets & config
- [x] `salem-mark.png` (S mark), favicons, `favicon.ico`, `apple-touch-icon.png`, Android icons, `manifest.json`
- [x] `og-image.png` (source: `docs/og-image.html`)
- [x] Ahmed's files moved (not deleted) to `_archive/ahmed-assets/`
- [x] `.env.local.example` for EmailJS + site URL

### Waiting on Salem
- [ ] Which GitHub account to show → set `personalInfo.github`
- [ ] EmailJS keys → `.env.local` (and Vercel env vars)
- [ ] Projects → fill `projects` in `data.js` (3+ shows the page)
- [ ] Deploy (Vercel) → set `NEXT_PUBLIC_SITE_URL`

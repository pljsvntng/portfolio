# Pol Jesvin Tanag — Portfolio

A personal portfolio built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Things to personalize before you ship this

- **`src/data/siteData.js`** — all copy, project data, service copy, skills,
  social links, and stats live here in one place. Update the `socials` object
  with your real email/LinkedIn/GitHub, and swap the placeholder project
  `github`/`demo` URLs for real ones.
- **`public/assets/dev-cruz-cv.pdf`** — replace this placeholder with your
  actual resume/CV. The "Download CV" button in the hero links straight to
  this file.
- **Hero and Education images** — currently pull tasteful stock photography
  from Unsplash as placeholders (see `src/components/Hero.jsx` and
  `src/components/Education.jsx`). Swap in your own portrait and a photo of
  your school.
- **Project thumbnails** — `src/components/ProjectCard.jsx` maps each project
  id to a placeholder Unsplash image. Replace with real screenshots once you
  have them (drop images in `public/assets/projects/` and update the map).
- **Name/branding** — the "PJT" monogram and "Pol Jesvin Tanag" name appear in
  `Navbar.jsx` and `Footer.jsx`.

## Structure

```
src/
  components/   Navbar, Hero, Services, Expertise, Education, Projects, ContactCTA, Footer
  data/         siteData.js — all content as structured data
  hooks/        useReveal (scroll-entrance), useActiveSection (nav highlighting)
  App.jsx       Section composition
  index.css     Design tokens (CSS variables for light/dark) + custom utility classes
```

## Notes

- Dark mode toggle (top right of the nav) flips CSS variables defined in
  `index.css` — no per-component dark: classes needed.
- The Services grid and Expertise panel both use accessible
  expand/tab patterns (no external UI library).
- Reduced-motion is respected globally.

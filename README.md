# Mariia Skydan — portfolio

Personal portfolio and resume. React 18 + Vite, CSS Modules, framer-motion.

## Scripts

```bash
npm install
npm run dev      # dev server
npm run build    # production build to dist/
npm run preview  # preview the build
npm run lint
```

## Structure

- `src/components/*` — sections (hero, projects, timeline, skills, talk), header/footer, shared pieces (`glowCard`, `reveal`, `icon`)
- `src/constants/index.js` — all content: projects, experience, education, contacts, nav
- `public/symbol-defs.svg` — SVG icon sprite (used via `<Icon name="..." />`)
- `public/projects`, `public/hero` — images (WebP)
- `public/files` — downloadable resume PDF

## SEO

`index.html` contains description, canonical, Open Graph / Twitter cards, JSON-LD `Person`; `public/robots.txt` and `public/sitemap.xml` point to https://resume-react-beige.vercel.app/. The share image is `public/og-image.jpg` (1200×630). If the domain changes, update the URLs in those files.

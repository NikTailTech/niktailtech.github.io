# Nicholas — Personal Developer Portfolio

Production-ready personal portfolio for **Nicholas** (`NikTailTech`), Full Stack Developer. Built with Next.js static export for free hosting on GitHub Pages.

## Overview

- Professional positioning for recruiters and engineering leaders
- Experience, skills, featured projects, and static GitHub repository listings
- Multidisciplinary **Beyond Software** section (Web3, 3D, printing, digital media)
- Light/dark theme with system preference + local persistence
- SEO metadata, sitemap, robots.txt, and Person structured data
- Accessible, responsive, and maintainable content via centralized data files

## Stack

- Next.js (App Router) + React + TypeScript (strict)
- Tailwind CSS v4
- Lucide React, Framer Motion, Zod
- Vitest, ESLint
- GitHub Actions → GitHub Pages

## Prerequisites

- Node.js 20.9+ (22 recommended)
- npm 10+

## Setup

```bash
git clone https://github.com/NikTailTech/niktailtech.github.io.git
cd niktailtech.github.io
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |
| `npm run test` | Vitest unit tests |
| `npm run build` | Production static export → `out/` |
| `npm run export:check` | Build and assert `out/index.html` exists |

## Static export

`next.config.ts` sets `output: 'export'`, `trailingSlash: true`, and `images.unoptimized: true`.

```bash
npm run build
```

Static files are written to `out/`. Serve locally to verify:

```bash
npx serve out
```

## GitHub Pages setup

This repo is the **user site** for `NikTailTech` → live at [https://niktailtech.github.io](https://niktailtech.github.io).

1. **Settings → Pages → Build and deployment → Source**: **GitHub Actions** (not “Deploy from a branch”).  
   If Source is a branch, GitHub serves Jekyll and shows this README instead of the Next.js site.
2. Ensure the default branch is `main` (or `master` — the workflow listens to both).
3. Leave `BASE_PATH` / `NEXT_PUBLIC_BASE_PATH` **empty** (user sites are served from `/`).
4. Confirm `seo.siteUrl` in `src/data/profile.ts` is `https://niktailtech.github.io`.
5. Push to `main`/`master` or run the **Deploy to GitHub Pages** workflow manually.

### Workflow

`.github/workflows/deploy.yml` will:

1. Install dependencies
2. Lint, typecheck, and test
3. Build the static site (honoring `vars.BASE_PATH`)
4. Upload `out/` and deploy with official Pages actions

Required permissions: `contents: read`, `pages: write`, `id-token: write`.

## Content customization

See **[CONTENT.md](./CONTENT.md)** for the full map of data files and asset folders.

Quick start:

1. `src/data/profile.ts` — name, bio, email, CV, SEO
2. `src/data/social.ts` — LinkedIn and other links
3. `src/data/experience.ts` — employment history
4. `src/data/projects.ts` / `repositories.ts` — work and repos
5. `src/data/interests.ts` — Beyond Software galleries
6. Drop media into `public/images/...` and CV into `public/documents/`

Never invent employers, metrics, NFT marketplace details, or certifications. Keep placeholders labeled until real content is ready.

## Project structure

```text
src/
  app/                 # routes, layout, SEO files, globals
  components/          # layout, navigation, sections, UI
  data/                # editable content
  hooks/               # theme
  lib/                 # utilities + content validation
  types/               # shared TypeScript types
public/                # images, icons, documents
.github/workflows/     # Pages CI/CD
```

## Accessibility & theme

- Semantic landmarks, skip link, visible focus rings
- Keyboard-friendly mobile navigation
- `prefers-reduced-motion` respected
- Theme cycles system → light → dark; preference stored in `localStorage`

## Troubleshooting

| Issue | Fix |
| --- | --- |
| Site shows README / Jekyll | Pages Source must be **GitHub Actions**, not a branch |
| Broken assets on Pages | For project sites only: set `BASE_PATH` / `NEXT_PUBLIC_BASE_PATH` to `/repo-name`. User sites leave it empty. |
| 404 on refresh of nested routes | This site is a single-page export; use the custom 404 or trailing-slash home |
| Theme flash | `ThemeScript` runs before paint; hard-refresh if testing mid-change |
| Email / CV buttons incomplete | Configure `profile.ts` flags after adding real values |
| `next/image` errors | Images are unoptimized for static export; keep files in `public/` |

## License

Private portfolio project — adjust licensing as needed before publishing.

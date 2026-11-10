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
git clone https://github.com/NikTailTech/personal-website.git
cd personal-website
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

1. Push this repository to GitHub under `NikTailTech` (or your account).
2. **Settings → Pages → Build and deployment → Source**: GitHub Actions.
3. Ensure the default branch is `main` (or `master` — the workflow listens to both).
4. If this is a **project site** (`https://NikTailTech.github.io/<repo>/`):
   - Create repository variable `BASE_PATH` = `/<repo>` (Settings → Secrets and variables → Actions → Variables).
   - Mirror it locally in `.env.local` as `NEXT_PUBLIC_BASE_PATH=/<repo>`.
5. If this is a **user/org site** or a **custom domain**, leave `BASE_PATH` empty and set `seo.siteUrl` in `src/data/profile.ts`.
6. Push to `main`/`master` or run the **Deploy to GitHub Pages** workflow manually.

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
| Broken assets on Pages | Set `BASE_PATH` / `NEXT_PUBLIC_BASE_PATH` to `/repo-name` |
| 404 on refresh of nested routes | This site is a single-page export; use the custom 404 or trailing-slash home |
| Theme flash | `ThemeScript` runs before paint; hard-refresh if testing mid-change |
| Email / CV buttons incomplete | Configure `profile.ts` flags after adding real values |
| `next/image` errors | Images are unoptimized for static export; keep files in `public/` |

## License

Private portfolio project — adjust licensing as needed before publishing.

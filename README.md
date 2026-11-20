# Nicholas Codazzi — Portfolio

Portfolio of **Nicholas Codazzi**, Full Stack Developer based in Ticino, Switzerland. Live at [niktailtech.github.io](https://niktailtech.github.io) (GitHub handle: `NikTailTech`). Built with Next.js static export for GitHub Pages.

## Overview

- Experience, education, languages, skills and project case studies, kept in sync with the CV
- Light/dark theme with system preference + local persistence
- SEO metadata, sitemap, robots.txt, and Person structured data
- All CV-facing content in a single data file, validated by tests

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
2. Ensure the default branch is `main`. `.github/workflows/deploy.yml` must stay the only workflow that deploys Pages; a second one races it and can leave a stale build live.
3. Leave `BASE_PATH` / `NEXT_PUBLIC_BASE_PATH` **empty** (user sites are served from `/`).
4. Confirm `seo.siteUrl` in `src/data/profile.ts` is `https://niktailtech.github.io`.
5. Push to `main` or run the **Deploy to GitHub Pages** workflow manually. Pull requests run lint, typecheck, tests and build without deploying.

### Workflow

`.github/workflows/deploy.yml` will:

1. Install dependencies
2. Lint, typecheck, and test
3. Build the static site (honoring `vars.BASE_PATH`)
4. Upload `out/` and deploy with official Pages actions

Required permissions: `contents: read`, `pages: write`, `id-token: write`.

## Content customization

All CV-facing content (name, experience, education, languages, skills, projects, SEO) lives in **`src/data/cv.ts`**, so the site and the CV stay in sync. UI labels live in `src/i18n/dictionaries/`. See **[CONTENT.md](./CONTENT.md)** for details and the rules enforced by `src/data/content.test.ts`.

Never invent employers, metrics, links or tools, and never publish placeholders.

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

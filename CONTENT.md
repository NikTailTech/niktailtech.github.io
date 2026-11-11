# Content customization guide

All editable content lives in `src/data/`. Replace placeholders before presenting this site as a finished portfolio. Search the repo for `TODO` to find unfinished slots.

## Identity & SEO — `src/data/profile.ts`

| Field | Action |
| --- | --- |
| `email` / `emailConfigured` | Set your real email and flip `emailConfigured` to `true` |
| `cvPath` / `cvAvailable` | Add PDF to `public/documents/nicholas-cv.pdf`, then set `cvAvailable: true` |
| `location` | Optional public location string |
| `availability` | Update when open/closed to opportunities |
| `about` | Edit biography paragraphs |
| `focusAreas` | Hero “Focus” list: `{ title, description }` entries |
| `stackSignal` | Hero “Stack signal” inline tech list |
| `seo.siteUrl` | Set live URL (GitHub Pages or custom domain) |
| `seo.*` | Titles, description, keywords, OG image |

## Social — `src/data/social.ts`

- GitHub is enabled for `NikTailTech`
- LinkedIn: replace `href` and set `enabled: true`

## Experience — `src/data/experience.ts`

Replace placeholder objects with real roles. Fields: `company`, `title`, `period`, `location`, `summary`, `responsibilities`, `technologies`, `achievements`, `links`. Set `isPlaceholder: false` (or remove the flag).

## Skills — `src/data/skills.ts`

Add/remove skills. Optional `level`: `exploring` | `working` | `proficient` | `advanced`. Do not invent expertise levels.

## Projects — `src/data/projects.ts`

Replace placeholders. Drop images into `public/images/projects/` and reference them as `/images/projects/your-file.webp`.

## Repositories — `src/data/repositories.ts`

List real public repos under `NikTailTech`. No runtime GitHub API — keep this file in sync manually.

## Beyond Software — `src/data/interests.ts`

Four blocks: blockchain, modeling, printing, digital. Replace artwork under:

- `public/images/nft/`
- `public/images/3d/`
- `public/images/prints/`
- `public/images/design/`

Do not invent NFT collection names, chains, standards, or marketplace links.

## Contact copy — `src/data/contact.ts`

Heading, body, and mailto subject line.

## Images

Prefer WebP/AVIF for photos; SVG placeholders ship by default. Keep meaningful `alt` text in components when swapping assets.

## GitHub Pages base path

This portfolio is a **user** site (`https://niktailtech.github.io`). Leave `NEXT_PUBLIC_BASE_PATH` / Actions `BASE_PATH` empty.

In **Settings → Pages**, set Source to **GitHub Actions**. A branch source makes GitHub serve the README via Jekyll.

For a **project** site (`username.github.io/repo-name`) only:

1. Locally: copy `.env.example` → `.env.local` and set `NEXT_PUBLIC_BASE_PATH=/repo-name`
2. GitHub: repository **Settings → Secrets and variables → Actions → Variables** → create `BASE_PATH` = `/repo-name`

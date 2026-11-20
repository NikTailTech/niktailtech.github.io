# Content guide

Everything that also appears on the CV lives in one file: **`src/data/cv.ts`**. Edit the CV and this file together so they never drift apart.

`src/data/content.test.ts` fails the build if:

- the name, employers, titles, locations or dates differ from the CV,
- any published string contains placeholder copy (`TODO`, `[X]`, "placeholder", "coming soon", …),
- any published string looks like a phone number.

## What lives where

| Content | Location |
| --- | --- |
| Name, job title, email, location, languages | `person` in `src/data/cv.ts` |
| GitHub / LinkedIn | `socialLinks` |
| CV download | `cvDocument` (PDF goes in `public/documents/`) |
| Experience, education | `experience`, `education` |
| Skills | `skillTiers` |
| Projects | `projects` (screenshots in `public/images/projects/`) |
| Title, description, OG image | `seo` |
| UI labels (buttons, headings, nav) | `src/i18n/dictionaries/` |

## Rules

- Never invent employers, dates, metrics, links or tools. Leave a `// TODO(user):` comment in `cv.ts` instead; comments are never rendered.
- No phone number or street address anywhere. City/region level only ("Ticino, Switzerland").
- `githubUsername` is only for GitHub links; the display name is always `person.name`.

## CV download

The CV PDF must not contain a phone number or street address. Export a web copy to `public/documents/nicholas-codazzi-cv.pdf`, then set `cvDocument.available` to `true`.

## GitHub Pages base path

This is a **user** site (`https://niktailtech.github.io`), so `NEXT_PUBLIC_BASE_PATH` / the Actions `BASE_PATH` variable stay empty. In **Settings → Pages**, Source must be **GitHub Actions**.

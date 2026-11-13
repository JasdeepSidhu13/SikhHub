# SikhHub

A professional educational archive of **Sikh struggles over faith, language and power**, from gurdwara reform (1920) through Partition, Punjabi Suba, 1984, and the search for justice through 2026.

The site is a static, data-driven app designed for **GitHub Pages**. Chapters, the chronology, the library, and issue dossiers all read from typed records in `src/data/`. Adding a source, event, or theme does not require a redesign.

## Contents

- **Narrative** — six sourced chapters matching the attached chronology
- **Timeline** — dated events, 1920–2026, with source notes and cautions
- **Library** — books, statutes, judgments, commission reports, press, images
- **Issues** — thematic dossiers (shrine control, identity, Gurmukhi, Article 25, Chandigarh, rivers, Blue Star, November 1984, disappearances)
- **Method** — how archival, legal, historical, and commemorative evidence is labelled

The narrative is written from a **Sikh perspective** and disciplined by the documents.

## Local development

```bash
npm install
npm run dev
```

Then open the printed local URL.

```bash
npm run build
npm run preview
```

## GitHub Pages

A workflow in `.github/workflows/pages.yml` builds the site and deploys it with GitHub Actions.

1. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Merge to `main` (or run the workflow manually)
3. The site is served at `https://<user>.github.io/SikhHub/`

The production build uses the base path `/SikhHub/`. Local `npm run dev` uses `/`.

## Adding material

Append a record to:

- `src/data/sources.ts` — books, papers, judgments, images, posts
- `src/data/events.ts` — dated chronology entries
- `src/data/chapters.ts` — narrative prose
- `src/data/themes.ts` — issue dossiers

Use a stable `id`, a `kind` from the evidence legend, and the chapter/theme ids the record belongs to. Rebuild; search and filters pick it up.

## Evidence types

Archival record · Court record · Statute / constitution · Commission / official report · Book · Academic study · Press · Institutional history · Community remembrance · Media / commemoration

Community remembrance is not treated as a court finding. See **Method** on the site.

## Licence

Code is available for reuse with the repository. Linked third-party documents remain under their own terms. Wikimedia images are attributed via their Commons pages.

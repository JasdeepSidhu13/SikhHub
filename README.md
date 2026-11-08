# SikhHub

A professional educational archive of **Sikh struggles over faith, language and power**, from gurdwara reform (1920) through Partition, Punjabi Suba, 1984, and the search for justice through 2025.

The site is a static, data-driven app designed for **GitHub Pages**. Chapters, the chronology, the library, and issue dossiers all read from typed records in `src/data/`. Adding a source, event, or theme does not require a redesign.

## Contents

- **Narrative** — six sourced chapters matching the attached chronology
- **Timeline** — dated events, 1920–2025, with source notes and cautions
- **Library** — books, statutes, judgments, commission reports, press, images
- **Issues** — thematic dossiers (shrine control, identity, Gurmukhi, Article 25, Chandigarh, rivers, Blue Star, November 1984, disappearances)
- **Method** — how archival, legal, historical, and commemorative evidence is labelled

The narrative is written from a **Sikh perspective** and disciplined by the documents. Quotations that lack a contemporary transcript (notably the 1953 Tara Singh wording) are flagged as attributed.

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

The built site lives on the `gh-pages` branch. You do **not** need the Actions tab.

1. Open **the repository** Pages settings (not your profile settings):  
   https://github.com/JasdeepSidhu13/SikhHub/settings/pages
2. Under **Build and deployment**, set **Source** to **Deploy from a branch** (not GitHub Actions, not Add a domain).
3. Branch: **gh-pages**. Folder: **/ (root)**. Click **Save**.
4. Wait a minute, then open https://jasdeepsidhu13.github.io/SikhHub/

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

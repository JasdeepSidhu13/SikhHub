import { searchAll } from "../lib/lookup";
import { esc } from "../lib/html";
import { href } from "../lib/paths";
import { sourceCard } from "./layout";

export function searchView(q = ""): string {
  const results = searchAll(q);
  const total =
    results.chapters.length + results.events.length + results.sources.length + results.themes.length;

  return `
    <div class="page-hero">
      <div class="wrap">
        <p class="kicker">Search</p>
        <h1 class="page-title">Search chapters, events, sources, issues</h1>
        <form class="search-row" data-site-search>
          <label class="sr" for="q">Search</label>
          <input id="q" name="q" value="${esc(q)}" placeholder="e.g. Gurmukhi, Khalra, Article 25, Chandigarh" autofocus />
          <button class="btn btn-navy" type="submit">Search</button>
        </form>
      </div>
    </div>
    <section class="section">
      <div class="wrap">
        ${
          q.trim().length < 2
            ? `<p class="empty">Type at least two characters. Try “Nankana”, “Hukam Singh”, “Blue Star”, or “cremation”.</p>`
            : `<p class="lede-page">${total} result${total === 1 ? "" : "s"} for “${esc(q)}”</p>`
        }
        ${
          results.chapters.length
            ? `<h2>Chapters</h2><div class="chapter-grid">${results.chapters
                .map(
                  (c) =>
                    `<a class="card" href="${href(`/narrative/${c.id}`)}"><h3>${esc(c.title)}</h3><p>${esc(c.summary)}</p></a>`,
                )
                .join("")}</div>`
            : ""
        }
        ${
          results.themes.length
            ? `<h2>Issues</h2><div class="issue-grid">${results.themes
                .map(
                  (t) =>
                    `<a class="card" href="${href(`/issues/${t.id}`)}"><h3>${esc(t.title)}</h3><p>${esc(t.summary)}</p></a>`,
                )
                .join("")}</div>`
            : ""
        }
        ${
          results.events.length
            ? `<h2>Events</h2><div class="event-mini">${results.events
                .map(
                  (e) =>
                    `<a href="${href("/timeline")}#${esc(e.id)}"><h4>${esc(e.date)} — ${esc(e.title)}</h4><p>${esc(e.summary)}</p></a>`,
                )
                .join("")}</div>`
            : ""
        }
        ${
          results.sources.length
            ? `<h2>Sources</h2><div class="card-grid">${results.sources.map(sourceCard).join("")}</div>`
            : ""
        }
      </div>
    </section>
  `;
}

import { searchAll } from "../lib/lookup";
import { esc } from "../lib/html";
import { href, routes } from "../lib/paths";
import { sourceCard } from "./layout";
import { newsCard } from "./news";

export function searchView(q = ""): string {
  const results = searchAll(q);
  const total =
    results.chapters.length +
    results.events.length +
    results.sources.length +
    results.themes.length +
    results.heroes.length +
    results.feats.length +
    results.gurdwaras.length +
    results.live.length +
    results.news.length +
    results.directory.length;

  return `
    <div class="page-hero">
      <div class="wrap">
        <h1 class="page-title">Search</h1>
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
            ? `<p class="empty">Type at least two characters. Try “Ranjit”, “Kartarpur”, “Nankana”, “Hukam Singh”, “Blue Star”, “BaniDB”, or “cremation”.</p>`
            : `<p class="lede-page">${total} result${total === 1 ? "" : "s"} for “${esc(q)}”</p>`
        }
        ${
          results.heroes.length
            ? `<h2>Lives</h2><div class="issue-grid">${results.heroes
                .map(
                  (h) =>
                    `<a class="card" href="${href(routes.achievement(h.id))}"><h3>${esc(h.name)}</h3><p>${esc(h.lede)}</p></a>`,
                )
                .join("")}</div>`
            : ""
        }
        ${
          results.feats.length
            ? `<h2>Works</h2><div class="issue-grid">${results.feats
                .map(
                  (f) =>
                    `<a class="card" href="${href(routes.feat(f.id))}"><h3>${esc(f.title)}</h3><p>${esc(f.lede)}</p></a>`,
                )
                .join("")}</div>`
            : ""
        }
        ${
          results.gurdwaras.length
            ? `<h2>Gurdwaras</h2><div class="issue-grid">${results.gurdwaras
                .map(
                  (g) =>
                    `<a class="card" href="${href(routes.gurdwara(g.id))}"><h3>${esc(g.name)}</h3><p>${esc(g.place)} — ${esc(g.kicker)}</p></a>`,
                )
                .join("")}</div>`
            : ""
        }
        ${
          results.live.length
            ? `<h2>Kirtan</h2><div class="issue-grid">${results.live
                .map(
                  (s) =>
                    `<a class="card ext" href="${esc(s.official.href)}" rel="noopener noreferrer" target="_blank"><h3>${esc(s.name)}</h3><p>${esc(s.place)}</p></a>`,
                )
                .join("")}</div>`
            : ""
        }
        ${
          results.themes.length
            ? `<h2>Issues</h2><div class="issue-grid">${results.themes
                .map(
                  (t) =>
                    `<a class="card" href="${href(routes.issue(t.id))}"><h3>${esc(t.title)}</h3><p>${esc(t.summary)}</p></a>`,
                )
                .join("")}</div>`
            : ""
        }
        ${
          results.chapters.length
            ? `<h2>History</h2><div class="chapter-grid">${results.chapters
                .map(
                  (c) =>
                    `<a class="card" href="${href(routes.chapter(c.id))}"><h3>${esc(c.title)}</h3><p>${esc(c.summary)}</p></a>`,
                )
                .join("")}</div>`
            : ""
        }
        ${
          results.events.length
            ? `<h2>Events</h2><div class="event-mini">${results.events
                .map(
                  (e) =>
                    `<a href="${href(routes.chronology)}#${esc(e.id)}"><h4>${esc(e.date)} — ${esc(e.title)}</h4><p>${esc(e.summary)}</p></a>`,
                )
                .join("")}</div>`
            : ""
        }
        ${
          results.news.length
            ? `<h2>News</h2><div class="news-stack">${results.news.map((item) => newsCard(item)).join("")}</div>`
            : ""
        }
        ${
          results.directory.length
            ? `<h2>Index</h2><div class="dir-grid">${results.directory
                .map(
                  (d) =>
                    `<a class="dir-card" href="${esc(d.url)}" rel="noopener noreferrer" target="_blank"><p class="feat-meta">${esc(d.kind)}${d.place ? ` · ${esc(d.place)}` : ""}</p><h3>${esc(d.name)}</h3><p>${esc(d.note)}</p><p class="read-on">Open the original</p></a>`,
                )
                .join("")}</div>`
            : ""
        }
        ${
          results.sources.length
            ? `<h2>Documents</h2><div class="card-grid">${results.sources.map(sourceCard).join("")}</div>`
            : ""
        }
      </div>
    </section>
  `;
}

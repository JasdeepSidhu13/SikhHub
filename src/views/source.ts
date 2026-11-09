import { briefs } from "../data/briefs";
import { sourceById } from "../data/sources";
import { KIND_LABEL } from "../data/types";
import { chaptersFor, relatedSources, themesFor } from "../lib/lookup";
import { esc } from "../lib/html";
import { asset, href, routes } from "../lib/paths";
import { kindChip } from "./layout";

export function sourceView(id: string): string | null {
  const source = sourceById[id];
  if (!source) return null;
  const brief = briefs[id];
  const chs = chaptersFor(source.chapterIds);
  const ths = themesFor(source.themeIds);
  const related = relatedSources(source);

  return `
    <div class="page-hero">
      <div class="wrap">
        <p>${kindChip(source.kind)} <span class="meta-inline">${esc(KIND_LABEL[source.kind])}</span></p>
        <h1 class="page-title">${esc(source.title)}</h1>
        <p class="lede-page">${esc(source.creator)}${source.year ? ` · ${esc(source.year)}` : ""}</p>
      </div>
    </div>
    <section class="section">
      <div class="wrap split">
        <article class="prose">
          ${
            brief?.image
              ? `<figure class="photo"><img src="${esc(asset(brief.image))}" alt="${esc(brief.imageAlt ?? source.title)}" />
                 <p class="figure-credit">${esc(brief.imageCredit ?? "")}</p></figure>`
              : ""
          }
          <h2>What this record is</h2>
          <p>${esc(source.note)}</p>
          ${
            brief
              ? `<h2>Key information</h2><ul>${brief.keyPoints.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
                 <aside class="callout"><strong>Why it matters</strong><p>${esc(brief.whyItMatters)}</p></aside>`
              : `<aside class="callout"><strong>Why it is here</strong><p>${esc(source.note)}</p></aside>`
          }
          ${
            brief?.excerpt
              ? `<blockquote class="pull">${esc(brief.excerpt)}<cite>${esc(brief.excerptCite ?? "")}</cite></blockquote>`
              : ""
          }
          <p>
            <a class="btn btn-primary ext" href="${esc(source.url)}" rel="noopener noreferrer" target="_blank">Further exploration — open the original</a>
          </p>
        </article>
        <aside class="side">
          <h3>In this archive</h3>
          <div class="event-mini">
            ${chs.map((c) => `<a href="${href(routes.chapter(c.id))}"><h4>${esc(c.years)}</h4><p>${esc(c.title)}</p></a>`).join("")}
            ${ths.map((t) => `<a href="${href(routes.issue(t.id))}"><h4>${esc(t.title)}</h4><p>${esc(t.kicker)}</p></a>`).join("")}
          </div>
          ${
            related.length
              ? `<h3 style="margin-top:1.6rem">Further on this subject</h3>
                 <div class="event-mini">${related
                   .map((s) => `<a href="${href(routes.document(s.id))}"><h4>${esc(s.title)}</h4><p>${esc(s.creator)}</p></a>`)
                   .join("")}</div>`
              : ""
          }
        </aside>
      </div>
    </section>
  `;
}

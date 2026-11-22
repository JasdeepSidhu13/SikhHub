import { NEWS_KIND_LABEL, currentNewsWeek, newsWeeks, type NewsItem, type NewsWeek } from "../data/news";
import { themeById } from "../data/themes";
import { esc } from "../lib/html";
import { href, routes } from "../lib/paths";

function kindChip(kind: NewsItem["kind"]): string {
  return `<span class="kind kind-news-${kind}">${esc(NEWS_KIND_LABEL[kind])}</span>`;
}

export function newsCard(item: NewsItem, featured = false): string {
  const related = (item.themeIds ?? [])
    .map((id) => themeById[id])
    .filter(Boolean)
    .slice(0, 1);
  return `
    <article class="news-card${featured ? " is-lead" : ""}">
      <p class="news-meta">${kindChip(item.kind)}<time>${esc(item.date)}</time></p>
      <h3>${esc(item.headline)}</h3>
      <p>${esc(item.dek)}</p>
      <p class="news-foot">
        <a class="ext" href="${esc(item.url)}" rel="noopener noreferrer" target="_blank">${esc(item.source)} — open the original</a>
        ${related
          .map((theme) => `<a href="${href(routes.issue(theme.id))}">In this archive: ${esc(theme.title)}</a>`)
          .join("")}
      </p>
    </article>`;
}

export function newsWeekBlock(week: NewsWeek, compact = false): string {
  const [lead, ...rest] = week.items;
  if (!lead) return "";
  if (compact) {
    return `
      <div class="news-stack">
        ${week.items.map((item) => newsCard(item)).join("")}
      </div>`;
  }
  return `
    <div class="news-spread">
      ${newsCard(lead, true)}
      <div class="news-stack">
        ${rest.map((item) => newsCard(item)).join("")}
      </div>
    </div>`;
}

export function newsDeskPreview(): string {
  const week = currentNewsWeek;
  return `
    <section class="section section-cream" id="news">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">${esc(week.label)}</p>
            <h2>News</h2>
            <p>${esc(week.summary)}</p>
          </div>
          <a class="btn btn-navy" href="${href(routes.news)}">All news</a>
        </div>
        ${newsWeekBlock(week)}
        <p class="news-note">Edited weekly from a Sikh standpoint. Each item opens the original. Sikh issues, below, is the same fight — dated.</p>
      </div>
    </section>`;
}

export function newsIndexView(): string {
  return `
    <div class="page-hero">
      <div class="wrap">
        <p class="kicker">News</p>
        <h1 class="page-title">On the desk</h1>
        <p class="lede-page">Pro-Sikh news, updated weekly: achievement, pilgrimage, institutions, and the live issues — Kartarpur, Bandi Singhs, Chandigarh, 1984. Not a wire. A desk. Every item is sourced.</p>
      </div>
    </div>
    ${newsWeeks
      .map(
        (week, index) => `
    <section class="section${index % 2 ? " section-cream" : ""}" id="${esc(week.id)}">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">${esc(week.kicker)}</p>
            <h2>${esc(week.label)}</h2>
            <p>${esc(week.summary)}</p>
          </div>
        </div>
        ${newsWeekBlock(week, index > 0)}
      </div>
    </section>`,
      )
      .join("")}
    <section class="section">
      <div class="wrap">
        <p class="news-note">SikhHub is a non-profit archive. The desk is edited by hand each week from published originals. It does not replace the papers. It sits beside them.</p>
        <p><a class="btn btn-navy" href="${href(routes.issues)}">Open Sikh issues</a> <a class="btn btn-ghost" href="${href(routes.about)}#contact" style="color:var(--navy);border-color:var(--navy)">Send a story</a></p>
      </div>
    </section>`;
}

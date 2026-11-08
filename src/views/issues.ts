import { themeById, themes } from "../data/themes";
import { esc } from "../lib/html";
import { href } from "../lib/paths";
import { chaptersFor, eventsFor, sourcesFor } from "../lib/lookup";
import { sourceCard } from "./layout";

export function issuesIndexView(): string {
  return `
    <div class="page-hero">
      <div class="wrap">
        <p class="kicker">Issues</p>
        <h1 class="page-title">Educate yourself by theme</h1>
        <p class="lede-page">The same history, cut by the questions Sikhs have actually had to live: shrine control, identity, language, the Constitution, Chandigarh, rivers, Blue Star, November 1984, disappearances.</p>
      </div>
    </div>
    <section class="section">
      <div class="wrap issue-grid">
        ${themes
          .map(
            (t) => `
          <a class="card" href="${href(`/issues/${t.id}`)}">
            <div class="num">${esc(t.kicker)}</div>
            <h3>${esc(t.title)}</h3>
            <p>${esc(t.summary)}</p>
          </a>`,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function issueView(id: string): string | null {
  const theme = themeById[id];
  if (!theme) return null;
  const srcs = sourcesFor(theme.sourceIds);
  const evs = eventsFor(theme.eventIds);
  const chs = chaptersFor(theme.chapterIds);
  return `
    <div class="page-hero">
      <div class="wrap">
        <p class="kicker">${esc(theme.kicker)}</p>
        <h1 class="page-title">${esc(theme.title)}</h1>
        <p class="lede-page">${esc(theme.summary)}</p>
      </div>
    </div>
    <section class="section">
      <div class="wrap split">
        <article class="prose">
          <h2>A Sikh reading</h2>
          <p>${esc(theme.sikhReading)}</p>
          <aside class="callout"><strong>What the evidence is</strong><p>${esc(theme.evidence)}</p></aside>
          <h2>Chapters</h2>
          <div class="event-mini">
            ${chs
              .map(
                (c) =>
                  `<a href="${href(`/narrative/${c.id}`)}"><h4>${esc(c.number)} · ${esc(c.title)}</h4><p>${esc(c.years)}</p></a>`,
              )
              .join("")}
          </div>
          <h2>Dated events</h2>
          <div class="event-mini">
            ${evs
              .map(
                (e) =>
                  `<a href="${href("/timeline")}#${esc(e.id)}"><h4>${esc(e.date)}</h4><p>${esc(e.title)}</p></a>`,
              )
              .join("")}
          </div>
        </article>
        <aside class="side">
          <h3>Sources</h3>
          <div class="source-list">${srcs.map(sourceCard).join("")}</div>
        </aside>
      </div>
    </section>
  `;
}

import { events, periods } from "../data/events";
import { esc } from "../lib/html";
import { href } from "../lib/paths";
import { sourcesFor } from "../lib/lookup";
import { kindChip } from "./layout";
import { chapterById } from "../data/chapters";

export function timelineView(period = "all"): string {
  const filtered = period === "all" ? events : events.filter((e) => e.period === period);
  return `
    <div class="page-hero">
      <div class="wrap">
        <p class="kicker">Chronology</p>
        <h1 class="page-title">Dated events, 1920–2025</h1>
        <p class="lede-page">A sourced chronology of gurdwara reform, Punjabi Suba, and the Punjab crisis. Each entry names what the documents establish — and, where needed, what they do not.</p>
      </div>
    </div>
    <section class="section">
      <div class="wrap">
        <div class="filters" data-filter-group="period">
          <button type="button" data-period="all" class="${period === "all" ? "is-on" : ""}">All periods</button>
          ${periods
            .map(
              (p) =>
                `<button type="button" data-period="${esc(p)}" class="${period === p ? "is-on" : ""}">${esc(p)}</button>`,
            )
            .join("")}
        </div>
        <div class="timeline">
          ${filtered
            .map((e) => {
              const chapter = chapterById[e.chapterId];
              const srcs = sourcesFor(e.sourceIds);
              return `
                <article class="t-item" id="${esc(e.id)}">
                  <time>${esc(e.date)}</time>
                  <h3>${esc(e.title)}</h3>
                  <p>${esc(e.summary)}</p>
                  <details>
                    <summary>Why it matters · sources</summary>
                    <p>${esc(e.significance)}</p>
                    <p class="note">${esc(e.evidence)}</p>
                    <p>${chapter ? `<a href="${href(`/narrative/${chapter.id}`)}">Chapter: ${esc(chapter.title)}</a>` : ""}</p>
                    <div class="source-list" style="margin-top:.8rem">
                      ${srcs
                        .map(
                          (s) =>
                            `<a class="source-card" href="${href(`/library/${s.id}`)}">${kindChip(s.kind)} <h4>${esc(s.title)}</h4></a>`,
                        )
                        .join("")}
                    </div>
                  </details>
                </article>`;
            })
            .join("")}
        </div>
      </div>
    </section>
  `;
}

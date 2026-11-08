import type { Block } from "../data/types";
import { chapterById, chapters } from "../data/chapters";
import { esc } from "../lib/html";
import { href } from "../lib/paths";
import { eventsFor, sourcesFor, themesFor } from "../lib/lookup";
import { sourceCard } from "./layout";

function renderBlock(block: Block): string {
  if (block.type === "p") return `<p>${esc(block.text)}</p>`;
  if (block.type === "h2") return `<h2>${esc(block.text)}</h2>`;
  if (block.type === "quote") {
    return `<blockquote class="pull">${esc(block.text)}<cite>${esc(block.cite)}</cite></blockquote>
      ${block.caution ? `<p class="note">${esc(block.caution)}</p>` : ""}`;
  }
  if (block.type === "callout") {
    return `<aside class="callout"><strong>${esc(block.title)}</strong><p>${esc(block.text)}</p></aside>`;
  }
  return `<div class="callout"><p>${esc(block.left)}</p><p>${esc(block.right)}</p></div>`;
}

export function narrativeIndexView(): string {
  return `
    <div class="page-hero">
      <div class="wrap">
        <p class="kicker">Narrative</p>
        <h1 class="page-title">Sikh struggles over faith, language and power</h1>
        <p class="lede-page">A sourced narrative from colonial Punjab to 2025. The chapters are written from a Sikh standpoint and disciplined by the documents: what is in the archive, what a court has found, and what is remembered.</p>
      </div>
    </div>
    <section class="section">
      <div class="wrap chapter-grid">
        ${chapters
          .map(
            (c) => `
          <a class="card" href="${href(`/narrative/${c.id}`)}">
            <div class="num">${esc(c.number)} / ${esc(c.years)}</div>
            <h3>${esc(c.title)}</h3>
            <p>${esc(c.question)}</p>
            <div class="years">${esc(c.summary)}</div>
          </a>`,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function chapterView(id: string): string | null {
  const chapter = chapterById[id];
  if (!chapter) return null;
  const srcs = sourcesFor(chapter.sourceIds);
  const evs = eventsFor(chapter.eventIds);
  const ths = themesFor(chapter.themeIds);
  const idx = chapters.findIndex((c) => c.id === id);
  const prev = chapters[idx - 1];
  const next = chapters[idx + 1];

  return `
    <div class="page-hero">
      <div class="wrap">
        <p class="kicker">${esc(chapter.number)} · ${esc(chapter.kicker)} · ${esc(chapter.years)}</p>
        <h1 class="page-title">${esc(chapter.title)}</h1>
        <p class="lede-page">${esc(chapter.question)}</p>
      </div>
    </div>
    <section class="section">
      <div class="wrap split">
        <article class="prose">
          ${chapter.blocks.map(renderBlock).join("")}
          <p class="note">Read the linked sources. Community remembrance and later histories are labelled as such in the library.</p>
        </article>
        <aside class="side">
          <h3>Read the sources</h3>
          <div class="source-list">${srcs.map(sourceCard).join("")}</div>
          <h3 style="margin-top:1.6rem">On the timeline</h3>
          <div class="event-mini">
            ${evs
              .map(
                (e) => `<a href="${href("/timeline")}#${esc(e.id)}"><h4>${esc(e.date)}</h4><p>${esc(e.title)}</p></a>`,
              )
              .join("")}
          </div>
          <h3 style="margin-top:1.6rem">Related issues</h3>
          <div class="event-mini">
            ${ths
              .map((t) => `<a href="${href(`/issues/${t.id}`)}"><h4>${esc(t.title)}</h4><p>${esc(t.kicker)}</p></a>`)
              .join("")}
          </div>
        </aside>
      </div>
      <div class="wrap" style="display:flex;justify-content:space-between;gap:1rem;margin-top:2rem">
        ${prev ? `<a class="btn btn-navy" href="${href(`/narrative/${prev.id}`)}">← ${esc(prev.title)}</a>` : "<span></span>"}
        ${next ? `<a class="btn btn-navy" href="${href(`/narrative/${next.id}`)}">${esc(next.title)} →</a>` : "<span></span>"}
      </div>
    </section>
  `;
}

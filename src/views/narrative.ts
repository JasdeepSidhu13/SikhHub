import type { Block } from "../data/types";
import { chapterById, chapters } from "../data/chapters";
import { stories } from "../data/stories";
import { esc } from "../lib/html";
import { href, routes } from "../lib/paths";
import { eventsFor, sourcesFor, themesFor } from "../lib/lookup";
import { sourceCard } from "./layout";
import { figure, genocideInfographic, pherumanInfographic, raid1955Gallery, raid1955Infographic, reorgInfographic } from "./infographics";
import { media } from "../data/media";
import { clipping, letter, storyFeature } from "./exhibits";

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
        <h1 class="page-title">History, 1920–2025</h1>
        <p class="lede-page">From mahant control of the Guru’s house to a 2025 life sentence in a 1984 Sikh genocide case. Six chapters, written from a Sikh standpoint and held to the documents.</p>
      </div>
    </div>
    <section class="section">
      <div class="wrap chapter-grid">
        ${chapters
          .map(
            (c) => `
          <a class="card" href="${href(routes.chapter(c.id))}">
            <div class="num">${esc(c.years)}</div>
            <h3>${esc(c.title)}</h3>
            <p>${esc(c.question)}</p>
          </a>`,
          )
          .join("")}
      </div>
    </section>
  `;
}

function chapterExtras(id: string): string {
  if (id === "shrine") {
    const nankana = stories.find((s) => s.id === "nankana")!;
    return `${figure(media.harmandir, "Sri Harmandir Sahib.")}${figure(media.jaito, "A shahidi jatha at the Akal Takht during the Jaito Morcha, about 1924.")}${storyFeature(nankana)}`;
  }
  if (id === "identity") {
    return letter({
      from: "M. K. Gandhi to Jawaharlal Nehru",
      date: "3 August 1937",
      body: "The Sikhs will die for Punjabi written in Gurmukhi. There is no elegance about that script.",
      cite: "Collected Works of Mahatma Gandhi, volume 66.",
    });
  }
  if (id === "partition") {
    const raid1955 = stories.find((s) => s.id === "golden-temple-1955")!;
    return `${figure(media.tara, "Master Tara Singh, Tarn Taran, March 1956.")}${letter({
      from: "Sardar Hukam Singh",
      date: "21 November 1949",
      body: "My community cannot subscribe its assent to this historic document.",
      cite: "Constituent Assembly Debates.",
    })}${storyFeature(raid1955)}${raid1955Gallery()}`;
  }
  if (id === "suba") {
    const raid1955 = stories.find((s) => s.id === "golden-temple-1955")!;
    const kaka = stories.find((s) => s.id === "kaka-inderjit")!;
    const pheruman = stories.find((s) => s.id === "pheruman")!;
    return `${figure(media.tara, "Master Tara Singh, 1956.")}${storyFeature(raid1955)}${raid1955Infographic()}${storyFeature(kaka)}${reorgInfographic()}${pherumanInfographic()}${storyFeature(pheruman)}${clipping({
      masthead: "The Hindu",
      date: "29 October 1969",
      headline: "Hartal to mourn Pheruman",
      body: "Hartal was observed throughout Punjab in memory of Mr. Darshan Singh Pheruman, who died in Amritsar yesterday on the 74th day of his fast for the inclusion of Chandigarh in Punjab.",
      cite: "The Hindu, 29 October 1969.",
    })}`;
  }
  if (id === "bluestar") {
    return `${figure(media.granth, "Guru Granth Sahib manuscript pierced in Operation Blue Star.")}${figure(media.witnesses, "Widows of the 1984 Sikh genocide in Delhi.")}${genocideInfographic()}`;
  }
  if (id === "accounting") {
    const khalra = stories.find((s) => s.id === "khalra")!;
    return `${figure(media.day1, "1 November 1984 — reconstructed by the 1984 Sikh Archive.")}${storyFeature(khalra)}`;
  }
  return "";
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
  const extra = chapterExtras(id);

  return `
    <div class="page-hero">
      <div class="wrap">
        <p class="kicker">${esc(chapter.years)}</p>
        <h1 class="page-title">${esc(chapter.title)}</h1>
        <p class="lede-page">${esc(chapter.question)}</p>
      </div>
    </div>
    <section class="section">
      ${extra ? `<div class="wrap exhibit-band">${extra}</div>` : ""}
      <div class="wrap split">
        <article class="prose">
          ${chapter.blocks.map(renderBlock).join("")}
        </article>
        <aside class="side">
          <h3>Documents</h3>
          <div class="source-list">${srcs.map(sourceCard).join("")}</div>
          <h3 style="margin-top:1.6rem">On the chronology</h3>
          <div class="event-mini">
            ${evs
              .map(
                (e) => `<a href="${href(routes.chronology)}#${esc(e.id)}"><h4>${esc(e.date)}</h4><p>${esc(e.title)}</p></a>`,
              )
              .join("")}
          </div>
          <h3 style="margin-top:1.6rem">Related issues</h3>
          <div class="event-mini">
            ${ths
              .map((t) => `<a href="${href(routes.issue(t.id))}"><h4>${esc(t.title)}</h4><p>${esc(t.kicker)}</p></a>`)
              .join("")}
          </div>
        </aside>
      </div>
      <div class="wrap" style="display:flex;justify-content:space-between;gap:1rem;margin-top:2rem">
        ${prev ? `<a class="btn btn-navy" href="${href(routes.chapter(prev.id))}">← ${esc(prev.title)}</a>` : "<span></span>"}
        ${next ? `<a class="btn btn-navy" href="${href(routes.chapter(next.id))}">${esc(next.title)} →</a>` : "<span></span>"}
      </div>
    </section>
  `;
}

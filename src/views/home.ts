import { chapters } from "../data/chapters";
import { events } from "../data/events";
import { sources } from "../data/sources";
import { themes } from "../data/themes";
import { esc } from "../lib/html";
import { href } from "../lib/paths";
import { kindChip } from "./layout";

export function homeView(): string {
  const featured = ["delhi-hc-2018", "cwmg-66", "sarsfield", "hrw-killers", "anandpur-satp", "cad-21-nov"]
    .map((id) => sources.find((s) => s.id === id))
    .filter(Boolean);

  return `
    <section class="hero">
      <div class="hero-inner">
        <p class="kicker">Colonial Punjab to modern India · through 2025</p>
        <h1>Our liberty has not come.</h1>
        <p class="lede">SikhHub is a sourced educational archive of Sikh struggles over faith, language and power: gurdwara reform, the fight to be recognised as a distinct Panth, Partition’s unfinished citizenship, a state without its capital, Blue Star, November 1984, and the long wait for an accounting.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="${href("/narrative")}">Read the narrative</a>
          <a class="btn btn-ghost" href="${href("/library")}">Open the library</a>
        </div>
        <div class="stats">
          <div class="stat"><b>${chapters.length}</b><span>narrative chapters</span></div>
          <div class="stat"><b>${events.length}</b><span>dated events</span></div>
          <div class="stat"><b>${sources.length}</b><span>linked sources</span></div>
          <div class="stat"><b>${themes.length}</b><span>issue dossiers</span></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">Start here</p>
            <h2>Six chapters, one ledger</h2>
            <p>Each chapter distinguishes archival records and legal findings from later histories and community remembrance. Read them in order, or jump to an issue.</p>
          </div>
          <a class="btn btn-navy" href="${href("/timeline")}">Open the chronology</a>
        </div>
        <div class="chapter-grid">
          ${chapters
            .map(
              (c) => `
            <a class="card" href="${href(`/narrative/${c.id}`)}">
              <div class="num">${esc(c.number)} / ${esc(c.years)}</div>
              <h3>${esc(c.title)}</h3>
              <p>${esc(c.summary)}</p>
              <div class="years">${esc(c.kicker)}</div>
            </a>`,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="quote-band">
      <div class="wrap">
        <blockquote>“The English-man has gone, but our [Sikh] liberty has not come. For us the so-called liberty is simply a change of masters, black for white.”</blockquote>
        <cite>Wording attributed to Master Tara Singh, 28 March 1953 — see the source note in chapter 03. A contemporary transcript has not been located.</cite>
        <p class="caution">SikhHub does not treat this sentence as a pinned archival text. Near-contemporary reports record the same argument. The linked originals are the evidence; the caution is part of the evidence.</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">Evidence, labelled</p>
            <h2>Featured sources</h2>
            <p>Court judgments, Collected Works, the Anandpur text, HRW/Ensaaf, Tara Singh’s 1946 foreword. Every card opens the original.</p>
          </div>
          <a class="btn btn-navy" href="${href("/library")}">Browse all sources</a>
        </div>
        <div class="card-grid">
          ${featured
            .map(
              (s) => `
            <a class="source-card ext" href="${esc(s!.url)}" rel="noopener noreferrer" target="_blank">
              ${kindChip(s!.kind)}
              <h4>${esc(s!.title)}</h4>
              <p>${esc(s!.note)}</p>
              <div class="meta">${esc(s!.creator)}</div>
            </a>`,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

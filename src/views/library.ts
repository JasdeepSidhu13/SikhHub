import { sources } from "../data/sources";
import { KIND_LABEL, KIND_HINT } from "../data/types";
import type { SourceKind } from "../data/types";
import { esc } from "../lib/html";
import { sourceCard } from "./layout";

const kinds = Object.keys(KIND_LABEL) as SourceKind[];

export function libraryView(kind = "all", q = ""): string {
  const query = q.trim().toLowerCase();
  const filtered = sources.filter((s) => {
    if (kind !== "all" && s.kind !== kind) return false;
    if (!query) return true;
    return [s.title, s.creator, s.note, s.year, ...s.tags].join(" ").toLowerCase().includes(query);
  });

  return `
    <div class="page-hero">
      <div class="wrap">
        <p class="kicker">Library</p>
        <h1 class="page-title">Research articles, books, papers, judgments, images</h1>
        <p class="lede-page">A growing catalogue of originals. Filter by evidence type. Every title is an outbound link. Add more by appending a record in <code>src/data/sources.ts</code> — the site is built to scale that way.</p>
      </div>
    </div>
    <section class="section">
      <div class="wrap">
        <form class="search-row" data-lib-search>
          <label class="sr" for="libq">Filter sources</label>
          <input id="libq" name="q" value="${esc(q)}" placeholder="Search titles, authors, tags…" />
          <button class="btn btn-navy" type="submit">Filter</button>
        </form>
        <div class="filters" data-filter-group="kind">
          <button type="button" data-kind="all" class="${kind === "all" ? "is-on" : ""}">All types</button>
          ${kinds
            .map(
              (k) =>
                `<button type="button" data-kind="${k}" class="${kind === k ? "is-on" : ""}" title="${esc(KIND_HINT[k])}">${esc(KIND_LABEL[k])}</button>`,
            )
            .join("")}
        </div>
        <p class="lede-page">${filtered.length} source${filtered.length === 1 ? "" : "s"}</p>
        <div class="card-grid" style="margin-top:1rem">
          ${filtered.map(sourceCard).join("") || `<p class="empty">No sources match that filter.</p>`}
        </div>
      </div>
    </section>
  `;
}

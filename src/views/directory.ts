import { DIRECTORY_KINDS, directory, type DirectoryKind } from "../data/directory";
import { esc } from "../lib/html";
import { asset, href, routes } from "../lib/paths";

export function directoryPreview(): string {
  return `
    <section class="section" id="directory">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">Index</p>
            <h2>A hundred doors</h2>
            <p>Gurbani search, the SGPC, Ensaaf, the 1984 archive, live kirtan, museums, APIs. ${directory.length} doors. SikhHub is a desk. These are the papers it sits beside.</p>
          </div>
          <a class="btn btn-navy" href="${href(routes.directory)}">Open the index</a>
        </div>
        <p class="dir-kinds">${DIRECTORY_KINDS.map((k) => `<a href="${href(routes.directory)}?kind=${encodeURIComponent(k)}">${esc(k)}</a>`).join("")}</p>
      </div>
    </section>`;
}

export function directoryView(kind = "all"): string {
  const use = kind === "all" || (DIRECTORY_KINDS as readonly string[]).includes(kind) ? kind : "all";
  const list = use === "all" ? directory : directory.filter((d) => d.kind === (use as DirectoryKind));
  return `
    <div class="cinema">
      <img class="cinema-bg" src="${asset("/media/harmandir-aerial.jpg")}" alt="" />
      <div class="cinema-shade"></div>
      <div class="wrap cinema-copy">
        <p class="kicker">Index</p>
        <h1 class="page-title">Where to read Sikhi</h1>
        <p class="lede-page">${directory.length} doors: Gurbani, archives, institutions, rights desks, newsrooms, museums, seva, broadcasts, and the APIs that serve the Granth. SikhHub does not replace them. It points.</p>
      </div>
    </div>
    <section class="section" id="doors">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">${list.length} on this plate</p>
            <h2>Open the original</h2>
            <p>Each card leaves this site. Prefer a dated document over a primer. Prefer the Granth over a paraphrase.</p>
          </div>
        </div>
        <div class="filters">
          <button type="button" data-dir-kind="all" class="${use === "all" ? "is-on" : ""}">All</button>
          ${DIRECTORY_KINDS.map(
            (k) =>
              `<button type="button" data-dir-kind="${esc(k)}" class="${use === k ? "is-on" : ""}">${esc(k)}</button>`,
          ).join("")}
        </div>
        <div class="dir-grid">
          ${list
            .map(
              (d) => `
            <a class="dir-card" href="${esc(d.url)}" rel="noopener noreferrer" target="_blank">
              <p class="feat-meta">${esc(d.kind)}${d.place ? ` · ${esc(d.place)}` : ""}</p>
              <h3>${esc(d.name)}</h3>
              <p>${esc(d.note)}</p>
              <p class="read-on">Open the original</p>
            </a>`,
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

import { briefs } from "../data/briefs";
import type { Source } from "../data/types";
import { KIND_LABEL } from "../data/types";
import type { SourceKind } from "../data/types";
import { esc } from "../lib/html";
import { asset, href } from "../lib/paths";
import type { Route } from "../lib/router";
import khanda from "../assets/khanda.svg?url";

function navItem(hrefPath: string, label: string, current: boolean): string {
  return `<a href="${href(hrefPath)}" ${current ? 'aria-current="page"' : ""}>${esc(label)}</a>`;
}

export function shell(route: Route, title: string, body: string, extraClass = ""): string {
  const on = (name: Route["name"]) => route.name === name;
  document.title = title;
  return `
    <a class="skip" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="${href("/")}">
          <img class="brand-mark" src="${khanda}" alt="" width="36" height="36"/>
          <div class="brand-name">SikhHub<span>Sourced history, 1920–2025</span></div>
        </a>
        <button class="menu-toggle" type="button" data-menu>Menu</button>
        <nav class="nav" data-nav>
          ${navItem("/narrative", "Narrative", on("narrative") || on("chapter"))}
          ${navItem("/timeline", "Timeline", on("timeline"))}
          ${navItem("/library", "Library", on("library") || on("source"))}
          ${navItem("/issues", "Issues", on("issues") || on("issue"))}
          ${navItem("/method", "Method", on("method"))}
          <button class="search-btn" type="button" data-search>Search</button>
        </nav>
      </div>
    </header>
    <main id="main" class="${extraClass}">${body}</main>
    <footer class="footer">
      <div class="footer-inner footer-grid">
        <div>
          <h2>SikhHub</h2>
          <p>An educational archive of Sikh struggles over faith, language and power — from gurdwara reform to the 1984 Sikh genocide and the Punjab disappearances. Primary documents, court records, and named histories, labelled for what they are.</p>
        </div>
        <div>
          <h2>Read</h2>
          <ul>
            <li><a href="${href("/narrative")}">Six chapters</a></li>
            <li><a href="${href("/timeline")}">Dated chronology</a></li>
            <li><a href="${href("/library")}">Source library</a></li>
            <li><a href="${href("/issues")}">Issues, by theme</a></li>
          </ul>
        </div>
        <div>
          <h2>Use</h2>
          <ul>
            <li><a href="${href("/method")}">How evidence is classified</a></li>
            <li><a href="${href("/search")}">Search the archive</a></li>
            <li><a href="https://github.com/JasdeepSidhu13/SikhHub">GitHub repository</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-inner fine">SikhHub is a static, data-driven site. Adding a source is a JSON/TypeScript record. Nothing here replaces reading the linked originals. Hosted for GitHub Pages.</div>
    </footer>
  `;
}

export function kindChip(kind: SourceKind): string {
  return `<span class="kind kind-${kind}">${esc(KIND_LABEL[kind])}</span>`;
}

export function sourceCard(source: Source): string {
  const brief = briefs[source.id];
  return `
    <a class="source-card" href="${href(`/library/${source.id}`)}">
      ${brief?.image ? `<img class="source-thumb" src="${esc(asset(brief.image))}" alt="" />` : ""}
      ${kindChip(source.kind)}
      <h4>${esc(source.title)}</h4>
      <p>${esc(source.note)}</p>
      <div class="meta">${esc(source.creator)}${source.year ? ` · ${esc(source.year)}` : ""} · Brief, then original</div>
    </a>
  `;
}

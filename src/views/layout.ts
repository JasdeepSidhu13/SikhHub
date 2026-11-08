import { briefs } from "../data/briefs";
import type { Source } from "../data/types";
import { KIND_LABEL } from "../data/types";
import type { SourceKind } from "../data/types";
import { esc } from "../lib/html";
import { asset, href, routes } from "../lib/paths";
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
          <div class="brand-name">SikhHub<span>1920–2025</span></div>
        </a>
        <button class="menu-toggle" type="button" data-menu>Menu</button>
        <nav class="nav" data-nav>
          ${navItem(routes.issues, "The record", on("issues") || on("issue"))}
          ${navItem(routes.history, "History", on("narrative") || on("chapter"))}
          ${navItem(routes.chronology, "Chronology", on("timeline"))}
          ${navItem(routes.documents, "Documents", on("library") || on("source"))}
          <button class="search-btn" type="button" data-search>Search</button>
        </nav>
      </div>
    </header>
    <main id="main" class="${extraClass}">${body}</main>
    <footer class="footer">
      <div class="footer-inner footer-grid">
        <div>
          <h2>SikhHub</h2>
          <p>Sikh political history from gurdwara reform through the 1984 Sikh genocide and the Punjab disappearances. Judgments, letters, statutes, and photographs — labelled for what they are.</p>
        </div>
        <div>
          <h2>Read</h2>
          <ul>
            <li><a href="${href(routes.issues)}">Key issues</a></li>
            <li><a href="${href(routes.history)}">History, 1920–2025</a></li>
            <li><a href="${href(routes.chronology)}">Chronology</a></li>
            <li><a href="${href(routes.documents)}">Documents</a></li>
          </ul>
        </div>
        <div>
          <h2>Evidence</h2>
          <ul>
            <li><a href="${href("/method")}">How sources are classified</a></li>
            <li><a href="${href(routes.search)}">Search</a></li>
            <li><a href="https://github.com/JasdeepSidhu13/SikhHub">GitHub repository</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-inner fine">SikhHub is a static archive. Nothing here replaces the linked originals. Hosted on GitHub Pages.</div>
    </footer>
  `;
}

export function kindChip(kind: SourceKind): string {
  return `<span class="kind kind-${kind}">${esc(KIND_LABEL[kind])}</span>`;
}

export function sourceCard(source: Source): string {
  const brief = briefs[source.id];
  return `
    <a class="source-card" href="${href(routes.document(source.id))}">
      ${brief?.image ? `<img class="source-thumb" src="${esc(asset(brief.image))}" alt="" />` : ""}
      ${kindChip(source.kind)}
      <h4>${esc(source.title)}</h4>
      <p>${esc(source.note)}</p>
      <div class="meta">${esc(source.creator)}${source.year ? ` · ${esc(source.year)}` : ""}</div>
    </a>
  `;
}

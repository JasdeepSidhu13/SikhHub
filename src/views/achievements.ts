import { heroes, heroById, type Hero } from "../data/heroes";
import { esc } from "../lib/html";
import { asset, href, routes } from "../lib/paths";

function heroTile(hero: Hero): string {
  return `
    <a class="hero-tile" href="${href(routes.achievement(hero.id))}">
      <img src="${asset(hero.image)}" alt="${esc(hero.imageAlt)}" />
      <div class="hero-tile-copy">
        <span>${esc(hero.field)}</span>
        <strong>${esc(hero.name)}</strong>
        <em>${esc(hero.years)}</em>
      </div>
    </a>`;
}

export function achievementsSpotlight(): string {
  return `
    <section class="section" id="achievements">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">Sikh achievements</p>
            <h2>Ten who made the Panth visible</h2>
            <p>Empire, the battlefield, seva, letters, science, air, and the track. Open a name. The story is there.</p>
          </div>
          <a class="btn btn-navy" href="${href(routes.achievements)}">The spotlight</a>
        </div>
        <div class="hero-grid">
          ${heroes.map(heroTile).join("")}
        </div>
      </div>
    </section>`;
}

export function achievementsIndexView(): string {
  return `
    <div class="page-hero">
      <div class="wrap">
        <p class="kicker">Sikh achievements</p>
        <h1 class="page-title">Ten in the spotlight</h1>
        <p class="lede-page">Not a hall of fame. A short list of Sikhs — and of Punjab — whose lives are on the public record. Each name opens a story, a portrait, and a source.</p>
      </div>
    </div>
    <section class="section">
      <div class="wrap">
        <div class="hero-grid">
          ${heroes.map(heroTile).join("")}
        </div>
      </div>
    </section>`;
}

export function heroView(id: string): string | null {
  const hero = heroById[id];
  if (!hero) return null;
  const furtherExternal = hero.further.href.startsWith("http");
  const furtherHref = furtherExternal ? hero.further.href : href(hero.further.href);
  const furtherAttrs = furtherExternal ? ' rel="noopener noreferrer" target="_blank"' : "";
  return `
    <div class="page-hero">
      <div class="wrap">
        <p class="kicker"><a href="${href(routes.achievements)}">Sikh achievements</a> · ${esc(hero.field)}</p>
        <h1 class="page-title">${esc(hero.name)}</h1>
        ${hero.native ? `<p class="hero-native">${esc(hero.native)}</p>` : ""}
        <p class="lede-page">${esc(hero.kicker)} · ${esc(hero.years)}</p>
      </div>
    </div>
    <section class="section">
      <div class="wrap hero-profile">
        <figure class="hero-portrait">
          <img src="${asset(hero.image)}" alt="${esc(hero.imageAlt)}" />
          <figcaption>${esc(hero.imageCredit)}</figcaption>
        </figure>
        <article class="prose">
          <p class="lede-inline">${esc(hero.lede)}</p>
          ${hero.body.map((p) => `<p>${esc(p)}</p>`).join("")}
          ${
            hero.quote
              ? `<blockquote class="hero-story-quote">“${esc(hero.quote.text)}”<cite>${esc(hero.quote.cite)}</cite></blockquote>`
              : ""
          }
          <p>
            <a class="btn btn-navy${furtherExternal ? " ext" : ""}" href="${esc(furtherHref)}"${furtherAttrs}>${esc(hero.further.label)}</a>
            <a class="btn btn-ghost" href="${href(routes.achievements)}" style="color:var(--navy);border-color:var(--navy)">All ten</a>
          </p>
        </article>
      </div>
    </section>
    <section class="section section-cream">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">Also in the spotlight</p>
            <h2>The others</h2>
          </div>
        </div>
        <div class="hero-grid">
          ${heroes
            .filter((h) => h.id !== hero.id)
            .map(heroTile)
            .join("")}
        </div>
      </div>
    </section>`;
}

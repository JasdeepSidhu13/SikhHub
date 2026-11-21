import { featuredHeroes, heroFields, heroes, heroById, type Hero } from "../data/heroes";
import { COMMUNITY_FIELDS, communityFeats, type CommunityFeat } from "../data/community";
import { esc } from "../lib/html";
import { asset, href, routes } from "../lib/paths";

export function heroTile(hero: Hero): string {
  const img = hero.image
    ? `<img src="${asset(hero.image)}" alt="${esc(hero.imageAlt ?? "")}" />`
    : `<span class="hero-tile-mark" aria-hidden="true"></span>`;
  return `
    <a class="hero-tile${hero.image ? "" : " is-type"}" href="${href(routes.achievement(hero.id))}">
      ${img}
      <div class="hero-tile-copy">
        <span>${esc(hero.field)}</span>
        <strong>${esc(hero.name)}</strong>
        <em>${esc(hero.years)}</em>
      </div>
    </a>`;
}

function featCard(feat: CommunityFeat): string {
  const link = feat.further
    ? feat.further.href.startsWith("http")
      ? `<a class="ext" href="${esc(feat.further.href)}" rel="noopener noreferrer" target="_blank">${esc(feat.further.label)}</a>`
      : `<a href="${href(feat.further.href)}">${esc(feat.further.label)}</a>`
    : "";
  return `
    <article class="feat-card" id="${esc(feat.id)}">
      <p class="feat-meta">${esc(feat.field)} · ${esc(feat.year)}</p>
      <h3>${esc(feat.title)}</h3>
      <p>${esc(feat.lede)}</p>
      ${link ? `<p class="feat-more">${link}</p>` : ""}
    </article>`;
}

export function achievementsSpotlight(): string {
  return `
    <section class="section" id="achievements">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">Sikh achievements</p>
            <h2>Fifty lives, and the Panth in the world</h2>
            <p>A spotlight of ten, then the full fifty. Below them, forty facts of Sikhism as a public force — langar, a state, a script, a kitchen on the highway.</p>
          </div>
          <a class="btn btn-navy" href="${href(routes.achievements)}">Open the room</a>
        </div>
        <div class="hero-grid">
          ${featuredHeroes.map(heroTile).join("")}
        </div>
      </div>
    </section>`;
}

export function achievementsIndexView(heroField = "all", featField = "all"): string {
  const people = heroField === "all" ? heroes : heroes.filter((h) => h.field === heroField);
  const feats = featField === "all" ? communityFeats : communityFeats.filter((f) => f.field === featField);
  return `
    <div class="page-hero">
      <div class="wrap">
        <p class="kicker">Sikh achievements</p>
        <h1 class="page-title">The Panth, in the open</h1>
        <p class="lede-page">Fifty Sikhs whose lives are on the public record — empire, the battlefield, letters, science, rights, seva. And forty achievements of Sikhism as a community: a kitchen, a scripture, a state, a diaspora that would not cut its hair.</p>
        <p class="hero-actions" style="margin-top:1.2rem">
          <a class="btn btn-primary" href="#panth">The Panth in the world</a>
          <a class="btn btn-navy" href="#fifty">Fifty Sikhs</a>
        </p>
      </div>
    </div>
    <section class="section" id="panth">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">${communityFeats.length} on the record</p>
            <h2>What the Panth built</h2>
            <p>Not a person. A people. Langar, Gurmukhi, the Khalsa, a sovereign Punjab, the regiment, the corridor to Kartarpur, the kitchen on the Delhi border.</p>
          </div>
        </div>
        <div class="filters">
          <button type="button" data-feat-field="all" class="${featField === "all" ? "is-on" : ""}">All</button>
          ${COMMUNITY_FIELDS.map(
            (f) =>
              `<button type="button" data-feat-field="${esc(f)}" class="${featField === f ? "is-on" : ""}">${esc(f)}</button>`,
          ).join("")}
        </div>
        <div class="feat-grid">
          ${feats.map(featCard).join("")}
        </div>
      </div>
    </section>
    <section class="section section-cream" id="fifty">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">${heroes.length} lives</p>
            <h2>Fifty Sikhs</h2>
            <p>Each name opens a story. Portraits where the archive has one. The rest stand on the record of the work.</p>
          </div>
        </div>
        <div class="filters">
          <button type="button" data-hero-field="all" class="${heroField === "all" ? "is-on" : ""}">All</button>
          ${heroFields.map(
            (f) =>
              `<button type="button" data-hero-field="${esc(f)}" class="${heroField === f ? "is-on" : ""}">${esc(f)}</button>`,
          ).join("")}
        </div>
        <div class="hero-grid">
          ${people.map(heroTile).join("")}
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
  const related = heroes.filter((h) => h.id !== hero.id && h.field === hero.field).slice(0, 8);
  const more = related.length ? related : heroes.filter((h) => h.id !== hero.id && h.featured).slice(0, 8);
  return `
    <div class="page-hero">
      <div class="wrap">
        <p class="kicker"><a href="${href(routes.achievements)}#fifty">Sikh achievements</a> · ${esc(hero.field)}</p>
        <h1 class="page-title">${esc(hero.name)}</h1>
        ${hero.native ? `<p class="hero-native">${esc(hero.native)}</p>` : ""}
        <p class="lede-page">${esc(hero.kicker)} · ${esc(hero.years)}</p>
      </div>
    </div>
    <section class="section">
      <div class="wrap hero-profile">
        ${
          hero.image
            ? `<figure class="hero-portrait">
          <img src="${asset(hero.image)}" alt="${esc(hero.imageAlt ?? "")}" />
          <figcaption>${esc(hero.imageCredit ?? "")}</figcaption>
        </figure>`
            : `<div class="hero-portrait is-type" aria-hidden="true"><span class="hero-tile-mark"></span></div>`
        }
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
            <a class="btn btn-ghost" href="${href(routes.achievements)}#fifty" style="color:var(--navy);border-color:var(--navy)">All fifty</a>
          </p>
        </article>
      </div>
    </section>
    <section class="section section-cream">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">${esc(hero.field)}</p>
            <h2>Alongside</h2>
          </div>
        </div>
        <div class="hero-grid">
          ${more.map(heroTile).join("")}
        </div>
      </div>
    </section>`;
}

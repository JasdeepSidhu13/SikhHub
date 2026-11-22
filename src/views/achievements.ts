import { featuredHeroes, heroFields, heroes, heroById, type Hero } from "../data/heroes";
import { COMMUNITY_FIELDS, communityFeats, communityById, type CommunityFeat } from "../data/community";
import { featArticles } from "../data/feat-articles";
import { articleHtml, esc } from "../lib/html";
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
  return `
    <a class="cover-card feat-cover" id="${esc(feat.id)}" href="${href(routes.feat(feat.id))}">
      <img src="${asset(feat.image)}" alt="${esc(feat.imageAlt)}" />
      <div class="cover-card-copy">
        <p class="feat-meta">${esc(feat.field)} · ${esc(feat.year)}</p>
        <h3>${esc(feat.title)}</h3>
        <p>${esc(feat.lede)}</p>
        <p class="read-on">Read the article</p>
      </div>
    </a>`;
}

export function achievementsSpotlight(): string {
  return `
    <section class="section" id="achievements">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">Lives</p>
            <h2>Fifty names. Fifty works.</h2>
            <p>A spotlight of ten, then the full fifty. Below them, fifty public works of the Panth — langar, a state, a script, a kitchen on the highway. Each opens an article.</p>
          </div>
          <a class="btn btn-navy" href="${href(routes.achievements)}">Open Lives</a>
        </div>
        <div class="hero-grid hero-grid-spot">
          ${featuredHeroes.map(heroTile).join("")}
        </div>
      </div>
    </section>`;
}

export function achievementsIndexView(heroField = "all", featField = "all"): string {
  const people = heroField === "all" ? heroes : heroes.filter((h) => h.field === heroField);
  const feats = featField === "all" ? communityFeats : communityFeats.filter((f) => f.field === featField);
  return `
    <div class="cinema">
      <img class="cinema-bg" src="${asset("/media/harmandir-aerial.jpg")}" alt="" />
      <div class="cinema-shade"></div>
      <div class="wrap cinema-copy">
        <p class="kicker">Lives</p>
        <h1 class="page-title">Fifty names. Fifty works.</h1>
        <p class="lede-page">Fifty Sikhs on the public record — empire, the field, letters, science, rights, seva. And fifty works of the Panth as a people: a kitchen, a scripture, a state, a diaspora that would not cut its hair. Every card opens an article.</p>
        <p class="hero-actions" style="margin-top:1.2rem">
          <a class="btn btn-primary" href="#panth">Fifty works</a>
          <a class="btn btn-ghost" href="#fifty">Fifty lives</a>
        </p>
      </div>
    </div>
    <section class="section" id="panth">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">${communityFeats.length} works</p>
            <h2>The work, not the portrait</h2>
            <p>Not a person. A people. Langar, Gurmukhi, the Khalsa, a sovereign Punjab, the regiment, the corridor to Kartarpur, the kitchen on the Delhi border. Open any card.</p>
          </div>
        </div>
        <div class="filters">
          <button type="button" data-feat-field="all" class="${featField === "all" ? "is-on" : ""}">All</button>
          ${COMMUNITY_FIELDS.map(
            (f) =>
              `<button type="button" data-feat-field="${esc(f)}" class="${featField === f ? "is-on" : ""}">${esc(f)}</button>`,
          ).join("")}
        </div>
        <div class="cover-grid cover-grid-feats">
          ${feats.map(featCard).join("")}
        </div>
      </div>
    </section>
    <section class="section section-cream" id="fifty">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">${heroes.length} lives</p>
            <h2>The names</h2>
            <p>Each portrait opens a life. The rest stand on the record of the work.</p>
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
        <p class="kicker"><a href="${href(routes.achievements)}#fifty">Lives</a> · ${esc(hero.field)}</p>
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
            <a class="btn btn-ghost" href="${href(routes.achievements)}#fifty" style="color:var(--navy);border-color:var(--navy)">The names</a>
          </p>
        </article>
      </div>
    </section>
    <section class="section section-cream">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">${esc(hero.field)}</p>
            <h2>Same field</h2>
          </div>
        </div>
        <div class="hero-grid">
          ${more.map(heroTile).join("")}
        </div>
      </div>
    </section>`;
}

export function featView(id: string): string | null {
  const feat = communityById[id];
  if (!feat) return null;
  const article = featArticles[feat.id];
  const related = communityFeats.filter((f) => f.id !== feat.id && f.field === feat.field).slice(0, 6);
  const further = feat.further;
  const furtherExternal = further ? further.href.startsWith("http") : false;
  const furtherHref = further ? (furtherExternal ? further.href : href(further.href)) : "";
  const furtherAttrs = furtherExternal ? ' rel="noopener noreferrer" target="_blank"' : "";
  return `
    <div class="cinema cinema-profile">
      <img class="cinema-bg" src="${asset(feat.image)}" alt="" />
      <div class="cinema-shade"></div>
      <div class="wrap cinema-copy">
        <p class="kicker"><a href="${href(routes.achievements)}#panth">Works</a> · ${esc(feat.field)}</p>
        <h1 class="page-title">${esc(feat.title)}</h1>
        <p class="lede-page">${esc(feat.kicker)} · ${esc(feat.year)}</p>
      </div>
    </div>
    <section class="section">
      <div class="wrap guru-profile">
        <figure class="guru-shot feat-shot">
          <img src="${asset(feat.image)}" alt="${esc(feat.imageAlt)}" />
          <figcaption>${esc(feat.imageCredit)}</figcaption>
        </figure>
        <article class="prose article-prose">
          <p class="lede-inline">${esc(feat.lede)}</p>
          ${articleHtml(article)}
          <p>
            ${
              further
                ? `<a class="btn btn-navy${furtherExternal ? " ext" : ""}" href="${esc(furtherHref)}"${furtherAttrs}>${esc(further.label)}</a>`
                : ""
            }
            <a class="btn btn-ghost" href="${href(routes.achievements)}#panth" style="color:var(--navy);border-color:var(--navy)">All fifty works</a>
          </p>
        </article>
      </div>
    </section>
    ${
      related.length
        ? `<section class="section section-cream">
      <div class="wrap">
        <div class="section-head"><div><p class="kicker">${esc(feat.field)}</p><h2>Same field</h2></div></div>
        <div class="cover-grid cover-grid-feats">${related.map(featCard).join("")}</div>
      </div>
    </section>`
        : ""
    }`;
}

import { GURDWARA_REGIONS, featuredGurdwaras, gurdwaraById, gurdwaras, type Gurdwara } from "../data/gurdwaras";
import { esc } from "../lib/html";
import { asset, href, routes } from "../lib/paths";

function cover(g: Gurdwara, className = "cover-card"): string {
  const src = g.images[0];
  return `
    <a class="${className}" href="${href(routes.gurdwara(g.id))}">
      <img src="${asset(src)}" alt="${esc(g.imageAlt)}" />
      <div class="cover-card-copy">
        <p class="feat-meta">${esc(g.region)} · ${esc(g.founded)}</p>
        <h3>${esc(g.name)}</h3>
        <p>${esc(g.place)}</p>
      </div>
    </a>`;
}

export function gurdwarasSpotlight(): string {
  return `
    <section class="section" id="gurdwaras">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">Historic gurdwaras</p>
            <h2>One hundred houses of the Guru</h2>
            <p>Takhts, janam asthans, shaheedi asthans, and the first halls of the diaspora — with the story, the place, and the photograph the archive could keep.</p>
          </div>
          <a class="btn btn-navy" href="${href(routes.gurdwaras)}">Open the map</a>
        </div>
        <div class="mosaic">
          ${featuredGurdwaras.map((g, i) => cover(g, i === 0 ? "cover-card is-lead" : "cover-card")).join("")}
        </div>
      </div>
    </section>`;
}

export function gurdwarasIndexView(region = "all"): string {
  const list = region === "all" ? gurdwaras : gurdwaras.filter((g) => g.region === region);
  return `
    <div class="cinema">
      <img class="cinema-bg" src="${asset("/media/harmandir-aerial.jpg")}" alt="" />
      <div class="cinema-shade"></div>
      <div class="wrap cinema-copy">
        <p class="kicker">Historic gurdwaras</p>
        <h1 class="page-title">A hundred Nishan Sahibs</h1>
        <p class="lede-page">From Harmandir Sahib to Nankana, Kartarpur, the five Takhts, Delhi’s shaheedi asthans, Hemkund, Bidar, Stockton, Abbotsford, and Gravesend. Each house has a place, a date, a story, and a photograph.</p>
        <p class="hero-actions" style="margin-top:1.2rem">
          <a class="btn btn-primary" href="#map">The hundred</a>
          <a class="btn btn-ghost" href="${href(routes.listen)}">Kirtan</a>
        </p>
      </div>
    </div>
    <section class="section" id="featured-gurdwaras">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">Eight to begin</p>
            <h2>The houses the world already knows — and should know properly</h2>
          </div>
        </div>
        <div class="mosaic">
          ${featuredGurdwaras.map((g, i) => cover(g, i === 0 ? "cover-card is-lead" : "cover-card")).join("")}
        </div>
      </div>
    </section>
    <section class="section section-cream" id="map">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">${gurdwaras.length} on the record</p>
            <h2>By region</h2>
            <p>Punjab and the Pakistan janam asthans, Delhi, the Himalaya, the Deccan, and the first diaspora halls.</p>
          </div>
        </div>
        <div class="filters">
          <button type="button" data-gurdwara-region="all" class="${region === "all" ? "is-on" : ""}">All</button>
          ${GURDWARA_REGIONS.map(
            (r) =>
              `<button type="button" data-gurdwara-region="${esc(r)}" class="${region === r ? "is-on" : ""}">${esc(r)}</button>`,
          ).join("")}
        </div>
        <div class="cover-grid">
          ${list.map((g) => cover(g)).join("")}
        </div>
      </div>
    </section>`;
}

export function gurdwaraView(id: string): string | null {
  const g = gurdwaraById[id];
  if (!g) return null;
  const related = gurdwaras.filter((x) => x.id !== g.id && x.region === g.region).slice(0, 6);
  const gallery = g.images
    .map(
      (src, i) => `
        <figure class="guru-shot">
          <img src="${asset(src)}" alt="${esc(i === 0 ? g.imageAlt : g.name)}" />
        </figure>`,
    )
    .join("");
  return `
    <div class="cinema cinema-profile">
      <img class="cinema-bg" src="${asset(g.images[0])}" alt="" />
      <div class="cinema-shade"></div>
      <div class="wrap cinema-copy">
        <p class="kicker"><a href="${href(routes.gurdwaras)}">Historic gurdwaras</a> · ${esc(g.region)}</p>
        <h1 class="page-title">${esc(g.name)}</h1>
        ${g.native ? `<p class="hero-native" style="color:var(--gold-soft)">${esc(g.native)}</p>` : ""}
        <p class="lede-page">${esc(g.kicker)} · ${esc(g.place)} · ${esc(g.founded)}</p>
      </div>
    </div>
    <section class="section">
      <div class="wrap guru-profile">
        <div class="guru-gallery">${gallery}</div>
        <article class="prose">
          <p class="lede-inline">${esc(g.story)}</p>
          <p class="feat-meta" style="margin-top:1.2rem">${esc(g.imageCredit)}</p>
          <p>
            <a class="btn btn-navy" href="${href(routes.gurdwaras)}#map">All hundred</a>
            <a class="btn btn-ghost" href="${href(routes.listen)}" style="color:var(--navy);border-color:var(--navy)">Kirtan</a>
          </p>
        </article>
      </div>
    </section>
    ${
      related.length
        ? `<section class="section section-cream">
      <div class="wrap">
        <div class="section-head"><div><p class="kicker">${esc(g.region)}</p><h2>Alongside</h2></div></div>
        <div class="cover-grid">${related.map((x) => cover(x)).join("")}</div>
      </div>
    </section>`
        : ""
    }`;
}

import { NEWS_KIND_LABEL, currentNewsWeek, newsWeeks, type NewsItem, type NewsWeek } from "../data/news";
import { themeById } from "../data/themes";
import { esc } from "../lib/html";
import { asset, href, routes } from "../lib/paths";

export function gurpurabCover(): string {
  return `
    <section class="parkash-cover" id="gurpurab">
      <img class="parkash-bg" src="${asset("/media/gurdwaras/nankana.jpg")}" alt="Gurdwara Janam Asthan, Nankana Sahib, the birthplace of Guru Nanak" />
      <div class="parkash-shade"></div>
      <div class="wrap parkash-copy">
        <p class="parkash-kicker">557th Parkash Purab · 24 November 2026</p>
        <p class="parkash-eyebrow">Guru Nanak</p>
        <h1>The world recites him. It has not sat with him.</h1>
        <p class="parkash-lede">He was born at Talwandi in 1469, into a Punjab of caste, of priests, of two religions that held the Infinite as property. He answered with Ik Onkar — one God, no broker — walked out of the Bein at Sultanpur Lodhi as neither Hindu nor Musalman, and at Kartarpur he made langar the public law: sangat and pangat on one floor, kirat as worship, a woman not inferior, no second plate for a throne. That is not a festival thought. It is a constitution. Five hundred and fifty-seven years later the lamps are lit from Nankana Sahib to every Nishan that still stands. The row is still the test. Most of the world still fails it.</p>
        <blockquote class="parkash-strike">Langar was not his charity. It was his proof.</blockquote>
        <div class="parkash-charges">
          <article>
            <p class="kicker">01 · The Name</p>
            <h2>Ik Onkar</h2>
            <p>Priests had God in inventory. Nanak had one, without a middleman, and then he went to work. The Mul Mantar is not a hymn for a festival. It is a demolition of every franchise on the Infinite.</p>
          </article>
          <article>
            <p class="kicker">02 · The row</p>
            <h2>Langar is the law</h2>
            <p>Kartarpur put sangat and pangat on one plane. Labour was holy. The idle rosary was a joke. Rank may exist on the road. It ends in the row. That is not a metaphor. It is still the maryada of every gurdwara.</p>
          </article>
          <article>
            <p class="kicker">03 · The human being</p>
            <h2>He walked out of the Bein</h2>
            <p>At Sultanpur Lodhi he refused both state religions as sufficient. Not Hindu, not Musalman — a third path. He asked why a woman should be called inferior when every king entered the world through her. Ahead of his time is too small. He is still ahead of ours.</p>
          </article>
        </div>
        <p class="parkash-close">Tonight Harmandir Sahib is lit. Nankana Sahib is full. Kartarpur is a courtyard with a locked corridor. Light the lamps. Then take your place in the row. That was the proof. It still is.</p>
        <div class="hero-actions parkash-actions">
          <a class="btn btn-primary" href="${href(routes.gurdwara("nankana-janam"))}">Nankana Sahib</a>
          <a class="btn btn-ghost" href="${href(routes.gurdwara("kartarpur"))}">Kartarpur</a>
          <a class="btn btn-ghost" href="${href(routes.feat("sangat-pangat"))}">The floor is the test</a>
        </div>
      </div>
    </section>`;
}

function kindChip(kind: NewsItem["kind"]): string {
  return `<span class="kind kind-news-${kind}">${esc(NEWS_KIND_LABEL[kind])}</span>`;
}

export function newsCard(item: NewsItem, featured = false): string {
  const related = (item.themeIds ?? [])
    .map((id) => themeById[id])
    .filter(Boolean)
    .slice(0, 1);
  return `
    <article class="news-card${featured ? " is-lead" : ""}">
      <div class="news-cover">
        <img src="${asset(item.image)}" alt="${esc(item.imageAlt)}" />
        ${kindChip(item.kind)}
      </div>
      <div class="news-copy">
        <p class="news-meta"><time>${esc(item.date)}</time></p>
        <h3>${esc(item.headline)}</h3>
        <p>${esc(item.dek)}</p>
        <p class="news-foot">
          <a class="ext" href="${esc(item.url)}" rel="noopener noreferrer" target="_blank">${esc(item.source)} — open the original</a>
          ${related
            .map((theme) => `<a href="${href(routes.issue(theme.id))}">In this archive: ${esc(theme.title)}</a>`)
            .join("")}
        </p>
      </div>
    </article>`;
}

export function newsWeekBlock(week: NewsWeek, compact = false): string {
  const [lead, ...rest] = week.items;
  if (!lead) return "";
  if (compact) {
    return `
      <div class="news-grid">
        ${week.items.map((item) => newsCard(item)).join("")}
      </div>`;
  }
  return `
    <div class="news-spread">
      ${newsCard(lead, true)}
      <div class="news-stack">
        ${rest.map((item) => newsCard(item)).join("")}
      </div>
    </div>`;
}

export function newsDeskPreview(): string {
  const week = currentNewsWeek;
  return `
    <section class="section section-cream" id="news">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">${esc(week.label)}</p>
            <h2>News</h2>
            <p>${esc(week.summary)}</p>
          </div>
          <a class="btn btn-navy" href="${href(routes.news)}">All news</a>
        </div>
        ${newsWeekBlock(week)}
        <p class="news-note">Extracted every Monday from the papers, then edited from a Sikh standpoint. Each item opens the original. Sikh issues, below, is the same fight — dated.</p>
      </div>
    </section>`;
}

export function newsIndexView(): string {
  return `
    ${gurpurabCover()}
    ${newsWeeks
      .map(
        (week, index) => `
    <section class="section${index % 2 ? " section-cream" : ""}" id="${esc(week.id)}">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">${esc(week.kicker)}</p>
            <h2>${esc(week.label)}</h2>
            <p>${esc(week.summary)}</p>
          </div>
        </div>
        ${newsWeekBlock(week, index > 0)}
      </div>
    </section>`,
      )
      .join("")}
    <section class="section">
      <div class="wrap">
        <p class="news-note">SikhHub is a non-profit archive. The desk extracts every Monday from published originals, then edits from a Sikh standpoint. It does not replace the papers. It sits beside them.</p>
        <p><a class="btn btn-navy" href="${href(routes.issues)}">Open Sikh issues</a> <a class="btn btn-ghost" href="${href(routes.about)}#contact" style="color:var(--navy);border-color:var(--navy)">Send a story</a></p>
      </div>
    </section>`;
}

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
        <p class="parkash-eyebrow">Sri Guru Nanak Dev Ji</p>
        <h1>Guru Nanak’s Parkash still lights the world.</h1>
        <p class="parkash-lede">Sri Guru Nanak Dev Ji was born in 1469 at Rai Bhoi di Talwandi — Nankana Sahib — to Mehta Kalu and Mata Tripta. The Panth keeps that Parkash as a living light, not a birthday. Guru Nanak gave Sikhi its first word, Ik Onkar; composed Japji Sahib, with which Guru Granth Sahib still opens; walked the udasis with Bhai Mardana’s rabab; and at Kartarpur founded a town where sangat, kirat, and langar sat on one floor. His bani remains the first voice of the Granth. His life remains the first map. Five hundred and fifty-seven years later the lamps are lit. The work is to sit as Guru Nanak sat.</p>
        <blockquote class="parkash-strike">Japji Sahib is how Guru Nanak taught the world to begin.</blockquote>
        <div class="parkash-bani">
          <article>
            <p class="kicker">Bani</p>
            <h2>Japji Sahib</h2>
            <p>The opening of Guru Granth Sahib. The Mul Mantar — Ik Onkar, Satnam — then the stanzas by which a Sikh still learns how to stand before the One, without a priest holding the door.</p>
          </article>
          <article>
            <p class="kicker">Bani</p>
            <h2>Asa di Var</h2>
            <p>Guru Nanak asked why a woman should be called inferior, when every king, every saint, every body entered the world through her. The shabad is not a later reform. It is in the Granth.</p>
          </article>
          <article>
            <p class="kicker">Bani</p>
            <h2>Sidh Gosht</h2>
            <p>At Achal, Guru Nanak answered the yogis who had left the household. The Name was not a cave. Kirat and the sangat were the path. The Granth keeps that dialogue.</p>
          </article>
          <article>
            <p class="kicker">Bani</p>
            <h2>Babarvani</h2>
            <p>When Babur’s army sacked Saidpur, Guru Nanak did not write a court hymn. He named the wound: the women dragged away, the Punjab broken. The verses are witness, not ornament.</p>
          </article>
        </div>
        <div class="parkash-charges">
          <article>
            <p class="kicker">Sakhi · Sacha Sauda</p>
            <h2>The true bargain</h2>
            <p>Mehta Kalu sent Guru Nanak, still a youth, to trade with a sum of money. On the road Guru Nanak met hungry sadhus, spent the capital on food, and called the outlay sacha sauda — the true bargain. Gurdwara Sacha Sauda at Farooqabad still stands on that account. Dasvandh and langar both begin in this arithmetic: feeding people is the only trade that balances.</p>
            <p>The father’s ledger wanted profit. Guru Nanak kept the other books. A child who treated the hungry as the correct purchase is why the Panth still tells this sakhi to children. Langar is not European charity. It is a correct trade, named before any takht existed.</p>
          </article>
          <article>
            <p class="kicker">Sakhi · Sultanpur Lodhi</p>
            <h2>Three days in the Bein</h2>
            <p>Guru Nanak kept the Modikhana at Sultanpur Lodhi, accounts for Daulat Khan’s stores, in a working market town. Then he entered the Bein and was gone three days. He came out with the sentence that still organises Sikh life: not Hindu, not Musalman — a third path. Tradition holds that Guru Nanak sat after that under the ber tree. Gurdwara Ber Sahib marks the bank. The udasis started from here.</p>
            <p>Japji Sahib is the fruit of that crossing. Guru Nanak did not return to the Modikhana as anyone’s sectarian. He named a path that would need its own book, its own langar, and its own flag. Kartarpur would be the last courtyard. Sultanpur is the first departure.</p>
          </article>
          <article>
            <p class="kicker">Sakhi · Eminabad</p>
            <h2>Bhai Lalo’s house</h2>
            <p>At Saidpur, the town now called Eminabad, the janamsakhis place Guru Nanak in the house of Bhai Lalo, a carpenter, rather than at the feast of Malik Bhago. Guru Nanak ate the coarse bread of honest labour. The rich man’s plate, the sakhi says, ran with blood. Then Babur’s army sacked the town. Guru Nanak was taken with the captives, and sat on a bed of rori — pebbles. Gurdwara Rori Sahib marks that sitting.</p>
            <p>Babarvani in Guru Granth Sahib is the documentary core of that week: invasion named in shabad, not in a fresco. A state that prefers Guru Nanak as a harmless mystic has to walk past this courtyard. The pebbles are not gentle. The carpenter’s house is the theology.</p>
          </article>
          <article>
            <p class="kicker">Sakhi · Kartarpur</p>
            <h2>The last courtyard</h2>
            <p>Guru Nanak founded Kartarpur on the Ravi and spent his last years in the fields. Sangat and pangat on one plane. Kirat as worship. Langar as the public law. His Jyoti Jot was in 1539. The Darbar Sahib that stands at Kartarpur is that courtyard raised in marble and a Nishan Sahib. On udasi, Sikh memory also holds the halt at Hasan Abdal, where Guru Nanak stopped a stone with his hand and a spring rose — Panja Sahib, still on the Grand Trunk Road.</p>
            <p>Guru Nanak did not end as a wandering guest. He sat. He made a town. He left a Granth that begins in his voice, and a floor that still admits no second plate for a throne. The corridor to that courtyard is a file. The sitting is not.</p>
          </article>
        </div>
        <p class="parkash-close">Tonight Harmandir Sahib is lit. Nankana Sahib is full. Kartarpur waits across a locked corridor. Recite Japji Sahib. Then take your place in the row. That is how the Panth keeps Guru Nanak’s Parkash — not as a greeting, as a life.</p>
        <div class="hero-actions parkash-actions">
          <a class="btn btn-primary" href="${href(routes.gurdwara("nankana-janam"))}">Nankana Sahib</a>
          <a class="btn btn-ghost" href="${href(routes.gurdwara("ber-sahib"))}">Ber Sahib</a>
          <a class="btn btn-ghost" href="${href(routes.gurdwara("kartarpur"))}">Kartarpur</a>
          <a class="btn btn-ghost" href="${href(routes.feat("sangat-pangat"))}">Sangat and pangat</a>
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

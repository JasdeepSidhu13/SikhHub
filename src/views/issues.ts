import { themeById, themes } from "../data/themes";
import { keyIssues, stories } from "../data/stories";
import { media } from "../data/media";
import { esc } from "../lib/html";
import { asset, href, routes } from "../lib/paths";
import { chaptersFor, eventsFor, sourcesFor } from "../lib/lookup";
import { sourceCard } from "./layout";
import {
  disappearancesGallery,
  disappearancesInfographic,
  genocideGallery,
  genocideInfographic,
  pherumanInfographic,
  raid1955Gallery,
  raid1955Infographic,
  reorgInfographic,
  figure,
} from "./infographics";
import { clipping, furtherLinks, letter, storyFeature } from "./exhibits";

const featuredIds = new Set<string>(keyIssues.map((k) => k.id));

function extras(id: string): string {
  const here = `/issues/${id}`;
  if (id === "november-1984") {
    return `${genocideInfographic()}${genocideGallery()}`;
  }
  if (id === "bluestar-1984") {
    return `${figure(media.granth, "A handwritten Guru Granth Sahib manuscript hit by a bullet during Operation Blue Star.")}${figure(media.akal, "The Akal Takht, seat of Sikh temporal authority, in the Harmandir Sahib complex.")}`;
  }
  if (id === "punjabi-suba") {
    const raid1955 = stories.find((s) => s.id === "golden-temple-1955")!;
    const kaka = stories.find((s) => s.id === "kaka-inderjit")!;
    return `${figure(media.tara, "Master Tara Singh, Tarn Taran, March 1956 — the political face of Punjabi Suba.")}${storyFeature(raid1955, false, here)}${raid1955Infographic()}${storyFeature(kaka, false, here)}${reorgInfographic()}`;
  }
  if (id === "chandigarh") {
    const pheruman = stories.find((s) => s.id === "pheruman")!;
    return `${figure(media.chandigarh, "Palace of Assembly, Chandigarh — the capital he died for, still a Union Territory.")}${pherumanInfographic()}${storyFeature(pheruman, false, here)}${clipping({
      masthead: "The Hindu",
      date: "29 October 1969",
      headline: "Hartal to mourn Pheruman",
      body: "Hartal was observed throughout Punjab in memory of Mr. Darshan Singh Pheruman, who died in Amritsar on the 74th day of his fast for the inclusion of Chandigarh in Punjab.",
      cite: "The Hindu, 29 October 1969.",
    })}`;
  }
  if (id === "assurances") {
    return `${letter({
      from: "Sardar Hukam Singh",
      date: "Constituent Assembly · 21 November 1949",
      body: "My community cannot subscribe its assent to this historic document.",
      cite: "Official debates. Hukam Singh and Bhupinder Singh Mann later refused to sign.",
    })}${figure(media.tara, "Master Tara Singh, 1956. In 1953 he had already named the settlement a change of masters.")}`;
  }
  if (id === "shrine-control") {
    const nankana = stories.find((s) => s.id === "nankana")!;
    const raid1955 = stories.find((s) => s.id === "golden-temple-1955")!;
    return `${figure(media.harmandir, "Sri Harmandir Sahib — the house whose management the Panth took from mahants.")}${storyFeature(nankana, false, here)}${storyFeature(raid1955, false, here)}${raid1955Gallery()}`;
  }
  if (id === "state-violence") {
    const raid1955 = stories.find((s) => s.id === "golden-temple-1955")!;
    return `${raid1955Infographic()}${raid1955Gallery()}${storyFeature(raid1955, false, here)}${clipping({
      masthead: "The Indian Express",
      date: "4 July 2021",
      headline: "Police entered Darbar Sahib in shoes",
      deck: "4 a.m., 4 July 1955. DIG Ashwani Kumar led the raid. Langar stopped. Tear gas in the parikrama.",
      body: "It was at 4 am on July 4, 1955 that Deputy Inspector General of Police Ashwani Kumar led the police with shoes on inside the Golden Temple premises. The community kitchen was captured and langar was stopped. Police also took away utensils. Guru Ramdas inn was also raided and head priests of Golden Temple were arrested. Police used teargas shells in parikarma of Golden Temple.",
      cite: "Kamaldeep Singh Brar, The Indian Express, reconstructing the 4 July 1955 police action.",
    })}`;
  }
  if (id === "disappearances") {
    const khalra = stories.find((s) => s.id === "khalra")!;
    const gurmeet = stories.find((s) => s.id === "gurmeet-kaur")!;
    const nirmal = stories.find((s) => s.id === "nirmal-singh")!;
    return `${disappearancesInfographic()}${figure(media.ensaafMother, "A survivor holds the portrait of a relative Punjab Police took. The question is still alive or dead.")}${storyFeature(khalra, false, here)}${storyFeature(gurmeet, false, here)}${storyFeature(nirmal, true, here)}${disappearancesGallery()}${furtherLinks([
      {
        href: "https://www.ensaaf.org/stories",
        title: "Ensaaf stories",
        note: "Documentaries and interviews: Khalra’s last speech, Kulwant Singh, Charanjit Kaur, Paramjit Kaur Khalra, and the families who remain.",
      },
      {
        href: "https://www.ensaaf.org/article/our-voices-matter",
        title: "Our Voices Matter",
        note: "Photographs survivors shared with Ensaaf: Gurmeet Kaur, Nirmal Singh, Jagir Kaur, and others the police listed as encounters.",
      },
      {
        href: "https://interviews.ensaaf.org/",
        title: "Video testimonies",
        note: "Oral-history interviews filmed in Punjab with families of the unlawfully killed and the disappeared.",
      },
      {
        href: "/documents/hrw-killers",
        title: "Protecting the Killers",
        note: "Human Rights Watch and Ensaaf, 2007: the method of the cremation registers, Khalra’s murder, and the sealed CBI list of 2,097.",
      },
    ])}`;
  }
  if (id === "identity-hinduism" || id === "gurmukhi") {
    return letter({
      from: "M. K. Gandhi to Jawaharlal Nehru",
      date: "3 August 1937",
      body: "The Sikhs will die for Punjabi written in Gurmukhi. There is no elegance about that script.",
      cite: "Collected Works of Mahatma Gandhi, volume 66.",
    });
  }
  if (id === "article-25") {
    return letter({
      from: "Constitution of India, Article 25",
      date: "26 January 1950",
      body: "Explanation I recognises the kirpan as part of professing the Sikh religion. Explanation II, in the next breath, groups Sikhs with Hindus for one reform clause.",
      cite: "Two sentences. They do not cancel each other.",
    });
  }
  return "";
}

export function issuesIndexView(): string {
  const rest = themes.filter((t) => !featuredIds.has(t.id));
  return `
    <div class="page-hero">
      <div class="wrap">
        <h1 class="page-title">The record</h1>
        <p class="lede-page">The 1984 Sikh genocide. Blue Star. A state without its capital. A constitution two Sikhs would not sign. The Guru’s house. The cremation registers. Start with the issue. The papers follow.</p>
      </div>
    </div>
    <section class="section">
      <div class="wrap">
        <div class="poster-grid">
          ${keyIssues
            .map((item) => {
              const theme = themeById[item.id];
              if (!theme) return "";
              return `
                <a class="poster" href="${href(routes.issue(item.id))}">
                  <img src="${asset(item.image)}" alt="" />
                  <div class="poster-copy">
                    <span>${esc(item.overlay)}</span>
                    <h3>${esc(theme.title)}</h3>
                    <p>${esc(theme.summary)}</p>
                  </div>
                </a>`;
            })
            .join("")}
        </div>
        <h2 class="rest-head">Also in this archive</h2>
        <div class="issue-grid compact">
          ${rest
            .map(
              (t) => `
            <a class="card" href="${href(routes.issue(t.id))}">
              <div class="num">${esc(t.kicker)}</div>
              <h3>${esc(t.title)}</h3>
              <p>${esc(t.summary)}</p>
            </a>`,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function issueView(id: string): string | null {
  const theme = themeById[id];
  if (!theme) return null;
  const srcs = sourcesFor(theme.sourceIds);
  const evs = eventsFor(theme.eventIds);
  const chs = chaptersFor(theme.chapterIds);
  const poster = keyIssues.find((k) => k.id === id);
  const extra = extras(id);
  return `
    <div class="page-hero ${poster ? "page-hero-photo" : ""}">
      ${poster ? `<img class="page-hero-bg" src="${asset(poster.image)}" alt="" />` : ""}
      <div class="wrap">
        <p class="kicker">${esc(theme.kicker)}</p>
        <h1 class="page-title">${esc(theme.title)}</h1>
        <p class="lede-page">${esc(theme.summary)}</p>
      </div>
    </div>
    <section class="section">
      ${extra ? `<div class="wrap exhibit-band">${extra}</div>` : ""}
      <div class="wrap split">
        <article class="prose">
          <h2>The case</h2>
          <p>${esc(theme.sikhReading)}</p>
          <aside class="callout"><strong>The evidence</strong><p>${esc(theme.evidence)}</p></aside>
          <h2>Dated events</h2>
          <div class="event-mini">
            ${evs
              .map(
                (e) =>
                  `<a href="${href(routes.chronology)}#${esc(e.id)}"><h4>${esc(e.date)}</h4><p>${esc(e.title)}</p></a>`,
              )
              .join("")}
          </div>
          <h2>History chapters</h2>
          <div class="event-mini">
            ${chs
              .map(
                (c) =>
                  `<a href="${href(routes.chapter(c.id))}"><h4>${esc(c.years)}</h4><p>${esc(c.title)}</p></a>`,
              )
              .join("")}
          </div>
        </article>
        <aside class="side">
          <h3>Documents</h3>
          <div class="source-list">${srcs.map(sourceCard).join("")}</div>
        </aside>
      </div>
    </section>
  `;
}

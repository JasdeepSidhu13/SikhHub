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
    return `${genocideInfographic()}${clipping({
      masthead: "1984 Sikh Archive",
      date: "13 November 2026 · Nand Nagri affidavits, 1985",
      headline: "They roasted Sikhs alive in ovens and tandoors",
      deck: "Three affidavits to the Misra Commission. 119 Sikhs killed in Nand Nagri. Congress workers named.",
      body: "Many were put in the unheated Tandoors with their heads down and then – they were burnt after sprinkling kerosene on them. The dear one’s were cut into pieces in front of the womenfolk, who were raped so that they should realise the consequences of their beings and called a Sikh.",
      cite: "Affidavit of Gurdayal Singh, Nand Nagri. Pav Singh / 1984 Sikh Archive, 13 November 2026.",
    })}${clipping({
      masthead: "Affidavit of Raghubir Kaur",
      date: "Nand Nagri · Block A · 1 November 1984",
      headline: "A big oven",
      body: "Established a big oven in which bodies of the slain Sikhs were half-roasted and then thrown out.",
      cite: "Affidavit of Raghubir Kaur, wife of Jaswant Singh, Nand Nagri. Her son Jaspal Singh was also killed. The police recorded nothing.",
    })}${genocideGallery()}${furtherLinks([
      {
        href: "https://1984sikh-archive.org/2026/11/13/new-study-reveals-victims-of-november-1984-sikh-genocide-were-roasted-alive-in-large-ovens-and-tandoors/",
        title: "The Nand Nagri affidavits",
        note: "Pav Singh’s 2026 study: ovens, tandoors, named Congress workers, 119 dead. Open the original.",
      },
      {
        href: "https://1984sikh-archive.org/",
        title: "1984 Sikh Archive",
        note: "Day-by-day photographs, affidavits, and the record the official word “riot” still tries to close.",
      },
      {
        href: "/documents/delhi-hc-2018",
        title: "Delhi High Court, 17 December 2018",
        note: "The judgment that named the killings crimes against humanity, engineered with police assistance.",
      },
      {
        href: "/documents/archive-1984-tandoors",
        title: "Ovens and tandoors",
        note: "The three Nand Nagri affidavits, in this archive: Raghubir Kaur, Surjit Kaur, Gurdayal Singh.",
      },
      {
        href: "/documents/archive-1984",
        title: "The archive brief",
        note: "How this site reads the 1984 Sikh Archive, and why the word is genocide.",
      },
      {
        href: "/documents/archive-1984-toll",
        title: "The body count",
        note: "Official 2,733 in Delhi. Independent estimates from about 8,000 to about 17,000. Even 8,000 may understate.",
      },
    ])}`;
  }
  if (id === "bluestar-1984") {
    return `${figure(media.granth, "A handwritten Guru Granth Sahib manuscript hit by a bullet during Operation Blue Star.")}${figure(media.akal, "The Akal Takht, seat of Sikh temporal authority, in the Harmandir Sahib complex.")}${furtherLinks([
      {
        href: "/documents/truth-punjab",
        title: "SGPC, Truth About Punjab",
        note: "The Panth’s white paper: Chandigarh, rivers, and autonomy were left unsolved on purpose.",
      },
      {
        href: "/documents/commons-granth",
        title: "The pierced manuscript",
        note: "A handwritten Guru Granth Sahib hit by a bullet inside the complex in June 1984.",
      },
      {
        href: "/issues/golden-temple-1955",
        title: "The 1955 raid",
        note: "The first police action at Harmandir Sahib in independent India — twenty-nine years earlier.",
      },
    ])}`;
  }
  if (id === "punjabi-suba") {
    const kaka = stories.find((s) => s.id === "kaka-inderjit")!;
    return `${figure(media.tara, "Master Tara Singh, Tarn Taran, March 1956 — the political face of Punjabi Suba.")}${storyFeature(kaka, false, here)}${reorgInfographic()}${furtherLinks([
      {
        href: "/issues/golden-temple-1955",
        title: "The 1955 raid on Harmandir Sahib",
        note: "Police in shoes, tear gas in the parikrama, a banned slogan. The raid has its own dossier.",
      },
      {
        href: "/documents/kaka-pdl",
        title: "Kaka Inderjit Singh",
        note: "The Panjab Digital Library portrait of the first shaheed of Punjabi Suba. He was twelve.",
      },
      {
        href: "/documents/punjab-reorg",
        title: "The 1966 Act",
        note: "The statute that created a Punjabi-speaking state without Chandigarh and without its rivers.",
      },
      {
        href: "/issues/chandigarh",
        title: "The withheld capital",
        note: "Pheruman fasted 74 days for Chandigarh. The date in the 1985 Accord also passed.",
      },
    ])}`;
  }
  if (id === "chandigarh") {
    const pheruman = stories.find((s) => s.id === "pheruman")!;
    return `${figure(media.chandigarh, "Palace of Assembly, Chandigarh — the capital he died for, still a Union Territory.")}${pherumanInfographic()}${storyFeature(pheruman, false, here)}${clipping({
      masthead: "The Hindu",
      date: "29 October 1969",
      headline: "Hartal to mourn Pheruman",
      body: "Hartal was observed throughout Punjab in memory of Mr. Darshan Singh Pheruman, who died in Amritsar on the 74th day of his fast for the inclusion of Chandigarh in Punjab.",
      cite: "The Hindu, 29 October 1969.",
    })}${furtherLinks([
      {
        href: "/documents/pheruman-hindu",
        title: "The Hindu, 29 October 1969",
        note: "The contemporary hartal: offices closed, the army alerted “as a routine precaution.”",
      },
      {
        href: "/documents/pheruman-sikhitihas",
        title: "Darshan Singh Pheruman",
        note: "Jaito jatha leader, Rajya Sabha, 74 days without food. The sourced biographical record.",
      },
      {
        href: "/documents/longowal-accord",
        title: "Rajiv–Longowal Accord",
        note: "A second written date for the transfer: 26 January 1986. It passed. Chandigarh is still a Union Territory.",
      },
    ])}`;
  }
  if (id === "assurances") {
    return `${letter({
      from: "Sardar Hukam Singh",
      date: "Constituent Assembly · 21 November 1949",
      body: "My community cannot subscribe its assent to this historic document.",
      cite: "Official debates. Hukam Singh and Bhupinder Singh Mann later refused to sign.",
    })}${figure(media.tara, "Master Tara Singh, 1956. In 1953 he had already named the settlement a change of masters.")}${furtherLinks([
      {
        href: "/documents/cad-21-nov",
        title: "The Assembly record, 21 November 1949",
        note: "Hukam Singh’s dissent, five days before the Constitution was adopted.",
      },
      {
        href: "/documents/cad-14-oct",
        title: "14 October 1949",
        note: "The earlier Assembly sitting on minority safeguards that were then withdrawn.",
      },
      {
        href: "/documents/sikhitihas-constitution",
        title: "The refusal to sign",
        note: "Hukam Singh and Bhupinder Singh Mann did not put their names to the document.",
      },
    ])}`;
  }
  if (id === "shrine-control") {
    const nankana = stories.find((s) => s.id === "nankana")!;
    return `${figure(media.harmandir, "Sri Harmandir Sahib — the house whose management the Panth took from mahants.")}${figure(media.jaito, "A shahidi jatha at the Akal Takht during the Jaito Morcha, about 1924.")}${storyFeature(nankana, false, here)}${furtherLinks([
      {
        href: "/documents/nankana-sikhitihas",
        title: "Saka Nankana Sahib, 20 February 1921",
        note: "The sourced event record: mahant, hired men, Bhai Lachhman Singh’s jatha, the High Court recital.",
      },
      {
        href: "/documents/nankana-express",
        title: "What Saka Nankana Sahib was",
        note: "The Indian Express explainer of mahant control and why the massacre still matters.",
      },
      {
        href: "/documents/gurdwaras-act",
        title: "The Sikh Gurdwaras Act, 1925",
        note: "The statute the blood purchased: representative management, not a mahant’s estate.",
      },
      {
        href: "/issues/golden-temple-1955",
        title: "Later: the 1955 raid",
        note: "A different crime, a different decade: Punjab Police in shoes in the same house.",
      },
    ])}`;
  }
  if (id === "golden-temple-1955") {
    const raid1955 = stories.find((s) => s.id === "golden-temple-1955")!;
    return `${raid1955Infographic()}${raid1955Gallery()}${storyFeature(raid1955, false, here)}${clipping({
      masthead: "The Indian Express",
      date: "4 July 2021 · reconstructing 4 July 1955",
      headline: "Police entered Darbar Sahib in shoes",
      deck: "4 a.m., 4 July 1955. DIG Ashwani Kumar led the raid. Langar stopped. Tear gas in the parikrama.",
      body: "It was at 4 am on July 4, 1955 that Deputy Inspector General of Police Ashwani Kumar led the police with shoes on inside the Golden Temple premises. The community kitchen was captured and langar was stopped. Police also took away utensils. Guru Ramdas inn was also raided and head priests of Golden Temple were arrested. Police used teargas shells in parikarma of Golden Temple.",
      cite: "Kamaldeep Singh Brar, The Indian Express, reconstructing the 4 July 1955 police action.",
    })}${clipping({
      masthead: "District Magistrate, Amritsar",
      date: "6 April 1955 · Section 144",
      headline: "The slogan itself was the offence",
      deck: "Punjabi Suba Zindabad was banned as a threat to order. The raid in July was the state’s answer to that slogan.",
      body: "It is suspected that slogans like Punjabi Suba or Maha-Punjab Amar Rahe, or Punjabi Suba Zindabad, or ਸੀਨੇ ਵਿੱਚ ਗੋਲੀ ਖਾਵਾਂਗੇ, ਪੰਜਾਬੀ ਸੂਬਾ ਬਣਾਵਾਂਗੇ, can violate the law and order. Hence such slogans are banned under Section 144.",
      cite: "Amritsar district order of 6 April 1955, as printed by The Indian Express, 4 July 2021.",
    })}${furtherLinks([
      {
        href: "/documents/express-1955",
        title: "The Indian Express reconstruction",
        note: "Hour-by-hour: shoes on marble, langar stopped, 237 arrested that day, about 12,000 in the morcha.",
      },
      {
        href: "/documents/sikhitihas-1955",
        title: "Sikhitihas: 4 July 1955",
        note: "The sourced event page: SGPC history, Gurmit Singh, Grewal, Sangat Singh, and The Tribune, side by side.",
      },
      {
        href: "/documents/sikhitihas-morcha-1955",
        title: "The 64-day morcha",
        note: "6 April ban, 10 May arrests, 3–4 July raid, 12 July the ban lifted. The raid sits inside this sequence.",
      },
      {
        href: "/documents/zakhmi-pdl",
        title: "Zakhmi’s 1955 compilation",
        note: "The date-by-date history written the same year, held by the Panjab Digital Library.",
      },
      {
        href: "/documents/express-1955-shells",
        title: "The tear-gas shells",
        note: "Displayed at Manji Sahib when the SGPC first commemorated the raid in public, in 2021.",
      },
      {
        href: "/documents/tribune-1955",
        title: "The Tribune",
        note: "The SGPC congregation marking 4 July 1955 as a police attack on Harmandir Sahib.",
      },
    ])}`;
  }
  if (id === "state-violence") {
    return `${furtherLinks([
      {
        href: "/issues/golden-temple-1955",
        title: "The 1955 raid on Harmandir Sahib",
        note: "Shoes on marble, tear gas in the parikrama, no inquiry. Open the raid’s own papers.",
      },
      {
        href: "/issues/shrine-control",
        title: "Nankana Sahib, 1921",
        note: "Mahant Narain Das’s hired men and the unarmed jatha at the Guru’s birthplace.",
      },
      {
        href: "/issues/bluestar-1984",
        title: "Operation Blue Star",
        note: "The Army assault on the Akal Takht in June 1984. Dilgeer called 1955 the dress rehearsal.",
      },
      {
        href: "/issues/november-1984",
        title: "1984 Sikh genocide",
        note: "Organised massacre, 31 October–4 November. The Delhi High Court named it a crime against humanity.",
      },
      {
        href: "/issues/disappearances",
        title: "Punjab disappearances",
        note: "Khalra’s cremation registers, 2,097 illegal cremations admitted in Amritsar, families still asking.",
      },
    ])}`;
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
    return `${letter({
      from: "M. K. Gandhi to Jawaharlal Nehru",
      date: "3 August 1937",
      body: "The Sikhs will die for Punjabi written in Gurmukhi. There is no elegance about that script.",
      cite: "Collected Works of Mahatma Gandhi, volume 66.",
    })}${furtherLinks([
      {
        href: "/documents/cwmg-66",
        title: "The 1937 letter",
        note: "Gandhi’s own words to Nehru on Gurmukhi, from the Collected Works scan.",
      },
      {
        href: "/documents/cwmg-28",
        title: "“Sikhism,” October 1925",
        note: "The published reply that placed Sikhism inside Hinduism after Nankana.",
      },
    ])}`;
  }
  if (id === "article-25") {
    return `${letter({
      from: "Constitution of India, Article 25",
      date: "26 January 1950",
      body: "Explanation I recognises the kirpan as part of professing the Sikh religion. Explanation II, in the next breath, groups Sikhs with Hindus for one reform clause.",
      cite: "Two sentences. They do not cancel each other.",
    })}${furtherLinks([
      {
        href: "/documents/article-25",
        title: "Article 25, official text",
        note: "Explanation I (kirpan) and Explanation II (the grouping). Hold both on the table.",
      },
    ])}`;
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
  const issueHero: Record<string, string> = {
    "golden-temple-1955": "/media/parikrama-causeway.jpg",
    "shrine-control": "/media/harmandir.jpg",
  };
  const hero = poster?.image ?? issueHero[id];
  const extra = extras(id);
  return `
    <div class="page-hero ${hero ? "page-hero-photo" : ""}">
      ${hero ? `<img class="page-hero-bg" src="${asset(hero)}" alt="" />` : ""}
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

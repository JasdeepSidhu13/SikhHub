import { chapters } from "../data/chapters";
import { sources } from "../data/sources";
import { themeById } from "../data/themes";
import { keyIssues, stories } from "../data/stories";
import { media } from "../data/media";
import { esc } from "../lib/html";
import { asset, href, routes } from "../lib/paths";
import { sourceCard } from "./layout";
import { figure, genocideInfographic, nishanKhandaInfographic, raid1955Infographic } from "./infographics";
import { clipping, letter, storyFeature } from "./exhibits";

export function homeView(): string {
  const featuredDocs = ["archive-1984-tandoors", "delhi-hc-2018", "cad-21-nov", "cwmg-66", "archive-1984", "hrw-killers"]
    .map((id) => sources.find((s) => s.id === id))
    .filter(Boolean);
  const raid1955 = stories.find((s) => s.id === "golden-temple-1955")!;
  const kaka = stories.find((s) => s.id === "kaka-inderjit")!;
  const pheruman = stories.find((s) => s.id === "pheruman")!;
  const hukam = stories.find((s) => s.id === "hukam-singh")!;
  const nankana = stories.find((s) => s.id === "nankana")!;
  const khalra = stories.find((s) => s.id === "khalra")!;
  const nishan = stories.find((s) => s.id === "nishan-khanda")!;

  return `
    <section class="hero hero-impact">
      <img class="hero-bg" src="${asset(media.witnesses.src)}" alt="" />
      <div class="hero-inner">
        <p class="kicker">Sikh political history · 1920–2026</p>
        <h1>They roasted Sikhs alive in tandoors.</h1>
        <p class="lede">Affidavits to the Misra Commission from Nand Nagri name the ovens. A 2,000-strong mob, led by Congress workers, killed 119 Sikhs in that settlement. Children were put head-down into tandoors. This was the 1984 Sikh genocide. Not a riot. The papers are here.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="${href(routes.issues)}">The record</a>
          <a class="btn btn-ghost" href="${href(routes.issue("november-1984"))}">1984 Sikh genocide</a>
        </div>
        <blockquote class="hero-quote">“The English-man has gone, but our [Sikh] liberty has not come. For us the so-called liberty is simply a change of masters, black for white. Under the garb of democracy and secularism, our Panth, our liberty, and our religion are being crushed.”<cite>Master Tara Singh, All India Sikh Conference, 28 March 1953</cite></blockquote>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <div>
            <h2>Six facts the official story still avoids</h2>
            <p>Each dossier is one issue, with photographs, judgments, and the original papers.</p>
          </div>
        </div>
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
      </div>
    </section>

    <section class="section section-dark">
      <div class="wrap">
        ${storyFeature(raid1955)}
        ${raid1955Infographic()}
        ${clipping({
          masthead: "The Indian Express",
          date: "4 July 2021 · reconstructing 4 July 1955",
          headline: "Police entered Darbar Sahib in shoes",
          deck: "Langar stopped. Utensils taken. Tear gas in the parikrama. Head priests arrested.",
          body: "It was at 4 am on July 4, 1955 that Deputy Inspector General of Police Ashwani Kumar led the police with shoes on inside the Golden Temple premises. The community kitchen was captured and langar was stopped. Police also took away utensils. Guru Ramdas inn was also raided and head priests of Golden Temple were arrested.",
          cite: "Kamaldeep Singh Brar, The Indian Express.",
        })}
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        ${storyFeature(kaka)}
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        ${storyFeature(pheruman, true)}
        ${clipping({
          masthead: "The Hindu",
          date: "29 October 1969",
          headline: "Hartal to mourn Pheruman",
          deck: "Offices closed across Punjab. Army alerted as “a routine precaution.”",
          body: "Hartal was observed throughout Punjab today in memory of Mr. Darshan Singh Pheruman, who died in Amritsar yesterday on the 74th day of his fast for the inclusion of Chandigarh in Punjab. The last rites were performed at his village. Chandigarh shops closed too.",
          cite: "The Hindu, 29 October 1969, from the paper’s archive reprint.",
        })}
      </div>
    </section>

    <section class="section section-dark">
      <div class="wrap">
        ${storyFeature(nishan)}
        ${nishanKhandaInfographic()}
        ${figure(media.nishanFolio, "A Nishan Sahib painted inside a Guru Granth Sahib manuscript dated 1714, at Takht Kesgarh Sahib.")}
        ${letter({
          from: "Sikh Rehat Maryada",
          date: "SGPC · official English",
          body: "At a high-level site in every Gurdwara should be installed the nishan sahib (Sikh flag). The cloth of the flag should be either of xanthic or of greyish blue colour and on top of the flag post, there should either be a spearhead or a Khanda.",
          cite: "The Panth’s code puts the Khanda on the flagstaff. The smear calls that flag unscriptural.",
        })}
      </div>
    </section>

    <section class="section">
      <div class="wrap split-exhibits">
        <div>
          <p class="kicker">${esc(hukam.kicker)}</p>
          <h2>${esc(hukam.title)}</h2>
          <p>${esc(hukam.lede)}</p>
          ${letter({
            from: "Sardar Hukam Singh",
            date: "Constituent Assembly · 21 November 1949",
            body: "My community cannot subscribe its assent to this historic document.",
            cite: "Official debates, five days before the Constitution was adopted. Hukam Singh and Bhupinder Singh Mann later refused to sign.",
          })}
          <p><a class="btn btn-navy" href="${href(hukam.href)}">${esc(hukam.cta)}</a></p>
        </div>
        <div>
          <p class="kicker">3 August 1937</p>
          <h2>Gandhi, in his own hand</h2>
          <p>He had condemned the Nankana massacre. He still wrote that Sikhism was a variety of Hinduism, and that Gurmukhi — the script of Guru Granth Sahib — had no elegance.</p>
          ${letter({
            from: "M. K. Gandhi to Jawaharlal Nehru",
            date: "3 August 1937",
            body: "The Sikhs will die for Punjabi written in Gurmukhi. There is no elegance about that script.",
            cite: "Collected Works of Mahatma Gandhi, volume 66. Internet Archive scan of the printed volume.",
          })}
          <p><a class="btn btn-navy" href="${href(routes.document("cwmg-66"))}">Open the letter</a></p>
        </div>
      </div>
    </section>

    <section class="quote-band">
      <div class="wrap">
        <blockquote>“The mass killings of Sikhs between 1st and 4th November 1984 in Delhi and the rest of the country, engineered by political actors with the assistance of the law enforcement agencies, answer the description of ‘crimes against humanity’.”</blockquote>
        <cite>Delhi High Court, State through CBI v. Sajjan Kumar, 17 December 2018</cite>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        ${figure(media.witnesses, "Widows of Sikhs killed in Delhi during the 1984 Sikh genocide.")}
        ${genocideInfographic()}
        ${clipping({
          masthead: "1984 Sikh Archive",
          date: "13 November 2026 · Nand Nagri affidavits, 1985",
          headline: "They roasted Sikhs alive in ovens and tandoors",
          deck: "Pav Singh recovered three Misra Commission affidavits from Block A, Nand Nagri. 119 Sikhs killed. Congress workers named. The local police recorded nothing.",
          body: "Many were put in the unheated Tandoors with their heads down and then – they were burnt after sprinkling kerosene on them. The dear one’s were cut into pieces in front of the womenfolk, who were raped so that they should realise the consequences of their beings and called a Sikh.",
          cite: "Affidavit of Gurdayal Singh, President of Gurdwara Shri Guru Singh Sabha, Nand Nagri. Published by the 1984 Sikh Archive, 13 November 2026.",
        })}
        <p><a class="btn btn-primary" href="${href(routes.document("archive-1984-tandoors"))}">The Nand Nagri affidavits</a> <a class="btn btn-navy ext" href="https://1984sikh-archive.org/2026/11/13/new-study-reveals-victims-of-november-1984-sikh-genocide-were-roasted-alive-in-large-ovens-and-tandoors/" rel="noopener noreferrer" target="_blank">Open the original</a></p>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        ${storyFeature(nankana)}
        ${storyFeature(khalra, true)}
      </div>
    </section>

    <section class="section section-cream">
      <div class="wrap">
        <div class="section-head">
          <div>
            <h2>Read the papers</h2>
            <p>Judgments, Assembly debates, letters, and white papers. Each title opens a one-page brief, then the original.</p>
          </div>
          <a class="btn btn-navy" href="${href(routes.documents)}">All documents</a>
        </div>
        <div class="card-grid">
          ${featuredDocs.map((s) => sourceCard(s!)).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <div>
            <h2>1920 to 2026, in order</h2>
            <p>Six chapters. Same facts as the dossiers, told as a single ledger.</p>
          </div>
          <a class="btn btn-navy" href="${href(routes.history)}">Open the history</a>
        </div>
        <div class="chapter-strip">
          ${chapters
            .map(
              (c) => `
            <a href="${href(routes.chapter(c.id))}">
              <span>${esc(c.years)}</span>
              <strong>${esc(c.title)}</strong>
            </a>`,
            )
            .join("")}
        </div>
      </div>
    </section>

  `;
}

import { KIND_HINT, KIND_LABEL } from "../data/types";
import type { SourceKind } from "../data/types";
import { esc } from "../lib/html";
import { href } from "../lib/paths";

const kinds = Object.keys(KIND_LABEL) as SourceKind[];

export function methodView(): string {
  return `
    <div class="page-hero">
      <div class="wrap">
        <p class="kicker">Method</p>
        <h1 class="page-title">How SikhHub classifies evidence</h1>
        <p class="lede-page">This site is written from a Sikh perspective. It is not written from rumour. The source note in the attached chronology still governs: archival records and legal findings are distinguished from later historical accounts and community remembrance.</p>
      </div>
    </div>
    <section class="section">
      <div class="wrap split">
        <article class="prose">
          <p>SikhHub exists so a reader can educate themselves on the issues in the sourced narrative — shrine control, the definition of Sikhism, Partition and citizenship, Punjabi Suba, autonomy and 1984, disappearances — without being asked to take a slogan on trust. Click through. Read the judgment. Read Gandhi in his own volumes. Read Master Tara Singh’s foreword. Read Hukam Singh in the Assembly. Read the High Court on November 1984.</p>
          <h2>What “Sikh perspective with evidence” means here</h2>
          <p>It means the questions are Sikh questions: who owns the shrine, who has the right to define the religion, what “secularism” did to minority safeguards, why a linguistic state arrived without its capital, what an army did to the Akal Takht, why cremation registers had to be audited by families. It does not mean inventing quotations or collapsing militant crime into state crime, or the reverse. Human Rights Watch documented both. This archive links both.</p>
          <h2>Known gaps, left visible</h2>
          <p>Kaka Inderjit Singh’s age and the “first shaheed” designation follow SikhRI remembrance; later accounts differ, and no inquest record was located. The 1955 Golden Temple raid is documented as a Punjab Police operation under Sachar, not as a personal order by Nehru. Where the chronology is silent, SikhHub is silent.</p>
          <h2>How to extend the site</h2>
          <p>The site is a static app with typed data files. To add a book, paper, judgment, image or post, append an object to <code>src/data/sources.ts</code> with a stable <code>id</code>, a <code>kind</code>, a URL, and the chapter and theme ids it belongs to. Events and themes work the same way. Rebuild, and the library, timeline and search pick it up.</p>
          <p><a class="btn btn-navy" href="${href("/library")}">Go to the library</a></p>
        </article>
        <aside class="side">
          <h3>Evidence types</h3>
          <div class="method-grid" style="grid-template-columns:1fr">
            ${kinds
              .map(
                (k) => `
              <div class="source-card">
                <span class="kind kind-${k}">${esc(KIND_LABEL[k])}</span>
                <p style="margin-top:.6rem">${esc(KIND_HINT[k])}</p>
              </div>`,
              )
              .join("")}
          </div>
        </aside>
      </div>
    </section>
  `;
}

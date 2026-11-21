import { KIND_HINT, KIND_LABEL } from "../data/types";
import type { SourceKind } from "../data/types";
import { esc } from "../lib/html";
import { href, routes } from "../lib/paths";

const kinds = Object.keys(KIND_LABEL) as SourceKind[];

export function methodView(): string {
  return `
    <div class="page-hero">
      <div class="wrap">
        <h1 class="page-title">How sources are classified</h1>
        <p class="lede-page">SikhHub is written from a Sikh standpoint. Archival records and court findings are distinguished from later histories and community remembrance.</p>
      </div>
    </div>
    <section class="section">
      <div class="wrap split">
        <article class="prose">
          <p>The questions are Sikh questions: who owns the shrine, who has the right to define the religion, what “secularism” did to minority safeguards, why a linguistic state arrived without its capital, what an army did to the Akal Takht, why cremation registers had to be audited by families. Human Rights Watch documented state crime and militant crime. This archive links both.</p>
          <p>Kaka Inderjit Singh is named the first shaheed of Punjabi Suba by Sikh Research Institute and recorded in the SGPC Gazette (21 September 1960, Karnal). Darshan Singh Pheruman’s fast is counted at 74 days by Fauja Singh, Ganda Singh, and The Hindu. Gandhi’s words on Gurmukhi are in the Collected Works, volume 66, on the Internet Archive. Where a link no longer resolves, it has been removed.</p>
          <p><a class="btn btn-navy" href="${href(routes.documents)}">Open the documents</a></p>
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

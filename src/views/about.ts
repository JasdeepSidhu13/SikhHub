import { media } from "../data/media";
import { esc } from "../lib/html";
import { asset, href, routes } from "../lib/paths";

export function aboutView(): string {
  return `
    <section class="founder-hero">
      <div class="wrap founder-hero-grid">
        <figure class="founder-frame">
          <img src="${asset(media.jasdeep.src)}" alt="${esc(media.jasdeep.alt)}" />
          <figcaption>
            <span>Founder</span>
            Dr. Jasdeep Sidhu
          </figcaption>
        </figure>
        <div class="founder-copy">
          <p class="kicker">SikhHub · a non-profit archive</p>
          <h1>Dr. Jasdeep Sidhu</h1>
          <p class="founder-role">Founder and director, SikhHub</p>
          <p class="lede">The official story called a genocide a riot. A capital is still withheld. Police walked the parikrama in shoes in 1955. SikhHub exists so that record cannot be mislaid again.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${href("/about")}#contact">Write to SikhHub</a>
            <a class="btn btn-ghost" href="${href(routes.issues)}">Open the record</a>
          </div>
        </div>
      </div>
    </section>

    <section class="quote-band">
      <div class="wrap">
        <blockquote>
          A people who do not keep their own papers will be remembered by someone else’s.
          <cite>The purpose of this archive</cite>
        </blockquote>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="founder-pillars">
          <article>
            <p class="kicker">01</p>
            <h2>Awareness</h2>
            <p>SikhHub is a non-profit organisation founded to raise public awareness of Sikh political history — gurdwara reform, Partition, Punjabi Suba, June 1984, the 1984 Sikh genocide, and the Punjab disappearances — in a form a general reader can follow.</p>
          </article>
          <article>
            <p class="kicker">02</p>
            <h2>Evidence</h2>
            <p>Every claim is tied to a document: a judgment, a letter, a statute, a contemporaneous newspaper, a photograph. The archive is written from a Sikh standpoint. It does not invent what the papers do not bear.</p>
          </article>
          <article>
            <p class="kicker">03</p>
            <h2>Transmission</h2>
            <p>The work is for those who did not live these years, and for families who did. A schoolboy in a well, a seventy-four-day fast, police in the Guru’s house: these are not ornaments. They are the ledger.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="wrap founder-bio">
        <div>
          <p class="kicker">The founder</p>
          <h2>A physicist. An archive. A public trust.</h2>
          <p>Dr. Jasdeep Sidhu is a physicist. He took a Ph.D. in physics at the University of Florida in 2020, after an M.S. at San Francisco State University and a B.S. in engineering physics at the University of California, Berkeley. He has worked as a researcher in condensed-matter theory and as a scientist in machine learning. He is a NASA/JPL scholar.</p>
          <p>He built SikhHub as a non-profit public archive so that Sikh history would not have to be argued from memory alone. The site is not a memoir and not a party brief. It is a sourced record, 1920–2025, that a reader can check.</p>
          <p>Corrections, original documents, and family papers are invited. The archive is only as complete as the evidence it is given.</p>
        </div>
        <aside class="founder-aside">
          <p class="kicker">SikhHub</p>
          <p class="founder-aside-lead">Non-profit · independent · sourced</p>
          <ul>
            <li>Founded by Dr. Jasdeep Sidhu</li>
            <li>Sikh political history, 1920–2025</li>
            <li>Judgments, letters, photographs, chronology</li>
            <li>No admission charged · no login required</li>
          </ul>
          <p><a class="btn btn-navy" href="${href(routes.documents)}">Open the documents</a></p>
        </aside>
      </div>
    </section>

    <section class="section section-dark" id="contact">
      <div class="wrap contact-grid">
        <div>
          <p class="kicker">Correspondence</p>
          <h2>Write to the founder</h2>
          <p>Feedback, questions, corrections, and documents for the archive. Messages are read by Dr. Jasdeep Sidhu. The mailbox is not published on this site.</p>
          <ul class="contact-points">
            <li>A question about a source or a date</li>
            <li>A document, photograph, or family record</li>
            <li>A correction the archive should make</li>
          </ul>
        </div>
        <form class="contact-form" data-contact-form novalidate>
          <label>
            <span>Name</span>
            <input name="name" type="text" autocomplete="name" required maxlength="120" />
          </label>
          <label>
            <span>Your email</span>
            <input name="email" type="email" autocomplete="email" required maxlength="160" />
          </label>
          <label>
            <span>This is</span>
            <select name="topic" required>
              <option value="Feedback">Feedback</option>
              <option value="Question">A question</option>
              <option value="Information">Information for the archive</option>
              <option value="Correction">A correction</option>
            </select>
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="7" required maxlength="8000"></textarea>
          </label>
          <label class="honey" aria-hidden="true">
            <span>Website</span>
            <input name="website" type="text" tabindex="-1" autocomplete="off" />
          </label>
          <button class="btn btn-primary" type="submit">Send the message</button>
          <p class="contact-status" data-contact-status hidden></p>
        </form>
      </div>
    </section>
  `;
}

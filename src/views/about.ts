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
          </figcaption>
        </figure>
        <div class="founder-copy">
          <p class="founder-kicker"><span class="org">SikhHub</span> · non-profit archive</p>
          <h1>Dr. Jasdeep Sidhu</h1>
          <p class="founder-role">Founder and director</p>
          <p class="lede"><span class="org">SikhHub</span> was founded to place Sikh history in public view — not as a slogan, and not as the official account, but as a sourced record a reader can open, cite, and teach.</p>
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
          A nation may bury a people twice: once in the earth, and once in the record. This archive was founded so that the second burial does not succeed.
          <cite>The founding purpose of SikhHub</cite>
        </blockquote>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="founder-pillars">
          <article>
            <p class="kicker">01</p>
            <h2>Awareness</h2>
            <p><span class="org">SikhHub</span> is a non-profit organisation established to raise public awareness of Sikh political history — gurdwara reform, Partition, Punjabi Suba, June 1984, the 1984 Sikh genocide, and the Punjab disappearances — in a form a general reader can follow and a teacher can assign.</p>
          </article>
          <article>
            <p class="kicker">02</p>
            <h2>Evidence</h2>
            <p>Every claim is tied to a document: a judgment, a letter, a statute, a contemporaneous newspaper, a photograph. The archive is written from a Sikh standpoint. It does not invent what the papers do not bear.</p>
          </article>
          <article>
            <p class="kicker">03</p>
            <h2>Transmission</h2>
            <p>The work is for those who did not live these years, and for families who did. Names, dates, and papers are kept so that memory is not left to permission, and so that the next generation inherits a record rather than a rumour.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="wrap founder-bio">
        <div>
          <p class="kicker">The archive</p>
          <h2>Scholarship in the service of a public record</h2>
          <p>Dr. Jasdeep Sidhu is a physicist. He received his Ph.D. in physics from the University of Florida in 2020, following an M.S. from San Francisco State University and a B.S. in engineering physics from the University of California, Berkeley. He is a NASA/JPL scholar, and has worked in condensed-matter theory and in machine learning.</p>
          <p>He established <span class="org">SikhHub</span> as an independent non-profit so that Sikh political history would be available to the public in a form equal to its gravity: documented, chronological, and independent of the versions that have been taught in their place. The archive covers the century from the gurdwara reform of the 1920s through Partition, Punjabi Suba, June 1984, the 1984 Sikh genocide, and the Punjab disappearances.</p>
          <p>Its purpose is education. Its method is evidence. Corrections, original documents, and family papers are invited. The archive is only as complete as the record it is given.</p>
        </div>
        <aside class="founder-aside">
          <p class="kicker"><span class="org">SikhHub</span></p>
          <p class="founder-aside-lead">Non-profit · independent · sourced</p>
          <ul>
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
          <h2>Write to SikhHub</h2>
          <p>Feedback, questions, corrections, and documents for the archive. Messages are read in confidence. The mailbox is not published on this site.</p>
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

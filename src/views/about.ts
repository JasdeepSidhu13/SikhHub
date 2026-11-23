export function aboutView(): string {
  return `
    <section class="founder-hero" id="contact">
      <div class="wrap about-split">
        <div class="founder-copy">
          <p class="founder-kicker">Non-profit archive</p>
          <h1>SikhHub</h1>
          <p class="founder-role">The Panth, on the record</p>
          <p class="lede"><span class="org">SikhHub</span> was founded to place Sikh history in public view — not as a slogan, and not as the official account, but as a sourced record a reader can open, cite, and teach.</p>
        </div>
        <form class="contact-form" data-contact-form novalidate>
          <p class="founder-kicker">Write to SikhHub</p>
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
            <textarea name="message" rows="6" required maxlength="8000"></textarea>
          </label>
          <label class="honey" aria-hidden="true">
            <span>Website</span>
            <input name="website" type="text" tabindex="-1" autocomplete="off" />
          </label>
          <button class="btn btn-primary" type="submit">Write to SikhHub</button>
          <p class="contact-status" data-contact-status hidden></p>
        </form>
      </div>
    </section>

    <section class="section">
      <div class="wrap about-body">
        <p class="kicker">The archive</p>
        <h2>A sourced public record</h2>
        <p><span class="org">SikhHub</span> is an independent non-profit archive of Sikh political history, from the Gurus to the present. Every claim is tied to a document: a judgment, a letter, a statute, a contemporaneous newspaper, a photograph. Its purpose is education. Its method is evidence.</p>
        <p><span class="org">SikhHub</span> is founded and managed by Dr. Jasdeep Sidhu. He is a physicist with a Ph.D. from the University of Florida. He has extensive experience as an AI/ML engineer and founder in the technology industry, and is a NASA/JPL scholar.</p>
      </div>
    </section>
  `;
}

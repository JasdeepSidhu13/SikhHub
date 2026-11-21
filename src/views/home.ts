import { media } from "../data/media";
import { href, routes } from "../lib/paths";
import { videoPlate } from "./exhibits";
import { newsDeskPreview } from "./news";
import { achievementsSpotlight } from "./achievements";
import { issuesLandingHero } from "./issues";

export function homeView(): string {
  return `
    <section class="hero hero-entrance">
      <div class="hero-entrance-grid">
        <div class="hero-entrance-copy">
          <p class="kicker">Inspiration · 1985</p>
          <h1>Sikhs are beautiful people.</h1>
          <p class="lede">Asked about Sikhism, Osho named Sikhs as the one community in India you can rely upon: simple, courageous, unafraid. That is the character. The spotlight below is the achievement. Sikh issues — the 1984 genocide record and the papers — is a room of its own.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${href(routes.achievements)}">Sikh achievements</a>
            <a class="btn btn-ghost" href="${href(routes.document("osho-last-testament-sikhs"))}">The interview</a>
            <a class="btn btn-ghost" href="#sikh-issues">Sikh issues</a>
          </div>
        </div>
        ${videoPlate({
          src: "/media/osho-sikhs.mp4",
          poster: media.osho.src,
          title: "Osho, asked about Sikhs",
          caption: "Opening exhibit. Osho, The Last Testament, 1985.",
          entrance: true,
        })}
      </div>
    </section>

    ${achievementsSpotlight()}

    ${newsDeskPreview()}

    ${issuesLandingHero("section")}
  `;
}

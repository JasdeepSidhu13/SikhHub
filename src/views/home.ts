import { media } from "../data/media";
import { asset, href, routes } from "../lib/paths";
import { videoPlate } from "./exhibits";
import { newsDeskPreview } from "./news";
import { achievementsSpotlight } from "./achievements";
import { issuesLandingHero } from "./issues";
import { listenPreview } from "./listen";
import { directoryPreview } from "./directory";

export function homeView(): string {
  return `
    <section class="hero hero-entrance">
      <div class="hero-entrance-grid">
        <div class="hero-entrance-copy">
          <p class="kicker">Inspiration · 1985</p>
          <h1>Sikhs are beautiful people.</h1>
          <p class="lede">Asked about Sikhism, Osho named Sikhs as the one community in India you can rely upon: simple, courageous, unafraid. That is the character. The rooms below are the achievement, the Guru’s houses, live kirtan, and the issues — including the 1984 Sikh genocide record.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${href(routes.achievements)}">Lives</a>
            <a class="btn btn-ghost" href="${href(routes.gurdwaras)}">Gurdwaras</a>
            <a class="btn btn-ghost" href="${href(routes.listen)}">Kirtan</a>
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

    <section class="section rooms-section">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">Rooms</p>
            <h2>Lives. Houses. Shabad. The record.</h2>
          </div>
        </div>
        <div class="rooms">
          <a class="room" href="${href(routes.achievements)}">
            <img src="${asset("/media/heroes/kapany.jpg")}" alt="Narinder Singh Kapany, father of fibre optics" />
            <div>
              <span>Lives</span>
              <strong>Two hundred Sikhs. Fifty works of the Panth.</strong>
            </div>
          </a>
          <a class="room" href="${href(routes.gurdwaras)}">
            <img src="${asset("/media/harmandir-aerial.jpg")}" alt="" />
            <div>
              <span>Gurdwaras</span>
              <strong>A hundred houses, placed on an atlas.</strong>
            </div>
          </a>
          <a class="room" href="${href(routes.listen)}">
            <img src="${asset("/media/harmandir.jpg")}" alt="" />
            <div>
              <span>Kirtan</span>
              <strong>Live from Darbar Sahib and four more.</strong>
            </div>
          </a>
          <a class="room" href="${href(routes.issues)}">
            <img src="${asset("/media/1984-witnesses.jpg")}" alt="" />
            <div>
              <span>Issues</span>
              <strong>The 1984 Sikh genocide, and the live fight.</strong>
            </div>
          </a>
        </div>
      </div>
    </section>

    ${achievementsSpotlight()}

    ${listenPreview()}

    ${newsDeskPreview()}

    ${directoryPreview()}

    ${issuesLandingHero("section")}
  `;
}

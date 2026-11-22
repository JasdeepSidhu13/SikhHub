import { asset, href, routes } from "../lib/paths";
import { newsDeskPreview } from "./news";
import { achievementsSpotlight } from "./achievements";
import { issuesLandingHero } from "./issues";
import { listenPreview } from "./listen";
import { directoryPreview } from "./directory";
import { entrancePanorama } from "./panorama";

export function homeView(): string {
  return `
    ${entrancePanorama()}

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

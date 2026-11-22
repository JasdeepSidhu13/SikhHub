import { liveStations, sgpcLive } from "../data/live";
import { esc } from "../lib/html";
import { asset, href, routes } from "../lib/paths";

function sgpcLiveAudio(): string {
  return `
    <audio data-sgpc-live preload="auto" playsinline>
      <source src="${esc(sgpcLive.stream)}" type="audio/aac" />
    </audio>`;
}

export function liveKirtanHeader(): string {
  return `
    <section class="kirtan-header" data-kirtan-header aria-label="Live kirtan from Darbar Sahib">
      <div class="kirtan-stage">
        <img src="${asset("/media/harmandir.jpg")}" alt="Sri Harmandir Sahib, Amritsar" />
        ${sgpcLiveAudio()}
      </div>
      <div class="kirtan-bar">
        <span class="live-pulse">Live</span>
        <div class="kirtan-copy">
          <p class="kicker">Sri Harmandir Sahib · SGPC</p>
          <h2>Live kirtan from Darbar Sahib</h2>
        </div>
        <button type="button" class="btn btn-primary" data-kirtan-sound aria-pressed="false">Sound on</button>
        <a class="btn btn-ghost ext" href="${esc(sgpcLive.page)}" rel="noopener noreferrer" target="_blank">sgpc.net</a>
      </div>
    </section>`;
}

export function bindLiveKirtan(root: HTMLElement): void {
  const audio = root.querySelector<HTMLAudioElement>("[data-sgpc-live]");
  const sound = root.querySelector<HTMLButtonElement>("[data-kirtan-sound]");
  const header = root.querySelector<HTMLElement>("[data-kirtan-header], .live-stage");
  if (!audio) return;
  const player = audio;

  function setPlaying(on: boolean): void {
    sound?.setAttribute("aria-pressed", on ? "true" : "false");
    if (sound) sound.textContent = on ? "Mute" : "Sound on";
    header?.classList.toggle("is-live", on);
    header?.classList.toggle("needs-gesture", !on);
  }

  function start(): void {
    player.muted = false;
    void player.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }

  player.addEventListener("playing", () => setPlaying(true));
  player.addEventListener("pause", () => {
    if (player.muted || player.paused) setPlaying(false);
  });
  start();
  sound?.addEventListener("click", () => {
    const on = sound.getAttribute("aria-pressed") !== "true";
    if (on) start();
    else {
      player.pause();
      setPlaying(false);
    }
  });
}

export function listenPreview(): string {
  const lead = liveStations[0];
  return `
    <section class="section section-navy" id="listen">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">Kirtan</p>
            <h2>Live from the Gurdwaras</h2>
            <p>Darbar Sahib first — the SGPC’s own live kirtan, playing on the homepage. Then Hazur Sahib, Patna Sahib, Bangla Sahib, and Sis Ganj. SikhHub does not re-host the stream.</p>
          </div>
          <a class="btn btn-primary" href="${href(routes.listen)}">Open the desk</a>
        </div>
        <a class="live-lead" href="${esc(lead.official.href)}" rel="noopener noreferrer" target="_blank">
          <img src="${asset(lead.image)}" alt="${esc(lead.imageAlt)}" />
          <div class="live-lead-copy">
            <span class="live-pulse">Live</span>
            <p class="feat-meta">${esc(lead.place)}</p>
            <h3>${esc(lead.name)}</h3>
            <p>${esc(lead.kicker)}</p>
            <span class="live-go">${esc(lead.official.label)} →</span>
          </div>
        </a>
      </div>
    </section>`;
}

export function listenView(): string {
  const [darbar, ...rest] = liveStations;
  return `
    <div class="cinema cinema-listen">
      <img class="cinema-bg" src="${asset("/media/harmandir.jpg")}" alt="" />
      <div class="cinema-shade"></div>
      <div class="wrap cinema-copy">
        <p class="kicker">Live kirtan · radio</p>
        <h1 class="page-title">From the Takhts</h1>
        <p class="lede-page">Live kirtan from Darbar Sahib, then four more Gurdwaras, and a worldwide radio desk. The SGPC reserves the Harmandir Sahib broadcast. This page plays their official stream. It does not copy it.</p>
      </div>
    </div>
    <section class="section section-navy">
      <div class="wrap">
        <article class="live-stage">
          <div class="kirtan-stage is-desk">
            <img src="${asset(darbar.image)}" alt="${esc(darbar.imageAlt)}" />
            ${sgpcLiveAudio()}
          </div>
          <div>
            <span class="live-pulse">Live now</span>
            <p class="feat-meta">${esc(darbar.place)}</p>
            <h2>${esc(darbar.name)}</h2>
            <p>${esc(darbar.blurb)}</p>
            <p class="hero-actions">
              <button type="button" class="btn btn-primary" data-kirtan-sound aria-pressed="false">Sound on</button>
              <a class="btn btn-ghost ext" href="${esc(darbar.official.href)}" rel="noopener noreferrer" target="_blank">${esc(darbar.official.label)}</a>
              ${darbar.also ? `<a class="btn btn-ghost ext" href="${esc(darbar.also.href)}" rel="noopener noreferrer" target="_blank">${esc(darbar.also.label)}</a>` : ""}
            </p>
            ${darbar.note ? `<p class="live-note">${esc(darbar.note)}</p>` : ""}
          </div>
        </article>
      </div>
    </section>
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="kicker">Four more, and a desk</p>
            <h2>Hazur, Patna, Bangla Sahib, Sis Ganj</h2>
            <p>Each card opens the official or partner player in a new tab. SikhHub is a door, not a pirate radio.</p>
          </div>
        </div>
        <div class="live-grid">
          ${rest
            .map(
              (s) => `
            <article class="live-card">
              <img src="${asset(s.image)}" alt="${esc(s.imageAlt)}" />
              <div class="live-card-copy">
                <p class="feat-meta">${esc(s.place)}</p>
                <h3>${esc(s.name)}</h3>
                <p>${esc(s.blurb)}</p>
                <p class="feat-more">
                  <a class="ext" href="${esc(s.official.href)}" rel="noopener noreferrer" target="_blank">${esc(s.official.label)}</a>
                  ${s.also ? ` · <a class="ext" href="${esc(s.also.href)}" rel="noopener noreferrer" target="_blank">${esc(s.also.label)}</a>` : ""}
                </p>
              </div>
            </article>`,
            )
            .join("")}
        </div>
        <p class="live-legal">The Shiromani Gurdwara Parbandhak Committee reserves the live telecast of Gurbani from Sri Darbar Sahib. This site plays the Committee’s own stream at live.sgpc.net and links to <a class="ext" href="${esc(sgpcLive.page)}" rel="noopener noreferrer" target="_blank">sgpc.net/live-kirtan</a>. It does not re-host a copy. Other stations are linked to the Takht or to SikhNet Radio.</p>
        <p><a class="btn btn-navy" href="${href(routes.gurdwaras)}">Gurdwaras</a></p>
      </div>
    </section>`;
}

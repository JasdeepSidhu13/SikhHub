import { liveStations, sgpcLive } from "../data/live";
import { esc } from "../lib/html";
import { asset, href, routes } from "../lib/paths";

const player = new Audio(sgpcLive.stream);
player.preload = "auto";
player.autoplay = true;
let pausedByUser = false;
let playerBound = false;

function syncKirtanUi(): void {
  const on = !pausedByUser;
  const sound = document.querySelector<HTMLButtonElement>("[data-kirtan-sound]");
  const bar = document.querySelector<HTMLElement>("[data-kirtan-header]");
  if (sound) {
    sound.setAttribute("aria-pressed", on ? "true" : "false");
    sound.textContent = on ? "Pause" : "Play";
  }
  bar?.classList.toggle("is-live", on);
}

export function ensureLiveKirtan(event?: Event): void {
  if (pausedByUser) return;
  const target = event?.target;
  if (target instanceof Element && target.closest("[data-kirtan-sound]")) return;
  void player.play().then(syncKirtanUi).catch(syncKirtanUi);
}

export function liveKirtanBar(): string {
  return `
    <div class="kirtan-bar is-live" data-kirtan-header role="status" aria-label="Live kirtan from Darbar Sahib, Amritsar">
      <span class="live-pulse">Live</span>
      <p>Live kirtan from Darbar Sahib, Amritsar</p>
      <button type="button" class="kirtan-pause" data-kirtan-sound aria-pressed="true">Pause</button>
    </div>`;
}

export function bindLiveKirtan(root: HTMLElement): void {
  const sound = root.querySelector<HTMLButtonElement>("[data-kirtan-sound]");
  if (!playerBound) {
    playerBound = true;
    player.addEventListener("playing", syncKirtanUi);
    player.addEventListener("pause", () => {
      if (!pausedByUser) void player.play().then(syncKirtanUi).catch(syncKirtanUi);
      else syncKirtanUi();
    });
    player.addEventListener("canplay", () => ensureLiveKirtan());
    player.addEventListener("stalled", () => ensureLiveKirtan());
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") ensureLiveKirtan();
    });
    for (const type of ["pointerdown", "keydown", "touchstart", "wheel"] as const) {
      window.addEventListener(type, ensureLiveKirtan, { capture: true, passive: true });
    }
  }
  sound?.addEventListener("click", (event) => {
    event.stopPropagation();
    if (pausedByUser) {
      pausedByUser = false;
      ensureLiveKirtan();
    } else {
      pausedByUser = true;
      player.pause();
      syncKirtanUi();
    }
  });
  syncKirtanUi();
  ensureLiveKirtan();
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
            <p>Darbar Sahib first — live kirtan from Amritsar, in the header on every page. Then Hazur Sahib, Patna Sahib, Bangla Sahib, and Sis Ganj. SikhHub does not re-host the stream.</p>
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
        <p class="lede-page">Live kirtan from Darbar Sahib, then four more Gurdwaras, and a worldwide radio desk. The SGPC reserves the Harmandir Sahib broadcast. Pause it from the header. This site does not copy the stream.</p>
      </div>
    </div>
    <section class="section section-navy">
      <div class="wrap">
        <article class="live-stage">
          <img src="${asset(darbar.image)}" alt="${esc(darbar.imageAlt)}" />
          <div>
            <span class="live-pulse">Live now</span>
            <p class="feat-meta">${esc(darbar.place)}</p>
            <h2>${esc(darbar.name)}</h2>
            <p>${esc(darbar.blurb)}</p>
            <p class="hero-actions">
              <a class="btn btn-primary ext" href="${esc(darbar.official.href)}" rel="noopener noreferrer" target="_blank">${esc(darbar.official.label)}</a>
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

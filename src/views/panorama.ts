import { entranceClips, entranceSource } from "../data/entrance";
import { esc } from "../lib/html";
import { asset, href, routes } from "../lib/paths";

export function entrancePanorama(): string {
  return `
    <section class="hero-panorama" data-panorama aria-label="Three words spoken about Sikhs">
      <div class="pano-stage">
        ${entranceClips
          .map(
            (clip, i) => `
          <button type="button" class="pano-cell${i === 1 ? " is-lead" : ""}" data-pano-cell data-clip="${esc(clip.id)}" aria-pressed="false" aria-label="Hear: ${esc(clip.word)}. ${esc(clip.line)}">
            <video
              data-entrance-clip
              data-start="${clip.start}"
              data-end="${clip.end}"
              muted
              playsinline
              preload="auto"
              poster="${asset(entranceSource.poster)}"
              aria-hidden="true"
            >
              <source src="${asset(entranceSource.src)}" type="video/mp4" />
            </video>
            <span class="pano-veil"></span>
            <span class="pano-copy">
              <span class="pano-stamp">Sikhs are</span>
              <span class="pano-word">${esc(clip.word)}</span>
              <span class="pano-line">${esc(clip.line)}</span>
            </span>
            <span class="pano-hear"></span>
          </button>`,
          )
          .join("")}
      </div>
      <h1 class="sr">Sikhs are beautiful, reliable, unafraid</h1>
      <div class="pano-dock">
        <div class="pano-dock-copy">
          <p class="kicker">The Last Testament · 1985</p>
          <p class="lede">Beautiful. Reliable. Unafraid. Asked about Sikhism, he named who Sikhs are. Click a panel to hear the blow.</p>
        </div>
        <div class="pano-dock-actions">
          <p class="pano-cite">${esc(entranceSource.cite)}</p>
          <p class="hero-actions">
            <a class="btn btn-primary" href="${href(routes.achievements)}">Lives</a>
            <a class="btn btn-ghost" href="${href(routes.gurdwaras)}">Gurdwaras</a>
            <a class="btn btn-ghost" href="${href(entranceSource.document)}">The document</a>
          </p>
        </div>
      </div>
    </section>`;
}

export function bindEntrancePanorama(root: HTMLElement): void {
  const stage = root.querySelector<HTMLElement>("[data-panorama]");
  if (!stage) return;
  const cells = [...stage.querySelectorAll<HTMLButtonElement>("[data-pano-cell]")];
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function loopClip(video: HTMLVideoElement): void {
    const start = Number(video.dataset.start);
    const end = Number(video.dataset.end);
    if (!Number.isFinite(start) || !Number.isFinite(end)) return;
    const snap = (): void => {
      if (video.currentTime < start || video.currentTime >= end - 0.06) {
        video.currentTime = start;
      }
    };
    video.addEventListener("loadedmetadata", () => {
      video.currentTime = start;
    });
    video.addEventListener("seeked", () => {
      if (video.currentTime < start - 0.02) video.currentTime = start;
    });
    video.addEventListener("timeupdate", snap);
    video.addEventListener("ended", () => {
      video.currentTime = start;
      void video.play().catch(() => undefined);
    });
    video.currentTime = start;
  }

  function setLive(active: HTMLButtonElement | null): void {
    cells.forEach((cell) => {
      const on = cell === active;
      cell.classList.toggle("is-live", on);
      cell.setAttribute("aria-pressed", on ? "true" : "false");
      const video = cell.querySelector("video");
      if (!video) return;
      video.muted = !on;
      if (on) void video.play().catch(() => undefined);
    });
  }

  cells.forEach((cell) => {
    const video = cell.querySelector("video");
    if (video) loopClip(video);
    cell.addEventListener("click", () => {
      const already = cell.classList.contains("is-live");
      setLive(already ? null : cell);
    });
  });

  if (!reduced) {
    cells.forEach((cell) => {
      const video = cell.querySelector("video");
      if (!video) return;
      video.muted = true;
      void video.play().catch(() => undefined);
    });
  }
}

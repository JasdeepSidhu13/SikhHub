import { gurdwaraGeo } from "../data/gurdwara-geo";
import { gurdwaras, type Gurdwara, type GurdwaraRegion } from "../data/gurdwaras";
import { esc } from "../lib/html";
import { href, routes } from "../lib/paths";
import { go } from "../lib/router";

type AtlasMode = "subcontinent" | "world";
type Box = { west: number; east: number; south: number; north: number };

const SUB: Box = { west: 60, east: 98, south: 5.5, north: 37.8 };
const WORLD: Box = { west: -170, east: 180, south: -48, north: 72 };

function project(lat: number, lng: number, box: Box, w: number, h: number): { x: number; y: number } {
  const x = ((lng - box.west) / (box.east - box.west)) * w;
  const y = ((box.north - lat) / (box.north - box.south)) * h;
  return { x, y };
}

function inBox(lat: number, lng: number, box: Box): boolean {
  return lng >= box.west && lng <= box.east && lat >= box.south && lat <= box.north;
}

/** Clockwise coast of the subcontinent: Makran to Kanyakumari, Bay of Bengal, Himalaya, back. */
const LAND_LL: readonly [number, number][] = [
  [25.15, 61.6],
  [24.85, 66.75],
  [23.7, 68.05],
  [22.35, 68.95],
  [21.55, 69.55],
  [20.7, 70.9],
  [21.15, 72.7],
  [19.05, 72.78],
  [16.95, 73.25],
  [14.8, 74.1],
  [12.85, 74.82],
  [11.1, 75.8],
  [9.95, 76.22],
  [8.09, 77.54],
  [8.35, 77.95],
  [10.75, 79.85],
  [13.08, 80.3],
  [15.85, 80.45],
  [17.7, 83.3],
  [20.25, 86.7],
  [21.65, 87.5],
  [21.85, 88.2],
  [21.6, 89.5],
  [22.35, 91.85],
  [24.0, 91.4],
  [25.15, 92.4],
  [24.75, 94.1],
  [25.5, 94.6],
  [27.4, 95.5],
  [28.15, 97.0],
  [28.55, 94.4],
  [27.7, 88.45],
  [28.15, 86.0],
  [30.2, 81.0],
  [32.5, 78.9],
  [34.9, 78.2],
  [35.9, 76.4],
  [36.9, 74.7],
  [36.15, 71.4],
  [34.1, 71.2],
  [32.9, 70.4],
  [31.55, 69.1],
  [29.9, 66.6],
  [27.8, 64.3],
  [26.2, 62.3],
];

function landPath(box: Box, w: number, h: number): string {
  const pts = LAND_LL.map(([lat, lng]) => project(lat, lng, box, w, h));
  return `M ${pts.map((p) => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" L ")} Z`;
}

function graticule(w: number, h: number, box: Box, step: number): string {
  const lines: string[] = [];
  const startLng = Math.ceil(box.west / step) * step;
  const startLat = Math.ceil(box.south / step) * step;
  for (let lng = startLng; lng < box.east; lng += step) {
    const a = project(box.south, lng, box, w, h);
    const b = project(box.north, lng, box, w, h);
    lines.push(`<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}" />`);
  }
  for (let lat = startLat; lat < box.north; lat += step) {
    const a = project(lat, box.west, box, w, h);
    const b = project(lat, box.east, box, w, h);
    lines.push(`<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}" />`);
  }
  return lines.join("");
}

const SUB_LABELS: { name: string; lat: number; lng: number }[] = [
  { name: "Amritsar", lat: 31.62, lng: 74.88 },
  { name: "Anandpur", lat: 31.24, lng: 76.5 },
  { name: "Delhi", lat: 28.64, lng: 77.22 },
  { name: "Nanded", lat: 19.15, lng: 77.32 },
  { name: "Patna", lat: 25.61, lng: 85.17 },
  { name: "Nankana", lat: 31.45, lng: 73.71 },
  { name: "Lahore", lat: 31.59, lng: 74.31 },
  { name: "Bidar", lat: 17.91, lng: 77.52 },
];

const WORLD_LABELS: { name: string; lat: number; lng: number }[] = [
  { name: "Punjab", lat: 31.2, lng: 75.4 },
  { name: "Britain", lat: 52.4, lng: -1.2 },
  { name: "Pacific coast", lat: 49.0, lng: -122.8 },
  { name: "California", lat: 37.9, lng: -121.3 },
  { name: "East Africa", lat: -1.3, lng: 36.8 },
  { name: "Malaya", lat: 1.3, lng: 103.8 },
  { name: "Australia", lat: -30.1, lng: 153.2 },
];

type Pin = { id: string; x: number; y: number; featured: boolean };

function spread(pins: Pin[], minDist: number): Pin[] {
  const out = pins.map((p) => ({ ...p }));
  for (let pass = 0; pass < 3; pass++) {
    for (let i = 0; i < out.length; i++) {
      for (let j = 0; j < i; j++) {
        const dx = out[i].x - out[j].x;
        const dy = out[i].y - out[j].y;
        const d = Math.hypot(dx, dy) || 0.01;
        if (d < minDist) {
          const angle = ((i + 1) * 2.39996) % (Math.PI * 2);
          const r = minDist + pass * 2;
          out[i].x = out[j].x + Math.cos(angle) * r;
          out[i].y = out[j].y + Math.sin(angle) * r;
        }
      }
    }
  }
  return out;
}

export function gurdwaraAtlas(region: string, mode: AtlasMode = "subcontinent"): string {
  const list =
    region === "all" ? gurdwaras : gurdwaras.filter((g) => g.region === (region as GurdwaraRegion));
  const plate: AtlasMode = region === "Diaspora" ? "world" : mode;
  const box = plate === "world" ? WORLD : SUB;
  const mapW = plate === "world" ? 640 : 560;
  const mapH = plate === "world" ? 360 : 520;

  const raw: Pin[] = [];
  for (const g of list) {
    const geo = gurdwaraGeo[g.id];
    if (!geo) continue;
    const [lat, lng] = geo;
    if (plate === "subcontinent" && !inBox(lat, lng, SUB)) continue;
    if (plate === "world" && !inBox(lat, lng, WORLD)) continue;
    const { x, y } = project(lat, lng, box, mapW, mapH);
    if (x < 10 || x > mapW - 10 || y < 10 || y > mapH - 10) continue;
    raw.push({ id: g.id, x, y, featured: Boolean(g.featured) });
  }
  const laid = spread(raw, plate === "world" ? 9 : 11);

  const pins = laid
    .map(
      (p) => `<g class="atlas-pin${p.featured ? " is-featured" : ""}" data-gid="${esc(p.id)}" transform="translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})">
        <circle class="atlas-hit" r="13" />
        <circle class="atlas-ring" r="${p.featured ? 8.5 : 6.4}" />
        <circle class="atlas-dot" r="${p.featured ? 3.6 : 2.6}" />
      </g>`,
    )
    .join("");

  const labelSet = plate === "world" ? WORLD_LABELS : SUB_LABELS;
  const labels = labelSet
    .map((a) => {
      const { x, y } = project(a.lat, a.lng, box, mapW, mapH);
      return `<text class="atlas-label" x="${(x + 9).toFixed(1)}" y="${(y - 9).toFixed(1)}">${esc(a.name)}</text>`;
    })
    .join("");

  return `
    <div class="atlas" data-atlas data-atlas-region="${esc(region)}" data-atlas-mode="${esc(plate)}">
      <div class="atlas-stage">
        <div class="atlas-toolbar">
          <p class="feat-meta">${plate === "world" ? "Stockton to Gravesend" : "Nankana to the Takhts"}</p>
          <div class="atlas-modes">
            <button type="button" data-atlas-mode="subcontinent" class="${plate === "subcontinent" ? "is-on" : ""}">Subcontinent</button>
            <button type="button" data-atlas-mode="world" class="${plate === "world" ? "is-on" : ""}">World</button>
          </div>
        </div>
        <svg class="atlas-svg" viewBox="0 0 ${mapW} ${mapH}" role="img" aria-label="Map of historic gurdwaras">
          <rect class="atlas-sea" width="${mapW}" height="${mapH}" />
          <g class="atlas-grid">${graticule(mapW, mapH, box, plate === "world" ? 20 : 8)}</g>
          ${plate === "subcontinent" ? `<path class="atlas-land" d="${landPath(box, mapW, mapH)}" />` : ""}
          <g class="atlas-labels">${labels}</g>
          <g class="atlas-pins">${pins}</g>
        </svg>
        <p class="atlas-hint">Gold is a house in this archive. Hover to name it. Click for the article. Subcontinent holds the Takhts. World holds the first diaspora halls.</p>
      </div>
      <aside class="atlas-panel">
        <label class="sr" for="atlasq">Find a house</label>
        <input id="atlasq" data-atlas-q type="search" placeholder="Amritsar, Nankana, Stockton…" autocomplete="off" />
        <div class="atlas-card" data-atlas-card>
          <p class="kicker">The atlas</p>
          <h3>Every house in this archive, placed</h3>
          <p>Each mark is a house in this archive. Hover to name it. Click to open the article.</p>
        </div>
        <div class="atlas-list" data-atlas-list>
          ${list.map((g) => listRow(g)).join("")}
        </div>
      </aside>
    </div>`;
}

function listRow(g: Gurdwara): string {
  const geo = gurdwaraGeo[g.id];
  return `<a class="atlas-row" data-gid="${esc(g.id)}" href="${href(routes.gurdwara(g.id))}" ${geo ? `data-lat="${geo[0]}" data-lng="${geo[1]}"` : ""}>
    <strong>${esc(g.name)}</strong>
    <span>${esc(g.place)}</span>
  </a>`;
}

function cardHtml(g: Gurdwara): string {
  return `<p class="kicker">${esc(g.region)} · ${esc(g.founded)}</p>
    <h3>${esc(g.name)}</h3>
    <p>${esc(g.kicker)} — ${esc(g.place)}</p>
    <p><a class="btn btn-navy" href="${href(routes.gurdwara(g.id))}">Read the article</a></p>`;
}

export function bindGurdwaraAtlas(root: HTMLElement): void {
  const found = root.querySelector<HTMLElement>("[data-atlas]");
  if (!found) return;
  const atlas: HTMLElement = found;
  const card = atlas.querySelector<HTMLElement>("[data-atlas-card]");
  const q = atlas.querySelector<HTMLInputElement>("[data-atlas-q]");
  const rows = () => [...atlas.querySelectorAll<HTMLElement>(".atlas-row")];
  const pins = () => [...atlas.querySelectorAll<SVGGElement>(".atlas-pin")];

  function select(id: string | null): void {
    pins().forEach((p) => p.classList.toggle("is-on", p.getAttribute("data-gid") === id));
    rows().forEach((r) => r.classList.toggle("is-on", r.dataset.gid === id));
    const g = id ? gurdwaras.find((x) => x.id === id) : undefined;
    if (card) {
      card.innerHTML = g
        ? cardHtml(g)
        : `<p class="kicker">The atlas</p><h3>Every house in this archive, placed</h3><p>Each mark is a house in this archive. Hover to name it. Click to open the article.</p>`;
    }
    if (id) {
      const row = atlas.querySelector<HTMLElement>(`.atlas-row[data-gid="${CSS.escape(id)}"]`);
      row?.scrollIntoView({ block: "nearest" });
    }
  }

  atlas.addEventListener("pointerover", (event) => {
    const pin = (event.target as Element | null)?.closest("[data-gid]");
    if (pin instanceof Element && pin.getAttribute("data-gid") && !pin.closest(".atlas-modes")) {
      select(pin.getAttribute("data-gid"));
    }
  });

  atlas.addEventListener("click", (event) => {
    const t = event.target as Element | null;
    if (!t || t.closest("button, input, .atlas-row, .btn, a")) return;
    const pin = t.closest(".atlas-pin");
    const id = pin?.getAttribute("data-gid");
    if (!id) return;
    event.preventDefault();
    event.stopPropagation();
    go(routes.gurdwara(id));
  });

  if (q) {
    q.addEventListener("input", () => {
      const needle = q.value.trim().toLowerCase();
      let first: string | null = null;
      rows().forEach((row) => {
        const hit = !needle || (row.textContent ?? "").toLowerCase().includes(needle);
        row.hidden = !hit;
        if (hit && !first) first = row.dataset.gid ?? null;
      });
      pins().forEach((pin) => {
        const id = pin.getAttribute("data-gid");
        const g = gurdwaras.find((x) => x.id === id);
        const blob = `${g?.name ?? ""} ${g?.place ?? ""} ${g?.kicker ?? ""}`.toLowerCase();
        pin.style.display = !needle || blob.includes(needle) ? "" : "none";
      });
      select(needle ? first : null);
    });
  }
}

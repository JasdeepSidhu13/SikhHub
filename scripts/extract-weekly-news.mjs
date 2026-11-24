#!/usr/bin/env node
/**
 * Monday extract for the SikhHub news desk.
 * Pulls the week's Sikh papers, ranks five stories (Gurpurab first when it is the week),
 * and prepends them to src/data/news-weeks.json.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const WEEKS_PATH = resolve(ROOT, "src/data/news-weeks.json");
const USER_AGENT = "SikhHub-news-desk/1.0 (+https://sikhhub.org)";

const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const replace = args.has("--replace");

const GURPURAB =
  /\b(gurpurab|parkash purab|prakash purab|prakash parv|guru nanak jayanti|guru nanak dev|nagar kirtan|harmandir|golden temple)\b/i;
const SIKH =
  /\b(sikh|sgpc|akal takht|harmandir|golden temple|gurdwara|gurpurab|parkash|prakash purab|nankana|kartarpur|bandi singh|amritpal|khalsa|jathedar|panth|punjab|1984)\b/i;
const SKIP =
  /\b(wishes|whatsapp|greetings|greets|quotes|messages to share|date, history|is gurpurab on|tithi|check date|happy guru nanak|curious question about dates|pm joins|pays tribute|happy to join|shabad kirtan on the parkash)\b/i;

const FEEDS = [
  {
    name: "Google News — Gurpurab",
    url: "https://news.google.com/rss/search?q=Gurpurab+OR+%22Parkash+Purab%22+OR+%22Guru+Nanak%22+when:7d&hl=en-IN&gl=IN&ceid=IN:en",
  },
  {
    name: "Google News — Sikh",
    url: "https://news.google.com/rss/search?q=Sikh+OR+SGPC+OR+Nankana+OR+Kartarpur+OR+%22Akal+Takht%22+when:7d&hl=en-IN&gl=IN&ceid=IN:en",
  },
  {
    name: "Hindustan Times — Chandigarh",
    url: "https://www.hindustantimes.com/feeds/rss/cities/chandigarh-news/rssfeed.xml",
  },
  {
    name: "The Indian Express — Chandigarh",
    url: "https://indianexpress.com/section/cities/chandigarh/feed/",
  },
  {
    name: "Google News — Kartarpur",
    url: "https://news.google.com/rss/search?q=Kartarpur+corridor+Sikh+when:7d&hl=en-IN&gl=IN&ceid=IN:en",
  },
  {
    name: "Google News — Satkar",
    url: "https://news.google.com/rss/search?q=%22Satkar+Act%22+OR+%22Guru+Granth+Sahib%22+Akal+Takht+when:7d&hl=en-IN&gl=IN&ceid=IN:en",
  },
];

const COVERS = [
  {
    keys: /gurpurab|parkash|prakash purab|guru nanak|harmandir|golden temple|nagar kirtan/i,
    image: "/media/harmandir.jpg",
    imageAlt: "Sri Harmandir Sahib at night, Amritsar",
  },
  {
    keys: /nankana/i,
    image: "/media/gurdwaras/nankana.jpg",
    imageAlt: "Gurdwara Janam Asthan, Nankana Sahib, at dusk",
  },
  {
    keys: /kartarpur/i,
    image: "/media/gurdwaras/kartarpur.jpg",
    imageAlt: "Gurdwara Darbar Sahib Kartarpur, Guru Nanak’s last home",
  },
  {
    keys: /1984|genocide/i,
    image: "/media/1984-witnesses.jpg",
    imageAlt: "Widows of Sikhs killed in Delhi during the 1984 Sikh genocide",
  },
  {
    keys: /granth|satkar|sacrilege/i,
    image: "/media/feats/living-guru.jpg",
    imageAlt: "Takht Sri Hazur Sahib, Nanded, where the Guru vested authority in the Granth",
  },
  {
    keys: /sgpc|akal takht|jathedar/i,
    image: "/media/akal-takht.jpg",
    imageAlt: "The Akal Takht and Sri Harmandir Sahib, Amritsar",
  },
];

const FALLBACK_COVER = {
  image: "/media/nishan-harmandir.jpg",
  imageAlt: "Nishan Sahib at Sri Harmandir Sahib, Amritsar",
};

function decode(text) {
  return String(text || "")
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;|&apos;/g, "’")
    .replace(/&#038;/g, "&")
    .replace(/&nbsp;/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tag(block, name) {
  const nested = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  if (nested) return decode(nested[1]);
  const attr = block.match(new RegExp(`<${name}[^>]+href=["']([^"']+)["']`, "i"));
  return attr ? decode(attr[1]) : "";
}

function mondayUTC(date) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const day = d.getUTCDay();
  d.setUTCDate(d.getUTCDate() + (day === 0 ? -6 : 1 - day));
  return d;
}

function isoWeekId(monday) {
  const d = new Date(monday);
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return { year: d.getUTCFullYear(), week, id: `${d.getUTCFullYear()}-w${String(week).padStart(2, "0")}` };
}

function formatDay(date) {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function slug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

function kindFor(text) {
  if (/gurpurab|parkash|prakash|nankana|pilgrim|nagar kirtan|harmandir|golden temple/.test(text)) {
    return "pilgrimage";
  }
  if (/sgpc|elected|institution|archives|satkar|granth/.test(text)) return "institution";
  if (/award|honour|honor|achievement|appointed/.test(text)) return "achievement";
  return "issue";
}

function coverFor(text) {
  return COVERS.find((row) => row.keys.test(text)) ?? FALLBACK_COVER;
}

function stripSource(title) {
  return title.replace(/\s+[-–—]\s+[^-–—]+$/, "").trim();
}

function score(item, gurpurabWeek) {
  const text = `${item.headline} ${item.dek} ${item.source} ${item.url}`;
  if (SKIP.test(text) || !SIKH.test(text)) return 0;
  let n = 8;
  if (GURPURAB.test(text)) n += gurpurabWeek ? 40 : 16;
  if (/nankana|kartarpur|bandi singh|amritpal|1984|sgpc|akal takht/.test(text)) n += 10;
  if (/visa|corridor|jatha|pilgrim/.test(text)) n += 6;
  if (TRUSTED.test(text)) n += 18;
  if (!/news\.google\.com/.test(item.url || "") && /^https?:/.test(item.url || "")) n += 8;
  if (/wishes|quotes|explained|history and significance|pm joins|messages/.test(text)) n -= 20;
  return n;
}

async function fetchFeed(feed) {
  const res = await fetch(feed.url, {
    headers: { "User-Agent": USER_AGENT, Accept: "application/rss+xml, application/xml, text/xml, */*" },
  });
  if (!res.ok) {
    console.warn(`Skip ${feed.name}: HTTP ${res.status}`);
    return [];
  }
  const xml = await res.text();
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map((match) => {
    const block = match[1];
    const title = stripSource(tag(block, "title"));
    const link = tag(block, "link") || tag(block, "guid");
    const source = tag(block, "source") || feed.name.replace(/ — .*$/, "");
    const pubDate = tag(block, "pubDate") || tag(block, "pubdate");
    const dek = decode(tag(block, "description")).slice(0, 520);
    return { title, link, source, pubDate, dek };
  });
}

function withinWeek(pubDate, monday) {
  if (!pubDate) return true;
  const t = Date.parse(pubDate);
  if (Number.isNaN(t)) return true;
  const from = monday.getTime() - 2 * 86400000;
  const to = monday.getTime() + 8 * 86400000;
  return t >= from && t <= to;
}

function keyOf(title) {
  return stripSource(title)
    .toLowerCase()
    .replace(/[^a-z0-9 ]+/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 3)
    .slice(0, 7)
    .join(" ");
}

function eventKey(title) {
  const t = stripSource(title).toLowerCase();
  if (/(pilgrim|jatha|delegation).*(pak(?:istan)?|nankana|prakash|parkash)|(pak(?:istan)?|nankana).*(pilgrim|jatha)/.test(t)) {
    return "nankana-jatha";
  }
  if (/kartarpur/.test(t)) return "kartarpur";
  if (/visa/.test(t) && /(delay|miss|nankana|pilgrim)/.test(t)) return "visa-delay";
  if (/satkar|sacrilege|beadbi/.test(t)) return "satkar-act";
  if (/amritpal/.test(t)) return "amritpal";
  if (/pannun|gupta|murder-for-hire|19 years/.test(t)) return "pannun-plot";
  if (
    /gurpurab|parkash purab|prakash purab|guru nanak jayanti|golden temple|harmandir/.test(t) &&
    !/nankana|pakistan|jatha/.test(t)
  ) {
    return "gurpurab-home";
  }
  return keyOf(title);
}

const TRUSTED = /tribune|hindustan times|indian express|times of india|news on air|akashvani|pib\.gov|justice\.gov|bbc|the hindu/i;

async function extract() {
  const monday = mondayUTC(new Date());
  const { id } = isoWeekId(monday);
  const weeks = JSON.parse(readFileSync(WEEKS_PATH, "utf8"));
  if (weeks[0]?.id === id && !replace) {
    console.log(`Week ${id} is already on the desk.`);
    return { wrote: false, week: weeks[0] };
  }

  const prior = replace ? weeks.filter((week) => week.id !== id) : weeks;
  const knownIds = new Set(prior.flatMap((week) => week.items.map((item) => item.id)));
  const knownUrls = new Set(prior.flatMap((week) => week.items.map((item) => item.url)));

  const raw = (await Promise.all(FEEDS.map(fetchFeed))).flat();
  const originals = new Map();
  for (const item of raw) {
    if (item.link && !/news\.google\.com/.test(item.link)) {
      const packed = { url: item.link, source: item.source };
      originals.set(keyOf(item.title), packed);
    }
  }

  const gurpurabWeek = raw.some((item) => GURPURAB.test(`${item.title} ${item.dek}`));
  const ranked = [];
  const seen = new Set();
  for (const item of raw) {
    const headline = stripSource(item.title);
    const k = eventKey(headline);
    if (!k || seen.has(k) || !withinWeek(item.pubDate, monday)) continue;
    const match = originals.get(keyOf(headline));
    const url = match?.url || item.link;
    if (!url || knownUrls.has(url)) continue;
    const source = match?.source || item.source || "The papers";
    const text = `${headline} ${item.dek}`;
    const n = score({ headline, dek: item.dek, source, url }, gurpurabWeek);
    if (n <= 0) continue;
    seen.add(k);
    const published = item.pubDate ? new Date(item.pubDate) : monday;
    const cover = coverFor(text);
    const themeIds = [
      ...(/nankana|kartarpur|gurdwara|corridor/i.test(text) ? ["shrine-control"] : []),
      ...(/1984|genocide/i.test(text) ? ["november-1984"] : []),
    ].slice(0, 1);
    const dek =
      item.dek && item.dek.length > 80 && !item.dek.startsWith(headline)
        ? item.dek
        : `${headline}. Sourced from ${source}. Open the original.`;
    ranked.push({
      score: n,
      gurpurab: GURPURAB.test(text) || k === "gurpurab-home",
      home: k === "gurpurab-home",
      item: {
        id: `${slug(headline) || "sikh-news"}-${monday.getUTCFullYear()}`,
        kind: kindFor(text),
        date: formatDay(Number.isNaN(published.getTime()) ? monday : published),
        headline,
        dek,
        source,
        url,
        image: cover.image,
        imageAlt: cover.imageAlt,
        ...(themeIds.length ? { themeIds } : {}),
      },
    });
  }

  ranked.sort((a, b) => b.score - a.score);
  const gurpurab = ranked.find((row) => row.home) || ranked.find((row) => row.gurpurab);
  const rest = ranked.filter((row) => row !== gurpurab);
  const ordered = gurpurab ? [gurpurab, ...rest] : rest;
  const unique = [];
  const usedIds = new Set(knownIds);
  for (const row of ordered) {
    let item = row.item;
    if (usedIds.has(item.id)) item = { ...item, id: `${item.id}-${unique.length + 1}` };
    usedIds.add(item.id);
    unique.push(item);
    if (unique.length === 5) break;
  }

  if (unique.length < 3) {
    console.warn(`Only ${unique.length} Sikh stories this week. Desk unchanged.`);
    return { wrote: false, week: null };
  }

  const lead = unique[0];
  const week = {
    id,
    start: monday.toISOString().slice(0, 10),
    label: `Week of ${formatDay(monday)}`,
    kicker: gurpurab ? "Gurpurab" : "News",
    summary: gurpurab
      ? `${lead.headline} The desk’s other four are the live Sikh record around it.`
      : unique
          .slice(0, 3)
          .map((item) => item.headline)
          .join(" "),
    items: unique,
  };

  if (dryRun) {
    console.log(JSON.stringify(week, null, 2));
    return { wrote: false, week };
  }

  const next = [week, ...weeks.filter((row) => row.id !== id)];
  writeFileSync(WEEKS_PATH, `${JSON.stringify(next, null, 2)}\n`);
  console.log(`Wrote ${week.id} (${week.items.length} stories). Lead: ${lead.headline}`);
  return { wrote: true, week };
}

extract().catch((err) => {
  console.error(err);
  process.exit(1);
});

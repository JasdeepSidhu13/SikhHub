import { chapters, chapterById } from "../data/chapters";
import { events } from "../data/events";
import { sources, sourceById } from "../data/sources";
import { themes, themeById } from "../data/themes";
import type { Source, TimelineEvent, Chapter, Theme } from "../data/types";

export { chapters, chapterById, events, sources, sourceById, themes, themeById };

export function sourcesFor(ids: string[]): Source[] {
  return ids.map((id) => sourceById[id]).filter(Boolean);
}

export function eventsFor(ids: string[]): TimelineEvent[] {
  return ids
    .map((id) => events.find((e) => e.id === id))
    .filter((e): e is TimelineEvent => Boolean(e));
}

export function themesFor(ids: string[]): Theme[] {
  return ids.map((id) => themeById[id]).filter(Boolean);
}

export function chaptersFor(ids: string[]): Chapter[] {
  return ids.map((id) => chapterById[id]).filter(Boolean);
}

export function relatedSources(source: Source, limit = 4): Source[] {
  return sources
    .filter((s) => s.id !== source.id)
    .map((s) => {
      const tags = s.tags.filter((t) => source.tags.includes(t)).length;
      const themeHits = s.themeIds.filter((t) => source.themeIds.includes(t)).length;
      const chapters = s.chapterIds.filter((c) => source.chapterIds.includes(c)).length;
      const score = tags * 4 + themeHits * 2 + chapters;
      return { s, score };
    })
    .filter((row) => row.score >= 4)
    .sort((a, b) => b.score - a.score || a.s.title.localeCompare(b.s.title))
    .slice(0, limit)
    .map((row) => row.s);
}

export function searchAll(query: string) {
  const q = query.trim().toLowerCase();
  if (q.length < 2) {
    return { chapters: [] as Chapter[], events: [] as TimelineEvent[], sources: [] as Source[], themes: [] as Theme[] };
  }
  const hit = (parts: Array<string | undefined>) => parts.filter(Boolean).join(" ").toLowerCase().includes(q);

  return {
    chapters: chapters.filter((c) =>
      hit([c.title, c.summary, c.question, c.kicker, ...c.blocks.map((b) => ("text" in b ? b.text : ""))]),
    ),
    events: events.filter((e) => hit([e.title, e.summary, e.significance, e.date, e.evidence])),
    sources: sources.filter((s) => hit([s.title, s.creator, s.note, s.year, ...s.tags])),
    themes: themes.filter((t) => hit([t.title, t.summary, t.sikhReading, t.evidence, t.kicker])),
  };
}

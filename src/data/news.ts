import weeksJson from "./news-weeks.json";

export type NewsKind = "issue" | "achievement" | "pilgrimage" | "institution";

export interface NewsItem {
  id: string;
  kind: NewsKind;
  date: string;
  headline: string;
  dek: string;
  source: string;
  url: string;
  image: string;
  imageAlt: string;
  themeIds?: string[];
}

export interface NewsWeek {
  id: string;
  start: string;
  label: string;
  kicker: string;
  summary: string;
  items: NewsItem[];
}

export const NEWS_KIND_LABEL: Record<NewsKind, string> = {
  issue: "Sikh issue",
  achievement: "Achievement",
  pilgrimage: "Pilgrimage",
  institution: "Institution",
};

export const newsWeeks: NewsWeek[] = weeksJson as NewsWeek[];

export const currentNewsWeek = newsWeeks[0];

export function newsItemById(id: string): NewsItem | undefined {
  return newsWeeks.flatMap((week) => week.items).find((item) => item.id === id);
}

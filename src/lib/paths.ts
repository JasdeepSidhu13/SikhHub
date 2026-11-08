export const BASE = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

export function href(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${p}`;
}

export function asset(path: string): string {
  return href(path.startsWith("/") ? path : `/${path}`);
}

export const routes = {
  history: "/history",
  chapter: (id: string) => `/history/${id}`,
  documents: "/documents",
  document: (id: string) => `/documents/${id}`,
  chronology: "/chronology",
  issues: "/issues",
  issue: (id: string) => `/issues/${id}`,
  search: "/search",
} as const;

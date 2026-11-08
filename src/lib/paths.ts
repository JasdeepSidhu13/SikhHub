export const BASE = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

export function href(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${p}`;
}

export function asset(path: string): string {
  return href(path.startsWith("/") ? path : `/${path}`);
}

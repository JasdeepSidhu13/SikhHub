import { BASE } from "./paths";

export type Route =
  | { name: "home" }
  | { name: "narrative" }
  | { name: "chapter"; id: string }
  | { name: "timeline" }
  | { name: "library" }
  | { name: "issues" }
  | { name: "issue"; id: string }
  | { name: "method" }
  | { name: "search"; q: string }
  | { name: "notfound" };

export function currentPath(): string {
  let path = window.location.pathname;
  if (BASE && path.startsWith(BASE)) path = path.slice(BASE.length);
  if (!path.startsWith("/")) path = `/${path}`;
  return path.replace(/\/+$/, "") || "/";
}

export function parseRoute(): Route {
  const path = currentPath();
  const q = new URLSearchParams(window.location.search).get("q") ?? "";
  const parts = path.split("/").filter(Boolean);

  if (parts.length === 0) return { name: "home" };
  if (parts[0] === "narrative" && parts.length === 1) return { name: "narrative" };
  if (parts[0] === "narrative" && parts[1]) return { name: "chapter", id: parts[1] };
  if (parts[0] === "timeline") return { name: "timeline" };
  if (parts[0] === "library") return { name: "library" };
  if (parts[0] === "issues" && parts.length === 1) return { name: "issues" };
  if (parts[0] === "issues" && parts[1]) return { name: "issue", id: parts[1] };
  if (parts[0] === "method") return { name: "method" };
  if (parts[0] === "search") return { name: "search", q };
  return { name: "notfound" };
}

export function go(path: string, replace = false): void {
  const url = path.startsWith("http") ? path : `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
  if (replace) history.replaceState({}, "", url);
  else history.pushState({}, "", url);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

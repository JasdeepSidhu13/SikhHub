import "./styles/app.css";
import { href } from "./lib/paths";
import { go, parseRoute } from "./lib/router";
import { shell } from "./views/layout";
import { homeView } from "./views/home";
import { chapterView, narrativeIndexView } from "./views/narrative";
import { timelineView } from "./views/timeline";
import { libraryView } from "./views/library";
import { issueView, issuesIndexView } from "./views/issues";
import { methodView } from "./views/method";
import { searchView } from "./views/search";
import { chapterById } from "./data/chapters";
import { themeById } from "./data/themes";

const appRoot = document.querySelector("#app");
if (!(appRoot instanceof HTMLElement)) throw new Error("Missing #app");
const root: HTMLElement = appRoot;

function notFound(): string {
  return `
    <div class="page-hero">
      <div class="wrap">
        <p class="kicker">404</p>
        <h1 class="page-title">This page is not in the archive</h1>
        <p class="lede-page">The path does not match a chapter, issue, or tool. Start from the narrative or search.</p>
        <p><a class="btn btn-navy" href="${href("/")}">Back to SikhHub</a></p>
      </div>
    </div>
  `;
}

function paint(): void {
  const route = parseRoute();
  let title = "SikhHub";
  let body = "";

  if (route.name === "home") {
    title = "SikhHub — sourced Sikh history, 1920–2025";
    body = homeView();
  } else if (route.name === "narrative") {
    title = "Narrative — SikhHub";
    body = narrativeIndexView();
  } else if (route.name === "chapter") {
    const view = chapterView(route.id);
    if (!view) {
      title = "Not found — SikhHub";
      body = notFound();
    } else {
      title = `${chapterById[route.id]?.title ?? "Chapter"} — SikhHub`;
      body = view;
    }
  } else if (route.name === "timeline") {
    title = "Timeline — SikhHub";
    body = timelineView("all");
  } else if (route.name === "library") {
    title = "Library — SikhHub";
    body = libraryView("all", "");
  } else if (route.name === "issues") {
    title = "Issues — SikhHub";
    body = issuesIndexView();
  } else if (route.name === "issue") {
    const view = issueView(route.id);
    if (!view) {
      title = "Not found — SikhHub";
      body = notFound();
    } else {
      title = `${themeById[route.id]?.title ?? "Issue"} — SikhHub`;
      body = view;
    }
  } else if (route.name === "method") {
    title = "Method — SikhHub";
    body = methodView();
  } else if (route.name === "search") {
    title = "Search — SikhHub";
    body = searchView(route.q);
  } else {
    title = "Not found — SikhHub";
    body = notFound();
  }

  root.innerHTML = shell(route, title, body);
  if (location.hash) {
    const el = document.getElementById(location.hash.slice(1));
    el?.scrollIntoView({ block: "start" });
  } else {
    window.scrollTo(0, 0);
  }
}

function currentKind(): string {
  return document.querySelector<HTMLButtonElement>("[data-kind].is-on")?.dataset.kind ?? "all";
}

root.addEventListener("click", (event) => {
  const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("button, [data-menu], [data-search]");
  if (!target) return;
  if (target.matches("[data-menu]")) {
    root.querySelector("[data-nav]")?.classList.toggle("is-open");
  } else if (target.matches("[data-search]")) {
    go("/search");
  } else if (target.dataset.period) {
    const main = root.querySelector("main");
    if (main) main.innerHTML = timelineView(target.dataset.period);
  } else if (target.dataset.kind) {
    const q = (root.querySelector("#libq") as HTMLInputElement | null)?.value ?? "";
    const main = root.querySelector("main");
    if (main) main.innerHTML = libraryView(target.dataset.kind, q);
  }
});

root.addEventListener("submit", (event) => {
  const form = event.target as HTMLFormElement;
  if (form.matches("[data-site-search]")) {
    event.preventDefault();
    const q = String(new FormData(form).get("q") ?? "");
    go(`/search?q=${encodeURIComponent(q)}`);
  } else if (form.matches("[data-lib-search]")) {
    event.preventDefault();
    const q = String(new FormData(form).get("q") ?? "");
    const main = root.querySelector("main");
    if (main) main.innerHTML = libraryView(currentKind(), q);
  }
});

document.addEventListener("click", (event) => {
  const target = event.target as HTMLElement | null;
  const a = target?.closest("a");
  if (!a) return;
  if (a.target === "_blank" || a.hasAttribute("download")) return;
  const url = new URL(a.href, window.location.origin);
  if (url.origin !== window.location.origin) return;
  event.preventDefault();
  history.pushState({}, "", `${url.pathname}${url.search}${url.hash}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
});

window.addEventListener("popstate", paint);
paint();

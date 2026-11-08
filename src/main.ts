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
import { sourceView } from "./views/source";
import { aboutView } from "./views/about";
import { sendMessage } from "./lib/contact";
import { sourceById } from "./data/sources";
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
        <p class="lede-page">The path does not match an issue, chapter, or document.</p>
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
    title = "SikhHub — 1984 Sikh genocide, Punjabi Suba, and the record";
    body = homeView();
  } else if (route.name === "narrative") {
    title = "History — SikhHub";
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
    title = "Chronology — SikhHub";
    body = timelineView("all");
  } else if (route.name === "library") {
    title = "Documents — SikhHub";
    body = libraryView("all", "");
  } else if (route.name === "source") {
    const view = sourceView(route.id);
    if (!view) {
      title = "Not found — SikhHub";
      body = notFound();
    } else {
      title = `${sourceById[route.id]?.title ?? "Source"} — SikhHub`;
      body = view;
    }
  } else if (route.name === "issues") {
    title = "The record — SikhHub";
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
    title = "Sources — SikhHub";
    body = methodView();
  } else if (route.name === "about" || route.name === "contact") {
    title = "Dr. Jasdeep Sidhu — sikhhub";
    body = aboutView();
  } else if (route.name === "search") {
    title = "Search — SikhHub";
    body = searchView(route.q);
  } else {
    title = "Not found — SikhHub";
    body = notFound();
  }

  root.innerHTML = shell(route, title, body);
  const hash = location.hash.slice(1) || (route.name === "contact" ? "contact" : "");
  if (hash) {
    const el = document.getElementById(hash);
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
  } else if (form.matches("[data-contact-form]")) {
    event.preventDefault();
    void handleContact(form);
  }
});

async function handleContact(form: HTMLFormElement): Promise<void> {
  const status = form.querySelector<HTMLElement>("[data-contact-status]");
  const button = form.querySelector<HTMLButtonElement>("button[type=submit]");
  const data = new FormData(form);
  if (button) button.disabled = true;
  if (status) {
    status.hidden = false;
    status.classList.remove("is-error", "is-ok");
    status.textContent = "Sending…";
  }
  try {
    const result = await sendMessage({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      topic: String(data.get("topic") ?? "Message"),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
    });
    if (status) {
      status.classList.add(result.ok ? "is-ok" : "is-error");
      status.textContent = result.message;
    }
    if (result.ok) form.reset();
  } catch {
    if (status) {
      status.classList.add("is-error");
      status.textContent = "The message could not be sent. Please wait a moment and try again.";
    }
  } finally {
    if (button) button.disabled = false;
  }
}

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

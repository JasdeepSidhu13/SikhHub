import type { ArticleSection } from "../data/article";

export function esc(value: string | number | undefined | null): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function articleHtml(sections: ArticleSection[] | undefined): string {
  if (!sections?.length) return "";
  return sections
    .map(
      (section) =>
        `<h2>${esc(section.heading)}</h2>${section.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}`,
    )
    .join("");
}

export function cx(...names: Array<string | false | null | undefined>): string {
  return names.filter(Boolean).join(" ");
}

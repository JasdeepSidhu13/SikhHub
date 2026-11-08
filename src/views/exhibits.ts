import type { Story } from "../data/stories";
import { esc } from "../lib/html";
import { asset, href } from "../lib/paths";

export function letter(opts: { from: string; date: string; body: string; cite: string }): string {
  return `
    <figure class="letter">
      <p class="letter-meta">${esc(opts.from)}<span>${esc(opts.date)}</span></p>
      <p class="letter-body">${esc(opts.body)}</p>
      <figcaption>${esc(opts.cite)}</figcaption>
    </figure>`;
}

export function clipping(opts: {
  masthead: string;
  date: string;
  headline: string;
  deck?: string;
  body: string;
  cite: string;
}): string {
  return `
    <figure class="clipping">
      <p class="clip-mast">${esc(opts.masthead)}<span>${esc(opts.date)}</span></p>
      <h3>${esc(opts.headline)}</h3>
      ${opts.deck ? `<p class="clip-deck">${esc(opts.deck)}</p>` : ""}
      <p>${esc(opts.body)}</p>
      <figcaption>${esc(opts.cite)}</figcaption>
    </figure>`;
}

export function memorialCard(story: Story): string {
  if (!story.memorial) return "";
  const m = story.memorial;
  return `
    <div class="memorial" aria-label="${esc(m.name)}">
      <p class="memorial-kicker">${esc(story.kicker)}</p>
      <p class="memorial-name">${esc(m.name)}</p>
      <p class="memorial-fact">${esc(m.fact)}</p>
      <p class="memorial-sub">${esc(m.sub)}</p>
    </div>`;
}

export function storyFeature(story: Story, reverse = false): string {
  const mediaBlock = story.image
    ? `<figure class="photo">
         <img src="${esc(asset(story.image))}" alt="${esc(story.imageAlt ?? story.title)}" />
         <p class="figure-credit">${esc(story.imageCredit ?? "")}</p>
       </figure>`
    : memorialCard(story);

  return `
    <article class="story ${reverse ? "is-reverse" : ""}">
      <div class="story-media">${mediaBlock}</div>
      <div class="story-copy">
        <p class="kicker">${esc(story.kicker)} · ${esc(story.years)}</p>
        <h2>${esc(story.title)}</h2>
        <p class="story-lede">${esc(story.lede)}</p>
        ${story.body.map((p) => `<p>${esc(p)}</p>`).join("")}
        ${
          story.quote
            ? `<blockquote class="pull">${esc(story.quote.text)}<cite>${esc(story.quote.cite)}</cite></blockquote>`
            : ""
        }
        <p><a class="btn btn-navy" href="${href(story.href)}">${esc(story.cta)}</a></p>
      </div>
    </article>`;
}

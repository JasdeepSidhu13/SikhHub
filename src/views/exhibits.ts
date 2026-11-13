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
    <div class="memorial${m.native ? " is-portrait" : ""}" aria-label="${esc(m.name)}">
      <p class="memorial-kicker">${esc(story.kicker)}</p>
      ${m.native ? `<p class="memorial-native">${esc(m.native)}</p>` : ""}
      <p class="memorial-name">${esc(m.name)}</p>
      <p class="memorial-fact">${esc(m.fact)}</p>
      <p class="memorial-sub">${esc(m.sub)}</p>
    </div>`;
}

function ctaButton(story: Story, currentPath?: string): string {
  const loops = Boolean(currentPath && (story.href === currentPath || story.href.endsWith(currentPath)));
  const dest = loops && story.further ? story.further.href : story.href;
  const label = loops && story.further ? story.further.cta : story.cta;
  if (loops && !story.further) return "";
  const external = dest.startsWith("http");
  const url = external ? dest : href(dest);
  const attrs = external ? ' rel="noopener noreferrer" target="_blank"' : "";
  return `<p><a class="btn btn-navy${external ? " ext" : ""}" href="${esc(url)}"${attrs}>${esc(label)}</a></p>`;
}

export function furtherLinks(items: Array<{ href: string; title: string; note: string }>): string {
  return `
    <div class="further-grid">
      ${items
        .map((item) => {
          const external = item.href.startsWith("http");
          const url = external ? item.href : href(item.href);
          const attrs = external ? ' rel="noopener noreferrer" target="_blank"' : "";
          return `<a class="card" href="${esc(url)}"${attrs}><h3>${esc(item.title)}</h3><p>${esc(item.note)}</p></a>`;
        })
        .join("")}
    </div>`;
}

export function storyFeature(story: Story, reverse = false, currentPath?: string): string {
  const mediaBlock = story.image
    ? `<figure class="photo${story.memorial?.native ? " is-portrait" : ""}${story.representation ? " is-representation" : ""}">
         <img src="${esc(asset(story.image))}" alt="${esc(story.imageAlt ?? story.title)}" />
         ${
           story.memorial?.native
             ? `<figcaption class="portrait-caption"><span class="memorial-native">${esc(story.memorial.native)}</span>${esc(story.memorial.name)}</figcaption>`
             : ""
         }
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
            ? `<blockquote class="pull"${story.quote.lang ? ` lang="${esc(story.quote.lang)}"` : ""}>${esc(story.quote.text)}<cite>${esc(story.quote.cite)}</cite></blockquote>`
            : ""
        }
        ${ctaButton(story, currentPath)}
      </div>
    </article>`;
}

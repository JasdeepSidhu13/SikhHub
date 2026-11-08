import { media } from "../data/media";
import { esc } from "../lib/html";
import { asset, href, routes } from "../lib/paths";

export function genocideInfographic(): string {
  return `
    <section class="infographic" aria-label="1984 Sikh genocide at a glance">
      <p class="kicker">Infographic</p>
      <h2>The 1984 Sikh genocide, at a glance</h2>
      <p class="ig-lead">Organised massacre of Sikhs, 31 October–4 November 1984, after the assassination of Indira Gandhi. Not a riot. The Delhi High Court called it a crime against humanity. Justice R. K. Gauba recorded that genocide had been proved.</p>
      <div class="ig-stats">
        <div class="ig-stat"><b>4 days</b><span>31 Oct–4 Nov 1984</span></div>
        <div class="ig-stat"><b>~8,000</b><span>killed, independent estimates</span></div>
        <div class="ig-stat"><b>Marked lists</b><span>Sikh homes and shops targeted</span></div>
        <div class="ig-stat"><b>40 years</b><span>to a 2025 life sentence</span></div>
      </div>
      <ol class="ig-days">
        <li><time>31 Oct</time> Assassination at 9:16 a.m. Attacks begin outside AIIMS. Congress leaders leave with the slogan “blood for blood.” Doordarshan later broadcasts the chant.</li>
        <li><time>1 Nov</time> Mobs arrive with kerosene, rods, and lists. Local Congress politicians and police are seen directing attacks. Delhi and cities beyond are burning.</li>
        <li><time>2 Nov</time> The killing spreads through resettlement colonies and the northern “cow-belt.” Sikh businesses are selected while neighbours are left standing.</li>
        <li><time>3–4 Nov</time> Trilokpuri, Kalyanpuri, Sultanpuri, and other colonies are emptied of Sikh men. Widows and children are pushed into camps. Sexual violence is organised, not incidental.</li>
      </ol>
      <p class="figure-credit">Sequence and figures drawn from the <a href="${href(routes.document("archive-1984"))}">1984 Sikh Archive</a>, Delhi High Court 2018, and Geoffrey Robertson QC’s independent estimate of about eight thousand dead. Official counts have been lower.</p>
    </section>
  `;
}

export function reorgInfographic(): string {
  return `
    <section class="infographic infographic-map" aria-label="Punjab reorganisation 1966">
      <p class="kicker">Infographic</p>
      <h2>1966: a state won, a capital withheld</h2>
      <div class="ig-map">
        <div class="ig-tile ig-punjab"><strong>Punjab</strong><span>Punjabi-speaking remainder</span></div>
        <div class="ig-tile"><strong>Haryana</strong><span>New Hindi-speaking state</span></div>
        <div class="ig-tile"><strong>Himachal</strong><span>Specified hill territories</span></div>
        <div class="ig-tile ig-hold"><strong>Chandigarh UT</strong><span>Shared capital — still withheld</span></div>
      </div>
      <p class="figure-credit">Punjab Reorganisation Act, 1 November 1966. Bhakra–Beas went under central arrangements. A 1970 transfer announcement, and the 1985 Accord, repeated the capital promise. It was not kept.</p>
    </section>
  `;
}

export function figure(item: { src: string; alt: string; credit: string }, caption?: string): string {
  return `
    <figure class="photo">
      <img src="${esc(asset(item.src))}" alt="${esc(item.alt)}" loading="lazy" />
      ${caption ? `<figcaption>${esc(caption)}</figcaption>` : ""}
      <p class="figure-credit">${esc(item.credit)}</p>
    </figure>
  `;
}

export function pherumanInfographic(): string {
  return `
    <section class="infographic" aria-label="Darshan Singh Pheruman's 74-day fast">
      <p class="kicker">15 August–27 October 1969</p>
      <h2>Seventy-four days</h2>
      <p class="ig-lead">Darshan Singh Pheruman, freedom fighter and former Rajya Sabha member, fasted unto death so Chandigarh and left-out Punjabi-speaking areas would go to Punjab. He died on day 74. The capital is still a Union Territory.</p>
      <div class="ig-stats">
        <div class="ig-stat"><b>1924</b><span>Led a shahidi jatha at Jaito</span></div>
        <div class="ig-stat"><b>1966</b><span>Punjab created without Chandigarh</span></div>
        <div class="ig-stat"><b>74</b><span>days without food</span></div>
        <div class="ig-stat"><b>1986</b><span>Accord date that also passed</span></div>
      </div>
      <ol class="ig-days">
        <li><time>15 Aug</time> Fast begins in custody after arrest under the Punjab Security Act. He had announced it from Independence Day, to redeem an ardas sworn at the Akal Takht.</li>
        <li><time>27 Aug</time> Moved to the Government Hospital, Amritsar, under police guard. He refuses all feeding.</li>
        <li><time>27 Oct</time> Day 74. He writes to the Prime Minister that a Sikh is bound by Ardas. Sant Fateh Singh visits with flowers. Pheruman dies the same day.</li>
        <li><time>28 Oct</time> Hartal across Punjab. The Hindu records closed offices, mourning processions, and an army alert “as a routine precaution.”</li>
      </ol>
    </section>
  `;
}

export function genocideGallery(): string {
  return `
    <div class="gallery">
      ${figure(media.witnesses, "Widows of Sikhs killed in Delhi during the 1984 Sikh genocide.")}
      ${figure(media.day31)}
      ${figure(media.day1)}
      ${figure(media.day2)}
    </div>
    <p class="figure-credit">Day graphics and photograph via the <a href="https://1984sikh-archive.org/" rel="noopener noreferrer" target="_blank">1984 Sikh Archive</a>. Open the archive for affidavits, further photographs, and the full day-by-day record.</p>
  `;
}

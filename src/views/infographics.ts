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
        <div class="ig-stat"><b>8–17k</b><span>killed, independent estimates</span></div>
        <div class="ig-stat"><b>Marked lists</b><span>Sikh homes and shops targeted</span></div>
        <div class="ig-stat"><b>40 years</b><span>to a 2025 life sentence</span></div>
      </div>
      <ol class="ig-days">
        <li><time>31 Oct</time> Assassination at 9:16 a.m. Attacks begin outside AIIMS. Congress leaders leave with the slogan “blood for blood.” Doordarshan later broadcasts the chant.</li>
        <li><time>1 Nov</time> Mobs arrive with kerosene, rods, and lists. Local Congress politicians and police are seen directing attacks. Delhi and cities beyond are burning.</li>
        <li><time>2 Nov</time> The killing spreads through resettlement colonies and the northern “cow-belt.” Sikh businesses are selected while neighbours are left standing.</li>
        <li><time>3–4 Nov</time> Trilokpuri, Kalyanpuri, Sultanpuri, and other colonies are emptied of Sikh men. Widows and children are pushed into camps. Sexual violence is organised, not incidental.</li>
      </ol>
      <p class="figure-credit">Sequence from the <a href="${href(routes.document("archive-1984"))}">1984 Sikh Archive</a> and Delhi High Court 2018. Independent death estimates are a range, not a single figure: about 8,000 (Geoffrey Robertson QC; <em>The Economist</em>), about 10,000 (Khushwant Singh), and as high as about 17,000. Official Delhi count: 2,733. The Archive records that trains, other cities, and mass cremations were left out of that count, so even 8,000 may understate.</p>
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

export function raid1955Infographic(): string {
  return `
    <section class="infographic" aria-label="Police raid on Harmandir Sahib, 3–4 July 1955">
      <p class="kicker">3–4 July 1955</p>
      <h2>The first police action at the Golden Temple in independent India</h2>
      <p class="ig-lead">Punjab Police, under DIG Ashwani Kumar and Chief Minister Bhim Sen Sachar, entered Sri Harmandir Sahib in shoes, stopped the langar, and fired tear gas into the parikrama and the sarovar. The Tribune named it the first such action since independence. Sangat Singh called it the first sacrilege by a Congress government.</p>
      <div class="ig-stats">
        <div class="ig-stat"><b>Shoes</b><span>on the marble of the Guru’s house</span></div>
        <div class="ig-stat"><b>Tear gas</b><span>in the parikrama and the sarovar</span></div>
        <div class="ig-stat"><b>~12,000</b><span>jailed in the 64-day morcha</span></div>
        <div class="ig-stat"><b>No inquiry</b><span>Sachar later apologised at the Akal Takht</span></div>
      </div>
      <ol class="ig-days">
        <li><time>Midnight</time> Head Granthi Giani Bhupinder Singh and Akal Takht Jathedar Giani Achhar Singh are arrested at their homes.</li>
        <li><time>3–4 a.m.</time> Armed police raid Guru Ram Das Sarai. Hundreds of sleeping pilgrims and jatha members are taken away in trucks. SGPC and Akali offices are emptied.</li>
        <li><time>Dawn</time> DIG Ashwani Kumar leads police into the complex in shoes. Langar is stopped. Utensils are taken. The main gate is closed.</li>
        <li><time>Midday</time> Police advance on Manji Sahib with lathis, guns and tear gas. Thousands of Sikhs sit down in their path. Shells fall in the parikrama and in the holy tank.</li>
      </ol>
      <p class="figure-credit">Sequence from the SGPC history of the 1955 morcha, Gurmit Singh, J. S. Grewal, The Tribune, and the Indian Express reconstruction of 4 July 2021. Police put that day’s arrests at 237. The Akali Dal said at least two Sikhs were killed by fire.</p>
    </section>
  `;
}

export function raid1955Gallery(): string {
  return `
    <div class="gallery">
      ${figure(media.aerial, "The complex police entered: Harmandir Sahib, the sarovar, and the parikrama.")}
      ${figure(media.causeway, "The marble path. On 4 July 1955 police walked it in shoes.")}
      ${figure(media.akalSquare, "The square before the Akal Takht, about 1924. Its Jathedar was arrested at home before the raid.")}
      ${figure(media.harmandir, "Sri Harmandir Sahib. Tear-gas shells fell in the tank that holds this house.")}
    </div>
    <p class="figure-credit">Historic photographs of the shrine. Contemporaneous action photographs of the 1955 raid are not in the public commons; the SGPC later displayed the tear-gas shells themselves at Manji Sahib.</p>
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

export function disappearancesInfographic(): string {
  return `
    <section class="infographic" aria-label="Punjab disappearances, 1984–1995">
      <p class="kicker">1984–1995</p>
      <h2>Alive or dead?</h2>
      <p class="ig-lead">After Blue Star and the 1984 Sikh genocide, Punjab Police ran a decade of abduction, torture, fake encounters, and secret cremations. Families were left to ask a question the state still will not answer. Ensaaf’s method continues Khalra’s: name the dead from the papers, and from the people who remain.</p>
      <div class="ig-stats">
        <div class="ig-stat"><b>2,097</b><span>illegal cremations India admitted in Amritsar district</span></div>
        <div class="ig-stat"><b>4,466</b><span>unlawful killings Ensaaf has documented</span></div>
        <div class="ig-stat"><b>848</b><span>enforced disappearances Ensaaf has documented</span></div>
        <div class="ig-stat"><b>~25,000</b><span>taken by violence — Ensaaf’s working figure, still a fraction</span></div>
      </div>
      <ol class="ig-days">
        <li><time>16 Jan 1995</time> Khalra and Dhillon release official cremation-ground records from three grounds in Amritsar. The dead are listed unidentified, unclaimed.</li>
        <li><time>6 Sep 1995</time> Punjab Police abduct Jaswant Singh Khalra. He is tortured for weeks, killed in late October, and dumped in the Harike canal.</li>
        <li><time>Dec 1996</time> The CBI, ordered by the Supreme Court, reports 2,097 illegal cremations in that one district. The report is sealed. Victim families are kept out.</li>
        <li><time>Now</time> Killers of Khalra have been convicted. The thousands he named have not been accounted for. Enforced disappearance continues until the fate of the person is told.</li>
      </ol>
      <p class="figure-credit">Figures from the CBI report quoted by the Supreme Court (2,097); HRW/Ensaaf, <em>Protecting the Killers</em> (2007); and Ensaaf’s public documentation (4,466 killings, 848 disappearances). Khalra spoke of more than 6,000 cremations in Amritsar district alone.</p>
    </section>
  `;
}

export function disappearancesGallery(): string {
  return `
    <div class="gallery">
      ${figure(media.ensaafMother, "A survivor holds the portrait of a relative the police took.")}
      ${figure(media.gurmeetKaur, "Gurmeet Kaur, abducted from her home in 1992. The papers called it an encounter.")}
      ${figure(media.nirmalSingh, "A family holds the photograph they have left.")}
      ${figure(media.charanjitKaur, "Charanjit Kaur’s son, shot by police on his way from school.")}
    </div>
    <p class="figure-credit">Photographs via <a href="https://www.ensaaf.org/article/our-voices-matter" rel="noopener noreferrer" target="_blank">Ensaaf, Our Voices Matter</a> and <a href="https://www.ensaaf.org/stories" rel="noopener noreferrer" target="_blank">Ensaaf stories</a>. Shared by survivors.</p>
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

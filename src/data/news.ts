export type NewsKind = "issue" | "achievement" | "pilgrimage" | "institution";

export interface NewsItem {
  id: string;
  kind: NewsKind;
  date: string;
  headline: string;
  dek: string;
  source: string;
  url: string;
  image: string;
  imageAlt: string;
  themeIds?: string[];
}

export interface NewsWeek {
  id: string;
  start: string;
  label: string;
  kicker: string;
  summary: string;
  items: NewsItem[];
}

export const NEWS_KIND_LABEL: Record<NewsKind, string> = {
  issue: "Sikh issue",
  achievement: "Achievement",
  pilgrimage: "Pilgrimage",
  institution: "Institution",
};

export const newsWeeks: NewsWeek[] = [
  {
    id: "2026-w47",
    start: "2026-11-16",
    label: "Week of 16 November 2026",
    kicker: "News",
    summary:
      "A Manhattan court sentenced a man to nineteen years for the plot to kill a Sikh on American soil. Bhai Amritpal Singh, MP for Khadoor Sahib, was brought out of Dibrugarh for three hours, then sent back. Guru Nanak’s parkash is days away. Kartarpur is still shut.",
    items: [
      {
        id: "gupta-pannun-sentence-2026",
        kind: "issue",
        date: "20 November 2026",
        headline: "Nineteen years for the plot to kill a Sikh on American soil",
        dek: "A Manhattan federal court sentenced Nikhil Gupta to 235 months — nineteen years and seven months — for a murder-for-hire plot against Gurpatwant Singh Pannun, a U.S. citizen and Sikh political activist. The U.S. Department of Justice said Gupta worked at the direction of an Indian government employee. India denies involvement. The target was a Sikh. The sentence is on the record.",
        source: "U.S. Department of Justice",
        url: "https://www.justice.gov/opa/pr/indian-national-sentenced-over-19-years-prison-plotting-assassinate-us-citizen-new-york-city",
        image: "/media/nishan-harmandir.jpg",
        imageAlt: "Nishan Sahib at Sri Harmandir Sahib, Amritsar",
      },
      {
        id: "amritpal-parole-2026",
        kind: "issue",
        date: "21 November 2026",
        headline: "Bhai Amritpal Singh was brought out of Dibrugarh — for three hours",
        dek: "The Khadoor Sahib MP, held in Assam since 2023, was taken under escort to Jallupur Khera to attend Mata Charan Kaur’s cremation. The court allowed noon to 3 p.m. He did not address the sangat. By 2:35 p.m. police had him on the road back to Amritsar airport and Dibrugarh Central Jail. An MP. A funeral. Then the same cell.",
        source: "The New Indian Express",
        url: "https://www.newindianexpress.com/india/2026/Nov/21/amritpal-returns-to-dibrugarh-custody-after-attending-grandmothers-cremation",
        image: "/media/jaito-jatha.jpg",
        imageAlt: "A Sikh jatha taking blessing at the Akal Takht, about 1924",
      },
      {
        id: "nankana-visas-2026",
        kind: "pilgrimage",
        date: "21 November 2026",
        headline: "3,091 Indian Sikhs cleared for Nankana Sahib",
        dek: "Pakistan issued visas for Guru Nanak’s 557th parkash. The jatha crosses Wagah on 22 November. The main diwan is at Gurdwara Janam Asthan on the 24th. Kartarpur is on the itinerary for the 27th — by road, because the corridor is still closed.",
        source: "Hindustan Times",
        url: "https://www.hindustantimes.com/cities/chandigarh-news/pak-issues-visas-to-over-3k-sikh-pilgrims-101795202132634.html",
        image: "/media/gurdwaras/nankana.jpg",
        imageAlt: "Gurdwara Janam Asthan, Nankana Sahib, at dusk",
        themeIds: ["shrine-control"],
      },
      {
        id: "kartarpur-still-shut",
        kind: "issue",
        date: "18–20 November 2026",
        headline: "Kartarpur is still shut. Prakash Purab is this week.",
        dek: "The visa-free corridor to Guru Nanak’s last home has been closed since May 2025. A BJP spokesman said it may reopen when the border is ‘conducive’ — and gave no date. The Akal Takht Jathedar and the SGPC asked that it be opened for this parkash. The sangat prays for darshan. The gate is a policy.",
        source: "The Times of India",
        url: "https://timesofindia.indiatimes.com/city/amritsar/kartarpur-corridor-may-reopen-when-border-situation-improves-indicates-bjp-leader/articleshow/135961373.cms",
        image: "/media/gurdwaras/kartarpur.jpg",
        imageAlt: "Gurdwara Darbar Sahib Kartarpur, Guru Nanak’s last home",
        themeIds: ["shrine-control"],
      },
      {
        id: "dhami-sixth-term",
        kind: "institution",
        date: "20 November 2026",
        headline: "Harjinder Singh Dhami elected SGPC president for a sixth term",
        dek: "Unanimous, at Teja Singh Samundri Hall, in the presence of Guru Granth Sahib. 112 members sat. He named a Sikh centre in the United States, the Ravidas centenary, and Amritsar’s 450th year. The house then turned to prisoners, Kartarpur, and a capital still withheld.",
        source: "The Indian Express",
        url: "https://indianexpress.com/article/cities/chandigarh/harjinder-singh-dhami-re-elected-sgpc-president-sixth-term-10971966/",
        image: "/media/akal-takht.jpg",
        imageAlt: "The Akal Takht and Sri Harmandir Sahib, Amritsar",
        themeIds: ["shrine-control"],
      },
    ],
  },
  {
    id: "2026-w45",
    start: "2026-11-02",
    label: "Weeks of 2–9 November 2026",
    kicker: "Earlier this month",
    summary:
      "The 1984 Sikh genocide’s anniversary. Bandi Chhor Divas. Survivors said justice has not come. The Jathedar said the prisoners have not come out. November is not a commemoration only.",
    items: [
      {
        id: "dhami-1984-anniversary",
        kind: "issue",
        date: "2 November 2026",
        headline: "SGPC president: the scars of 1984 are still fresh. Justice has not come.",
        dek: "Harjinder Singh Dhami called the November killings a blot on the largest democracy, carried out with the patronage of the then Congress government. Families still wait. SikhHub records those days as the 1984 Sikh genocide. The Nand Nagri affidavits are in this archive.",
        source: "The Tribune",
        url: "https://www.tribuneindia.com/news/amritsar/scars-of-84-riots-still-fresh-justice-yet-to-be-delivered-sgpc-chief/",
        image: "/media/1984-witnesses.jpg",
        imageAlt: "Widows of Sikhs killed in Delhi during the 1984 Sikh genocide",
        themeIds: ["november-1984"],
      },
      {
        id: "bandi-chhor-2026",
        kind: "issue",
        date: "9 November 2026",
        headline: "On Bandi Chhor Divas the Jathedar asked for the Bandi Singhs",
        dek: "From the Darshani Deori, Giani Kuldeep Singh Gargaj tied Guru Hargobind’s release of 52 kings to the prisoners still held. If governments will not act, he said, the SGPC must plan with the Panth. He also asked for Kartarpur to be opened.",
        source: "Hindustan Times",
        url: "https://www.hindustantimes.com/cities/chandigarh-news/on-bandi-chhor-divas-akal-takht-jathedar-calls-for-panthic-unity-release-of-sikh-prisoners-101794224877880.html",
        image: "/media/harmandir.jpg",
        imageAlt: "Sri Harmandir Sahib at night, Amritsar",
        themeIds: ["shrine-control"],
      },
      {
        id: "zakhm-84-survivors",
        kind: "issue",
        date: "5 November 2026",
        headline: "Survivors said, again, that 1984 has no accounting",
        dek: "Nirpreet Kaur and Atma Singh Lubana spoke at a Punjab meeting on the 42-year delay. H. S. Phoolka recalled Nanavati, Sajjan Kumar, Jagdish Tytler. SikhHub does not take a party’s platform as the verdict. The Delhi High Court already named crimes against humanity. The papers follow.",
        source: "The Times of India",
        url: "https://timesofindia.indiatimes.com/city/chandigarh/bjp-meet-on-1984-riots-questions-justice-delay-challenges-rahul/articleshow/135550830.cms",
        image: "/media/ensaaf-mother.jpg",
        imageAlt: "A Sikh woman in Punjab holding a painted portrait of a disappeared relative",
        themeIds: ["november-1984"],
      },
    ],
  },
];

export const currentNewsWeek = newsWeeks[0];

export function newsItemById(id: string): NewsItem | undefined {
  return newsWeeks.flatMap((week) => week.items).find((item) => item.id === id);
}

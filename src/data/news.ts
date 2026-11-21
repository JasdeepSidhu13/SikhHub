export type NewsKind = "issue" | "achievement" | "pilgrimage" | "institution";

export interface NewsItem {
  id: string;
  kind: NewsKind;
  date: string;
  headline: string;
  dek: string;
  source: string;
  url: string;
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
    kicker: "This week in the Panth",
    summary:
      "Guru Nanak’s parkash is days away. Three thousand pilgrims are cleared for Nankana Sahib. Kartarpur is still shut. The SGPC house again named Bandi Singhs and Chandigarh. The century and the week are the same argument.",
    items: [
      {
        id: "nankana-visas-2026",
        kind: "pilgrimage",
        date: "21 November 2026",
        headline: "3,091 Indian Sikhs cleared for Nankana Sahib",
        dek: "Pakistan issued visas for Guru Nanak’s 557th parkash. The jatha crosses Wagah on 22 November. The main diwan is at Gurdwara Janam Asthan on the 24th. Kartarpur is on the itinerary for the 27th — by road, because the corridor is still closed.",
        source: "Hindustan Times",
        url: "https://www.hindustantimes.com/cities/chandigarh-news/pak-issues-visas-to-over-3k-sikh-pilgrims-101795202132634.html",
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
        themeIds: ["shrine-control"],
      },
      {
        id: "bandi-singhs-house-2026",
        kind: "issue",
        date: "20 November 2026",
        headline: "The SGPC house asked again for the Bandi Singhs",
        dek: "Release those who have served their sentences. Ask Akal Takht Sahib for directions on Bhai Balwant Singh Rajoana’s mercy petition — which he has asked to be withdrawn. Prolonged incarceration, the house said, is producing alienation. Bandi Chhor Divas was eleven days ago. The prisoners are still inside.",
        source: "Babushahi",
        url: "https://babushahi.com/full-news.php?id=230103",
      },
      {
        id: "chandigarh-again-2026",
        kind: "issue",
        date: "20 November 2026",
        headline: "Chandigarh, river waters, BBMB: the house named what is still withheld",
        dek: "The SGPC condemned Union interference in Punjab’s river waters, in Chandigarh, and in the Bhakra Beas board. Darshan Singh Pheruman died on the 74th day of a fast for that capital. It is 2026. The capital is still not Punjab’s. The papers are in this archive.",
        source: "The Indian Express",
        url: "https://indianexpress.com/article/cities/chandigarh/harjinder-singh-dhami-re-elected-sgpc-president-sixth-term-10971966/",
        themeIds: ["chandigarh", "waters"],
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
        themeIds: ["november-1984"],
      },
    ],
  },
];

export const currentNewsWeek = newsWeeks[0];

export function newsItemById(id: string): NewsItem | undefined {
  return newsWeeks.flatMap((week) => week.items).find((item) => item.id === id);
}

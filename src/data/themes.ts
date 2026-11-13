import type { Theme } from "./types";

export const themes: Theme[] = [
  {
    id: "shrine-control",
    title: "Who controls the Guru's house",
    kicker: "Gurdwara reform",
    summary:
      "Mahants treated historic shrines as estates. The Panth answered with the SGPC, the Akali morchas, and the 1925 Act.",
    sikhReading:
      "A gurdwara is not a private franchise. Land, offerings and worship belong to the Panth. Nankana Sahib is the price paid for that principle; the 1925 Act is its legal form. Later state entries into Harmandir Sahib — 1955, 1984 — are read against this founding claim.",
    evidence:
      "SGPC institutional history; Sahni; Sikh Gurdwaras Act; High Court retrospective of Nankana; Jaito photographs.",
    chapterIds: ["shrine"],
    sourceIds: [
      "sgpc-about",
      "sahni-archive",
      "gurdwaras-act",
      "nankana-sikhitihas",
      "nankana-express",
      "jaito-photo",
    ],
    eventIds: ["mahant-era", "sgpc-formed", "nankana", "keys-jaito"],
  },
  {
    id: "identity-hinduism",
    title: "Sikhism as a separate religion",
    kicker: "Definition",
    summary:
      "Gandhi repeatedly described Sikhism as part of Hinduism — in 1925, in 1940, and in December 1947 — after having condemned the Nankana massacre.",
    sikhReading:
      "If the Gurus' path is a Hindu sect, then a separate Panth, a separate electorate, and separate safeguards become communalism. Sikhs have insisted, in scripture, in the Khalsa, and in the Assembly, that they are not a variety of Hindu. Gandhi's own Collected Works are the evidence of the contrary claim. The Nishan Sahib dossier answers the claim that the Khanda is unscriptural because it is not printed in Guru Granth Sahib.",
    evidence:
      "Collected Works of Mahatma Gandhi, volume 28, item 153 (Internet Archive); later Harijan and prayer-meeting texts quoted in the history.",
    chapterIds: ["identity", "partition"],
    sourceIds: ["cwmg-28", "article-25"],
    eventIds: ["misguided-patriot", "gandhi-tara-1940", "gandhi-dec-1947"],
  },
  {
    id: "nishan-khanda",
    title: "The Nishan Sahib they want taken down",
    kicker: "Anti-Sikh narrative",
    summary:
      "Guru Granth Sahib is shabad, not a picture-book of flags. Guru Hargobind raised the Nishan at the Akal Takht in 1606. The Khalsa is born by a khanda, in the presence of that Granth. A 1714 Guru Granth Sahib manuscript already bears a Nishan. The Rehat Maryada puts a Khanda on every gurdwara flagstaff.",
    sikhReading:
      "Guru Granth Sahib is shabad — the Guru’s word. It is not a catalogue of buildings, rumalas, flagstaffs, or drawings. The Akal Takht is not printed there. The rumala is not printed there. A picture of a kirpan is not printed there. The Constitution of India still names the kirpan as part of professing the Sikh religion. Khande di pahul — the birth of the Khalsa — is performed with a khanda, in the presence of Guru Granth Sahib. A test that admits only what is drawn in the Granth would abolish the Takht, the flag, the initiation, and the visible Khalsa. The dated record does not abolish them. Guru Hargobind raised the first Nishan over the Akal Takht in 1606: Akal Dhuja, Satguru ka Nishan. Guru Gobind Singh made the Khalsa by stirring amrit with a khanda on Baisakhi 1699. Khalsa armies marched behind nishanchis. One misl was named Nishananwali because it carried the standards. In 1714 a Nishan Sahib was painted inside a Guru Granth Sahib manuscript now at Takht Kesgarh Sahib. Sikhs ask every day in Ardas that the flags stand forever. The Sikh Rehat Maryada requires a Nishan Sahib at every gurdwara, xanthic or greyish-blue, with a spearhead or a Khanda on the post. The emblem on the cloth — khanda, chakra, two kirpans — is miri-piri in steel. The objection that the Khanda is “not in Guru Granth Sahib” is not a reading of scripture. It is a demand that the Khalsa cannot be seen from the road.",
    evidence:
      "Encyclopaedia of Sikhism (Nishan Sahib; Pahul); Sikh Rehat Maryada, official English (Nishan Sahib and Khanda on the post); 1714 Guru Granth Sahib manuscript folio at Takht Kesgarh Sahib; Sikh Museum chronicle of Nishan Sahibs in Prachin Panth Prakash.",
    chapterIds: ["identity"],
    sourceIds: [
      "encyclopedia-nishan",
      "encyclopedia-pahul",
      "encyclopedia-symbols",
      "rehat-maryada",
      "commons-nishan-folio",
      "commons-nishan-harmandir",
      "sikhmuseum-nishan",
    ],
    eventIds: ["nishan-1606", "khande-pahul-1699", "nishan-folio-1714", "rehat-nishan-1945"],
  },
  {
    id: "gurmukhi",
    title: "Punjabi and Gurmukhi",
    kicker: "Language",
    summary:
      "Gandhi recognised that Sikhs would die for Punjabi in Gurmukhi and still called the script inelegant. Census campaigns later asked Punjabi-speaking Hindus to return Hindi.",
    sikhReading:
      "Gurmukhi is the script of Guru Granth Sahib. Language politics in Punjab were never a neutral census technicality. They were a way to deny a Punjabi-speaking state, and a way to peel Sikh identity off the land.",
    evidence:
      "Gandhi–Nehru letter, 3 August 1937 (Collected Works, volume 66, Internet Archive); 1951 and 1961 census politics.",
    chapterIds: ["identity", "suba"],
    sourceIds: ["cwmg-66"],
    eventIds: ["gandhi-gurmukhi", "src-rejects", "fasts-census"],
  },
  {
    id: "assurances",
    title: "Assurances and the Constitution",
    kicker: "Citizenship",
    summary:
      "Congress promised fair treatment. Hukam Singh told the Assembly that safeguards had not been delivered and that Sikhs could not assent. He and Mann did not sign.",
    sikhReading:
      "Sikh participation in the Constituent Assembly was solicited on the strength of prior assurances. When those assurances were not converted into political protection, the honest act was to say so on the record — not to pretend consensus.",
    evidence:
      "CAD 14 October and 21 November 1949; ThePrint profile; Sikhitihas on the refusal to sign; Sarsfield foreword on the Cabinet Mission.",
    chapterIds: ["identity", "partition"],
    sourceIds: ["cad-21-nov", "cad-14-oct", "sarsfield", "theprint-hukam", "sikhitihas-constitution"],
    eventIds: ["congress-assurances", "hukam-singh-1949", "akali-conference-1949"],
  },
  {
    id: "article-25",
    title: "Article 25: kirpan and Explanation II",
    kicker: "Constitution",
    summary:
      "The Constitution recognises the kirpan as part of Sikh profession. In the same article, Explanation II groups Sikhs with Hindus for one reform clause.",
    sikhReading:
      "These are two different sentences. The kirpan clause is a recognition. Explanation II is a classification Sikhs have objected to because it can be read as folding them into Hinduism for law. Do not use one to cancel the other.",
    evidence: "Constitution of India, Article 25, Explanations I and II — official text.",
    chapterIds: ["partition"],
    sourceIds: ["article-25" ],
    eventIds: ["hukam-singh-1949"],
  },
  {
    id: "partition-citizenship",
    title: "Partition and lost shrines",
    kicker: "1947",
    summary:
      "Punjab was divided. Nankana Sahib and other historic gurdwaras remained in Pakistan. Sikh displaced families entered a republic whose constitution their representatives would not sign.",
    sikhReading:
      "Sikhs opposed inclusion in Pakistan and paid for the division of Punjab. The “glow of freedom” they were promised in the north was political language. The terms of citizenship that followed are in chapters 03 and 04.",
    evidence: "Sarsfield/Tara Singh; Hukam Singh; SGPC white paper on reported Nehru assurances (treat as broad political language).",
    chapterIds: ["partition"],
    sourceIds: ["sarsfield", "cad-21-nov", "truth-punjab"],
    eventIds: ["partition-1947"],
  },
  {
    id: "punjabi-suba",
    title: "Punjabi Suba",
    kicker: "Language and territory",
    summary:
      "A Punjabi-speaking state was demanded as linguistic recognition and as Sikh political security. It was conceded in 1966 without its capital and without its rivers.",
    sikhReading:
      "After Partition, Punjabi Suba was the remaining territorial expression of Sikh security in India. Nehru's private letters show that even an SGPC electoral mandate would not move him. The 1966 Act is therefore both a victory and a truncation.",
    evidence: "Nehru–Kairon correspondence; Punjab Reorganisation Act; Regional Formula; census studies.",
    chapterIds: ["suba"],
    sourceIds: ["punjab-reorg", "kaka-pdl", "commons-tara"],
    eventIds: ["punjabi-suba-demand", "kaka-inderjit", "reorg-act", "nehru-kairon-1959"],
  },
  {
    id: "chandigarh",
    title: "Chandigarh withheld",
    kicker: "Capital",
    summary:
      "1966 made Chandigarh a Union Territory. 1970 announced a transfer. 1985 promised it again for January 1986. It remains a shared capital.",
    sikhReading:
      "Pheruman died on a fast for this. The Rajiv–Longowal Accord put a date on it. The date passed. A capital withheld is not a misunderstanding. It is a sequence of written commitments that were not performed.",
    evidence: "Punjab Reorganisation Act; Home Ministry 1969–70 (1970 announcement); Rajiv–Longowal Accord text.",
    chapterIds: ["suba", "bluestar"],
    sourceIds: ["punjab-reorg", "longowal-accord", "truth-punjab", "pheruman-hindu", "pheruman-sikhitihas", "pheruman-portrait"],
    eventIds: ["reorg-act", "pheruman", "chandigarh-1970", "accord-1985"],
  },
  {
    id: "golden-temple-1955",
    title: "The 1955 raid on Harmandir Sahib",
    kicker: "3–4 July 1955",
    summary:
      "Punjab Police entered Sri Harmandir Sahib in shoes, stopped the langar, and fired tear gas into the parikrama and the sarovar. It was the first police action at the Golden Temple in independent India. No judicial inquiry followed.",
    sikhReading:
      "The night of 3–4 July 1955 is its own crime, eight years after independence, under Chief Minister Bhim Sen Sachar. DIG Ashwani Kumar led police onto the marble in shoes. The Head Granthi and the Akal Takht Jathedar were taken from their homes. Guru Ram Das Sarai was emptied of sleeping pilgrims. Langar was stopped. Tear-gas shells fell in the parikrama and in the holy tank. The Tribune called it the first such action since independence. Sangat Singh called it the first sacrilege by a Congress government. Dilgeer later called it a dress rehearsal for June 1984. The Akali demand for a judicial inquiry was refused. Sachar’s apology at the Akal Takht did not produce one. The raid has its own papers. Read those before folding 1955 into Nankana 1921 or into June 1984.",
    evidence:
      "SGPC history of the 1955 morcha (Karam Singh Zakhmi, revised by Harjinder Singh Dilgeer); Gurmit Singh; J. S. Grewal; Sangat Singh; The Tribune; The Indian Express reconstruction of 4 July 2021; Sikhitihas sourced event pages.",
    chapterIds: ["partition", "suba"],
    sourceIds: [
      "sikhitihas-1955",
      "sikhitihas-morcha-1955",
      "express-1955",
      "express-1955-shells",
      "tribune-1955",
      "zakhmi-pdl",
      "commons-aerial",
    ],
    eventIds: ["slogan-ban-1955", "golden-temple-1955", "slogan-lift-1955", "sachar-apology-1955"],
  },
  {
    id: "waters",
    title: "Rivers, Bhakra and the SYL canal",
    kicker: "Resources",
    summary:
      "The 1966 Act placed Bhakra–Beas under central arrangements. In 1982 canal construction at Kapoori became a core Akali grievance.",
    sikhReading:
      "Riparian principle is not mysticism. Punjab's rivers irrigate Punjab. The Dharam Yudh Morcha's water demand was the economic half of Anandpur, not a religious extra. Official narratives that ignore SYL misdescribe the agitation.",
    evidence: "Reorganisation Act §§78–80; SGPC white paper; Anandpur text; Kapoori chronology.",
    chapterIds: ["suba", "bluestar"],
    sourceIds: ["punjab-reorg", "truth-punjab" ],
    eventIds: ["reorg-act", "kapoori-syl", "dharam-yudh"],
  },
  {
    id: "autonomy",
    title: "Anandpur and state autonomy",
    kicker: "Federalism",
    summary:
      "The 1973 resolution sought a centre limited to defence, foreign affairs, currency and communications, plus Punjab's territorial and religious claims.",
    sikhReading:
      "Anandpur is the political programme of unfinished 1966 business. Critics heard secession in “qaum.” The Accord of 1985 recorded the Akali position that the resolution was inside the Constitution and meant to strengthen the union by making it federal. That text is still available.",
    evidence: "Longowal-authenticated Anandpur text; Ludhiana 1978; Memorandum of Settlement clause 8.",
    chapterIds: ["bluestar"],
    sourceIds: ["anandpur-pdf", "longowal-accord", "truth-punjab"],
    eventIds: ["anandpur-1973", "dharam-yudh"],
  },
  {
    id: "bluestar-1984",
    title: "Operation Blue Star",
    kicker: "June 1984",
    summary:
      "The Army stormed Harmandir Sahib, killed civilians and combatants, and destroyed the Akal Takht during Guru Arjan's martyrdom days.",
    sikhReading:
      "The Akal Takht is the seat of Sikh temporal authority. An army assault on it, with pilgrims in the complex, is a wound to the Panth that no white paper can reclassify as a policing success. The SGPC paper insists the political issues were left unsolved on purpose.",
    evidence: "SGPC Truth About Punjab; GOI White Paper; HRW background; photographs of the destroyed Akal Takht.",
    chapterIds: ["bluestar"],
    sourceIds: ["truth-punjab", "white-paper-goi", "hrw-dead-silence", "commons-granth"],
    eventIds: ["blue-star", "presidents-rule"],
  },
  {
    id: "november-1984",
    title: "1984 Sikh genocide",
    kicker: "Genocide",
    summary:
      "After Indira Gandhi’s assassination, organised mobs carried out the 1984 Sikh genocide. The Delhi High Court named the killings crimes against humanity. Justice Gauba recorded that genocide had been proved. In 2025 a further life sentence arrived — forty years late.",
    sikhReading:
      "Call it by its name: the 1984 Sikh genocide. It was not a riot. Homes were marked, kerosene was stocked, police stood aside or joined in. In Nand Nagri, affidavits to the Misra Commission name the ovens: Sikhs half-roasted in a big oven, children put head-down into tandoors and burned. The High Court found political organisation and police assistance. Widows, burned gurdwaras, and decades of acquittals are the civic record. Late convictions of one politician do not close it.",
    evidence: "Delhi HC 17 Dec 2018 §367.1; Nanavati Commission; HRW; Indian Express / The Hindu, Feb 2025.",
    chapterIds: ["bluestar", "accounting"],
    sourceIds: [
      "delhi-hc-2018",
      "livelaw-cah",
      "nanavati",
      "hrw-1984",
      "express-sajjan-2025",
      "archive-1984",
      "archive-1984-toll",
      "archive-1984-tandoors",
      "who-are-guilty"
    ],
    eventIds: ["november-1984", "sajjan-2018", "sajjan-2025"],
  },
  {
    id: "disappearances",
    title: "Disappearances and cremation grounds",
    kicker: "Punjab 1980s–90s",
    summary:
      "From 1984 to 1995 Punjab Police abducted, tortured, and secretly cremated thousands. Khalra read the cremation registers. They murdered him. Families are still asking: alive or dead?",
    sikhReading:
      "The method is the indictment: families had to audit the state's own firewood purchases and cremation receipts. Children were shot in front of their houses. Mothers were taken and listed as encounters. When the investigator was killed, the state confirmed what the registers already showed. Accounting is still unfinished.",
    evidence: "HRW/Ensaaf Protecting the Killers; Dead Silence; Ensaaf documentation (4,466 unlawful killings, 848 disappearances); CBI admission of 2,097 illegal cremations in Amritsar.",
    chapterIds: ["accounting"],
    sourceIds: ["hrw-killers", "hrw-dead-silence", "ensaaf", "ensaaf-stories", "ensaaf-voices"],
    eventIds: ["khalra", "cremation-records-1995", "cbi-cremations-1996"],
  },
  {
    id: "state-violence",
    title: "State force at sacred and civic sites",
    kicker: "Pattern",
    summary:
      "Nankana 1921, tear gas in the parikrama in 1955, Blue Star 1984, November pogroms, Punjab disappearances: different decades, a recurring question of who may use force against Sikhs and their shrines.",
    sikhReading:
      "Not every episode is the same crime. The site's method is to name the actor: mahant and hired men; Punjab Police under Sachar; the Army; political mobs with police assistance; Punjab Police in the 1990s. Pattern is not a conspiracy theory. It is a timeline.",
    evidence: "Each episode is sourced in its chapter. Do not flatten them; read them in order.",
    chapterIds: ["shrine", "partition", "suba", "bluestar", "accounting"],
    sourceIds: ["nankana-sikhitihas", "sikhitihas-1955", "express-1955", "commons-aerial", "delhi-hc-2018", "hrw-killers"],
    eventIds: ["nankana", "golden-temple-1955", "blue-star", "november-1984", "khalra"],
  }
];

export const themeById = Object.fromEntries(themes.map((t) => [t.id, t]));

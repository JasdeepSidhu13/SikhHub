export interface SourceBrief {
  keyPoints: string[];
  whyItMatters: string;
  excerpt?: string;
  excerptCite?: string;
  image?: string;
  imageAlt?: string;
  imageCredit?: string;
}

export const briefs: Record<string, SourceBrief> = {
  "archive-1984": {
    keyPoints: [
      "A digital archive of the 1984 Sikh genocide: survivor testimony, photographs, affidavits, press, and court records.",
      "It documents 31 October–4 November 1984 as organised massacre, not spontaneous riot: prepared lists, kerosene, police assistance, and Congress politicians named in later judgments.",
      "Independent voices in the archive — Khushwant Singh, Cynthia Keppley Mahmood, Geoffrey Robertson QC, and Justice R. K. Gauba — use the words pogrom and genocide.",
      "Day-by-day pages reconstruct 31 October (assassination and the first attacks), 1–2 November (Delhi and the cow-belt), and the camps, widows, and sexual violence that followed.",
    ],
    whyItMatters:
      "This is the principal public collection of photographs and affidavits for the genocide. SikhHub draws images and the day sequence from it; the original site holds the full record.",
    excerpt:
      "Sikh houses and shops were marked for destruction in much the same way as those of Jews in Tsarist Russia or Nazi Germany. For the first time, I understood what words like pogrom, holocaust, and genocide really meant.",
    excerptCite: "Khushwant Singh, quoted by the 1984 Sikh Archive",
    image: "/media/1984-witnesses.jpg",
    imageAlt: "Widows of Sikhs killed in Delhi during the 1984 Sikh genocide",
    imageCredit: "Widows of Sikhs killed in Delhi, November 1984. Via 1984 Sikh Archive.",
  },
  "delhi-hc-2018": {
    keyPoints: [
      "Delhi High Court, 17 December 2018 (Muralidhar and Goel JJ.): reverses Sajjan Kumar’s acquittal for the Palam Colony killings and the burning of a gurdwara.",
      "The Court holds that the November 1984 mass killings of Sikhs answer the description of crimes against humanity.",
      "It finds the killings were engineered by political actors with the assistance of law-enforcement agencies.",
      "Justice R. K. Gauba, in related High Court language cited by the 1984 Sikh Archive, recorded that genocide as well as arson, plunder and looting had been proved.",
    ],
    whyItMatters:
      "This is the leading judicial characterisation of the 1984 Sikh genocide. It names organisation and police assistance — not a riot that got out of hand.",
    excerpt:
      "The mass killings of Sikhs between 1st and 4th November 1984 in Delhi and the rest of the country, engineered by political actors with the assistance of the law enforcement agencies, answer the description of ‘crimes against humanity’.",
    excerptCite: "Delhi High Court, State through CBI v. Sajjan Kumar, 17 December 2018",
  },
  "cad-21-nov": {
    keyPoints: [
      "On 21 November 1949, five days before the Constitution was adopted, Sardar Hukam Singh told the Constituent Assembly that Sikhs could not subscribe their assent.",
      "Bhupinder Singh Man said East Punjab Sikhs could not give the document unstinted support because minority safeguards had been dropped.",
      "Hukam Singh and Mann later refused to sign. The objection is on the official record.",
      "The protest is about political protection promised by Congress and not delivered — distinct from Article 25’s kirpan clause.",
    ],
    whyItMatters:
      "This is the Sikh constitutional dissent, spoken in the house that wrote the republic. Later Akali politics starts from this refusal, not from 1981.",
    excerpt:
      "My community cannot subscribe its assent to this historic document.",
    excerptCite: "Sardar Hukam Singh, Constituent Assembly, 21 November 1949",
  },
  sarsfield: {
    keyPoints: [
      "Landen Sarsfield’s 1946 book argued that the Cabinet Mission ignored Sikh rights while taking Muslim minority fear seriously.",
      "Master Tara Singh’s foreword is the Sikh political case at the transfer of power: Sikh anxiety in a Muslim-majority Punjab was analogous, and was not met.",
      "Partition then divided Punjab, displaced families, and left Nankana Sahib and other historic gurdwaras in Pakistan.",
    ],
    whyItMatters:
      "The title is not a later slogan. In 1946 a Sikh leader put ‘betrayal’ on the page before independence, and the settlement that followed did not answer it.",
  },
  "anandpur-satp": {
    keyPoints: [
      "The Anandpur Sahib Resolution (1973, with later Ludhiana stages) is the Akali programme of greater state autonomy, Chandigarh, river waters, territory, and Sikh religious institutions.",
      "The Longowal-authenticated English text is the version to read; later polemics often cite different drafts.",
      "The 1985 Rajiv–Longowal Accord itself recorded the Akali claim that Anandpur was within the Constitution and meant a more federal union.",
    ],
    whyItMatters:
      "Anandpur is unfinished 1966 business — a capital withheld, rivers centralised — not a secession pamphlet. Official white papers that start in 1981 skip this text.",
  },
  "hrw-killers": {
    keyPoints: [
      "Human Rights Watch and Ensaaf document arbitrary detention, torture, extrajudicial executions, and enforced disappearances in Punjab counterinsurgency.",
      "Jaswant Singh Khalra and Jaspal Singh Dhillon used cremation registers to expose thousands of secret cremations in Amritsar district.",
      "Punjab police abducted and murdered Khalra in 1995. His killers were later convicted. India admitted 2,097 illegal cremations in Amritsar.",
      "The report also records serious abuses by militants, including attacks on Hindu and Sikh civilians.",
    ],
    whyItMatters:
      "Families had to reconstruct the state’s own firewood and cremation receipts. That method is the indictment. Conviction of Khalra’s killers is not an accounting for the thousands he named.",
  },
  "cwmg-66": {
    keyPoints: [
      "On 3 August 1937 Gandhi wrote privately to Nehru about a language essay.",
      "He wrote that Sikhs ‘will die for Punjabi written in Gurmukhi’ and that ‘there is no elegance about that script.’",
      "He speculated that Gurmukhi was invented to isolate Sikhs from other Hindus, then admitted Sikhs would not give it up.",
    ],
    whyItMatters:
      "Gurmukhi is the script of Guru Granth Sahib. The letter is Gandhi’s own words: he saw Sikh attachment to the script as a problem of Hindu unity.",
    excerpt:
      "The Sikhs will die for Punjabi written in Gurmukhi. There is no elegance about that script.",
    excerptCite: "M. K. Gandhi to Jawaharlal Nehru, 3 August 1937, Collected Works, vol. 66",
  },
  nanavati: {
    keyPoints: [
      "The Justice Nanavati Commission inquired into the 1984 Sikh genocide after years of earlier, weaker inquiries.",
      "Its findings fed later CBI prosecutions, including the Palam Colony case that the Delhi High Court decided in 2018.",
      "Commissions did not substitute for convictions. Most of the organisers were never punished.",
    ],
    whyItMatters:
      "An official inquiry exists. Impunity existed beside it. Read Nanavati with the 2018 judgment and the 2025 life sentence, not instead of them.",
  },
  "article-25": {
    keyPoints: [
      "Explanation I: wearing and carrying the kirpan is part of professing the Sikh religion.",
      "Explanation II: for Article 25(2)(b) only, ‘Hindu’ includes Sikhs, Jains and Buddhists.",
      "Sikh objection to Explanation II is not a denial of the kirpan clause. They are two different sentences.",
    ],
    whyItMatters:
      "The Constitution recognises the kirpan and, in the next breath, can be read as classifying Sikhs as Hindus for one reform power. Hold both on the table.",
  },
  "gurdwaras-act": {
    keyPoints: [
      "The Sikh Gurdwaras Act, 1925, put scheduled historic gurdwaras under a statutory board and elected committees.",
      "It is the legal end of mahant control at covered shrines after Nankana, Guru Ka Bagh, and Jaito.",
      "The SGPC’s representative claim over the Guru’s house starts here.",
    ],
    whyItMatters:
      "Later state entries into Harmandir Sahib — 1955, 1984 — are read against this founding statute: the Panth, not a private estate or a ministry, governs the shrine.",
    image: "/media/harmandir.jpg",
    imageAlt: "Sri Harmandir Sahib, Amritsar",
    imageCredit: "Wikimedia Commons.",
  },
  "truth-punjab": {
    keyPoints: [
      "The SGPC white paper answers the Government of India white paper on the Punjab agitation.",
      "It places Blue Star in a longer history: SYL, Chandigarh, boundaries, and centre–state relations — not a three-year security story.",
      "It treats the 1985 Accord as a further unkept promise, not a settlement.",
    ],
    whyItMatters:
      "If you read only the government’s 1984 paper, the crisis begins in 1981. This is the Panthic ledger of what was already owed.",
  },
  "longowal-accord": {
    keyPoints: [
      "24 July 1985: Chandigarh to go to Punjab, linked to a territorial transfer to Haryana on 26 January 1986.",
      "Anandpur’s centre–state clauses referred to the Sarkaria Commission.",
      "The Chandigarh transfer did not take place. Longowal was assassinated within a month.",
    ],
    whyItMatters:
      "A written date on a promise already made in 1970, then defaulted again. The genocide and Blue Star sit on top of this ledger, not instead of it.",
  },
  "sahni-archive": {
    keyPoints: [
      "Ruchi Ram Sahni’s contemporary narrative of the gurdwara reform movement, edited by Ganda Singh for the SGPC.",
      "It records mahant control of land and offerings, Saka Nankana, the Keys, Guru Ka Bagh, and Jaito.",
    ],
    whyItMatters:
      "This is a reformer writing close to the events, not a later pamphlet. Use it with the 1925 Act.",
    image: "/media/harmandir.jpg",
    imageAlt: "Sri Harmandir Sahib, Amritsar",
    imageCredit: "Wikimedia Commons.",
  },
  "express-sajjan-2025": {
    keyPoints: [
      "25 February 2025: a Delhi court sentenced former Congress MP Sajjan Kumar to life imprisonment for the 1984 Sikh genocide murders of Jaswant Singh and Tarundeep Singh.",
      "He was already serving the 2018 High Court life term. More than forty years separated the killings from this sentence.",
    ],
    whyItMatters:
      "Late, partial accountability is still accountability — and still proof that delay was the ordinary working of the system.",
  },
  "cwmg-28": {
    keyPoints: [
      "1 October 1925, item 153, ‘Sikhism’: Gandhi replies to Sikh objections to his treatment of Guru Gobind Singh.",
      "He would have called the figures he discussed, including the Guru, ‘misguided patriots,’ given nonviolence.",
      "In the same reply he explicitly places Sikhism within Hinduism.",
    ],
    whyItMatters:
      "Sympathy at Nankana (March 1921) and this October text belong together. The religious view is in Gandhi’s own Collected Works.",
  },
  "nehru-katju-1953": {
    keyPoints: [
      "Nehru asks the Home Minister to confer with Punjab and Delhi governments on stopping Master Tara Singh’s march.",
      "He considers preventing Tara Singh’s entry into Delhi and arrest if he attempts it.",
    ],
    whyItMatters:
      "Direct Centre-level instruction against Akali organising in 1953 — the year of Master Tara Singh’s All India Sikh Conference address.",
  },
  "who-are-guilty": {
    keyPoints: [
      "PUCL and PUDR’s Who Are the Guilty? is the earliest systematic citizen inquiry into the 1984 Sikh genocide in Delhi.",
      "It named politicians, police, and the method: lists, kerosene, and the refusal of aid.",
    ],
    whyItMatters:
      "A contemporary investigation, not a later memoir. The 1984 Sikh Archive hosts a copy. Later courts walked a path this report opened.",
  },
};

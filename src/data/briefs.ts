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
      "On the death toll: official Delhi count 2,733. Robertson wrote of eight thousand butchered and burned. Khushwant Singh wrote that 10,000 would not be an exaggeration. The Archive’s body-count page treats even 8,000 nationwide as possibly still low.",
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
  "archive-1984-toll": {
    keyPoints: [
      "Official Delhi count: 2,733 (Ahuja Committee, 1987). The Sikh Forum, working with families, listed 3,870 dead in Delhi alone.",
      "Romesh Thapar, writing in December 1984, put Delhi at 6,000–8,000. Khushwant Singh later wrote that 10,000 nationwide would not be an exaggeration.",
      "The Economist (2013) used at least 8,000 nationwide. The Archive says even that may understate: trains, Kanpur, Bokaro, villages, and mass cremations were left out of the official books.",
    ],
    whyItMatters:
      "There is no single independent number. Official counts were written down to hide the scale. Independent estimates are a range, starting around 8,000 and running higher.",
    excerpt: "The figure of 10,000 Sikhs killed (more than half of them in the capital) would not be an exaggeration.",
    excerptCite: "Khushwant Singh, A History of the Sikhs, vol. 2, quoted by the 1984 Sikh Archive",
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
  "anandpur-pdf": {
    keyPoints: [
      "The Anandpur Sahib Resolution (1973, with later Ludhiana stages) is the Akali programme of greater state autonomy, Chandigarh, river waters, territory, and Sikh religious institutions.",
      "The 1985 Rajiv–Longowal Accord recorded the Akali claim that Anandpur was within the Constitution and meant a more federal union.",
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
  "ensaaf-stories": {
    keyPoints: [
      "Ensaaf’s stories page holds documentaries and interviews with families of people Punjab Police killed or disappeared between 1984 and 1995.",
      "It includes Khalra’s last international speech, the shooting of Kulwant Singh, Charanjit Kaur’s ten-year-old son, and Paramjit Kaur Khalra’s call for a truth commission.",
      "The testimonies are first-person. They are not a substitute for the cremation registers; they are what the registers left unnamed.",
    ],
    whyItMatters:
      "The disappearances page in this archive is a door. The people who lived it are on Ensaaf’s record, in their own voices.",
  },
  "ensaaf-voices": {
    keyPoints: [
      "In 2010 Ensaaf spoke with hundreds of survivors in Punjab. Many had never spoken to civil society.",
      "Our Voices Matter compiles photographs families shared: Gurmeet Kaur, Nirmal Singh (twelve years old), Jagir Kaur, and others the police listed as encounters.",
    ],
    whyItMatters:
      "A secret cremation is designed so there is no face. These photographs are what the families would not let the state erase.",
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
  "pheruman-hindu": {
    keyPoints: [
      "29 October 1969: The Hindu reported a hartal across Punjab after Darshan Singh Pheruman died on the 74th day of his fast.",
      "The demand was Chandigarh for Punjab. Government offices closed. The army was alerted as a “routine precaution.”",
    ],
    whyItMatters:
      "A contemporaneous newspaper, not a later pamphlet. The capital he died for is still a Union Territory.",
    excerpt:
      "Hartal was observed throughout Punjab today in memory of Mr. Darshan Singh Pheruman, who died in Amritsar yesterday on the 74th day of his fast for the inclusion of Chandigarh in Punjab.",
    excerptCite: "The Hindu, 29 October 1969",
  },
  "pheruman-portrait": {
    keyPoints: [
      "The only widely circulated photograph of Darshan Singh Pheruman is a studio portrait of unknown date and photographer.",
      "Wikipedia hosts the same scan as an identification image. No freely licensed original is in the public commons.",
    ],
    whyItMatters:
      "A man who died on the 74th day of a fast is still missing from most official commemorations of Punjabi Suba. The face should be on the record.",
    image: "/media/pheruman.jpg",
    imageAlt: "Studio portrait of Shaheed Darshan Singh Pheruman",
    imageCredit:
      "Darshan Singh Pheruman. Photographer unknown. Identification portrait circulated in Sikh biographical sources.",
  },
  "pheruman-sikhitihas": {
    keyPoints: [
      "Pheruman led a shahidi jatha at Jaito in 1924, sat in the Rajya Sabha, and died on 27 October 1969 after 74 days without food.",
      "He said a Sikh is bound by what he says in Ardas before his Guru — and accused Akali leaders of breaking that word over Chandigarh.",
    ],
    whyItMatters:
      "The incomplete 1966 settlement killed a freedom fighter. The later Punjab crisis did not invent Chandigarh.",
  },
  "kaka-pdl": {
    keyPoints: [
      "Panjab Digital Library accession PH-014088 is catalogued as the first martyr of the Punjabi Suba movement: Kaka Inderjit Singh, Karnal.",
      "He was killed on 21 September 1960 after raising a banned slogan. He was twelve.",
    ],
    whyItMatters:
      "The photograph is in a public archive. The first shaheed of Punjabi Suba is not a later slogan; his portrait is a record.",
  },
  "commons-tara": {
    keyPoints: [
      "Master Tara Singh photographed at Tarn Taran in March 1956, during the Punjabi Suba years.",
      "Three years earlier he had told the All India Sikh Conference that Sikh liberty had not come.",
    ],
    whyItMatters: "The face of the demand that produced a state without a capital.",
    image: "/media/tara-singh.jpg",
    imageAlt: "Master Tara Singh at Tarn Taran, March 1956",
    imageCredit: "Wikimedia Commons.",
  },
  "commons-granth": {
    keyPoints: [
      "A handwritten Guru Granth Sahib manuscript was pierced by a bullet during Operation Blue Star.",
      "The Army assault on Harmandir Sahib in June 1984 overlapped Guru Arjan’s martyrdom days. Pilgrims were in the complex.",
    ],
    whyItMatters: "The wound is not only architectural. The scripture itself was shot.",
    image: "/media/granth-bullet.jpg",
    imageAlt: "Guru Granth Sahib manuscript hit by a bullet during Operation Blue Star",
    imageCredit: "Wikimedia Commons.",
  },
  "sikhitihas-1955": {
    keyPoints: [
      "Night of 3–4 July 1955: Punjab Police raided Guru Ram Das Sarai and the SGPC offices and fired tear gas into the Golden Temple parikrama.",
      "DIG Ashwani Kumar is named as the officer in charge; Chief Minister Bhim Sen Sachar’s government held the state.",
      "The Head Granthi and the Akal Takht Jathedar were arrested at home. Sleeping pilgrims were taken in trucks. Langar was stopped.",
      "The Tribune called it the first police action at the Golden Temple in independent India. Sachar later apologised at the Akal Takht.",
    ],
    whyItMatters:
      "Blue Star was not the first state entry. 1955 is the dress rehearsal: shoes on marble, gas in the holy tank, priests in custody.",
    image: "/media/parikrama-causeway.jpg",
    imageAlt: "The marble causeway to Harmandir Sahib, the path police walked in shoes on 4 July 1955",
    imageCredit: "Wikimedia Commons. On 4 July 1955 police entered this complex in shoes.",
  },
  "express-1955": {
    keyPoints: [
      "4 a.m., 4 July 1955: DIG Ashwani Kumar led police with shoes on inside the Golden Temple.",
      "Langar was captured and stopped. Utensils were taken. Guru Ram Das Sarai was raided. Head priests were arrested.",
      "Tear-gas shells were used in the parikrama. Police put that day’s arrests at 237. About 12,000 were jailed in the slogan-ban morcha.",
      "Prints the Amritsar Section 144 order of 6 April 1955, which named the Punjabi Suba jaikara as a threat to order.",
    ],
    whyItMatters:
      "A clear, dated reconstruction of how Sikhs were treated in their own shrine for shouting the name of a linguistic state.",
    excerpt:
      "It was at 4 am on July 4, 1955 that Deputy Inspector General of Police Ashwani Kumar led the police with shoes on inside the Golden Temple premises.",
    excerptCite: "The Indian Express, 4 July 2021",
  },
  "sikhitihas-morcha-1955": {
    keyPoints: [
      "The first mass Punjabi Suba morcha ran from 10 May to 12 July 1955 against the slogan ban.",
      "About 12,000 men and women were jailed in 64 days; the SGPC count includes 417 women.",
      "The 3–4 July raid sits inside that morcha, not as a later, separate war.",
      "Sachar lifted the ban on 12 July and apologised at the Akal Takht on 10 November 1955.",
    ],
    whyItMatters:
      "The raid has a before and after: a banned slogan, a 64-day jail, no inquiry. The state that was demanded still had no capital eleven years later.",
  },
  "tribune-1955": {
    keyPoints: [
      "The Tribune reports the SGPC congregation at Manji Sahib marking 4 July 1955 as a police attack on Harmandir Sahib.",
      "The paper records the attack as eight years after independence, during the Punjabi Suba morcha.",
    ],
    whyItMatters:
      "A contemporary Indian newspaper treating 1955 as its own assault on the Guru’s house — not as a footnote to 1984, and not as 1921.",
  },
  "express-1955-shells": {
    keyPoints: [
      "In 2021 the SGPC held its first public commemoration of the 4 July 1955 police entry.",
      "The tear-gas shells fired in the Darbar Sahib complex were displayed on the stage at Gurdwara Manji Sahib.",
      "The Indian Express recorded the 1955 entry as the first police force inside the Golden Temple since Mughal rule ended.",
    ],
    whyItMatters:
      "The shells are physical evidence the Panth kept. The raid is not only a paragraph in a later war.",
  },
  "zakhmi-pdl": {
    keyPoints: [
      "Karam Singh Zakhmi, editor of the daily Akali, compiled a date-by-date history of the 1955 morcha the same year.",
      "The Panjab Digital Library holds the scan (BK-000131). The SGPC later issued a revised edition as Punjabi Sube De Morche Di Twarikh.",
    ],
    whyItMatters:
      "The raid was written down in 1955, from inside the morcha. Later reconstructions rest on this compilation.",
  },
  "jaito-photo": {
    keyPoints: [
      "About 1924: the 12th Shahidi Jatha takes blessing at the Akal Takht during the Jaito Morcha.",
      "Unarmed jathas kept coming until the Sikh Gurdwaras Act of 1925.",
    ],
    whyItMatters: "Visual evidence of the campaign that took the Guru’s house from mahants.",
    image: "/media/jaito-jatha.jpg",
    imageAlt: "12th Shahidi Jatha at the Akal Takht, about 1924",
    imageCredit: "Wikimedia Commons.",
  },
};

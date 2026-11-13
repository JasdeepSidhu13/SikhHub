import { media } from "./media";

export interface Story {
  id: string;
  kicker: string;
  title: string;
  years: string;
  lede: string;
  body: string[];
  quote?: { text: string; cite: string; lang?: string };
  image?: string;
  imageAlt?: string;
  imageCredit?: string;
  representation?: boolean;
  memorial?: { name: string; fact: string; sub: string; native?: string };
  href: string;
  cta: string;
  further?: { href: string; cta: string };
}

export const stories: Story[] = [
  {
    id: "golden-temple-1955",
    kicker: "3–4 July 1955",
    title: "Police entered the Guru’s house in shoes. They fired tear gas into the parikrama.",
    years: "Night of 3–4 July 1955",
    lede:
      "The first police action at Harmandir Sahib in independent India. DIG Ashwani Kumar led Punjab Police into the complex under Chief Minister Bhim Sen Sachar. Langar was stopped. Sleeping pilgrims were taken away in trucks. Tear-gas shells fell in the marble walk and in the sarovar.",
    body: [
      "On 6 April 1955 the Amritsar district magistrate banned the slogan Punjabi Suba Zindabad under Section 144. The order named the jaikara itself as a threat to order: “ਸੀਨੇ ਵਿੱਚ ਗੋਲੀ ਖਾਵਾਂਗੇ, ਪੰਜਾਬੀ ਸੂਬਾ ਬਣਾਵਾਂਗੇ।” Master Tara Singh courted arrest on 10 May. Every morning jathas prayed at the Akal Takht and walked out to be jailed. The government cancelled weapon licences at the Akal Takht. The SGPC refused to surrender the traditional arms.",
      "At midnight on 3–4 July police arrested the Head Granthi, Giani Bhupinder Singh, and the Akal Takht Jathedar, Giani Achhar Singh, at their homes. At three or four in the morning armed police raided Guru Ram Das Sarai and took five or six hundred sleeping pilgrims and volunteers in trucks. They occupied the SGPC and Akali offices. They closed the Guru ka Langar, cut the supplies, and took the utensils. Grewal records that the police entered when the SGPC would not surrender those arms.",
      "At 4 a.m. DIG Ashwani Kumar led police into the premises in shoes. A flag march was ordered through the bazars around the shrine. At midday police advanced on Manji Sahib with lathis, guns and tear gas while thousands of Sikhs sat down in their path. Shells fell in the parikrama; some fell in the holy tank. Hukam Singh and Bawa Harkishan Singh, who were running the morcha from the complex, were confined. The Akali Dal’s general secretary said at least two Sikhs were killed by police fire. The SGPC history says nobody denied it, and that no policeman had a bullet wound. Police put that day’s arrests at 237.",
      "The raid lasted a day. It did not end the morcha. About eight thousand volunteers were jailed in the first week of July; about twelve thousand in sixty-four days, 417 of them women in the SGPC count. The slogan ban was lifted on 12 July. Master Tara Singh was released in September. No judicial inquiry followed. An Akali committee charged the government on ten counts, including tear gas in the parikrama and entering Manji Sahib in shoes. Sachar apologised at the Akal Takht on 10 November 1955. Dilgeer called the raid a dress rehearsal for June 1984. The SGPC later displayed the tear-gas shells themselves at Manji Sahib.",
    ],
    quote: {
      text: "ਸੀਨੇ ਵਿੱਚ ਗੋਲੀ ਖਾਵਾਂਗੇ, ਪੰਜਾਬੀ ਸੂਬਾ ਬਣਾਵਾਂਗੇ।",
      cite: "Banned under Section 144, April 1955 — “We will take a bullet in the chest; we will make Punjabi Suba.”",
      lang: "pa",
    },
    image: media.causeway.src,
    imageAlt: media.causeway.alt,
    imageCredit: media.causeway.credit,
    href: "/issues/golden-temple-1955",
    cta: "Open the 1955 raid",
    further: { href: "/documents/express-1955", cta: "The Indian Express reconstruction" },
  },
  {
    id: "kaka-inderjit",
    kicker: "First shaheed of Punjabi Suba",
    title: "A schoolboy. A banned slogan. A well in Karnal.",
    years: "21 September 1960",
    lede:
      "Kaka Inderjit Singh is remembered as the first shaheed of the Punjabi Suba movement. He was twelve. He was walking home from school.",
    body: [
      "In 1955 the government made it a crime to shout Punjabi Suba Zindabad. Five years later, in Karnal — then Punjab, now Haryana — a fifth-grade student raised the slogan anyway, with the Sikh jaikara.",
      "Police ordered him to stop. He answered that he was a son of Guru Gobind Singh and feared no one. They beat him with lathis. They threw him into a well. The SGPC Gazette records that his body was dumped there because he had raised pro-Punjabi Suba slogans. Sikh Research Institute names him the movement’s first martyr.",
      "A linguistic state was still six years away. When it came, it came without its capital. The first blood of that demand was a child’s.",
    ],
    quote: {
      text: "If Guru Gobind Singh’s children can be shaheeds, why can’t I?",
      cite: "Kaka Inderjit Singh, as remembered in Sikh tradition of the Karnal killing",
    },
    image: media.kaka.src,
    imageAlt: media.kaka.alt,
    imageCredit: media.kaka.credit,
    representation: true,
    memorial: {
      name: "Kaka Inderjit Singh",
      native: "ਕਾਕਾ ਇੰਦਰਜੀਤ ਸਿੰਘ",
      fact: "12 years old",
      sub: "Karnal · 21 September 1960 · first shaheed of Punjabi Suba",
    },
    href: "/issues/punjabi-suba",
    cta: "Open Punjabi Suba",
    further: { href: "/documents/kaka-pdl", cta: "The Panjab Digital Library catalogue" },
  },
  {
    id: "pheruman",
    kicker: "74-day fast unto death",
    title: "He fasted 74 days for Chandigarh. Then he died. The capital is still withheld.",
    years: "15 August–27 October 1969",
    lede:
      "Darshan Singh Pheruman had led a shahidi jatha at Jaito in 1924, sat in the Rajya Sabha, and gone to jail for the Guru’s house. In 1969 he staked his remaining life on a capital that the 1966 Act had refused Punjab.",
    body: [
      "Punjab was reorganised on 1 November 1966. Chandigarh became a Union Territory. Punjabi-speaking areas were left outside. River projects went under the Centre. Sant Fateh Singh fasted and threatened self-immolation in December 1966. Indira Gandhi promised to arbitrate. He broke the fast. Nothing moved.",
      "Pheruman accused the Akali leadership of breaking an ardas sworn at the Akal Takht. A Sikh, he said, is bound by what he says before his Guru. He announced a fast unto death from 15 August 1969. Arrested under the Punjab Security Act, he began the fast in custody, was moved to hospital, and refused all nourishment.",
      "He died on 27 October 1969, the 74th day. The Hindu recorded a hartal across Punjab the next morning. In January 1970 the Union announced a transfer. In 1985 the Rajiv–Longowal Accord dated it 26 January 1986. The date passed. Chandigarh remains a shared capital.",
    ],
    quote: {
      text: "A Sikh is bound by what he says in Ardas before his Guru.",
      cite: "Darshan Singh Pheruman, letter to the Prime Minister, 27 October 1969",
    },
    image: media.pheruman.src,
    imageAlt: media.pheruman.alt,
    imageCredit: media.pheruman.credit,
    memorial: {
      name: "Darshan Singh Pheruman",
      native: "ਸ਼ਹੀਦ ਦਰਸ਼ਨ ਸਿੰਘ ਫੇਰੂਮਾਨ",
      fact: "74 days without food",
      sub: "1885–1969 · Jaito jatha leader · Rajya Sabha · fasted unto death for Chandigarh",
    },
    href: "/issues/chandigarh",
    cta: "Open the withheld capital",
    further: { href: "/documents/pheruman-hindu", cta: "The Hindu, 29 October 1969" },
  },
  {
    id: "hukam-singh",
    kicker: "21 November 1949",
    title: "They were asked to sign the Constitution. They refused.",
    years: "1949–1950",
    lede:
      "Five days before the Constitution was adopted, Sardar Hukam Singh told the Constituent Assembly that Sikhs could not subscribe their assent. He and Bhupinder Singh Mann later did not sign.",
    body: [
      "Congress had solicited Sikh participation on the strength of assurances of fair treatment. When minority political safeguards were dropped, Hukam Singh put the default on the official record. This was not a private grievance. It was spoken in the house that wrote the republic.",
    ],
    quote: {
      text: "My community cannot subscribe its assent to this historic document.",
      cite: "Sardar Hukam Singh, Constituent Assembly, 21 November 1949",
    },
    href: "/issues/assurances",
    cta: "Read the constitutional dissent",
    further: { href: "/documents/cad-21-nov", cta: "The Assembly record, 21 November 1949" },
  },
  {
    id: "nankana",
    kicker: "20 February 1921",
    title: "They walked into the Guru’s birthplace unarmed. They were burned.",
    years: "1921",
    lede:
      "At Nankana Sahib, Mahant Narain Das hired armed men against reformers who said a shrine is not a private estate. Bhai Lachhman Singh’s jatha was massacred. The SGPC already existed. The 1925 Act is what the blood purchased.",
    body: [
      "Two reformers had already been killed at Tarn Taran. The Nankana massacre did not begin the struggle for the Guru’s house. It proved what the struggle would cost.",
    ],
    image: media.jaito.src,
    imageAlt: media.jaito.alt,
    imageCredit: media.jaito.credit,
    href: "/issues/shrine-control",
    cta: "Open the Guru’s house",
    further: { href: "/documents/nankana-sikhitihas", cta: "The Nankana record" },
  },
  {
    id: "khalra",
    kicker: "Punjab disappearances",
    title: "He audited the state’s cremation receipts. Then the police murdered him.",
    years: "January–October 1995",
    lede:
      "Jaswant Singh Khalra and Jaspal Singh Dhillon reconstructed thousands of secret cremations in Amritsar district from government registers. India later admitted 2,097 illegal cremations in that district alone.",
    body: [
      "In January 1995 they released copies of official papers from three crematoria in Amritsar — then one of thirteen districts. The dead had been listed as unidentified or unclaimed. Khalra said a survey of the missing, read against those receipts, showed what families had already known: the police were disappearing people and burning the evidence.",
      "He was abducted by Punjab police on 6 September 1995, tortured for weeks, killed in late October, and dumped in the Harike canal. His killers were later convicted. The thousands of dead in those registers remain largely unaccounted for. Families had to keep the state’s own books because the state would not.",
    ],
    quote: {
      text: "Security agencies in Punjab had secretly cremated thousands of bodies after labelling them as unidentified and unclaimed.",
      cite: "Jaswant Singh Khalra and Jaspal Singh Dhillon, press release on the Amritsar cremation records, 16 January 1995",
    },
    image: media.khalra.src,
    imageAlt: media.khalra.alt,
    imageCredit: media.khalra.credit,
    href: "/issues/disappearances",
    cta: "Open the disappearances record",
    further: { href: "https://www.ensaaf.org/stories", cta: "Ensaaf survivor stories" },
  },
  {
    id: "gurmeet-kaur",
    kicker: "1992",
    title: "They took a mother of two from her home. The papers called it an encounter.",
    years: "1992",
    lede:
      "In 1992 Punjab Police abducted Gurmeet Kaur, a mother of two, from her house and killed her two weeks later. Newspapers reported an “encounter.” Her family still does not know what was done with her body.",
    body: [
      "Ensaaf recorded this from survivors who had never spoken to civil society. They asked for a memorial to everyone the police killed or disappeared. The cover-up was the method: abduction, a false encounter in the press, no body returned.",
    ],
    image: media.gurmeetKaur.src,
    imageAlt: media.gurmeetKaur.alt,
    imageCredit: media.gurmeetKaur.credit,
    href: "/issues/disappearances",
    cta: "Open the disappearances record",
    further: { href: "https://www.ensaaf.org/article/our-voices-matter", cta: "Ensaaf: Our Voices Matter" },
  },
  {
    id: "nirmal-singh",
    kicker: "1992",
    title: "He was twelve. Police shot him in front of his house.",
    years: "1992",
    lede:
      "Nirmal Singh was twelve when Punjab Police killed him in crossfire in front of his home. His parents and brother watched. Ensaaf recorded that they still want compensation for a child who never came back in.",
    body: [
      "The decade after 1984 was not only the killing of young men labelled militants. Children were shot. Mothers were abducted. A ten-year-old on his way from school was gunned down. Families were left with a photograph in the palm, or with nothing.",
    ],
    image: media.nirmalSingh.src,
    imageAlt: media.nirmalSingh.alt,
    imageCredit: media.nirmalSingh.credit,
    href: "/issues/disappearances",
    cta: "Open the disappearances record",
    further: { href: "https://www.ensaaf.org/article/our-voices-matter", cta: "Ensaaf: Our Voices Matter" },
  },
  {
    id: "nishan-khanda",
    kicker: "Anti-Sikh narrative",
    title: "They say the Khanda is not in Guru Granth Sahib. They want the Khalsa without a flag.",
    years: "1606–present",
    lede:
      "Guru Granth Sahib is shabad, not a picture-book of flags. Guru Hargobind raised the Nishan at the Akal Takht in 1606. The Khalsa is born by a khanda, in the presence of that Granth. In 1714 a Nishan was painted inside a Guru Granth Sahib manuscript at Takht Kesgarh Sahib. The Sikh Rehat Maryada requires the flag at every gurdwara, with a Khanda on the post. The objection that the Khanda is “not in Guru Granth Sahib” is not a reading of scripture. It is a demand that the Khalsa become invisible.",
    body: [
      "Guru Granth Sahib is shabad. It does not print the Akal Takht. It does not print rumalas. It does not print a photograph of a kirpan. The Constitution of India still names the kirpan as part of professing the Sikh religion. Khande di pahul — the birth of the Khalsa — is performed with a khanda in the presence of Guru Granth Sahib. If “not drawn in the Granth” were the test of Sikh life, the Takht, the initiation, and the visible Khalsa would all be unscriptural. That is the point of the test.",
      "Guru Hargobind raised the first Nishan over the Akal Takht in 1606: Akal Dhuja, Satguru ka Nishan. Guru Gobind Singh made the Khalsa by stirring amrit with a khanda on Baisakhi 1699. Khalsa armies marched behind nishanchis. One misl was named Nishananwali because it carried the standards. In 1714 a Nishan Sahib was painted inside a Guru Granth Sahib manuscript now at Takht Kesgarh Sahib. The claim “it is not in Guru Granth Sahib” is not only a category error. On that page, it is false.",
      "Sikhs ask every day in Ardas that the flags stand forever. The Sikh Rehat Maryada requires a Nishan Sahib at every gurdwara, xanthic or greyish-blue, with a spearhead or a Khanda on the post. The emblem on the cloth — khanda, chakra, two kirpans — is miri-piri in steel. The objection that the Khanda is “not in Guru Granth Sahib” collapses against that record.",
    ],
    quote: {
      text: "ਝੰਡੇ ਬੁੰਗੇ ਜੁਗੋ ਜੁਗ ਅਟਲ",
      cite: "Ardas, as given in the Sikh Rehat Maryada — “May the flags and hostels abide from age to age.” Encyclopaedia of Sikhism: chauktaan, jhande, bunge jugo jug atal.",
      lang: "pa",
    },
    image: media.nishanHarmandir.src,
    imageAlt: media.nishanHarmandir.alt,
    imageCredit: media.nishanHarmandir.credit,
    href: "/issues/nishan-khanda",
    cta: "Open the case against the smear",
    further: { href: "/documents/commons-nishan-folio", cta: "The 1714 folio in Guru Granth Sahib" },
  },
];

export const storyById = Object.fromEntries(stories.map((s) => [s.id, s]));

export const keyIssues = [
  {
    id: "november-1984",
    image: "/media/1984-witnesses.jpg",
    overlay: "Not a riot",
  },
  {
    id: "bluestar-1984",
    image: "/media/granth-bullet.jpg",
    overlay: "June 1984",
  },
  {
    id: "punjabi-suba",
    image: "/media/tara-singh.jpg",
    overlay: "A state, truncated",
  },
  {
    id: "chandigarh",
    image: "/media/chandigarh.jpg",
    overlay: "74 days",
  },
  {
    id: "assurances",
    image: "/media/akal-takht.jpg",
    overlay: "They would not sign",
  },
  {
    id: "disappearances",
    image: "/media/ensaaf-mother.jpg",
    overlay: "The registers",
  },
] as const;

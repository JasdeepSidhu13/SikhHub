import { media } from "./media";

export interface Story {
  id: string;
  kicker: string;
  title: string;
  years: string;
  lede: string;
  body: string[];
  quote?: { text: string; cite: string };
  image?: string;
  imageAlt?: string;
  imageCredit?: string;
  memorial?: { name: string; fact: string; sub: string };
  href: string;
  cta: string;
}

export const stories: Story[] = [
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
    memorial: {
      name: "Kaka Inderjit Singh",
      fact: "12 years old",
      sub: "Karnal · 21 September 1960 · first shaheed of Punjabi Suba",
    },
    href: "/issues/punjabi-suba",
    cta: "Open Punjabi Suba",
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
    image: media.chandigarh.src,
    imageAlt: media.chandigarh.alt,
    imageCredit: media.chandigarh.credit,
    href: "/issues/chandigarh",
    cta: "Open the withheld capital",
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
  },
  {
    id: "khalra",
    kicker: "Punjab disappearances",
    title: "He audited the state’s cremation receipts. Then the police murdered him.",
    years: "1995",
    lede:
      "Jaswant Singh Khalra and Jaspal Singh Dhillon reconstructed thousands of secret cremations in Amritsar district from government registers. India later admitted 2,097 illegal cremations in that district alone.",
    body: [
      "Punjab police abducted Khalra in 1995 and killed him. His killers were convicted. The thousands of dead named in those registers remain largely unaccounted for. Families had to keep the state’s own books because the state would not.",
    ],
    href: "/issues/disappearances",
    cta: "Open the disappearances record",
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
    image: "/media/1984-1-nov.png",
    overlay: "The registers",
  },
] as const;

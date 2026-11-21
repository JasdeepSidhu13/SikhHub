export interface MediaItem {
  src: string;
  alt: string;
  credit: string;
}

export const media = {
  harmandir: {
    src: "/media/harmandir.jpg",
    alt: "Sri Harmandir Sahib, Amritsar, reflected in the sarovar",
    credit: "Photograph: Wikimedia Commons (Harmandir Sahib, Amritsar).",
  },
  witnesses: {
    src: "/media/1984-witnesses.jpg",
    alt: "Widows of Sikhs killed in Delhi during the 1984 Sikh genocide",
    credit: "Widows of Sikhs killed in Delhi, November 1984. Via 1984 Sikh Archive.",
  },
  day31: {
    src: "/media/1984-31-oct.png",
    alt: "Archive graphic for 31 October 1984, the first day of the Sikh genocide",
    credit: "Day graphic: 1984 Sikh Archive, 31 October 1984.",
  },
  day1: {
    src: "/media/1984-1-nov.png",
    alt: "Archive graphic for 1 November 1984 of the Sikh genocide",
    credit: "Day graphic: 1984 Sikh Archive, 1 November 1984.",
  },
  day2: {
    src: "/media/1984-2-nov.png",
    alt: "Archive graphic for 2 November 1984 of the Sikh genocide",
    credit: "Day graphic: 1984 Sikh Archive, 2 November 1984.",
  },
  tara: {
    src: "/media/tara-singh.jpg",
    alt: "Master Tara Singh at Tarn Taran, March 1956",
    credit: "Master Tara Singh, Tarn Taran, March 1956. Wikimedia Commons.",
  },
  akal: {
    src: "/media/akal-takht.jpg",
    alt: "The Akal Takht and Sri Harmandir Sahib, Amritsar",
    credit: "Akal Takht and Harmandir Sahib, Amritsar. Wikimedia Commons.",
  },
  granth: {
    src: "/media/granth-bullet.jpg",
    alt: "Handwritten Guru Granth Sahib manuscript pierced by a bullet during Operation Blue Star",
    credit: "Manuscript hit by a bullet during Operation Blue Star, 1984. Wikimedia Commons.",
  },
  jaito: {
    src: "/media/jaito-jatha.jpg",
    alt: "The 12th Shahidi Jatha taking blessing at the Akal Takht during the Jaito Morcha, about 1924",
    credit: "12th Shahidi Jatha at the Akal Takht, Jaito Morcha, c. 1924. Wikimedia Commons.",
  },
  chandigarh: {
    src: "/media/chandigarh.jpg",
    alt: "Palace of Assembly, Chandigarh, the capital still withheld from Punjab",
    credit: "Palace of Assembly, Chandigarh. Wikimedia Commons.",
  },
  jasdeep: {
    src: "/media/jasdeep-sidhu.jpg",
    alt: "Portrait of the founder of SikhHub",
    credit: "Founder of SikhHub.",
  },
  khalra: {
    src: "/media/khalra.jpg",
    alt: "Jaswant Singh Khalra speaking, shortly before Punjab Police abducted and murdered him",
    credit: "Jaswant Singh Khalra. Still from his last international speech. Via Ensaaf.",
  },
  gurmeetKaur: {
    src: "/media/gurmeet-kaur.jpg",
    alt: "Gurmeet Kaur, abducted from her home by Punjab Police in 1992 and killed two weeks later",
    credit: "Gurmeet Kaur. Photograph shared by survivors. Via Ensaaf, Our Voices Matter.",
  },
  nirmalSingh: {
    src: "/media/nirmal-singh.jpg",
    alt: "A family in Punjab holds the only photograph they kept of the disappeared",
    credit: "A family holds the photograph they have left. Via Ensaaf.",
  },
  ensaafMother: {
    src: "/media/ensaaf-mother.jpg",
    alt: "A Sikh woman in Punjab holding a painted portrait of a disappeared relative",
    credit: "A survivor holds the portrait of a relative killed or disappeared by Punjab Police. Via Ensaaf.",
  },
  charanjitKaur: {
    src: "/media/charanjit-kaur.jpg",
    alt: "Mourners with a Sikh boy shot by Punjab Police on his way from school",
    credit: "Charanjit Kaur’s son, gunned down by police on his way from school. Via Ensaaf.",
  },
  kaka: {
    src: "/media/kaka-inderjit.jpg",
    alt: "Artist’s representation of a twelve-year-old Sikh schoolboy of the Punjabi Suba years",
    credit: "Artist’s representation of a twelve-year-old Sikh schoolboy of the Punjabi Suba years.",
  },
  pheruman: {
    src: "/media/pheruman.jpg",
    alt: "Studio portrait of Shaheed Darshan Singh Pheruman",
    credit:
      "Darshan Singh Pheruman. Photographer unknown. Identification portrait circulated in Sikh biographical sources; the original publication date is not recorded.",
  },
  aerial: {
    src: "/media/harmandir-aerial.jpg",
    alt: "Aerial view of Sri Harmandir Sahib, the sarovar, and the parikrama, early twentieth century",
    credit: "Aerial view of the Golden Temple complex, c. 1920s–30s. Wikimedia Commons. The parikrama and sarovar into which police later fired tear gas, 3–4 July 1955.",
  },
  causeway: {
    src: "/media/parikrama-causeway.jpg",
    alt: "Pilgrims on the marble causeway to Sri Harmandir Sahib",
    credit: "Pilgrims on the causeway to Harmandir Sahib. Wikimedia Commons. On 4 July 1955 police entered this complex in shoes.",
  },
  akalSquare: {
    src: "/media/akal-square-1924.jpg",
    alt: "The square in front of the Akal Takht, about 1924",
    credit: "Square before the Akal Takht, c. 1924. Wikimedia Commons. In 1955 the Head Granthi and the Jathedar were arrested at their homes before the raid.",
  },
  nishanHarmandir: {
    src: "/media/nishan-harmandir.jpg",
    alt: "The Nishan Sahib flying at Sri Harmandir Sahib, Amritsar",
    credit: "Nishan Sahib at Harmandir Sahib, Amritsar. Photograph: Amarpreet.singh.in, Wikimedia Commons (GFDL / CC BY-SA).",
  },
  nishanFolio: {
    src: "/media/nishan-folio-1714.jpg",
    alt: "Illustrated folio of a Nishan Sahib from a 1714 Guru Granth Sahib manuscript at Takht Kesgarh Sahib",
    credit:
      "Illustrated Nishan Sahib folio from a Guru Granth Sahib manuscript dated 1771 B.S. (1714 C.E.), Takht Kesgarh Sahib, Anandpur. Photographed in Mohinder Singh, Shabad Guru, vol. 1 (2011), p. 21. Wikimedia Commons.",
  },
} as const satisfies Record<string, MediaItem>;

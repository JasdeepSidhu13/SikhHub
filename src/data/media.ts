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
} as const satisfies Record<string, MediaItem>;

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
} as const satisfies Record<string, MediaItem>;

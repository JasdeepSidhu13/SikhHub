export interface EntranceClip {
  id: string;
  word: string;
  line: string;
  start: number;
  end: number;
}

/** Three cuts from the same 1985 Last Testament exchange. Times in seconds. */
export const entranceClips: EntranceClip[] = [
  {
    id: "beautiful",
    word: "Beautiful",
    line: "Sikhs are beautiful people.",
    start: 7.52,
    end: 9.92,
  },
  {
    id: "reliable",
    word: "Reliable",
    line: "The only community in India you can rely upon.",
    start: 10.85,
    end: 19.2,
  },
  {
    id: "unafraid",
    word: "Unafraid",
    line: "They are unafraid of anything.",
    start: 37.6,
    end: 42.45,
  },
];

export const entranceSource = {
  src: "/media/osho-sikhs.mp4",
  poster: "/media/osho-sikhs.jpg",
  document: "/documents/osho-last-testament-sikhs",
  cite: "Osho, The Last Testament, Volume 1, 1985",
} as const;

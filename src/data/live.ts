export interface LiveLink {
  href: string;
  label: string;
}

export interface LiveStation {
  id: string;
  name: string;
  place: string;
  kicker: string;
  blurb: string;
  image: string;
  imageAlt: string;
  official: LiveLink;
  also?: LiveLink;
  note?: string;
  featured?: boolean;
}

/** Official SGPC live kirtan. The audio is their shoutcast; the page is the player they publish. */
export const sgpcLive = {
  stream: "https://live.sgpc.net:8443/live",
  page: "https://sgpc.net/live-kirtan/",
  youtube: "https://www.youtube.com/@SGPCSriAmritsar",
} as const;

export const liveStations: LiveStation[] = [
  {
    id: "darbar-sahib",
    name: "Darbar Sahib",
    place: "Sri Harmandir Sahib, Amritsar",
    kicker: "Live kirtan from Darbar Sahib",
    blurb:
      "The ragi jatha in Harmandir Sahib, as the SGPC broadcasts it. SikhHub embeds their official live player. It does not re-host the stream. The Shiromani Gurdwara Parbandhak Committee reserves the broadcast.",
    image: "/media/harmandir.jpg",
    imageAlt: "Sri Harmandir Sahib, Amritsar, on the sarovar",
    official: { href: "https://sgpc.net/live-kirtan/", label: "SGPC live kirtan" },
    also: { href: "https://www.youtube.com/@SGPCSriAmritsar", label: "SGPC on YouTube" },
    note: "Official SGPC stream. Rights reserved by the Committee.",
    featured: true,
  },
  {
    id: "hazur-sahib",
    name: "Takht Sri Hazur Sahib",
    place: "Nanded, Maharashtra",
    kicker: "Kirtan on the Godavari",
    blurb:
      "Guru Gobind Singh’s Jyoti Jot is here. Live kirtan from Sachkhand Sri Hazur Sahib is carried on SikhNet Radio’s Hazur Sahib channel — a partner stream, not a SikhHub copy.",
    image: "/media/gurdwaras/hazur.jpg",
    imageAlt: "Takht Sri Hazur Sahib, Nanded",
    official: { href: "https://play.sikhnet.com/radio/sachkhand-hazur-sahib", label: "Hazur Sahib on SikhNet Radio" },
    also: { href: "https://play.sikhnet.com/radio", label: "SikhNet Radio desk" },
    featured: true,
  },
  {
    id: "patna-sahib",
    name: "Takht Sri Patna Sahib",
    place: "Patna, Bihar",
    kicker: "The tenth Guru’s birthplace, live",
    blurb:
      "Guru Gobind Singh was born at Patna in 1666. The Takht’s own site carries a broadcast of kirtan from the prakash asthan. Open their player. SikhHub does not host the audio.",
    image: "/media/gurdwaras/patna.jpg",
    imageAlt: "Takht Sri Harmandir Ji Patna Sahib",
    official: { href: "https://takhatpatnasahib.in/en/broadcast.php", label: "Patna Sahib broadcast" },
    also: { href: "https://takhatpatnasahib.in/en/", label: "Takht Sri Patna Sahib" },
    featured: true,
  },
  {
    id: "bangla-sahib",
    name: "Gurdwara Bangla Sahib",
    place: "New Delhi",
    kicker: "The bungalow of Guru Harkrishan",
    blurb:
      "Guru Harkrishan stayed in Raja Jai Singh’s bungalow. The sarovar still serves a capital. SikhNet Radio carries live kirtan from Bangla Sahib. Delhi’s sangat listens from the same desk.",
    image: "/media/gurdwaras/bangla.jpg",
    imageAlt: "Gurdwara Bangla Sahib, New Delhi",
    official: { href: "https://play.sikhnet.com/radio", label: "SikhNet Radio — Bangla Sahib" },
    also: { href: "https://dsgmc.in/", label: "Delhi Sikh Gurdwara Management Committee" },
  },
  {
    id: "sis-ganj",
    name: "Gurdwara Sis Ganj Sahib",
    place: "Chandni Chowk, Delhi",
    kicker: "Kirtan on the ninth Guru’s shaheedi asthan",
    blurb:
      "Guru Tegh Bahadur was beheaded in Chandni Chowk in 1675. The gurdwara stands on that kotwali. SikhNet Radio carries live kirtan from Sis Ganj Sahib — open their player from this page.",
    image: "/media/gurdwaras/sisganj.jpg",
    imageAlt: "Gurdwara Sis Ganj Sahib, Chandni Chowk",
    official: { href: "https://play.sikhnet.com/radio", label: "SikhNet Radio — Sis Ganj" },
    also: { href: "https://dsgmc.in/", label: "DSGMC" },
  },
  {
    id: "sikhnet-desk",
    name: "SikhNet Radio",
    place: "Worldwide channels",
    kicker: "A desk of live and recorded kirtan",
    blurb:
      "SikhNet’s radio desk carries Harmandir Sahib, the Takhts, and sangat houses from California to Kenya. It is an independent Sikh service, not an SGPC feed. Use it when you want a channel list in one place.",
    image: "/media/gurdwaras/stockton.jpg",
    imageAlt: "Interior of the Stockton Gurdwara, among the first Sikh houses in the United States",
    official: { href: "https://play.sikhnet.com/radio", label: "Open SikhNet Radio" },
    also: { href: "https://www.sikhnet.com/", label: "SikhNet" },
  },
];

export const liveById = Object.fromEntries(liveStations.map((s) => [s.id, s]));
export const featuredLive = liveStations.filter((s) => s.featured);

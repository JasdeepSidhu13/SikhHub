export interface Hero {
  id: string;
  name: string;
  native?: string;
  years: string;
  kicker: string;
  field: string;
  lede: string;
  body: string[];
  quote?: { text: string; cite: string };
  image: string;
  imageAlt: string;
  imageCredit: string;
  further: { href: string; label: string };
}

export const heroes: Hero[] = [
  {
    id: "ranjit-singh",
    name: "Maharaja Ranjit Singh",
    native: "ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ",
    years: "1780–1839",
    kicker: "Sher-e-Punjab",
    field: "Empire",
    lede: "He took a shattered Punjab and made a sovereign Sikh state. Lahore was his capital. The Khalsa army was his instrument. No foreign power took the Punjab while he lived.",
    body: [
      "Ranjit Singh became chief of the Sukerchakia misl as a boy and, in 1799, entered Lahore. By 1801 he was Maharaja. He unified the misls, took Multan, Kashmir, and Peshawar, and built an army that hired European officers without surrendering Sikh command.",
      "He kept the Koh-i-Noor. He did not wear a crown in the Mughal manner. He sat among his sardars and ruled a state in which Hindus, Muslims, and Sikhs served. Harmandir Sahib was plated in gold in his reign — the Darbar Sahib the world still photographs.",
      "He died in 1839. The empire did not survive his sons. The British took Punjab in 1849. The achievement is the state itself: a Sikh sovereignty in the open, not a footnote.",
    ],
    quote: {
      text: "God intended me to look upon all religions with one eye; that is why I was deprived of the other.",
      cite: "Attributed to Maharaja Ranjit Singh; the one-eyed Maharaja of a plural Punjab",
    },
    image: "/media/heroes/ranjit.jpg",
    imageAlt: "Maharaja Ranjit Singh seated with a sword, nineteenth-century painting",
    imageCredit: "Maharaja Ranjit Singh. Public-domain painting via Wikimedia Commons.",
    further: { href: "https://en.wikipedia.org/wiki/Ranjit_Singh", label: "Open the biography" },
  },
  {
    id: "hari-singh-nalwa",
    name: "Hari Singh Nalwa",
    native: "ਹਰੀ ਸਿੰਘ ਨਲਵਾ",
    years: "1791–1837",
    kicker: "The frontier",
    field: "Command",
    lede: "Ranjit Singh’s most feared general. He held the Khyber. Pashtun mothers are recorded as using his name to quiet children. He died in battle at Jamrud, still facing west.",
    body: [
      "Hari Singh Nalwa entered Khalsa service young and rose on the field: Kasur, Multan, Kashmir, Peshawar. He governed Hazara and the trans-Indus districts and built a chain of forts that pushed Sikh power to the mouth of the Khyber.",
      "Jamrud Fort still stands as his last work. In 1837, at the Battle of Jamrud, he was mortally wounded. The frontier he had taken did not fall that day. The Sikh empire’s western line was his.",
      "Later Sikh memory names him the greatest general of the Khalsa after the Gurus’ own age. The papers of the Lahore court and the British who faced him agree on the fact of his reach.",
    ],
    image: "/media/heroes/nalwa.jpg",
    imageAlt: "Hari Singh Nalwa in profile, painting by Hasan al-Din, Lahore, about 1845–50",
    imageCredit: "Hari Singh Nalwa, by Hasan al-Din, Lahore, c. 1845–50. Wikimedia Commons.",
    further: { href: "https://en.wikipedia.org/wiki/Hari_Singh_Nalwa", label: "Open the biography" },
  },
  {
    id: "mai-bhago",
    name: "Mai Bhago",
    native: "ਮਾਈ ਭਾਗੋ",
    years: "c. 1660s–after 1708",
    kicker: "Muktsar",
    field: "Warrior",
    lede: "When forty Sikhs deserted Guru Gobind Singh, she led them back. At Khidrana — Muktsar — they fought and died. The Guru tore up their disclaimer. They are the Chali Mukte.",
    body: [
      "Mai Bhago of Jhabal rallied the Sikhs who had signed a bedava, a disclaimer, under Mughal pressure. She rode them to the Guru. At the watering-place of Khidrana in December 1705 they met Wazir Khan’s force.",
      "The forty fell. Guru Gobind Singh blessed them as the liberated ones. Mai Bhago survived, wounded, and remained in the Guru’s sangat. Tradition holds she lived out her years as a warrior in his train, then at Nanded.",
      "A woman in armour is not a modern insert into Sikh history. She is in the Panth’s own memory of Muktsar, in the ardas, and in the name of the gurdwara that still marks the field.",
    ],
    image: "/media/heroes/maibhago.jpg",
    imageAlt: "Later portrait of Mai Bhago in armour",
    imageCredit: "Mai Bhago. Later portrait, Sikh Heritage Museum, via Wikimedia Commons. No lifetime likeness is established.",
    further: { href: "https://en.wikipedia.org/wiki/Mai_Bhago", label: "Open the biography" },
  },
  {
    id: "baba-deep-singh",
    name: "Baba Deep Singh",
    native: "ਬਾਬਾ ਦੀਪ ਸਿੰਘ",
    years: "1682–1757",
    kicker: "Shaheed of the Harmandir",
    field: "Scholar-warrior",
    lede: "He is remembered as a scribe of Guru Granth Sahib and as the man who, at seventy-five, marched to defend Amritsar. Sikh tradition says he fought with his head in his hand to the parikrama.",
    body: [
      "Deep Singh is counted among the first to take amrit from Guru Gobind Singh. He is associated with Damdama Sahib and with the making of recensions of Guru Granth Sahib after the Guru’s death.",
      "In 1757, when Ahmad Shah Abdali’s forces desecrated Harmandir Sahib, he raised a shaheedan jatha from Damdama and marched on Amritsar. He was wounded at Goharwal, near the city. Tradition — later painted on the walls of Gurdwara Baba Atal — says he continued until he reached the sarovar.",
      "The fresco is a later artist’s imagining. The fact it remembers is not: a scholar of the Granth who died as a soldier of the shrine.",
    ],
    image: "/media/heroes/deepsingh.jpg",
    imageAlt: "Fresco of Baba Deep Singh at Gurdwara Baba Atal, Amritsar",
    imageCredit: "Fresco of Baba Deep Singh, Gurdwara Baba Atal, Amritsar. Later imagining, via Wikimedia Commons.",
    further: { href: "https://en.wikipedia.org/wiki/Baba_Deep_Singh", label: "Open the biography" },
  },
  {
    id: "banda-singh",
    name: "Banda Singh Bahadur",
    native: "ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ",
    years: "1670–1716",
    kicker: "First Khalsa raj",
    field: "Sovereignty",
    lede: "Sent from Nanded by Guru Gobind Singh, he took Sirhind, minted a Sikh coin, and issued orders in the name of the Khalsa. Delhi killed him. It could not kill the claim.",
    body: [
      "Lachhman Dev, later Banda Singh, met Guru Gobind Singh at Nanded in 1708 and was sent north with five arrows, a drum, and a hukamnama. In 1710 he defeated Wazir Khan at Chappar Chiri. Sirhind fell. The killer of the Guru’s younger sons was brought to account.",
      "He struck coin in the name of Nanak and Gobind. He abolished zamindari in tracts he held and granted land to cultivators. Samana, Sadhaura, and Lohgarh were among his strongholds.",
      "Captured in 1715, he was taken to Delhi and executed in June 1716 with hundreds of Sikhs. The Mughal state meant the spectacle to end the Khalsa. The Khalsa continued.",
    ],
    image: "/media/heroes/banda.jpg",
    imageAlt: "Possible eighteenth-century depiction of Banda Singh Bahadur",
    imageCredit: "Possible depiction of Banda Singh Bahadur, Tawarikh-i Jahandar Shah, c. 1770. Wikimedia Commons.",
    further: { href: "https://en.wikipedia.org/wiki/Banda_Singh_Bahadur", label: "Open the biography" },
  },
  {
    id: "bhagat-puran-singh",
    name: "Bhagat Puran Singh",
    native: "ਭਗਤ ਪੂਰਨ ਸਿੰਘ",
    years: "1904–1992",
    kicker: "Pingalwara",
    field: "Seva",
    lede: "He carried the abandoned on his back and built Pingalwara in Amritsar — a home for the discarded. He printed tracts on seva and the earth. He never took a wage for it.",
    body: [
      "Born Ramji Das in a Hindu family in Rajewal, he came to the Guru’s house and to the name Puran Singh. After Partition he walked among refugees and the dying. In Amritsar he founded Pingalwara: a place for those no hospital and no family would keep.",
      "He carried Piara, a disabled child, for years. Photographs of that burden became the image of a Sikh sevadar in the twentieth century. Pingalwara still runs.",
      "He wrote and printed: against cruelty, against waste, for trees, for the sick. The Republic gave him the Padma Shri. He remained a man in a blanket, on the road between the gurdwara and the wards.",
    ],
    image: "/media/heroes/puran.jpg",
    imageAlt: "Bhagat Puran Singh carrying a disabled child",
    imageCredit: "Bhagat Puran Singh. Photograph via Wikimedia Commons.",
    further: { href: "https://en.wikipedia.org/wiki/Bhagat_Puran_Singh", label: "Open the biography" },
  },
  {
    id: "bhai-vir-singh",
    name: "Bhai Vir Singh",
    native: "ਭਾਈ ਵੀਰ ਸਿੰਘ",
    years: "1872–1957",
    kicker: "The language of the Granth",
    field: "Letters",
    lede: "He made modern Punjabi literature and a modern Sikh historical sense at the same time. Novels, poetry, the Khalsa Tract Society, the daily newspaper — all in Gurmukhi.",
    body: [
      "Born in Amritsar, Bhai Vir Singh founded the Khalsa Tract Society in 1894 and later the daily Akali. Sundari, Bijay Singh, and Baba Naudh Singh gave Sikh readers a novel in their own script. Rana Surat Singh and the later poems made a mystical Punjabi that still stands.",
      "He edited and annotated older Sikh texts and helped build the language in which this archive, too, writes jaikaras in Gurmukhi. The Singh Sabha’s literary engine ran through his press.",
      "India awarded him the Padma Bhushan. The point is the books: Punjabi as a public language of a sovereign Panth.",
    ],
    image: "/media/heroes/virsingh.jpg",
    imageAlt: "Portrait of Bhai Vir Singh",
    imageCredit: "Bhai Vir Singh. Photograph via Wikimedia Commons.",
    further: { href: "https://en.wikipedia.org/wiki/Vir_Singh_(writer)", label: "Open the biography" },
  },
  {
    id: "khorana",
    name: "Har Gobind Khorana",
    native: "ਹਰਗੋਬਿੰਦ ਖੁਰਾਨਾ",
    years: "1922–2011",
    kicker: "The genetic code",
    field: "Science",
    lede: "A Punjabi-born chemist who helped crack how DNA writes proteins. Nobel Prize in Physiology or Medicine, 1968. Raipur, Punjab — then a village, now in Pakistan — to MIT.",
    body: [
      "Khorana was born in Raipur, Punjab, in 1922, in a Hindu-Sikh Khatri family of modest means. He took his first degrees at Punjab University in Lahore, a doctorate at Liverpool, and then the long laboratory years in Switzerland, Canada, and the United States.",
      "With Marshall Nirenberg and Robert Holley he shared the 1968 Nobel Prize for work on the genetic code and protein synthesis. Later, at MIT, his laboratory made the first synthetic gene.",
      "SikhHub names him here as a child of Punjab whose mind changed the species’ knowledge of itself. The Panth’s claim is not that a Nobel belongs to a flag. It is that this soil has produced that order of mind.",
    ],
    image: "/media/heroes/khorana.jpg",
    imageAlt: "Har Gobind Khorana, Nobel portrait",
    imageCredit: "Har Gobind Khorana. Nobel Foundation portrait, Wikimedia Commons.",
    further: { href: "https://www.nobelprize.org/prizes/medicine/1968/khorana/biographical/", label: "Nobel biographical" },
  },
  {
    id: "arjan-singh",
    name: "Arjan Singh",
    native: "ਅਰਜਨ ਸਿੰਘ",
    years: "1919–2017",
    kicker: "Marshal of the Air Force",
    field: "Air power",
    lede: "The only officer to hold the five-star rank of Marshal of the Indian Air Force. He commanded the air war of 1965. He kept the turban in the service.",
    body: [
      "Arjan Singh was born in Lyallpur, Punjab, in 1919, and commissioned into the Royal Indian Air Force in 1939. He flew in the Arakan. He rose after Independence to Chief of the Air Staff, the youngest to hold the post.",
      "In September 1965 he directed the air force in the war with Pakistan. In 2002 the Republic created for him the rank of Marshal of the Air Force — the IAF’s only five-star officer.",
      "A Sikh in that uniform, with that rank, is not a mascot. It is a fact of the service, and of a community the official story has often preferred to remember only as a problem.",
    ],
    image: "/media/heroes/arjan.jpg",
    imageAlt: "Marshal of the Air Force Arjan Singh",
    imageCredit: "Marshal Arjan Singh. Photograph via Wikimedia Commons.",
    further: { href: "https://en.wikipedia.org/wiki/Arjan_Singh", label: "Open the biography" },
  },
  {
    id: "milkha-singh",
    name: "Milkha Singh",
    native: "ਮਿਲਖਾ ਸਿੰਘ",
    years: "1929–2021",
    kicker: "The Flying Sikh",
    field: "Sport",
    lede: "Partition orphaned him. The army made a runner of him. Rome 1960 missed a medal by a stride the country still talks about. Asia already knew he could not be caught.",
    body: [
      "Milkha Singh was born in Govindpura, in what became Pakistan. His parents were killed in Partition. He came to India a refugee, joined the army, and was trained on the track at the Electrical Mechanical Engineering Centre.",
      "He won gold at the 1958 Commonwealth Games in Cardiff — India’s first in athletics there — and dominated the Asian Games. At Rome in 1960 he finished fourth in the 400 metres, a race that entered Indian sporting myth as the one that got away.",
      "Pakistan’s General Ayub Khan is said to have named him the Flying Sikh after a race in Lahore. He later headed sports in Punjab. He died of COVID-19 in 2021, a day after his wife. The name remained a standard.",
    ],
    image: "/media/heroes/milkha.jpg",
    imageAlt: "Milkha Singh in later life, wearing a red turban",
    imageCredit: "Milkha Singh, 2009. Photograph via Wikimedia Commons (CC).",
    further: { href: "https://en.wikipedia.org/wiki/Milkha_Singh", label: "Open the biography" },
  },
];

export const heroById = Object.fromEntries(heroes.map((h) => [h.id, h]));

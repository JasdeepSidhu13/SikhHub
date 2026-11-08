export type EvidenceKind =
  | "archival"
  | "legal"
  | "statute"
  | "commission"
  | "book"
  | "academic"
  | "press"
  | "institutional"
  | "community"
  | "media";

export type SourceKind = EvidenceKind;

export interface Source {
  id: string;
  title: string;
  creator: string;
  year?: string;
  kind: SourceKind;
  url: string;
  note: string;
  chapterIds: string[];
  themeIds: string[];
  tags: string[];
}

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; cite: string; caution?: string }
  | { type: "callout"; title: string; text: string }
  | { type: "split"; left: string; right: string };

export interface Chapter {
  id: string;
  number: string;
  title: string;
  kicker: string;
  years: string;
  summary: string;
  question: string;
  blocks: Block[];
  sourceIds: string[];
  eventIds: string[];
  themeIds: string[];
}

export interface TimelineEvent {
  id: string;
  date: string;
  sort: string;
  title: string;
  period: string;
  chapterId: string;
  summary: string;
  significance: string;
  evidence: string;
  sourceIds: string[];
  themeIds: string[];
  tags: string[];
}

export interface Theme {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  sikhReading: string;
  evidence: string;
  chapterIds: string[];
  sourceIds: string[];
  eventIds: string[];
}

export const KIND_LABEL: Record<SourceKind, string> = {
  archival: "Archival record",
  legal: "Court record",
  statute: "Statute / constitution",
  commission: "Commission / official report",
  book: "Book",
  academic: "Academic study",
  press: "Press",
  institutional: "Institutional history",
  community: "Community remembrance",
  media: "Media / commemoration",
};

export const KIND_HINT: Record<SourceKind, string> = {
  archival: "Letters, speeches, and contemporary papers as published.",
  legal: "Judgments and case records.",
  statute: "Acts, constitutional text, and official codes.",
  commission: "Inquiry reports and government white papers.",
  book: "Published books and white papers.",
  academic: "Peer or scholarly historical work.",
  press: "Contemporary or later reporting.",
  institutional: "SGPC and other institutional accounts.",
  community: "Commemorative accounts; treat as remembrance unless corroborated.",
  media: "Social posts, films, and later commemorations.",
};

export type FolderId = "projects" | "about" | "experience" | "extras";

export interface ContentLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface BookPage {
  eyebrow: string;
  title: string;
  summary: string;
  paragraphs?: string[];
  bullets?: string[];
  tags?: string[];
  links?: ContentLink[];
  status?: string;
}

export interface FolderContent {
  id: FolderId;
  title: string;
  shortTitle: string;
  subtitle: string;
  question?: string;
  pages: BookPage[];
}

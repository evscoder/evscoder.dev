export type NewsSection = {
  id: string;
  title: string;
  paragraphs: string[];
  code?: string;
  checklist?: string[];
};
export type NewsArticle = {
  id: string;
  title: string;
  description: string;
  tag: string;
  sections: NewsSection[];
  sources: { title: string; href: string }[];
};

export type WebdevNewsItem = {
  title: string;
  href: string;
  description: string;
  publishedAt: string | null;
  imageUrl: string | null;
};

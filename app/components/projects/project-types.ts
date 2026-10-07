export type ProjectImage = {
  unoptimized?: boolean;
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ProjectListItem = {
  title?: string;
  text: string;
};

export type ProjectBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered: boolean; items: readonly ProjectListItem[] }
  | { type: 'image'; image: ProjectImage; caption?: string }
  | { type: 'decisions'; items: readonly { title: string; text: string }[] };

export type ProjectSection = {
  id: string;
  label: string;
  eyebrow?: string;
  title: string;
  blocks: readonly ProjectBlock[];
};

export type ProjectCaseStudy = {
  eyebrow: string;
  description: string;
  seoTitle?: string;
  imageAlt: string;
  sections: readonly ProjectSection[];
};

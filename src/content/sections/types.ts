export type ContentImage = {
  src: string;
  alt: string;
  sourceUrl: string;
};

export type SectionTodo = {
  key: string;
  note: string;
};

export type HotelSection = {
  id: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  sourceUrls: string[];
  images: ContentImage[];
  highlights: string[];
  todos: SectionTodo[];
};

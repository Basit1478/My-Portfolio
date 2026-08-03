export type Project = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  discipline: string;
  year: string;
  summary: string;
  thesis: string;
  challenge: string;
  response: string;
  outcome: string;
  tone: "crm" | "textbook" | "verse";
  github: string;
  live?: string;
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

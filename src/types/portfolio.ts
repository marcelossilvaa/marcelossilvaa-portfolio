import type { StaticImageData } from 'next/image';

export type NavItem = {
  id: number;
  href: string;
  text: string;
};

export type SocialLink = {
  id: number;
  title: string;
  link: string;
};

export type SkillItem = {
  id: number;
  icon: StaticImageData;
  text: string;
  category: string;
  level: string;
  experience: string;
  description: string;
  highlights: string[];
};

export type HistoryItem = {
  id: number;
  image: StaticImageData;
  title: string;
  date: string;
  institution: string;
  summary?: string[];
};

export type ProjectTechnology = {
  name: string;
  image: StaticImageData;
};

export type ProjectItem = {
  id: string;
  image: StaticImageData;
  title: string;
  subTitle: string;
  repoLink: string;
  demoLink: string;
  technologies: ProjectTechnology[];
};

export type AboutProfile = {
  title: string;
  subtitle: string;
  description: string[];
  signature: string;
};

export type ContactItem = {
  id: number;
  label: string;
  value: string;
  href: string;
};

import { ReactElement } from 'react';

export type Link = {
  id: number;
  name: string;
  href: string;
  icon: ReactElement;
};

export type Skill = {
  id: number;
  name: string;
  icon: ReactElement;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  github: string;
  url?: string;
  tools: string[];
};

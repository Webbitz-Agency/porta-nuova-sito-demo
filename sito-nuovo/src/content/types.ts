export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContentSection {
  heading: string;
  body?: string;
  items?: string[];
}

export interface PageContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  sections: ContentSection[];
  faq?: FaqItem[];
}

export interface HomeStat {
  value: number;
  suffix?: string;
  label: string;
}

export type ServiceIconKey = "scales" | "document" | "shield" | "handshake" | "gavel";

export interface HomeServiceCard {
  icon: ServiceIconKey;
  title: string;
  description: string;
  href: string;
}

export interface HomeContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  stats: HomeStat[];
  services: HomeServiceCard[];
}

export interface StudioValue {
  title: string;
  description: string;
}

export interface StudioContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  coverage: string[];
  values: StudioValue[];
}

export interface GuideItem {
  title: string;
  date: string;
  excerpt: string;
}

export interface ContattiContent {
  phone: string;
  whatsapp: string;
  email?: string;
  note: string;
}

export interface ServiceStat {
  label: string;
  value: string;
  note: string;
}

export interface SubService {
  label: string;
  href: string;
}

export interface GridItem {
  id: number;
  name: string;
  tag: string;
  img: string;
}

export interface PipelineStep {
  lod: string;
  stage: string;
  title: string;
  bgColor: string;
  textColor: string;
  features: string[];
  description: string;
  bgImageUrl: string;
  gridItems: GridItem[];
  cta: string;
  featured?: boolean;
}

export interface HeroStat {
  n: string;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  photo: number;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface MarqueeTerm {
  label: string;
}

export interface ServiceContent {
  id: string;
  label: string;
  slug: string;
  navHref: string;
  eyebrow: string;

  hero: {
    eyebrowText: string;
    headlineLine1: string;
    headlineLine2: string;
    subcopy: string;
    stats: HeroStat[];
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };

  marquee: MarqueeTerm[];

  pipeline: {
    sectionId: string;
    steps: PipelineStep[];
  };

  serviceDetail: {
    eyebrow: string;
    heading: string;
    intro: string;
    body: string;
    stats: ServiceStat[];
    tools: string[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    imageUrl: string;
    sectionId: string;
  };

  process: {
    sectionId: string;
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    steps: ProcessStep[];
  };

  testimonials: {
    sectionId: string;
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    items: Testimonial[];
  };

  faq: {
    sectionId: string;
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    items: FAQItem[];
    image: string;
  };

  cta: {
    sectionId: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    buttonLabel: string;
    buttonHref: string;
  };

  subServices?: SubService[];
}

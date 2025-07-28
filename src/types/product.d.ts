/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Medium {
  type: string;
  url: string;
}

export interface Checklist {
  icon: string;
  text: string;
}

export interface Seo {
  title: string;
  description: string;
  image: string;
}

export interface CtaText {
  text: string;
}

export interface Section {
  type: string;
  title: string;
  description?: string;
  data: any;
}

export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}

interface ApiResponse {
  code: number;
  data: ProductData;
  error?: any;
}

export interface PracticeArea {
  slug: string;
  title: string;
  shortTitle: string;
  descriptor: string;
  overview: string;
  whyItMatters: string;
  services: string[];
  image: string;
  metaTitle: string;
  metaDescription: string;
}

export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface BoardMember {
  name: string;
  title: string;
  role: string;
  bio: string;
  communityRoots: string;
  credentials: string[];
  focusAreas: string[];
  location?: string;
  image?: string;
  linkedin?: string;
}

export interface BoardSeatProfile {
  title: string;
  emphasis: string;
  overview: string;
  desiredBackground: string[];
}

export interface TeamMember {
  name: string;
  title: string;
  role: string;
  bio: string;
  communityRoots: string;
  credentials: string[];
  focusAreas: string[];
  location?: string;
  image?: string;
  linkedin?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured?: boolean;
  image?: string;
  imageAlt?: string;
}

export interface Partnership {
  id: string;
  name: string;
  tier: "founding" | "strategic" | "community";
  description: string;
  benefits: string[];
  icon: string;
  featured?: boolean;
  caseStudySlug?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  type: "conference" | "retreat" | "workshop" | "community";
  status: "upcoming" | "past";
  image?: string;
  link?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: "Frontend" | "Backend" | "Database" | "Tools";
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  color: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  detail: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  year: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

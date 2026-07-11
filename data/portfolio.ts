import {
  Skill,
  Experience,
  Project,
  Service,
  EducationItem,
  Achievement,
  Testimonial,
  SocialLink,
} from "@/types";

export const NAME = "Alex Morgan";
export const TITLE = "Frontend & MERN Stack Developer";

export const BIO = `I craft fast, elegant, and accessible web experiences that feel as good to use as they look. With a deep focus on the MERN stack and modern React patterns, I turn complex problems into clean, maintainable products — from pixel-perfect interfaces to resilient backend architecture.`;

export const INTRO = `Hello, I'm Alex — a developer who believes great software is equal parts engineering and craft. Over the past several years I've partnered with startups and established teams to design, build, and ship products used by thousands of people every day. This book is my story: turn the page to begin.`;

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 92, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Framer Motion", level: 85, category: "Frontend" },
  { name: "Node.js / Express", level: 90, category: "Backend" },
  { name: "REST & GraphQL APIs", level: 88, category: "Backend" },
  { name: "MongoDB", level: 87, category: "Database" },
  { name: "PostgreSQL", level: 80, category: "Database" },
  { name: "Docker", level: 75, category: "Tools" },
  { name: "Git / CI-CD", level: 88, category: "Tools" },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Nimbus Labs",
    period: "2023 — Present",
    description:
      "Leading the frontend architecture for a suite of B2B SaaS products used by 50k+ users.",
    highlights: [
      "Rebuilt the core dashboard in Next.js, cutting load time by 42%",
      "Introduced a shared design system adopted across 6 product teams",
      "Mentored 4 junior engineers through structured pairing",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Northgate Digital",
    period: "2021 — 2023",
    description:
      "Owned end-to-end delivery for client web applications built on the MERN stack.",
    highlights: [
      "Shipped 12+ production applications from scratch",
      "Designed REST & GraphQL APIs serving mobile and web clients",
      "Reduced infrastructure costs by 30% via containerization",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Studio Coral",
    period: "2019 — 2021",
    description:
      "Built marketing sites and interactive experiences for creative agency clients.",
    highlights: [
      "Delivered award-nominated interactive campaign sites",
      "Collaborated directly with designers to pixel-match Figma files",
      "Introduced automated visual regression testing",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "Orbit — Team Collaboration Suite",
    description:
      "A real-time workspace for distributed teams with kanban boards, docs, and live cursors.",
    tech: ["Next.js", "TypeScript", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    color: "#4c6ef5",
  },
  {
    title: "Ledger — Personal Finance Tracker",
    description:
      "A privacy-first budgeting app with automated categorization and rich data visualization.",
    tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    color: "#12b886",
  },
  {
    title: "Marketplace — Multi-vendor E-commerce",
    description:
      "A scalable marketplace platform supporting vendor storefronts, payments, and reviews.",
    tech: ["Next.js", "Express", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    color: "#e8590c",
  },
  {
    title: "Pulse — Analytics Dashboard",
    description:
      "A white-labeled analytics dashboard with drag-and-drop widgets and live data streams.",
    tech: ["React", "D3.js", "Node.js", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    color: "#9c36b5",
  },
];

export const SERVICES: Service[] = [
  {
    title: "Web Application Development",
    description:
      "End-to-end design and development of performant, scalable web applications.",
    icon: "code",
  },
  {
    title: "UI/UX Implementation",
    description:
      "Pixel-perfect, accessible interfaces built from Figma designs with motion and polish.",
    icon: "layout",
  },
  {
    title: "API & Backend Architecture",
    description:
      "Robust REST/GraphQL APIs, database modeling, and cloud-ready backend systems.",
    icon: "server",
  },
  {
    title: "Performance Audits",
    description:
      "Deep audits and optimization for Core Web Vitals, bundle size, and rendering speed.",
    icon: "gauge",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "University of Westbridge",
    period: "2015 — 2019",
    detail: "Graduated with honors, focus on distributed systems and HCI.",
  },
  {
    degree: "Full-Stack Web Development",
    institution: "CodeForge Academy",
    period: "2019",
    detail: "Intensive program covering the MERN stack and DevOps fundamentals.",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2024" },
  { title: "Meta Front-End Developer Certificate", issuer: "Meta", year: "2022" },
  { title: "Hackathon Winner — BuildIt 2022", issuer: "TechCrunch", year: "2022" },
  { title: "Top Contributor", issuer: "Open Source Collective", year: "2021" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "VP of Product, Nimbus Labs",
    quote:
      "Alex has an incredible eye for detail and a rare ability to balance beautiful UI with rock-solid engineering. Our dashboard rebuild exceeded every metric we set.",
  },
  {
    name: "Marcus Webb",
    role: "CEO, Northgate Digital",
    quote:
      "Working with Alex felt effortless. Every project was delivered on time, well documented, and built to scale far beyond what we initially asked for.",
  },
  {
    name: "Priya Nair",
    role: "Design Lead, Studio Coral",
    quote:
      "The best frontend collaborator I've worked with. Alex translates design intent into code better than anyone on our team.",
  },
];

export const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Email", href: "mailto:hello@alexmorgan.dev" },
];

export const RESUME_URL = "#";

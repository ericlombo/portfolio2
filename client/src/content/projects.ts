import type { BookPage } from "./types";

export interface PortfolioProject {
  title: string;
  summary: string;
  role: string;
  status?: string;
  technologies: string[];
  links?: { label: string; href: string }[];
}

export const projects: PortfolioProject[] = [
  {
    title: "FlourFlow",
    summary: "An ERP + POS for a small business, bringing inventory, staff duties, deliveries, and payouts into one operating system.",
    role: "Builder",
    technologies: [],
    links: [],
  },
  {
    title: "TrustRail",
    summary: "A transaction and escrow platform in development, with transaction-state safeguards.",
    role: "Builder",
    status: "In development",
    technologies: ["NestJS", "PostgreSQL", "Prisma", "Supabase Auth", "JWT", "RBAC"],
    links: [],
  },
  {
    title: "Get A Keja",
    summary: "A real-estate marketplace for rentals, agents, and moving services, with dashboards, moderation, and messaging.",
    role: "Builder",
    technologies: ["Next.js", "Supabase", "Paystack", "Redis"],
    links: [{ label: "Visit live site", href: "https://getakeja.co.ke" }],
  },
  {
    title: "Pawa254",
    summary: "A content-focused campaign platform built for an activist organisation.",
    role: "Freelance contribution",
    technologies: [],
    links: [],
  },
  {
    title: "MyStory",
    summary: "A cross-platform React Native storytelling app with privacy-oriented media features.",
    role: "Builder",
    technologies: ["React Native"],
    links: [],
  },
  {
    title: "House of Beauty",
    summary: "A service-discovery experience with provider onboarding and a booking workflow.",
    role: "Builder",
    technologies: [],
    links: [],
  },
];

export const projectPages: BookPage[] = projects.map((project) => ({
  eyebrow: "Selected work",
  title: project.title,
  summary: project.summary,
  paragraphs: [`My role: ${project.role}.`],
  tags: project.technologies,
  links: project.links,
  status: project.status,
}));

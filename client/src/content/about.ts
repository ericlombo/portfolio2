import type { BookPage } from "./types";

export const aboutPages: BookPage[] = [
  {
    eyebrow: "About Eric",
    title: "Software built around people",
    summary: "I’m Eric Lombo Mwakio, a full-stack software engineer based in Nairobi, Kenya.",
    paragraphs: [
      "I enjoy turning ideas into useful products—from the first interface through the APIs and data behind it.",
      "My work spans web applications, marketplaces, business tools, and mobile experiences. I care about clear workflows, reliable systems, and making complex things easier to use.",
    ],
    tags: ["Full-stack engineering", "Product thinking", "Nairobi, Kenya"],
  },
  {
    eyebrow: "How I work",
    title: "Build, learn, improve",
    summary: "I like working across the product: understanding the problem, shaping the experience, and delivering the software behind it.",
    bullets: [
      "Create responsive, user-focused web applications and dashboards.",
      "Connect interfaces to APIs, databases, authentication, and payment flows.",
      "Keep exploring new tools while strengthening the fundamentals.",
    ],
    tags: ["Node.js", "NestJS", "Express", "React", "Next.js", "TypeScript", "PostgreSQL", "Prisma", "Supabase Auth", "Redis", "Paystack", "JWT", "Role-based access control", "Docker", "GitHub Actions", "Playwright", "Postman", "Vercel", "Render"],
  },
];

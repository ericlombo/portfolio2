import type { BookPage } from "./types";

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  dates: string;
  details: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Freelance Software Engineer",
    organization: "Self-employed",
    location: "Nairobi",
    dates: "Jan 2023 – present",
    details: [
      "Build client web applications, including the CPF Consulting website refresh and Pawa254 campaign platform.",
      "Work across product interfaces, APIs, performance, and software delivery.",
    ],
  },
  {
    role: "Junior Full-Stack Engineer",
    organization: "Conceptual Product Studio",
    location: "Remote",
    dates: "Aug – Dec 2024",
    details: [
      "Worked on Clerk and JWT authentication flows.",
      "Supported frontend performance improvements and investigated product bugs.",
    ],
  },
  {
    role: "Software Developer Intern",
    organization: "CloudStack Innovations",
    location: "Nairobi",
    dates: "Mar – Jul 2023",
    details: [
      "Worked through UI defects and API troubleshooting.",
      "Assisted with deployment tasks.",
    ],
  },
];

export const experiencePages: BookPage[] = experience.map((item) => ({
  eyebrow: `${item.location} · ${item.dates}`,
  title: item.role,
  summary: item.organization,
  bullets: item.details,
}));

export const educationPage: BookPage = {
  eyebrow: "Education",
  title: "Learning by study and practice",
  summary: "My formal education and software engineering training.",
  bullets: [
    "B.S. Information Technology & Software Development — USIU-Africa.",
    "Software Engineering Bootcamp — Zindua School.",
  ],
};

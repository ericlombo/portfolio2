import { aboutPages } from "./about";
import { educationPage, experiencePages } from "./experience";
import { extrasPages } from "./extras";
import { projectPages } from "./projects";
import type { FolderContent } from "./types";

export const folders: FolderContent[] = [
  {
    id: "projects",
    title: "My work",
    shortTitle: "Projects",
    subtitle: "Products I’ve helped bring to life",
    question: "Show us some of your projects",
    pages: projectPages,
  },
  {
    id: "about",
    title: "About me",
    shortTitle: "About",
    subtitle: "The person behind the work",
    question: "Tell us about yourself",
    pages: aboutPages,
  },
  {
    id: "experience",
    title: "Experience",
    shortTitle: "Experience",
    subtitle: "Where I’ve learned by building",
    question: "What are your experiences?",
    pages: [...experiencePages, educationPage],
  },
  {
    id: "extras",
    title: "Beyond the code",
    shortTitle: "Extras",
    subtitle: "Interests, tools, and what I’m exploring",
    pages: extrasPages,
  },
];

export const interviewerFolderIds = ["about", "experience", "projects"] as const;

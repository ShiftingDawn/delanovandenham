import {Technology} from "@/project/tech";

export interface Project {
  slug: string;
  name: string;
  href: string;
  repo: string;
  description: string;
  tech: Array<Technology>;
}

export const projects: Record<string, Project> = {
  portfolio: {
    slug: "portfolio",
    name: "Portfolio",
    href: "https://delanovandenham.com",
    repo: "https://github.com/ShiftingDawn/delanovandenham",
    description: "The website you are currently viewing",
    tech: ["typescript", "react", "next", "tailwind", "cloudflareWorkers"],
  },
  friday_at_work: {
    slug: "friday_at_work",
    name: "Friday at Work",
    href: "/projects/friday_at_work",
    repo: "https://github.com/ShiftingDawn/friday_at_work",
    description: "Simple consumption tracker and inventory tracker with a receipt overview page. Drinking fairly at work has never been this easy",
    tech: ["typescript", "svelte", "tailwind", "prisma", "postgres", "s3"],
  },
  tracker: {
    slug: "tracker",
    name: "Tracker",
    href: "https://tracker.appelgebakje22.nl",
    repo: "https://github.com/ShiftingDawn/Tracker",
    description: "An application to track quest-like objects with tasks and subtasks",
    tech: ["typescript", "svelte", "tailwind", "drizzle", "postgres", "redis"],
  }
};
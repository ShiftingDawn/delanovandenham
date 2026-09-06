import {Technology} from "@/project/tech";

interface ProjectType {
  slug: string;
  name: string;
  repo: string;
  description: string;
  tech: Array<Technology>;
}

type ProjectAdditional = ({
  href: string;
  hrefInternal?: string;
} | {
  href?: undefined;
  hrefInternal: string;
});

export type Project = ProjectType & ProjectAdditional;

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
    href: "https://friday.appelgebakje22.nl",
    hrefInternal: "/projects/friday_at_work",
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
  },
  feylon: {
    slug: "feylon",
    name: "Feylon",
    hrefInternal: "/projects/feylon",
    repo: "https://github.com/ShiftingDawn/archived_Feylon",
    description: "Feylon is a Concatenative Stack-Oriented Programming Language inspired by Forth and Porth.",
    tech: ["rust", "assembly"]
  }
};
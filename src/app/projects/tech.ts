import {JSXElementConstructor} from "react";
import {
    TechIconNextJs,
    TechIconPrisma,
    TechIconReact,
    TechIconSqlite,
    TechIconSvelte,
    TechIconTailwind,
    TechIconTypeScript
} from "@/app/projects/icons";

export const technologies: Record<string, [string, JSXElementConstructor<unknown>]> = {
    typescript: ["Typescript", TechIconTypeScript],
    react: ["React", TechIconReact],
    next: ["Next", TechIconNextJs],
    tailwind: ["TailwindCSS", TechIconTailwind],
    svelte: ["Svelte", TechIconSvelte],
    prisma: ["Prisma ORM", TechIconPrisma],
    sqlite: ["SQLite", TechIconSqlite],
}
export type Technology = keyof typeof technologies;
import {JSXElementConstructor} from "react";
import {
  TechIconCloudflareWorkers,
  TechIconDrizzle,
  TechIconNextJs,
  TechIconPostgres,
  TechIconPrisma,
  TechIconReact,
  TechIconRedis,
  TechIconSvelte,
  TechIconTailwind,
  TechIconTypeScript
} from "./icons";
import {HugeiconsIcon} from "@hugeicons/react";
import {BucketIcon} from "@hugeicons/core-free-icons";

export const technologies: Record<string, [string, JSXElementConstructor<unknown>]> = {
  typescript: ["Typescript", TechIconTypeScript],
  react: ["React", TechIconReact],
  next: ["Next", TechIconNextJs],
  tailwind: ["TailwindCSS", TechIconTailwind],
  svelte: ["Svelte", TechIconSvelte],
  prisma: ["Prisma ORM", TechIconPrisma],
  drizzle: ["Drizzle ORM", TechIconDrizzle],
  postgres: ["PostgreSQL", TechIconPostgres],
  redis: ["Redis", TechIconRedis],
  cloudflareWorkers: ["Cloudflare Workers", TechIconCloudflareWorkers],
  s3: ["Amazon S3", () => <HugeiconsIcon icon={BucketIcon} size={32}/>]
}
export type Technology = keyof typeof technologies;
import {Page} from "$c/Page";
import Image from "next/image";
import {
    TechIconGitHub,
    TechIconNextJs, TechIconPrisma,
    TechIconReact, TechIconSqlite, TechIconSvelte,
    TechIconTailwind,
    TechIconTypeScript
} from "@/app/projects/icons";
import {Tooltip} from "$c/Tooltip";
import {Heading} from "$c/typography/Heading";

export default function PageProjects() {
    return (
        <Page title={"projects"}>
            <ProjectCard
                slug={"portfolio"}
                name={"Portfolio"}
                href={"https://delanovandenham.com"}
                repo={"https://github.com/ShiftingDawn/delanovandenham"}
                description={"The website you are currently viewing"}
                tech={{typescript: true, react: true, next: true, tailwind: true}}
            />
            <ProjectCard
                slug={"friday_at_work"}
                name={"Friday at Work"}
                href={"https://friday.appelgebakje22.nl"}
                repo={"https://github.com/ShiftingDawn/friday_at_work"}
                description={"Simple consumption tracker with a receipt overview page. Drinking fairly at work has never been this easy"}
                tech={{typescript: true, svelte: true, tailwind: true, prisma: true, sqlite: true}}
            />
        </Page>
    );
}

interface ProjectCardProps {
    slug: string;
    name: string;
    href: string;
    repo: string;
    description: string;
    tech: {
        typescript?: boolean;
        react?: boolean;
        next?: boolean;
        tailwind?: boolean;
        svelte?: boolean;
        prisma?: boolean;
        sqlite?: boolean;
    };
}

function ProjectCard({slug, name, href, repo, description, tech}: Readonly<ProjectCardProps>) {
    return (
        <article className={"card"}>
            <div className={"flex gap-2 items-center"}>
                <a href={href} className={"flex-1"}>
                    <Heading level={2}>{name}</Heading>
                </a>
                <Tooltip text={"View repository"} id={`${slug}_github`}>
                    <a href={repo} aria-label={"View GitHub repository"}>
                        <TechIconGitHub/>
                    </a>
                </Tooltip>
            </div>
            <a href={href}>
                <Image src={`/projects/${slug}.png`} alt={`screenshot of ${name}`} width={640} height={320}
                       className={"rounded-xl shadow-md"} loading="eager"/>
            </a>
            <p className={"my-2"}>{description}</p>
            <div className={"pt-2 flex items-center justify-between"}>
                <div className={"flex items-center gap-2 text-accent"}>
                    {tech.typescript && (
                        <Tooltip text={"TypeScript"} id={`${slug}_typescript`}>
                            <TechIconTypeScript/>
                        </Tooltip>
                    )}
                    {tech.react && (
                        <Tooltip text={"React"} id={`${slug}_react`}>
                            <TechIconReact/>
                        </Tooltip>
                    )}
                    {tech.next && (
                        <Tooltip text={"NextJS"} id={`${slug}_nextjs`}>
                            <TechIconNextJs/>
                        </Tooltip>
                    )}
                    {tech.tailwind && (
                        <Tooltip text={"TailwindCSS"} id={`${slug}_tailwind`}>
                            <TechIconTailwind/>
                        </Tooltip>
                    )}
                    {tech.svelte && (
                        <Tooltip text={"Svelte"} id={`${slug}_svelte`}>
                            <TechIconSvelte/>
                        </Tooltip>
                    )}
                    {tech.prisma && (
                        <Tooltip text={"Prisma ORM"} id={`${slug}_prisma`}>
                            <TechIconPrisma/>
                        </Tooltip>
                    )}
                    {tech.sqlite && (
                        <Tooltip text={"SQLite"} id={`${slug}_sqlite`}>
                            <TechIconSqlite/>
                        </Tooltip>
                    )}
                </div>
            </div>
        </article>
    );
}
import {Page} from "$c/Page";
import Image from "next/image";
import {
    TechIconGitHub,
    TechIconNextJs,
    TechIconReact,
    TechIconTailwind,
    TechIconTypeScript
} from "@/app/projects/icons";
import {Tooltip} from "$c/Tooltip";
import {Tool} from "@hugeicons/core-free-icons";

export default function PageProjects() {
    return (
        <Page name={"projects"}>
            <ProjectCard
                slug={"portfolio"}
                name={"Portfolio"}
                href={"https://delanovandenham.com"}
                repo={"https://github.com/ShiftingDawn/delanovandenham"}
                tech={{typescript: true, react: true, next: true, tailwind: true}}
            />
        </Page>
    );
}

interface ProjectCardProps {
    slug: string;
    name: string;
    href: string;
    repo: string;
    tech: {
        typescript?: boolean;
        react?: boolean;
        next?: boolean;
        tailwind?: boolean;
    };
}

function ProjectCard({slug, name, href, repo, tech}: Readonly<ProjectCardProps>) {
    return (
        <div className={"bg-ctp-mantle p-4 rounded-xl shadow-md"}>
            <div className={"flex gap-2 items-center"}>
                <a href={href} className={"flex-1"}>
                    <h2>{name}</h2>
                </a>
                <Tooltip text={"View repository"} id={`${slug}_github`}>
                    <a href={repo} aria-label={"View GitHub repository"}>
                        <TechIconGitHub/>
                    </a>
                </Tooltip>
            </div>
            <a href={href}>
                <Image src={`/projects/${slug}.png`} alt={`screenshot of ${name}`} width={640} height={320}
                       className={"rounded-xl shadow-md"}/>
            </a>
            <div className={"pt-2 flex items-center justify-between"}>
                <div className={"flex items-center gap-2 text-ctp-lavender"}>
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
                </div>
            </div>
        </div>
    );
}
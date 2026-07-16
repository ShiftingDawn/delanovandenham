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
import {technologies, Technology} from "@/app/projects/tech";
import {createElement} from "react";

export default function PageProjects() {
    return (
        <Page title={"projects"}>
            <ProjectCard
                slug={"portfolio"}
                name={"Portfolio"}
                href={"https://delanovandenham.com"}
                repo={"https://github.com/ShiftingDawn/delanovandenham"}
                description={"The website you are currently viewing"}
                tech={["typescript", "react", "next", "tailwind"]}
            />
            <ProjectCard
                slug={"friday_at_work"}
                name={"Friday at Work"}
                href={"https://friday.appelgebakje22.nl"}
                repo={"https://github.com/ShiftingDawn/friday_at_work"}
                description={"Simple consumption tracker with a receipt overview page. Drinking fairly at work has never been this easy"}
                tech={["typescript", "svelte", "tailwind", "prisma", "sqlite"]}
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
    tech: Array<Technology>;
}

function ProjectCard({slug, name, href, repo, description, tech}: Readonly<ProjectCardProps>) {
    const techSorted = tech.sort((a, b) => {
        const keys = Object.keys(technologies);
        return keys.indexOf(a) - keys.indexOf(b);
    });
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
                    {[techSorted.map(technology => (
                        <Tooltip key={`${slug}_${technology}`} id={`${slug}_${technology}`}
                                 text={technologies[technology][0]}>
                            {createElement(technologies[technology][1])}
                        </Tooltip>
                    ))]}
                </div>
            </div>
        </article>
    );
}
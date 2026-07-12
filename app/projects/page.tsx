import {Page} from "$c/Page";
import Image from "next/image";
import {TechIconNextJs, TechIconReact, TechIconTailwind, TechIconTypeScript} from "@/app/projects/icons";

export default function PageProjects() {
    return (
        <Page name={"projects"}>
            <ProjectCard
                name={"Portfolio"}
                image={"portfolio"}
                href={"https://delanovandenham.com"}
                repo={"https://github.com/ShiftingDawn/delanovandenham"}
                tech={{typescript: true, react: true, next: true, tailwind: true}}
            />
        </Page>
    );
}

interface ProjectCardProps {
    name: string;
    image: string;
    href: string;
    repo: string;
    tech: {
        typescript?: boolean;
        react?: boolean;
        next?: boolean;
        tailwind?: boolean;
    };
}

function ProjectCard({name, image, href, repo, tech}: Readonly<ProjectCardProps>) {
    return (
        <div className={"bg-ctp-mantle p-4 rounded-xl shadow-md"}>
            <h2>{name}</h2>
            <Image src={`/projects/${image}.png`} alt={`screenshot of ${name}`} width={640} height={320}
                   className={"rounded-xl shadow-md"}/>
            <div className={"pt-2 flex items-center justify-between"}>
                <div className={"flex items-center gap-2 text-ctp-lavender"}>
                    {tech.typescript && <TechIconTypeScript/>}
                    {tech.react && <TechIconReact/>}
                    {tech.next && <TechIconNextJs/>}
                    {tech.tailwind && <TechIconTailwind/>}
                </div>
            </div>
        </div>
    );
}
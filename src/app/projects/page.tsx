import {Page} from "$c/Page";
import Image from "next/image";
import {Tooltip} from "$c/Tooltip";
import {Heading} from "$c/typography/Heading";
import {createElement} from "react";
import {Project, projects} from "@/project";
import {technologies} from "@/project/tech";
import {TechIconGitHub} from "@/project/icons";

export default function PageProjects() {
  return (
    <Page title={"projects"}>
      <ProjectCard project={projects.portfolio}/>
      <ProjectCard project={projects.friday_at_work}/>
      <ProjectCard project={projects.tracker}/>
    </Page>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({project}: Readonly<ProjectCardProps>) {
  const techSorted = project.tech.sort((a, b) => {
    const keys = Object.keys(technologies);
    return keys.indexOf(a) - keys.indexOf(b);
  });
  return (
    <article className={"card"}>
      <div className={"flex gap-2 items-center"}>
        <a href={project.href} className={"flex-1"}>
          <Heading level={2}>{project.name}</Heading>
        </a>
        <Tooltip text={"View repository"} id={`${project.slug}_github`}>
          <a href={project.repo} aria-label={"View GitHub repository"}>
            <TechIconGitHub/>
          </a>
        </Tooltip>
      </div>
      <a href={project.href}>
        <Image src={`/projects/${project.slug}.png`} alt={`screenshot of ${project.name}`} width={640} height={320}
               className={"rounded-xl shadow-md"} loading="eager"/>
      </a>
      <p className={"my-2"}>{project.description}</p>
      <div className={"pt-2 flex items-center justify-between"}>
        <div className={"flex items-center gap-2 text-accent"}>
          {[techSorted.map(technology => (
            <Tooltip key={`${project.slug}_${technology}`} id={`${project.slug}_${technology}`}
                     text={technologies[technology][0]}>
              {createElement(technologies[technology][1])}
            </Tooltip>
          ))]}
        </div>
      </div>
    </article>
  );
}
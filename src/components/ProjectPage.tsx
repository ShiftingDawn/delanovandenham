import {Page} from "$c/Page";
import {createElement, ReactNode} from "react";
import Link from "next/link";
import {GitHubIcon} from "$c/icons/GitHub";
import Image from "next/image";
import type {Project} from "@/project";
import {technologies} from "@/project/tech";

interface ProjectPageProps {
  project: Project;
}

export function ProjectPage({project, children}: FCP<ProjectPageProps>) {
  const techSorted = project.tech.sort((a, b) => {
    const keys = Object.keys(technologies);
    return keys.indexOf(a) - keys.indexOf(b);
  });
  return (
    <Page title={project.name}>
      <div className={"flex flex-col gap-4"}>
        <div className={"card flex flex-col gap-4"}>
          <Image src={`/projects/${project.slug}.png`} alt={`screenshot of ${project.name}`} width={640} height={320}
                 className={"rounded-xl shadow-md"} loading="eager"/>
          <div className={"flex gap-4 items-center"}>
            <Button href={project.repo} icon={<GitHubIcon/>}>
              GitHub
            </Button>
            <Button href={project.href}>
              Visit
            </Button>
          </div>
        </div>
        <div className={"card flex flex-col gap-4"}>
          <h2 className={"text-2xl text-accent"}>
            Used technologies
          </h2>
          <div className={"flex flex-col gap-2"}>
            {[techSorted.map(technology => (
              <div key={`${project.slug}_${technology}`} className={"flex items-center gap-4"}>
                {createElement(technologies[technology][1])}
                <span>{technologies[technology][0]}</span>
              </div>
            ))]}
          </div>
        </div>
      </div>
      {children}
    </Page>
  );
}

interface ButtonProps {
  href: string;
  icon?: ReactNode;
}

function Button({href, icon, children}: FCP<ButtonProps>) {
  return (
    <Link
      href={href}
      style={{color: "var(--color-ctp-base)"}}
      className={"bg-accent px-4 py-2 rounded-lg min-h-12 font-bold flex items-center gap-4"}
    >
      {icon}
      {children}
    </Link>
  );
}

interface ProjectImageProps {
  title?: string;
  src: string;
  alt: string;
}

export function ProjectImage({title, src, alt, children}: FCP<ProjectImageProps>) {
  return (
    <div className={"card flex flex-col gap-4"}>
      {title && (
        <h2 className={"text-2xl text-accent"}>{title}</h2>
      )}
      <Image src={src} alt={alt} width={640} height={320} className={"rounded-xl shadow-md"} loading="eager"/>
      {children}
    </div>
  );
}
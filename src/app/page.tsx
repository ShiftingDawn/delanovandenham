import {PulsingText} from "$c/PulsingText";
import {HomeSubtitle} from "@/app/HomeSubtitle";
import {Heading} from "$c/typography/Heading";
import Link from "next/link";
import {ReactNode} from "react";
import {HugeiconsIcon} from "@hugeicons/react";
import {DocumentValidationIcon} from "@hugeicons/core-free-icons";
import {GitHubIcon} from "$c/icons/GitHub";

export default function Home() {
  return (
    <div>
      <div className={"flex flex-col items-center text-center"}>
        <Heading level={1}>Welcome, I&apos;m <AnimatedName/></Heading>
        <HomeSubtitle/>
      </div>
      <div className={"flex justify-center gap-4 mt-24"}>
        <HomeButton href={"/resume"} icon={<HugeiconsIcon size={32} icon={DocumentValidationIcon}/>}>
          Resume
        </HomeButton>
        <HomeButton href={"https://github.com/ShiftingDawn"} icon={<GitHubIcon/>}>
          GitHub
        </HomeButton>
      </div>
    </div>
  );
}

function AnimatedName() {
  return (
    <PulsingText>
      <span>&#123;&nbsp;</span>
      Delano
      <span>&nbsp;&#125;</span>
    </PulsingText>
  );
}

interface HomeButtonProps {
  href: string;
  icon?: ReactNode;
}

function HomeButton({href, icon, children}: FCP<HomeButtonProps>) {
  return (
    <Link
      href={href}
      style={{color: "var(--color-ctp-base)"}}
      className={"bg-accent px-4 py-2 rounded-lg font-bold flex items-center gap-4"}
    >
      {icon}
      {children}
    </Link>
  );
}
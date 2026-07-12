import {Page} from "$c/Page";
import {Activity} from "@/app/about/Activity";
import {ReactNode} from "react";
import {HugeiconsIcon} from "@hugeicons/react";
import {OfficeIcon} from "@hugeicons/core-free-icons";


export default async function PageAbout() {
    return (
        <Page name={"About me"}>
            <InfoChip icon={<HugeiconsIcon icon={OfficeIcon}/>}
                      text={"Looking for opportunities in and around Nieuwegein (the Netherlands)"}/>
            <h2 className={"my-8"}>Hello! I&apos;m Delano van den Ham, a full-stack developer from the Netherlands</h2>
            <Activity/>
            <div className={"mt-8 flex flex-col gap-4"}>
                <p>
                    I&apos;m a software developer who enjoys building things that are both useful and enjoyable to use.
                    I spend most of my time working with <MarkedText>React</MarkedText>, <MarkedText>Next.js</MarkedText>, <MarkedText>TypeScript</MarkedText>, and <MarkedText>TailwindCSS</MarkedText>, turning ideas into fast, polished web applications.
                </p>
                <p>
                    I&apos;ve also worked extensively with <MarkedText>SQL</MarkedText>&nbsp;databases, particularly <MarkedText>PostgreSQL</MarkedText>&nbsp;and <MarkedText>MySQL</MarkedText>, and I enjoy designing reliable backends just as much as crafting great user interfaces.
                </p>
                <p>
                    <MarkedText>Java</MarkedText>&nbsp;is where I have the deepest roots. With over 10 years of experience, it&apos;s the language that taught me how to build software that lasts, and I still take pride in writing clean, maintainable code.
                </p>
                <p>
                    I&apos;m always looking for opportunities to learn, improve, and create software that makes a real difference.
                </p>
            </div>
        </Page>
    );
}

function InfoChip({icon, text}: Readonly<{ icon: ReactNode, text: string }>) {
    return (
        <div
            className={"bg-ctp-surface0 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-accent hover:text-ctp-base transition-colors"}>
            {icon}
            {text}
        </div>
    );
}

function MarkedText({children}: FCP) {
    return <span className={"text-accent font-bold"}>{children}</span>;
}
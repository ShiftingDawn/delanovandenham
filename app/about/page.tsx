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
            <SectionHeader>
                Hello! I&apos;m Delano van den Ham, a full-stack developer from the
                Netherlands
            </SectionHeader>
            <Activity/>
            <div className={"mt-8 flex flex-col gap-4"}>
                <p>
                    I&apos;m a software developer who enjoys building things that are both useful and enjoyable to use.
                    I spend most of my time working with <MarkedText
                    href={"https://react.dev/"}>React</MarkedText>, <MarkedText
                    href={"https://nextjs.org/"}>Next.js</MarkedText>, <MarkedText
                    href={"https://typescriptlang.org/"}>TypeScript</MarkedText>,
                    and <MarkedText href={"https://tailwindcss.com/"}>TailwindCSS</MarkedText>, turning ideas into fast,
                    polished web applications.
                </p>
                <p>
                    I&apos;ve also worked extensively with <MarkedText>SQL</MarkedText>&nbsp;databases,
                    particularly <MarkedText
                    href={"https://www.postgresql.org/"}>PostgreSQL</MarkedText>&nbsp;and <MarkedText
                    href={"https://www.mysql.com/"}>MySQL</MarkedText>, and I enjoy designing reliable backends just as
                    much as crafting great user interfaces.
                </p>
                <p>
                    <MarkedText href={"https://www.java.com/"}>Java</MarkedText>&nbsp;is where I have the deepest roots.
                    With over 10 years of
                    experience, it&apos;s the language that taught me how to build software that lasts, and I still take
                    pride in writing clean, maintainable code.
                </p>
                <p>
                    I&apos;m always looking for opportunities to learn, improve, and create software that makes a real
                    difference.
                </p>
            </div>
            <SectionHeader>
                Hobbies &amp; Personal Life
            </SectionHeader>
            <div className={"flex flex-col gap-4"}>
                <p>
                    Outside of development, I spend a lot of my free time gaming and tinkering with computer hardware.
                    One of my favourite games is <MarkedText href={"https://minecraft.net"}>Minecraft</MarkedText>,
                    especially the incredibly in-depth <MarkedText href={"https://gtnewhorizons.com"}>GregTech: New
                    Horizons modpack</MarkedText>, where I enjoy the long-term progression and complex automation.
                    I&apos;m also a big fan of the Monster Hunter series and regularly spend time exploring Genshin
                    Impact.
                </p>
                <p>
                    When I&apos;m not gaming, you&apos;ll usually find me building PCs, upgrading hardware, or
                    experimenting with different components just for the fun of learning how they work.
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

function MarkedText({href, children}: FCP<{ href?: string }>) {
    return href ? (
        <a className={"text-accent font-bold underline"} href={href} target={"_blank"}>{children}</a>
    ) : (
        <span className={"text-accent font-bold"}>{children}</span>
    );
}

function SectionHeader({children}: FCP) {
    return <h2 className={"mt-8"}>{children}</h2>;
}
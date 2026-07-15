import {ReactNode} from "react";
import Image from "next/image";
import {Heading} from "$c/typography/Heading";

export function InternshipList() {
    return (
        <>
            <Heading level={2} className={"text-center"}>Internships</Heading>
            <div className={"flex flex-col gap-8"}>
                <InternshipCard
                    company={"Your Next Concepts"}
                    task={"Thesis on performance benchmarking and fixing performance problems"}
                    description={"Analyzed and resolved application performance bottlenecks through benchmarking and optimization using PHP, Laravel, Vue.js, RabbitMQ, and MySQL, resulting in an average 65% improvement in planning generation speed."}
                    when={[new Date("2025-01-25"), new Date("2025-06-24")]}
                    image={
                        <Image src={"/resume/ync.svg"} alt={"Your Next Concepts logo"} width={170} height={61}/>
                    }/>
                <InternshipCard
                    company={"Centric"}
                    task={"Modernizing and rewriting the front-end of a medical application"}
                    description={"Modernized the front end of Isala's Thrombosis Care Portal by rebuilding the legacy interface with React, TypeScript, and Tailwind CSS. Inventoried existing screens, developed a reusable framework, and rebuilt the entire application, resulting in a modern, responsive, and maintainable user interface tailored to the needs of an older user base."}
                    when={[new Date("2022-02-28"), new Date("2022-08-12")]}
                    image={
                        <Image src={"/resume/centric.svg"} alt={"Centric logo"} width={174} height={32}
                               className={"pt-4"}/>
                    }/>
                <InternshipCard
                    company={"Bizzmark"}
                    task={"Building a KPI-dashboard"}
                    description={"Designed and developed a KPI dashboard using PHP, Phalcon, JavaScript, and MySQL to provide stakeholders with actionable insights through real-time data visualization and performance metrics."}
                    when={[new Date("2017-08-01"), new Date("2018-02-01")]}
                    image={
                        <Image src={"/resume/bizzmark.jpg"} alt={"Bizzmark logo"} width={150} height={95}/>
                    }/>
            </div>
        </>
    );
}

interface InternshipCardProps {
    company: string;
    task: string;
    when: [Date, Date];
    description?: string;
    image: ReactNode
}

function InternshipCard({company, task, when, description, image}: InternshipCardProps) {
    const from = when[0].toLocaleDateString("en-US", {dateStyle: "long"});
    const to = when[1].toLocaleDateString("en-US", {dateStyle: "long"});
    return (
        <article className={"card w-full max-w-lg mx-auto"}>
            <div className={"flex flex-col-reverse md:flex-row md:justify-between"}>
                <p className={"text-xl font-bold text-accent"}>
                    {task}
                </p>
                <div className={"grow-0 shrink-0 self-center"}>
                    {image}
                </div>
            </div>
            <p>{company}</p>
            <p>{from} - {to}</p>
            {description && <p><i>{description}</i></p>}
        </article>
    );
}
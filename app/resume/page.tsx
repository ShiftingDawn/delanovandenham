import {Page} from "$c/Page";
import Image from "next/image";
import {ReactNode} from "react";
import {Inter} from "next/dist/compiled/@next/font/dist/google";

export default function PageResume() {
    return (
        <Page title={"Resume"}>
            <h2>Work history</h2>
            <div className={"flex flex-col gap-8"}>
                <JobCard
                    company={"MediaMarkt"}
                    jobTitle={"Fulfillment employee"}
                    when={[["January", 2026], ["", -1]]}
                    image={
                        <Image src={"/resume/mediamarkt.svg"} alt={"Media Markt logo"} width={180} height={60}/>
                    }/>
                <JobCard
                    company={"Aldi"}
                    jobTitle={"First deputy branch manager"}
                    when={[["November", 2022], ["May", 2025]]}
                    image={
                        <Image src={"/resume/aldi.svg"} alt={"Aldi logo"} width={60} height={64}/>
                    }/>
                <JobCard
                    company={"Aldi"}
                    jobTitle={"Second deputy branch manager"}
                    description={"Promoted to first degree branch manager"}
                    when={[["Januari", 2019], ["October", 2022]]}
                    image={
                        <Image src={"/resume/aldi.svg"} alt={"Aldi logo"} width={60} height={64}/>
                    }/>
                <JobCard
                    company={"Aldi"}
                    jobTitle={"Sales employee"}
                    description={"Promoted to second degree branch manager"}
                    when={[["December", 2017], ["December", 2018]]}
                    image={
                        <Image src={"/resume/aldi.svg"} alt={"Aldi logo"} width={60} height={64}/>
                    }/>
            </div>
            <h2>Internships</h2>
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
            <h2>Education</h2>
            <div className={"flex flex-col gap-8"}>
                <SchoolCard
                    name={"HBO-ICT Software Development"}
                    subname={"University of Applied Science"}
                    school={"Hogeschool Utrecht"}
                    schoolLocation={"Utrecht"}
                    description={"Primary specialization in back-end development and extra specialization in the form of a Minor"}
                    image={
                        <Image src={"/resume/hu.svg"} alt={"Hogeschool Utrecht logo"} width={180} height={44}/>
                    }/>
                <SchoolCard
                    name={"Application- and Media-developer"}
                    subname={"MBO N4"}
                    school={"MBO Utrecht"}
                    schoolLocation={"Utrecht"}
                    description={"After finishing the first semester, I skipped the second year, third year and first semester of the fourth year."}
                    image={
                        <Image src={"/resume/mbou.svg"} alt={"MBO Utrecht logo"} width={120} height={77}/>
                    }/>
                <SchoolCard
                    name={"Nature and technology"}
                    subname={"HAVO"}
                    school={"Cals College"}
                    schoolLocation={"IJsselstein and Nieuwegein"}
                    description={"First three years in Nieuwegein, finished the last two years in IJsselstein"}
                    image={
                        <Image src={"/resume/cals.png"} alt={"Cals College logo"} width={60} height={60}/>
                    }/>
            </div>
        </Page>
    );
}

interface JobCardProps {
    company: string;
    jobTitle: string;
    when: [[string, number], [string, number]];
    description?: string;
    image: ReactNode
}

function JobCard({company, jobTitle, when, description, image}: JobCardProps) {
    return (
        <div className={"w-full max-w-lg mx-auto bg-ctp-surface0 p-4 rounded-lg"}>
            <div className={"flex flex-col md:flex-row md:justify-between"}>
                <p className={"text-xl font-bold text-accent"}>
                    {jobTitle}
                </p>
                <div className={"grow-0 shrink-0"}>
                    {image}
                </div>
            </div>
            <p>{company}</p>
            <p>{when[0][0]} {when[0][1]} - {when[1][1] === -1 ? "current" : `${when[1][0]} ${when[1][1]}`}</p>
            {description && <p><i>{description}</i></p>}
        </div>
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
        <div className={"w-full max-w-lg mx-auto bg-ctp-surface0 p-4 rounded-lg"}>
            <div className={"flex flex-col md:flex-row md:justify-between"}>
                <p className={"text-xl font-bold text-accent"}>
                    {task}
                </p>
                <div className={"grow-0 shrink-0"}>
                    {image}
                </div>
            </div>
            <p>{company}</p>
            <p>{from} - {to}</p>
            {description && <p><i>{description}</i></p>}
        </div>
    );
}

interface SchoolCardProps {
    name: string;
    subname: string;
    school: string;
    schoolLocation: string;
    description: string;
    image: ReactNode
}

function SchoolCard({name, subname, school, schoolLocation, description, image}: Readonly<SchoolCardProps>) {
    return (
        <div className={"w-full max-w-lg mx-auto bg-ctp-surface0 p-4 rounded-lg"}>
            <div className={"flex flex-col md:flex-row md:justify-between"}>
                <p className={"text-xl font-bold text-accent"}>
                    {name}
                </p>
                <div className={"grow-0 shrink-0"}>
                    {image}
                </div>
            </div>
            <p>{subname}</p>
            <p>{school}, {schoolLocation}</p>
            <p>{description}</p>
        </div>
    );
}
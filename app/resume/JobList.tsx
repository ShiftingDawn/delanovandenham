import Image from "next/image";
import {ReactNode} from "react";

export function JobList() {
    return (
        <>
            <h2 className={"text-center"}>Work history</h2>
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
        </>
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
        <article className={"w-full max-w-lg mx-auto bg-ctp-surface0 p-4 rounded-lg"}>
            <div className={"flex flex-col-reverse md:flex-row md:justify-between"}>
                <p className={"text-xl font-bold text-accent"}>
                    {jobTitle}
                </p>
                <div className={"grow-0 shrink-0 self-center"}>
                    {image}
                </div>
            </div>
            <p>{company}</p>
            <p>{when[0][0]} {when[0][1]} - {when[1][1] === -1 ? "current" : `${when[1][0]} ${when[1][1]}`}</p>
            {description && <p><i>{description}</i></p>}
        </article>
    );
}
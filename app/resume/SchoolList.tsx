import Image from "next/image";
import {ReactNode} from "react";

export function SchoolList() {
    return (
        <>
            <h2 className={"text-center"}>Education</h2>
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
        </>
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
        <article className={"w-full max-w-lg mx-auto bg-ctp-surface0 p-4 rounded-lg"}>
            <div className={"flex flex-col-reverse md:flex-row md:justify-between"}>
                <p className={"text-xl font-bold text-accent"}>
                    {name}
                </p>
                <div className={"grow-0 shrink-0 self-center"}>
                    {image}
                </div>
            </div>
            <p>{subname}</p>
            <p>{school}, {schoolLocation}</p>
            <p>{description}</p>
        </article>
    );
}
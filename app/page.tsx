import {PulsingText} from "$c/PulsingText";
import {HomeSubtitle} from "@/app/HomeSubtitle";
import {Heading} from "$c/typography/Heading";

export default function Home() {
    return (
        <div>
            <div className={"flex flex-col items-center text-center"}>
                <Heading level={1}>Welcome, I&apos;m <AnimatedName/></Heading>
                <HomeSubtitle/>
            </div>
            <div className={"flex justify-center gap-4"}>
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
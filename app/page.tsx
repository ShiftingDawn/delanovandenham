import {PulsingText} from "$c/PulsingText";
import {HomeSubtitle} from "@/app/HomeSubtitle";

export default function Home() {
    return (
        <div>
            <div className={"flex flex-col items-center my-16"}>
                <h1>Welcome, I&apos;m <AnimatedName/></h1>
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
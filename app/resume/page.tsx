import {Page} from "$c/Page";
import {JobList} from "@/app/resume/JobList";
import {InternshipList} from "@/app/resume/InternshipList";
import {SchoolList} from "@/app/resume/SchoolList";

export default function PageResume() {
    return (
        <Page title={"Resume"}>
            <JobList/>
            <InternshipList/>
            <SchoolList/>
        </Page>
    );
}

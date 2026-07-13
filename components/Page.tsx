import {PageTitle} from "$c/PageTitle";

interface Props {
    title?: string;
}

export function Page({title, children}: FCP<Props>) {
    return title ? (
        <div className={"flex flex-col gap-4"}>
            <div className={"w-full text-center mb-12"}>
                <PageTitle>{title}</PageTitle>
            </div>
            {children}
        </div>
    ) : children;
}
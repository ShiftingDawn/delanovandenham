import {PageTitle} from "$c/PageTitle";

interface Props {
    name?: string;
}

export function Page({name, children}: FCP<Props>) {
    return name ? (
        <div className={"flex flex-col gap-4"}>
            <div className={"w-full text-center mb-12"}>
                <PageTitle>{name}</PageTitle>
            </div>
            {children}
        </div>
    ) : children;
}
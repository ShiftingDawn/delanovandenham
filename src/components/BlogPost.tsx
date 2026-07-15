import {Heading} from "$c/typography/Heading";
import type {BlogPost as BlogPostType} from "@/blog";
import {HugeiconsIcon} from "@hugeicons/react";
import {Calendar02Icon} from "@hugeicons/core-free-icons";

interface BlogPostProps {
    post: BlogPostType
}

export function BlogPost({post, children}: FCP<BlogPostProps>) {
    return (
        <article className={"flex flex-col gap-8"}>
            <Heading level={1}>{post.title}</Heading>
            <p>{post.description}</p>
            <span className={"flex items-center gap-2 bg-accent w-fit px-4 text-ctp-base py-2 rounded-lg"}>
                    <HugeiconsIcon icon={Calendar02Icon}/>
                {post.date.toLocaleDateString("en-US", {dateStyle: "long"})}
                </span>
            <div className={"flex flex-col gap-4"}>
                {children}
            </div>
        </article>
    );
}

interface BlogPostSectionProps {
    title?: string;
}

export function BlogPostSection({title, children}: FCP<BlogPostSectionProps>) {
    return (
        <section className={"flex flex-col gap-4"}>
            {title && <Heading level={2}>{title}</Heading>}
            {children}
        </section>
    );
}
import {Page} from "$c/Page";
import {Heading} from "$c/typography/Heading";
import {HugeiconsIcon} from "@hugeicons/react";
import {Calendar02Icon} from "@hugeicons/core-free-icons";
import Link from "next/link";
import posts, {BlogPost} from "@/blog/index";

export default function PageBlog() {
    return (
        <Page title={"Blog"}>
            {posts.map((post) => (
                <BlogCard key={post.slug} post={post}/>
            ))}
        </Page>
    );
}

interface BlogCardProps {
    post: BlogPost;
}

function BlogCard({post}: Readonly<BlogCardProps>) {
    return (
        <Link href={`/blog/${post.slug}`} aria-label={`Go to blog article named ${post.title}`}>
            <article className={"card flex flex-col gap-2"}>
                <Heading level={2} className={"text-2xl font-bold text-accent"}>{post.title}</Heading>
                <p className={"flex items-center gap-2"}>
                    <HugeiconsIcon icon={Calendar02Icon}/>
                    {post.date.toLocaleDateString("en-US", {dateStyle: "long"})}
                </p>
                <p>{post.description}</p>
            </article>
        </Link>
    );
}
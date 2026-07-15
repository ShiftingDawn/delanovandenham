import {BlogPost, BlogPostSection} from "$c/BlogPost";
import post from "$b/creating_portfolio_website";
import {MarkedText} from "$c/typography/MarkedText";

export default function PageBlogPost() {
    return (
        <BlogPost post={post}>
            <BlogPostSection title={"Who am I?"}>
                <p>
                    My name is Delano van den Ham. I&apos;m a junior software developer from the Netherlands with a
                    passion for building reliable and efficient software.
                </p>
                <p>
                    I graduated from <MarkedText href={"https://hu.nl"}>HU University of Applied Sciences
                    Utrecht</MarkedText>, where I studied HBO-ICT with a
                    specialization in Back-end Software Development. To complement this, I completed a minor in
                    Front-end Development, giving me experience across the full web development stack. During my
                    studies, I built a strong foundation in software engineering, programming, and problem-solving.
                </p>
                <p>
                    For my graduation thesis, I focused on identifying and resolving performance issues in a data-driven
                    application that helps teachers create staff scheduling plans. The project involved analyzing
                    application performance, uncovering bottlenecks, and implementing optimizations to improve
                    efficiency and responsiveness.
                </p>
                <p>
                    I&apos;m always eager to learn new technologies, improve my development skills, and work on projects
                    that make a real impact. If you want to learn more about me, visit the <MarkedText href={"/about"}>About
                    page</MarkedText>.
                </p>
            </BlogPostSection>
            <BlogPostSection title={"Why this website?"}>
                <p>
                    I&apos;ve always wanted to create a personal portfolio website, but I never found the time to
                    actually build one. That&apos;s finally changed. Now that I&apos;ve started, I want to make it
                    something I&apos;m genuinely proud of.
                </p>
                <p>
                    My goal is to make this website feel personal and reflect who I am as a developer, while still
                    adding a bit of extra flair. Rather than creating a generic portfolio, I want this site to showcase
                    not only my work and experience, but also my personality and creativity.
                </p>
            </BlogPostSection>
            <BlogPostSection title={"Design choices"}>
                <p>
                    Before I started designing my portfolio, I looked at inspiration from other developers
                    on <MarkedText href={"https://github.com/emmabostian/developer-portfolios"}>GitHub</MarkedText>.
                    Many of the examples featured busy landing pages filled with flashy animations and visual effects.
                    While those designs were impressive, they weren&apos;t the direction I wanted to take.
                </p>
                <p>
                    Instead, I chose to keep my homepage clean and minimal. My goal was to create something simple that
                    still leaves a lasting impression. Rather than relying on excessive animations or visual clutter, I
                    wanted the design to feel calm, focused, and inviting, allowing the content and overall experience
                    to speak for themselves.
                </p>
            </BlogPostSection>
            <BlogPostSection title={"Thank you for your time"}>
                <p>
                    First of all, thank you for taking the time to visit my website and read this post. I hope you
                    enjoyed it and found it an easy read. After all, this is the first blog post I&apos;ve ever written.
                </p>
                <p>
                    I don&apos;t expect to publish blog posts very often, but whenever I come across something I think
                    is worth sharing - whether it&apos;s something I&apos;ve learned, built, or simply found interesting
                    - I&apos;ll be sure to post it here.
                </p>
                <p>
                    Thanks again for stopping by, and I hope you enjoy exploring the rest of my website!
                </p>
            </BlogPostSection>
        </BlogPost>
    );
}
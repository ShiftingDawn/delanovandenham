import type {MDXComponents} from "mdx/types";
import {Heading} from "$c/typography/Heading";

const components: MDXComponents = {
    "h1": ({children}) => <Heading level={1}>{children}</Heading>,
    "h2": ({children}) => <Heading level={2}>{children}</Heading>,
    "h3": ({children}) => <Heading level={3}>{children}</Heading>,
    "h4": ({children}) => <Heading level={4}>{children}</Heading>,
    "h5": ({children}) => <Heading level={5}>{children}</Heading>,
    "h6": ({children}) => <Heading level={6}>{children}</Heading>,
}

export function useMDXComponents(): MDXComponents {
    return components;
}
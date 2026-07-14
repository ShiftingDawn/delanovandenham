export function MarkedText({href, children}: FCP<{ href?: string }>) {
    return href ? (
        <a className={"text-accent font-bold underline"} href={href} target={"_blank"}>{children}</a>
    ) : (
        <span className={"text-accent font-bold"}>{children}</span>
    );
}
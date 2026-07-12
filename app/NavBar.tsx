import Link from "next/link";

export function NavBar() {
    return (
        <header className={"w-full sticky top-0 py-4 max-w-2xl mx-auto"}>
            <nav className="h-16 flex items-center gap-4 w-full px-8 bg-ctp-crust shadow-lg rounded-2xl">
                <HomeLink/>
                <NavLink href={"/"}>Home</NavLink>
                <NavLink href={"/projects"}>Projects</NavLink>
                <NavLink href={"/about"}>About</NavLink>
                <NavLink href={"/blog"}>Blog</NavLink>
                <NavLink href={"/resume"}>Resume</NavLink>
            </nav>
        </header>
    );
}

function HomeLink() {
    return (
        <Link href={"/"} className={"text-xl font-medium"}>
            ShiftingDawn
        </Link>
    );
}

function NavLink(
    {
        href,
        children
    }: Readonly<{
        href: string,
        children: React.ReactNode;
    }>
) {
    return (
        <Link className="flex items-center justify-center h-16" href={href}>
            {children}
        </Link>
    );
}
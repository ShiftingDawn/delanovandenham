import Link from "next/link";
import {ThemeToggle} from "@/app/ThemeToggle";

export function NavBar() {
    return (
        <header className={"w-full sticky top-0 md:py-4 md:max-w-2xl mx-auto overflow-hidden"}>
            <div className={"flex w-full justify-between px-8 bg-ctp-crust shadow-lg md:rounded-2xl overflow-auto"}>
                <nav className={"h-16 flex items-center gap-4"}>
                    <HomeLink/>
                    <NavLink href={"/"}>Home</NavLink>
                    <NavLink href={"/projects"}>Projects</NavLink>
                    <NavLink href={"/about"}>About</NavLink>
                    <NavLink href={"/blog"}>Blog</NavLink>
                    <NavLink href={"/resume"}>Resume</NavLink>
                </nav>
                <div className={"flex items-center justify-center ml-8 h-16"}>
                    <ThemeToggle/>
                </div>
            </div>
        </header>
    );
}

function HomeLink() {
    return (
        <Link href={"/"} className={"text-xl font-medium"}>
            Delano
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
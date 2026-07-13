export function Footer() {
    return (
        <footer className={"flex items-center justify-between px-4 bg-ctp-crust h-12"}>
            <p>
                &copy; {new Date().getFullYear()} Delano van den Ham
            </p>
        </footer>
    )
}
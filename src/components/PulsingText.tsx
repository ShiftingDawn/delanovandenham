export function PulsingText({children}: React.PropsWithChildren) {
    return (
        <span className={"animate-[3s_infinite_pulsing-text_alternate]"}>
            {children}
        </span>
    );
}
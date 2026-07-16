"use client";
import {Tooltip as Container} from "react-tooltip";

interface Props {
    id: string;
    text: string;
}

export function Tooltip({id, text, children}: FCP<Props>) {

    return (
        <div data-tooltip-id={id} data-tooltip-content={text}>
            {children}
            <Container id={id} opacity={1} style={{
                backgroundColor: "var(--color-ctp-lavender)",
                color: "var(--color-ctp-base)",
                fontWeight: "bold",
            }} globalCloseEvents={{
                scroll: true,
                clickOutsideAnchor: true,
            }}/>
        </div>
    );
}
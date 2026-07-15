"use client";

import {useCallback, useEffect, useState} from "react";
import {GitHubCalendar} from "react-github-calendar";
import "./activity.css";

export function Activity() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMounted(true);
    }, []);

    const scroll = useCallback((node: HTMLElement) => {
        if (!node) return;
        const graphContainer = node.querySelector("div");
        if (graphContainer) {
            graphContainer.scrollLeft = graphContainer.scrollWidth;
        }
    }, []);

    return !isMounted ? null : (
        <div className={"card"}>
            <GitHubCalendar
                ref={scroll}
                username={"ShiftingDawn"}
                theme={{
                    dark: [
                        "var(--color-ctp-surface0)",
                        "var(--color-accent)",
                    ],
                }}
                tooltips={{
                    activity: {
                        withArrow: true,
                        text: activity => `${activity.level} contributions on ${activity.date}`
                    }
                }}/>
        </div>
    );
}
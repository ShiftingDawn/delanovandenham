"use client";

import {useEffect, useRef, useState} from "react";
import {GitHubCalendar} from "react-github-calendar";
import "./activity.css";

export function Activity() {
    const [isMounted, setIsMounted] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMounted(true);
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === "childList") {
                    if (ref.current) {
                        ref.current.scrollLeft = ref.current.scrollWidth;
                    }
                }
            }
        });
        if (ref.current) {
            observer.observe(ref.current, {childList: true, subtree: true});
        }
        return () => {
            observer.disconnect();
        }
    }, []);

    return !isMounted ? null : (
        <GitHubCalendar
            ref={ref}
            username={"ShiftingDawn"}
            theme={{
                dark: [
                    "var(--color-ctp-surface0)",
                    "var(--color-ctp-mauve)",
                ],
            }}
            tooltips={{
                activity: {
                    withArrow: true,
                    text: activity => `${activity.level} contributions on ${activity.date}`
                }
            }}/>
    );
}
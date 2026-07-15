"use client";

import {useTheme} from "@teispace/next-themes";
import {
    Moon02Icon as IconDarkMode,
    SolarSystemIcon as IconAutoMode,
    Sun03Icon as IconLightMode
} from "@hugeicons/core-free-icons";
import {HugeiconsIcon} from "@hugeicons/react";
import {useEffect, useState} from "react";

export function ThemeToggle() {
    const [isMounted, setIsMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    function getNextTheme(theme: string): string {
        switch (theme) {
            case "system":
                return "light";
            case "light":
                return "dark";
        }
        return "system";
    }

    function getNextThemeIcon(theme: string): typeof IconDarkMode {
        switch (getNextTheme(theme)) {
            case "light":
                return IconLightMode;
            case "dark":
                return IconDarkMode;
        }
        return IconAutoMode;
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMounted(true);
    }, [isMounted]);

    return (
        <HugeiconsIcon
            icon={!isMounted ? IconAutoMode : getNextThemeIcon(theme)}
            size={"2rem"}
            color={"var(--color-accent2)"}
            role={"button"}
            aria-label={!isMounted ? "Unloaded theme switch" : `Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className={"cursor-pointer"}
            onClick={() => setTheme(getNextTheme(theme))}
        />
    );
}
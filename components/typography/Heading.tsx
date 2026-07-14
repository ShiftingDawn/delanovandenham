import {twMerge} from "tailwind-merge";

interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
}

export function Heading({level, className, children}: FCP<HeadingProps>) {
    switch (level) {
        case 1:
            return (
                <h1 className={twMerge("text-[3rem] font-semibold", className)}>
                    {children}
                </h1>
            );
        case 2:
            return (
                <h2 className={twMerge("text-[2.25rem]", className)}>
                    {children}
                </h2>
            );
        case 3:
            return (
                <h3 className={twMerge("text-[1.75rem]", className)}>
                    {children}
                </h3>
            );
        case 4:
            return (
                <h4 className={twMerge("text-[1.5rem]", className)}>
                    {children}
                </h4>
            );
        case 5:
            return (
                <h5 className={twMerge("text-[1.25rem]", className)}>
                    {children}
                </h5>
            );
        case 6:
            return (
                <h6 className={twMerge("text-[1rem]", className)}>
                    {children}
                </h6>
            );
    }
}
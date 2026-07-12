"use client";

import {useEffect, useRef} from "react";
import Typed from "typed.js";

export function HomeSubtitle() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Junior Software Developer",
                "Junior Front-end Developer",
                "Junior Back-end Developer",
                "Cat lover",
                "Tech enthusiast",
            ],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 3000,
            loop: true,
            smartBackspace: true,
            shuffle: true
        });
        return () => {
            typed.destroy();
        }
    }, []);

    return (
        <h2 className={"font-mono"}>
            <span ref={el}></span>
        </h2>
    );
}

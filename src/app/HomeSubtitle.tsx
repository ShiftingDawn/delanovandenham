"use client";

import {useEffect, useRef} from "react";
import Typed from "typed.js";
import {Heading} from "$c/typography/Heading";

export function HomeSubtitle() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: shuffleArray([
                "Junior Software Developer",
                "Junior Front-end Developer",
                "Junior Back-end Developer",
                "Cat lover",
                "Tech enthusiast",
            ]),
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 3000,
            loop: true,
            smartBackspace: true
        });
        return () => {
            typed.destroy();
        }
    }, []);

    return (
        <Heading level={2} className={"font-mono h-12"}>
            <span ref={el}></span>
        </Heading>
    );
}

function shuffleArray<T>(array: Array<T>): Array<T> {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
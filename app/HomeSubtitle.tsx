"use client";

import {useEffect, useRef} from "react";
import Typed from "typed.js";

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
        });
        return () => {
            typed.destroy();
        }
    }, []);

    return (
        <h2>
            <span ref={el}></span>
        </h2>
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
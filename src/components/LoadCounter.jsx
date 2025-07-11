"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useRef } from "react";

function LoadCounter() {
    const countRef = useRef(null);
    const LineRef = useRef(null);
    let counter = { value: 0 };
    useGSAP(() => {
        gsap.to(counter, {
            value: 100,
            duration: 4.5,
            ease: "power1.inOut",
            delay: 1,
            onUpdate: () => {
                if (countRef.current) {
                    countRef.current.innerText =
                        Math.floor(counter.value) + "%";
                }
            },
        });
        gsap.to(LineRef.current, {
            width: "80vw",
            duration: 4.5,
            delay: 1,
            opacity: 0,
        });
    }, []);

    return (
        <div>
            <div
                className="font-counter  text-white text-3xl font-bold absolute right-20 bottom-20"
                ref={countRef}
            >
                0%
            </div>
            <div
                className=" h-1 bg-zinc-500 rounded-full absolute bottom-30 right-0"
                ref={LineRef}
            ></div>
        </div>
    );
}

export default LoadCounter;

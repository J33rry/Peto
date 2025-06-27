import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function Skills() {
    const TitleRef = useRef(null);
    useGSAP(() => {
        const chars = TitleRef.current?.children;
        if (!chars) return;

        gsap.from(chars, {
            scrollTrigger: {
                trigger: TitleRef.current,
                start: "top 80%",
                end: "top 50%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            stagger: 0.05,
            filter: "blur(10px)",
        });
    }, []);
    return (
        <section
            id="superpowers"
            className="Super_Power flex flex-col text-black bg-white h-screen w-screen"
        >
            <div
                className="font-counter text-4xl md:text-5xl lg:text-7xl xl:text-9xl flex items-center justify-center mt-8 md:mt-7 lg:mt-6 xl:mt-5"
                ref={TitleRef}
            >
                {[
                    "S",
                    "u",
                    "p",
                    "e",
                    "r",
                    "_",
                    "P",
                    "o",
                    "w",
                    "e",
                    "r",
                    "S",
                ].map((char, index) => {
                    return (
                        <div className="" key={index}>
                            {char}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills;

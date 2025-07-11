import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import NavBar from "./NavBar";
gsap.registerPlugin(ScrollTrigger);

function Skills() {
    const TitleRef = useRef(null);
    const sectionRef = useRef(null);
    const powerRef = useRef(null);
    const power1Ref = useRef(null);
    const text1Ref = useRef(null);
    const image1Ref = useRef(null);
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
        ScrollTrigger.create({
            trigger: TitleRef.current,
            start: "top top",
            endTrigger: sectionRef.current,
            end: "bottom top",
            pin: true,

            pinSpacing: false,
            scrub: 1,
        });
        ScrollTrigger.create({
            trigger: powerRef.current,
            start: "top 20%",
            endTrigger: sectionRef.current,
            end: "bottom 20%",
            pinSpacing: false,
            pin: true,
        });
        const section = document.getElementById("superpowers");
        const NavBar = document.querySelector(".navbar");
        ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
            onEnter: () => {
                gsap.to(NavBar, {
                    backgroundColor: "rgba(0,0,0,0.3)",
                    duration: 0.5,
                });
            },
            onEnterBack: () => {
                gsap.to(NavBar, {
                    backgroundColor: "rgba(0,0,0,0.3)",
                    duration: 0.5,
                });
            },
            onLeave: () => {
                gsap.to(NavBar, {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    duration: 0.5,
                });
            },
            onLeaveBack: () => {
                gsap.to(NavBar, {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    duration: 0.5,
                });
            },
        });
    }, []);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    useEffect(() => {
        const boxes = gsap.utils.toArray(".reveal-box");
        const texts = gsap.utils.toArray(".reveal-word");

        gsap.set(texts, { opacity: 1 });

        gsap.to(boxes, {
            xPercent: 100,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 100%",
                end: "+=300",
                scrub: 1,
                markers: true,
            },
            onComplete: () => {
                gsap.to(boxes, {
                    scrollTrigger: {
                        trigger: text1Ref.current,
                        start: "top 80%",
                        end: "+=300",
                        scrub: 1,
                        markers: true,
                    },
                    xPercent: 0,
                    stagger: 0.05,
                    ease: "power2.in",
                });
            },
        });
        gsap.set(imageRef.current, {
            scale: 0.6,
            opacity: 0.4,
        });
        gsap.to(imageRef.current, {
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 100%",
                end: "+=300",
                scrub: 1,
            },
            opacity: 1,
            scale: 1,
        });
    }, []);
    return (
        <section
            id="superpowers"
            ref={sectionRef}
            className="Super_Power flex flex-col text-black bg-white"
        >
            <div
                className="top-0 right-0 left-0 text-4xl md:text-5xl lg:text-7xl xl:text-9xl flex items-center justify-center mt-12 md:mt-10 lg:mt-10 xl:mt-12 font-counter"
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
                        <div
                            className="text-shadow-lg text-shadow-black/60"
                            key={index}
                        >
                            {char}
                        </div>
                    );
                })}
            </div>
            <div
                className="p-4 md:p-8 lg:p-12 xl:p-16 flex items-center justify-center gap-12 md:gap-16 lg:gap-20 xl:gap-24 mt-24 font-jaapokki"
                ref={powerRef}
            >
                <div
                    ref={textRef}
                    className="text-lg md:text-2xl lg:text-3xl xl:text-5xl w-[50%] leading-5 xl:leading-[3rem] text-black flex flex-wrap"
                >
                    {[
                        ["CUT"],
                        ["E", "font-jaapokki-subtract"],
                        ["space"],
                        ["ON"],
                        ["space"],
                        ["THE"],
                        ["space"],

                        ["OUTSIDE", "font-jaapokki-enchance"],

                        ["space"],
                        ["DEADLY", "font-jaapokki-enchance"],

                        ["space"],
                        ["ON"],
                        ["space"],
                        ["THE"],
                        ["space"],
                        ["I", "font-jaapokki-subtract"],
                        ["NSI"],
                        ["D", "font-jaapokki-enchance"],
                        ["E."],
                        ["space"],
                        ["THEY"],
                        ["space"],
                        ["FI"],
                        ["G", "font-jaapokki-enchance"],
                        ["HT"],
                        ["space"],
                        ["with style", "underline"],
                        ["img"],
                        ["A", "font-jaapokki-subtract"],
                        ["ND"],
                        ["space"],
                        ["NE"],
                        ["V", "font-jaapokki-enchance"],
                        ["ER"],
                        ["space"],
                        ["MISS."],
                    ].map(([word, style], i) =>
                        word === "img" ? (
                            <img
                                key={i}
                                src="/cat/kung3.jpeg"
                                alt="Cat Kung Fu"
                                className="mx-2 md:mx-3 lg:mx-4 inline align-text-bottom h-[1em] w-auto rounded-md lg:rounded-xl animate-bounce"
                            />
                        ) : (
                            <span key={i} className="relative overflow-hidden">
                                <span
                                    className={`reveal-word relative z-10 inline-block opacity-0 ${
                                        style === "font-jaapokki-subtract" ||
                                        style === "font-jaapokki-enchance"
                                            ? style
                                            : style === "underline"
                                            ? "bg-[url('/wavy_underline.svg')] bg-no-repeat bg-bottom bg-[length:100%_0.5em] pb-1 mx-1"
                                            : ""
                                    } ${
                                        word === "space"
                                            ? "mx-0.5 md:mx-2 lg:mx-3"
                                            : ""
                                    }`}
                                >
                                    {word !== "space" ? (
                                        word
                                    ) : (
                                        <div className="hidden"></div>
                                    )}
                                </span>
                                <span className="reveal-box absolute top-0 left-0 w-full h-full bg-white z-20" />
                            </span>
                        )
                    )}
                </div>

                <img
                    src="/cat/kunfu.jpg"
                    alt="Cat Kung Fu"
                    className="w-[25%] h-auto rounded-2xl"
                    ref={imageRef}
                />
            </div>
            <div
                className="p-4 md:p-8 lg:p-12 xl:p-16 flex items-center justify-center gap-12 md:gap-16 lg:gap-20 xl:gap-24 mt-24 font-jaapokki"
                ref={power1Ref}
            >
                <div
                    ref={text1Ref}
                    className="text-lg md:text-2xl lg:text-3xl xl:text-5xl w-[50%] leading-5 xl:leading-[3rem] text-black flex flex-wrap"
                >
                    {[
                        ["CUT"],
                        ["E", "font-jaapokki-subtract"],
                        ["space"],
                        ["ON"],
                        ["space"],
                        ["THE"],
                        ["space"],

                        ["OUTSIDE", "font-jaapokki-enchance"],

                        ["space"],
                        ["DEADLY", "font-jaapokki-enchance"],

                        ["space"],
                        ["ON"],
                        ["space"],
                        ["THE"],
                        ["space"],
                        ["I", "font-jaapokki-subtract"],
                        ["NSI"],
                        ["D", "font-jaapokki-enchance"],
                        ["E."],
                        ["space"],
                        ["THEY"],
                        ["space"],
                        ["FI"],
                        ["G", "font-jaapokki-enchance"],
                        ["HT"],
                        ["space"],
                        ["with style", "underline"],
                        ["img"],
                        ["A", "font-jaapokki-subtract"],
                        ["ND"],
                        ["space"],
                        ["NE"],
                        ["V", "font-jaapokki-enchance"],
                        ["ER"],
                        ["space"],
                        ["MISS."],
                    ].map(([word, style], i) =>
                        word === "img" ? (
                            <img
                                key={i}
                                src="/cat/kung3.jpeg"
                                alt="Cat Kung Fu"
                                className="mx-2 md:mx-3 lg:mx-4 inline align-text-bottom h-[1em] w-auto rounded-md lg:rounded-xl animate-bounce"
                            />
                        ) : (
                            <span key={i} className="relative overflow-hidden">
                                <span
                                    className={`reveal-word relative z-10 inline-block opacity-0 ${
                                        style === "font-jaapokki-subtract" ||
                                        style === "font-jaapokki-enchance"
                                            ? style
                                            : style === "underline"
                                            ? "bg-[url('/wavy_underline.svg')] bg-no-repeat bg-bottom bg-[length:100%_0.5em] pb-1 mx-1"
                                            : ""
                                    } ${
                                        word === "space"
                                            ? "mx-0.5 md:mx-2 lg:mx-3"
                                            : ""
                                    }`}
                                >
                                    {word !== "space" ? (
                                        word
                                    ) : (
                                        <div className="hidden"></div>
                                    )}
                                </span>
                                <span className="reveal-box absolute top-0 left-0 w-full h-full bg-white z-20" />
                            </span>
                        )
                    )}
                </div>

                <img
                    src="/cat/kunfu.jpg"
                    alt="Cat Kung Fu"
                    className="w-[25%] h-auto rounded-2xl"
                    ref={image1Ref}
                />
            </div>
            <div className="text-black mt-[4000px] flex items-center justify-center">
                awfaduiwabdiniawbdiubaibdi
            </div>
        </section>
    );
}

export default Skills;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function Skills() {
    const TitleRef = useRef(null);
    const sectionRef = useRef(null);
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
            end: "bottom bottom",
            pin: true,

            pinSpacing: false,
            scrub: 1,
        });
        const powerTitle = gsap.utils.toArray(".power-title");
        powerTitle.forEach((element) => {
            gsap.from(element.children, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 90%",
                    end: "bottom 80%",
                    toggleActions: "play none none reverse",
                    scrub: true,
                },
                opacity: 0,
                y: 30,
                x: -10,
                ease: "power2.out",
                stagger: 0.05,
                filter: "blur(10px)",
            });
        });
        const section = document.getElementById("superpowers");
        const NavBar = document.querySelector(".navbar");
        ScrollTrigger.create({
            trigger: section,
            start: "top 100%",
            end: "bottom 0%",
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

        const cards = gsap.utils.toArray(".card");

        cards.forEach((element, index) => {
            // Pin each card
            ScrollTrigger.create({
                trigger: element,
                start: "top 25%",
                endTrigger: sectionRef.current,
                end: "bottom bottom",
                pin: true,
                scrub: 1,
            });

            // Animate scale
            if (index === cards.length - 1) return;
            gsap.to(element, {
                scale: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: cards[index + 1],
                    start: "top 80%",

                    end: "bottom bottom",
                    scrub: 1,
                },
            });
        });
    }, {});
    return (
        <section
            id="superpowers"
            ref={sectionRef}
            className="Super_Power flex flex-col text-black bg-white"
        >
            <div
                className="top-0 right-0 left-0 text-4xl md:text-5xl lg:text-7xl xl:text-9xl flex items-center justify-center mt-12 md:mt-10 lg:mt-10 xl:mt-12 font-counter border-b-2 border-black/20 pb-8 md:pb-12 lg:pb-18 xl:pb-24 mx-10"
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

            <div className="card flex flex-col-reverse lg:flex-row h-[70vh] items-center lg:items-start justify-between px-8 md:px-12 lg:px-18 xl:px-24 py-12 bg-zinc-200/30 backdrop-blur-xl gap-8 md:gap-12 lg:gap-18 xl:gap-24 border-b-2 border-dashed border-zinc-500/50">
                <div className="">
                    <div className="power-title flex font-jaapokki-subtract gap-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 md:mb-12 lg:mb-18 xl:mb-24">
                        {["SPEED", "/", "REFLEX"].map((word, index) => {
                            return (
                                <div className="" key={index}>
                                    {word}
                                </div>
                            );
                        })}
                    </div>
                    <div className="font-jaapokki text-md md:text-lg lg:text-xl leading-4 xl:text-2xl text-zinc-800 md:leading-6 xl:leading-8">
                        <span className="mx-8 md:mx-12 lg:mx-18 xl:mx-24"></span>
                        "Their reflexes? Lightning. Their speed? Blinding. Cats
                        move before you blink—dashing across rooms, dodging
                        invisible threats, and reacting with precision honed by
                        instinct. They don&apos;t chase— they calculate, strike,
                        and vanish{" "}
                        <span className="bg-[url('/wavy_underline.svg')] bg-no-repeat bg-bottom bg-[length:100%_0.5em] pb-1">
                            like a whisper.
                        </span>
                        <img
                            src="/cat/speed2.png"
                            className="inline h-[1em] mx-4 rounded-md animate-bounce hover:scale-[500%] transition-all duration-300"
                        />
                        You don&apos;t see the attack. You feel it."
                    </div>
                </div>
                <img
                    src="/cat/spped1.jpg"
                    alt="Cat Speed"
                    className="w-auto h-[60%] lg:h-[80%] my-auto rounded-2xl"
                />
            </div>
            <div className="card flex flex-col-reverse lg:flex-row h-[70vh] items-center lg:items-start justify-between px-8 md:px-12 lg:px-18 xl:px-24 py-12 bg-zinc-200/30 backdrop-blur-xl gap-8 md:gap-12 lg:gap-18 xl:gap-24 border-b-2 border-dashed border-zinc-500/50">
                <div className="">
                    <div className="power-title flex font-jaapokki-subtract gap-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 md:mb-12 lg:mb-18 xl:mb-24">
                        {["KUNG", "FU", "/", "KARATE"].map((word, index) => {
                            return (
                                <div className="" key={index}>
                                    {word}
                                </div>
                            );
                        })}
                    </div>
                    <div className="font-jaapokki text-md md:text-lg lg:text-xl leading-4 xl:text-2xl text-zinc-800 md:leading-6 xl:leading-8">
                        {" "}
                        <span className="mx-8 md:mx-12 lg:mx-18 xl:mx-24"></span>
                        "Don&apos;t be fooled by the fluff—cats are silent
                        assassins cloaked in cuteness. Behind those purring eyes
                        lie ancient{" "}
                        <span className="bg-[url('/wavy_underline.svg')] bg-no-repeat bg-bottom bg-[length:100%_0.5em] pb-1">
                            martial skills:
                        </span>
                        <img
                            src="/cat/kung3.jpeg"
                            className="inline h-[1em] mx-4 rounded-md animate-bounce hover:scale-[500%] transition-all duration-300"
                        />
                        they leap like ninjas, strike with kung-fu precision,
                        and land every move like feline black belts. Karate?
                        They've got it."
                    </div>
                </div>
                <img
                    src="/cat/kunfu.jpg"
                    alt="Cat Kung Fu"
                    className="w-auto h-[60%] lg:h-[80%] my-auto rounded-2xl"
                />
            </div>
            <div className="card flex flex-col-reverse lg:flex-row h-[70vh] items-center lg:items-start justify-between px-8 md:px-12 lg:px-18 xl:px-24 py-12 bg-zinc-200/30 backdrop-blur-xl gap-8 md:gap-12 lg:gap-18 xl:gap-24 border-b-2 border-dashed border-zinc-500/50">
                <div className="">
                    <div className="power-title flex font-jaapokki-subtract gap-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 md:mb-12 lg:mb-18 xl:mb-24">
                        {["STEALTH", "/", "SNEAKY"].map((word, index) => {
                            return (
                                <div className="" key={index}>
                                    {word}
                                </div>
                            );
                        })}
                    </div>
                    <div className="font-jaapokki text-md md:text-lg lg:text-xl leading-4 xl:text-2xl text-zinc-800 md:leading-6 xl:leading-8">
                        <span className="mx-8 md:mx-12 lg:mx-18 xl:mx-24"></span>
                        "Cats don&apos;t walk — they ghost. One moment
                        they&apos;re beside you, the next they&apos;re a shadow
                        slipping{" "}
                        <span className="bg-[url('/wavy_underline.svg')] bg-no-repeat bg-bottom bg-[length:100%_0.5em] pb-1">
                            a shadow slipping
                        </span>{" "}
                        through the silence. No creaks, no clicks — just the
                        soft whisper of paws plotting their next silent ambush.
                        <img
                            src="/cat/sneak3.avif"
                            className="inline h-[1em] mx-4 rounded-md animate-bounce hover:scale-[500%] transition-all duration-300"
                        />
                        They&apos;re not pets… they&apos;re professional
                        infiltrators in fur coats."
                    </div>
                </div>
                <img
                    src="/cat/sneak1.jpg"
                    alt="Cat Kung Fu"
                    className="w-auto h-[60%] lg:h-[80%] my-auto rounded-2xl"
                />
            </div>
            <div className="card flex flex-col-reverse lg:flex-row h-[70vh] items-center lg:items-start justify-between px-8 md:px-12 lg:px-18 xl:px-24 py-12 bg-zinc-200/30 backdrop-blur-xl gap-8 md:gap-12 lg:gap-18 xl:gap-24">
                <div className="">
                    <div className="power-title flex font-jaapokki-subtract gap-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 md:mb-12 lg:mb-18 xl:mb-24">
                        {["CUTE", "/", "DEADLY"].map((word, index) => {
                            return (
                                <div className="" key={index}>
                                    {word}
                                </div>
                            );
                        })}
                    </div>
                    <div className="font-jaapokki text-md md:text-lg lg:text-xl leading-4 xl:text-2xl text-zinc-800 md:leading-6 xl:leading-8">
                        <span className="mx-8 md:mx-12 lg:mx-18 xl:mx-24"></span>
                        "Don&apos;t mistake the wide eyes and twitchy whiskers —
                        that&apos;s camouflage. Their cuteness is a{" "}
                        <span className="bg-[url('/wavy_underline.svg')] bg-no-repeat bg-bottom bg-[length:100%_0.5em] pb-1">
                            weapon, a distraction.
                        </span>{" "}
                        While you melt at the meow, they&apos;re already in
                        control. One tilt of the head, one slow blink,
                        <img
                            src="/cat/cute2.jpg"
                            className="inline h-[1em] mx-4 rounded-md animate-bounce hover:scale-[500%] transition-all duration-300"
                        />
                        and you're defenseless. It&apos;s not affection —
                        it&apos;s psychological warfare in its fluffiest form."
                    </div>
                </div>
                <img
                    src="/cat/cute.jpg"
                    alt="Cat Kung Fu"
                    className="w-auto h-[60%] lg:h-[80%] my-auto rounded-2xl"
                />
            </div>
        </section>
    );
}

export default Skills;

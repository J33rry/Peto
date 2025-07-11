import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { use, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const TitleRef = useRef(null);
    const SubtitleRef = useRef(null);
    const Container = useRef(null);
    const scrollRef = useRef(null);
    useGSAP(() => {
        gsap.to(scrollRef.current, {
            display: "flex",
            opacity: 1,
            duration: 1,
            ease: "back.out",
            delay: 9,
        });

        gsap.from([TitleRef.current, SubtitleRef.current], {
            scrollTrigger: {
                trigger: Container.current,
                start: "top 80%",
                end: "top 50%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: -20,
            duration: 1,
            stagger: 0.5,
            ease: "back.out",
            delay: 6.5,
        });
        gsap.to([TitleRef.current, SubtitleRef.current], {
            scrollTrigger: {
                trigger: Container.current,
                start: "bottom 50%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
            },
            filter: "blur(10px)",
            duration: 1,
            stagger: 0.5,
            ease: "back.out",
        });
        const hero = document.getElementById("hero");
        gsap.to(hero, {
            scrollTrigger: {
                trigger: Container.current,
                start: "bottom 50%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
            },
            borderRadius: "10%",
            duration: 1,
            ease: "power2.out",
        });

        gsap.to(Container.current, {
            scrollTrigger: {
                trigger: Container.current,
                start: "bottom 50%",
                end: "bottom 30%",

                toggleActions: "play none none reverse",
            },
            filter: "blur(5px)",
            duration: 1,
            ease: "power2.out",
        });
    }, []);
    return (
        <section
            id="hero"
            className="flex items-center justify-center relative h-[85dvh] lg:h-[90dvh] xl:h-[95dvh] z-5 overflow-x-clip"
        >
            <div className="items-center justify-center absolute top-0 left-0 overflow-x-clip h-screen z-0">
                <video
                    src="/cat1.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover h-[85dvh] lg:h-[90dvh] xl:h-[95dvh] lg:w-screen z-0 overflow-x-clip"
                    ref={Container}
                ></video>
            </div>
            <div className="text-white absolute top-[60dvh] left-[10dvw] z-10 font-counter">
                <div
                    className="font-bold text-5xl md:text-6xl lg:text-7xl xl:text-9xl tracking-wider"
                    ref={TitleRef}
                >
                    Cat
                </div>
                <div
                    className="text-2xl lg:text-3xl xl:text-5xl"
                    ref={SubtitleRef}
                >
                    The Final Villain of EveryThing
                </div>
            </div>
            <div
                className="absolute hidden bottom-5 right-5 opacity-50 scale-75 md:scale-90 lg:scale-100"
                ref={scrollRef}
            >
                <div className=" mouse"></div>
            </div>
        </section>
    );
}

export default Hero;

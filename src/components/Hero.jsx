import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { use, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const TitleRef = useRef(null);
    const SubtitleRef = useRef(null);
    const Container = useRef(null);
    useGSAP(() => {
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
            delay: 0.3,
        });
        gsap.to(Container.current, {
            scrollTrigger: {
                trigger: Container.current,
                start: "bottom 50%",
                end: "bottom 30%",

                toggleActions: "play none none reverse",
            },
            filter: "blur(5px)",
            duration: 2,
            ease: "power2.out",
        });
    }, []);
    return (
        <section
            id="hero"
            className="flex items-center justify-center relative h-[85vh] lg:h-[90vh] xl:h-[95vh] z-5 overflow-hidden"
        >
            <div className="items-center justify-center absolute top-0 left-0 overflow-hidden w-screen h-screen z-0">
                <video
                    src="/cat1.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover h-[85vh] lg:h-[90vh] xl:h-[95vh] lg:w-screen z-0 overflow-hidden"
                    ref={Container}
                ></video>
            </div>
            <div className="text-white absolute top-[60vh] left-[10vw] z-10 font-counter">
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
        </section>
    );
}

export default Hero;

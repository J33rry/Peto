import { useGSAP } from "@gsap/react";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Gallery() {
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

        const section = document.getElementById("gallery");
        const section1 = document.getElementById("superpowers");
        const cardsText = document.querySelectorAll(".cardtext");
        const cards = document.querySelectorAll(".card");
        ScrollTrigger.create({
            trigger: section,
            start: "top 60%",
            end: "bottom bottom",
            markers: true,
            onEnter: () => {
                gsap.to(section1, {
                    backgroundColor: "#000",
                    duration: 1,
                    ease: "power2.out",
                });
                gsap.to(cards, {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "#f8f9fa",
                    duration: 1,
                    ease: "power2.out",
                });
                gsap.to(cardsText, {
                    color: "#f8f9fa",
                    duration: 1,
                    ease: "power2.out",
                });
                gsap.to(section, {
                    backgroundColor: "#000",
                    color: "#f8f9fa",
                    duration: 1,
                    ease: "power2.out",
                    borderBottomColor: "#f8f9fa",
                });
            },
            onLeave: () => {
                gsap.to(section1, {
                    backgroundColor: "#fff",
                    duration: 1,
                    ease: "power2.out",
                });
                gsap.to(cards, {
                    backgroundColor: "rgba(228, 228, 231, 0.3)",
                    color: "#000",
                    duration: 1,
                    ease: "power2.out",
                });
                gsap.to(cardsText, {
                    color: "rgb(39, 39, 42)",
                    duration: 1,
                    ease: "power2.out",
                });
                gsap.to(section, {
                    backgroundColor: "#fff",
                    color: "#000",
                    duration: 1,
                    ease: "power2.out",
                    borderBottomColor: "rgba(0, 0, 0, 0.2)",
                });
            },
            onEnterBack: () => {
                gsap.to(section1, {
                    backgroundColor: "#000",
                    duration: 1,
                    ease: "power2.out",
                });
                gsap.to(cards, {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "#f8f9fa",
                    duration: 1,
                    ease: "power2.out",
                });
                gsap.to(cardsText, {
                    color: "#f8f9fa",
                    duration: 1,
                    ease: "power2.out",
                });
                gsap.to(section, {
                    backgroundColor: "#000",
                    color: "#f8f9fa",
                    duration: 1,
                    ease: "power2.out",
                    borderBottomColor: "#f8f9fa",
                });
            },
            onLeaveBack: () => {
                gsap.to(section1, {
                    backgroundColor: "#fff",
                    duration: 1,
                    ease: "power2.out",
                });
                gsap.to(cards, {
                    backgroundColor: "rgba(228, 228, 231, 0.3)",
                    color: "#000",
                    duration: 1,
                    ease: "power2.out",
                });
                gsap.to(cardsText, {
                    color: "rgb(39, 39, 42)",
                    duration: 1,
                    ease: "power2.out",
                });
                gsap.to(section, {
                    backgroundColor: "#fff",
                    color: "#000",
                    duration: 1,
                    ease: "power2.out",
                    borderBottomColor: "rgba(0, 0, 0, 0.2)",
                });
            },
        });
    }, []);
    return (
        <div className="bg-white " id="gallery">
            <div
                className="top-0 right-0 left-0 text-4xl md:text-5xl lg:text-7xl xl:text-9xl flex items-center justify-center pt-12 md:pt-10 lg:pt-10 xl:pt-12 font-counter border-b-2 border-dashed pb-8 md:pb-12 lg:pb-18 xl:pb-24 mx-10"
                ref={TitleRef}
            >
                {[
                    "P",
                    "E",
                    "T",
                    "O",
                    "_",
                    "G",
                    "A",
                    "L",
                    "L",
                    "E",
                    "R",
                    "Y",
                ].map((char, index) => {
                    return (
                        <div
                            className="text-shadow-lg text-shadow-white/30"
                            key={index}
                        >
                            {char}
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-6 grid-rows-8 p-4 md:p-8 lg:px-24 xl:px-48 lg:py-24 gap-1 lg:gap-2 w-[100vw]">
                <main className="pointer-events-auto col-start-5 col-end-7 row-start-3 row-end-5 shadow-md shadow-zinc-300/30 bg-white/10">
                    <Spline scene="https://prod.spline.design/2PcNo-joJZwlXmvD/scene.splinecode" />
                </main>
                <video
                    src="/Videos/cat2.mp4"
                    muted
                    playsInline
                    loop
                    autoPlay
                    className="col-start-1 col-end-2 row-start-4 row-end-6 h-[30vh] md:h-[50vh] w-full object-cover rounded-lg hover:scale-110 transition-all duration-500 lg:blur-xs hover:blur-none hover:shadow-lg shadow-zinc-500"
                ></video>
                <video
                    src="/Videos/cat3.mp4"
                    muted
                    playsInline
                    loop
                    autoPlay
                    className="col-start-1 col-end-3 row-start-1 row-end-2 h-[15vh] md:h-[25vh] w-full object-cover rounded-lg hover:scale-110 transition-all duration-500 lg:blur-xs hover:blur-none hover:shadow-lg shadow-zinc-500"
                ></video>
                <video
                    src="/Videos/cat4.mp4"
                    muted
                    playsInline
                    loop
                    autoPlay
                    className="row-start-5 row-end-6 col-start-4 col-end-6 h-[15vh] md:h-[25vh] w-full object-cover rounded-lg hover:scale-110 transition-all duration-500 lg:blur-xs hover:blur-none hover:shadow-lg shadow-zinc-500"
                ></video>
                <video
                    src="/Videos/cat5.mp4"
                    muted
                    playsInline
                    loop
                    autoPlay
                    className="row-start-6 row-end-7 col-start-1 col-end-4 g-[15vh] md:h-[25vh] w-full object-cover rounded-lg hover:scale-110 transition-all duration-500 lg:blur-xs hover:blur-none hover:shadow-lg shadow-zinc-500"
                ></video>
                <video
                    src="/Videos/cat6.mp4"
                    muted
                    playsInline
                    loop
                    autoPlay
                    className="row-start-7 row-end-8 col-start-1 col-end-4 h-[15vh] md:h-[25vh] w-full object-cover rounded-lg hover:scale-110 transition-all duration-500 lg:blur-xs hover:blur-none hover:shadow-lg shadow-zinc-500"
                ></video>
                <video
                    src="/Videos/cat7.mp4"
                    muted
                    playsInline
                    loop
                    autoPlay
                    className="row-start-6 row-end-9 col-start-4 col-end-7 h-[45vh] md:h-[75vh] w-full object-cover rounded-lg hover:scale-110 transition-all duration-500 hover:shadow-lg shadow-zinc-500"
                ></video>
                <video
                    src="/Videos/cat8.mp4"
                    muted
                    playsInline
                    loop
                    autoPlay
                    className="row-start-2 row-end-5 col-start-2 h-[45vh] col-end-5 md:h-[75vh] w-full object-cover rounded-lg hover:scale-110 transition-all duration-500 hover:shadow-lg shadow-zinc-500"
                ></video>
            </div>
        </div>
    );
}
export default Gallery;

"use client";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Catcar from "@/components/Catcar";
import LoadCounter from "@/components/LoadCounter";
function Loading() {
    const LoadRef = useRef(null);

    useGSAP(() => {
        gsap.from(LoadRef.current, {
            opacity: 0.2,
            scale: 0.7,
            duration: 1,
            ease: "back.in",
        });
    }, []);
    useEffect(() => {
        const minLoadingTime = 5800;
        const startTime = Date.now();

        const hideLoader = () => {
            const timeElapsed = Date.now() - startTime;
            const delay = Math.max(0, minLoadingTime - timeElapsed);

            setTimeout(() => {
                gsap.to(LoadRef.current, {
                    opacity: 0,
                    scale: 0.7,
                    duration: 1,
                    ease: "back.out",
                    onComplete: () => {
                        LoadRef.current.style.display = "none";
                    },
                });
            }, delay);
        };

        if (document.readyState === "complete") {
            hideLoader();
        } else {
            window.addEventListener("load", hideLoader);
        }

        return () => {
            window.removeEventListener("load", hideLoader);
        };
    }, []);
    return (
        <div
            className="flex flex-col items-center justify-center h-screen w-screen bg-[#000] absolute top-0 left-0 z-10"
            ref={LoadRef}
        >
            <Catcar />
            <LoadCounter />
        </div>
    );
}

export default Loading;

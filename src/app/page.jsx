"use client";
import React, { use, useEffect, useRef, useState } from "react";
import NavBar from "@/components/NavBar";

import gsap from "gsap";
import Loading from "@/pages/Loading";
import MainPage from "@/pages/MainPage";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function page() {
    const MainRef = useRef(null);
    const NavRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const nav = NavRef.current;
        let lastY = window.scrollY;

        const trigger = ScrollTrigger.create({
            start: 0,
            end: MainRef.current.scrollHeight,
            onUpdate: (self) => {
                const currentY = window.scrollY;
                console.log("Current Y:", currentY, "Last Y:", lastY);

                if (currentY > lastY) {
                    // Scroll Down
                    gsap.to(nav, {
                        top: -70,
                        duration: 0.6,
                        opacity: 0,
                        scale: 0.9,
                        ease: "power2.out",
                    });
                } else {
                    gsap.to(nav, {
                        top: 5,
                        duration: 0.6,
                        ease: "power2.out",
                        opacity: 1,
                        scale: 1,
                    });
                }

                lastY = currentY;
            },
        });

        return () => {
            trigger.kill();
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            gsap.to(MainRef.current, {
                opacity: 1,
                height: "auto",
                duration: 0.5,
                ease: "power2.out",
            });
        }, 6);
        return () => clearTimeout(timer);
    }, []);

    // remember here it is
    return (
        <div className="relative bg-transparent">
            <div
                className="fixed top-0 right-0 left-0 z-10 opacity-0"
                ref={NavRef}
            >
                <NavBar />
            </div>
            {/* <Loading /> */}

            <div
                className="opacity-0 h-screen overflow-y-hidden overflow-x-hidden"
                ref={MainRef}
            >
                <MainPage />
            </div>
        </div>
    );
}

export default page;

"use client";
import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import gsap from "gsap";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import UserButton from "./UserButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function NavBar() {
    const OpenRef = useRef(null);

    const handleEnter = (e) => {
        gsap.to(e.currentTarget, {
            scale: 0.96,
            duration: 0.2,
            ease: "linear",
            backgroundColor: "#efefef4e",
            boxShadow: "inset 0 2px 4px rgba(82, 82, 91, 0.2)",
        });
    };

    const handleLeave = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1,
            duration: 0.2,
            ease: "linear",
            backgroundColor: "transparent",
            boxShadow: "none",
        });
    };
    const [open, setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const toggleMenu = () => {
        if (!open) setIsVisible(true);
        setOpen(!open);
    };
    useEffect(() => {
        if (!OpenRef.current) return;

        const items = OpenRef.current.querySelectorAll(".menu-item");

        if (open) {
            gsap.fromTo(
                items,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "power2.out",
                }
            );
        } else {
            gsap.to(items, {
                opacity: 0,
                y: -20,
                duration: 0.2,
                stagger: 0.05,
                ease: "power2.in",
                onComplete: () => setIsVisible(false),
            });
        }
    }, [open]);

    return (
        <div className="navbar flex items-center bg-white/10 backdrop-blur-lg opacity-100 shadow-sm shadow-zinc-600 justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <div className="flex items-center">
                <div
                    className="cursor-pointer flex items-center gap-3"
                    onClick={() => {
                        const sectionId = "hero";
                        document.getElementById(sectionId)?.scrollIntoView({
                            behavior: "smooth",
                        });
                    }}
                >
                    {/* LOGO */}

                    <Image
                        src="/CatPaw2.png"
                        height={40}
                        width={40}
                        alt="LOGO"
                        className="py-2 mix-blend-hue"
                    />
                    <h1 className=" text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold font-counter tracking-wider text-white sm:text-md ">
                        PawFect
                    </h1>
                </div>
                <div className="font-counter text-md gap-3 lg:text-lg lg:gap-5 ml-4 lg:ml-6 items-center hidden md:flex">
                    {["Super_Powers", "Details", "Gallery", "About"].map(
                        (item) => (
                            <div
                                key={item}
                                className={`cursor-pointer rounded-lg px-2 py-2 lg:px-3 text-white ${item}`}
                                onClick={() => {
                                    const sectionId = item
                                        .replace("_", "")
                                        .toLowerCase(); // e.g. "superpowers"
                                    document
                                        .getElementById(sectionId)
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                                onMouseEnter={handleEnter}
                                onMouseLeave={handleLeave}
                            >
                                {item}
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="flex gap-3">
                <UserButton
                    handleEnter={handleEnter}
                    handleLeave={handleLeave}
                />
                <div
                    className="flex md:hidden relative bg-transparent"
                    onClick={toggleMenu}
                >
                    <div
                        className="cursor-pointer flex items-center justify-center rounded-lg shadow-zinc-300 p-2"
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave}
                    >
                        {!open ? (
                            <HiOutlineMenuAlt2
                                style={{
                                    color: "#fff",
                                    scale: "1.5",
                                }}
                            />
                        ) : (
                            <HiOutlineMenuAlt3
                                style={{
                                    color: "#fff",
                                    scale: "1.5",
                                }}
                            />
                        )}
                    </div>
                    {isVisible && (
                        <div
                            className="absolute top-11 -right-3 z-50 w-[80vw] px-4 py-2 bg-white/10 backdrop-blur-lg border-1 border-white/20 shadow-md shadow-zinc-800 text-right font-counter rounded-xl rounded-tr-none"
                            ref={OpenRef}
                        >
                            {[
                                "Super_Powers",
                                "Details",
                                "Gallery",
                                "About",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="menu-item cursor-pointer rounded-lg px-2 py-2 lg:px-3 text-white relative font-bold"
                                    onMouseEnter={handleEnter}
                                    onMouseLeave={handleLeave}
                                    onClick={() => {
                                        const sectionId = item
                                            .replace("_", "")
                                            .toLowerCase(); // e.g. "superpowers"
                                        document
                                            .getElementById(sectionId)
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                    }}
                                >
                                    {item}

                                    <div className="w-[90%] h-[1px] rounded-full bg-gradient-to-l from-white/80 to-white/0 absolute -bottom-0.1 right-0"></div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {/* <div className="">LOGO</div> */}
        </div>
    );
}

export default NavBar;

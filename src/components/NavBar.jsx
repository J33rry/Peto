"use client";
import React, { useEffect, useRef, useState } from "react";
import CatPaw from "/CatPaw.png";
import Image from "next/image";
import gsap from "gsap";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import UserButton from "./UserButton";

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
        <div className="flex items-center bg-white rounded-xl shadow-sm shadow-zinc-600 justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <div className="flex items-center">
                <div className="cursor-pointer flex items-center gap-3">
                    {/* LOGO */}

                    <Image src={CatPaw} height={50} width={50} alt="LOGO" />
                    <h1 className=" text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold font-counter tracking-wider text-zinc-700 sm:text-md ">
                        PawFect
                    </h1>
                </div>
                <div className="font-counter text-md gap-3 lg:text-lg lg:gap-5 ml-4 lg:ml-6 items-center hidden md:flex">
                    {["Features", "Details", "Gallery", "About"].map((item) => (
                        <div
                            key={item}
                            className="cursor-pointer rounded-lg px-2 py-2 lg:px-3 text-zinc-600"
                            onMouseEnter={handleEnter}
                            onMouseLeave={handleLeave}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex gap-3">
                <UserButton
                    handleEnter={handleEnter}
                    handleLeave={handleLeave}
                />
                <div className="flex md:hidden relative" onClick={toggleMenu}>
                    <div className="flex items-center justify-center">
                        <HiOutlineMenuAlt2
                            style={{
                                color: "#000",
                                scale: "1.5",
                            }}
                        />
                    </div>
                    {isVisible && (
                        <div
                            className="absolute bg-white -right-3 top-11 font-counter text-md w-[80vw] text-right px-4 rounded-xl rounded-tr-none py-2 shadow-sm/40 shadow-zinc-600"
                            ref={OpenRef}
                        >
                            {["Features", "Details", "Gallery", "About"].map(
                                (item) => (
                                    <div
                                        key={item}
                                        className="menu-item cursor-pointer rounded-lg px-2 py-2 lg:px-3 text-zinc-600 relative"
                                        onMouseEnter={handleEnter}
                                        onMouseLeave={handleLeave}
                                    >
                                        {item}

                                        <div className="w-[90%] h-[1px] rounded-full bg-gradient-to-l from-zinc-400 to-white absolute -bottom-0.1 right-0"></div>
                                    </div>
                                )
                            )}
                        </div>
                    )}
                </div>
            </div>
            {/* <div className="">LOGO</div> */}
        </div>
    );
}

export default NavBar;

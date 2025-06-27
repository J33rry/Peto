"use client";
import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import gsap from "gsap";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import UserButton from "./UserButton";

const LogoSvg = () => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    d="M8.42215 20.0814C8.42215 20.9774 8.43235 21.8344 8.43784 22.3663C8.44056 22.6298 8.61026 22.8632 8.86048 22.9459C10.9384 23.632 13.1769 23.6639 15.2735 23.0371L15.5663 22.9495C15.8485 22.8652 16.0422 22.6062 16.0443 22.3117C16.0495 21.5786 16.0609 20.2952 16.0609 18.7824C16.0609 17.4102 15.5835 16.532 15.0297 16.0746C18.4289 15.7087 22 14.4646 22 8.84782C22 7.2378 21.408 5.93881 20.4341 4.91425C20.5868 4.54834 21.1215 3.0481 20.2813 1.03558C20.2813 1.03558 19.0018 0.633071 16.08 2.53582C14.8578 2.2065 13.5592 2.04184 12.2606 2.04184C10.962 2.04184 9.66344 2.2065 8.44124 2.53582C5.51943 0.651367 4.23994 1.03558 4.23994 1.03558C3.39968 3.0481 3.93439 4.54834 4.08717 4.91425C3.11323 5.93881 2.52122 7.2561 2.52122 8.84782C2.52122 14.4463 6.07324 15.7087 9.47247 16.0746C9.03325 16.4405 8.63221 17.0809 8.49854 18.0322C7.62008 18.4165 5.42394 19.0385 4.04897 16.8247C3.76252 16.3856 2.90316 15.3062 1.70006 15.3245C0.420572 15.3428 1.18445 16.0197 1.71916 16.2942C2.36845 16.6418 3.11323 17.9408 3.2851 18.3616C3.59065 19.1849 4.58368 20.7583 8.42215 20.0814Z"
                    fill="#000000"
                ></path>{" "}
            </g>
        </svg>
    );
};

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
        <div className="flex items-center bg-white/10 backdrop-blur-lg opacity-100 rounded-xl shadow-sm shadow-zinc-600 justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
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
                    {/* <LogoSvg /> */}
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

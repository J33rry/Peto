"use client";
import React, { useRef } from "react";
import NavBar from "@/components/NavBar";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Loading from "@/pages/Loading";
import MainPage from "@/pages/MainPage";

function page() {
    const MainRef = useRef(null);
    const NavRef = useRef(null);

    useGSAP(() => {
        gsap.from([NavRef.current, MainRef.current], {
            opacity: 0,
            delay: 2,
        });
    }, []);

    return (
        <div className="relative bg-zinc-400 ">
            <div className="absolute top-5 right-2 left-2 m-2" ref={NavRef}>
                <NavBar />
            </div>
            <Loading />
            <div className="absolute top-5 m-2" ref={MainRef}>
                <MainPage />
            </div>
        </div>
    );
}

export default page;

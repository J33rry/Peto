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

    return (
        <div className="relative bg-zinc-400 ">
            <div className="fixed top-5 right-2 left-2 m-2 z-10" ref={NavRef}>
                <NavBar />
            </div>
            {/* <Loading /> */}
            <div className="" ref={MainRef}>
                <MainPage />
            </div>
        </div>
    );
}

export default page;

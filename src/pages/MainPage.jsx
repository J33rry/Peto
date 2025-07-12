import Details from "@/components/Details";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import React, { useRef } from "react";

function MainPage() {
    return (
        <div className="">
            <Hero />
            <Skills />
            <Details />
        </div>
    );
}

export default MainPage;

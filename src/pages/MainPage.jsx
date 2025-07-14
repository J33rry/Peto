import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import React, { useRef } from "react";

function MainPage() {
    return (
        <div className="">
            <Hero />
            <Skills />
            <Gallery />
        </div>
    );
}

export default MainPage;

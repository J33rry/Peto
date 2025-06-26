"use client";
import Lottie from "lottie-react";
import React from "react";
import CatPaw from "/Animations/CatPaw.json";
import CatSiting from "/Animations/CatSiting.json";

function CatLoading() {
    return (
        <div>
            <div className="flex items-center justify-center h-screen w-screen bg-zinc-200 text-black">
                <div className="font-catload text-3xl md:text-5xl lg:text-7xl xl:text-9xl">
                    L
                </div>
                <div className="">
                    <Lottie
                        animationData={CatPaw}
                        loop
                        style={{
                            height: "20vh",
                            width: "10vw",
                            margin: "0",
                        }}
                    />
                </div>
                <div className="font-catload text-3xl md:text-5xl lg:text-7xl xl:text-9xl">
                    ading...
                </div>
                <div className="">
                    <Lottie
                        animationData={CatSiting}
                        loop
                        style={{
                            width: "20vw",
                            margin: "auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default CatLoading;

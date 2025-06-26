"use client";
import React from "react";
import Lottie from "lottie-react";
import WalkingDog from "/Animations/DogWalking.json";
import DogPaw from "/Animations/DogPawc.json";
function DogLoading() {
    return (
        <div className=" perspective-[100px] bg-zinc-900 h-screen w-screen flex items-center justify-center">
            <div className="flex items-center justify-center h-[90%] w-[90%] bg-zinc-800 border-2 border-zinc-600 rounded-lg inset-shadow-sm inset-shadow-zinc-500">
                <div className="font-dogload text-2xl md:text-4xl lg:text-6xl xl:text-8xl p-0 m-0">
                    L
                </div>
                <div className="m-0">
                    <Lottie
                        animationData={DogPaw}
                        loop
                        style={{
                            width: "6vw",
                            margin: "auto",
                        }}
                    />
                </div>
                <div className="font-dogload text-2xl md:text-4xl lg:text-6xl xl:text-8xl p-0 m-0">
                    ading...
                </div>
                <div className="m-0 p-0">
                    <Lottie
                        animationData={WalkingDog}
                        loop
                        style={{
                            width: "20vw",
                            margin: "auto",
                            transformStyle: "preserve-3d",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default DogLoading;

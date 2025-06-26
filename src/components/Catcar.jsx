import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function Catcar() {
    const VideoRef = useRef(null);
    useGSAP(() => {
        gsap.to(VideoRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            delay: 5,
        });
    }, []);

    return (
        <div className="flex items-center justify-center">
            {/* <Image src={catLoad} alt="CAR" unoptimized={true} loop={false} /> */}
            {/* <video src={catLoad} typeof="mp4"></video> */}
            <video
                src="/catLoader1.mp4"
                autoPlay
                muted
                playsInline
                style={{
                    width: "50%",
                    height: "auto",
                    objectFit: "contain",
                    // borderRadius: "5%",
                    // boxShadow: "0 0 10px rgba(255,255,255, .3)",
                }}
                ref={VideoRef}
            />
        </div>
    );
}

export default Catcar;

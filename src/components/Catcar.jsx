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
            <video
                src="/catLoader1.mp4"
                autoPlay
                muted
                playsInline
                style={{
                    width: "50%",
                    height: "auto",
                    objectFit: "contain",
                }}
                ref={VideoRef}
            />
        </div>
    );
}

export default Catcar;

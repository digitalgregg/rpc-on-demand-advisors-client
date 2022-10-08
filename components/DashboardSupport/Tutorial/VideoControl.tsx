import Image from "next/image";
import { useRef, useState } from "react";

export const VideoControls = () => {
    const [isPlay, setPlay] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setPlay(true);
        }
    };

    return (
        <div className="h-[100%] w-[100%] relative rounded-[2.4px]">
            <video className="w-[100%] h-[100%]" ref={videoRef} controls>
                <source src="/assets/videos/test-video.mp4" type="video/mp4" />
            </video>
            {!isPlay && (
                <>
                    <div>
                        <img
                            src="/assets/DashboardSupport/videobg.png"
                            className="absolute top-0 left-0 w-full h-full"
                            alt=""
                        />
                    </div>
                    <div onClick={handlePlay} className="absolute flex flex-col gap-[10px] justify-center items-center cursor-pointer -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <img
                            src="/assets/DashboardSupport/videoPlay.svg"
                            alt=""
                            className="lg:w-[60px] lg:h-[60px]"
                        />
                        <p className=" font-semibold leading-[19px] text-White text-sm">
                                Watch How
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

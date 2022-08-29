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
        <div className="h-full w-full relative rounded-[2.4px]">
            <video className="w-full h-full" ref={videoRef} controls>
                <source src="/assets/videos/test-video.mp4" type="video/mp4" />
            </video>
            {!isPlay && (
                <>
                    <div className=" relative w-[35px] h-[35px]">
                        <Image
                            layout="fill"
                            src="/assets/DashboardSupport/videobg.png"
                            alt="icons"
                            // onClick={handlePlay}
                        />
                    </div>
                    <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-full lg:h-full">
                        <div
                            onClick={handlePlay}
                            className=" cursor-pointer flex flex-col justify-center items-center gap-[10px] lg:w-full lg:h-full"
                        >
                            <div className=" relative lg:w-[60px] lg:h-[60px]">
                                <Image
                                    layout="fill"
                                    src="/assets/DashboardSupport/videoPlay.svg"
                                    alt=""
                                />
                            </div>
                            <p className=" font-semibold leading-[19px] text-White text-sm">
                                Watch How
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

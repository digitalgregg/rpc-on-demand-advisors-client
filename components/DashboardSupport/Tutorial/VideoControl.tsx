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
                    <div className="h-full z-10 w-full absolute top-0 left-0">
                        <Image
                            layout="fill"
                            src="/assets/DashboardSupport/videobg.png"
                            alt=""
                            onClick={handlePlay}
                        />
                    </div>
                    <div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[60px] lg:h-[60px]">
                        <div className=" relative lg:w-[60px] lg:h-[60px]">
                            <Image
                                layout="fill"
                                src="/assets/DashboardSupport/videoPlay.png"
                                alt=""
                                onClick={handlePlay}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

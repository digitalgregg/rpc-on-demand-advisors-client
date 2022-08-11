/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { useState } from "react";

type SectionContentType = {
    count: string;
    title: string;
    description: string;
    videoUrl: string;
    isExpand: boolean;
    onClick: () => void;
    border: boolean;
};

function SectionContent({
    count,
    title,
    description,
    videoUrl,
    isExpand,
    onClick,
    border,
}: SectionContentType) {
    return (
        <div
            className={`py-[30px] sm:py-[15px] md:py-[10px] lg:py-[20px] xl:py-[50px] ${
                border && "border-b"
            }  border-[#9E9E9E] `}
        >
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={onClick}
            >
                <div className="flex items-center">
                    <div className="h-[42px] text-base leading-[42px] text-center text-[#101010] w-[42px] rounded-full [border:0.5px_solid_#101010] sm:w-[50px] sm:h-[50px] sm:leading-[50px] sm:mr-[16px] lg:mr-[20px] lg:h-[72px] lg:w-[72px]  mr-[8px] lg:text-[32px] lg:leading-[72px] xl:h-[100px] xl:w-[100px] xl:leading-[100px]">
                        {count}
                    </div>

                    <div className="text-lg w-[calc(100%-50px)] sm:w-[calc(100%-66px)] lg:w-[calc(100%-92px)]  xl:w-[calc(100%-120px)]  font-bold leading-[25px] text-[#1d1d1d] lg:text-[28px] lg:leading-[38.13px] xl:text-[32px] xl:leading-[43.58px]">
                        {title}
                    </div>
                </div>

                <img
                    src="/assets/tour-page/section-arrow.svg"
                    className={`w-8 h-8 ${
                        !isExpand && "rotate-180"
                    } transition-all duration-200`}
                    alt="Section Arrow Icon"
                />
            </div>

            {isExpand && (
                <>
                    <div className="mb-[15px] md:mb-2 lg:mb-5"></div>

                    <div className="overflow-hidden transition-all duration-300 sm:ml-[66px] lg:ml-[92px] xl:ml-[120px] lg:flex lg:justify-between mb-5">
                        <div
                            className="text-sm md:text-base sm:leading-[21.79px] leading-[21px] text-[#4F4F4F] lg:w-[calc(50%-10px)]"
                            dangerouslySetInnerHTML={{ __html: description }}
                        ></div>
                        <div className="mb-[30px] sm:mb-5 md:mb-4"></div>
                        <div className="lg:w-[calc(50%-10px)] ">
                            <VideoControls />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

const VideoControls = () => {
    const [isPlay, setPlay] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setPlay(true);
        }
    };

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setPlay(false);
        }
    };

    return (
        <div className="h-[230px] md:h-[240px] lg:h-[350px] w-full relative rounded-[2.4px]">
            <video className="w-full h-full" ref={videoRef} controls>
                <source src="/assets/videos/test-video.mp4" type="video/mp4" />
            </video>
            {!isPlay && (
                <>
                    <div>
                        <img
                            src="/assets/tour-page/video-poster.jpg"
                            className="h-full w-full absolute top-0 left-0"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="/assets/tour-page/play-btn.svg"
                            alt=""
                            onClick={handlePlay}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[60px] lg:h-[60px]"
                        />
                    </div>
                </>
            )}
            {}
        </div>
    );
};

SectionContent.defaultProps = {
    count: "01",
    title: "Advanced search built for sales and marketing",
    description: `Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/> <br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.`,
    videoUrl: "hello",
    isExpand: true,
    border: true,
};

export default SectionContent;

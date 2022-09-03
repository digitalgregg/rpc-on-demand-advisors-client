/* eslint-disable @next/next/no-img-element */
import React from "react";
import ViewFile from "../ViewFile/index";

const FileViewerContainer = () => {
    const iconStyle = "w-[16px] h-[16px]  sm:w-[24px] sm:h-[16px]";

    return (
        <div className="px-[10]  sm:px-[25px] sm:py-[25px] w-full">
            <div className="h-[54px] sm:h-[60px] bg-[#F8F8F8] rounded-[4px] flex items-center px-[15px] justify-between mb-[10px]">
                <div className="flex gap-[5px]">
                    <img
                        src="/img/videoIcon.svg"
                        alt="video icon"
                        className={iconStyle}
                    />
                    <h3 className="text-[12px] font-semibold text-[#000805]">
                        Video file
                    </h3>
                </div>
                <div className="flex gap-[19px] items-center text-[#000805]">
                    <div className="flex gap-[5px] items-center">
                        <img
                            src="/img/viewIcon.svg"
                            alt="view icon"
                            className={iconStyle}
                        />
                        <p>0</p>
                    </div>
                    <div className="flex gap-[5px] items-center">
                        <img
                            src="/img/favouriteIcon.svg"
                            alt="view icon"
                            className={iconStyle}
                        />
                        <p>0</p>
                    </div>
                    <div className="flex gap-[5px] items-center">
                        <img
                            src="/img/likeIcon.svg"
                            alt="view icon"
                            className={iconStyle}
                        />
                        <p>0</p>
                    </div>
                    <div className="flex gap-[5px] items-center">
                        <img
                            src="/img/shareIconRed.svg"
                            alt="view icon"
                            className={iconStyle}
                        />
                        <p>0</p>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden">
                <img src="/demo/aaa.jpg" className="object-none" alt="" />
            </div>
            {/* <ViewFile /> */}
        </div>
    );
};

export default FileViewerContainer;

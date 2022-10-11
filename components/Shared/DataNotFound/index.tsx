/* eslint-disable @next/next/no-img-element */
import React from "react";

type DNF = {
    className?: string;
    imgClass?: string;
};

function DataNotFound({ className, imgClass }: DNF) {
    return (
        <div>
            <div
                className={`${className} flex items-center justify-center w-full relative `}
            >
                <img
                    src="/assets/no-data.svg"
                    alt=""
                    className={`xs:w-[190px] xs:h-[144px] sm:w-[260px] sm:h-[196px] lg:w-[280px] lg:h-[212px] ${imgClass}`}
                />
            </div>
        </div>
    );
}

export default DataNotFound;

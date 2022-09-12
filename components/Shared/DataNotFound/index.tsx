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
                className={`${className} flex items-baseline justify-center w-full relative `}
            >
                <img
                    src="/assets/error-image.svg"
                    alt=""
                    className={`${imgClass}`}
                />
            </div>
        </div>
    );
}

export default DataNotFound;

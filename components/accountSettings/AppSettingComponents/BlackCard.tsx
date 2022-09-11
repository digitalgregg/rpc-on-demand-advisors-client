import React from "react";
import { ReactNode } from "react";

function BlackCard({
    header,
    children,
}: {
    header: string;
    children?: ReactNode;
}) {
    return (
        <div className="h-fit  w-full rounded-lg bg-White overflow-hidden">
            <div className=" px-5 py-[10px] bg-black">
                <span className="capitalize font-bold leading-[21.79px] text-base text-White">
                    {header}
                </span>
            </div>
            <div className="px-5 pt-5 sm:px-[30px] pb-[30px]  md:px-10 lg:px-5 xl:px-10 ">
                {children}
            </div>
        </div>
    );
}

export default BlackCard;

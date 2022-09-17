import React from "react";
import AnalyticsProgreshandDound from "../CustomIcons/analyticsProgreshandDound";
import Image from "next/image";
import upImage from "../../public/Images/analyticsUpChart.svg";
import dwnImage from "../../public/Images/analyticsDownChart.svg";
type CardType = {
    name: string;
    itemCount: number;
    data: any;
    progres: boolean;
    progresCount: number;
};

const MiniCard = ({
    name,
    data,
    itemCount,
    progres,
    progresCount,
}: CardType) => {
    return (
        <div className="  w-full max-h-[190px] rounded-[10px] bg-White p-[27px]">
            <div className="flex justify-center flex-col items-center">
                <div className=" flex flex-col justify-center items-center gap-[5px]">
                    <h1 className=" text-[#2f2f2f] text-base leading-[22px] font-semibold">
                        {name}
                    </h1>
                    <span className=" p-0 m-0 text-[#2f2f2f] leading-[44px] text-[32px] font-bold">
                        {itemCount}
                    </span>
                </div>
                <div className=" flex flex-row justify-end items-end gap-[15px]">
                    <div className=" flex flex-row justify-end items-end gap-2">
                        <div
                            className={`${
                                !progres && "rotate-[180deg]"
                            }  mb-2 `}
                        >
                            <AnalyticsProgreshandDound
                                color={`${
                                    progres === true ? "#21B979" : "#E51937"
                                }`}
                            />
                        </div>
                        <span
                            className={`${
                                (progres && "text-[#21b979]") || "#E51937"
                            }  text-sm leading-5 font-semibold m-0 p-0`}
                        >
                            {progresCount}%
                        </span>
                    </div>
                    <div className="w-32 h-[32px]">
                        <div className=" absolute w-[130px] ">
                            <Image
                                width={130}
                                height={51}
                                layout="responsive"
                                src={
                                    (progres && upImage) ||
                                    (!progres && dwnImage)
                                }
                                alt="icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiniCard;

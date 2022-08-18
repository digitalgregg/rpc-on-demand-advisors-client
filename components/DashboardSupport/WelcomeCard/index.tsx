import Image from "next/image";
import React, { ReactNode } from "react";

const WelcomeCard = ({ children }: { children: ReactNode }) => {
    return (
        <div className="my-[30px] flex flex-col xl:flex-row gap-[30px]">
            <div className="w-full xl:max-w-[966px] h-fit bg-White p-[30px] rounded">
                {children}
            </div>
            <div className=" w-full xl:max-w-[514px] px-[30px] py-[40px] bg-White rounded">
                <span className="text-[18px] xl:text-base 2xl:text-[18px] leading-[25px] xl:leading-[21.79px] 2xl:leading-[25px] font-bold text-[#000]">
                    Welcome
                </span>
                <p className="mt-[7px] text-sm 2xl:text-base leading-[19.07px] 2xl:leading-[22px] text-[#101010]">
                    Explore the <b>ODA Center</b> solution
                </p>
                <hr className=" mt-[16px] mb-[21px] text-[#9E9E9E]" />
                <h1 className="text-base 2xl:text-[18px]  leading-[21.79px] 2xl:leading-[25px] font-bold text-[#000]">
                    Explore the On Demand Center solution
                </h1>
                <div className="mt-[30px] 2xl:mt-[40px] flex flex-col sm:flex-row xl:flex-col gap-[30px]">
                    <div className=" flex flex-row gap-[15px]">
                        <div className=" h-fit p-[7px] rounded bg-primary">
                            <div className=" relative w-[22px] h-[22px]">
                                <Image
                                    layout="fill"
                                    src="/assets/DashboardSupport/setalight.svg"
                                    alt="icon"
                                />
                            </div>
                        </div>

                        <div className=" flex flex-wrap gap-[10px]">
                            <span className=" text-sm xl:text-xs 2xl:text-sm leading-[19px] xl:leading-[16.34px] 2xl:leading-[19px] font-bold text-[#000000]">
                                On Demand Center Basics
                            </span>
                            <p className="text-sm xl:text-[10px] 2xl:text-sm font-normal leading-[13.62px] 2xl:leading-[19px] text-[#676767]">
                                Learn about each part of Content Camel and how
                                it all fits together.
                            </p>
                        </div>
                    </div>
                    <div className=" flex flex-row gap-[15px]">
                        <div className=" h-fit p-[7px] rounded bg-primary">
                            <div className=" relative w-[22px] h-[22px]">
                                <Image
                                    layout="fill"
                                    src="/assets/DashboardSupport/tostlight.svg"
                                    alt="icon"
                                />
                            </div>
                        </div>

                        <div className=" flex flex-wrap gap-[10px]">
                            <span className=" text-sm xl:text-xs 2xl:text-sm leading-[19px] xl:leading-[16.34px] 2xl:leading-[19px] font-bold text-[#000000]">
                                On Demand Center Basics
                            </span>
                            <p className="text-sm xl:text-[10px] 2xl:text-sm font-normal leading-[13.62px] 2xl:leading-[19px] text-[#676767]">
                                Learn about each part of Content Camel and how
                                it all fits together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeCard;

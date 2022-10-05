import Image from "next/image";
import React from "react";

type Cardtype = {
    number: string;
    title: string;
    p: string;
};

const Card = ({ number, title, p }: Cardtype) => {
    return (
        <div className="w-[100%] xs:h-[300px] xl:h-[260px] 2xl:h-[289px] mx-auto overflow-hidden rounded bg-[#ffffff]">
            <div className=" relative transform -translate-x-[1px] -translate-y-[1px]">
                <div className=" max-w-[86px]">
                    <Image
                        width={86}
                        height={73}
                        src="/assets/resurces-demo/IntersectCardNumBg.svg"
                        alt="icon"
                    />
                </div>
                <span className=" absolute top-5 left-5 text-[24px] leading-[33px] font-semibold text-primary">
                    {number}
                </span>
            </div>

            <div className=" px-5 pt-[30px]">
                <h3 className="text-[#000000] xs:font-bold xs:text-[16px] mb-[16px] xs:leading-[150%] sm:text-[18px] sm:leading-[25px] sm:font-semibold">{title}</h3>
                <p className="text-[#4F4F4F] xs:text-[14px] font-normal xs:leading-[19px] md:text-[16px] md:leading-[22px]">{p}</p>
            </div>
        </div>
    );
};

const increaseSffectiveness = () => {
    return (
        <div className=" bg-[#f8f8f8f8] py-20">
            <div className=" xl:p-0 lg:mx-[47px] md:mx-[50px] sm:mx-[40px] xs:mx-[20px] ">
                <div className="!max-w-[1140px] mx-auto">
                    <div className="!max-w-[879px] mx-auto mb-10 px-8 md:px-0">
                        <h2 className="mb-5 text-center ">
                            Increase sales effectiveness
                        </h2>
                        <p className="text-center ">
                            Bring your content together in one place, enable
                            your sales team to have better conversations with
                            prospects, increase Marketing-Sales communication,
                            and prove the impact of content marketing.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xs:grid-cols-1 gap-[24px] xs:justify-center sm:justify-between">
                        <Card
                            number="01"
                            title="Add and import content"
                            p="We make it easy to add or link to your existing marketing and sales collateral."
                        />
                        <Card
                            number="02"
                            title="Invite admins and users"
                            p="Invite marketers, product marketers, sales enablement admins, and sales reps and control access levels, or just get started on your own."
                        />
                        <Card
                            number="03"
                            title="Install the Browser Extension"
                            p="Add the ODA Center Chrome Extension or the Microsoft Edge Extension, the fastest way to have access to your content everywhere."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default increaseSffectiveness;

import React, { useState } from "react";
import { RightArrowIcon } from "../CustomIcons";
import {useRouter} from "next/router";

const OrganizedSeller = () => {
    const router = useRouter();
    const [iconColor, setIconColor] = useState(false);
    const onOver = (e: any) => {
        if (e) setIconColor(true);
    };
    const onLeave = (e: any) => {
        if (e) setIconColor(false);
    };
    const pStyle =
        "text-[#4F4F4F] leading-[21px] font-normal text-center lg:text-left sm:leading-[21.79px]";
    return (
        <div className="w-[100%] xs:mt-[20px] sm:mt-[60px] lg:mt-[80px] xs:pb-[20px] sm:pb-[60px] lg:pb-[80px] ">
            <div className="container lg:flex items-center xs:w-[375px] sm:w-[680px] md:w-[768px] lg:w-[1024px] xl:w-[1200px] 2xl:w-[1440px] 3xl:w-[1680px] 4xl:w-[1920px] ">
                <div className="lg:w-[481px] lg:mr-[125px] xl:w-[556px] xl:mr-[148px] 2xl:w-[687px] 2xl:mr-[111px] 3xl:w-[732px] 4xl:w-[900px] 4xl:mr-[151px] 3xl:mr-[199px]">
                    <h2 className="xs:leading-[24px] sm:leading-[38.13px] xl:leading-[43.58px] text-center lg:text-left md:px-0 lg:px-0 2xl:px-0 xs:mb-[10px] sm:mb-[20px] sm:w-[472px] md:w-[448px] lg:w-[481px] 2xl:w-[687px] xl:w-[556px] 3xl:w-[732px] 4xl:w-[900px] mx-auto">
                        Organized for Sellers and Marketers
                    </h2>
                    <p className={pStyle}>
                        Configure funnel stages, content types, and tags, so
                        Sales knows which assets to use at each stage of the
                        sales process and buyers journey. Group content by
                        product, industry, and region for expanding teams that
                        are covering verticals and multiple product.
                    </p>
                    <br />
                    <p className={pStyle}>
                        Report on everything that’s working (and not), so you
                        can put your content marketing investment to work in the
                        field.
                    </p>
                    <div className="w-[100%] text-center lg:text-left xs:mt-[20px] md:mt-[40px] xs:mb-[30px] sm:mb-[60px]">
                        <button
                            onClick={() => router.push("/pricing")}
                            onMouseOver={onOver}
                            onMouseLeave={onLeave}
                            className="hover:text-White hover:bg-primary hover-transition w-[177px] h-[44px]  border border-primary rounded-[4px] text-primary text-[14px] sm:text-[16px] cursor-pointer leading-[19px] font-semibold "
                        >
                            {" "}
                            <span className="flex items-center justify-center gap-[11px]">
                                <span> View Pricing</span>
                                <RightArrowIcon
                                    color={`${
                                        !iconColor === true
                                            ? "#E51937"
                                            : "#ffffff"
                                    }`}
                                />
                                {/* <img
                  src="/img/rightArrow.svg"
                  className="w-[18px] h-[20px] ml-[11px]"
                /> */}
                            </span>{" "}
                        </button>
                    </div>
                </div>
                <div className="">
                    <img
                        src="/img/organizeSeller.png"
                        alt="organizeSeller"
                        className="xs:w-[180px] xs:h-[243px] sm:w-[328px] sm:h-[441px] lg:w-[324px] lg:h-[406px] xl:w-[402px] xl:h-[481px] 2xl:w-[400px] 2xl:h-[476px] 3xl:w-[509px] 3xl:h-[590px] 4xl:w-[509px] 4xl:h-[590px] mx-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default OrganizedSeller;

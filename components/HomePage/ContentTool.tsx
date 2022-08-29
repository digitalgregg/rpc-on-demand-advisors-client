import React, { useState } from "react";
import { RightArrowIcon } from "../../components/CustomIcons";
import {useRouter} from "next/router";
const ContentTool = () => {
    const router = useRouter();
    const [iconColor, setIconColor] = useState(false);
    const onOver = (e: any) => {
        if (e) setIconColor(true);
    };
    const onLeave = (e: any) => {
        if (e) setIconColor(false);
    };
    const contentImageStyle =
        "xs:w-[309px] xs:h-[243px] sm:w-[600px] sm:h-[457.81px] md:w-[668px] lg:w-[454.44px] lg:h-[348.22px] h-[457.81px] xl:w-[517.92px] xl:h-[408.19px] 2xl:w-[610.35px] 2xl:h-[455.89px] 3xl:w-[798.98px] 3xl:h-[548.98px] 4xl:w-[802.71px] 4xl:h-[548px] mb-12 mx-auto ";
    const pStyle =
        "text-[#4F4F4F] leading-[21px] font-normal text-center lg:text-left lg:w-[402.48px] xl:w-[472px] 2xl:w-[520px] sm:leading-[21.79px]";
    return (
        <div className="lg:flex flex-col lg:flex-row xs:mt-[40px] lg:items-center sm:mt-[120px] lg:mt-[160px] xl:gap-[90px] 2xl:gap-[69.65px] 3xl:gap-[121.02px] container 4xl:gap-[237.29px] w-[100%]">
            <div className="flex flex-col ">
                <h2 className="text-[#1D1D1D] xs:leading-[24px] sm:leading-[38.13px] xl:leading-[43.58px] text-center lg:text-left xs:px-8 lg:px-0 2xl:px-0 xs:mb-[10px] sm:mb-[20px] sm:w-[472px] 2xl:w-[520px] mx-auto">
                    Content tools for Sales and Marketing teams
                </h2>
                <p className={pStyle}>
                    Today, your marketers and sellers are spending too much time
                    hunting down the perfect asset that’s critical to moving
                    your deals forward.
                </p>
                <br />
                <p className={pStyle}>
                    You’ve either outgrown your Google Drive, Dropbox, Box, or
                    Sharepoint. Or you’re sick of the high-cost overhead of
                    Highspot, Seismic, Showpad, and others.
                </p>
                <br />
                <p className={pStyle}>
                    ODA Center is the choice for companies scaling their sales
                    operations and investing in great content creation to close
                    the gap on the competition and win.
                </p>
                <div className="w-[100%] text-center lg:text-left xs:mt-[20px] md:mt-[40px] xs:mb-[30px] sm:mb-[60px]">
                    <button
                        onMouseOver={onOver}
                        onMouseLeave={onLeave}
                        className="xs:w-[161px] xs:h-[44px] sm:w-[162px] sm:h-[46px]  border border-primary rounded-[4px] text-primary text-[14px] sm:text-[16px] cursor-pointer leading-[19px] font-semibold hover:text-White hover:bg-primary hover-transition"
                    >
                        <span onClick={() => router.push('/signup')} className="flex items-center justify-center gap-[11px]">
                            <span> Get Started</span>
                            <RightArrowIcon 
                                color={`${
                                    !iconColor === true ? "#E51937" : "#ffffff"
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
            {/* content item image  */}
            <img
                src="/img/contentImg.svg"
                alt="content item"
                className={contentImageStyle}
            />
        </div>
    );
};

export default ContentTool;

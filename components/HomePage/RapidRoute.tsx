import React, { useState } from "react";
import { RightArrowIcon } from "../CustomIcons";

const RapidRoute = () => {
    const [iconColor, setIconColor] = useState(false);
    const onOver = (e: any) => {
        if (e) setIconColor(true);
    };
    const onLeave = (e: any) => {
        if (e) setIconColor(false);
    };
    const pStyle =
        "text-[#4F4F4F] leading-[21px] font-normal text-center lg:text-left sm:leading-[21.79px]";
    const imageStyle =
        "xs:w-[335px] xs:h-[206px] sm:w-[600px] sm:h-[323px] sm:mb-[60px] md:w-[667.5px] md:h-[365px] lg:w-[416px] lg:h-[275px] xl:w-[483px] xl:h-[325px]  lg:mr-[102.66px] xl:mr-[135.88px] 2xl:mr-[52.13px] 3xl:mr-[80.39px] 4xl:mr-[127.93px] 2xl:w-[618px] 2xl:h-[392px] 3xl:w-[770px] 3xl:h-[544px] 4xl:w-[860px] 4xl:h-[544px]";
    return (
        <div className="w-[100%] bg-[#F8F8F8] py-[60px] lg:py-[80px]">
            <div className="container flex flex-col items-center lg:flex-row-reverse xs:w-[375px] sm:w-[680px] md:w-[768px] lg:w-[1024px] xl:w-[1200px] 2xl:w-[1440px] 3xl:w-[1680px] 4xl:w-[1920px]">
                <div className="flex-col lg:w-[404.54px] xl:w-[461.13px] 2xl:w-[537.87px] 3xl:w-[589.61px] 4xl:w-[572px]">
                    <h2 className="xs:leading-[24px] sm:leading-[38.13px] xl:leading-[43.58px] text-center lg:text-left xs:px-[50px] md:px-0 lg:px-0 2xl:px-0 xs:mb-[10px] sm:mb-[20px] sm:w-[472px] md:w-[525px] lg:w-[404.54px] xl:w-[461.13px] 2xl:w-[537.87px] 3xl:w-[589.61px] 4xl:w-[572px] mx-auto">
                        Rapid rollout and fast Adoption
                    </h2>
                    <p className={pStyle}>
                        Most sales enablement tools and content management
                        solutions are overly complicated and too complex to
                        quickly roll out to your team.
                    </p>
                    <br />
                    <p className={pStyle}>
                        With ODA Center as your sales enablement tool, you’ll
                        give everyone access to content that converts – wherever
                        they are working – with our Browser Extensions. Zero
                        training overhead and easy set up mean that you can get
                        started today.
                    </p>
                    <div className="w-[100%] text-center lg:text-left xs:mt-[20px] md:mt-[40px] xs:mb-[30px] sm:mb-[60px]">
                        <button
                            onMouseOver={onOver}
                            onMouseLeave={onLeave}
                            className="hover:text-White hover:bg-primary hover-transition xs:w-[161px] xs:h-[44px] sm:w-[162px] sm:h-[46px]  border border-primary rounded-[4px] text-primary text-[14px] sm:text-[16px] cursor-pointer leading-[19px] font-semibold "
                        >
                            {" "}
                            <span className="flex items-center justify-center gap-[11px]">
                                <span> Get Started</span>
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
                {/* image section  */}
                <img
                    src="/img/rapidIm.svg"
                    alt="connect sales thumbnail"
                    className={imageStyle}
                />
            </div>
        </div>
    );
};

export default RapidRoute;

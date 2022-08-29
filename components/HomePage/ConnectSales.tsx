import React, { useState } from "react";
import { RightArrowIcon } from "../CustomIcons";
import {useRouter} from "next/router";

const ConnectSales = () => {
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
    const imageStyle =
        "sm:w-[600px] sm:h-[323px] sm:mb-[60px] md:w-[667.5px] md:h-[365px] lg:w-[416px] lg:h-[275px] xl:w-[483px] xl:h-[325px]  hidden sm:flex lg:mr-[102.66px] xl:mr-[135.88px] 2xl:mr-[52.13px] 3xl:mr-[80.39px] 4xl:mr-[127.93px] 2xl:w-[618px] 2xl:h-[392px] 3xl:w-[770px] 3xl:h-[544px] 4xl:w-[860px] 4xl:h-[544px]";
    return (
        <div className="w-[100%] bg-[#F8F8F8]">
            <div className="container flex flex-col items-center lg:flex-row-reverse xs:w-[375px] sm:w-[680px] md:w-[768px] lg:w-[1024px] xl:w-[1200px] 2xl:w-[1440px] 3xl:w-[1680px] 4xl:w-[1920px]">
                <div className="flex-col xs:mt-[20px] md:mt-[60px] lg:w-[404.54px] xl:w-[461.13px] 2xl:w-[537.87px] 3xl:w-[589.61px] 4xl:w-[572px]">
                    <h2 className="text-[#1D1D1D] xs:leading-[24px] sm:leading-[38.13px] xl:leading-[43.58px] text-center lg:text-left xs:px-[50px] md:px-0 lg:px-0 2xl:px-0 xs:mb-[10px] sm:mb-[20px] sm:w-[472px] md:w-[525px] lg:w-[404.54px] xl:w-[461.13px] 2xl:w-[537.87px] 3xl:w-[589.61px] 4xl:w-[572px] mx-auto">
                        Connect Sales actions to Sales results
                    </h2>
                    <p className={pStyle}>
                        After you easily upload and link your ebooks,
                        one-pagers, whitepapers, sales decks, videos, battle
                        cards, and more, you’ll be able to go way beyond Drives
                        to track sales actions and deliver insights into sales.
                    </p>
                    <br />
                    <p className={pStyle}>
                        Give sellers the ability to link, share, and track
                        collateral. Build custom collections and site resource
                        pages in minutes for your personalized campaigns or
                        channel sales.
                    </p>
                    <br />
                    <p className={pStyle}>
                        Understand what Sales is using to close deals and
                        double-down on what’s working to secure future pipeline.
                    </p>
                    <div className="w-[100%] text-center lg:text-left xs:mt-[20px] md:mt-[40px] xs:mb-[30px] sm:mb-[60px]">
                        <button onClick={() => router.push("/signup")} onMouseOver={onOver}
                        onMouseLeave={onLeave} className="xs:w-[161px] xs:h-[44px] sm:w-[162px] sm:h-[46px]  border border-primary rounded-[4px] text-primary text-[14px] sm:text-[16px] cursor-pointer leading-[19px] font-semibold hover:text-White hover:bg-primary hover-transition">
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
                    src="/img/moboGroup.svg"
                    alt="mobo group"
                    className="xs:w-[336.75px] xs:h-[123px] mx-auto xs:mb-[20px] sm:hidden"
                />

                <img
                    src="/img/moboGroup2.svg"
                    alt="connect sales thumbnail"
                    className={imageStyle}
                />
            </div>
        </div>
    );
};

export default ConnectSales;

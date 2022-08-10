import Layout from "../components/Shared/HeaderFooter/Layout";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
function TourPage() {
    const [heroDropdownState, setHeroDropdown] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const heroDropdown = [
        {
            id: 0,
            text: "Content Management",
        },
        {
            id: 1,
            text: "Share and Track Content",
        },
        {
            id: 2,
            text: "Buyer Experiences",
        },
    ];

    const handleDropdownOpen = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleDropdownTab = (id: number) => {
        setHeroDropdown(id);
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <Layout>
            <div>
                {/* Hero Section  */}
                <div className="bg-[#191919]">
                    <div className="container mx-auto">
                        <div>
                            <div className="font-primary ">
                                <div className="pt-[60px] lg:pt-[100px]"></div>

                                <h1 className="font-bold text-center leading-[32.68px] text-[24px] sm:text-[40px] sm:leading-[54px] lg:text-[50px] lg:leading-[65px]  xl:text-[60px] xl:leading-[70px] xl:font-bold text-[#fff] xl:px-[10%] 2xl:px-0 4xl:px-[10%]">
                                    Simple marketing and sales content
                                    management
                                </h1>

                                <div className="mt-[30px] sm:mt-[20px]  lg:mt-[20px] xl:mt-[30px] 2xl:mt-[35px] 4xl:mt-[35px]"></div>

                                <p className="text-sm sm:leading-[19.07px] leading-[21px] md:leading-[21.79px] md:text-base  text-center text-[#dedede] sm:mx-[40.42px]  md:mx-[79px] ">
                                    Take control of your Google Drive, Dropbox,
                                    and SharePoint marketing and sales content.
                                </p>

                                <div className="mb-[40px] sm:mb-[30px]  lg:mb-[40px] 2xl:mb-[50px] 4xl:mb-[40px]"></div>

                                <div className="flex gap-5  justify-center relative z-10 text-[#fff]">
                                    <button className="text-sm font-semibold text-center w-[158px] h-[44px] sm:h-[56px] bg-[#E51937] border border-[#E51937] leading-[19.07px] sm:leading-[21.79px] rounded-[4px] sm:w-[154px] sm:text-base">
                                        Try for Free
                                    </button>
                                    <button className="text-sm font-semibold text-center w-[158px] h-[44px] sm:h-[56px] border border-white leading-[19.07px] rounded-[4px] sm:leading-[21.79px] sm:w-[183px] sm:text-base">
                                        Schedule Demo
                                    </button>
                                </div>

                                <div className="mb-[40px] sm:mb-[29.68px]"></div>
                            </div>
                            <div>
                                <picture>
                                    <source
                                        media="(min-width: 680px)"
                                        srcSet="/assets/tour-page/tour-hero-sm.svg"
                                    />
                                    <source
                                        media="(min-width: 768px)"
                                        srcSet="/assets/tour-page/tour-hero-md.svg"
                                    />
                                    <source
                                        media="(min-width: 1024px)"
                                        srcSet="/assets/tour-page/tour-hero-lg.svg"
                                    />
                                    <source
                                        media="(min-width: 1200px)"
                                        srcSet="/assets/tour-page/tour-hero-xl.svg"
                                    />
                                    <source
                                        media="(min-width: 1440px)"
                                        srcSet="/assets/tour-page/tour-hero-2xl.svg"
                                    />
                                    <source
                                        media="(min-width: 1680px)"
                                        srcSet="/assets/tour-page/tour-hero-3xl.svg"
                                    />
                                    <source
                                        media="(min-width: 1920px)"
                                        srcSet="/assets/tour-page/tour-hero-4xl.svg"
                                    />
                                    <img
                                        className="w-full relative sm:top-[0px] md:-top-[52px] lg:-top-[64px] xl:-top-[83px] 2xl:-top-[94px] 3xl:-top-[128px]"
                                        src="/assets/tour-page/tour-hero-xs.svg"
                                        alt="tour hero img"
                                    />
                                </picture>
                            </div>
                        </div>
                        <div>
                            <div className="mt-[40.06px] sm:mt-[60.26px] md:mt-[8px] lg:mt-[-20px] xl:mt-[3px] 2xl:mt-[-32px] 3xl:mt-[-48px]"></div>

                            <h3 className="text-base font-bold leading-[24px]  text-center sm:text-[28px] sm:leading-[38.13px] lg:text-[32px] lg:leading-[43px] text-[#fff]">
                                The end to frustrating search.
                                <br />
                                Everything you need for sales success
                            </h3>

                            <div>
                                <div className=" px-[18px] sm:px-0  text-[#fff]">
                                    <div className="mt-[40px] sm:mt-[14.71px] md:mt-[40px] 2xl:mt-[41px]"></div>
                                    <div className="p-[14px] sm:p-0 text-sm w-full rounded-[4px] bg-[#252525] sm:[background:none]">
                                        <div
                                            className="flex justify-between h-[24px] items-center sm:!hidden font-semibold"
                                            onClick={handleDropdownOpen}
                                        >
                                            <span>
                                                {
                                                    heroDropdown[
                                                        heroDropdownState
                                                    ].text
                                                }
                                            </span>
                                            <span>
                                                <img
                                                    src="/assets/tour-page/dropdown-arrow.svg"
                                                    alt="dropdown arrow"
                                                />
                                            </span>
                                        </div>
                                        {dropdownOpen && (
                                            <div className="pb-[12.5px] sm:hidden border-b border-[rgba(255,255,255,.1)]"></div>
                                        )}

                                        <div
                                            className={`${
                                                !dropdownOpen && "hidden"
                                            } sm:flex lg:px-[102px] xl:px-[177px] 2xl:px-[117px] 3xl:px-[271px] 4xl:px-[352px]`}
                                        >
                                            {heroDropdown.map((v, i) => (
                                                <div
                                                    key={v.id}
                                                    className={`mt-[10px] sm:mt-0 relative md:text-base sm:w-1/3 sm:pb-[19px] md:pb-[16px] lg:pb-[13px] 2xl:pb-[16.23px] lg:text-lg sm:border-b sm:leading-[19.07px] sm:border-[#676767] font-semibold ${
                                                        (i == 1 &&
                                                            "sm:text-center") ||
                                                        (i == 2 &&
                                                            "sm:text-right")
                                                    } `}
                                                    onClick={() =>
                                                        handleDropdownTab(v.id)
                                                    }
                                                >
                                                    {v.text}
                                                    {heroDropdownState == i && (
                                                        <div className="absolute bottom-[-2px] z-10 w-full h-[3px] sm:bg-[#E51937]"></div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between text-sm px-[18px] bg-[#252525]"></div>
                            </div>
                            <div className=" mt-[30px] sm:mt-[20px] lg:mt-[30px] 2xl:mt-[41px]"></div>

                            <p className="text-sm leading-[21px] sm:leading-[19.07px] text-center font-normal font-primary text-[rgba(255,255,255,.8)] sm:text-[#fff] lg:text-base lg:leading-[21.79px] lg:mx-[123px] xl:mx-[198px] 2xl:mx-[178px] 3xl:mx-[298px] 4xl:mx-[358px]">
                                Rethink your Google Drive, Dropbox or pricey
                                legacy sales content portal with easy to rollout
                                and easy to adopt marketing and sales content
                                management tools. Organize marketing collateral
                                for sales success by setting funnel stages,
                                content types, and tags.
                            </p>
                            <div className=" mb-[30px] sm:mb-[23px] md:mb-[29px] lg:mb-[30.5px] xl:mb-[40px] 2xl:mb-[41.15px] "></div>

                            <div className="flex justify-center flex-col sm:flex-row items-center gap-y-[10px] sm:gap-x-[40px] text-[#fff]">
                                <div className="text-lg sm:text-sm sm:leading-[19.07px] font-bold flex items-center gap-x-[10px] xl:text-lg xl:leading-[24.51px] md:text-base md:leading-[21.79px]">
                                    <span>
                                        <img
                                            className="w-4 h-4 md:w-6 md:h-6"
                                            src="/assets/tour-page/check.svg"
                                            alt="check icon"
                                        />
                                    </span>
                                    <span>Advanced search</span>
                                </div>
                                <div className="text-lg sm:text-sm sm:leading-[19.07px] font-bold flex items-center gap-x-[10px] leading-[24.51px] md:text-base md:leading-[21.79px]">
                                    <span>
                                        <img
                                            className="w-4 h-4 md:w-6 md:h-6"
                                            src="/assets/tour-page/check.svg"
                                            alt="check icon"
                                        />
                                    </span>
                                    <span>Organized for Sales</span>
                                </div>
                                <div className="text-lg sm:text-sm sm:leading-[19.07px] font-bold flex items-center gap-x-[10px] leading-[24.51px] md:text-base md:leading-[21.79px]">
                                    <span>
                                        <img
                                            className="w-4 h-4 md:w-6 md:h-6"
                                            src="/assets/tour-page/check.svg"
                                            alt="check icon"
                                        />
                                    </span>
                                    <span>Integrated</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="h-[188px] sm:h-[245.29px] md:h-[274.61px] lg:h-[368.5px] xl:h-[412px] 2xl:h-[418px] 3xl:h-[508.55px]">
                                <picture>
                                    <source
                                        media="(min-width: 1440px)"
                                        srcSet="/assets/tour-page/tour-dashboard-2xl.svg"
                                    />
                                    <source
                                        media="(min-width: 1200px)"
                                        srcSet="/assets/tour-page/tour-dashboard-xl.svg"
                                    />
                                    <source
                                        media="(min-width: 1024px)"
                                        srcSet="/assets/tour-page/tour-dashboard-lg.svg"
                                    />
                                    <source
                                        media="(min-width: 1200px)"
                                        srcSet="/assets/tour-page/tour-dashboard-lg.svg"
                                    />
                                    <source
                                        media="(min-width: 768px)"
                                        srcSet="/assets/tour-page/tour-dashboard-md.svg"
                                    />
                                    <source
                                        media="(min-width: 680px)"
                                        srcSet="/assets/tour-page/tour-dashboard-sm.svg"
                                    />

                                    <img
                                        src="/assets/tour-page/tour-dashboard-xs.svg"
                                        alt="Tour dashboard img"
                                        className="bottom-[-30px] sm:bottom-[-60px] lg:bottom-[-80px]  relative h-[256px] sm:h-[362px] lg:h-[530.76px] px-[6px] w-full xl:h-[620px] 3xl:h-[845px]"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section One  */}
                <div className="bg-[#fff]">
                    <div className="container mx-auto">
                        <div className="pt-[138px] sm:pt-[297px] md:pt-[237.39px] lg:pt-[363px] xl:pt-[448px] 2xl:pt-[442px] 3xl:pt-[576px]"></div>

                        <div className="text-[#101010] sm:text-[#1d1d1d] text-base leading-[24px] sm:text-[28px] sm:leading-[38.13px] text-center font-bold xl:text-[32px] xl:leading-[43.58px]">
                            Understand how content is performing
                        </div>
                        <div className="mt-[10px] sm:mt-[20px] xl:mt-[30px]"></div>

                        <div className="text-[#4f4f4f] font-normal text-sm leading-[21px] text-center px-[1px] sm:leading-[19.07px] sm:px-[35.5px] md:px-0 lg:px-[157px] lg:leading-[28px] lg:text-base xl:px-[232px] 3xl:px-[412px] 3xl:leading-[21.79px] 4xl:px-[472px]">
                            Go beyond Drive folders to get organized, deliver
                            powerful notifications to Sales, engage buyers, and
                            make decisions with the analytics you need to
                            succeed with your already winning content.
                        </div>
                        <div className="mb-[20px] md:mb-[36px] lg:mb-[40px]"></div>

                        <div className="px-[28.5px] flex justify-between sm:justify-center items-center sm:gap-[15px]">
                            <button className="border border-[#E51937] text-xs h-[44px] leading-[16.34px] font-semibold text-[#fff] p-[14px_24px] rounded-[3px] bg-[#E51937] sm:h-[42px] sm:py-[13px] lg:h-[56px] lg:rounded-[4px] lg:text-base lg:p-[17px_32px] lg:leading-[21.79px]">
                                Try for free
                            </button>
                            <div className="text-[12px] lg:text-base leading-[16.34px] font-semibold text-center text-[#101010]">
                                Or
                            </div>
                            <button className="border border-[#E51937] text-xs h-[44px] leading-[16.34px] p-[14px_10.5px] font-semibold text-[#E51937] rounded-[3px] sm:h-[42px] sm:py-[13px] lg:h-[56px] lg:rounded-[4px] lg:text-base lg:p-[17px_14px] lg:leading-[21.79px]">
                                Schedule a demo
                            </button>
                        </div>
                        <div className="pb-[38px] sm:pb-[120px] md:pb-[90px] lg:pb-[120px] xl:pb-[160px]"></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default TourPage;

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

    const handleDropdownTab = (id) => {
        setHeroDropdown(id);
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div>
            <div>
                <div className="container mx-auto">
                    {/* Hero Section  */}
                    <div>
                        <div className="font-primary mt-[60px] md:mt-[70px]  lg:mt-[60px] xl:mt-[100px]">
                            <h1 className="font-bold text-center leading-[32.68px] text-[24px] sm:text-[40px] sm:leading-[55px] lg:text-[50px] lg:leading-[65px]  4xl:text-[60px] 4xl:leading-[70px] 4xl:font-bold 2xl:mx-[10%]">
                                Simple marketing and sales content management
                            </h1>

                            <p className="text-sm sm:text-base sm:leading-[19.07px] leading-[19.07px] mt-[38px] sm:mt-[25px]  lg:mt-[30px ] 4xl:mt-[35px] text-center text-[#dedede] sm:mx-[40.42px] mb-[68px] sm:mb-[25px]  lg:mb-[30px] 4xl:mb-[40px] md:mx-[79px] ">
                                Take control of your Google Drive, Dropbox, and
                                SharePoint marketing and sales content.
                            </p>

                            <div className="flex gap-5 mb-[52px] justify-center">
                                <button className="text-sm font-semibold text-center w-[158px] h-[44px] bg-[#E51937] border border-[#E51937] leading-[19.07px] rounded-[4px] sm:w-[154px]">
                                    Try for Free
                                </button>
                                <button className="text-sm font-semibold text-center w-[158px] h-[44px] border border-white leading-[19.07px] rounded-[4px] sm:w-[183px]">
                                    Schedule Demo
                                </button>
                            </div>
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
                                    className="w-full relative sm:top-[-59px] md:-top-[95px] lg:-top-[123px] xl:-top-[124px] 2xl:-top-[132px] 3xl:-top-[180px] -z-[1]"
                                    src="/assets/tour-page/tour-hero-xs.svg"
                                    alt="tour hero img"
                                />
                            </picture>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl leading-[30px] mt-[30px] text-center sm:text-[30px] sm:leading-[40px] lg:text-[32px] lg:leading-[43px] ">
                            The end to frustrating search.
                            <br />
                            Everything you need for sales success
                        </h3>
                        <div>
                            <div className=" px-[18px] sm:px-0 mt-[30px]">
                                <div className="p-[14px] sm:p-0  text-sm w-full rounded-[4px] bg-[#252525] sm:[background:none]">
                                    <div
                                        className="flex justify-between items-center sm:!hidden font-semibold"
                                        onClick={handleDropdownOpen}
                                    >
                                        <span>
                                            {
                                                heroDropdown[heroDropdownState]
                                                    .text
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
                                        } sm:flex`}
                                    >
                                        {heroDropdown.map((v, i) => (
                                            <div
                                                key={v.id}
                                                className={`mt-[10px] relative md:text-base sm:w-1/3 sm:pb-[18px] sm:border-b sm:border-[#676767] sm:font-semibold ${
                                                    (i == 1 &&
                                                        "sm:text-center") ||
                                                    (i == 2 && "sm:text-right")
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
                        <p className="text-sm leading-[21px] text-center my-[30px] font-normal font-primary text-[rgba(255,255,255,.8)]">
                            Rethink your Google Drive, Dropbox or pricey legacy
                            sales content portal with easy to rollout and easy
                            to adopt marketing and sales content management
                            tools. Organize marketing collateral for sales
                            success by setting funnel stages, content types, and
                            tags.
                        </p>
                        <div className="flex justify-center flex-col items-center">
                            <div className="text-lg font-bold font">
                                <span>
                                    <Image
                                        width={16}
                                        height={16}
                                        src="/assets/tour-page/check.svg"
                                        alt="check icon"
                                    />
                                </span>
                                <span>Advanced search</span>
                            </div>
                            <div className="text-lg font-bold font">
                                <span>
                                    <Image
                                        width={16}
                                        height={16}
                                        src="/assets/tour-page/check.svg"
                                        alt="check icon"
                                    />
                                </span>
                                <span>Organized for Sales</span>
                            </div>
                            <div className="text-lg font-bold font">
                                <span>
                                    <Image
                                        width={16}
                                        height={16}
                                        src="/assets/tour-page/check.svg"
                                        alt="check icon"
                                    />
                                </span>
                                <span>Integrated</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TourPage;

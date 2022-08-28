import React from "react";
import SectionTab from "../../Shared/SectionTab";
const SalesSuccess = () => {
    return (
        <div>
            <div>
                <div className="mt-[40.06px] sm:mt-[60.26px] md:mt-[8px] lg:mt-[-20px] xl:mt-[3px] 2xl:mt-[-32px] 3xl:mt-[-48px]"></div>

                <h3 className="text-base font-bold leading-[24px]  text-center sm:text-[28px] sm:leading-[38.13px] lg:text-[32px] lg:leading-[43px] text-[#fff]">
                    The end to frustrating search.
                    <br />
                    Everything you need for sales success
                </h3>
                <div className="mt-[40px] sm:mt-[14.71px] md:mt-[40px] 2xl:mt-[41px]"></div>
                <SectionTab />
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
    );
};

export default SalesSuccess;

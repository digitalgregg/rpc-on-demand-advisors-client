/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import Layout from "../components/Shared/Layout/Layout";
import SectionContent from "../components/Shared/SectionContent";
import SectionTab from "../components/Shared/SectionTab";

const expandContentData = [
    {
        title: "Advanced search built for sales and marketing",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
    {
        title: "Turn sales collateral into sites that convert",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
    {
        title: "(Content) Details that matter",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
    {
        title: "Content feedback for informed decisions",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
    {
        title: "Closed-loop feedback with sales requests",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
    {
        title: "Advanced search built for sales and marketing",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
];

const expandContentData2 = [
    {
        title: "Advanced search built for sales and marketing",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
    {
        title: "Turn sales collateral into sites that convert",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
    {
        title: "(Content) Details that matter",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
    {
        title: "Content feedback for informed decisions",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
    {
        title: "Closed-loop feedback with sales requests",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
    {
        title: "Advanced search built for sales and marketing",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
];

const expandContentData3 = [
    {
        title: "Advanced search built for sales and marketing",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
    {
        title: "Turn sales collateral into sites that convert",
        description:
            "Finding that buried asset can be frustrating. For new team members, it can be impossible.<br/><br/>Discover how ODA Center advanced search and organization by funnel stage, content type, and more enable users to find what they’re looking for fast. All organized for sales and marketing wins.",
        videoUrl: "/assets/videos/test-video.mp4",
    },
];

const sectionSixData = [
    {
        title: "Add and import content",
        description:
            "We make it easy to add or link to your existing marketing and sales collateral.",
    },
    {
        title: "Invite admins and users",
        description:
            "Invite marketers, product marketers, sales enablement admins, and sales reps and control access levels, or just get started on your own.",
    },
    {
        title: "Install the Browser Extension",
        description:
            "Add the ODA Center Chrome Extension or the Microsoft Edge Extension, the fastest way to have access to your content everywhere.",
    },
];

function TourPage() {
    const [expandContent, setExpandContent] = useState(0);
    const [expandContent2, setExpandContent2] = useState(0);
    const [expandContent3, setExpandContent3] = useState(0);
    return (
        <Layout>
            <div className="bg-[#fff]">
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
                            <div className="mt-[40px] sm:mt-[14.71px] md:mt-[40px] 2xl:mt-[41px]"></div>
                            <SectionTab />
                        </div>
                        <div>
                            <div className="h-[188px] sm:h-[245.29px] md:h-[274.61px] lg:h-[368.5px] xl:h-[412px] 2xl:h-[418px] 3xl:h-[508.55px] relative">
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
                                        className="bottom-[-30px] sm:bottom-[-50px] md:bottom-[-60px] lg:bottom-[-80px]  relative h-[256px] sm:h-[362px] lg:h-[530.76px] px-[6px] w-full xl:h-[620px] 3xl:h-[845px]"
                                    />
                                </picture>

                                <img
                                    className="absolute top-[-30px] right-[-20px] rotate-[20deg] w-[50px] sm:w-[80px] md:top-[15px] lg:w-[110px] lg:top-[-50px] lg:rotate-0 lg:right-[0px]  xl:w-[150px] xl:right-[-20px] xl:top-[-80px] 2xl:top-[-100px] 3xl:top-[-30px] 3xl:w-[160px] 3xl:right-[-40px] 4xl:w-[200px] 4xl:top-[-70px] 4xl:right-[-20px]"
                                    src="/assets/tour-page/weird-arrow2.svg"
                                    alt="Weird Arrow"
                                />
                                <img
                                    className="absolute top-[-25px] sm:left-[0px] left-[-15px] rotate-[20deg] md:rotate-[0deg] w-[50px] sm:w-[80px] md:top-[15px] lg:w-[110px] lg:top-[-50px] lg:rotate-0 lg:left-[0px]    xl:w-[150px]  xl:left-[-20px] xl:top-[-80px] 2xl:top-[-100px] 3xl:top-[-30px] 3xl:w-[160px] 4xl:w-[200px] 4xl:top-[-70px] 4xl:left-[20px]"
                                    src="/assets/tour-page/weird-arrow1.svg"
                                    alt="Weird Arrow"
                                />
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
                {/* Content Section  */}
                <div className="bg-[#fff]">
                    <div className="container mx-auto">
                        {expandContentData.map((v, i) => (
                            <SectionContent
                                key={i}
                                count={"0" + (i + 1)}
                                title={v.title}
                                description={v.description}
                                isExpand={expandContent == i ? true : false}
                                border={
                                    expandContentData.length == i + 1
                                        ? false
                                        : true
                                }
                                onClick={() =>
                                    setExpandContent(
                                        expandContent == i ? -1 : i
                                    )
                                }
                            />
                        ))}
                    </div>
                </div>

                {/* Section Two  */}

                <div className="bg-[#191919]">
                    <div className="container mx-auto">
                        <div className="flex items-center flex-col py-5 sm:py-[60px] sm:mb-[45px] md:my-[60px] xl:my-[30px]">
                            <h3 className="text-[#fff] text-center text-2xl leading-[30px] font-semibold sm:text-[30px] sm:leading-[40px] sm:px-[10%] xl:text-[32px]">
                                Start streamlining your sales today
                            </h3>
                            <div className="mb-5 lg:mb-[30px]"></div>
                            <div className="text-[#9E9E9E] text-center text-sm leading-[20px] sm:text-[#FAFAFA] sm:leading-[21px] lg:px-[157px] lg:text-base xl:leading-[28px] 4xl:px-[434px] 3xl:px-[373px] 2xl:px-[291px] xl:px-[231px] ">
                                Easy to set up. Easy to roll out. Instant
                                adoption across Sales and Marketing. Discover
                                how ODA Center can help you drive more value
                                from your content and close deals faster.
                            </div>
                            <div className="mb-5 md:mb-[30px] lg:mb-[40px]"></div>
                            <button className="text-xs leading-[16.34px] font-semibold p-[13px_24px] bg-[#E51937] text-center rounder-[3px]">
                                Get started
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content Section  */}
                <div className="bg-[#fff]">
                    <div className="container mx-auto">
                        {expandContentData2.map((v, i) => (
                            <SectionContent
                                key={i}
                                count={"0" + (i + 1)}
                                title={v.title}
                                description={v.description}
                                isExpand={expandContent2 == i ? true : false}
                                border={
                                    expandContentData2.length == i + 1
                                        ? false
                                        : true
                                }
                                onClick={() =>
                                    setExpandContent2(
                                        expandContent2 == i ? -1 : i
                                    )
                                }
                            />
                        ))}
                    </div>
                </div>

                {/* Section No 4 */}
                <div className="bg-[#F8F8F8]">
                    <div className="container mx-auto">
                        <div className="pt-[20px] sm:pt-[90px]  md:pt-[60px] lg:pt-[80px] "></div>

                        <div className="text-[#101010] sm:text-[#1d1d1d] text-base leading-[24px] sm:text-[30px] sm:leading-[40px] sm:px-[89px] text-center font-bold xl:text-[32px] xl:leading-[43.58px]">
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
                        <div className="pt-[20px]  sm:pt-[60px] lg:pt-[80px] "></div>
                    </div>
                    <div className="container mx-auto">
                        {expandContentData3.map((v, i) => (
                            <SectionContent
                                key={i}
                                count={"0" + (i + 1)}
                                title={v.title}
                                description={v.description}
                                isExpand={expandContent3 == i ? true : false}
                                border={
                                    expandContentData3.length == i + 1
                                        ? false
                                        : true
                                }
                                onClick={() =>
                                    setExpandContent3(
                                        expandContent3 == i ? -1 : i
                                    )
                                }
                            />
                        ))}
                    </div>
                    <div className="sm:pt-[45px] md:pt-[50px] lg:pt-[60px] xl:pt-0 2xl:pt-[30px]"></div>
                </div>

                {/* Section No 5 */}
                <div className="bg-[#fff]">
                    <div className="container mx-auto">
                        <div className="pt-[20px]  md:pt-[60px] lg:pt-[80px] "></div>

                        <div className="text-[#101010] sm:text-[#1d1d1d] text-base leading-[24px] sm:text-[30px] sm:leading-[40px] text-center font-bold xl:text-[32px] xl:leading-[43.58px]">
                            Increase sales effectiveness
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
                        <div className="pt-[20px]  md:pt-[60px] lg:pt-[80px] "></div>
                    </div>
                </div>

                {/* Section No 6  */}
                <div className="bg-[#fff]">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row gap-[15px] sm:gap-[20px] lg:gap-[16px]">
                            {sectionSixData.map((v, i) => (
                                <div
                                    key={i}
                                    className="p-5 min-h-[159px] sm:min-h-[113px] md:min-h-[] lg:p-[25px_16px] xl:p-[40px_19px] [box-shadow:0px_3.18878px_19.1327px_rgba(0,0,0,0.08)] lg:min-h-[195.58px] lg:basis-1/3"
                                >
                                    <div className="text-[#101010] text-lg leading-[24.5px] mb-[10px] font-semibold">
                                        {v.title}
                                    </div>
                                    <div className="text-[#4F4F4F] text-sm lg:text-base leading-[21px] pr-[11px] lg:pr-0">
                                        {v.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="pt-[17px] sm:pt-[75px]"></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default TourPage;

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

type SectionTabDataType = {
    id: number;
    text: string;
    data: {
        description: string;
        list: string[];
    };
};

const sectionTabData: SectionTabDataType[] = [
    {
        id: 0,
        text: "Content Management",
        data: {
            description:
                "Rethink your Google Drive, Dropbox or pricey legacy sales content portal with easy to rollout and easy to adopt marketing and sales content management tools. Organize marketing collateral for sales success by setting funnel stages, content types, and tags.",
            list: ["Advanced search", "Organized for Sales", "Integrated"],
        },
    },
    {
        id: 1,
        text: "Share and Track Content",
        data: {
            description:
                "65% of marketing content isn’t used by Sales, but you can avoid that with automatic short links, our sales content management Chrome extension, recipient tracking, and intelligent search to deliver the right content at the right time to close more deals.",
            list: ["Rapid adoption", "Smart shortlinks", "Sharing analytics"],
        },
    },
    {
        id: 2,
        text: "Buyer Experiences",
        data: {
            description:
                "Quickly roll out personalized content experiences to support prospect and customer campaigns. Reduce your sales cycle by enabling buyer self-service. Drive more sales conversations with curated marketing collateral that enables sales to shared custom pages and track engagement in real time.",
            list: ["Seller Configured Pages", "Personalized Content"],
        },
    },
];

function SectionTab({ data }: { data: SectionTabDataType[] }) {
    const [sectionTab, setSectionTab] = useState(data[0].id);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownOpen = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleDropdownTab = (id: number) => {
        setSectionTab(id);
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <div>
                <div className=" px-[18px] sm:px-0  text-[#fff]">
                    <div className="p-[14px] sm:p-0 text-sm w-full rounded-[4px] bg-[#252525] sm:[background:none]">
                        <div
                            className="flex justify-between h-[24px] items-center sm:!hidden font-semibold cursor-pointer"
                            onClick={handleDropdownOpen}
                        >
                            <span>{data[sectionTab].text}</span>
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
                            {data.map((v, i) => (
                                <div
                                    key={v.id}
                                    className={`mt-[10px] sm:mt-0 relative md:text-base sm:w-1/3 sm:pb-[19px] md:pb-[16px] lg:pb-[13px] 2xl:pb-[16.23px] lg:text-lg sm:border-b sm:leading-[19.07px] sm:border-[#676767] cursor-pointer font-semibold ${
                                        (i == 1 && "sm:text-center") ||
                                        (i == 2 && "sm:text-right")
                                    } `}
                                    onClick={() => handleDropdownTab(v.id)}
                                >
                                    {v.text}
                                    {sectionTab == i && (
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
                {data[sectionTab].data.description}
            </p>
            <div className=" mb-[30px] sm:mb-[23px] md:mb-[29px] lg:mb-[30.5px] xl:mb-[40px] 2xl:mb-[41.15px] "></div>

            <div className="flex justify-center flex-col sm:flex-row ml-[75px] sm:ml-0  gap-y-[10px] sm:gap-x-[50px] text-[#fff] md:gap-x-[60px] lg:gap-x-[55px]">
                {data[sectionTab].data.list.map((v, i) => (
                    <div
                        key={i}
                        className="text-lg sm:text-sm sm:leading-[19.07px] font-bold flex items-center gap-x-[10px] xl:text-lg xl:leading-[24.51px] md:text-base md:leading-[21.79px]"
                    >
                        <span>
                            <img
                                className="w-4 h-4 md:w-6 md:h-6"
                                src="/assets/tour-page/check.svg"
                                alt="check icon"
                            />
                        </span>
                        <span>{v}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

SectionTab.defaultProps = {
    data: sectionTabData,
};

export default SectionTab;

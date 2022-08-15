/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../components/Shared/Layout/Layout";
import { useState } from "react";

type PricingCardType = {
    name: string;
    description: string;
    monthPrice?: number;
    annualPrice?: number;
    featuresList: string[];
};

const pricingCardData: PricingCardType[] = [
    {
        name: "Lite",
        description: "For productive solo sellers and marketers",
        monthPrice: 0,
        featuresList: [
            "Single user free",
            "1GB of Storage",
            "100 Assets",
            "Content management",
            "Buyer engagement tools",
            "Engagement analytics",
            "Engagement analytics",
            "Chrome Extension",
        ],
    },
    {
        name: "Basic",
        description: "For productive solo sellers and marketers",
        monthPrice: 15,
        annualPrice: 12,
        featuresList: [
            "Up to 100 users",
            "1GB of Storage",
            "100 Assets",
            "Easy Content upload & Import",
            "Sort & Categorize Content",
            "Internal & External Assets",
            "Advanced search",
            "Chrome Extension",
            "Analytics",
            "Content Wishlist",
            "Weekly Content Email Reports",
        ],
    },
    {
        name: "Plus",
        description: "Custom plans to support the largest organizations.",
        featuresList: [
            "Custom User Quantity",
            "Custom Storage Amount",
            "Custom #Assets",
            "Everything in Team Plus:",
            "Single sin-on",
            "Fine-grained Access Control",
            "Advanced Analytics",
            "Integrations (Hubspot, Marketo, Salesforce)",
        ],
    },
];

type QuestionsDataType = {
    question: string;
    answer: string;
};

const questionsData: QuestionsDataType[] = [
    {
        question: "Is there a setup fee?",
        answer: "No. Unlike some enterprise competitors, there are no setup fees on any of our plans.",
    },
    {
        question: "Do I need to enter payment details to sign up?",
        answer: "Nope. You can sign up and use Content Camel for 14 days without entering your payment details. At the end of your trial, or when you decide to go live with ODA Center, you will need to pick a plan and enter your payment details.",
    },
    {
        question: "How long does it take to get started?",
        answer: "Yes. If you ever decide that ODA Center isn’t the best platform for your business, simply cancel your account. We don’t lock you into annual or multi-year plans.",
    },
    {
        question: "How long does it take to get started?",
        answer: "Unlike other sales enablement tools, you’ll be up and running with ODA Center as fast as you are ready. While others may take 90+ days to get going (looking at you Showpad), our customers are typically rolling ODA Center out to their teams within the week!",
    },
    {
        question:
            "Can we get help migrating off of (Highspot, Showpad, Brainshark, Google Drive?",
        answer: "It’s easy to import content directly into ODA Center, and we’re happy to show you around to get you and your team going. If you need more help migrating off your existing solution, just give us a shout.",
    },
    {
        question: "Is the Solo plan really free?",
        answer: "Yes. Our free plan is designed for sellers operating solo or looking to outperform their colleagues within an organization that hasn’t fully rolled out sales enablement to everyone (yet). We love the hustlers and the go-getters out there.",
    },
    {
        question: "How long are your contracts?",
        answer: "All ODA Center plans are month to month unless you sign up for a discounted annual plan.",
    },
    {
        question: "Do you offer any discounted plans?",
        answer: "Yes, we offer a 15% discount on annual plans when they are paid upfront.",
    },

    {
        question: "Can I change my plan later on?",
        answer: "Absolutely! You can upgrade or downgrade your plan at any time.",
    },
];

const PricingPage = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);
    return (
        <Layout>
            <div className="bg-[#191919] h-[660px] sm:h-[697px] md:h-[662px] lg:h-[705px]">
                <div className="container mx-auto">
                    <div className="pt-10 sm:pt-[60px] lg:pt-[100px] 4xl:pt-[120px]"></div>
                    <div className="px-1 text-center lg:text-[32px] lg:leading-[43.5px] text-2xl md:text-[28px] md:leading-[38.1px] text-[#fff] font-bold leading-[32.68px] ">
                        Enter prise class without the Enterprise price.
                    </div>
                    <div className="pt-[30px] sm:pt-4"></div>
                    <div className="text-lg leading-[24.51px] font-semibold text-center lg:text-[24px] lg:leading-[32.6px] lg:font-bold ">
                        Close more deals{" "}
                        <span className="text-sm leading-[19.07px] lg:text-lg lg:leading-[24.5px] lg:font-semibold">
                            with content. Solo or collaborating as a team.
                        </span>
                    </div>
                    <div className="pt-[20px] lg:pt-[40px]"></div>
                    <div>
                        <div className="flex justify-center items-center gap-5 lg:gap-[30px]">
                            <p className="text-sm font-bold leading-[19.07px] text-[#fff]">
                                Monthly Plans
                            </p>
                            <ToggleButton
                                toggle={toggle}
                                handleToggle={handleToggle}
                            />
                            <p className="text-sm font-bold leading-[19.07px] text-[#fff]">
                                Annual Discount
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F8F8F8]">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[21px] xl:gap-[30px] sm:gap-[40px] items-center relative top-[-400px] sm:top-[-482px] md:top-[-442px] md:mb-[-442px] lg:justify-center lg:top-[-421px] xl:top-[-401px] 4xl:top-[-381px] mb-[-400px] sm:mb-[-482px] lg:mb-[-421px] xl:mb-[-401px] 4xl:mb-[-381px]">
                        {pricingCardData.map((v, i) =>
                            toggle ? (
                                i != 0 && (
                                    <PricingCard
                                        key={i}
                                        data={v}
                                        isAnnual={toggle}
                                    />
                                )
                            ) : (
                                <PricingCard
                                    key={i}
                                    data={v}
                                    isAnnual={toggle}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>

            <div className="bg-[#F8F8F8]">
                <div className="container mx-auto">
                    <div className="pt-[40px] md:pt-[60px] 4xl:pt-[80px]"></div>
                    <div className="text-[17.71px] leading-[24.11px] text-center text-[#404040] font-bold sm:text-[32px] sm:leading-[43.58px] md:text-[28px] md:leading-[38.13px] lg:text-[32px] lg:leading-[43.58px]">
                        Frequently Asked Questions
                    </div>
                    <div className="pt-[22.4px] sm:pt-[40px] md:pt-[46px] lg:pt-[40px]"></div>

                    <div className="flex flex-col gap-[13.28px] sm:gap-[24px]">
                        {questionsData.map((v, i) => (
                            <QuestionCard key={i} data={v} />
                        ))}
                    </div>
                    <div className="pt-[16.2px] sm:pt-[40px] md:pt-[60px]"></div>
                </div>
            </div>

            <div className="bg-[#fff]">
                <div className="container mx-auto">
                    <div className="flex flex-col sm:flex-row-reverse items-center sm:justify-between py-[40px] sm:pt-[58px] sm:py-[40px] lg:py-[80px] xl:py-[92px] xl:px-[57px] 2xl:px-[84px] 3xl:px-[230px] 4xl:px-[290px]">
                        <div>
                            <img
                                src="/assets/pricing-page/last-section.svg"
                                alt=""
                                className="w-[196px] md:w-[274px] lg:w-[337px] 2xl:w-[374px]"
                            />
                        </div>
                        <div className="pt-[40px]"></div>
                        <div className="basis-[60%] md:basis-1/2">
                            <div className="text-[24px] max-xs:w-[321px] leading-[32.68px] text-[#101010] text-center sm:text-left font-bold lg:text-[32px]">
                                Wrangle your content. Drop the Drive.
                            </div>
                            <div className="pt-[12px] sm:pt-5"></div>
                            <div className="text-[#101010]   max-xs:w-[314px] text-[14px] leading-[19px] text-center sm:text-left font-normal">
                                One place for your winning content. Better sales
                                conversations. Smoother buyer’s journey. Close
                                more deals
                            </div>
                            <div className="pt-5"></div>

                            <div className="text-sm leading-[19.07px] flex justify-center sm:justify-start gap-5">
                                <button className="p-[13px_30px] border border-[#E51937] bg-[#E51937] text-[#fff] rounded-[4px] font-semibold">
                                    Try for Free
                                </button>
                                <button className="p-[13px_30px] border border-[#E51937] text-[#E51937] font-semibold rounded-[4px]">
                                    Take a tour
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

const QuestionCard = ({ data }: { data: QuestionsDataType }) => {
    const [isExpand, setExpand] = useState(false);
    const handleExpand = () => {
        setExpand(!isExpand);
    };
    return (
        <div
            className={`bg-[#fff] cursor-pointer border-[0.553333px] sm:border p-[11.07px] sm:p-5 sm:rounded-[10px] rounded-[5.53333px] ${
                isExpand ? "border-[#E51937]" : "border-[#D9D9D9] "
            }`}
            onClick={handleExpand}
        >
            <div className="flex items-center">
                <img
                    src={`/assets/pricing-page/${
                        isExpand ? "remove" : "add"
                    }.svg`}
                    alt=""
                    className="sm:w-6 sm:h-6 "
                />
                <div className="text-[13.28px] sm:text-[24px] sm:leading-[32.68px] lg:text-[24px] lg:leading-[32.68px] font-semibold text-[#101010] leading-[18px] ml-[11.07px] sm:ml-5 md:text-lg md:leading-[24.5px] ">
                    {data.question}
                </div>
            </div>
            {isExpand && (
                <>
                    <div className="pt-[11.07px] sm:pt-[20px] "></div>
                    <div className="text-[8.85px] leading-[12.06px] text-[#101010] ml-[24.34px] sm:leading-[21.79px] sm:text-base sm:ml-[44px]">
                        {data.answer}
                    </div>
                </>
            )}
        </div>
    );
};

const PricingCard = ({
    data,
    isAnnual,
}: {
    data: PricingCardType;
    isAnnual: boolean;
}) => {
    return (
        <div className="bg-[#fff] p-[20px_35.5px] xl:p-[20px_35.5px] md:p[20px_70.5px] lg:p-[30.77px_35.6px] md:hover:shadow-[2px_2px_16px_rgba(0,0,0,0.08)] border md:hover:border-[#E51937] rounded-[4px] h-[802px] xl:h-[802px] sm:w-[330px] xl:w-[330px] md:w-[400px] md:px-[50px] flex flex-col justify-between group transition-all duration-400 lg:h-[720px]">
            <div>
                <div className="text-[32px] font-semibold leading-[43.5px] text-[#000805] lg:text-[27.6px] lg:leading-[37.6px] xl:text-[32px] xl:leading-[43.58px]">
                    {data.name}
                </div>
                <div className="pt-2 lg:pt-[6.9px] xl:pt-2"></div>
                <div className="text-sm lg:text-[12.1px] lg:leading-[16.47px] font-semibold leading-[19.07px] text-[#222222] xl:text-[14px] xl:leading-[19.07px] 2xl:w-[60%]">
                    {data.description}
                </div>
                <div className="pt-4 xl:pt-4 lg:pt-[13.8px]"></div>
                {data.monthPrice != undefined ? (
                    <div className="text-sm font-semibold leading-[19.07px] text-[#222222] lg:text-[12.1px] lg:leading-[16.47px] xl:text-[14px] xl:leading-[19.07px]">
                        <span className="text-[30px] leading-[40.85px] font-bold lg:text-[25.92px] lg:leading-[35.3px] xl:text-[30px] xl:leading-[40.85px]">
                            $
                        </span>
                        <span className="text-[40px] leading-[54.4px] font-bold mr-[5px] lg:text-[34.56px] lg:leading-[47.07px] xl:text-[40px] xl:leading-[54.47px]">
                            {isAnnual ? data.annualPrice : data.monthPrice}
                        </span>
                        /Per Month {isAnnual && "(Save 15%)"}
                    </div>
                ) : (
                    <div>
                        <div className="text-[32px] font-bold text-[#000805] lg:text-[27.65px] lg:leading-[37.66px] xl:text-[32px] xl:leading-[43.58px]">
                            Contact Us
                        </div>
                        <div className="text-sm leading-[19.07px] font-semibold text-[#676767] lg:text-[12.1px] lg:leading-[16.47px] xl:text-[14px] xl:leading-[19.07px]">
                            Annual Plans
                        </div>
                    </div>
                )}

                <div className="pt-4 lg:pt-[13.8px] xl:pt-4"></div>

                <div className="text-[32px] font-semibold leading-[43.5px] text-[#E51937] lg:text-[27.65px] lg:leading-[37.66px] xl:text-[32px] xl:leading-[43.5px]">
                    Features
                </div>
                <div className="pt-4 lg:pt-[13.8px]"></div>

                <div className="flex flex-col gap-y-5 lg:gap-y-[17.2px] xl:gap-y-5">
                    {data.featuresList.map((v, i) => (
                        <div key={i} className="flex items-center gap-x-[6px]">
                            <img
                                src="/assets/pricing-page/check.svg"
                                alt=""
                                className="w-4 h-4 lg:w-[13.83px] lg:h-[13.83px] xl:w-4 xl:h-4"
                            />
                            <div className="text-base leading-[21.79px] font-semibold text-[#222222] lg:text-[13.83px] lg:leading-[18.83px] xl:text-[16px] xl:leading-[21.79px]">
                                {v}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <button className="rounded-[4px] p-[11px_62px]  xl:p-[11px_62px] lg:p-[9.5px_53.4px] border border-[#E51937]  text-base font-semibold leading-[21.79px] transition-all duration-400 text-[#E51937] md:group-hover:bg-[#E51937] md:group-hover:text-[#fff] ">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

const ToggleButton = ({
    toggle,
    handleToggle,
}: {
    toggle: boolean;
    handleToggle: () => void;
}) => {
    return (
        <>
            <label className="relative w-[56px] h-[31px] inline-block cursor-pointer">
                <input type="checkbox" className="w-0 h-0 opacity-0 input" />
                <span
                    className={`absolute top-0 left-0 right-0 bottom-0 bg-[#E51937] transition-all duration-300 before:absolute before:content-[''] before:h-[25px] before:w-[25px] before:bottom-[3px] before:left-[4px] before:transition-all before:duration-300 before:bg-[#F8F8F8] before:rounded-full rounded-[23px] ${
                        toggle && "before:translate-x-[23px]"
                    }`}
                    onClick={handleToggle}
                />
            </label>
        </>
    );
};

export default PricingPage;

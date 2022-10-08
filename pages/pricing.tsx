/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../components/Shared/Layout/Layout";
import { useState } from "react";
import QuestionCard from "../components/PricingPage/QuestionCard";
import PricingCard from "../components/Shared/PricingCard";
import {
    PricingCardType,
    pricingCardData,
    QuestionsDataType,
    questionsData,
} from "../components/PricingPage/data";
import ToggleButton from "../components/Shared/ToggleButton";
import { useRouter } from "next/router";

const PricingPage = () => {
    const router = useRouter();
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
                    <div className="text-lg text-[#fff] leading-[24.51px] font-semibold text-center lg:text-[24px] lg:leading-[32.6px] lg:font-bold ">
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
                                // className={
                                //     toggle
                                //         ? "!bg-[#DEDEDE] !shadow-[0px_2px_4px_rgba(0,0,0,0.25)]"
                                //         : ""
                                // }
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
                        {pricingCardData.map(
                            (v, i) =>
                                ((toggle && i != 0) || !toggle) && (
                                    <PricingCard
                                        key={i}
                                        data={v}
                                        isAnnual={toggle}
                                        isSmallLg={true}
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
                                <button onClick={() => router.push("/signup")} className=" hover-transition hover:bg-primary_dark hover:border-primary_dark p-[13px_30px] border border-primary bg-primary text-[#fff] rounded-[4px] font-semibold">
                                    Try for Free
                                </button>
                                <button onClick={() => router.push("/tour")} className="hover-transition hover:bg-primary hover:text-White p-[13px_30px] border border-primary text-primary font-semibold rounded-[4px]">
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

export default PricingPage;

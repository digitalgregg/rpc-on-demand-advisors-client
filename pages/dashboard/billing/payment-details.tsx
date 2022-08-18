/* eslint-disable @next/next/no-img-element */
import React from "react";
import PricingLayout from "../../../components/Dashboard/PricingLayout";
import { ReactNode } from "react";

function PaymentDetails() {
    return (
        <PricingLayout>
            <div className="bg-[#fff] sm:bg-[#F8F8F8]">
                <div className="dashboard-container">
                    <div className="pt-[35px]"></div>
                    <div className="text-[24px] sm:text-left leading-[32.68px] font-semibold text-[#101010] text-center">
                        Update your Current Plan & Payment Method
                    </div>
                    <div className="pt-[35px]"></div>
                    <div className="flex flex-col gap-[35px] xl:flex-row xl:gap-[36px]">
                        <ShadowCard className="h-[270px]">
                            <div className="pt-[26px]"></div>
                            <div className="font-bold text-[24px] leading-[32.68px] text-[#101010]">
                                Current Plan
                            </div>
                            <div className="pt-[31px]"></div>

                            <div className="font-bold text-[24px] leading-[32.68px] text-[#101010]">
                                Team
                                <span className="text-sm leading-[19.07px] text-[#676767] font-semibold ml-[5px]">
                                    Monthly
                                </span>
                            </div>
                            <div className="pt-[14px]"></div>
                            <div className="text-xs font-semibold leading-[16.34px] text-[#676767] w-[181px] 2xl:w-[259px]">
                                After your current plan end on August 10, 2022,
                                this plan will continue automatically.
                            </div>
                            <div className="pt-[24px]"></div>
                            <div className="text-sm font-semibold leading-[19.07px] text-[#676767]">
                                14 of 30 days
                            </div>
                            <div className="pt-2"></div>
                            <div className="relative">
                                <div className="absolute h-2 bg-[#E51937] top-[-1px] w-1/2 rounded-[20px]"></div>
                                <div className="bg-[#F8C5CD] w-full h-[6px] rounded-[20px]"></div>
                            </div>
                            <div className="absolute top-[137px] sm:top-[118px] right-[10px] sm:right-[30px]">
                                <span className="text-[21.27px] leading-[28.97px] sm:text-[30px] sm:leading-[40.85px] text-[#000805] font-bold">
                                    $
                                </span>
                                <span className="text-[28.36px] leading-[38.63px] sm:text-[40px] sm:leading-[54.47px] text-[#000805] font-bold">
                                    15
                                </span>
                                <span className="ml-[5px]"></span>
                                <span className="text-[9.93px] leading-[13.52px] sm:text-[14px] sm:leading-[19.07px] text-[#676767] font-bold">
                                    /Per Monthly
                                </span>
                            </div>
                        </ShadowCard>
                        <ShadowCard className="h-[270px]">
                            <div className="pt-[40px]"></div>
                            <div className="font-bold text-[24px] leading-[32.68px] text-[#101010]">
                                Payment Method
                            </div>
                            <div className="pt-2"></div>
                            <div className="text-xs font-semibold leading-[16.34px] text-[#676767]">
                                Change how you pay for your plan.
                                {/* No payment method added yet. */}
                            </div>
                            <div className="pt-[63px]"></div>

                            <div>
                                <div className="pt-[29px]"></div>
                                <button className="text-base leading-[58px] font-bold bg-[#E51937] w-full h-[58px] rounded-[4px]">
                                    + Add Payment Method
                                </button>
                            </div>

                            <div className=" justify-between hidden">
                                <div className="flex gap-4">
                                    <div>
                                        <div className="text-[#E51937] text-base leading-[21.79px] font-bold border-[#E51937] border rounded-[4px] p-[6px_12.5px]">
                                            VISA
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-[#101010] leading-[19.07px]">
                                            Visa ending in 1234
                                        </div>
                                        <div className="pt-[5px]"></div>
                                        <div className="text-base font-semibold text-[#676767] leading-[21.79px]">
                                            Expiry 05/2025
                                        </div>
                                        <div className="pt-[5px]"></div>

                                        <div className="flex items-center gap-1">
                                            <img
                                                src="/assets/dashboard/mail.svg"
                                                alt="Mail icon"
                                            />
                                            <span className="text-sm font-bold text-[#676767] leading-[19.07px]">
                                                billing@email.com
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="p-[7px_15px] text-base font-bold leading-[21.79px] text-[#E51937] border border-[#E51937] rounded-[4px]">
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </ShadowCard>
                    </div>
                    <div className="pt-[35px]"></div>

                    <div>
                        <ShadowCard>
                            <div className="pt-[24px]"></div>
                            <div className="flex justify-between items-center pb-[19px] border-b border-[#9E9E9E]">
                                <div className="text-lg sm:text-[24px] sm:leading-[32.68px] font-bold leading-[24.51px] text-[#101010] ">
                                    Billing History
                                </div>
                                <button className="text-xs font-bold leading-[16.34px] p-[8px_24px] bg-[#E51937] rounded-[4px] text-[#FFFFFF] ">
                                    Download all
                                </button>
                            </div>
                            <div>
                                <HistoryItem />
                                <HistoryItem />
                                <HistoryItem />
                                <HistoryItem />
                                <HistoryItem />
                            </div>
                            <div className="pt-[24px]"></div>
                        </ShadowCard>
                    </div>
                    <div className="pt-[50px]"></div>
                </div>
            </div>
        </PricingLayout>
    );
}

type HistoryItemDataType = {
    plan: string;
    amount: number;
    link: string;
    date: string;
};

function HistoryItem({ data }: { data?: HistoryItemDataType }) {
    return (
        <div className="flex justify-between items-center  py-[22.5px] sm:py-[19px] border-b border-[#9E9E9E]">
            <div>
                <div className="text-sm sm:text-base sm:leading-[21.79px] leading-[19.07px] font-bold sm:font-semibold text-[#000]">
                    Team Plan - USD $15.00
                </div>
                <div className="pt-1"></div>
                <div className="text-xs font-semibold leading-[16.34px] text-[#676767]">
                    July 30, 2022
                </div>
            </div>
            <button className="text-xs leading-[16.34px] font-bold text-[#E51937] p-[7px_23px] border-[#E51937] border rounded-[4px]">
                Download
            </button>
        </div>
    );
}

function ShadowCard({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={
                "w-full rounded-[4px]  shadow-[2px_2px_16px_rgba(0,0,0,0.08)] px-[10px] sm:px-[30px] relative bg-[#fff]" +
                " " +
                className
            }
        >
            {children}
        </div>
    );
}

export default PaymentDetails;

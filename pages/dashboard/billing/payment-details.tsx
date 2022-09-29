/* eslint-disable @next/next/no-img-element */
import React from "react";
import PricingLayout from "../../../components/Dashboard/PricingLayout";
import { ReactNode } from "react";
import { useState } from "react";
import PaymentMethodDialog from "../../../components/Dashboard/BillingPage/PaymentMethodDialog";
import { useQuery } from "react-query";
import api from "../../../api";
import { getLocal } from "../../../utils/localStorage";

function PaymentDetails() {
    const { _id } = getLocal("user-info");
    const { isLoading, data } = useQuery("get-billing-data", () =>
        api.get(`/api/billing-record/${_id}`)
    );
    const billingData = data?.data[0];
    const purches_date = billingData?.purches_date;
    const getPurchesDate = new Date(purches_date).getDate();

    console.log(getPurchesDate, "billing data....^^^^^.....");
    const [modalOpen, setModalOpen] = useState(false);
    const handleModal = () => {
        setModalOpen(!modalOpen);
    };
    function getNumber() {
        const remainPlanStyle = getPurchesDate + 70;
        return { width: `${remainPlanStyle}%` };
    }
    return (
        <>
            <PricingLayout>
                <div className="">
                    <div className="">
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
                                    {billingData?.plan_name
                                        ? `${billingData?.plan_name}`
                                        : "Free"}
                                    <span className="text-sm leading-[19.07px] text-[#676767] font-semibold ml-[5px]">
                                        Monthly
                                    </span>
                                </div>
                                <div className="pt-[14px]"></div>
                                <div className="text-xs font-semibold leading-[16.34px] text-[#676767] w-[181px] 2xl:w-[259px]">
                                    After your current plan end on{" "}
                                    {billingData?.expire_date
                                        ? `${billingData?.expire_date}`
                                        : `${new Date().toDateString()}`}
                                    , this plan will continue automatically.
                                </div>
                                <div className="pt-[24px]"></div>
                                <div className="text-sm font-semibold leading-[19.07px] text-[#676767]">
                                    {getPurchesDate
                                        ? `${30 - getPurchesDate}`
                                        : 0}{" "}
                                    of 30 days
                                </div>
                                <div className="pt-2"></div>
                                <div className="relative">
                                    <div
                                        style={getNumber()}
                                        className="absolute h-2 bg-primary top-[-1px]  rounded-[20px]"
                                    ></div>
                                    <div className="bg-[#F8C5CD] w-full h-[6px] rounded-[20px]"></div>
                                </div>
                                <div className="absolute top-[137px] sm:top-[118px] right-[10px] sm:right-[30px]">
                                    <span className="text-[21.27px] leading-[28.97px] sm:text-[30px] sm:leading-[40.85px] text-[#000805] font-bold">
                                        $
                                    </span>
                                    <span className="text-[28.36px] leading-[38.63px] sm:text-[40px] sm:leading-[54.47px] text-[#000805] font-bold">
                                        {billingData?.amount_total
                                            ? `${
                                                  billingData?.amount_total /
                                                  100
                                              }`
                                            : 0}
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
                                    <button
                                        className="text-base leading-[58px] font-bold bg-primary w-full h-[58px] rounded-[4px] transition-all duration-200 text-white hover:bg-primary_dark"
                                        onClick={handleModal}
                                    >
                                        + Add Payment Method
                                    </button>
                                </div>

                                <div className="justify-between hidden ">
                                    <div className="flex gap-4">
                                        <div>
                                            <div className="text-primary text-base leading-[21.79px] font-bold border-primary border rounded-[4px] p-[6px_12.5px]">
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
                                        <button className="p-[7px_15px] text-base font-bold leading-[21.79px] text-primary border border-primary rounded-[4px]">
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
                                    <button className="text-xs font-bold leading-[16.34px] p-[8px_24px] bg-primary rounded-[4px] text-[#FFFFFF] transition-all duration-200 hover:bg-primary_dark">
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
            <div>
                <PaymentMethodDialog
                    modalOpen={modalOpen}
                    handleModal={handleModal}
                />
            </div>
        </>
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
            <button className="transition ease-in-out duration-200 hover:bg-primary hover:text-White text-xs leading-[16.34px] font-bold text-primary p-[7px_23px] border-primary border rounded-[4px]">
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

/* eslint-disable @next/next/no-img-element */
import React from "react";
import PricingLayout from "../../../components/Dashboard/PricingLayout";
import { ReactNode } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import api from "../../../api";
import { useAtom } from "jotai";
import { PMDTYPE } from "../../../utils/interfaces";
import PaymentMethodComponent from "../../../components/Dashboard/PaymentMethodComponent";
import PaymentDetailsProvider from "../../../components/Context/PaymentDetailsProvider";
import { PaymentMethod, team_state } from "../../../state";
import Skeleton from "react-loading-skeleton";
import LoadingAnimation from "../../../components/Shared/LoadingAnimation";
import Meta from "../../../components/Meta";

function PaymentDetails() {
    const [teamData] = useAtom(team_state);

    const { data } = useQuery(
        ["get-billing-data", teamData],
        () => api.get(`/api/payment/plan/${teamData.id}`),
        {
            enabled: !!teamData.id,
            select: (res) => res.data,
            retry: (failureCount, error) => {
                return false;
            },
        }
    );
    const {
        isLoading,
        isSuccess,
        isError,
        data: billingData,
    } = useQuery(
        ["fetch-billing"],
        () => api.get("/api/billing/" + teamData.user_id),
        {
            select: (res) => res.data,
        }
    );
    const [downloadAllLoading, setDownloadAllLoading] = useState(false);
    const handleDownloadAll = () => {
        setDownloadAllLoading(true);
        if (billingData && billingData.length > 0) {
            billingData.forEach(async (v: any, i: number) => {
                try {
                    if (v._id) {
                        await api.get("/api/billing/download/" + v._id);
                    }
                } catch (err) {
                    setDownloadAllLoading(false);

                    console.log(err);
                }
            });
        }
    };

    return (
        <>
            <Meta title="Payment Details" />

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
                                    {/* {"Free"} */}
                                    {data ? (
                                        data.plan_name
                                    ) : (
                                        <Skeleton width={200} inline />
                                    )}

                                    <span className="text-sm leading-[19.07px] text-[#676767] font-semibold ml-[5px]">
                                        {/* Monthly */}
                                        {data && data.plan_interval}
                                    </span>
                                </div>
                                <div className="pt-[14px]"></div>
                                <div className="text-xs font-semibold leading-[16.34px] text-[#676767] w-[181px] 2xl:w-[259px]">
                                    {data ? (
                                        `After your current plan end on 30, this
                                        plan will continue automatically.`
                                    ) : (
                                        <Skeleton count={3} />
                                    )}
                                    {/* After your current plan end on {30}, this
                                    plan will continue automatically. */}
                                </div>
                                <div className="pt-[24px]"></div>
                                <div className="text-sm font-semibold leading-[19.07px] text-[#676767]">
                                    {/* 0 of 30 days */}
                                    {data ? (
                                        Math.max(
                                            betweenTwoDates(
                                                new Date().toISOString(),
                                                data.plan_end
                                            ),
                                            0
                                        ) +
                                        " of " +
                                        betweenTwoDates(
                                            data.plan_start,
                                            data.plan_end
                                        ) +
                                        " days left"
                                    ) : (
                                        <Skeleton width={140} />
                                    )}
                                </div>
                                <div className="pt-2"></div>
                                <div className="relative">
                                    <div
                                        style={
                                            data &&
                                            getPercentageStyle(
                                                betweenTwoDates(
                                                    new Date().toISOString(),
                                                    data.plan_end
                                                ),
                                                betweenTwoDates(
                                                    data.plan_start,
                                                    data.plan_end
                                                )
                                            )
                                        }
                                        className="absolute transition-all duration-500 h-2 bg-primary top-[-1px]  rounded-[20px]"
                                    ></div>
                                    <div className="bg-[#F8C5CD] w-full h-[6px] rounded-[20px]"></div>
                                </div>
                                <div className="absolute top-[137px] sm:top-[118px] right-[10px] sm:right-[30px]">
                                    {data ? (
                                        <div>
                                            <span className="text-[21.27px] leading-[28.97px] sm:text-[30px] sm:leading-[40.85px] text-[#000805] font-bold">
                                                $
                                            </span>
                                            <span className="text-[28.36px] leading-[38.63px] sm:text-[40px] sm:leading-[54.47px] text-[#000805] font-bold">
                                                {data.plan_price}
                                            </span>
                                            <span className="ml-[5px]"></span>
                                            <span className="text-[9.93px] leading-[13.52px] sm:text-[14px] sm:leading-[19.07px] text-[#676767] font-bold">
                                                /Per {data.plan_interval}
                                            </span>
                                        </div>
                                    ) : (
                                        <Skeleton width={120} height={30} />
                                    )}
                                </div>
                            </ShadowCard>
                            <PaymentDetailsProvider>
                                <PaymentMethodComponent />
                            </PaymentDetailsProvider>
                        </div>
                        <div className="pt-[35px]"></div>

                        <div>
                            <ShadowCard>
                                <div className="pt-[24px]"></div>
                                <div className="flex justify-between items-center pb-[19px] border-b border-[#9E9E9E]">
                                    <div className="text-lg sm:text-[24px] sm:leading-[32.68px] font-bold leading-[24.51px] text-[#101010] ">
                                        Billing History
                                    </div>
                                    {/* <button
                                        style={{
                                            display: "block",
                                        }}
                                        onClick={handleDownloadAll}
                                        className=" text-xs font-bold leading-[16.34px] h-[36px] w-[120px] flex items-center justify-center bg-primary rounded-[4px] text-[#FFFFFF] transition-all duration-200 hover:bg-primary_dark"
                                    >
                                        {downloadAllLoading ? (
                                            <div className="flex items-center justify-center gap-1">
                                                <LoadingAnimation color="#fff" />
                                                <div>Loading</div>
                                            </div>
                                        ) : (
                                            "Download all"
                                        )}
                                    </button> */}
                                </div>
                                {isLoading ? (
                                    <div className="flex items-center gap-2 py-4">
                                        <LoadingAnimation />
                                        <div>Loading billing history...</div>
                                    </div>
                                ) : (
                                    <>
                                        {isSuccess && (
                                            <div>
                                                {billingData?.map(
                                                    (
                                                        item: BillingType,
                                                        i: number
                                                    ) => (
                                                        <div key={i}>
                                                            <HistoryItem
                                                                billingItem={
                                                                    item
                                                                }
                                                            />
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        )}
                                        {isError && (
                                            <div className="py-4">
                                                You haven{"'"}t purchased any
                                                plan yet
                                            </div>
                                        )}
                                    </>
                                )}
                                <div className="pt-[24px]"></div>
                            </ShadowCard>
                        </div>
                        <div className="pt-[50px]"></div>
                    </div>
                </div>
            </PricingLayout>
        </>
    );
}

export interface BillingType {
    _id: string;
    user_id: string;
    plan_price: number;
    invoice_no: number;
    plan_name: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

function HistoryItem({ billingItem }: { billingItem: BillingType }) {
    const [loadingBtn, setLoadingBtn] = useState(false);
    const handleDownload = async () => {
        setLoadingBtn(true);
        try {
            const response = await api.get(
                "/api/billing/download/" + billingItem._id,
                { responseType: "blob" }
            );
            const fileName = response.headers["content-disposition"];
            const href = URL.createObjectURL(response.data);
            const link = document.createElement("a");
            link.href = href;
            link.setAttribute("download", fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
            setLoadingBtn(false);
            console.log(response);
        } catch (err) {
            setLoadingBtn(false);
            console.log(err);
        }
    };

    return (
        <div className="flex justify-between items-center  py-[22.5px] sm:py-[19px] border-b border-[#9E9E9E]">
            <div>
                <div className="text-sm sm:text-base sm:leading-[21.79px] leading-[19.07px] font-bold sm:font-semibold text-[#000]">
                    {billingItem.plan_name} Plan - USD ${billingItem.plan_price}
                </div>
                <div className="pt-1"></div>
                <div className="text-xs font-semibold leading-[16.34px] text-[#676767]">
                    {new Date(billingItem.createdAt).toDateString()}
                </div>
            </div>
            <button
                onClick={handleDownload}
                className={`w-[109px] justify-center h-[32px] flex items-center transition ease-in-out duration-200 ${
                    !loadingBtn && "hover:bg-primary"
                }  hover:text-White text-xs leading-[16.34px] font-bold text-primary p-[7px_23px] border-primary border rounded-[4px]`}
            >
                {loadingBtn === true ? (
                    <span>
                        <LoadingAnimation color="#E51937" />
                    </span>
                ) : (
                    "Download"
                )}
            </button>
        </div>
    );
}

function getPercentageStyle(left_days: number, total_days: number) {
    const percentage = (36.5 / total_days) * 100;
    return { width: `${(left_days / total_days) * 100}%` };
}

export function ShadowCard({
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

const OldCardDetails = ({ data }: { data: PMDTYPE }) => {
    return (
        <div className="">
            <div className="pt-[63px]"></div>

            <div className="flex justify-between ">
                <div className="flex gap-4">
                    <div>
                        <div className="text-primary text-base leading-[21.79px] font-bold border-primary border rounded-[4px] p-[6px_12.5px] uppercase">
                            {data.card.brand}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm font-bold text-[#101010] leading-[19.07px]">
                            Visa ending in {data.card.last4}
                        </div>
                        <div className="pt-[5px]"></div>
                        <div className="text-base font-semibold text-[#676767] leading-[21.79px]">
                            Expiry {data.card.exp_month}/{data.card.exp_year}
                        </div>
                        <div className="pt-[5px]"></div>

                        <div className="flex items-center gap-1">
                            <img
                                src="/assets/dashboard/mail.svg"
                                alt="Mail icon"
                            />
                            <span className="text-sm font-bold text-[#676767] leading-[19.07px]">
                                {data.billing_details.email}
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
        </div>
    );
};

function betweenTwoDates(date1: string, date2: string) {
    const dateOne = new Date(date1);
    const dateTwo = new Date(date2);

    const difference = dateTwo.getTime() - dateOne.getTime();
    return Math.round(difference / (1000 * 3600 * 24));
}

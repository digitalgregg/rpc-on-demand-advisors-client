/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Meta from "../../../components/Meta";
import LoadingAnimation from "../../../components/Shared/LoadingAnimation";

function PaymentSuccess() {
    return (
        <div className="w-[100%] h-[100%]">
            <Meta title="Payment Successful" />
            <div className="bg-[#202020] w-[100%] h-[70px] flex items-center">
                <img
                    src="/img/ODA-logo.png"
                    alt="logo"
                    className="w-[198px] h-[30.13px] xs:ml-[20px] lg:ml-[47px] xl:ml-[180px]"
                />
            </div>
            <div className="mt-[60px] mb-[40px] 4xl:mt-[80px]">
                <div className="flex w-[100%] justify-center">
                    <img
                        src="/img/payment-success.svg"
                        alt="paymentSuccess"
                        className="xs:w-[164px] xs:h-[106px] md:w-[354px] md:h-[232px]"
                    />
                </div>
                <div className="mx-auto xs:w-[335px] sm:w-[433px] xl:w-[511px]">
                    <h2 className="text-[#27AE60] font-bold xs:text-[24px] xs:leading-[33px] lg:text-[28px] lg:leading-[38px] xl:text-[40px] xl:leading-[54px] text-center xs:mt-[23px] xs:mb-[19px] lg:mt-[40px] lg:mb-[16px]">
                        Payment Successful
                    </h2>
                    <p className="text-[#4F4F4F] font-normal xs:text-[14px] xs:leading-[150%] lg:text-[16px] lg:leading-[22px] xl:text-[18px] xl:leading-[25px] text-center xs:mb-[30px] lg:mb-[40px]">
                        Your payment at{" "}
                        <Link href="/dashboard/billing/payment-details">
                            <span className="text-[#E51937] cursor-pointer">
                                ODA center
                            </span>
                        </Link>{" "}
                        was successful. We will send you more information on
                        your email.
                    </p>
                    <div className="text-center">
                        <Link href={"/dashboard/contents"}>
                            <button className="bg-[#E51937] mb-[5px] text-[#FFFFFF] xs:w-[190px] xs:h-[44px] lg:w-[220px] lg:h-[48px] xl:w-[230px] rounded-[4px] xs:text-[14px] lg:text-[18px] font-semibold cursor-pointer">
                                Go Back to Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentSuccess;

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import usePlanData from "../../hooks/usePlanData";
import secureLocalStorage from "react-secure-storage";
import { getLocal } from "./../../utils/localStorage";
import api from "../../api";
import { toast } from "react-toastify";
import LoadingAnimation from "../../components/Shared/LoadingAnimation";

export default function Index() {
    const { _id } = getLocal("user-info");
    const router = useRouter();
    const session = router.query;
    const sessionId = session.session_id;
    const [buttonLoading, setButtonLoading] = useState(false);

    const { data: shippingData } = useQuery(
        ["get-shipping-address", _id],
        () => api.get(`/api/shipping-address/${_id}`),
        { enabled: !!_id }
    );
    const shippinInfo = shippingData?.data[0];
    const { data, isLoading } = useQuery(
        ["get-checkout-session", sessionId],
        () => api.get(`/api/checkout?sessionId=${sessionId}`),
        { enabled: !!sessionId }
    );
    const sessionData = data?.data;
    const planItem: any = secureLocalStorage.getItem("plan");
    const email = sessionData?.customer_details.email;

    const purcheseDate = new Date();
    const expireDate = purcheseDate.setDate(purcheseDate.getDate() + 30);
    const getDate = new Date(expireDate).toDateString();

    const billingPostData = {
        user_id: _id,
        amount_total: sessionData?.amount_total,
        currency: sessionData?.currency,
        customer: sessionData?.customer,
        email: sessionData?.customer_details.email,
        name: sessionData?.customer_details.name,
        city: shippinInfo?.city,
        country: sessionData?.customer_details.address.country,
        address_line: shippinInfo?.address_line,
        zip: shippinInfo?.zip,
        expires_at: sessionData?.expires_at,
        customer_id: sessionData?.id,
        payment_method_types: "card",
        payment_status: sessionData?.payment_status,
        status: sessionData?.status,
        subscription: sessionData?.subscription,
        success_url: sessionData?.success_url,
        assetLimit: planItem?.assetLimit,
        plan_name: planItem?.name,
        storageLimit: planItem?.storageLimit,
        userLimit: planItem?.userLimit,
        purches_date: `${purcheseDate}`,
        expire_date: `${getDate}`,
    };

    const handleClick = async () => {
        setButtonLoading(true);
        try {
            if (sessionData?.status === "complete") {
                const price =
                    planItem?.isAnnual === false
                        ? `${planItem?.monthPrice}`
                        : `${planItem?.annualPrice}`;
                await api
                    .post("/api/billing-record", billingPostData)
                    .then((res) => {
                        api.post("/api/billing-details", {
                            price,
                            email,
                        });
                        setButtonLoading(false);
                        toast.success(
                            "Your Plan has been updated successfully"
                        );
                        router.push("/dashboard/contents");
                    });
            } else {
                toast.error("Payment process is not completed");
                router.push("/dashboard/billing/subscription-plan");
            }
        } catch (err) {
            toast.error("Something is wrong !");
            // router.push("/dashboard/billing/subscription-plan");
        }
    };
    return (
        <div className="w-[100%] h-[100vh] modal-scroll">
            <div className="bg-[#202020] w-[100%] h-[70px] flex items-center">
                <img
                    src="/img/ODA-logo.png"
                    alt="logo"
                    className="w-[198px] h-[30.13px] xs:ml-[20px] lg:ml-[47px] xl:ml-[180px]"
                />
            </div>
            <div className="w-[100%] flex flex-col justify-center items-center xs:h-[80vh] md:h-[88vh] lg:h-[90vh] xl:h-[95vh] 2xl:h-[90vh]">
                <img
                    src="/img/payment-success.svg"
                    alt="paymentSuccess"
                    className="xs:w-[164px] xs:h-[106px] md:w-[354px] md:h-[232px]"
                />
                <h2 className="text-[#27AE60] font-bold xs:text-[24px] xs:leading-[33px] lg:text-[28px] lg:leading-[38px] xl:text-[40px] xl:leading-[54px] text-center xs:mt-[23px] xs:mb-[19px] lg:mt-[40px] lg:mb-[16px]">
                    Payment Successful
                </h2>
                <p className="text-[#4F4F4F] font-normal xs:text-[14px] xs:leading-[150%] lg:text-[16px] lg:leading-[22px] xl:text-[18px] xl:leading-[25px] text-center xs:mb-[30px] lg:mb-[40px] xs:w-[90%] sm:w-[50%] lg:w-[47%] 2xl:w-[35%] 3xl:w-[30%] 4xl:w-[26%]">
                    Your payment at{" "}
                    <Link href="/dashboard/billing/payment-details">
                        <span className="text-[#E51937] cursor-pointer">
                            ODA center
                        </span>
                    </Link>{" "}
                    was successful. We will send you more information on your
                    email.
                </p>
                <>
                    <button
                        onClick={handleClick}
                        className="bg-[#E51937] flex justify-center items-center mb-[5px] text-[#FFFFFF] xs:w-[160px] xs:h-[44px] lg:w-[200px] lg:h-[48px] xl:w-[230px] rounded-[4px] xs:text-[14px] lg:text-[18px] font-semibold cursor-pointer"
                    >
                        {buttonLoading === true ? (
                            <span>
                                <LoadingAnimation color="white" />
                            </span>
                        ) : (
                            "Confirm Subscription"
                        )}
                    </button>
                </>{" "}
            </div>
        </div>
    );
}

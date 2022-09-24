import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import secureLocalStorage from "react-secure-storage";
import { getLocal } from "../../../utils/localStorage";
import { useQuery } from "react-query";
import api from "../../../api";

const CheckoutForm = () => {
    const planData: any = secureLocalStorage.getItem("plan");
    const { email, name, _id } = getLocal("user-info");

    const { data, refetch } = useQuery(
        ["get-shipping-address", _id],
        () => api.get(`http://localhost:8080/api/shipping-address/${_id}`),
        { enabled: !!_id }
    );

    const shippingData = data?.data[0];
    const stripePromise = loadStripe(
        `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
    );
    const handleSubmit = async () => {
        const stripe = await stripePromise;
        const postData = {
            amount:
                planData?.isAnnual === false
                    ? planData?.monthPrice
                    : planData?.annualPrice,
            // assetLimit: planData?.assetLimit,
            planName: planData?.name,
            logo: "https://oda-center.herokuapp.com/logo2.png",
            // storageLimit: planData?.storageLimit,
            // userLimit: planData?.userLimit,
            // user_name: name,
            // user_email: email,
            // address_line: shippingData?.address_line,
            // city: shippingData?.city,
            // state: shippingData?.state,
            // zip: shippingData?.zip,
            // user_id: shippingData?.user_id,
        };
        console.log(postData, "**********************");
        fetch("http://localhost:8080/api/payment", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                currentPlan: postData,
            }),
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (session) {
                return (
                    stripe &&
                    stripe.redirectToCheckout({ sessionId: session.id })
                );
            })
            .then(function (result) {
                if (result && result.error) {
                    alert(result.error.message);
                }
            })
            .catch(function (error) {
                console.error("Error:", error);
            });
    };
    return (
        <div>
            <button
                onClick={handleSubmit}
                className="mt-[30px] h-[58px] hover:bg-primary bg-[#ffffff] border border-primary font-bold w-full rounded-[4px] text-[16px] leading-[58px] text-primary hover:text-[#FFFFFF]"
            >
                Checkout
            </button>
        </div>
    );
};

export default CheckoutForm;

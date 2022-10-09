import { loadStripe } from "@stripe/stripe-js";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React, { useState } from "react";
import api from "../../../api";
import { PaymentMethod } from "../../../state";

const PUBLISHER_KEY =
    "pk_test_51LpbnJLpSmU6gOZ7D4ARj7x0qx27TiEswjs0pgt1UtH5P3lhkfBtcJcDUufn0ONqbsu7UwIF8FSd78o7q6uK7IUU0048KjfyYa";

function SubscribeButton() {
    const [paymentMethod] = useAtom(PaymentMethod);
    const router = useRouter();
    const handleSubscription = async () => {
        router.push(
            "/dashboard/billing/confirm-payment/price_1LpbseLpSmU6gOZ7gHiZZp1u"
        );
        return;
        // const apiObj = {
        //     cus_id: paymentMethod.customer,
        //     price_id: "price_1LpbseLpSmU6gOZ7gHiZZp1u",
        //     payment_method: paymentMethod.id,
        // };
        // try {
        //     const res = await api.post(
        //         "/api/payment/create-subscription",
        //         apiObj
        //     );

            // const clientSecret =
            //     res.data.latest_invoice.payment_intent.client_secret;
            // const stripe = await loadStripe(PUBLISHER_KEY);
            // if (stripe) {
            //     const { error, paymentIntent } =
            //         await stripe?.confirmCardPayment(clientSecret, {
            //             payment_method: paymentMethod.id,
            //         });
            //     console.log(error, paymentIntent);
            // }
        // } catch (error) {
        //     console.log(error);
        // }
    };

    return (
        <div>
            <button
                onClick={handleSubscription}
                className="mt-2 text-primary text-sm font-medium"
            >
                Subscribe
            </button>
        </div>
    );
}

export default SubscribeButton;

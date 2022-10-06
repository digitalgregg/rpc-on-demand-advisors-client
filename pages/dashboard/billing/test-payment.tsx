import React from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";

import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../../components/CheckoutForm";
import Head from "next/head";

const STRIPE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string;

const stripePromise = loadStripe(STRIPE_KEY);

function TestPayment() {
    const [clientSecret, setClientSecret] = React.useState("");

    React.useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("/api/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const options: StripeElementsOptions = {
        clientSecret,
        appearance: {
            theme: "stripe",
        },
    };

    return (
        <DashboardLayout>
            <div>
                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                )}
            </div>
        </DashboardLayout>
    );
}

export default TestPayment;

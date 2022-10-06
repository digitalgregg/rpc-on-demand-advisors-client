import React, { ReactNode, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    PaymentElement,
    Elements,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import LodingAnimation from "../../Shared/LodingAnimation";
import { useAtom } from "jotai";
import { PaymentMethod, signupState } from "../../../state";

const stripePromise = loadStripe(
    "pk_test_51LpbnJLpSmU6gOZ7D4ARj7x0qx27TiEswjs0pgt1UtH5P3lhkfBtcJcDUufn0ONqbsu7UwIF8FSd78o7q6uK7IUU0048KjfyYa"
);

type APF = {
    clientSecret: string;
};

function AddPaymentForm({ clientSecret }: APF) {
    const options = {
        // passing the client secret obtained in step 2
        clientSecret: clientSecret,
        // Fully customizable with appearance API.
        appearance: {
            /*...*/
        },
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            <SetupForm />
        </Elements>
    );
}

export default AddPaymentForm;

const SetupForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentMethod, setPaymentMethod] = useAtom(PaymentMethod);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loadingButton, setLoadingButton] = useState(false);
    const [userData] = useAtom(signupState);

    const handleSubmit = async (event: any) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const { error, setupIntent }: any = await stripe.confirmSetup({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
                return_url:
                    "http://localhost:3000/dashboard/billing/payment-details",
            },
            redirect: "if_required",
        });

        if (error) {
            // This point will only be reached if there is an immediate error when
            // confirming the payment. Show error to your customer (for example, payment
            // details incomplete)
            setErrorMessage(error.message);
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
            setPaymentMethod({
                ...paymentMethod,
                id: setupIntent.payment_method,
            });
            console.log(setupIntent);
        }
    };

    // const paymentStatus = PaymentStatus();
    // console.log(paymentStatus);

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement
                options={{
                    defaultValues: {
                        billingDetails: {
                            name: userData.name,
                            email: userData.email,
                        },
                    },
                }}
            />
            <div className="pt-5"></div>
            <button
                disabled={!stripe}
                className="h-[44px] w-full text-[#fff] font-medium rounded-[4px]  text-base leading-[44px] transition-all duration-200 hover:bg-primary_dark bg-primary"
                type="submit"
            >
                {loadingButton === true ? (
                    <div>
                        <LodingAnimation color="white" />
                    </div>
                ) : (
                    "Add"
                )}
            </button>
            <div className="pt-3"></div>

            {/* Show error message to your customers */}
            {errorMessage && <div>{errorMessage}</div>}
        </form>
    );
};

export const PaymentStatus = () => {
    const stripe = useStripe();
    const [message, setMessage] = useState<null | string>(null);

    useEffect(() => {
        if (!stripe) {
            return;
        }

        // Retrieve the "setup_intent_client_secret" query parameter appended to
        // your return_url by Stripe.js
        const clientSecret = new URLSearchParams(window.location.search).get(
            "setup_intent_client_secret"
        ) as string;

        if (!clientSecret) {
            return;
        }

        // Retrieve the SetupIntent
        stripe
            .retrieveSetupIntent(clientSecret)
            .then(({ setupIntent }: any) => {
                // Inspect the SetupIntent `status` to indicate the status of the payment
                // to your customer.
                //
                // Some payment methods will [immediately succeed or fail][0] upon
                // confirmation, while others will first enter a `processing` state.
                //
                // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
                switch (setupIntent.status) {
                    case "succeeded":
                        setMessage(
                            "Success! Your payment method has been saved."
                        );
                        break;

                    case "processing":
                        setMessage(
                            "Processing payment details. We'll update you when processing is complete."
                        );
                        break;

                    case "requires_payment_method":
                        // Redirect your user back to your payment page to attempt collecting
                        // payment again
                        setMessage(
                            "Failed to process payment details. Please try another payment method."
                        );
                        break;
                }
            });
    }, [stripe]);

    return message;
};

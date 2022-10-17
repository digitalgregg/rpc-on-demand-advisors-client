import React, { ReactNode, useEffect, useState } from "react";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import {
    PaymentElement,
    Elements,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import { useAtom } from "jotai";
import { PaymentMethod, signupState } from "../../../state";
import api from "../../../api";
import { toast } from "react-toastify";
import LoadingAnimation from "../../Shared/LoadingAnimation";
import secureLocalStorage from "react-secure-storage";
import { GetPaymentDetails } from "../../Context/PaymentDetailsProvider";

const STRIPE_PUBLISHER_KEY: string =
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
    "pk_test_51LpbnJLpSmU6gOZ7D4ARj7x0qx27TiEswjs0pgt1UtH5P3lhkfBtcJcDUufn0ONqbsu7UwIF8FSd78o7q6uK7IUU0048KjfyYa";

const stripePromise = loadStripe(STRIPE_PUBLISHER_KEY);

type APF = {
    clientSecret: string;
    handleModal: () => any;
    type: "update" | "add";
};

function AddPaymentForm({ clientSecret, handleModal, type }: APF) {
    const options: StripeElementsOptions = {
        clientSecret: clientSecret,
        loader: "auto",
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            <SetupForm handleModal={handleModal} type={type} />
        </Elements>
    );
}

AddPaymentForm.defaultProps = {
    type: "add",
};

export default AddPaymentForm;

const SetupForm = ({ handleModal, type }: any) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState(null);
    const [loadingButton, setLoadingButton] = useState(false);
    const [userData] = useAtom(signupState);
    const [paymentMethod, setPaymentMethod] = useAtom(PaymentMethod);

    const { refetch } = GetPaymentDetails();

    const handleSubmit = async (event: any) => {
        setLoadingButton(true);
        event.preventDefault();
        try {
            if (!stripe || !elements) {
                throw new Error("Stripe or elements not found");
            }

            const { error, setupIntent }: any = await stripe.confirmSetup({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/dashboard/billing/payment-details`,
                    payment_method_data: {
                        billing_details: {
                            email: userData.email,
                            name: userData.name,
                        },
                    },
                },
                redirect: "if_required",
            });
            if (error) throw new Error(error.message);

            setPaymentMethod((state) => ({
                ...paymentMethod,
                id: setupIntent.payment_method,
            }));

            refetch();
            setLoadingButton(false);
            toast.success(`Card ${type} successfully`);
            handleModal();
        } catch (err: any) {
            setErrorMessage(err.message);
            setLoadingButton(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />

            {errorMessage && (
                <div className="text-sm text-red-600 pt-[5px]">
                    {errorMessage}
                </div>
            )}
            <div className="pt-5"></div>
            <button
                disabled={!stripe}
                className="h-[44px] w-full text-[#fff] font-medium rounded-[4px]  text-base leading-[44px] transition-all duration-200 capitalize hover:bg-primary_dark bg-primary"
                type="submit"
            >
                {loadingButton === true ? (
                    <div className="flex items-center justify-center gap-[10px]">
                        <LoadingAnimation color="white" />
                        <div>Loading...</div>
                    </div>
                ) : (
                    type
                )}
            </button>
            <div className="pt-3"></div>
        </form>
    );
};

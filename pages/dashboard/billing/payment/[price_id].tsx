import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import api from "../../../../api";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import PaymentInfoDialog from "../../../../components/Dashboard/BillingPage/PaymentInfoDialog";
import { Form, Formik } from "formik";
import InputField from "../../../../components/Shared/InputField";
import secureLocalStorage from "react-secure-storage";
import { NewCardDetails } from "../../../../components/Dashboard/PaymentMethodComponent";
import { useAtom } from "jotai";
import { signupState } from "../../../../state";
import {
    Elements,
    PaymentElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    "pk_test_51LpbnJLpSmU6gOZ7D4ARj7x0qx27TiEswjs0pgt1UtH5P3lhkfBtcJcDUufn0ONqbsu7UwIF8FSd78o7q6uK7IUU0048KjfyYa"
);

function ConfirmPayment() {
    const router = useRouter();
    const { price_id } = router.query;
    const { data } = useQuery(
        ["fetch-subscription", price_id],
        () => api.get("/api/payment/subscription/" + price_id),
        {
            enabled: !!price_id,
            select: (res) => res.data,
            onError: (err) => {
                router.push("/dashboard/billing/subscription-plan");
            },
            retry: false,
            refetchOnWindowFocus: false,
        }
    );

    const localData: any = () => secureLocalStorage.getItem("payment-method");

    const {
        data: paymentMethod,
        isSuccess,
        isLoading,
    } = useQuery(
        ["payment-method", localData],
        () => api.get(`/api/payment/method/${localData().id}`),
        {
            select: (res) => res.data,
            retry: false,
            refetchOnWindowFocus: false,
            enabled: localData() && localData().id ? true : false,
        }
    );
    const [clientSecret, setClientSecret] = useState("");
    const [userData] = useAtom(signupState);
    useEffect(() => {
        (async () => {
            const localMethod: any =
                secureLocalStorage.getItem("payment-method");
            if (!localMethod || !localMethod.id) {
                const response = await api.post("/api/payment/secret", {
                    email: userData.email,
                    customer: localMethod && localMethod.customer,
                });
                const { client_secret, customer } = response.data;
                setClientSecret(client_secret);
                if (!localMethod) {
                    secureLocalStorage.setItem("payment-method", { customer });
                }
            }
        })();
    }, []);

    const loadingButton = false;

    const handleConfirmPayment = async () => {
        const localData: any = secureLocalStorage.getItem("payment-method");
        try {
            const stripe = await loadStripe(
                "pk_test_51LpbnJLpSmU6gOZ7D4ARj7x0qx27TiEswjs0pgt1UtH5P3lhkfBtcJcDUufn0ONqbsu7UwIF8FSd78o7q6uK7IUU0048KjfyYa"
            );

            const res = await api.post("/api/payment/create-subscription", {
                cus_id: localData.customer,
                price_id,
                payment_method: localData.id,
            });

            const clientSecret =
                res.data.latest_invoice.payment_intent.client_secret;
            console.log(clientSecret);
            if (stripe) {
                const { error, paymentIntent } =
                    await stripe?.confirmCardPayment(clientSecret, {
                        payment_method: localData.id,
                    });

                console.log(paymentIntent);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <DashboardLayout>
            <div className="">
                <div className="">
                    <div className="text-[24px] sm:text-left sm:px-0 leading-[32.68px] text-[#101010] text-center px-[45px] font-bold">
                        Billing Information & Payment
                    </div>
                    <div className="pt-[35px]"></div>
                    <div className="flex flex-col lg:flex-row gap-[35px]">
                        <div className="basis-1/2">
                            <ShadowCard>
                                <div className="text-[24px] leading-[32.68px] text-[#101010] font-bold">
                                    Billing Information
                                </div>
                                <div className="pt-[30px]"></div>
                                <div>
                                    <Formik
                                        initialValues={{}}
                                        enableReinitialize
                                        onSubmit={(value) => console.log(value)}
                                    >
                                        {() => (
                                            <Form>
                                                <InputField
                                                    name="email"
                                                    placeholder="example@mail.com"
                                                    type="email"
                                                    label="Email"
                                                    required
                                                />
                                                <div className="pt-[30px]"></div>
                                                <InputField
                                                    name="country"
                                                    placeholder="Bangladesh"
                                                    type="text"
                                                    label="Address"
                                                    required
                                                />
                                                <div className="pt-[30px]"></div>
                                                <InputField
                                                    name="address_line"
                                                    placeholder="Address Line"
                                                    type="text"
                                                    required
                                                />
                                                <div className="pt-[30px]"></div>
                                                <InputField
                                                    name="city"
                                                    placeholder="City"
                                                    type="text"
                                                    required
                                                />
                                                <div className="pt-[30px]"></div>
                                                <InputField
                                                    name="state"
                                                    placeholder="State"
                                                    type="text"
                                                    required
                                                />
                                                <div className="pt-[30px]"></div>
                                                <InputField
                                                    name="zip"
                                                    placeholder="Zip"
                                                    type="text"
                                                    required
                                                />
                                                <div className="pt-[30px]"></div>
                                                <ButtonField
                                                    text={`${
                                                        loadingButton
                                                            ? `Saving....`
                                                            : "Save Now"
                                                    }`}
                                                />
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </ShadowCard>
                        </div>
                        <div className="basis-1/2 flex flex-col gap-[30px]">
                            <ShadowCard>
                                <div className="text-[24px] leading-[32.68px] text-[#101010] font-bold">
                                    Plan Information
                                </div>
                                <div className="table border-spacing-r-5 pt-[10px] text-sm">
                                    <div className="table-row">
                                        <div className="table-cell text-[#676767]">
                                            Plan Name:
                                        </div>

                                        <div className="table-cell pl-5 pb-[5px] font-medium">
                                            Super Expensive
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell text-[#676767]">
                                            Price:
                                        </div>
                                        <div className="table-cell pl-5 pb-[5px] font-bold">
                                            100$ / per year
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell text-[#676767]">
                                            Asset Limit:
                                        </div>
                                        <div className="table-cell pl-5 pb-[5px] font-medium">
                                            1000
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell text-[#676767]">
                                            Storage Limit:
                                        </div>
                                        <div className="table-cell pl-5 pb-[5px] font-medium">
                                            2gb
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell text-[#676767]">
                                            User Limit:
                                        </div>
                                        <div className="table-cell pl-5 pb-[5px] font-medium">
                                            100
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell text-[#676767]">
                                            Wishlist:
                                        </div>
                                        <div className="table-cell pl-5 pb-[5px] font-medium">
                                            include
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell text-[#676767]">
                                            Analytics:
                                        </div>
                                        <div className="table-cell pl-5 pb-[5px] font-medium">
                                            include
                                        </div>
                                    </div>
                                </div>
                            </ShadowCard>
                            <ShadowCard>
                                <div className="text-[24px] leading-[32.68px] text-[#101010] font-bold">
                                    Payment
                                </div>
                                {/* <div className="pt-[30px]"></div> */}
                                <div>
                                    <div className="hidden">
                                        <Formik
                                            initialValues={{}}
                                            enableReinitialize
                                            onSubmit={(value) =>
                                                console.log(value)
                                            }
                                        >
                                            {() => (
                                                <Form>
                                                    <InputField
                                                        name="user_name"
                                                        placeholder="Your Name"
                                                        type="text"
                                                        label="Card on Name"
                                                        required
                                                    />
                                                    <div className="pt-[30px]"></div>
                                                    <InputField
                                                        name="card_number"
                                                        placeholder="1234 1234 1234 1234"
                                                        type="text"
                                                        label="Card Number"
                                                        required
                                                    />
                                                    <div className="pt-[30px]"></div>
                                                    <div className="flex w-full gap-5">
                                                        <InputField
                                                            name="expire_date"
                                                            label="Expiry Date"
                                                            placeholder="6/24"
                                                            type="text"
                                                            className="basis-1/2"
                                                            required
                                                        />
                                                        <InputField
                                                            name="cvc_number"
                                                            label="CVC Number"
                                                            placeholder="123"
                                                            className="basis-1/2"
                                                            type="text"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="pt-[30px]"></div>
                                                    <ButtonField
                                                        text={`${
                                                            loadingButton
                                                                ? "Updating..."
                                                                : "Update Payment Method"
                                                        }`}
                                                    />
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>

                                    {paymentMethod && (
                                        <div>
                                            <NewCardDetails
                                                data={paymentMethod}
                                            />
                                            <div className="pt-[30px]"></div>
                                            <button
                                                type="submit"
                                                onClick={handleConfirmPayment}
                                                className={`h-[58px] hover:bg-primary_dark bg-primary font-bold w-full rounded-[4px] text-[16px] leading-[58px] text-[#FFFFFF]`}
                                            >
                                                Confirm Payment
                                            </button>
                                            <div className="flex justify-center">
                                                <div className="mt-[15px] text-primary font-medium text-center text-sm cursor-pointer ">
                                                    Update Payment Method
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {clientSecret && (
                                        <Elements
                                            stripe={stripePromise}
                                            options={{ clientSecret }}
                                        >
                                            <SubmitPayment />
                                        </Elements>
                                    )}

                                    {/* <CheckoutForm shippingData={data?.data} /> */}

                                    <div className="pt-[20px]"></div>
                                    <div className="text-xs text-[#676767] font-semibold leading-[16.34px]">
                                        By confirming your subscription, you
                                        allow ODA Center to charge your card for
                                        this payment and future payments in
                                        accordance with their terms. You can
                                        always cancel your subscription.
                                        <span className="text-primary">
                                            Secure Payment Guarantee
                                        </span>
                                    </div>
                                </div>
                            </ShadowCard>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <PaymentInfoDialog
                    modalOpen={false}
                    handleModal={() => console.log("")}
                />
            </div>
        </DashboardLayout>
    );
}

export default ConfirmPayment;

function ButtonField({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    return (
        <button
            type="submit"
            className={`h-[58px] hover:bg-primary_dark bg-primary font-bold w-full rounded-[4px] text-[16px] leading-[58px] text-[#FFFFFF] ${className}`}
        >
            {text}
        </button>
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
                "w-full rounded-[4px]  shadow-[2px_2px_16px_rgba(0,0,0,0.08)] p-[30px_24px] relative bg-[#fff]" +
                " " +
                className
            }
        >
            {children}
        </div>
    );
}

function SubmitPayment() {
    const stripe = useStripe();
    const elements = useElements();
    const [userData] = useAtom(signupState);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loadingButton, setLoadingButton] = useState(false);
    const router = useRouter();
    const price_id = router.query.price_id;

    const handleSubmit = async (e: any) => {
        setLoadingButton(true);
        e.preventDefault();
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

            const localData: any = secureLocalStorage.getItem("payment-method");
            secureLocalStorage.setItem("payment-method", {
                customer: localData && localData.customer,
                id: setupIntent.payment_method,
            });

            const res = await api.post("/api/payment/create-subscription", {
                cus_id: localData.customer,
                price_id,
                payment_method: setupIntent.payment_method,
            });

            const clientSecret =
                res.data.latest_invoice.payment_intent.client_secret;

            const { error: endError, paymentIntent } =
                await stripe?.confirmCardPayment(clientSecret, {
                    payment_method: localData.id,
                });
            if (error) throw new Error(error.message);

            console.log(paymentIntent);
        } catch (err: any) {
            setErrorMessage(err.message);
            setLoadingButton(false);
        }
    };

    return (
        <form className="pt-5">
            <PaymentElement />
            {errorMessage && (
                <div className="text-sm text-red-600 pt-[5px]">
                    {errorMessage}
                </div>
            )}
            <div className="pt-5"></div>
            <button
                onClick={handleSubmit}
                type="submit"
                className={`h-[55px] hover:bg-primary_dark bg-primary font-bold w-full rounded-[4px] text-[16px] leading-[55px] text-[#FFFFFF]`}
            >
                Confirm Payment
            </button>
        </form>
    );
}

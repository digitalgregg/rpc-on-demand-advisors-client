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
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
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

    const { data: paymentMethod, isSuccess } = useQuery(
        ["payment-method", localData],
        () => api.get(`/api/payment/method/${localData().id}`),
        {
            select: (res) => res.data,
            retry: false,
            refetchOnWindowFocus: false,
            enabled: localData().id ? true : false,
        }
    );

    const [clientSecret, setClientSecret] = useState("");
    const [userData] = useAtom(signupState);
    useEffect(() => {
        (async () => {
            const paymentMethod: any =
                secureLocalStorage.getItem("payment-method");

            const response = await api.post("/api/payment/secret", {
                email: userData.email,
                customer: paymentMethod && paymentMethod.customer,
            });
            const { client_secret, customer } = response.data;
            setClientSecret(client_secret);
            if (!paymentMethod) {
                secureLocalStorage.setItem("payment-method", { customer });
            }
        })();
    }, []);

    const loadingButton = false;

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
                                <div className="table border-spacing-r-5">
                                    <div className="table-row">
                                        <div className="table-cell">
                                            Plan Name:
                                        </div>

                                        <div className="table-cell pl-5">
                                            Super Expensive
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">Price:</div>
                                        <div className="table-cell pl-5">
                                            100$ / per year
                                        </div>
                                    </div>
                                    <div className="table-row">
                                        <div className="table-cell">
                                            Asset Limit:
                                        </div>
                                        <div className="table-cell pl-5">
                                            1000
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

                                    {false && (
                                        <div>
                                            <NewCardDetails
                                                data={paymentMethod}
                                            />
                                            <div className="pt-[30px]"></div>
                                            <button
                                                type="submit"
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
                                            <PaymentElement className=" [&_input]:!h-[55px]" />
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

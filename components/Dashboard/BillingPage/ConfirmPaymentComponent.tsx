/* eslint-disable @next/next/no-img-element */
import {
    Elements,
    PaymentElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Form, Formik } from "formik";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useQuery } from "react-query";
import secureLocalStorage from "react-secure-storage";
import api from "../../../api";
import { PaymentMethod, signupState } from "../../../state";
import { GetGlobalContext } from "../../Context/GlobalContextProvider";
import { GetPaymentDetails } from "../../Context/PaymentDetailsProvider";
import Meta from "../../Meta";
import InputField from "../../Shared/InputField";
import LoadingAnimation from "../../Shared/LoadingAnimation";
import { LoadingSkeleton, NewCardDetails } from "../PaymentMethodComponent";
import AddUpdateMethodModal from "./AddUpdateMethodModal";
import BillingInformation from "./BillingInformation";
import PaymentInfoDialog from "./PaymentInfoDialog";

const STRIPE_PUBLISHER_KEY: string =
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ||
    "pk_test_51LpbnJLpSmU6gOZ7D4ARj7x0qx27TiEswjs0pgt1UtH5P3lhkfBtcJcDUufn0ONqbsu7UwIF8FSd78o7q6uK7IUU0048KjfyYa";

const stripePromise = loadStripe(STRIPE_PUBLISHER_KEY);

function ConfirmPaymentCom() {
    const router = useRouter();
    const { price_id } = router.query;
    const [paymentMethodData] = useAtom(PaymentMethod);
    const [userData] = useAtom(signupState);
    const [updateMethod, setUpdateMethod] = useState(false);
    const { refetchPlanData } = GetGlobalContext();
    const handleUpdateModal = () => {
        setUpdateMethod(!updateMethod);
    };

    const { data: priceData } = useQuery(
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

    const { data: billingData, refetch: billingRefetch } = useQuery(
        ["fetch-billing-address"],
        () =>
            api.get(
                `/api/payment/customer/address/${paymentMethodData.customer}`
            ),
        { select: (res) => res.data, enabled: !!paymentMethodData.customer }
    );

    const productData = priceData && priceData.product;
    const { data: paymentMethod } = GetPaymentDetails();
    const { data: secretData } = useQuery(
        ["fetch-client-secret"],
        () =>
            api.post("/api/payment/secret", {
                customer: paymentMethodData.customer,
            }),
        {
            select: (res) => res.data,
            retry: false,
            refetchInterval: false,
            refetchOnWindowFocus: false,
            enabled:
                paymentMethodData &&
                paymentMethodData.customer &&
                !paymentMethodData.id
                    ? true
                    : false,
        }
    );

    const [loadingButton, setLoadingButton] = useState(false);
    const billingObj = {
        user_id: userData._id,
        plan_name: productData && productData.name,
        plan_price:
            priceData &&
            `${priceData.unit_amount != 0 ? priceData.unit_amount / 100 : 0}`,
        address: billingData || {},
    };

    const handleConfirmPayment = async () => {
        setLoadingButton(true);
        try {
            const stripe = await loadStripe(STRIPE_PUBLISHER_KEY);

            if (!stripe) {
                throw new Error("Stripe or elements not found");
            }

            const res = await api.post("/api/payment/create-subscription", {
                cus_id: paymentMethod.customer,
                price_id,
                payment_method: paymentMethodData.id,
            });

            if (res.data.status === "incomplete") {
                const clientSecret =
                    res.data.latest_invoice.payment_intent.client_secret;

                const { error, paymentIntent } =
                    await stripe.confirmCardPayment(clientSecret, {
                        payment_method: paymentMethodData.id,
                    });

                if (error) throw new Error(error.message);
            }
            const updatePlanObj = {
                plan_name: productData.name,
                ...productData.metadata,
                plan_price: `${
                    priceData.unit_amount != 0 ? priceData.unit_amount / 100 : 0
                }`,
                plan_interval: priceData.recurring.interval,
                plan_start: new Date(),
                plan_end: getPlanEnd(priceData && priceData.recurring.interval),
            };
            await api.put(
                `/api/payment/plan/update/${userData._id}`,
                updatePlanObj
            );

            await api.post("/api/billing", billingObj);
            refetchPlanData();
            router.push("/dashboard/billing/payment-success");
        } catch (error) {
            setLoadingButton(false);
            console.log(error);
        }
    };

    return (
        <div>
            <Meta title="Confirm Payment" />
            <div className="">
                <div className="">
                    <div className="text-[24px] sm:text-left sm:px-0 leading-[32.68px] text-[#101010] text-center px-[45px] font-bold">
                        Billing Information & Payment
                    </div>
                    <div className="pt-[35px]"></div>
                    <div className="flex flex-col lg:flex-row gap-[35px]">
                        <div className="basis-1/2">
                            <BillingInformation
                                data={billingData}
                                refetch={billingRefetch}
                            />
                        </div>
                        <div className="basis-1/2 flex flex-col gap-[30px]">
                            <ShadowCard>
                                <div className="text-[24px] leading-[32.68px] text-[#101010] font-bold">
                                    Plan Information
                                </div>

                                <div>
                                    <div>
                                        <span className="text-[30px] font-bold">
                                            $
                                        </span>
                                        <span className="text-[40px] font-bold">
                                            {priceData &&
                                                priceData.unit_amount / 100}
                                        </span>
                                        <span className="text-[14px] font-semibold ml-1">
                                            /Per{" "}
                                            {priceData &&
                                                priceData.recurring.interval}
                                        </span>
                                    </div>
                                </div>
                                <div className="  pt-[10px] text-sm">
                                    <div className="flex items-center ">
                                        <div className="flex w-[150px] items-center gap-2 text-[#676767]">
                                            <img
                                                src="/assets/pricing-page/check.svg"
                                                className="w-[14px]  h-[14px]"
                                                alt=""
                                            />
                                            <div>Plan Name:</div>
                                        </div>

                                        <div className=" font-medium">
                                            {productData ? (
                                                productData.name
                                            ) : (
                                                <Skeleton width={150} />
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center mt-[8px] ">
                                        <div className="flex w-[150px] items-center gap-2 text-[#676767]">
                                            <img
                                                src="/assets/pricing-page/check.svg"
                                                className="w-[14px]  h-[14px]"
                                                alt=""
                                            />
                                            <div> Asset Limit:</div>
                                        </div>

                                        <div className=" font-medium">
                                            {productData ? (
                                                productData.metadata
                                                    .asset_limit || "Not found"
                                            ) : (
                                                <Skeleton width={150} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-[8px] ">
                                        <div className="flex w-[150px] items-center gap-2 text-[#676767]">
                                            <img
                                                src="/assets/pricing-page/check.svg"
                                                className="w-[14px]  h-[14px]"
                                                alt=""
                                            />
                                            <div> Storage Limit:</div>
                                        </div>

                                        <div className=" font-medium">
                                            {productData ? (
                                                productData.metadata
                                                    .storage_limit ||
                                                "Not found"
                                            ) : (
                                                <Skeleton width={150} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-[8px] ">
                                        <div className="flex w-[150px] items-center gap-2 text-[#676767]">
                                            <img
                                                src="/assets/pricing-page/check.svg"
                                                className="w-[14px]  h-[14px]"
                                                alt=""
                                            />
                                            <div>User Limit:</div>
                                        </div>

                                        <div className=" font-medium">
                                            {productData ? (
                                                productData.metadata
                                                    .user_limit || "Not found"
                                            ) : (
                                                <Skeleton width={150} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-[8px] ">
                                        <div className="flex w-[150px] items-center gap-2 text-[#676767]">
                                            <img
                                                src="/assets/pricing-page/check.svg"
                                                className="w-[14px]  h-[14px]"
                                                alt=""
                                            />
                                            <div>Wishlist:</div>
                                        </div>

                                        <div className=" font-medium">
                                            {productData ? (
                                                productData.metadata.wishlist ||
                                                "Not found"
                                            ) : (
                                                <Skeleton width={150} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-[8px] ">
                                        <div className="flex w-[150px] items-center gap-2 text-[#676767]">
                                            <img
                                                src="/assets/pricing-page/check.svg"
                                                className="w-[14px]  h-[14px]"
                                                alt=""
                                            />
                                            <div>Analytics:</div>
                                        </div>

                                        <div className=" font-medium">
                                            {productData ? (
                                                productData.metadata
                                                    .analytics || "Not found"
                                            ) : (
                                                <Skeleton width={150} />
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-[8px] ">
                                        <div className="flex w-[150px] items-center gap-2 text-[#676767]">
                                            <img
                                                src="/assets/pricing-page/check.svg"
                                                className="w-[14px]  h-[14px]"
                                                alt=""
                                            />
                                            <div>Weekly Email:</div>
                                        </div>

                                        <div className=" font-medium">
                                            {productData ? (
                                                productData.metadata
                                                    .weekly_email || "Not found"
                                            ) : (
                                                <Skeleton width={150} />
                                            )}
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
                                    {paymentMethodData.id ? (
                                        paymentMethod ? (
                                            <div>
                                                <NewCardDetails
                                                    data={paymentMethod}
                                                />
                                                <div className="pt-[30px]"></div>
                                                <button
                                                    type="submit"
                                                    onClick={
                                                        handleConfirmPayment
                                                    }
                                                    className={`h-[58px] hover:bg-primary_dark bg-primary font-bold w-full rounded-[4px] text-[16px] leading-[58px] text-[#FFFFFF]`}
                                                >
                                                    {loadingButton ? (
                                                        <div className="flex justify-center items-center gap-2">
                                                            <LoadingAnimation color="#fff" />
                                                            <div>
                                                                Loading...
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        "Confirm Payment"
                                                    )}
                                                </button>
                                                <div className="flex justify-center">
                                                    <div
                                                        onClick={
                                                            handleUpdateModal
                                                        }
                                                        className="mt-[15px] text-primary font-medium text-center text-sm cursor-pointer "
                                                    >
                                                        Update Payment Method
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <LoadingSkeleton />
                                        )
                                    ) : secretData ? (
                                        <Elements
                                            stripe={stripePromise}
                                            options={{
                                                clientSecret:
                                                    secretData.client_secret,
                                            }}
                                        >
                                            <SubmitPayment
                                                planData={
                                                    productData &&
                                                    productData.metadata
                                                }
                                                planName={
                                                    productData
                                                        ? productData.name
                                                        : "Not found"
                                                }
                                                planPrice={
                                                    priceData
                                                        ? priceData.unit_amount
                                                        : 0
                                                }
                                                planInterval={`${
                                                    priceData &&
                                                    priceData.recurring.interval
                                                }`}
                                                billingObj={billingObj}
                                            />
                                        </Elements>
                                    ) : (
                                        <CardSkeleton />
                                    )}

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
            <div className="pt-[50px]"></div>
            <div>
                <PaymentInfoDialog
                    modalOpen={false}
                    handleModal={() => console.log("")}
                />
            </div>
            <div>
                <AddUpdateMethodModal
                    handleModal={handleUpdateModal}
                    modalOpen={updateMethod}
                    type="update"
                />
            </div>
        </div>
    );
}

export default ConfirmPaymentCom;

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

function SubmitPayment({
    planData,
    planName,
    planPrice,
    planInterval,
    billingObj,
}: {
    planData: any;
    billingObj: any;
    planName: string;
    planPrice: number;
    planInterval: string;
}) {
    const stripe = useStripe();
    const elements = useElements();
    const [userData] = useAtom(signupState);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loadingButton, setLoadingButton] = useState(false);
    const router = useRouter();
    const price_id = router.query.price_id;
    const [paymentMethod, setPaymentMethod] = useAtom(PaymentMethod);

    const { refetchPlanData } = GetGlobalContext();

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

            const res = await api.post("/api/payment/create-subscription", {
                cus_id: paymentMethod.customer,
                price_id,
                payment_method: setupIntent.payment_method,
            });

            if (res.data.status === "incomplete") {
                const clientSecret =
                    res.data.latest_invoice.payment_intent.client_secret;

                const { error: endError, paymentIntent } =
                    await stripe.confirmCardPayment(clientSecret, {
                        payment_method: setupIntent.payment_method,
                    });

                if (endError) throw new Error(endError.message);
            }
            const updatePlanObj = {
                plan_name: planName,
                ...planData,
                plan_price: `${planPrice != 0 ? planPrice / 100 : 0}`,
                plan_interval: planInterval,
                plan_start: new Date(),
                plan_end: getPlanEnd(planInterval),
            };
            await api.put(
                `/api/payment/plan/update/${userData._id}`,
                updatePlanObj
            );
            await api.post("/api/billing", billingObj);
            setPaymentMethod({
                ...paymentMethod,
                id: setupIntent.payment_method,
            });
            refetchPlanData();
            router.push("/dashboard/billing/payment-success");
        } catch (err: any) {
            console.log(err);
            setErrorMessage(err.message);
            setLoadingButton(false);
        }
    };

    return (
        <form className="pt-4">
            <PaymentElement
                options={{ defaultValues: { billingDetails: { address: {} } } }}
            />
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
                {loadingButton ? (
                    <div className="flex justify-center items-center gap-2">
                        <LoadingAnimation color="#fff" />
                        <div>Loading...</div>
                    </div>
                ) : (
                    "Confirm Payment"
                )}
            </button>
        </form>
    );
}

function CardSkeleton() {
    return (
        <div className="py-[10px]">
            <div>
                <Skeleton width={150} />

                <Skeleton width={"100%"} height={45} />
            </div>
            <div className="pt-5"></div>
            <div className="flex gap-[15px]">
                <div className="basis-1/2">
                    <Skeleton width={100} />
                    <Skeleton width={"100%"} height={45} />
                </div>
                <div className="basis-1/2">
                    <Skeleton width={100} />
                    <Skeleton width={"100%"} height={45} />
                </div>
            </div>
            <div className="pt-5"></div>

            <div>
                <Skeleton width={120} />

                <Skeleton width={"100%"} height={45} />
            </div>
        </div>
    );
}

function getPlanEnd(plan_interval: string) {
    switch (plan_interval) {
        case "month":
            return monthDaysofDate();
        case "year":
            return yearDaysofDate();
        case "forever":
            return new Date(2050, 11, 17);
        default:
            return new Date();
    }
}

function monthDaysofDate() {
    const oldDate = new Date();
    oldDate.setDate(oldDate.getDate() + 30);
    return oldDate;
}

function yearDaysofDate() {
    const oldDate = new Date();
    oldDate.setDate(oldDate.getDate() + 365);
    return oldDate;
}

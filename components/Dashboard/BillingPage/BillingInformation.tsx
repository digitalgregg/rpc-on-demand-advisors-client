import { ReactNode, useState } from "react";
import { Form, Formik } from "formik";
import React from "react";
import InputField from "../../Shared/InputField";
import { useQuery } from "react-query";
import { useAtom } from "jotai";
import { PaymentMethod, signupState } from "../../../state";
import api from "../../../api";
import { toast } from "react-toastify";
import LoadingAnimation from "../../Shared/LoadingAnimation";

function BillingInformation({ data, refetch }: any) {
    const [userData] = useAtom(signupState);
    const [loadingButton, setLoadingButton] = useState(false);
    const [paymentMethod] = useAtom(PaymentMethod);

    const billingInitial = {
        email: userData.email,
        country: data ? data.country : "",
        line1: data ? data.line1 : "",
        city: data ? data.city : "",
        state: data ? data.state : "",
        postal_code: data ? data.postal_code : "",
    };

    const handleSubmit = async (value: any) => {
        setLoadingButton(true);
        try {
            const res = await api.put(
                `/api/payment/customer/address/${paymentMethod.customer}`,
                value
            );
            console.log(res);
            setLoadingButton(false);
            toast.success("Billing information updated!");
            refetch();
        } catch (err) {
            console.log(err);
            setLoadingButton(false);
            toast.error("Something went wrong!");
        }
        console.log(value);
    };
    return (
        <ShadowCard>
            <div className="text-[24px] leading-[32.68px] text-[#101010] font-bold">
                Billing Information
            </div>
            <div className="pt-[30px]"></div>
            <div>
                <Formik
                    initialValues={billingInitial}
                    enableReinitialize
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form>
                            <InputField
                                name="email"
                                placeholder="example@mail.com"
                                type="email"
                                label="Email"
                                required
                                readOnly
                            />
                            <div className="pt-[30px]"></div>
                            <InputField
                                name="country"
                                placeholder="Country"
                                type="text"
                                label="Address"
                                required
                            />
                            <div className="pt-[30px]"></div>
                            <InputField
                                name="line1"
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
                                name="postal_code"
                                placeholder="Zip"
                                type="text"
                                required
                            />
                            <div className="pt-[30px]"></div>
                            <button
                                type="submit"
                                className={`h-[58px] hover:bg-primary_dark bg-primary font-bold w-full rounded-[4px] text-[16px] leading-[58px] text-[#FFFFFF] `}
                            >
                                {loadingButton ? (
                                    <div className="flex items-center justify-center gap-[10px]">
                                        <LoadingAnimation color="#fff" />
                                        <div>Saving...</div>
                                    </div>
                                ) : (
                                    "Save Now"
                                )}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </ShadowCard>
    );
}

export default BillingInformation;

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

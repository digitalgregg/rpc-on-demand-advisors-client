import { ReactNode, useState, useEffect } from "react";
import { useField, Formik, Form, FieldHookConfig, ErrorMessage } from "formik";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import * as Yup from "yup";
import StripeCheckout from "react-stripe-checkout";
import InputField from "../../../components/Shared/InputField";
import PaymentInfoDialog from "../../../components/Dashboard/BillingPage/PaymentInfoDialog";
import { getLocal } from "./../../../utils/localStorage";
import api from "../../../api";
import LodingAnimation from "../../../components/Shared/LodingAnimation";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import CheckoutForm from "../CheckoutForm";
import Meta from "../../../components/Meta";

const billingInfoSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    // country: Yup.string().required("Country is required"),
    address_line: Yup.string().required("Address Line is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("Zip Code is required"),
});

const paymentMethodSchema = Yup.object({
    user_name: Yup.string().required("Name is required"),
    card_number: Yup.string().required("Card Number is required"),
    expire_date: Yup.string().required("Expire Date is required"),
    cvc_number: Yup.string().required("CVC Number is required"),
});

function Payment() {
    const { _id, email } = getLocal("user-info");
    const { data, refetch } = useQuery(
        ["get-shipping-address", _id],
        () =>
            api.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/shipping-address/${_id}`
            ),
        { enabled: !!_id }
    );

    const { data: card, refetch: cardRefetch } = useQuery(
        ["get-card-info", _id],
        () =>
            api.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/card-details/${_id}`
            ),
        { enabled: !!_id }
    );

    const shippingAddress = data?.data[0];
    const cardDetails = card?.data[0];
    const [loddingButton, setLoadingButton] = useState(false);
    const [updateLoading, setUpdateLoading] = useState(false);
    const [myPlan, setMyPlan] = useState({});

    const initialBillingInfo = {
        email: `${
            shippingAddress?.email !== undefined
                ? shippingAddress?.email
                : email
        }`,
        country: `${
            cardDetails?.country !== undefined ? cardDetails?.country : ""
        }`,
        address_line: `${
            shippingAddress?.address_line !== undefined
                ? shippingAddress?.address_line
                : ""
        }`,
        city: `${
            shippingAddress?.city !== undefined ? shippingAddress?.city : ""
        }`,
        state: `${
            shippingAddress?.state !== undefined ? shippingAddress?.state : ""
        }`,
        zip: `${
            shippingAddress?.zip !== undefined ? shippingAddress?.zip : ""
        }`,
    };
    const initialPaymentMethod = {
        user_name: `${
            cardDetails?.card_name !== undefined ? cardDetails?.card_name : ""
        }`,
        card_number: `${
            cardDetails?.card_number !== undefined
                ? cardDetails?.card_number
                : ""
        }`,
        expire_date: `${
            cardDetails?.expiry_date !== undefined
                ? cardDetails?.expiry_date
                : ""
        }`,
        cvc_number: `${
            cardDetails?.cvc_number !== undefined ? cardDetails?.cvc_number : ""
        }`,
    };
    const handleUpdateButton = (value: any) => {
        setLoadingButton(true);
        const postData = {
            user_id: _id,
            email: value.email,
            address_line: value.address_line,
            city: value.city,
            state: value.state,
            zip: value.zip,
        };
        api.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/shipping-address`,
            postData
        )
            .then((res: any) => {
                refetch();
                setLoadingButton(false);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleUpdateCard = (value: any) => {
        setUpdateLoading(true);
        const postData = {
            user_id: _id,
            card_number: value.card_number,
            expiry_date: value.expire_date,
            cvc_number: value.cvc_number,
            country: value.country,
            card_name: value.user_name,
        };
        api.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/card-details`,
            postData
        )
            .then((res: any) => {
                setUpdateLoading(false);
                toast.success("Your payment method added successfully");
            })
            .catch((err: any) => {
                console.log(err);
                setUpdateLoading(false);
            });
    };

    return (
        <DashboardLayout>
            <Meta title="Confirm Payment" />
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
                                        initialValues={initialBillingInfo}
                                        validationSchema={billingInfoSchema}
                                        enableReinitialize
                                        onSubmit={(value) =>
                                            handleUpdateButton(value)
                                        }
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
                                                    value={cardDetails?.country}
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
                                                        loddingButton === true
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
                        <div className="basis-1/2">
                            <ShadowCard>
                                <div className="text-[24px] leading-[32.68px] text-[#101010] font-bold">
                                    Payment
                                </div>
                                <div className="pt-[30px]"></div>
                                <div>
                                    <Formik
                                        initialValues={initialPaymentMethod}
                                        validationSchema={paymentMethodSchema}
                                        enableReinitialize
                                        onSubmit={(value) =>
                                            handleUpdateCard(value)
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
                                                        updateLoading === true
                                                            ? "Updating..."
                                                            : "Update Payment Method"
                                                    }`}
                                                />
                                            </Form>
                                        )}
                                    </Formik>

                                    <CheckoutForm shippingData={data?.data} />

                                    <div className="pt-[30px]"></div>
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

function ButtonField({ text }: { text: string }) {
    return (
        <button
            type="submit"
            className="h-[58px] hover:bg-primary_dark bg-primary font-bold w-full rounded-[4px] text-[16px] leading-[58px] text-[#FFFFFF]"
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

export default Payment;

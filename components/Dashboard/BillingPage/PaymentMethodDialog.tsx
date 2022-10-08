/* eslint-disable @next/next/no-img-element */
import { Form, Formik } from "formik";
import React, { useState } from "react";
import CustomModal from "../../Shared/CustomUtils/CustomModal";
import * as Yup from "yup";
import InputField from "../../Shared/InputField";
import CountrySelect from "./CountrySelect";
import OverflowModal from "../../Shared/CustomUtils/OverflowModal";
import { getLocal } from "../../../utils/localStorage";
import api from "../../../api";
import LodingAnimation from "../../Shared/LodingAnimation";
import { toast } from "react-toastify";
import { useQuery } from "react-query";

const paymentMethodSchema = Yup.object({
    card_number: Yup.string().required("Card Number is required"),
    expire: Yup.string().required("Expire is required"),
    cvv: Yup.string().required("CVV is required"),
    country: Yup.string().required("Country is required"),
});

function PaymentMethodDialog({
    modalOpen,
    handleModal,
}: {
    modalOpen: boolean;
    handleModal: () => void;
}) {
    const [ccNumber, setCcNumber] = useState("");
    const [expireNumber, setExpireNumber] = useState("");

    const [loadingButton, setLoadingButton] = useState(false);
    const { _id, email, name } = getLocal("user-info");

    const initialPaymentMethod = {
        card_number: "",
        expire: "",
        cvv: "",
        country: "",
    };
    const formatAndSetCcNumber = (e: any) => {
        const inputVal = e.replace(/ /g, "");
        let inputNumbersOnly = inputVal.replace(/\D/g, "");

        if (inputNumbersOnly.length > 16) {
            inputNumbersOnly = inputNumbersOnly.substr(0, 16);
        }

        const splits = inputNumbersOnly.match(/.{1,4}/g);

        let spacedNumber = "";
        if (splits) {
            spacedNumber = splits.join(" ");
        }

        setCcNumber(spacedNumber);
    };
    const formateExpireNumber = (e: any) => {
        const inputVal = e.replace(/ /g, "");
        let inputNumbersOnly = inputVal.replace(/\D/g, "");

        if (inputNumbersOnly.length > 6) {
            inputNumbersOnly = inputNumbersOnly.substr(0, 6);
        }

        const splits = inputNumbersOnly.match(/^([0-9]{2})$/);

        let spacedNumber = "";
        if (splits) {
            spacedNumber = splits.join("/");
        }

        setExpireNumber(spacedNumber);
    };

    const handleAddPayment = (value: any) => {
        setLoadingButton(true);
        const formateCardNumber = value.card_number;
        const formate = formateCardNumber.split(" ");
        const sumValue = formate.reduce(
            (previous: any, current: any) => previous + current
        );
        const postData = {
            user_id: _id,
            card_number: sumValue,
            expiry_date: value.expire,
            cvc_number: value.cvv,
            country: value.country,
            card_name: name,
        };
        api.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/card-details`,
            postData
        )
            .then((res: any) => {
                console.log(res, "res");
                toast.success("Your payment method added successfully");
                setLoadingButton(false);
                handleModal();
            })
            .catch((err: any) => {
                console.log(err);
                setLoadingButton(false);
            });
    };
    return (
        <OverflowModal
            className="w-[calc(100vw-40px)] max-w-[540px] bg-[#fff] rounded-[4px] modal-scroll"
            isOpen={modalOpen}
            onRequestClose={handleModal}
        >
            <div>
                <div className="p-5">
                    <div className="text-lg leading-[24.5px] font-semibold text-[#1d1d1d]">
                        Add Payment Method
                    </div>
                    <div className="pt-[17px]"></div>
                    <div>
                        <Formik
                            initialValues={initialPaymentMethod}
                            validationSchema={paymentMethodSchema}
                            onSubmit={(value) => handleAddPayment(value)}
                        >
                            {() => (
                                <Form>
                                    <InputField
                                        name="card_number"
                                        placeholder="1234 1234 1234 1234"
                                        type="text"
                                        label="Card number"
                                        className="[&>label]:!text-[14px] [&>div>input]:!h-[44px] "
                                        required
                                        height="44px"
                                        inputImg={CardImg}
                                        myChange={formatAndSetCcNumber}
                                        value={ccNumber}
                                    />
                                    <div className="pt-4"></div>
                                    <div className="flex items-center gap-5 sm:gap-[30px] [&>div]:basis-1/2">
                                        <InputField
                                            name="expire"
                                            placeholder="06/24"
                                            type="text"
                                            label="Expire"
                                            className="[&>label]:!text-[14px] [&>div>input]:!h-[44px]  "
                                            required
                                            height="44px"
                                            myChange={formateExpireNumber}
                                            value={expireNumber}
                                        />
                                        <InputField
                                            name="cvv"
                                            placeholder="•••"
                                            type="text"
                                            label="CVC"
                                            className="[&>label]:!text-[14px] [&>div>input]:!h-[44px] "
                                            required
                                            height="44px"
                                        />
                                    </div>
                                    <div className="pt-4"></div>
                                    <CountrySelect />
                                    <div className="pt-[25.59px]"></div>
                                    <div className="text-xs text-[#4F4F4F] leading-[#4F4F4F] font-normal">
                                        By providing your card information, you
                                        allow Content Camel to charge your card
                                        for future payments in accordance with
                                        their terms.
                                    </div>
                                    <div className="pt-5"></div>
                                    <button
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

                                    <button
                                        className="h-[44px] text-primary w-full font-medium rounded-[4px] border-primary hover:bg-primary hover:text-white transition-all duration-200 border text-base leading-[44px]"
                                        type="button"
                                        onClick={handleModal}
                                    >
                                        Go Back
                                    </button>
                                    <div className="pt-5"></div>
                                    <div className="text-xs text-[#4F4F4F] leading-[#4F4F4F] font-normal">
                                        You can review important information
                                        from ODA Center on their Terms of
                                        Service and Privacy Policy.
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </OverflowModal>
    );
}

const CardImg = () => (
    <img
        src="/assets/dashboard-billing/mastercard.svg"
        alt=""
        className="absolute top-[10px] right-[10px]"
    />
);

export default PaymentMethodDialog;

/* eslint-disable @next/next/no-img-element */
import { Form, Formik } from "formik";
import React from "react";
import CustomModal from "../../CustomUtils/CustomModal";
import * as Yup from "yup";
import InputField from "../../Shared/InputField";
import CountrySelect from "./CountrySelect";

const initialPaymentMethod = {
    card_number: "",
    expire: "",
    cvv: "",
    country: "",
};

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
    return (
        <CustomModal
            className="w-[calc(100vw-40px)] max-w-[540px] bg-[#fff] rounded-[4px] "
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
                            onSubmit={(value) => console.log(value)}
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
                                        />
                                        <InputField
                                            name="cvv"
                                            placeholder="•••"
                                            type="text"
                                            label="CVV"
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
                                        className="h-[44px] w-full text-[#fff] font-medium rounded-[4px]  text-base leading-[44px] bg-[#E51937]"
                                        type="submit"
                                    >
                                        Add
                                    </button>
                                    <div className="pt-3"></div>

                                    <button
                                        className="h-[44px] text-[#E51937] w-full font-medium rounded-[4px] border-[#E51937] border text-base leading-[44px]"
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
        </CustomModal>
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

import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import api from "../../../api";
import { PaymentData, PaymentMethod } from "../../../state";
import OverflowModal from "../../Shared/CustomUtils/OverflowModal";
import LodingAnimation from "../../Shared/LodingAnimation";
import AddPaymentForm, { PaymentStatus } from "./AddPaymentForm";

function AddPaymentMethodDialog({
    modalOpen,
    handleModal,
}: {
    modalOpen: boolean;
    handleModal: () => void;
}) {
    const [paymentMethod, setPaymentMethod] = useAtom(PaymentMethod);
    const [paymentData, setPaymentData] = useAtom(PaymentData);

    useEffect(() => {
        (async () => {
            if (!paymentMethod.clientSecret) {
                const response = await api.get("/api/payment/secret");
                const { client_secret, customer } = response.data;
                // Render the form using the clientSecret
                setPaymentMethod({
                    ...paymentMethod,
                    clientSecret: client_secret,
                    customer,
                });
            } else if (paymentMethod.id) {
                const response = await api.get(
                    "/api/payment/method/" + paymentMethod.id
                );
                const data = response.data;
                // Render the form using the clientSecret
                setPaymentData(data);
                setPaymentMethod({
                    ...paymentMethod,
                    data: data,
                });
            }
        })();
    }, []);

    return (
        <OverflowModal
            className="w-[calc(100vw-40px)] max-w-[540px] bg-[#fff] rounded-[4px] overflow-y-auto"
            isOpen={modalOpen}
            onRequestClose={handleModal}
        >
            <div>
                <div className="p-5">
                    <div className="text-lg leading-[24.5px] font-semibold text-[#1d1d1d]">
                        Add Payment Method
                    </div>
                    <div className="pt-[17px]"></div>
                    {paymentMethod.clientSecret && (
                        <div>
                            <AddPaymentForm
                                clientSecret={paymentMethod.clientSecret}
                                handleModal={handleModal}
                            />

                            <button
                                className="h-[44px] text-primary w-full font-medium rounded-[4px] border-primary hover:bg-primary hover:text-white transition-all duration-200 border text-base leading-[44px]"
                                type="button"
                                onClick={handleModal}
                            >
                                Go Back
                            </button>
                            <div className="pt-5"></div>
                            <div className="text-xs text-[#4F4F4F] leading-[#4F4F4F] font-normal">
                                You can review important information from ODA
                                Center on their Terms of Service and Privacy
                                Policy.
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </OverflowModal>
    );
}

export default AddPaymentMethodDialog;

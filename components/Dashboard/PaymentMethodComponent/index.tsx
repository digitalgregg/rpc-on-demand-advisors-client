/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useQuery } from "react-query";
import { ShadowCard } from "../../../pages/dashboard/billing/payment-details";
import { PMDTYPE } from "../../../utils/interfaces";
import { motion } from "framer-motion";

import AddUpdateMethodModal from "../BillingPage/AddUpdateMethodModal";
import Skeleton from "react-loading-skeleton";
import { GetPaymentDetails } from "../../Context/PaymentDetailsProvider";
import YesNoModal from "../../modal/YesNoModal";
import api from "../../../api";
import { useAtom } from "jotai";
import { PaymentMethod } from "../../../state";
import { toast } from "react-toastify";

function PaymentMethodComponent() {
    const { data, isLoading, isSuccess } = GetPaymentDetails();
    const [paymentMethod, setPaymentMethod] = useAtom(PaymentMethod);
    const [modalType, setModalType] = useState<"add" | "update">("add");

    const [modalOpen, setModalOpen] = useState(false);
    const handleModal = () => {
        setModalType("add");
        setModalOpen(!modalOpen);
    };
    const handleUpdateModal = () => {
        setModalType("update");
        setModalOpen(!modalOpen);
    };

    const [deleteMethod, setDeleteMethod] = useState(false);

    const handleDeleteModal = () => {
        setDeleteMethod(!deleteMethod);
    };

    const paymentMethodDelete = async (d: any, setLoading: any) => {
        try {
            setLoading(true);
            await api.post("/api/payment/detach", {
                pm_id: data.id,
            });
            setPaymentMethod({
                ...paymentMethod,
                id: "",
            });
            setLoading(false);
            handleDeleteModal();
            toast.success("Payment method deleted successfully");
        } catch (err) {
            setLoading(false);
        }
    };

    return (
        <>
            <ShadowCard className="h-[270px]">
                <div className="pt-[26px]"></div>
                <div className="flex justify-between">
                    <div className="font-bold text-[24px] leading-[32.68px] text-[#101010]">
                        Payment Method
                    </div>
                    {data && (
                        // <button
                        //     onClick={handleUpdateModal}
                        //     className="p-[7px_15px] text-base font-bold leading-[21.79px] text-primary border border-primary rounded-[4px]"
                        // >
                        //     Edit
                        // </button>
                        <div className="flex items-center">
                            <motion.img
                                className="cursor-pointer"
                                src="/edit.svg"
                                width={22}
                                onClick={handleUpdateModal}
                                alt="image"
                                style={{
                                    filter: `invert(19%) sepia(94%) saturate(3079%) hue-rotate(340deg) brightness(89%) contrast(101%)`,
                                }}
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1 }}
                            ></motion.img>
                            <div className="pl-[15px]"></div>
                            <motion.img
                                className="cursor-pointer"
                                width={28}
                                src="/bin.svg"
                                alt="image"
                                onClick={handleDeleteModal}
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ scale: 1.1 }}
                                style={{
                                    filter: `invert(19%) sepia(94%) saturate(3079%) hue-rotate(340deg) brightness(89%) contrast(101%)`,
                                }}
                            ></motion.img>
                        </div>
                    )}
                </div>
                {!data && <div className="pt-[5px]"></div>}
                <div className="text-xs font-semibold leading-[16.34px] text-[#676767]">
                    {data
                        ? "Change how you pay for your plan."
                        : "No payment method added yet."}
                </div>
                <div className="pt-2"></div>
                {isLoading && (
                    <div>
                        <LoadingSkeleton />
                    </div>
                )}
                {!isLoading && isSuccess && data ? (
                    <div>
                        <NewCardDetails data={data} />
                    </div>
                ) : (
                    <>
                        <div className="pt-[63px]"></div>
                        <div>
                            <div className="pt-[29px]"></div>
                            <button
                                className="text-base leading-[58px] font-bold bg-primary w-full h-[58px] rounded-[4px] transition-all duration-200 text-white hover:bg-primary_dark"
                                onClick={handleModal}
                            >
                                + Add Payment Method
                            </button>
                        </div>
                    </>
                )}
                <div>
                    <AddUpdateMethodModal
                        handleModal={handleModal}
                        modalOpen={modalOpen}
                        type={modalType}
                    />
                </div>
            </ShadowCard>
            <YesNoModal
                isOpen={deleteMethod}
                handleModal={handleDeleteModal}
                header="Delete Payment Method"
                description="Are you sure you want to delete payment method? This action cannot be undone."
                onYesClick={paymentMethodDelete}
            />
        </>
    );
}

export default PaymentMethodComponent;

export const NewCardDetails = ({ data }: { data: PMDTYPE }) => {
    return (
        <div className="">
            <div className="flex gap-[30px] sm:gap-[50px]  pt-3">
                <div>
                    <div className="text-sm font-medium text-[#676767]">
                        Card Number
                    </div>
                    <div className="font-semibold text-black">
                        xxxx - xxxx - xxxxx - {data.card.last4}
                    </div>
                    <div className="pt-[30px]"></div>
                    <div className="text-sm font-medium text-[#676767]">
                        Billing Email
                    </div>
                    <div className="font-semibold  text-black">
                        <div className="flex items-center gap-1">
                            <img
                                src="/assets/dashboard/mail.svg"
                                alt="Mail icon"
                            />
                            <span className="max-w-[200px] truncate sm:max-w-full">
                                {data.billing_details.email}
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-sm font-medium text-[#676767]">
                        Exp
                    </div>
                    <div className="font-semibold text-black">
                        {data.card.exp_month}/{data.card.exp_year}
                    </div>
                    <div className="pt-[30px]"></div>

                    <div className="text-sm font-medium text-[#676767]">
                        Brand
                    </div>
                    <div className="font-semibold uppercase text-black">
                        {data.card.brand}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const LoadingSkeleton = () => {
    return (
        <div className="pt-3 flex gap-[30px] sm:gap-[50px] overflow-hidden">
            <div>
                <div>
                    <Skeleton width={100} />
                    <div className="pt-1"></div>
                    <Skeleton width={200} />
                </div>
                <div className="pt-[30px]"></div>

                <div>
                    <Skeleton width={100} />
                    <div className="pt-1"></div>

                    <Skeleton width={200} />
                </div>
            </div>
            <div>
                <div>
                    <div className="w-[50px] sm:w-[100px]">
                        <Skeleton />
                    </div>
                    <div className="pt-1"></div>

                    <Skeleton width={150} />
                </div>
                <div className="pt-[30px]"></div>

                <div>
                    <div className="w-[50px] sm:w-[100px]">
                        <Skeleton />
                    </div>
                    <div className="pt-1"></div>

                    <Skeleton width={150} />
                </div>
            </div>
        </div>
    );
};

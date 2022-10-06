import React, { useEffect, useState } from "react";
import api from "../../../api";
import OverflowModal from "../../Shared/CustomUtils/OverflowModal";
import LoadingAnimation from "../../Shared/LoadingAnimation";
import LodingAnimation from "../../Shared/LodingAnimation";
import AddPaymentForm from "./AddPaymentForm";

function UpdateMethodModal({
    modalOpen,
    handleModal,
}: {
    modalOpen: boolean;
    handleModal: () => void;
}) {
    return (
        <OverflowModal
            className="w-[calc(100vw-40px)] max-w-[540px] bg-[#fff] rounded-[4px] overflow-y-auto"
            isOpen={modalOpen}
            onRequestClose={handleModal}
        >
            <UpdateModal handleModal={handleModal} />
        </OverflowModal>
    );
}

const UpdateModal = ({ handleModal }: any) => {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        (async () => {
            const response = await api.get("/api/payment/secret");
            const { client_secret } = response.data;
            setClientSecret(client_secret);
        })();
    }, []);
    return (
        <div>
            <div className="p-5">
                <div className="text-lg leading-[24.5px] font-semibold text-[#1d1d1d]">
                    Update Payment Method
                </div>
                <div className="pt-[17px]"></div>
                {clientSecret ? (
                    <div>
                        <AddPaymentForm
                            clientSecret={clientSecret}
                            handleModal={handleModal}
                            type="update"
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
                            You can review important information from ODA Center
                            on their Terms of Service and Privacy Policy.
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <LoadingAnimation />
                        <div>Loading...</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UpdateMethodModal;

/* eslint-disable @next/next/no-img-element */
import React from "react";
import CustomModal from "../../Shared/CustomUtils/CustomModal";

function PaymentInfoDialog({
    modalOpen,
    handleModal,
}: {
    modalOpen: boolean;
    handleModal: () => void;
}) {
    return (
        <CustomModal
            isOpen={modalOpen}
            onRequestClose={handleModal}
            className="w-[calc(100vw-56.4px)] max-w-[369px] bg-[#fff] rounded-[4px]"
        >
            <div className="p-[24.98px_31.87px] sm:p-[29px_37px]">
                <div className="text-[13.78px] sm:text-base leading-[18.77px] sm:leading-[21.79px] text-center text-[#000000] font-semibold">
                    Content Camel uses Link to securely save your payment
                    information.
                </div>
                <div className="pt-[27.45px] sm:pt-[32px]"></div>
                <div>
                    <div className="flex items-center gap-[19.81px] sm:gap-[23px]">
                        <img
                            src="/assets/dashboard-billing/lock.svg"
                            alt="Lock Icon"
                            className="w-[13.78px] h-[13.78px] sm:h-4 sm:w-4"
                        />
                        <div className="text-[#000000] text-[12.06px] leading-[16.42px] font-bold sm:text-[14px] sm:leading-[19.07px]">
                            Mobile verification
                        </div>
                    </div>
                    <div className="pt-[9.84px] sm:pt-[11px]"></div>
                    <div className="text-[#676767] text-[10.33px] leading-[14.07px] sm:text-[12px] sm:leading-[16.34px] font-normal ml-[33.13px] sm:ml-[39px]">
                        You’re protected with mobile authentication designed to
                        ensure that you’re the only person who can access your
                        information.
                    </div>
                </div>
                <div className="pt-[16.34px] sm:pt-[20px]"></div>
                <div>
                    <div className="flex items-center gap-[19.81px] sm:gap-[23px]">
                        <img
                            src="/assets/dashboard-billing/lock.svg"
                            alt="Lock Icon"
                            className="w-[13.78px] h-[13.78px] sm:h-4 sm:w-4"
                        />
                        <div className="text-[#000000] text-[12.06px] leading-[16.42px] font-bold sm:text-[14px] sm:leading-[19.07px]">
                            Data encryption
                        </div>
                    </div>
                    <div className="pt-[9.84px] sm:pt-[11px]"></div>
                    <div className="text-[#676767] text-[10.33px] leading-[14.07px] sm:text-[12px] sm:leading-[16.34px] font-normal ml-[33.13px] sm:ml-[39px]">
                        Your card information stays secure with data encryption
                        on servers that meet the highest PCI standards available
                        in the payment industry. You can review every order
                        before you pay.
                    </div>
                </div>
                <div className="pt-[12.68px] sm:pt-[16px]"></div>
                <div className="text-[#676767] text-[10.33px] leading-[14.07px] sm:text-[12px] sm:leading-[16.34px] font-normal">
                    You can review every order before you pay.
                </div>
                <div className="pt-[25.84px] sm:pt-[30px]"></div>
                <div>
                    <button className="text-[12.06px] w-full rounded-[4px] sm:h-[35px] sm:leading-[35px] h-[29.78px] leading-[29.78px] text-[#e51937] border border-[#e51937] font-semibold">
                        Close
                    </button>
                </div>
                <div className="sm:pt-[11px] pt-[9.84px]"></div>
                <div className="flex items-center">
                    <div className="text-[#676767] text-[10.33px] leading-[14.07px] sm:text-[12px] sm:leading-[16.34px] font-normal">
                        You can review every order before you pay.{" "}
                    </div>
                    <img
                        src="/assets/dashboard-billing/external-link.svg"
                        className="w-[13.78px] h-[13.78px] sm:h-4 sm:w-4"
                        alt=""
                    />
                </div>
            </div>
        </CustomModal>
    );
}

export default PaymentInfoDialog;

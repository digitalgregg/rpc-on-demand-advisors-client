/* eslint-disable @next/next/no-img-element */
import React from "react";
import CustomModal from "../../Shared/CustomUtils/CustomModal";

type YesNoModalType = {
    isOpen: boolean;
    handleModal: () => void;
    header: string;
    description: string;
    onYesClick?: () => void;
};

function YesNoModal({
    isOpen,
    handleModal,
    header,
    description,
    onYesClick,
}: YesNoModalType) {
    return (
        <CustomModal
            isOpen={isOpen}
            onRequestClose={handleModal}
            className="w-[calc(100vw-40px)] sm:w-[456px] md:w-[500px] l:w-[550px] 2xl:w-[642px]  bg-[#fff]  "
        >
            <div className="flex justify-between items-center p-[16px_30px] bg-[#101010]">
                <img
                    src="/assets/dashboard/logo-lg.svg"
                    alt=""
                    className="w-[104px]"
                />

                <img
                    src="/assets/collections/modal-close.svg"
                    alt="Close btn"
                    onClick={handleModal}
                    className="w-[18px]"
                />
            </div>
            <div className="p-[30px] sm:p-[53px] 2xl:px-[98px]">
                <div className="text-center font-bold leading-[21.79px] text-base text-[#E51937] ">
                    {header}
                </div>
                <div className="pt-[30px]"></div>
                <div className="text-xs leading-[16.34px] text-center text-[#222222]">
                    {description}
                </div>
                <div className="pt-[30px]"></div>

                <div className="flex gap-[14px] text-xs leading-[16.34px] font-bold">
                    <button
                        onClick={onYesClick}
                        className="w-full h-[40px] border border-[#e51937] bg-[#e51937] text-white rounded-[4px]"
                    >
                        Yes
                    </button>
                    <button
                        onClick={handleModal}
                        className="w-full h-[40px] border border-[#e51937]  text-[#e51937]  rounded-[4px]"
                    >
                        No
                    </button>
                </div>
            </div>
        </CustomModal>
    );
}

export default YesNoModal;

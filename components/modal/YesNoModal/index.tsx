/* eslint-disable @next/next/no-img-element */
import React from "react";
import CustomModal from "../../Shared/CustomUtils/CustomModal";

type YesNoModalType = {
    isOpen: boolean;
    handleModal: () => void;
    header: string;
    description: string;
    data?: any;
    onYesClick?: (data?: any) => void;
};

function YesNoModal({
    isOpen,
    handleModal,
    header,
    description,
    data,
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
                    className="w-[104px] sm:w-[130px]"
                />

                <img
                    src="/assets/collections/modal-close.svg"
                    alt="Close btn"
                    onClick={handleModal}
                    className="w-[18px] sm:w-[23.16px] cursor-pointer"
                />
            </div>
            <div className="p-[30px] sm:p-[52px] 2xl:px-[98px]">
                <div className="text-center sm:text-lg sm:leading-[24.51px] font-bold leading-[21.79px] text-base text-primary md:text-[24px] md:leading-[32.68px] ">
                    {header}
                </div>
                <div className="pt-[30px] 2xl:pt-[35px]"></div>
                <div className="text-xs sm:text-sm sm:leading-[19.07px] leading-[16.34px] text-center text-[#222222] md:text-base md:leading-[21.79px]">
                    {description}
                </div>
                <div className="pt-[30px] 2xl:pt-[35px]"></div>

                <div className="flex gap-[14px] text-xs leading-[16.34px] sm:text-sm sm:leading-[19.07px] font-bold">
                    <button
                        onClick={() => onYesClick && onYesClick(data)}
                        className="w-full h-[40px] sm:h-[43px] border border-primary bg-primary text-white rounded-[4px] hover:bg-transparent hover:text-primary transition-all duration-100"
                    >
                        Yes
                    </button>
                    <button
                        onClick={handleModal}
                        className="w-full h-[40px] sm:h-[43px] border border-primary  text-primary  rounded-[4px] hover:bg-primary hover:text-white transition-all duration-100"
                    >
                        No
                    </button>
                </div>
            </div>
        </CustomModal>
    );
}

export default YesNoModal;

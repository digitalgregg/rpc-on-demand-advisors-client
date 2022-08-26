import CustomModal from "../../Shared/CustomUtils/CustomModal";
import { motion } from "framer-motion";
import RoundborderClose from "../../CustomIcons/RoundborderClose";
import Image from "next/image";

export const DeleteModals = ({ modalIsOpen, closeModal }: any) => {
    return (
        <CustomModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="bg-[#fff] rounded-[4px] max-w-[550px]"
        >
            <div className="px-[30px] h-[55px] w-full bg-[#101010] flex flex-row justify-between items-center">
                <div className=" relative w-[130.42px]">
                    <Image
                        width={60}
                        height={44}
                        layout="responsive"
                        src="/assets/dashboard/logo-lg.svg"
                        alt="icons"
                    />
                </div>
                <div onClick={closeModal} className="cursor-pointer">
                    <RoundborderClose color="#ffffff" />
                </div>
            </div>
            <div className="bg-white_secondary p-5 rounded-lg flex flex-col gap-[10px]">
                <div className=" mt-[40px] mb-[36px] flex flex-col w-full gap-[30px]">
                    <span className=" text-center text-primary text-2xl leading-[33px] font-bold">
                        {" "}
                        Delete Account Settings
                    </span>
                    <p className=" text-center px-[13.5px] text-base font-normal leading-[22px] text-[#222222]">
                        Are you sure you want to remove “Awarness”? Removing
                        this option won’t remove this for existing items
                    </p>
                </div>
                <div className=" flex justify-between gap-[15px]">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        type="submit"
                        className="w-[327.5px]  h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary bg-primary capitalize text-sm leading-[19px] font-bold text-White"
                    >
                        Delete
                    </motion.button>
                    <motion.button
                        onClick={closeModal}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        className="w-[327.5px] h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary  capitalize text-sm leading-[19px] font-bold text-primary"
                    >
                        Cancel
                    </motion.button>
                </div>
            </div>
        </CustomModal>
    );
};

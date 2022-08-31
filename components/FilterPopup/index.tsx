import React from "react";
import { searchModalCustomS } from "../../utils/modalCustomStyle";
import Modal from "react-modal";
import SearchFilter from "./../SearchFilter/index";
import OverflowModal from "../Shared/CustomUtils/OverflowModal";

type ModalProps = {
    modalOpen: boolean;
    onClose: any;
};

const FilterPopup = ({ modalOpen, onClose }: ModalProps) => {
    return (
        <>
            <OverflowModal
                isOpen={modalOpen}
                onRequestClose={onClose}
                className="bg-[#fff] rounded-[4px] w-fit"
            >
                <section className="text-white w-[100%] h-[100%] bg-white xs:px-[20px] sm:px-[30px] pt-[30px]">
                    <div className="text-red-500 h-[90%] container1 drawer">
                        <div className="w-[100%] h-auto container2 xs:pr-0">
                            <SearchFilter />
                        </div>
                    </div>
                </section>
            </OverflowModal>
        </>
    );
};

export default FilterPopup;

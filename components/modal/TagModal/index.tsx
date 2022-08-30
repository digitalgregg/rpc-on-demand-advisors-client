import React from "react";
import TagFilter from "../../TagFilter/index";
import OverflowModal from "../../Shared/CustomUtils/OverflowModal";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const TagModal = ({ isOpen, onClose }: ModalProps) => {
    return (
        <div className="">
            <OverflowModal
                className="bg-white w-[calc(100vw-40px)] max-w-[510px] h-[250px] px-[30px]  py-[40px]"
                isOpen={isOpen}
                onRequestClose={onClose}
            >
                <div className="">
                    <h3 className="text-[16px] font-semibold	mb-[10px]">
                        Update tag
                    </h3>
                    <div className="w-full mb-[40px]">
                        <TagFilter />
                    </div>
                    {/* buttons section  */}
                    <div className="flex justify-between gap-[10px] w-full mx-auto">
                        <button className="w-full h-[45px] rounded-[4px] text-[16px] text-primary border border-primary hover:bg-primary hover:text-[#FFFFFF]">
                            Cancel
                        </button>
                        <button className="w-full h-[45px] rounded-[4px] text-[16px] text-primary border border-primary hover:bg-primary hover:text-[#FFFFFF]">
                            Update
                        </button>
                    </div>
                </div>
            </OverflowModal>
        </div>
    );
};

export default TagModal;

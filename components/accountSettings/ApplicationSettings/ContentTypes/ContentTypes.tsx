import React, { useState } from "react";
import ItemCard from "../../ItemCard/ItemCard";
import { Modals } from "../../../modal/ApplicationSettingAddItem";
import Plus from "../../../CustomIcons/PlusIcon";

const ContentTypes = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <Modals
                HTitle="Funnel Stage"
                closeModal={closeModal}
                modalIsOpen={modalIsOpen}
            />
            <div className=" max-w-[770px] md:w-[770px] rounded-lg bg-White overflow-hidden">
                <div className=" px-5 py-[10px] bg-black">
                    <span className="capitalize font-bold leading-[22px] text-base text-White">
                        Funnel Stage
                    </span>
                </div>
                <div className="px-5 md:px-10 py-5 ">
                    <div className=" flex flex-col gap-[16px]">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((val, i) => (
                            <ItemCard order={i} key={i} />
                        ))}
                    </div>
                    <div
                        onClick={openModal}
                        className=" my-[30px] w-[159px] h-[45px] py-[10px] px-[10px] rounded border-[1px] border-solid border-[#9E9E9E]  capitalize text-base leading-[22px] font-semibold text-[#000000] flex flex-row  items-center gap-[10px]"
                    >
                        <Plus />
                        <button type="button" className="">
                            Add Stage
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContentTypes;

import React, { useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { Modals } from "../../../modal/ApplicationSettingAddItem";
import Plus from "../../../CustomIcons/PlusIcon";
import Pagination from "../../../Shared/Pagination";
import { applicationsettingsFakeData } from "../../../fake";

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
            <div className="h-fit max-w-[770px] md:w-[770px] rounded-lg bg-White overflow-hidden">
                <div className=" px-5 py-[10px] bg-black">
                    <span className="capitalize font-bold leading-[22px] text-base text-White">
                    Content Types
                    </span>
                </div>
                <div className="px-5 md:px-10 pt-5 pb-10 ">
                    <Pagination dataArr={applicationsettingsFakeData} itemsPerPage={6} className=" !justify-start">
                        {(currentItems) => (
                            <>
                                <div className=" flex flex-col gap-[16px]">
                                    {currentItems.map(({name,id}:any, i) => (
                                        <ItemCard name={name} order={id} key={i} orderShow />
                                    ))}
                                </div>
                                <div
                                    onClick={openModal}
                                    className=" my-[16px] w-[159px] h-[45px] py-[10px] px-[10px] rounded border-[1px] border-solid border-[#9E9E9E]  capitalize text-base leading-[22px] font-semibold text-[#000000] flex flex-row  items-center gap-[10px]"
                                >
                                    <Plus />
                                    <button type="button" className="">
                                        Add Stage
                                    </button>
                                </div>
                            </>
                        )}
                    </Pagination>
                </div>
            </div>
        </>
    );
};

export default ContentTypes;

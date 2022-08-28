import React, { useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { Modals } from "../../../modal/ApplicationSettingAddItem";
import Plus from "../../../CustomIcons/PlusIcon";
import ToggleButton from "../../../Shared/ToggleButton";
import Pagination from "../../../Shared/Pagination";
const content = [
    {
        id: 0,
        name:"Cons",
    },
    {
        id: 1,
        name:"ideration",
        colors:'#109'
    },
    {
        id: 2,
        name:"tion",
        colors:'#509'
    },
    {
        id: 3,
        name:"Cration",
        colors:'#921009'
    },
    {
        id: 4,
        name:"Con",
        colors:'#909909'
    },
    {
        id: 5,
        name:"Cation",
        colors:'#1909'
    },
    {
        id: 6,
        name:"sider",
        colors:'#012909'
    },
];
const Product = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);
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
                <div className=" px-5 md:px-10 py-5 ">
                    <div className=" flex flex-row justify-between py-[10px]">
                        <span className="capitalize font-bold leading-[22px] text-base text-[#101010]">
                            Product
                        </span>
                        <ToggleButton
                            toggle={toggle}
                            handleToggle={handleToggle}
                            className={`
                                ${
                                    toggle === true
                                        ? " bg-primary"
                                        : "bg-[#DEDEDE]"
                                } before:bg-White before:shadow-[0px_2px_4px_rgba(0,0,0,0.25)]
                            `}
                        />
                    </div>
                    <hr className=" text-[#9E9E9E]" />
                    <Pagination dataArr={content} itemsPerPage={5} className=" !justify-start">
                        {(currentItems) => (
                            <>
                                <div className="mt-[16px] flex flex-col gap-[16px]">
                                    {currentItems.map(({name}:any, i) => (
                                        <ItemCard name={name} key={i} />
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

export default Product;

import React, { useState } from "react";
import DashboardLayout from "./../../components/Dashboard/DashboardLayout";
import { RecentActivities } from "../../components/fake";
import Pagination from "../../components/Shared/Pagination";
import { OutSideClick } from "../../components/Shared/OutSideClick";
import { AnimatePresence, motion } from "framer-motion";
export default function Index() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectNum, setSelectNum] = useState(null);
    const handleMenu = (id: any) => {
        setSelectNum(id);
        setIsOpen(!isOpen);
    };
    return (
        <DashboardLayout>
            <>
                <h2 className="text-bold sm:text-[32px] sm:leading-[44px] sm:mb-[30px] xs:text-[16px] xs:leading-[24px] xs:mb-[20px] text-[#1D1D1D]">
                    All Recent Activity
                </h2>
                <Pagination
                    dataArr={RecentActivities}
                    itemsPerPage={5}
                    className=" !justify-start my-3"
                >
                    {(currentItems) => (
                        <>
                            {currentItems.map(
                                (
                                    { id, title, data, description }: any,
                                    index
                                ) => {
                                    return (
                                        <div
                                            className="w-full relative bg-[#FFFFFF] hover:bg-[#e519371a] rounded-[4px] my-[16px] py-[18px] px-[10px] flex flex-row"
                                            key={id}
                                        >
                                            <div className="flex-1">
                                                <h2 className="font-semibold text-[16px] leading-[22px] text-[#222222] mb-[2px]">
                                                    {title}
                                                </h2>
                                                <h4 className="font-normal text-[12px] leading-[16px] text-[#676767] mb-[2px]">
                                                    {data}
                                                </h4>
                                                <h3 className="font-normal text-[14px] leading-[19px] text-[#222222]">
                                                    {description}
                                                </h3>
                                            </div>
                                            <div
                                                className="p-[4px] h-[16px] cursor-pointer"
                                                onClick={() => handleMenu(id)}
                                            >
                                                <img
                                                    src="/icon/three-dot.svg"
                                                    alt="three dot"
                                                    className="w-[3px]"
                                                />
                                            </div>
                                            {/* drop down items  */}
                                            <OutSideClick
                                                onOutSideClick={() =>
                                                    setIsOpen(false)
                                                }
                                            >
                                                <AnimatePresence
                                                    initial={false}
                                                >
                                                    {index === selectNum &&
                                                        isOpen === true && (
                                                            <motion.div
                                                                initial={{
                                                                    opacity: 0,
                                                                    height: 0,
                                                                }}
                                                                animate={{
                                                                    opacity: 1,
                                                                    height: "fit-content",
                                                                }}
                                                                exit={{
                                                                    opacity: 0,
                                                                    height: 0,
                                                                }}
                                                                transition={{
                                                                    duration: 0.2,
                                                                }}
                                                                className="overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)]"
                                                            >
                                                                <div
                                                                    className="bg-[#ffffff] rounded px-[8px] py-[8px] absolute top-[40px]  right-[25px] z-50"
                                                                    style={{
                                                                        boxShadow:
                                                                            "2px 2px 16px rgba(0, 0, 0, 0.08)",
                                                                    }}
                                                                >
                                                                    <ul className="text-semibold text-[12px] flex flex-col gap-[2px] leading-[16px] text-[#000805]">
                                                                        <li className="rounded p-3 hover-transition hover:bg-primary hover:text-White cursor-pointer">
                                                                            Mark
                                                                            as
                                                                            read
                                                                        </li>
                                                                        <li className="rounded p-3 hover-transition hover:bg-primary hover:text-White cursor-pointer">
                                                                            View
                                                                            item
                                                                        </li>
                                                                        <li className="rounded p-3 hover-transition hover:bg-primary hover:text-White cursor-pointer">
                                                                            Remove
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                </AnimatePresence>
                                            </OutSideClick>
                                        </div>
                                    );
                                }
                            )}
                        </>
                    )}
                </Pagination>
            </>
        </DashboardLayout>
    );
}

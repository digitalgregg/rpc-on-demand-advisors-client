import React, { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import { Modals } from "./../modal/ContactSupportFeedBackModal";
import { FeedbackIdeaIcon } from "../CustomIcons";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { FilterState, SidebarState } from "../../state";

function DashboardLayout({ children }: { children: ReactNode }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [toltip, setToltip] = useState(false);

    // for sidebar
    const [collapse] = useAtom(SidebarState);

    const [filterOpen] = useAtom(FilterState);

    return (
        <>
            <Modals
                closeModal={() => setModalIsOpen(false)}
                modalIsOpen={modalIsOpen}
                modalCloseFuncton={setModalIsOpen}
            />
            <div className="bg-white_secondary relative min-h-screen w-full xs:px-[20px] sm:px-[30px] lg:px-[35px] 2xl:px-[35px] xs:pt-[30px] sm:pt-[20px]">
                {/* sidebar  */}
                <div
                    className={`bg-[#222222]  hidden sm:flex  sm:w-[90px] ${
                        !collapse && "lg:w-[250px]  3xl:w-[280px]"
                    } ${
                        filterOpen && collapse && "lg:w-[310px]"
                    }  h-full fixed top-0 left-0 ${
                        filterOpen && !collapse && "lg:w-[470px] 3xl:w-[500px]"
                    } `}
                >
                    <Sidebar />
                </div>
                {/* sidebar  */}
                <div
                    className={`h-full sm:pl-[90px] ${
                        !collapse && "lg:pl-[250px] 3xl:pl-[280px]"
                    } ${filterOpen && collapse && "lg:pl-[310px] "} ${
                        filterOpen &&
                        !collapse &&
                        "lg:pl-[470px] 3xl:pl-[500px]"
                    } w-full`}
                >
                    <div className="mb-[20px] sm:mb-[30px]">
                        <TopNav />
                    </div>
                    {children}
                    {!modalIsOpen && (
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setModalIsOpen(true)}
                            className=" group fixed bottom-2 right-2 cursor-pointer shadow-[0px_2px_25px_rgba(0,0,0,0.06)] hover:shadow-[0px_2px_20px_rgba(229,25,55,0.2)]  bg-primary hover:bg-primary_dark rounded hover-transition"
                        >
                            <div className=" relative">
                                <div
                                    onMouseOver={() => setToltip(true)}
                                    onMouseLeave={() => setToltip(false)}
                                    onMouseUp={() => setToltip(false)}
                                    className="py-3 px-3"
                                >
                                    <FeedbackIdeaIcon color="#ffffff" />
                                </div>
                                {toltip && !modalIsOpen && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="shadow-[0px_2px_20px_rgba(225,255,255,0.2)]  absolute top-[11px] -left-[80px] bg-primary px-2 pb-[4px] rounded after:content"
                                    >
                                        <span className="text-[12px] font-semibold text-[#ffffff]">
                                            Feedback
                                        </span>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </>
    );
}

export default DashboardLayout;

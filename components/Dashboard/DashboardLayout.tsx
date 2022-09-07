import React, { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import { Modals } from "./../modal/ContactSupportFeedBackModal";
import { FeedbackIdeaIcon } from "../CustomIcons";
import { motion } from "framer-motion";
function DashboardLayout({ children }: { children: ReactNode }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [toltip, setToltip] = useState(false);
    return (
        <>
            <Modals
                closeModal={() => setModalIsOpen(false)}
                modalIsOpen={modalIsOpen}
                modalCloseFuncton={setModalIsOpen}
            />
            <div className="bg-white_secondary relative min-h-screen w-full xs:px-[20px] sm:px-[30px] lg:px-[35px] 2xl:px-[35px] xs:pt-[30px] sm:pt-[20px]">
                <Sidebar />
                <div className="h-full	sm:pl-[90px] md:pl-[100px] lg:pl-[230px] xl:pl-[250px] 2xl:pl-[270px] 3xl:pl-[280px] 4xl:pl-[280px] w-full">
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

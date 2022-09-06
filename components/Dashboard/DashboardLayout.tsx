import React, { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import { Modals } from "./../modal/ContactSupportFeedBackModal";
function DashboardLayout({ children }: { children: ReactNode }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
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
                    <div
                        onClick={() => setModalIsOpen(true)}
                        className="rotate-90 fixed top-[40%] -right-[29px] cursor-pointer shadow-[0px_2px_25px_rgba(0,0,0,0.06)] hover:shadow-[0px_2px_20px_rgba(229,25,55,0.2)] py-4 px-5 bg-primary hover:bg-primary_dark rounded hover-transition"
                    >
                        <div className="rotate-180">
                            <span className=" text-[16px] font-semibold text-[#ffffff]">
                                Feedback
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardLayout;

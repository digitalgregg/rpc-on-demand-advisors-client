import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="bg-white_secondary min-h-screen w-full xs:px-[20px] sm:px-[30px] lg:px-[35px] 2xl:px-[35px] xs:pt-[30px] sm:pt-[20px]">
            <Sidebar />
            <div className="h-full	sm:pl-[90px] md:pl-[100px] lg:pl-[230px] xl:pl-[250px] 2xl:pl-[270px] 3xl:pl-[280px] 4xl:pl-[280px] w-full">
                
                <div className="mb-[20px] sm:mb-[30px]"><TopNav /></div>
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout;

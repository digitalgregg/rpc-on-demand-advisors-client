import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";

function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="bg-white_secondary h-full w-full">
            <Sidebar />
            <div className="h-full  sm:pl-[90px] md:pl-[100px] lg:pl-[230px] xl:pl-[250px] 2xl:pl-[270px] 3xl:pl-[280px] 4xl:pl-[280px] w-full">
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout;
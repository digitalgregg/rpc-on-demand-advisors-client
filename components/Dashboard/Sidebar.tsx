/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from "react";
import NavLink from "./NavLink";

type SidebarDataType = {
    icon: string;
    text: string;
    link: string;
};

const sidebarData: SidebarDataType[] = [
    {
        icon: "/assets/dashboard/sidebar-content.svg",
        text: "My Content",
        link: "/dashboard/contents",
    },
    {
        icon: "/assets/dashboard/sidebar-collection.svg",
        text: "My Collections",
        link: "/dashboard/collections",
    },
    {
        icon: "/assets/dashboard/sidebar-shared.svg",
        text: "Shared Collections",
        link: "/dashboard/shared-collections",
    },
    {
        icon: "/assets/dashboard/sidebar-analytics.svg",
        text: "My Analytics",
        link: "/dashboard/analytics",
    },
];

function Sidebar() {
    return (
        <div className="bg-[#222222] hidden sm:block sm:w-[90px] md:w-[100px] lg:w-[230px] xl:w-[250px] 2xl:w-[270px] 3xl:w-[280px] 4xl:w-[280px] h-full fixed top-0 left-0">
            <div className="p-[35px_20px] flex flex-col">
                <picture>
                    <source
                        media="(min-width:1024px)"
                        srcSet="/assets/dashboard/logo-lg.svg"
                    />
                    <img src="/assets/dashboard/logo-sm.svg" alt="Logo" />
                </picture>
                <div className="pt-[60px]"></div>
                <div className="flex flex-col gap-4 ">
                    {sidebarData.map((v, i) => (
                        <SidebarTab data={v} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const SidebarTab = ({ data }: { data: SidebarDataType }) => {
    return (
        <NavLink
            href={data.link}
            className="flex items-center justify-center lg:pl-5 lg:justify-start py-[10px] rounded-[4px]"
            activeClassName="bg-[#E51937]"
        >
            <div className=" flex items-center">
                <img
                    src={data.icon}
                    alt="Sidebar Icon"
                    width={24}
                    height={24}
                />
            </div>
            <div className="hidden lg:block pl-[10px]"></div>
            <div className="hidden lg:block text-sm font-semibold leading-[19.07px] text-[#fff]">
                {data.text}
            </div>
        </NavLink>
    );
};

export default Sidebar;
/* eslint-disable @next/next/no-img-element */
import { useAtom } from "jotai";
import Link from "next/link";
import React, { ReactNode } from "react";
import { UserPlanState } from "../../state";
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

const upgradeBtn = {
    icon: "/assets/upgrade.svg",
    text: "Upgrade Plan",
    link: "/dashboard/billing/subscription-plan",
};

function Sidebar() {
    const [userPlan] = useAtom(UserPlanState);

    const isUpgrade = () => {
        const {
            analytics,
            asset_limit,
            storage_limit,
            user_limit,
            weekly_email,
            wishlist,
        } = userPlan;
        return (
            analytics ||
            asset_limit ||
            storage_limit ||
            user_limit ||
            weekly_email ||
            wishlist
        );
    };

    return (
        <div className="bg-[#222222] hidden sm:block sm:w-[90px] md:w-[100px] lg:w-[230px] xl:w-[250px] 2xl:w-[270px] 3xl:w-[280px] 4xl:w-[280px] h-full fixed top-0 left-0">
            <div className="p-[35px_20px] flex flex-col h-full justify-between">
                <div>
                    <Link href="/">
                        <a>
                            <picture>
                                <source
                                    media="(min-width:1024px)"
                                    srcSet="/assets/dashboard/logo-lg.svg"
                                />
                                <img
                                    src="/assets/dashboard/logo-sm.svg"
                                    alt="Logo"
                                />
                            </picture>
                        </a>
                    </Link>

                    <div className="pt-[60px]"></div>
                    <div>
                        <div className="flex flex-col gap-4 ">
                            {sidebarData.map((v, i) => (
                                <SidebarTab data={v} key={i} />
                            ))}
                        </div>
                    </div>
                </div>
                {isUpgrade() && (
                    <div className="">
                        <SidebarTab data={upgradeBtn} />
                    </div>
                )}
            </div>
        </div>
    );
}

const SidebarTab = ({ data }: { data: SidebarDataType }) => {
    return (
        <NavLink
            href={data.link}
            className="flex items-center transition ease-in-out duration-200 hover:bg-primary justify-center lg:pl-5 lg:justify-start py-[10px] rounded-[4px]"
            activeClassName="bg-primary"
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

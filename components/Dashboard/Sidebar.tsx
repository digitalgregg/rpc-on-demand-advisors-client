/* eslint-disable @next/next/no-img-element */
import { useAtom } from "jotai";
import Link from "next/link";
import React, { ReactNode } from "react";
import {
    FilterState,
    SidebarState,
    team_state,
    UserPlanState,
} from "../../state";
import NavLink from "./NavLink";
import { RightArrowIcon } from "../CustomIcons";
import SidebarFilter from "./SidebarFilter";
import { AnimatePresence } from "framer-motion";
import { useQuery } from "react-query";
import { fetchAppSettings } from "../../api-call/AppSettingsApi";

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
            wishlist ||
            (userPlan.plan_name && userPlan.plan_name === "Trial")
        );
    };

    const [teamData] = useAtom(team_state);
    const [collapse, setCollapse] = useAtom(SidebarState);
    const [filterOpen] = useAtom(FilterState);

    const { data: appSettingData } = useQuery(
        "application-settings-query",
        () => fetchAppSettings(teamData.id),
        {
            select: (response) => response.data,
            retry(failureCount, error: any) {
                if (
                    error?.response?.data?.message ===
                    "Application Settings not found"
                ) {
                    return false;
                } else {
                    return true;
                }
            },
            refetchOnWindowFocus: false,
        }
    );

    return (
        <div className="flex w-full">
            <div
                className={`${
                    filterOpen && "lg:w-[calc(100%-220px)]"
                } p-[35px_20px] flex flex-col h-full justify-between`}
            >
                <div>
                    <div>
                        <a>
                            <picture>
                                {!collapse && (
                                    <source
                                        media="(min-width:1024px)"
                                        srcSet="/assets/dashboard/logo-lg.svg"
                                    />
                                )}
                                <img
                                    src="/assets/dashboard/logo-sm.svg"
                                    alt="Logo"
                                />
                            </picture>
                        </a>
                        <div className="pt-4"></div>
                        <div
                            className={`lg:flex hidden ${
                                !collapse
                                    ? "justify-start rotate-180"
                                    : "justify-center"
                            } `}
                        >
                            <div
                                className="p-1 cursor-pointer"
                                onClick={() => setCollapse(!collapse)}
                            >
                                <RightArrowIcon color="#fff" />
                            </div>
                        </div>
                    </div>

                    <div className="pt-[46px]"></div>
                    <div>
                        <div className="flex flex-col gap-4 ">
                            <div className="hidden lg:block">
                                <FiltersButton />
                            </div>
                            {sidebarData.map((v, i) => (
                                <SidebarTab data={v} key={i} />
                            ))}
                        </div>
                    </div>
                </div>
                {isUpgrade() && teamData.role === "admin" && (
                    <div className="">
                        <SidebarTab data={upgradeBtn} isUpdate />
                    </div>
                )}
            </div>

            {filterOpen && <SidebarFilter data={appSettingData  || []} />}
        </div>
    );
}

const SidebarTab = ({
    data,
    isUpdate,
}: {
    data: SidebarDataType;
    isUpdate?: boolean;
}) => {
    const [collapse] = useAtom(SidebarState);
    return (
        <NavLink
            href={data.link}
            className={`flex items-center transition ease-in-out duration-300 ${
                isUpdate ? "bg-primary" : "hover:bg-primary"
            } justify-center ${
                !collapse && "lg:pl-5 lg:justify-start"
            }  py-[10px] rounded-[4px]`}
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
            {!collapse && (
                <>
                    <div className="hidden lg:block pl-[10px]"></div>
                    <div className="hidden lg:block text-sm font-semibold leading-[19.07px] text-[#fff]">
                        {data.text}
                    </div>
                </>
            )}
        </NavLink>
    );
};

function FiltersButton() {
    const [collapse] = useAtom(SidebarState);
    const [filterOpen, setFilterOpen] = useAtom(FilterState);
    return (
        <div
            onClick={() => setFilterOpen(!filterOpen)}
            className={`flex items-center transition ease-in-out duration-300  hover:bg-primary cursor-pointer
            justify-center ${
                !collapse && "lg:pl-5 lg:justify-start"
            }  py-[10px] rounded-[4px]`}
        >
            <div className=" flex items-center">
                <img
                    src="/img/white-filter-icon.svg"
                    alt="Sidebar Icon"
                    width={24}
                    height={24}
                />
            </div>
            {!collapse && (
                <>
                    <div className="hidden lg:block pl-[10px]"></div>
                    <div className="hidden lg:block text-sm font-semibold leading-[19.07px] text-[#fff]">
                        Filters
                    </div>
                </>
            )}
        </div>
    );
}

export default Sidebar;

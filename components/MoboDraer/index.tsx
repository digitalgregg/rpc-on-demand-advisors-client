/* eslint-disable @next/next/no-img-element */
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { profile_state, signupState } from "../../state";
import { removeLocal } from "../../utils/localStorage";

const menuItems = [
    {
        id: 0,
        title: "My Content",
        img: "/img/contentIcon.svg",
        url: "/dashboard/contents",
    },
    {
        id: 1,
        title: "My Collections",
        img: "/img/collectionIconWh.svg",
        url: "/dashboard/collections",
    },
    {
        id: 2,
        title: "Shared Collections",
        img: "/img/shareIcon.svg",
        url: "/dashboard/shared-collections",
    },
    {
        id: 3,
        title: "My Analytics",
        img: "/img/analyticIcon.svg",
        url: "/dashboard/analytics",
    },
    {
        id: 4,
        title: "User Settings",
        img: "/img/settingsIcon.svg",
        url: "/dashboard/user-settings",
    },
    {
        id: 5,
        title: "Wishlist",
        img: "/img/wishlistIcon.svg",
        url: "/dashboard/wishlist",
    },
    {
        id: 6,
        title: "Billing",
        img: "/img/billingIcon.svg",
        url: "/dashboard/billing/subscription-plan",
        baseUrl: "/dashboard/billing",
    },
    {
        id: 7,
        title: "Support",
        img: "/img/support1.svg",
        url: "/dashboard/support",
    },
    {
        id: 8,
        title: "Recycle Bin",
        img: "/img/recycle.svg",
        url: "/dashboard/recycle-bin",
    },
    {
        id: 9,
        title: "Account Settings",
        img: "/img/accountSettingWh.svg",
        url: "/dashboard/account-settings/application-settings",
        baseUrl: "/dashboard/account-settings/application-settings",
    },
    {
        id: 10,
        title: "Logout",
        img: "/img/logout.svg",
        url: "/logout",
    },
];

const MoboDraer = ({ toggleDrawer, isOpen }: any) => {
    const router = useRouter();

    const [userData] = useAtom(signupState);
    const [profileData] = useAtom(profile_state);
    const checkActive = (v: any) => {
        if (v.baseUrl) {
            return router.asPath.includes(v.baseUrl) && "bg-primary";
        } else {
            return router.asPath == v.url && "bg-primary";
        }
    };

    function handleOnClick(item: any): void {
        toggleDrawer();
        if (item.title === "Logout") {
            removeLocal("user");
            removeLocal("user-info");
            removeLocal("team");
            removeLocal("token");
            router.push("/");
        } else {
            router.push(item.url);
        }
    }

    return (
        <>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="left"
                className="bla"
                size="100%"
                style={{ backgroundColor: "#202020" }}
            >
                <div className="w-[90%] pb-[30px] drawer container1 mx-auto text-[#FFFFFF] text-[16px] font-semibold pt-[40px] relative ">
                    <div className="px-4 container2">
                        <img
                            onClick={toggleDrawer}
                            src="/img/crossIcon.svg"
                            alt="close icon"
                            className="w-[24px] h-[24px] absolute top-[20px] right-[20px] cursor-pointer"
                        />
                        <div className="flex items-center gap-[15px] mb-[20px]">
                            <img
                                src={profileData.location || "/img/avater.svg"}
                                alt="avater"
                                className="w-[50px] h-[50px] rounded-full"
                            />
                            <p className="text-[16px] font-semibold">
                                {userData.name}
                            </p>
                        </div>
                        {menuItems.map((item: any) => (
                            <div key={item.id}>
                                <ul className="py-[10px]">
                                    <li
                                        className={`py-[13px] px-4 flex gap-[10px] cursor-pointer rounded-[4px] hover:bg-primary ${checkActive(
                                            item
                                        )}`}
                                        onClick={() => handleOnClick(item)}
                                    >
                                        <span>
                                            <img
                                                src={item.img}
                                                alt="icon"
                                                className="w-[24px] h-[24px]"
                                            />
                                        </span>{" "}
                                        {item.title}{" "}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default MoboDraer;

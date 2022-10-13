import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { removeLocal } from "../../utils/localStorage";
import {
    AccountSetting,
    RecycleBin,
    Support,
    WishlistIcon,
    UserSetting,
    Logout,
    BillingIcon,
} from "../CustomIcons";

const menuItems = [
    {
        id: 1,
        title: "User Settings",
        Icon: UserSetting,
        url: "/dashboard/user-settings",
        baseUrl: "/dashboard/user-settings",
    },
    {
        id: 2,
        title: "Account setting",
        Icon: AccountSetting,
        url: "/dashboard/account-settings/application-settings",
        baseUrl: "/dashboard/account-settings/",
    },
    {
        id: 3,
        title: "Wishlist",
        Icon: WishlistIcon,
        url: "/dashboard/wishlist",
        baseUrl: "/dashboard/wishlist",
    },
    {
        id: 4,
        title: "Billing",
        Icon: BillingIcon,
        url: "/dashboard/billing/subscription-plan",
        baseUrl: "/dashboard/billing/",
    },
    {
        id: 5,
        title: "Support",
        Icon: Support,
        url: "/dashboard/support",
        baseUrl: "/dashboard/support",
    },
    {
        id: 6,
        title: "Recycle Bin",
        Icon: RecycleBin,
        url: "/dashboard/recycle-bin",
        baseUrl: "/dashboard/recycle-bin",
    },
    {
        id: 7,
        title: "Logout",
        Icon: Logout,
        url: "/logout",
        baseUrl: "/logout",
    },
];

const UserSettingsDropdown = () => {
    const router = useRouter();
    const [iconColor, setIconColor] = useState(false);
    const [itemCount, setItemCount] = useState<any>({});

    const onOver = (e: any) => {
        if (e) setIconColor(true);
    };
    const onLeave = (e: any) => {
        if (e) setIconColor(false);
    };

    function handleOnClick(title: any, url: any): void {
        if (title === "Logout") {
            removeLocal("user");
            removeLocal("user-info");
            removeLocal("team");
            removeLocal("token");
            secureLocalStorage.removeItem("payment-method");
            router.push("/");
        } else {
            router.push(url);
        }
    }
    return (
        <div
            style={{ boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.15)" }}
            className="w-[190px] rounded-[4px] bg-[#FFFFFF]"
        >
            <div className="p-[8px] ">
                {menuItems.map(({ id, Icon, title, url, baseUrl }: any) => (
                    <div
                        onMouseOver={() => {
                            onOver(id), setItemCount(id);
                        }}
                        onMouseLeave={() => {
                            onLeave(id), setItemCount(id);
                        }}
                        className="my-[2px] "
                        key={id}
                    >
                        <ul
                            className={` ${
                                router.asPath.includes(baseUrl)
                                    ? "!bg-primary"
                                    : " bg-transparent"
                            } px-[10px] py-[12px] hover:bg-primary mt-[5px] rounded-[4px] cursor-pointer`}
                            onClick={() => handleOnClick(title, url)}
                        >
                            <li className="flex text-[#222222]">
                                <a className=" flex flex-row gap-[10px]">
                                    {
                                        <Icon
                                            color={`${
                                                (id === itemCount &&
                                                    iconColor === true) ||
                                                router.asPath.includes(baseUrl)
                                                    ? "#ffffff"
                                                    : "#000"
                                            }`}
                                        />
                                    }
                                    <span
                                        className={` ${
                                            (id === itemCount &&
                                                iconColor === true) ||
                                            router.asPath.includes(baseUrl)
                                                ? "text-[#FFFFFF]"
                                                : "#000"
                                        } text-[14px] font-semibold`}
                                    >
                                        {title}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserSettingsDropdown;

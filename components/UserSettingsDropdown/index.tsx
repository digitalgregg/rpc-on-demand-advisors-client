import React, { useState } from "react";
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
        url: "",
    },
    {
        id: 2,
        title: "Account setting",
        Icon: AccountSetting,
        url: "",
    },
    {
        id: 3,
        title: "Wishlist",
        Icon: WishlistIcon,
        url: "",
    },
    {
        id: 4,
        title: "Billing",
        Icon: BillingIcon,
        url: "",
    },
    {
        id: 5,
        title: "Support",
        Icon: Support,
        url: "",
    },
    {
        id: 6,
        title: "Recycle Bin",
        Icon: RecycleBin,
        url: "",
    },
    {
        id: 7,
        title: "Logout",
        Icon: Logout,
        url: "",
    },
];

const UserSettingsDropdown = () => {
    const [iconColor, setIconColor] = useState(false);
    const [itemCount, setItemCount] = useState<any>({});

    const onOver = (e: any) => {
        if (e) setIconColor(true);
    };
    const onLeave = (e: any) => {
        if (e) setIconColor(false);
    };
    return (
        <div
            style={{ boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.15)" }}
            className="w-[190px] rounded-[4px] bg-[#FFFFFF]"
        >
            <div className="p-[8px] ">
                {menuItems.map(({ id, Icon, title }: any) => (
                    <div
                        key={id}
                        onMouseOver={() => {
                            onOver(id), setItemCount(id);
                        }}
                        onMouseLeave={() => {
                            onLeave(id), setItemCount(id);
                        }}
                        className="my-[2px] "
                    >
                        <ul className="px-[10px] py-[12px] hover:bg-primary mt-[5px] rounded-[4px] hover:text-[#FFFFFF] cursor-pointer">
                            <li className="flex gap-[10px]">
                                {
                                    <Icon
                                        color={`${
                                            id === itemCount &&
                                            iconColor === true
                                                ? "#ffffff"
                                                : "#000"
                                        }`}
                                    />
                                }
                                <span className="text-[14px] font-semibold	">
                                    {title}
                                </span>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserSettingsDropdown;

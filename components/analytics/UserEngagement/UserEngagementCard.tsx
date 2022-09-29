/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import Pagination from "../../Shared/Pagination";
type UserEngagementCardType = {
    Title: string;
    Details: string;
    userImage: string;
    date: string;
    user_name: string;
    Views: number;
    Shares_white: number;
};
const UserEngagementCard = ({
    Title,
    Details,
    Views,
    Shares_white,
    user_name,
    date,
    userImage,
}: UserEngagementCardType) => {
    return (
        <>
            <ul className="flex w-full gap-x-2 items-center md:px-[20px] px-3 py-[17px] lg:py-[14px] sm:py-[12px]  bg-white rounded-[4px]">
                <li className="w-[17%]  text-[10px] sm:text-sm ">
                    <div className="flex items-center gap-3">
                        <img
                            className="rounded-full hidden sm:block"
                            src={userImage}
                            alt=""
                            width={30}
                            height={30}
                        />
                        <div className="line-clamp-1">{user_name}</div>
                    </div>
                </li>
                <li className="w-[23%]  text-[10px] sm:text-sm ">
                    <div className="line-clamp-1">{Title}</div>
                </li>
                <li className="w-[15%] text-[10px] sm:text-sm ">{Details}</li>
                <li className="w-[15%]  text-[10px] sm:text-sm ">
                    {Shares_white}
                </li>
                <li className="w-[20%]  text-[10px] sm:text-sm ">
                    <div className="line-clamp-1">{date}</div>
                </li>
                <li className="w-[10%]  text-[10px] sm:text-sm ">{Views}</li>
            </ul>
            <hr className=" h-[1px] text-[rgba(0,0,0,0.1)]" />
        </>
    );
};
UserEngagementCard.defaultProps = {
    user_name: "A.S. Piash",
    Title: "New Microsoft Word Document",
    Details: "View",
    Views: 3,
    Shares_white: 4,
    date: "07 July 2022",
    userImage: "/assets/account-settings/profile-img.jpg",
};
export default UserEngagementCard;

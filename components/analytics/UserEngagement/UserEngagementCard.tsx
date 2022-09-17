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
            <div className="bg-[#fff] sm:p-[22px] py-4 px-3 text-[#000]">
                <div className="flex items-center justify-center text-sm leading-[19.07px]">
                    <div className="flex items-center gap-[10px] w-[calc(40%/2)] sm:w-[calc(40%/1)]">
                        <div className=" w-[30px] h-[30px]">
                            <img
                                src="/img/avater.svg"
                                alt="avater"
                                className=" w-full h-full object-cover rounded-full xs:hidden sm:flex"
                            />
                        </div>
                        <div className=" max-w-[95%] sm:w-full text-[#676767] line-clamp-1 text-[10px] sm:text-[14px] md:text-[14px]">
                            {user_name}
                        </div>
                    </div>
                    <div className="flex items-center w-[calc(40%/2)] sm:w-[calc(40%/1)]">
                        <div className=" max-w-[95%] sm:w-full text-[#676767] line-clamp-1 text-[10px] sm:text-[14px] md:text-[14px]">
                            {Title}
                        </div>
                    </div>
                    <div className="flex  items-center w-[calc(40%/2)]">
                        <div className=" w-1/2 sm:w-full  text-[#676767] text-[10px] sm:text-[14px] md:text-[14px]">
                            {Details}
                        </div>
                    </div>
                    <div className="flex items-center w-[calc(40%/2)]">
                        <div className=" w-1/2 sm:w-full  text-[#676767] text-[10px] sm:text-[14px] md:text-[14px]">
                            {Shares_white}
                        </div>
                    </div>
                    <div className="flex items-center w-[calc(40%/2)]">
                        <div className=" w-11/12 sm:w-full   text-[#676767] text-[10px] sm:text-[14px] md:text-[14px]">
                            {date}
                        </div>
                    </div>
                    <div className="flex items-center w-[calc(40%/2)]">
                        <div className=" w-1/2 sm:w-full   text-[#676767] text-[10px] sm:text-[14px] md:text-[14px]">
                            {Views}
                        </div>
                    </div>
                </div>
            </div>
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
    userImage: "../../../public/assets/account-settings/profile-img.jpg",
};
export default UserEngagementCard;

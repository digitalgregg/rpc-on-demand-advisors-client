import React, { useState } from "react";
import { addDays } from "date-fns";
import { DateRangePicker } from 'react-date-range';
import Pagination from "../../Shared/Pagination";
import UserEngagementCard from "./UserEngagementCard";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
const UserEngagement = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection",
        },
    ]);
    const UserEngagementData = [{}, {}, {}, {}];
    const handleSelect = (e: any) => {
        console.log(e);
    };
    return (
        <div>
            <div className=" p-4 md:p-[30px] bg-White rounded">
                <div className=" flex flex-row justify-between">
                    <span className="text-xl text-[#000] leading-[27.24px] font-semibold">
                        User Engagement
                    </span>
                    <div className=" flex flex-row gap-[23px]">
                        <button className=" hidden xl:block font-normal text-base leading-[22px] text-center text-[#222222] w-[155px] h-[45px] border border-solid border-[#676767] rounded">
                            View Details
                        </button>
                        <div className=" flex items-center justify-center cursor-pointer font-normal text-base leading-[22px] text-center text-[#222222] w-fit h-[45px] px-3 border border-solid border-[#676767] rounded">
                        22 July 2022 - 29 July 2022
                        </div>
                    </div>
                </div>
                <div className="pt-4 sm:pt-[30px]"></div>

                <ul className="flex items-center md:px-[20px] md:h-[72px] px-3 py-[17px] xl:h-[80px] bg-[#222222] rounded-[4px]">
                    <li className="w-[calc(80%/2)] sm:w-[calc(40%/1)] text-white text-[10px] sm:text-base lg:text-base">
                        User Name
                    </li>
                    <li className="w-[calc(80%/2)] sm:w-[calc(40%/1)] text-white text-[10px] sm:text-base lg:text-base">
                        Title
                    </li>
                    <li className="w-[calc(40%/2)] text-white text-[10px] sm:text-base lg:text-base">
                        Details
                    </li>
                    <li className="w-[calc(40%/2)] text-white text-[10px] sm:text-base lg:text-base">
                        Views
                    </li>
                    <li className="w-[calc(40%/2)] text-white text-[10px] sm:text-base lg:text-base">
                        Shares
                    </li>
                    <li className="w-[calc(40%/2)] text-white text-[10px] sm:text-base lg:text-base">
                        Upvotes
                    </li>
                </ul>
                <div className="flex flex-col gap-[16px] sm:gap-0">
                    <Pagination
                        dataArr={UserEngagementData}
                        itemsPerPage={4}
                        className=" my-3"
                    >
                        {(currentItems) => (
                            <div className=" flex flex-col">
                                {currentItems.map((i: any) => (
                                    <UserEngagementCard key={i} />
                                ))}
                            </div>
                        )}
                    </Pagination>
                </div>
            </div>
        </div>
    );
};

export default UserEngagement;

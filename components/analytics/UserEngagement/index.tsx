import React, { useState } from "react";
import { addDays } from "date-fns";
import Pagination from "../../Shared/Pagination";
import UserEngagementCard from "./UserEngagementCard";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useWindowDimensions } from "../../Shared/DimentionHook";
import { DateRangePicker } from "rsuite";
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
    const { width } = useWindowDimensions();
    return (
        <div>
            <div className=" p-4 px-3 md:p-[30px] bg-White rounded">
                <div className=" flex flex-row justify-between">
                    <span className="text-[12px] sm:text-xl text-[#000] leading-[27.24px] font-semibold">
                        User Engagement
                    </span>
                    <div className=" flex flex-row gap-[23px]">
                        <div>
                            <DateRangePicker
                                showOneCalendar={width > 680 ? false : true}
                                editable={false}
                                format="dd MMM yyyy"
                                placement="bottomEnd"
                            />
                        </div>
                    </div>
                </div>
                <div className="pt-4 sm:pt-[30px]"></div>

                <ul className="flex w-full gap-x-2  items-center md:px-[20px]  px-3 py-[17px]  bg-[#222222] rounded-[4px]">
                    <li className="w-[17%] text-white text-[10px] sm:text-sm lg:text-base">
                        Username
                    </li>
                    <li className="w-[23%] text-white text-[10px] sm:text-sm lg:text-base">
                        Title
                    </li>
                    <li className="w-[15%] text-white text-[10px] sm:text-sm lg:text-base">
                        Details
                    </li>
                    <li className="w-[15%] text-white text-[10px] sm:text-sm lg:text-base">
                        Shares
                    </li>
                    <li className="w-[20%] text-white text-[10px] sm:text-sm lg:text-base">
                        Date
                    </li>
                    <li className="w-[10%] text-white text-[10px] sm:text-sm lg:text-base">
                        Views
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

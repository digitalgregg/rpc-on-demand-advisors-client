import React from "react";
import { DateRangePicker } from "rsuite";
import { useWindowDimensions } from "../Shared/DimentionHook";
import AnalyticsCard from "./AnalyticsCard";
import ContentDetails from "./ContentDetails";
import MainAnalytics from "./MainAnalytics";
import UserEngagement from "./UserEngagement";

const Analytics = () => {
    const { width } = useWindowDimensions();
    return (
        <div className=" flex flex-col gap-[30px] pb-[30px]">
            <div className=" flex justify-between items-center">
                <div className="text-sm leading-[19.07px] sm:text-2xl sm:leading-[33px] font-semibold text-[#101010]">
                    Overview
                </div>
                <div>
                    <DateRangePicker
                        showOneCalendar={width > 680 ? false : true}
                        editable={false}
                        format="dd MMM yyyy"
                        placement="bottomEnd"
                    />
                </div>
            </div>
            <div className=" grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-full  gap-[20px] lg:gap-[30px]">
                <AnalyticsCard />
                <AnalyticsCard />
                <AnalyticsCard />
                <AnalyticsCard />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                <MainAnalytics />
                <MainAnalytics />
            </div>
            <ContentDetails />
            <UserEngagement />
        </div>
    );
};

export default Analytics;

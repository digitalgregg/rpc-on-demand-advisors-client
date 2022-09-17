import React from "react";
import Pagination from "../Shared/Pagination";
import MiniCard from "./miniCard";
import ContentDetailsCard from "./ContentDetails/ContentDetailsCard";
import ContentDetails from "./ContentDetails";
import UserEngagement from "./UserEngagement";
import AllTimeCard from "./AllTimeCard";

const Analytics = () => {
    const data = [
        {
            name: "may 5",
            uv: 100,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "may 6",
            uv: 300,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "may 7",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "may 8",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
    ];
    return (
        <div className=" flex flex-col gap-[30px] pb-[30px]">
            <div className=" flex justify-between items-center">
                <span className=" text-2xl leading-[33px] font-semibold text-[#101010]">
                    Overview
                </span>
                <div className=" flex items-center justify-center cursor-pointer font-normal text-base leading-[22px] text-center text-[#222222] w-fit h-[45px] px-3 border border-solid border-[#676767] rounded">
                    22 July 2022 - 29 July 2022
                </div>
            </div>
            <div className=" grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-full  gap-[20px] lg:gap-[30px]">
                <MiniCard
                    name="Total share"
                    data={data}
                    itemCount={13}
                    progres={true}
                    progresCount={0.13}
                />
                <MiniCard
                    name="Total share"
                    data={data}
                    itemCount={20}
                    progres={false}
                    progresCount={0.3}
                />
                <MiniCard
                    name="Total share"
                    data={data}
                    itemCount={16}
                    progres={false}
                    progresCount={0.4}
                />
                <MiniCard
                    name="Total share"
                    data={data}
                    itemCount={10}
                    progres={true}
                    progresCount={0.17}
                />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                <AllTimeCard
                    data={data}
                    subTitleone="Funnel breakdown for this period"
                    subTitletwo="Funnel breakdown for all time"
                    hTitle="Content By Type ( All time)"
                    color="#21B979"
                />
                <AllTimeCard
                    data={data}
                    subTitleone="Funnel breakdown for this period"
                    subTitletwo="Funnel breakdown for all time"
                    hTitle="Content By Funnel Stage ( All time)"
                    color="#E51937"
                />
            </div>
            <ContentDetails />
            <UserEngagement />
        </div>
    );
};

export default Analytics;

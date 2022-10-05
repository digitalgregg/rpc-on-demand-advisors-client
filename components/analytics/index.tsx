import React from "react";
import { filterByDate, sortDataNewest } from "../../utils/filter";
import { GetAnalyticsContext } from "../Context/AnalyticsProvider";
import DataNotFound from "../Shared/DataNotFound";
import LoadingAnimation from "../Shared/LoadingAnimation";
import ContentDetails from "./ContentDetails";
import TopAnalytics from "./TopAnalytics";
import UserEngagement from "./UserEngagement";

const Analytics = () => {
    const { data, isLoading, isError, dateRange } = GetAnalyticsContext();
    if (isLoading)
        return (
            <div className="flex  justify-center items-center h-[calc(100vh-150px)] w-full">
                <LoadingAnimation color="#E51937" height={50} width={50} />
            </div>
        );
    if (isError)
        return <DataNotFound imgClass="w-[300px] " className="top-[130px]" />;
    return (
        <div className=" flex flex-col gap-[30px] pb-[30px]">
            <TopAnalytics data={filterByDate(data, dateRange)} />
            <ContentDetails data={sortDataNewest(data.contents)} />
            <UserEngagement data={sortDataNewest(data.contents)} />
        </div>
    );
};

export default Analytics;

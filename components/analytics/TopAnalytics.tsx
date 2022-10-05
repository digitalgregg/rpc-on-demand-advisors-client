import React from "react";
import { DateRangePicker } from "rsuite";
import { AnalyticsDataType } from "../../api-call/AnalyticsApi";
import { ContentDataType } from "../../api-call/ContentApi";
import { filterByDateSingle } from "../../utils/filter";
import { GetAnalyticsContext } from "../Context/AnalyticsProvider";
import { useWindowDimensions } from "../Shared/DimentionHook";
import AnalyticsCard from "./AnalyticsCard";
import MainAnalytics from "./MainAnalytics";

type Props = {
    data: AnalyticsDataType;
};

function TopAnalytics({ data }: Props) {
    const { width } = useWindowDimensions();

    const { data: allData, dateRange, setDateRange } = GetAnalyticsContext();
    getShareChart(dateRange, data.contents);
    return (
        <>
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
                        onChange={(v) => v && setDateRange(v)}
                        value={dateRange}
                    />
                </div>
            </div>
            <div className=" grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-full  gap-[20px] lg:gap-[30px]">
                <AnalyticsCard
                    name="share"
                    value={getTotalShare(data.contents)}
                    chartArr={getShareChart(dateRange, data.contents)
                        .slice(0, 7)
                        .reverse()}
                />
                <AnalyticsCard
                    name="views"
                    value={getTotalViews(data.contents)}
                    chartArr={getViewsChart(dateRange, data.contents)
                        .slice(0, 7)
                        .reverse()}
                />
                <AnalyticsCard
                    name="contents"
                    value={data.contents.length}
                    chartArr={getContentsChart(dateRange, data.contents)
                        .slice(0, 7)
                        .reverse()}
                />
                <AnalyticsCard
                    name="users"
                    value={data.users.length}
                    chartArr={getUserChart(dateRange, data.users)
                        .slice(0, 7)
                        .reverse()}
                />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-5 lg:gap-[30px]">
                <MainAnalytics
                    chartData={getFunnelStage(allData.contents)}
                    name="Funnel Stages"
                    color="#E51937"
                />
                <MainAnalytics
                    chartData={getContentType(allData.contents)}
                    name="Content Type"
                    color="#21B979"
                />
            </div>
        </>
    );
}

function getFunnelStage(data: ContentDataType[]) {
    const returnObj: any = {};
    data.forEach((v) => {
        if (v.funnel_stage) {
            returnObj[v.funnel_stage.title] = returnObj[v.funnel_stage.title]
                ? returnObj[v.funnel_stage.title] + 1
                : 1;
        } else {
            returnObj["None"] = returnObj["None"] ? returnObj["None"] + 1 : 1;
        }
    });
    return returnObj;
}

function getContentType(data: ContentDataType[]) {
    const returnObj: any = {};
    data.forEach((v) => {
        if (v.content_type) {
            returnObj[v.content_type.title] = returnObj[v.content_type.title]
                ? returnObj[v.content_type.title] + 1
                : 1;
        } else {
            returnObj["None"] = returnObj["None"] ? returnObj["None"] + 1 : 1;
        }
    });
    return returnObj;
}

function getTotalShare(data: ContentDataType[]) {
    let totalShare = 0;
    data.forEach((v) => {
        if (v.sharingDetails.length) {
            totalShare += v.sharingDetails.length;
        }
    });
    return totalShare;
}

function getTotalViews(data: ContentDataType[]) {
    let totalViews = 0;
    data.forEach((v) => {
        if (v.views?.length) {
            totalViews += v.views.length;
        }
    });
    return totalViews;
}

function getContentsChart(
    dateRange: [Date, Date],
    contents: ContentDataType[]
) {
    let dateArray = getDates(dateRange[0], dateRange[1]).reverse();
    const obj: any = {};
    dateArray.forEach((v) => {
        obj[v.toLocaleDateString()] = 0;
    });
    contents.forEach((v) => {
        obj[new Date(v.createdAt).toLocaleDateString()] =
            obj[new Date(v.createdAt).toLocaleDateString()] + 1;
    });
    return Object.values(obj);
}
function getShareChart(dateRange: [Date, Date], contents: ContentDataType[]) {
    let dateArray = getDates(dateRange[0], dateRange[1]).reverse();
    const obj: any = {};
    dateArray.forEach((v) => {
        obj[v.toLocaleDateString()] = 0;
    });
    const newContents: any[] = contents.map((v) => v.sharingDetails);
    const shareContents = [].concat.apply([], newContents);
    shareContents.forEach((v: any) => {
        obj[new Date(v.createdAt).toLocaleDateString()] =
            obj[new Date(v.createdAt).toLocaleDateString()] + 1;
    });
    return Object.values(obj);
}

function getViewsChart(dateRange: [Date, Date], contents: ContentDataType[]) {
    let dateArray = getDates(dateRange[0], dateRange[1]).reverse();
    const obj: any = {};
    dateArray.forEach((v) => {
        obj[v.toLocaleDateString()] = 0;
    });
    const newContents: any[] = contents.map((v) => v.views);
    const shareContents = [].concat.apply([], newContents);
    shareContents.forEach((v: any) => {
        obj[new Date(v).toLocaleDateString()] =
            obj[new Date(v).toLocaleDateString()] + 1;
    });
    return Object.values(obj);
}

function getUserChart(dateRange: [Date, Date], users: any) {
    let dateArray = getDates(dateRange[0], dateRange[1]).reverse();
    const obj: any = {};
    dateArray.forEach((v) => {
        obj[v.toLocaleDateString()] = 0;
    });
    if (Array.isArray(users)) {
        users.forEach((v: any) => {
            obj[new Date(v.createdAt).toLocaleDateString()] =
                obj[new Date(v.createdAt).toLocaleDateString()] + 1;
        });
    }
    console.log(users);
    return Object.values(obj);
}

function addDays(days: number, currentDate: Date) {
    var date = new Date(currentDate);
    date.setDate(date.getDate() + days);
    return date;
}

function getDates(startDate: Date, stopDate: Date): any[] {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date(currentDate));
        currentDate = addDays(1, currentDate);
    }
    return dateArray;
}

export default TopAnalytics;

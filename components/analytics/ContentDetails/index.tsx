import { Form, Formik } from "formik";
import React from "react";
import InputField from "../../Shared/InputField";
import Pagination, { IsArray } from "../../Shared/Pagination";
import ContentDetailsCard from "./ContentDetailsCard";
import * as Yup from "yup";
import { ContentDataType } from "../../../api-call/ContentApi";
import TopNavSelect from "../../Shared/TopNavSelect";
import AnalyticsSelect from "../../Shared/AnalyticsSelect";
import { GetAnalyticsContext } from "../../Context/AnalyticsProvider";
import { SelectOption } from "../../Shared/SortedSelect";
import { filterContentAnalytics } from "../../../utils/filter";

const ContentDetails = ({ data }: { data: ContentDataType[] }) => {
    const { contentDetails, dispatchDetails } = GetAnalyticsContext();
    return (
        <div className=" bg-White rounded p-3 py-[24px]  sm:p-[30px]">
            <div>
                <div className="flex justify-between gap-[20px] w-full mb-[20px]">
                    <div className="text-base sm:text-xl text-[#000] md:leading-[27.24px] font-semibold">
                        Content Details
                    </div>
                </div>
                <div className="grid md:grid-cols-3 gap-5 md:gap-[30px]">
                    <div>
                        <div className=" mb-[10px]">
                            <label className=" text-[#000000] !text-sm !leading-[19.07px] font-semibold block">
                                Title
                            </label>
                        </div>
                        <input
                            type="text"
                            value={contentDetails.title}
                            onChange={(e) => {
                                dispatchDetails({
                                    type: "title",
                                    value: e.target.value,
                                });
                            }}
                            className=" w-full input bg-[#fff] text-sm placeholder:text-[#6D6D6D] border border-[#E0E0E0]  h-[55px] focus:outline-none px-4 text-black rounded-[4px]"
                            placeholder="select title"
                        />
                    </div>
                    <AnalyticsSelect
                        label="Funnel Stage"
                        options={getFunnelAnalytics(data)}
                        onChange={(e) =>
                            dispatchDetails({ type: "funnel_stage", value: e })
                        }
                        value={contentDetails.funnel_stage}
                    />
                    <AnalyticsSelect
                        label="Content Type"
                        options={getContentAnalytics(data)}
                        onChange={(e) =>
                            dispatchDetails({ type: "content_type", value: e })
                        }
                        value={contentDetails.content_type}
                    />
                </div>

                <div className="pt-4 sm:pt-[30px]"></div>

                <ul className="flex  items-center md:px-[20px] px-3 py-[17px]  bg-[#222222] rounded-[4px]">
                    <li className="w-[40%] text-white text-[10px] sm:text-sm lg:text-base ">
                        Title
                    </li>
                    <li className="w-[15%] text-white text-[10px] sm:text-sm lg:text-base">
                        Details
                    </li>
                    <li className="w-[15%] text-white text-[10px] sm:text-sm lg:text-base">
                        Views
                    </li>
                    <li className="w-[15%] text-white text-[10px] sm:text-sm lg:text-base">
                        Shares
                    </li>
                    <li className="w-[15%] text-white text-[10px] sm:text-sm lg:text-base">
                        Upvotes
                    </li>
                </ul>
                <div className="flex flex-col gap-[16px] sm:gap-0">
                    <Pagination
                        dataArr={IsArray(
                            filterContentAnalytics(data, contentDetails)
                        )}
                        itemsPerPage={4}
                        className=" my-3"
                    >
                        {(currentItems) => (
                            <div className=" flex flex-col">
                                {currentItems.length ? (
                                    currentItems.map((v: any, i) => (
                                        <ContentDetailsCard key={i} data={v} />
                                    ))
                                ) : (
                                    <div className="p-5 text-sm">
                                        No data found
                                    </div>
                                )}
                            </div>
                        )}
                    </Pagination>
                </div>
            </div>
        </div>
    );
};

export default ContentDetails;

function getFunnelAnalytics(data: ContentDataType[]): any[] {
    const field: SelectOption[] = [];
    data.forEach((v) => {
        if (v.funnel_stage?._id) {
            field.push({
                value: v.funnel_stage._id,
                label: v.funnel_stage.title,
            });
        }
    });

    return Array.from(new Set(field.map((v) => JSON.stringify(v)))).map((v) =>
        JSON.parse(v)
    );
}

function getContentAnalytics(data: ContentDataType[]): any[] {
    const field: SelectOption[] = [];
    data.forEach((v) => {
        if (v.content_type?._id) {
            field.push({
                value: v.content_type._id,
                label: v.content_type.title,
            });
        }
    });

    return Array.from(new Set(field.map((v) => JSON.stringify(v)))).map((v) =>
        JSON.parse(v)
    );
}

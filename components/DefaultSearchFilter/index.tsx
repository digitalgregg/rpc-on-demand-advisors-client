import { useAtom } from "jotai";
import React from "react";
import { useQuery } from "react-query";
import api from "../../api";
import {
    AppSettingToggle,
    DefaultFilter,
    FilterOrigin,
    team_state,
} from "../../state";
import { userSettingSelectStyle } from "../../utils/reactSelectCustomSyle";
import { getTagsOptions, optionsToTags, tagsToOptions } from "../FilterBox";
import { getOptionsByType } from "../FilterFields";
import UserSettingSelect from "../UserSettingSelect";

const labelStyle = "text-[16px] text-[#000000] font-normal leading-[21.79px]";

function DefaultSearchFilter() {
    const [teamData] = useAtom(team_state);

    const [defaultFilter, setDefaultFilter] = useAtom(DefaultFilter);
    const [filterOrigin, setFilterOrigin] = useAtom(FilterOrigin);
    const [appSetting] = useAtom(AppSettingToggle);

    const { data } = useQuery(
        ["get tags", teamData.id],
        () => api.get(`/api/application-settings?team_id=${teamData.id}`),
        { select: (res) => res.data }
    );

    const handleClear = () => {
        setDefaultFilter({
            region: [],
            industry: [],
            tags: [],
            product: [],
        });
        setFilterOrigin({
            ...filterOrigin,
            region: [],
            industry: [],
            tags: [],
            product: [],
        });
    };

    console.log(appSetting);

    if (
        appSetting.industry ||
        appSetting.product ||
        appSetting.region ||
        appSetting.tag
    ) {
        return (
            <div
                id="default-filter"
                className="w-full lg:w-[70%] bg-[#FFFFFF] rounded-[4px] mt-[30px] px-[20px] pb-[20px]"
            >
                <h3 className="  font-semibold text-[16px] sm:text-[18px] leading-[24.51px] text-[#000000] mb-[20px] pt-[20px]">
                    Default Search Filter
                </h3>
                {appSetting.tag && (
                    <div className="mb-5">
                        <UserSettingSelect
                            options={tagsToOptions(getTagsOptions(data) || [])}
                            isSecondary={true}
                            placeholder="Select tags"
                            labelContainer="mb-[20px]"
                            labelClass={labelStyle}
                            isLabel={true}
                            onChange={(e) => {
                                setDefaultFilter({
                                    ...defaultFilter,
                                    tags: optionsToTags(e),
                                });
                                setFilterOrigin({
                                    ...filterOrigin,
                                    tags: optionsToTags(e),
                                });
                            }}
                            value={tagsToOptions(defaultFilter.tags)}
                            customStyles={userSettingSelectStyle}
                            name="Tags"
                        />
                    </div>
                )}
                {appSetting.product && (
                    <div className="mb-5">
                        <UserSettingSelect
                            options={getOptionsByType(data, "product")}
                            isSecondary={true}
                            placeholder="Select products"
                            labelContainer="mb-[20px]"
                            labelClass={labelStyle}
                            isLabel={true}
                            onChange={(e) => {
                                setDefaultFilter({
                                    ...defaultFilter,
                                    product: e,
                                });
                                setFilterOrigin({
                                    ...filterOrigin,
                                    product: e,
                                });
                            }}
                            customStyles={userSettingSelectStyle}
                            name="Products"
                            value={defaultFilter.product}
                        />
                    </div>
                )}
                {appSetting.industry && (
                    <div className="mb-5">
                        <UserSettingSelect
                            options={getOptionsByType(data, "industry")}
                            isSecondary={true}
                            placeholder="Select industries"
                            labelContainer="mb-[20px]"
                            labelClass={labelStyle}
                            onChange={(e) => {
                                setDefaultFilter({
                                    ...defaultFilter,
                                    industry: e,
                                });
                                setFilterOrigin({
                                    ...filterOrigin,
                                    industry: e,
                                });
                            }}
                            isLabel={true}
                            customStyles={userSettingSelectStyle}
                            name="Industries"
                            value={defaultFilter.industry}
                        />
                    </div>
                )}
                {appSetting.region && (
                    <div className="mb-5">
                        <UserSettingSelect
                            options={getOptionsByType(data, "region")}
                            isSecondary={true}
                            placeholder="Select regions"
                            labelContainer="mb-[20px]"
                            labelClass={labelStyle}
                            onChange={(e) => {
                                setDefaultFilter({
                                    ...defaultFilter,
                                    region: e,
                                });
                                setFilterOrigin({
                                    ...filterOrigin,
                                    region: e,
                                });
                            }}
                            isLabel={true}
                            customStyles={userSettingSelectStyle}
                            name="Regions"
                            value={defaultFilter.region}
                        />
                    </div>
                )}

                <button
                    onClick={handleClear}
                    className="mb-5 w-[96px] h-[45px] rounded-[4px] border border-primary text-primary hover:bg-primary hover:text-[#FFFFFF] text-[14px] font-semibold mt-[20px] cursor-pointer  transition duration-700 ease-in-out"
                >
                    Clear
                </button>
            </div>
        );
    } else {
        return <></>;
    }
}

export default DefaultSearchFilter;

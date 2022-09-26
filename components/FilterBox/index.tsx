import React, { useReducer } from "react";
import { useAtom } from "jotai";
import { AppSettingToggle, FilterOrigin } from "../../state";
import TopNavSelect from "../Shared/TopNavSelect";
import { getOptionsByType, getTagOptionsData } from "../FilterFields";
import { SettingResponse } from "../../api-call/AppSettingsApi";
import { FilterAction } from "./FilterReducer";
import TagBadges from "../CustomIcons/TagBadges";

const FilterBox = ({ data }: { data: SettingResponse[] }) => {
    const [appSetting] = useAtom(AppSettingToggle);
    const [filterOrigin, setFilterOrigin] = useAtom(FilterOrigin);

    const [state, dispatch] = useReducer(FilterAction, filterOrigin);

    const handleFind = () => {
        const newState = state;
        newState.tags = optionsToTags(newState.tags);
        setFilterOrigin(newState);
    };

    return (
        <>
            <div className=" flex flex-col gap-[30px]">
                {/* FUNNEL STAGE SELECT  */}
                <TopNavSelect
                    label="Funnel Stages"
                    onChange={(e) =>
                        dispatch({ type: "funnel_stages", value: e })
                    }
                    defaultValue={filterOrigin.funnel_stages}
                    options={getOptionsByType(data, "funnel")}
                />

                {/* CONTENT TYPE STAGE  */}
                <TopNavSelect
                    label="Content Type"
                    onChange={(e) =>
                        dispatch({ type: "content_type", value: e })
                    }
                    defaultValue={filterOrigin.content_type}
                    options={getOptionsByType(data, "content")}
                />

                {/* PRODUCT TYPE STAGE  */}
                {appSetting.product === true && (
                    <TopNavSelect
                        label="Product"
                        defaultValue={filterOrigin.product}
                        onChange={(e) =>
                            dispatch({ type: "product", value: e })
                        }
                        options={getOptionsByType(data, "product")}
                    />
                )}

                {/* INDUSTRY TYPE STAGE  */}
                {appSetting.industry === true && (
                    <TopNavSelect
                        label="Industry"
                        onChange={(e) =>
                            dispatch({ type: "industry", value: e })
                        }
                        defaultValue={filterOrigin.industry}
                        options={getOptionsByType(data, "industry")}
                    />
                )}

                {/* REGION TYPE STAGE  */}
                {appSetting.region === true && (
                    <TopNavSelect
                        label="Region"
                        onChange={(e) => dispatch({ type: "region", value: e })}
                        defaultValue={filterOrigin.region}
                        options={getOptionsByType(data, "region")}
                    />
                )}

                {/* TAG TYPE STATE filter tag */}
                {appSetting.tag === true && (
                    <TopNavSelect
                        label="Tags"
                        onChange={(e) => dispatch({ type: "tags", value: e })}
                        defaultValue={tagsToOptions(filterOrigin.tags)}
                        options={tagsToOptions(getTagsForNav(data) || [])}
                    />
                )}
            </div>
            <div className="flex flex-col gap-4 md:gap-0  md:flex-row justify-between mt-[30px] items-center">
                <div>
                    <h3 className="text-[16px] cursor-pointer underline  decoration-1 leading-[21.79px] font-semibold text-[#101010]  ">
                        Set default search filters...
                    </h3>
                </div>
                <div>
                    <button className="w-[69.63px] h-[38px] bg-[#222222] rounded-[4px] text-[16px] text-[#FFFFFF] font-medium	border border-solid border-[#222222] hover:bg-transparent hover:text-[#222222]	 transition duration-200 ease-in-out">
                        Reset
                    </button>
                    <button
                        onClick={handleFind}
                        className="w-[69.63px] h-[38px] ml-[24px] bg-primary rounded-[4px] text-[16px] text-[#FFFFFF] font-medium border border-solid border-primary hover:bg-transparent hover:text-primary	 transition duration-200 ease-in-out"
                    >
                        Find
                    </button>
                </div>
            </div>
        </>
    );
};

export function getTagsForNav(data: any): object[] | undefined {
    if (!data) return undefined;
    const findData = data.find((v: any) => v.type === "tags");
    if (!findData) return undefined;
    if (findData.settingsItems.length === 0) return undefined;
    return findData.settingsItems.map((v: any) => ({
        value: v._id,
        data: { title: v.title, color: v.color },
    }));
}

export const tagsToOptions = (data: any[]) => {
    return data.map((v) => {
        return {
            ...v,
            label: (
                <div className={"flex items-center gap-[8px] text-[#000805]"}>
                    <TagBadges color={v.data.color} /> {v.data.title}
                </div>
            ),
        };
    });
};

export const optionsToTags = (data: any[]) => {
    return data.map((v) => {
        return {
            value: v.value,
            data: v.data,
        };
    });
};

export default FilterBox;

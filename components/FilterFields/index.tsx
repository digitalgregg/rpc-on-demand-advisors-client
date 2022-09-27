import React from "react";
import { customStyles } from "../../utils/GlobalReactSelectData/AssetUse";
import GlobalSelect from "./../GlobalSelect/index";
import { GetContentContext } from "../Context/ContentDataProvider";
import { ContentDataType } from "../../api-call/ContentApi";
import { toCapitalized } from "../modal/UserManagementModal";
import { useAtom } from "jotai";
import { AppSettingToggle, team_state } from "../../state";
import { fetchAppSettings } from "../../api-call/AppSettingsApi";
import { useQuery } from "react-query";
import EditTagField from "../Shared/EditTagField";
import TagBadges from "../CustomIcons/TagBadges";

const FilterFields = () => {
    const [appSetting] = useAtom(AppSettingToggle);
    const { contentData, context } = GetContentContext();

    const [teamData] = useAtom(team_state);

    const { data, refetch } = useQuery(
        "application-settings-query",
        () => fetchAppSettings(teamData.id),
        {
            select: (response) => response.data,
            retry(failureCount, error: any) {
                if (
                    error?.response?.data?.message ===
                    "Application Settings not found"
                ) {
                    return false;
                } else {
                    return true;
                }
            },
        }
    );

    const labelClass = "text-[16px] text-[#101010] font-semibold";
    const label = "text-[16px] font-semibold text-[#000805]";

    const assetUseOptions = [
        { value: "external", label: "External" },
        { value: "internal", label: "Internal" },
    ];

    function getDefaultValue(contentData: any, type: string): any {
        if (!contentData[type]) return undefined;

        return {
            label: contentData[type].title,
            value: contentData[type]._id,
        };
    }

    return (
        <div className="w-full ">
            <div className="flex items-center justify-between mb-[20px]">
                <h3 className="text-[18px] font-semibold leading-[24.51px] sm:leading-[32.68px] text-[#101010] sm:text-[24px]">
                    Content details
                </h3>

                <h3 className="text-[14px] font-semibold leading-[19.07px] text-[#101010] sm:leading-[24.51px]">
                    Update Item Asset
                </h3>
            </div>

            {/* all input in flex  */}

            <div className="flex flex-col sm:flex-row flex-wrap gap-[20px] justify-between mb-5 ">
                <div className=" w-full sm:w-[calc(50%-10px)] h-auto ">
                    <GlobalSelect
                        selectClassName="text-[14px] text-[#676767] pt-[10px]"
                        name="asset-use"
                        isMulti={false}
                        options={assetUseOptions}
                        labelStyles={labelClass}
                        isLabel={true}
                        customStyles={customStyles}
                        labelName="Asset use"
                        handleOnChange={(v) =>
                            context.dispatchDetails({
                                type: "asset_use",
                                value: v.value,
                            })
                        }
                        defaultValue={getAssetDefault(contentData)}
                        placeholder="Select type"
                        optionHoverColor="#E519371A"
                    />
                </div>
                <div className=" w-full sm:w-[calc(50%-10px)] h-auto ">
                    <GlobalSelect
                        selectClassName="text-[14px] text-[#676767] pt-[10px]"
                        isMulti={false}
                        options={getOptionsByType(data, "content")}
                        labelStyles={labelClass}
                        isLabel={true}
                        customStyles={customStyles}
                        labelName="Content Type"
                        name="content-type"
                        handleOnChange={(v) =>
                            context.dispatchDetails({
                                type: "content_type",
                                value: v.value,
                            })
                        }
                        defaultValue={getDefaultValue(
                            contentData,
                            "content_type"
                        )}
                        placeholder="Select content type"
                        optionHoverColor="#E519371A"
                    />
                </div>

                <div className=" w-full sm:w-[calc(50%-10px)] h-auto ">
                    <GlobalSelect
                        selectClassName="text-[14px]  text-[#676767] mt-[10px]"
                        name="funnel-stage"
                        isMulti={false}
                        options={getOptionsByType(data, "funnel")}
                        labelStyles={labelClass}
                        isLabel={true}
                        customStyles={customStyles}
                        labelName="Funnel Stage"
                        handleOnChange={(v) =>
                            context.dispatchDetails({
                                type: "funnel_stage",
                                value: v.value,
                            })
                        }
                        defaultValue={getDefaultValue(
                            contentData,
                            "funnel_stage"
                        )}
                        placeholder="Select funnel stage"
                        optionHoverColor="#E519371A"
                    />
                </div>
                {appSetting.product && (
                    <div className=" w-full sm:w-[calc(50%-10px)] h-auto ">
                        <GlobalSelect
                            selectClassName="text-[14px] text-[#676767] pt-[10px]"
                            name="product"
                            isMulti={false}
                            options={getOptionsByType(data, "product")}
                            labelStyles={labelClass}
                            isLabel={true}
                            customStyles={customStyles}
                            labelName="Product"
                            defaultValue={getDefaultValue(
                                contentData,
                                "product"
                            )}
                            handleOnChange={(v) =>
                                context.dispatchDetails({
                                    type: "product",
                                    value: v.value,
                                })
                            }
                            placeholder="Select product"
                            optionHoverColor="#E519371A"
                        />
                    </div>
                )}
                {appSetting.industry && (
                    <div className=" w-full sm:w-[calc(50%-10px)] h-auto ">
                        <GlobalSelect
                            selectClassName="text-[14px] text-[#676767] pt-[10px]"
                            isMulti={false}
                            options={getOptionsByType(data, "industry")}
                            labelStyles={labelClass}
                            isLabel={true}
                            customStyles={customStyles}
                            labelName="Industry"
                            name="content type"
                            defaultValue={getDefaultValue(
                                contentData,
                                "industry"
                            )}
                            handleOnChange={(v) =>
                                context.dispatchDetails({
                                    type: "industry",
                                    value: v.value,
                                })
                            }
                            placeholder="Select industry"
                            optionHoverColor="#E519371A"
                        />
                    </div>
                )}

                {appSetting.region && (
                    <div className=" w-full sm:w-[calc(50%-10px)] h-auto ">
                        <GlobalSelect
                            selectClassName="text-[14px] text-[#676767] pt-[10px]"
                            name="asset use"
                            isMulti={false}
                            options={getOptionsByType(data, "region")}
                            labelStyles={labelClass}
                            isLabel={true}
                            customStyles={customStyles}
                            labelName="Region"
                            defaultValue={getDefaultValue(
                                contentData,
                                "region"
                            )}
                            handleOnChange={(v) =>
                                context.dispatchDetails({
                                    type: "region",
                                    value: v.value,
                                })
                            }
                            placeholder="Select region"
                            optionHoverColor="#E519371A"
                        />
                    </div>
                )}

                <div className="w-full sm:w-[calc(50%-10px)]  h-auto">
                    <form action="">
                        <label
                            onClick={() => refetch()}
                            htmlFor="url"
                            className={labelClass}
                        >
                            Short URL
                        </label>
                        <br />
                        <input
                            type="text"
                            name="url"
                            onChange={(e) =>
                                context.dispatchDetails({
                                    type: "short_url",
                                    value: e.target.value,
                                })
                            }
                            defaultValue={contentData.short_url}
                            placeholder="https://loac.io/trpv"
                            className="text-[14px] text-[#676767] bg-white mt-[10px] h-[55px] border border-[#9E9E9E] rounded-[4px] w-full outline-0 px-[15px]"
                        />
                    </form>
                </div>
            </div>

            {/* funnel stage and short url  end */}
            {appSetting.tag && (
                <div className="mb-[25px]">
                    <div className="mb-[10px] ">
                        <label className={label}>Tags</label>
                    </div>

                    <EditTagField
                        options={getTagOptionsData(data, "tags")}
                        placeholder="Select tags"
                        defaultValue={getTagsDefaultValue(contentData, "tags")}
                        handleOnChange={(v) => {
                            context.dispatchDetails({
                                type: "tags",
                                value: Array.isArray(v)
                                    ? v.map((val) => val.value)
                                    : [],
                            });
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export function getOptionsByType(
    data: any,
    type: string
): Object[] | undefined {
    if (!data) return undefined;
    const findData = data.find((v: any) => v.type === type);
    if (!findData) return undefined;
    if (findData.settingsItems.length === 0) return undefined;
    return findData.settingsItems.map((v: any) => ({
        value: v._id,
        label: v.title,
    }));
}

function getAssetDefault(contents: ContentDataType) {
    return {
        value: contents.asset_use,
        label: toCapitalized(contents.asset_use),
    };
}

export function getTagOptionsData(
    data: any,
    type: string
): object[] | undefined {
    if (!data) return undefined;
    const findData = data.find((v: any) => v.type === type);
    if (!findData) return undefined;
    if (findData.settingsItems.length === 0) return undefined;
    return findData.settingsItems.map((v: any) => ({
        value: v._id,
        label: (
            <div className={"flex items-center gap-[8px] text-[#000805]"}>
                <TagBadges color={v.color} /> {v.title}
            </div>
        ),
    }));
}

export function getTagsDefaultValue(contentData: any, type: string): any {
    if (!contentData[type]) return undefined;

    return contentData[type].map((v: any) => ({
        label: (
            <div className={"flex items-center gap-[8px] text-[#000805]"}>
                <TagBadges color={v.color} /> {v.title}
            </div>
        ),
        value: v._id,
    }));
}

export default FilterFields;

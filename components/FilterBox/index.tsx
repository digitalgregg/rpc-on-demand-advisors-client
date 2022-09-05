import React, { useEffect, useState } from "react";
import FunnelStage from "./../FunnelStage/index";
import ContentTypeStage from "./../ContentTypeStage/index";
import TagBadges from "./../CustomIcons/TagBadges";
import TagsSelect from "./../TagsSelect/index";
import GlobalSelect from "./../GlobalSelect/index";
import ApplicationSettingsGlobalSelect from "../Shared/ApplicationSettingsGlobalSelect";
import ApplicationSettingsGlobalSelectTags from "../Shared/ApplicationSettingsGlobalSelectTags";
import {
    customFilterBoxStyles,
    options,
    customStyles,
} from "./../../utils/GlobalReactSelectData/AssetUse";
import { fakeTagData } from "../fake";
import { tagCustomStyle } from "./../../utils/reactSelectCustomSyle";
import { getLocal } from "./../../utils/localStorage";
import api from "../../api";

const FilterBox = () => {
    const [apiData, setApiData] = useState<any>([]);
    const labelClass = "text-[16px] text-[#101010] font-semibold";
    const label = "text-[16px] font-semibold text-[#000805]";
    const teamId = getLocal("team");
    const nandleOnChange = (e: any) => {
        console.log(e);
    };
    const handleFunnelChange = (e: any) => {
        console.log(e);
    };
    const handleContentChange = (e: any) => {
        console.log(e);
    };
    const handleProducttChange = (e: any) => {
        console.log(e);
    };

    const productToggle = getLocal("product-toggle");
    const tagToggle = getLocal("tag-toggle");
    const industryToggle = getLocal("industry-toggle");
    const regionToggle = getLocal("region-toggle");

    useEffect(() => {
        api.get(
            `https://oda-center.herokuapp.com/api/application-settings?team_id=${teamId.id}`
        ).then((res) => {
            setApiData(res?.data);
        });
    }, [teamId.id]);

    

    return (
        <>
            <div className=" flex flex-col gap-[10px]">
                {/* FUNNEL STAGE SELECT  */}
                <ApplicationSettingsGlobalSelect
                    name="funnel type Stgage"
                    onChangeFuction={nandleOnChange}
                    customStyles={tagCustomStyle}
                    typeFilter="funnel"
                    mapData={apiData}
                    isLabel={true}
                    labelClass={label}
                    label="Funnel Type Stages"
                    labelContainer=" mt-[20px]"
                    selectclass="mb-0"
                />

                {/* CONTENT TYPE STAGE  */}

                <ApplicationSettingsGlobalSelect
                    name="content type Stgage"
                    onChangeFuction={nandleOnChange}
                    customStyles={tagCustomStyle}
                    typeFilter="content"
                    mapData={apiData}
                    isLabel={true}
                    labelClass={label}
                    label="Content Type Stages"
                    labelContainer=" mt-[20px]"
                    selectclass="mb-0"
                />

                {/* PRODUCT TYPE STAGE  */}
                {productToggle === true && (
                    <ApplicationSettingsGlobalSelect
                        name="product type Stgage"
                        onChangeFuction={nandleOnChange}
                        customStyles={tagCustomStyle}
                        mapData={apiData}
                        typeFilter="product"
                        isLabel={true}
                        labelClass={label}
                        label="Product Type Stages"
                        labelContainer=" mt-[20px]"
                        selectclass="mb-0"
                    />
                )}
                {/* INDUSTRY TYPE STAGE  */}
                {industryToggle === true && (
                    <ApplicationSettingsGlobalSelect
                        name="industry type Stgage"
                        onChangeFuction={nandleOnChange}
                        customStyles={tagCustomStyle}
                        typeFilter="industry"
                        mapData={apiData}
                        isLabel={true}
                        labelClass={label}
                        label="Industry Type Stages"
                        labelContainer=" mt-[20px]"
                        selectclass="mb-0"
                    />
                )}
                {/* REGION TYPE STAGE  */}
                {regionToggle === true && (
                    <ApplicationSettingsGlobalSelect
                        name="region type Stgage"
                        onChangeFuction={nandleOnChange}
                        customStyles={tagCustomStyle}
                        typeFilter="region"
                        mapData={apiData}
                        isLabel={true}
                        labelClass={label}
                        label="Region Type Stages"
                        labelContainer=" mt-[20px]"
                        selectclass="mb-0"
                    />
                )}
                {/* TAG TYPE STATE filter tag */}
                {tagToggle === true && (
                    <ApplicationSettingsGlobalSelectTags
                        name="filter tags"
                        onChangeFuction={nandleOnChange}
                        customStyles={tagCustomStyle}
                        typeFilter="tags"
                        mapData={apiData}
                        isLabel={true}
                        labelClass={label}
                        label="Tags Type Stages"
                        labelContainer="mt-[20px]"
                        selectclass="mb-0"
                    />
                )}
            </div>
            <div className="flex flex-col gap-4 md:gap-0  md:flex-row justify-between mt-[38px] items-center">
                <div>
                    <h3 className="text-[16px] cursor-pointer underline  decoration-1 leading-[21.79px] font-semibold text-[#101010]  ">
                        Set default search filters...
                    </h3>
                </div>
                <div>
                    <button className="w-[69.63px] h-[38px] bg-[#222222] rounded-[4px] text-[16px] text-[#FFFFFF] font-medium	border border-solid border-[#222222] hover:bg-transparent hover:text-[#222222]	 transition duration-200 ease-in-out">
                        Reset
                    </button>
                    <button className="w-[69.63px] h-[38px] ml-[24px] bg-primary rounded-[4px] text-[16px] text-[#FFFFFF] font-medium border border-solid border-primary hover:bg-transparent hover:text-black	 transition duration-200 ease-in-out">
                        Find
                    </button>
                </div>
            </div>
        </>
    );
};

export default FilterBox;

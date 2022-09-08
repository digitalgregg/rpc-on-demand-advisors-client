import React from "react";
import {
    customStyles,
    options,
} from "../../utils/GlobalReactSelectData/AssetUse";
import { viewCustomStyles } from "../../utils/reactSelectCustomSyle";
import ContentTypeStage from "../ContentTypeStage";
import { fakeTagData } from "../fake";
import FunnelStage from "../FunnelStage";
import TagsSelect from "../TagsSelect";
import GlobalSelect from "./../GlobalSelect/index";
import { tagCustomStyle } from "./../../utils/reactSelectCustomSyle";
import { GetContentContext } from "../Context/ContentDataProvider";

const FilterFields = () => {
    const { contentData } = GetContentContext();

    const labelClass = "text-[16px] text-[#101010] font-semibold";
    const label = "text-[16px] font-semibold text-[#000805]";
    const handleAsetChange = (e: any) => {};
    const handleContentChange = (e: any) => {};
    const handleFunnelChange = (e: any) => {};

    const handleOnChange = (e: any) => {
        console.log(e);
    };
    const nandleTagOnChange = (e: any) => {
        console.log(e);
    };

    const assetUseOptions = [
        { value: "external", label: "External" },
        { value: "enternal", label: "Internal" },
    ];

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

            {/* asset and content type start */}
            <div className="sm:flex gap-[20px]">
                <div className="sm:w-[50%] h-auto mb-[20px] sm:mb-0">
                    <GlobalSelect
                        selectClassName="text-[14px] text-[#676767] pt-[10px]"
                        name="asset use"
                        isMulti={false}
                        options={assetUseOptions}
                        labelStyles={labelClass}
                        isLabel={true}
                        customStyles={customStyles}
                        labelName="Asset use"
                        handleOnChange={handleAsetChange}
                        placeholder="Select type"
                        optionHoverColor="#E519371A"
                    />
                </div>
                <div className="sm:w-[50%] h-auto">
                    <GlobalSelect
                        selectClassName="text-[14px] text-[#676767] pt-[10px]"
                        isMulti={false}
                        options={options}
                        labelStyles={labelClass}
                        isLabel={true}
                        customStyles={customStyles}
                        labelName="Content Type"
                        name="content type"
                        handleOnChange={handleContentChange}
                        placeholder="Select type"
                        optionHoverColor="#E519371A"
                    />
                </div>
            </div>
            {/* asset and content type end */}

            {/* funnel stage and short url  start */}
            <div className="sm:flex gap-[20px] mb-[20px] mt-[20px]">
                <div className="sm:w-[50%] h-auto mb-[20px] sm:mb-0">
                    <GlobalSelect
                        selectClassName="text-[14px]  text-[#676767] mt-[10px]"
                        name="funnel stgage"
                        isMulti={false}
                        options={options}
                        labelStyles={labelClass}
                        isLabel={true}
                        customStyles={customStyles}
                        labelName="Funnel Stage"
                        handleOnChange={handleFunnelChange}
                        placeholder="Select type"
                        optionHoverColor="#E519371A"
                    />
                </div>
                <div className="sm:w-[50%] h-auto">
                    <form action="">
                        <label htmlFor="url" className={labelClass}>
                            Short URL
                        </label>
                        <br />
                        <input
                            type="text"
                            name="url"
                            placeholder="https://loac.io/trpv"
                            className="text-[14px] text-[#676767] bg-white mt-[10px] h-[55px] border border-[#9E9E9E] rounded-[4px] w-full outline-0 px-[15px]"
                        />
                    </form>
                </div>
            </div>
            {/* funnel stage and short url  end */}
            <div className="mb-[25px]">
                <TagsSelect
                    name="filter tag"
                    onChangeFuction={nandleTagOnChange}
                    customStyles={tagCustomStyle}
                    mapData={fakeTagData}
                    isLabel={true}
                    labelClass={label}
                    label="Tags"
                    labelContainer="mb-[10px] "
                    selectclass="mb-[30px]"
                />
            </div>
        </div>
    );
};

export default FilterFields;

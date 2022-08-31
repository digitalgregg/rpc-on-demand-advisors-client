import React from "react";
import FunnelStage from "./../FunnelStage/index";
import ContentTypeStage from "./../ContentTypeStage/index";
import TagBadges from "./../CustomIcons/TagBadges";
import TagsSelect from "./../TagsSelect/index";
import GlobalSelect from "./../GlobalSelect/index";
import {
  customFilterBoxStyles,
  options,
  customStyles,
} from "./../../utils/GlobalReactSelectData/AssetUse";
import { fakeTagData } from "../fake";
import { tagCustomStyle } from "./../../utils/reactSelectCustomSyle";

const FilterBox = () => {
  const labelClass = "text-[16px] text-[#101010] font-semibold";
  const label = "text-[16px] font-semibold text-[#000805]";

  const nandleOnChange = (e: any) => {
    console.log(e);
  };
  const handleFunnelChange = (e: any) => {
    console.log(e);
  };
  const handleContentChange = (e: any) => {
    console.log(e);
  };
  return (
    <>
      {/* FUNNEL STAGE SELECT  */}
      <GlobalSelect
        selectClassName="text-[14px]  text-[#676767] mt-[10px]"
        name="filter funnelStgage"
        isMulti={true}
        options={options}
        labelStyles={labelClass}
        isLabel={true}
        customStyles={customStyles}
        labelName="Select Funnel Stages"
        handleOnChange={handleFunnelChange}
        placeholder="Select Funnel Stages"
        optionHoverColor="#E519371A"
      />

      {/* CONTENT TYPE STAGE  */}

      <div className="mt-[30px]">
        <GlobalSelect
          selectClassName="text-[14px]  text-[#676767] mt-[10px]"
          name="filter content Stgage"
          isMulti={true}
          options={options}
          labelStyles={labelClass}
          isLabel={true}
          customStyles={customStyles}
          labelName="Content Type Stages"
          handleOnChange={handleContentChange}
          placeholder="Select Content Stages"
          optionHoverColor="#E519371A"
        />
      </div>

      <TagsSelect
        name="filter tag"
        onChangeFuction={nandleOnChange}
        customStyles={tagCustomStyle}
        mapData={fakeTagData}
        isLabel={true}
        labelClass={label}
        label="Tags"
        labelContainer="mb-[10px] mt-[30px]"
        selectclass="mb-[30px]"
      />

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

import React from 'react';
import FunnelStage from './../FunnelStage/index';
import ContentTypeStage from './../ContentTypeStage/index';
import TagBadges from './../CustomIcons/TagBadges';
import TagsSelect from './../TagsSelect/index';

const FilterBox = () => {
  return (
    <>
      <FunnelStage />
      <ContentTypeStage />
      <TagsSelect />
      <div className="flex flex-col gap-4 md:gap-0  md:flex-row justify-between mt-[38px] items-center">
        <div><h3 className="text-[16px] cursor-pointer underline  decoration-1 leading-[21.79px] font-semibold text-[#101010]  ">Set default search filters...</h3></div>
        <div>
          <button className="w-[69.63px] h-[38px] bg-[#222222] rounded-[4px] text-[16px] text-[#FFFFFF] font-medium	">Reset</button>
          <button className="w-[69.63px] h-[38px] ml-[24px] bg-[#E51937] rounded-[4px] text-[16px] text-[#FFFFFF] font-medium	">Reset</button>
        </div>
      </div>
    </>
  );
};

export default FilterBox;
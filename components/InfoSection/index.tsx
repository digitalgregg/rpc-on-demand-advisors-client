import React from "react";
import { sharingData, additionalData , dateAdded} from "./../fake";
import classnames from "classnames";
import InfoSectionMobo from "./../InfoSectionMobo/index";

const InfoSection = () => {
  const pStyle = "sm:text-[#222222] text-[#4F4F4F] text-[14px] leading-[19.07px]  sm:block";
  return (
    <div className="sm:px-[10px]   sm:bg-[#FFFFFF] sm:pt-[16px] sm:pb-[16px]">
      <div className="hidden sm:block">
        <h3 className="font-semibold text-[18px] text-[#101010] mb-[10px] mt-[15px]">
          Sharing Info
        </h3>
        <div className="grid grid-cols-3 h-[40px] rounded-[4px] bg-[#191919] text-[#FFFFFF] items-center px-[11px]  font-semibold">
          <p className="text-[14px]">Recipient Name</p>
          <p className="text-[14px]">Last Viewed</p>
          <p className="text-[14px]">Views</p>
        </div>

        {sharingData.map((item: any) => (
          <div key={item.id}>
            <div className="grid grid-cols-3 mt-[15px] px-[11px]">
              <p className={pStyle}>{item.recipent}</p>
              <p className={pStyle}>{item.lastView}</p>
              <p className={pStyle}>{item.view}</p>
            </div>
            <hr className="divider" />
          </div>
        ))}

        {/* additionl info start */}
        <h3 className="font-semibold text-[18px] text-[#101010] mb-[10px] mt-[15px]">
          Additional Info
        </h3>
        <div className="grid grid-cols-3 h-[40px] rounded-[4px] bg-[#191919] text-[#FFFFFF] items-center px-[11px]  font-semibold">
          <p className="text-[14px]">Recipient Name</p>
          <p className="text-[14px]">Last Viewed</p>
          <p className="text-[14px]">Views</p>
        </div>

        {sharingData.map((item: any) => (
          <div key={item.id}>
            <div className="grid grid-cols-3 mt-[15px] px-[11px]">
              <p className={pStyle}>{item.recipent}</p>
              <p className={pStyle}>{item.lastView}</p>
              <p className={pStyle}>{item.view}</p>
            </div>
            <hr className="divider" />
          </div>
        ))}
        {/* additionl info end */}
        <div className="grid grid-cols-3 h-[40px] rounded-[4px] bg-[#191919] text-[#FFFFFF] items-center px-[11px]  font-semibold">
          <p className="text-[14px] col-span-2">Date added</p>
          <p className="text-[14px]">Last updated</p>
        </div>

        {dateAdded.map((item: any) => (
          <div key={item.id}>
            <div className="grid grid-cols-3 mt-[15px] px-[11px]">
              <p className={classnames(pStyle, "col-span-2")}>{item.fileName}</p>
              <p className={classnames(pStyle, "col-span-1")}>
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="sm:hidden">
        <InfoSectionMobo />
      </div>
    </div>
  );
};

export default InfoSection;

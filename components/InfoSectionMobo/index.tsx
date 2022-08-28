import React from "react";
import { sharingData, additionalData, dateAdded } from "./../fake";

const InfoSectionMobo = () => {
  const h3Style = " text-[14px] text-[#4F4F4F] font-semibold";
  const pStyle = "text-[14px] text-[#4F4F4F]";
  return (
    <div className="">
      <h3 className="font-semibold text-[18px] text-[#101010] mb-[16px] mt-[15px] ">
        Sharing Info
      </h3>

      {sharingData.map((item: any) => (
        <>
          <div className="bg-[#f1f1f1] rounded-[4px] px-[14px] py-[15px] mb-[16px] ">
            {/* <h3 className="block w-full ">adfa <span className="ml-4">asdfasdfasd</span></h3> */}
            <div className="grid grid-cols-2 ">
              <h3 className={h3Style}>Recipient Naame</h3>
              <p className={pStyle}>{item.recipent}</p>
            </div>
            <hr className="divider2" />
            <div className="grid grid-cols-2 ">
              <h3 className={h3Style}>Last viewed</h3>
              <p className={pStyle}>{item.lastView}</p>
            </div>
            <hr className="divider2" />
            <div className="grid grid-cols-2 ">
              <h3 className={h3Style}>Views</h3>
              <p className={pStyle}>{item.view}</p>
            </div>
          </div>
        </>
      ))}

      {/* start addintional info  */}
      <h3 className="font-semibold text-[18px] text-[#101010] mb-[16px] mt-[15px] ">
        Additional Info
      </h3>

      {additionalData.map((item: any) => (
        <>
          <div className="bg-[#f1f1f1] rounded-[4px] px-[14px] py-[15px] mb-[16px] ">
            {/* <h3 className="block w-full ">adfa <span className="ml-4">asdfasdfasd</span></h3> */}
            <div className="grid grid-cols-2 ">
              <h3 className={h3Style}>File Name</h3>
              <p className={pStyle}>{item.fileName}</p>
            </div>
            <hr className="divider2" />
            <div className="grid grid-cols-2 ">
              <h3 className={h3Style}>Resolution</h3>
              <p className={pStyle}>{item.resolution}</p>
            </div>
            <hr className="divider2" />
            <div className="grid grid-cols-2 ">
              <h3 className={h3Style}>Is Shared</h3>
              <p className={pStyle}>{item.isShared}</p>
            </div>
          </div>
        </>
      ))}
      {/* Date added section  */}
      <div className="bg-[#f1f1f1] rounded-[4px] px-[14px] py-[15px] mb-[16px] ">
        <div className="grid grid-cols-2 ">
          <h3 className={h3Style}>Date Added</h3>
          <p className={pStyle}>Read me.pdf</p>
        </div>
        <hr className="divider2" />
        <div className="grid grid-cols-2 ">
          <h3 className={h3Style}>Last Updated</h3>
          <p className={pStyle}>31/07/2022 10:36 am</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSectionMobo;

import React from "react";

const DetailsInput = () => {
    const labelStyle = "text-[16px] font-semibold leading-[21.79px] text-[#000805] ";
  return (
    <div className="w-full">
      <h3 className="text-[24px] font-semibold text-[#000805] flex items-center gap-[13px] mb-[20px]">
        <img src="/img/backArrow.svg" alt="arrow" className="cursor-pointer" /> <span>Details</span>
      </h3>

      <label htmlFor="title"><span className={labelStyle}>Title</span></label>
      <br />
      <input
        type="text"
        name="title"
        defaultValue="content dynamic value"
        className="w-full border bg-white border-[#9E9E9E] outline-0 rounded-[4px] px-[15px] h-[55px] text-[#676767] text-[14px] mt-[10px] mb-[20px]"
      />
      <label htmlFor="description"><span className={labelStyle}>Description</span></label>
      <textarea className="w-full bg-white h-[150px] border border-[#9E9E9E] rounded-[4px] mt-[10px] outline-0 px-[15px] text-[14px] text-[#676767] leading-[19.07px] py-[18px]"></textarea>
    </div>
  );
};

export default DetailsInput;

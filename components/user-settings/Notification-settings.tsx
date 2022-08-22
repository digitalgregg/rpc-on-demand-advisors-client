import React, { useState } from "react";
import ToggleButton from "../Shared/ToggleButton";

const NotificationSettings = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <div className="bg-[#FFFFFF] p-[20px]">
      <h3 className="text-semibold text-[18px] leading-[25px] mb-[26px] text-[#000000]">
        Notification Settings
      </h3>
      <div className="flex border border-[#9E9E9E] xs:px-[18px] xs:py-[16px] 3xl:px-[15px] 3xl:py-[24.5px] w-[100%] items-center mb-[26px] rounded-[8px]">
        <h4 className="flex-1 font-normal text-[16px]">Web notification</h4>
        <ToggleButton toggle={toggle} handleToggle={handleToggle} />
      </div>
      <div className="flex border border-[#9E9E9E] xs:px-[18px] xs:py-[16px] 3xl:px-[15px] 3xl:py-[24.5px] w-[100%] items-center rounded-[8px]">
        <h4 className="flex-1 font-normal text-[16px]">Email notification</h4>
        <ToggleButton toggle={toggle} handleToggle={handleToggle} />
      </div>
    </div>
  );
};

export default NotificationSettings;
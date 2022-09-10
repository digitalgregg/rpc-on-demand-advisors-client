import React, { useState } from "react";
import ToggleButton from "../Shared/ToggleButton";

const NotificationSettings = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const handleToggle2 = () => setToggle2(!toggle2);
  
  return (
    <div className="bg-[#FFFFFF] p-[20px] rounded-[4px]">
      <h3 className="text-semibold text-[18px] leading-[25px] mb-[26px] text-[#000000]">
        Notification Settings
      </h3>
      <div className="flex border border-[#9E9E9E] xs:px-[18px] xs:py-[16px] 3xl:px-[15px] 3xl:py-[24.5px] w-[100%] items-center mb-[26px] rounded-[8px]">
        <h4 className="flex-1 font-normal text-[16px] text-[#000000]">Web notification</h4>
        <ToggleButton toggle={toggle} handleToggle={handleToggle} className={`${!toggle && "bg-[#DEDEDE]"} before:bg-White before:shadow-[0px_2px_4px_rgba(0,0,0,0.25)]`}/>
      </div>
      <div className="flex border border-[#9E9E9E] xs:px-[18px] xs:py-[16px] 3xl:px-[15px] 3xl:py-[24.5px] w-[100%] items-center rounded-[8px]">
        <h4 className="flex-1 font-normal text-[16px] text-[#000000]">Email notification</h4>
        <ToggleButton toggle={toggle2} handleToggle={handleToggle2} className={`${!toggle2 && "bg-[#DEDEDE]"} before:bg-White before:shadow-[0px_2px_4px_rgba(0,0,0,0.25)]`}/>
      </div>
    </div>
  );
};

export default NotificationSettings;

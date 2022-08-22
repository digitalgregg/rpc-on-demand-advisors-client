import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const RecycleBin = (props:IconType) => {
  return (
    <CustomIcon
    {...props}
      svg={({color}) => (
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 8.02128L16 23H3L1.5 8.02128H15.5M17.5 8.02128H18.5L19 5.68085L13 4.3592M17.5 8.02128H15.5M5.5 9.89362L6 21.5957M15.5 8.02128L2.5 5.08364M2.5 5.08364L1 4.74468L2 1.93617L7 3.03755M2.5 5.08364V6.61702M7 3.03755L7.5 1L13.5 2.40426L13 4.3592M7 3.03755L13 4.3592M13.5 9.89362L13 21.5957M9.5 9.89362V21.5957" stroke={color}/>
        </svg>
        
      )}
    ></CustomIcon>
  );
};

export default RecycleBin;

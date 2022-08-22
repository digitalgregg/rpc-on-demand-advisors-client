import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const DownloadIcon = (props:IconType) => {
  return (
    <CustomIcon
    {...props}
      svg={({stroke,color}) => (
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4.5V10H13V4.5M7 0V7M4 4.5L7 7.5L10 4.5" stroke={stroke}/>
        </svg>
        
        
        
        
      )}
    ></CustomIcon>
  );
};

export default DownloadIcon;

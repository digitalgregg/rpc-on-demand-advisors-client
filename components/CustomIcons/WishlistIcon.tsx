import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const WishlistIcon = (props:IconType) => {
  return (
    <CustomIcon
    {...props}
      svg={({color}) => (
        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 19H1V1H15V9" stroke={color}/>
        <path d="M6 6H13" stroke={color}/>
        <path d="M6 10H13" stroke={color}/>
        <path d="M6 14H10" stroke={color}/>
        <circle cx="4" cy="6" r="0.5" fill={color} stroke={color}/>
        <circle cx="4" cy="10" r="0.5" fill={color} stroke={color}/>
        <circle cx="4" cy="14" r="0.5" fill={color} stroke={color}/>
        <path d="M15 10V12" stroke={color}/>
        <path d="M19.306 13.7073C19.0861 13.483 18.825 13.3052 18.5376 13.1838C18.2502 13.0625 17.9422 13 17.6311 13C17.3201 13 17.012 13.0625 16.7247 13.1838C16.4373 13.3052 16.1762 13.483 15.9563 13.7073L15.4999 14.1724L15.0435 13.7073C14.5993 13.2546 13.9968 13.0002 13.3686 13.0002C12.7404 13.0002 12.138 13.2546 11.6938 13.7073C11.2496 14.16 11 14.7739 11 15.4142C11 16.0544 11.2496 16.6684 11.6938 17.1211L12.1501 17.5862L15.4999 21L18.8496 17.5862L19.306 17.1211C19.526 16.897 19.7006 16.6309 19.8196 16.338C19.9387 16.0451 20 15.7312 20 15.4142C20 15.0971 19.9387 14.7832 19.8196 14.4903C19.7006 14.1975 19.526 13.9314 19.306 13.7073Z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
      )}
    ></CustomIcon>
  );
};

export default WishlistIcon;

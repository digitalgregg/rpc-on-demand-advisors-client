import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const TagBadges = (props:IconType) => {
  return (
    <CustomIcon
    {...props}
      svg={({color}) => (
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 0.5H0V12.5H14L10 6.5L14 0.5Z" fill={color} />
        </svg>
      )}
    ></CustomIcon>
  );
};

export default TagBadges;

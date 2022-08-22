import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const TagIcon = (props:IconType) => {
  return (
    <CustomIcon
    {...props}
      svg={({stroke,color}) => (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 6L1.5 1.5L6 1L13 8L8 13L1 6Z" stroke={stroke}/>
        <path d="M6 4.5C6 5.32843 5.32843 6 4.5 6C3.67157 6 3 5.32843 3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5Z" stroke={stroke}/>
        </svg>
        
        
      )}
    ></CustomIcon>
  );
};

export default TagIcon;

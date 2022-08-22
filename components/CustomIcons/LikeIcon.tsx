import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const LikeIcon = (props:IconType) => {
  return (
    <CustomIcon
    {...props}
      svg={({stroke,color}) => (
        <svg width="19" height="19" viewBox="0 0 19 19" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M4.61429 18.25H1.25V8.29545H4.61429H5.13919L5.31894 7.80229L7.5249 1.75H9.72335L9.52189 7.51928L9.49478 8.29545H10.2714H17.6077L15.8696 18.25H4.61429Z" stroke={stroke} strokeWidth="1.5"/>
        </svg>
        
      )}
    ></CustomIcon>
  );
};

export default LikeIcon;

import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const EditIcon = (props:IconType) => {
  return (
    <CustomIcon
    {...props}
      svg={({stroke,color}) => (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 13H3.30769M3.30769 13H1V10.6L8.18601 3.12654M3.30769 13L10.4937 5.52655M8.18601 3.12654L10.2308 1L12.5385 3.4L10.4937 5.52655M8.18601 3.12654L10.4937 5.52655" stroke={stroke}/>
        </svg>
        
        
      )}
    ></CustomIcon>
  );
};

export default EditIcon;

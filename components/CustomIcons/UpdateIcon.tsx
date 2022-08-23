import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const UpdateIcon = (props:IconType) => {
  return (
    <CustomIcon
    {...props}
      svg={({stroke,color}) => (
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.29341 6.14666C2.70139 4.89045 3.51249 3.80396 4.6009 3.0557C5.68931 2.30744 6.99421 1.93923 8.31321 2.00818C9.63221 2.07713 10.8916 2.57938 11.8961 3.43704C12.9005 4.2947 13.5939 5.45983 13.8687 6.75174" stroke={stroke}/>
<path d="M2 2V6H5.5" stroke={stroke}/>
<path d="M13.7066 9.85334C13.2986 11.1096 12.4875 12.196 11.3991 12.9443C10.3107 13.6926 9.00579 14.0608 7.68679 13.9918C6.36779 13.9229 5.10839 13.4206 4.10393 12.563C3.09946 11.7053 2.40607 10.5402 2.13128 9.24826" stroke={stroke}/>
<path d="M14 14L14 10L10.5 10" stroke={stroke}/>
</svg>

        
        
      )}
    ></CustomIcon>
  );
};

export default UpdateIcon;

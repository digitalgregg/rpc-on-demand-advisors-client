import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const FavouriteIcon = (props:IconType) => {
  return (
    <CustomIcon
    {...props}
      svg={({stroke,color}) => (
        <svg width="19" height="19" viewBox="0 0 19 19" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5164 9.90521L16.5158 9.90592L15.8038 10.7137L9.5002 17.8655L3.19878 10.7112L3.19777 10.71L2.48599 9.90521C2.48596 9.90518 2.48593 9.90515 2.4859 9.90511C2.48586 9.90507 2.48582 9.90502 2.48578 9.90498C1.67096 8.98274 1.25 7.75487 1.25 6.50802C1.25 5.26107 1.67103 4.0331 2.48599 3.11084L2.48693 3.10977C4.0829 1.29674 6.62908 1.29674 8.22506 3.10977L8.22537 3.11012L8.93736 3.91791L9.5 4.55626L10.0626 3.91791L10.7746 3.11012C12.3731 1.29663 14.9174 1.29663 16.5158 3.11012L16.5164 3.11083C17.3308 4.03249 17.75 5.26017 17.75 6.50802C17.75 7.75588 17.3308 8.98356 16.5164 9.90521Z" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10"/>
        </svg>
        
      )}
    ></CustomIcon>
  );
};

export default FavouriteIcon;

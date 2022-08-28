import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const Logout = (props:IconType) => {
  return (
    <CustomIcon
    {...props}
      svg={({color}) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.65234 7.69565V1H23.0002M23.0002 1V20.1304L14.8697 23V20.1304M23.0002 1L14.8697 3.3913V20.1304M14.8697 20.1304H8.65234V12.9565" stroke={color}/>
<path d="M0.646447 10.2114C0.451184 10.4067 0.451184 10.7232 0.646447 10.9185L3.82843 14.1005C4.02369 14.2957 4.34027 14.2957 4.53553 14.1005C4.7308 13.9052 4.7308 13.5886 4.53553 13.3934L1.70711 10.5649L4.53553 7.73651C4.7308 7.54125 4.7308 7.22467 4.53553 7.02941C4.34027 6.83415 4.02369 6.83415 3.82843 7.02941L0.646447 10.2114ZM10.5652 10.0649H1V11.0649H10.5652V10.0649Z" fill={color}/>
</svg>

      )}
    ></CustomIcon>
  );
};

export default Logout;

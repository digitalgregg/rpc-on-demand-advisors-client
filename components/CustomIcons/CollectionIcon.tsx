import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const CollectionIcon = (props: IconType) => {
  return (
    <CustomIcon
      {...props}
      svg={({ color, width, height }) => (
        <svg
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.0008 12C23.9928 11.8974 23.9569 11.7989 23.897 11.7152C23.8371 11.6314 23.7554 11.5657 23.6608 11.525C23.5508 11.5 23.1108 11.5 21.0008 11.5C21.0008 3.365 21.0608 3.855 20.8558 3.645C17.7108 0.5 17.7958 0.5 17.5008 0.5H8.50084C8.36823 0.5 8.24106 0.552678 8.14729 0.646447C8.05352 0.740215 8.00084 0.867392 8.00084 1V2H5.50084C5.36823 2 5.24106 2.05268 5.14729 2.14645C5.05352 2.24021 5.00084 2.36739 5.00084 2.5V4H0.500842C0.368234 4 0.241057 4.05268 0.147289 4.14645C0.0535207 4.24021 0.000842279 4.36739 0.000842279 4.5C0.000842279 22.3 -0.169158 21.28 0.325842 21.465C0.460842 21.515 20.5058 21.53 20.6758 21.465C20.788 21.4206 20.8804 21.3371 20.9358 21.23C21.0008 21.155 24.0008 12.15 24.0008 12ZM20.1408 20.5H1.19584L3.86084 12.5H22.8058L20.1408 20.5ZM18.0008 2.205L19.2958 3.5H18.0008V2.205ZM9.00084 1.5H17.0008V4C17.0008 4.13261 17.0535 4.25979 17.1473 4.35355C17.2411 4.44732 17.3682 4.5 17.5008 4.5H20.0008V11.5H9.00084V1.5ZM6.00084 3H8.00084V11.5H6.00084V3ZM5.00084 5V11.5C3.44084 11.5 3.17084 11.41 3.02584 11.84L1.00084 17.92V5H5.00084Z"
            fill={`${color}`}
          />
        </svg>
      )}
    ></CustomIcon>
  );
};

export default CollectionIcon;

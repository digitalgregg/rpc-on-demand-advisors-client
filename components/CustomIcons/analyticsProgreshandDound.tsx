import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const AnalyticsProgreshandDound = (props: IconType) => {
    return (
        <CustomIcon
            {...props}
            svg={({ color }) => (
                <svg
                    width="8"
                    height="5"
                    viewBox="0 0 8 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M4 0.5L8 4.5L0 4.5L4 0.5Z" fill={color} />
                </svg>
            )}
        ></CustomIcon>
    );
};

export default AnalyticsProgreshandDound;

import React from "react";
import CustomIcon from "./CustomIcon";
import { IconType } from "./CustomIcon";

function PaymentIcon(props: IconType) {
    return (
        <CustomIcon
            {...props}
            svg={({ width, height, color }) => (
                <svg
                    width={width}
                    height={height}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM1 10h22"
                        stroke={color}
                        strokeWidth={1.33}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        />
    );
}

export default PaymentIcon;

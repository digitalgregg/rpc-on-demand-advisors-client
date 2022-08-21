import React from "react";
import CustomIcon from "./CustomIcon";
import { IconType } from "./CustomIcon";

type CheckboxType = {
    isChecked: boolean;
};

function CheckBox(props: CheckboxType & IconType) {
    return (
        <CustomIcon
            {...props}
            svg={({ width, height, color }) => (
                <svg
                    width={width}
                    height={height}
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 1H4a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3Z"
                        stroke={color}
                        strokeWidth={2}
                    />
                    <path
                        d="M20 0H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Z"
                        fill={props.isChecked ? color : "none"}
                    />
                    <path
                        d="M10.25 14.647 17.833 7 19 8.176 10.25 17 5 11.706l1.166-1.176 4.084 4.117Z"
                        fill={props.isChecked ? "#fff" : "none"}
                    />
                </svg>
            )}
        />
    );
}

CheckBox.defaultProps = {
    isChecked: true,
    color: "#E51937",
};

export default CheckBox;

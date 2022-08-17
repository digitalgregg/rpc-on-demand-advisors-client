import React from "react";

type CustomIconsType = {
    name: "plan" | "payment";
    height?: number;
    width?: number;
    color?: string;
};

function CustomIcons({ name, height, width, color }: CustomIconsType) {
    return <div>CustomIcons</div>;
}

CustomIcons.defaultProps = {
    height: 24,
    width: 24,
    color: "#000",
};

export default CustomIcons;

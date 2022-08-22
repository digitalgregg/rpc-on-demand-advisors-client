import React, { ReactNode } from "react";

export type IconType = {
    height?: number | string;
    width?: number | string;
    color?: string;
    stroke?: string;
};

function CustomIcon({
    width,
    height,
    color,
    stroke,
    svg,
}: {
    svg: ({ width, height, color }: IconType) => ReactNode;
    height: number | string;
    width: number | string;
    color: string;
    stroke: string;
}) {
    return <>{svg({ width, height, color, stroke })}</>;
}

CustomIcon.defaultProps = {
    height: 24,
    width: 24,
    color: "#000",
    stroke: "#222222"
};

export default CustomIcon;

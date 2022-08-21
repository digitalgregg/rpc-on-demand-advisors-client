import React, { ReactNode } from "react";

export type IconType = {
    height?: number | string;
    width?: number | string;
    color?: string;
};

function CustomIcon({
    width,
    height,
    color,
    svg,
}: {
    svg: ({ width, height, color }: IconType) => ReactNode;
    height: number | string;
    width: number | string;
    color: string;
}) {
    return <>{svg({ width, height, color })}</>;
}

CustomIcon.defaultProps = {
    height: 24,
    width: 24,
    color: "#000",
};

export default CustomIcon;

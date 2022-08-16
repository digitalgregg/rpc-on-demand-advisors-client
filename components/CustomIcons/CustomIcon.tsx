import React, { ReactNode } from "react";

export type IconType = {
    height?: number;
    width?: number;
    color?: string;
};

function CustomIcon({
    width,
    height,
    color,
    svg,
}: {
    svg: ({ width, height, color }: IconType) => ReactNode;
    height: number;
    width: number;
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

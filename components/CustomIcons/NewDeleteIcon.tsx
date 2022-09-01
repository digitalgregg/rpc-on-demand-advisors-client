import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

function NewDeleteIcon(props: IconType) {
    return (
        <CustomIcon
            {...props}
            svg={({ width, height, stroke }) => (
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2 4.97059H3.66667M14 4.97059H12.3333M12.3333 4.97059L11.6667 14.5H4.66667L3.66667 4.97059M12.3333 4.97059H11M3.66667 4.97059H5M5 4.97059V2.5H11V4.97059M5 4.97059H11"
                        stroke={stroke}
                    />
                </svg>
            )}
        />
    );
}

export default NewDeleteIcon;

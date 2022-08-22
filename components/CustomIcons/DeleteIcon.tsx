import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const DeleteIcon = (props: IconType) => {
    return (
        <CustomIcon
            {...props}
            svg={({ stroke, color, width, height }) => (
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 3.47059H1.66667M12 3.47059H10.3333M10.3333 3.47059L9.66667 13H2.66667L1.66667 3.47059M10.3333 3.47059H9M1.66667 3.47059H3M3 3.47059V1H9V3.47059M3 3.47059H9"
                        stroke={stroke}
                    />
                </svg>
            )}
        ></CustomIcon>
    );
};

export default DeleteIcon;

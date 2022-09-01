import React from "react";
import CustomIcon from "./CustomIcon";
import { IconType } from "./CustomIcon";

function NewEditIcon(props: IconType) {
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
                        d="M14 14.5H4.30769M4.30769 14.5H2V12.1L9.18601 4.62654M4.30769 14.5L11.4937 7.02655M9.18601 4.62654L11.2308 2.5L13.5385 4.9L11.4937 7.02655M9.18601 4.62654L11.4937 7.02655"
                        stroke={stroke}
                    />
                </svg>
            )}
        />
    );
}

export default NewEditIcon;

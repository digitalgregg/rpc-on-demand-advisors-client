import React from "react";
import { IconType } from "./CustomIcon";
import CustomIcon from "./CustomIcon";

function CopyIcon(props: IconType) {
    return (
        <CustomIcon
            {...props}
            svg={({ height, width, stroke, color }) => (
                <svg
                    width={width}
                    height={height}
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13.3333 6.5H7.33333C6.59695 6.5 6 7.09695 6 7.83333V13.8333C6 14.5697 6.59695 15.1667 7.33333 15.1667H13.3333C14.0697 15.1667 14.6667 14.5697 14.6667 13.8333V7.83333C14.6667 7.09695 14.0697 6.5 13.3333 6.5Z"
                        stroke={stroke}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M3.33203 10.5002H2.66536C2.31174 10.5002 1.9726 10.3597 1.72256 10.1096C1.47251 9.85959 1.33203 9.52045 1.33203 9.16683V3.16683C1.33203 2.81321 1.47251 2.47407 1.72256 2.22402C1.9726 1.97397 2.31174 1.8335 2.66536 1.8335H8.66536C9.01899 1.8335 9.35813 1.97397 9.60817 2.22402C9.85822 2.47407 9.9987 2.81321 9.9987 3.16683V3.8335"
                        stroke={stroke}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        />
    );
}

export default CopyIcon;

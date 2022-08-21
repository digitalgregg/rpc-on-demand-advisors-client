import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";
const MeetIcon = (props: IconType) => {
    return (
        <>
            <CustomIcon
                {...props}
                svg={({ width, height, color }) => (
                    <svg
                        width={width}
                        height={height}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.59091 14.5025H4.13637V8.32072L2.46956 5.41016L0.5 5.59344V13.4116C0.5 14.0143 0.988187 14.5025 1.59091 14.5025Z"
                            fill="#0085F7"
                        />
                        <path
                            d="M12.8633 14.5025H15.4088C16.0115 14.5025 16.4997 14.0143 16.4997 13.4116V5.59344L14.5329 5.41016L12.8633 8.32072V14.5025H12.8633Z"
                            fill="#00A94B"
                        />
                        <path
                            d="M12.8644 3.59384L11.3691 6.44706L12.8644 8.32112L16.5007 5.59384V4.13931C16.5007 2.79112 14.9616 2.02112 13.8825 2.83021L12.8644 3.59384Z"
                            fill="#FFBC00"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.13572 8.32103L2.71094 5.31134L4.13572 3.59375L8.49934 6.86647L12.863 3.59375V8.32103L8.49934 11.5938L4.13572 8.32103Z"
                            fill="#FF4131"
                        />
                        <path
                            d="M0.5 4.13931V5.59384L4.13637 8.32112V3.59384L3.11819 2.83021C2.03909 2.02112 0.5 2.79112 0.5 4.13931H0.5Z"
                            fill="#E51C19"
                        />
                    </svg>
                )}
            />
        </>
    );
};

export default MeetIcon;

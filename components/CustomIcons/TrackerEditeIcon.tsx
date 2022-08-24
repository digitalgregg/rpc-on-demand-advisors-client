import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";
const TrackerEditeIcon = (props: IconType) => {
    return (
        <>
            <CustomIcon
                {...props}
                svg={({ width, height, color }) => (
                    <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15.988 0L18.988 3L16.701 5.288L13.701 2.288L15.988 0ZM5 13.988H8L15.287 6.701L12.287 3.701L5 10.988V13.988Z"
                            fill="black"
                        />
                        <path
                            d="M16 16.9883H5.158C5.132 16.9883 5.105 16.9983 5.079 16.9983C5.046 16.9983 5.013 16.9893 4.979 16.9883H2V2.98828H8.847L10.847 0.988281H2C0.897 0.988281 0 1.88428 0 2.98828V16.9883C0 18.0923 0.897 18.9883 2 18.9883H16C16.5304 18.9883 17.0391 18.7776 17.4142 18.4025C17.7893 18.0274 18 17.5187 18 16.9883V8.32028L16 10.3203V16.9883Z"
                            fill="black"
                        />
                    </svg>
                )}
            />
        </>
    );
};

export default TrackerEditeIcon;

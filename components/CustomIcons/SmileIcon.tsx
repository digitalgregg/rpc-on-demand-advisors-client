import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";
const SmileIcon = (props: IconType) => {
    return (
        <CustomIcon
            {...props}
            svg={({ width, height, color }) => (
                <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.4985 28.1222C12.0179 28.1222 8.67982 26.7395 6.21865 24.2783C3.75748 21.8172 2.37481 18.4791 2.37481 14.9985C2.37481 11.5179 3.75748 8.17982 6.21865 5.71865C8.67982 3.25748 12.0179 1.87481 15.4985 1.87481C18.9791 1.87481 22.3172 3.25748 24.7783 5.71865C27.2395 8.17982 28.6222 11.5179 28.6222 14.9985C28.6222 18.4791 27.2395 21.8172 24.7783 24.2783C22.3172 26.7395 18.9791 28.1222 15.4985 28.1222ZM15.4985 29.997C19.4763 29.997 23.2913 28.4168 26.104 25.604C28.9168 22.7913 30.497 18.9763 30.497 14.9985C30.497 11.0206 28.9168 7.20572 26.104 4.39296C23.2913 1.58019 19.4763 0 15.4985 0C11.5206 0 7.70572 1.58019 4.89296 4.39296C2.08019 7.20572 0.5 11.0206 0.5 14.9985C0.5 18.9763 2.08019 22.7913 4.89296 25.604C7.70572 28.4168 11.5206 29.997 15.4985 29.997Z"
                        fill={color}
                    />
                    <path
                        d="M8.53357 17.9363C8.74887 17.812 9.00474 17.7783 9.24487 17.8427C9.48501 17.907 9.68976 18.0641 9.81407 18.2794C10.3898 19.2775 11.2184 20.1062 12.2163 20.6822C13.2142 21.2581 14.3463 21.561 15.4985 21.5603C16.6507 21.561 17.7828 21.2581 18.7807 20.6822C19.7786 20.1062 20.6072 19.2775 21.1829 18.2794C21.244 18.172 21.3258 18.0776 21.4235 18.0019C21.5212 17.9261 21.6329 17.8705 21.7522 17.8381C21.8715 17.8057 21.9961 17.7972 22.1187 17.8132C22.2413 17.8291 22.3595 17.8691 22.4665 17.9309C22.5736 17.9927 22.6674 18.0751 22.7425 18.1733C22.8176 18.2715 22.8725 18.3836 22.9041 18.5031C22.9357 18.6227 22.9433 18.7472 22.9266 18.8697C22.9099 18.9922 22.869 19.1102 22.8065 19.2168C22.0662 20.4999 21.001 21.5653 19.7181 22.3058C18.4351 23.0463 16.9798 23.4358 15.4985 23.4352C14.0172 23.4358 12.5619 23.0463 11.2789 22.3058C9.99602 21.5653 8.9308 20.4999 8.19048 19.2168C8.06618 19.0015 8.03249 18.7457 8.09684 18.5055C8.16118 18.2654 8.31827 18.0606 8.53357 17.9363ZM13.6237 12.1863C13.6237 13.7386 12.7838 14.9985 11.7489 14.9985C10.714 14.9985 9.87406 13.7386 9.87406 12.1863C9.87406 10.6339 10.714 9.37406 11.7489 9.37406C12.7838 9.37406 13.6237 10.6339 13.6237 12.1863ZM21.1229 12.1863C21.1229 13.7386 20.283 14.9985 19.2481 14.9985C18.2132 14.9985 17.3733 13.7386 17.3733 12.1863C17.3733 10.6339 18.2132 9.37406 19.2481 9.37406C20.283 9.37406 21.1229 10.6339 21.1229 12.1863Z"
                        fill={color}
                    />
                </svg>
            )}
        />
    );
};

export default SmileIcon;

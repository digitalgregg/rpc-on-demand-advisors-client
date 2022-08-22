import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const HappyIcon = (props: IconType) => {
    return (
        <CustomIcon
            {...props}
            svg={({ width, height, color }) => (
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.0024 28.1222C11.5218 28.1222 8.18373 26.7395 5.72256 24.2783C3.26139 21.8172 1.87872 18.4791 1.87872 14.9985C1.87872 11.5179 3.26139 8.17982 5.72256 5.71865C8.18373 3.25748 11.5218 1.87481 15.0024 1.87481C18.483 1.87481 21.8211 3.25748 24.2823 5.71865C26.7434 8.17982 28.1261 11.5179 28.1261 14.9985C28.1261 18.4791 26.7434 21.8172 24.2823 24.2783C21.8211 26.7395 18.483 28.1222 15.0024 28.1222ZM15.0024 29.997C18.9803 29.997 22.7952 28.4168 25.6079 25.604C28.4207 22.7913 30.0009 18.9763 30.0009 14.9985C30.0009 11.0206 28.4207 7.20572 25.6079 4.39296C22.7952 1.58019 18.9803 0 15.0024 0C11.0246 0 7.20963 1.58019 4.39687 4.39296C1.5841 7.20572 0.00390625 11.0206 0.00390625 14.9985C0.00390625 18.9763 1.5841 22.7913 4.39687 25.604C7.20963 28.4168 11.0246 29.997 15.0024 29.997Z"
                        fill={color}
                    />
                    <path
                        d="M23.1222 17.8107C23.2868 18.0957 23.3734 18.419 23.3734 18.7481C23.3734 19.0772 23.2868 19.4005 23.1222 19.6855C22.2996 21.1111 21.1161 22.2948 19.6907 23.1176C18.2652 23.9404 16.6483 24.3732 15.0024 24.3726C13.3569 24.3729 11.7403 23.9399 10.3152 23.1171C8.89016 22.2943 7.7069 21.1108 6.88447 19.6855C6.72 19.4007 6.63337 19.0775 6.63329 18.7486C6.63321 18.4197 6.71967 18.0965 6.88399 17.8116C7.04831 17.5266 7.28471 17.2899 7.56945 17.1252C7.85419 16.9605 8.17725 16.8736 8.50618 16.8733H21.4986C21.8277 16.8733 22.151 16.96 22.436 17.1245C22.721 17.289 22.9577 17.5257 23.1222 17.8107ZM13.1276 12.1863C13.1276 13.7386 12.2877 12.1863 11.2528 12.1863C10.2179 12.1863 9.37797 13.7386 9.37797 12.1863C9.37797 10.6339 10.2179 9.37406 11.2528 9.37406C12.2877 9.37406 13.1276 10.6339 13.1276 12.1863ZM20.6268 12.1863C20.6268 13.7386 19.7869 12.1863 18.752 12.1863C17.7171 12.1863 16.8772 13.7386 16.8772 12.1863C16.8772 10.6339 17.7171 9.37406 18.752 9.37406C19.7869 9.37406 20.6268 10.6339 20.6268 12.1863Z"
                        fill={color}
                    />
                </svg>
            )}
        />
    );
};

export default HappyIcon;
import React from "react";
import CustomIcon, { IconType } from "./CustomIcon";

const NormalIcon = (props: IconType) => {
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
                        d="M10.5009 10.1255C10.7515 10.1184 11.0009 10.1616 11.2345 10.2526C11.4681 10.3436 11.681 10.4805 11.8607 10.6552C12.0405 10.83 12.1833 11.039 12.2809 11.2699C12.3785 11.5008 12.4287 11.7489 12.4287 11.9995C12.4287 12.2502 12.3785 12.4983 12.2809 12.7292C12.1833 12.9601 12.0405 13.1691 11.8607 13.3439C11.681 13.5186 11.4681 13.6555 11.2345 13.7465C11.0009 13.8375 10.7515 13.8807 10.5009 13.8736C10.0037 13.8736 9.52681 13.6761 9.17521 13.3245C8.82362 12.9729 8.62609 12.496 8.62609 11.9988C8.62609 11.5016 8.82362 11.0247 9.17521 10.6731C9.52681 10.3215 10.0037 10.124 10.5009 10.124V10.1255ZM19.5 10.1255C19.7506 10.1184 20 10.1616 20.2336 10.2526C20.4672 10.3436 20.6801 10.4805 20.8598 10.6552C21.0396 10.83 21.1824 11.039 21.28 11.2699C21.3776 11.5008 21.4278 11.7489 21.4278 11.9995C21.4278 12.2502 21.3776 12.4983 21.28 12.7292C21.1824 12.9601 21.0396 13.1691 20.8598 13.3439C20.6801 13.5186 20.4672 13.6555 20.2336 13.7465C20 13.8375 19.7506 13.8807 19.5 13.8736C19.0121 13.8598 18.5489 13.6563 18.2087 13.3064C17.8685 12.9564 17.6782 12.4876 17.6782 11.9995C17.6782 11.5115 17.8685 11.0427 18.2087 10.6927C18.5489 10.3428 19.0121 10.1393 19.5 10.1255ZM9.37602 19.4981C9.07768 19.4981 8.79156 19.6166 8.5806 19.8275C8.36964 20.0385 8.25113 20.3246 8.25113 20.6229C8.25113 20.9213 8.36964 21.2074 8.5806 21.4184C8.79156 21.6293 9.07768 21.7478 9.37602 21.7478H20.6249C20.9232 21.7478 21.2094 21.6293 21.4203 21.4184C21.6313 21.2074 21.7498 20.9213 21.7498 20.6229C21.7498 20.3246 21.6313 20.0385 21.4203 19.8275C21.2094 19.6166 20.9232 19.4981 20.6249 19.4981H9.37602ZM0.00195312 14.9985C0.00195312 6.71483 6.71678 0 15.0005 0C23.2841 0 29.999 6.71483 29.999 14.9985C29.999 23.2822 23.2841 29.997 15.0005 29.997C6.71678 29.997 0.00195312 23.2822 0.00195312 14.9985ZM15.0005 2.24977C11.6193 2.24977 8.37659 3.59294 5.98574 5.98379C3.59489 8.37464 2.25173 11.6173 2.25173 14.9985C2.25173 18.3797 3.59489 21.6224 5.98574 24.0132C8.37659 26.4041 11.6193 27.7472 15.0005 27.7472C18.3816 27.7472 21.6243 26.4041 24.0152 24.0132C26.406 21.6224 27.7492 18.3797 27.7492 14.9985C27.7492 11.6173 26.406 8.37464 24.0152 5.98379C21.6243 3.59294 18.3816 2.24978 15.0005 2.24977Z"
                        fill={color}
                    />
                </svg>
            )}
        />
    );
};

export default NormalIcon;
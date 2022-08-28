import React, { ReactElement, useState } from "react";

type CustomIconHoverType = {
    Icon: string;
    totalIcon: string | number;
    activeColor: string;
    changeColor: string;
    clssName: string;
};

export const CustomIconHover = ({
    Icons,
    totalIcon,
    activeColor,
    changeColor,
}: {
    Icons: any;
    totalIcon: any;
    activeColor: any;
    changeColor: any;
}) => {
    const [iconColor, setIconColor] = useState(false);
    const [itemCount, setitemCount] = useState();
    console.log(totalIcon);
    console.log(Icons,'icon.............');
    const onOver = (e: any) => {
        if (e) setIconColor(true), setitemCount(e), console.log(e);
    };
    const onLeave = (e: any) => {
        if (e) setIconColor(false), setitemCount(e);
    };

    return (
        <>
            <Icons
                onClick={() => alert("hi")}
                color={`${
                    itemCount === totalIcon && iconColor === true
                        ? activeColor
                        : changeColor
                }`}
                onMouseOver={() => onOver(totalIcon)}
                onMouseLeave={() => onLeave(totalIcon)}
            />
        </>
    );
};

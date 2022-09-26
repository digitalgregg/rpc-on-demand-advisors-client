import React, { ReactNode, useEffect, useRef } from "react";

type OutSideClickType = {
    children: ReactNode;
    onOutSideClick?: (v: any) => any;
    className?: string;
};

export const OutSideClick = ({
    children,
    onOutSideClick,
    className,
}: OutSideClickType) => {
    const ref = useRef<any>();

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (
                ref &&
                ref.current &&
                ref.current.contains &&
                !ref.current.contains(event.target)
            ) {
                onOutSideClick && onOutSideClick(event.target);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={className + " w-fit h-fit"} ref={ref}>
            {children}
        </div>
    );
};

import React, { ReactNode, useEffect, useRef } from "react";

type OutSiderType = {
    children: ReactNode;
    onOutSideClick?: () => any;
    className?: string;
};

const OutSider = ({ children, onOutSideClick, className }: OutSiderType) => {
    const ref = useRef<any>();

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (
                ref &&
                ref.current &&
                ref.current.contains &&
                !ref.current.contains(event.target)
            ) {
                onOutSideClick && onOutSideClick();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={className} ref={ref}>
            {children}
        </div>
    );
};

export default OutSider;

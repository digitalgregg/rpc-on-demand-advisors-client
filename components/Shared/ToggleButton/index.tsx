import React from "react";

const ToggleButton = ({
    toggle,
    handleToggle,
    className,
}: {
    toggle: boolean;
    handleToggle: () => void;
    className?: string;
}) => {
    return (
        <>
            <label className="relative sm:w-[56px] sm:h-[31px] xs:w-[31.5px] xs:h-[18px] inline-block cursor-pointer">
                <input type="checkbox" className="w-0 h-0 opacity-0 input" />
                <span
                    className={`absolute top-0 left-0 right-0 bottom-0 bg-[#E51937] transition-all duration-300 before:absolute before:content-[''] before:h-[25px] before:w-[25px] before:bottom-[3px] before:left-[4px] before:transition-all before:duration-300 before:bg-[#F8F8F8] before:rounded-full rounded-[23px] ${
                        toggle && "before:translate-x-[23px]"
                    } ${className} `}
                    onClick={handleToggle}
                />
            </label>
        </>
    );
};

export default ToggleButton;

import React from "react";

const ToggleButton = ({
    toggle,
    handleToggle,
    className,
    labelClass,
}: {
    toggle: boolean;
    handleToggle: () => void;
    className?: string;
    labelClass? :string;
}) => {
    return (
        <>
            <label className={`relative w-[56px] h-[31px]  inline-block cursor-pointer ${labelClass}`}>
                <input type="checkbox" className="w-0 h-0 opacity-0 input" />
                <span
                    className={`absolute top-0 left-0 right-0 bottom-0 bg-primary transition-all duration-300 before:absolute before:content-[''] before:h-[25px] before:w-[25px] before:bottom-[3px] before:left-[4px] before:transition-all before:duration-300 before:bg-[#F8F8F8] before:rounded-full rounded-[23px] ${
                        toggle && "before:translate-x-[23px]"
                    } ${className} `}
                    onClick={handleToggle}
                />
            </label>
        </>
    );
};

export default ToggleButton;

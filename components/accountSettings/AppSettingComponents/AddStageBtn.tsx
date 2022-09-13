import React, { useState } from "react";
import Plus from "../../CustomIcons/PlusIcon";

function AddStageBtn({
    onClick,
    className,
}: {
    onClick?: (v: any) => any;
    className?: string;
}) {
    const [iconColor, setIconColor] = useState(false);

    const onOver = (e: any) => {
        if (e) setIconColor(true);
    };
    const onLeave = (e: any) => {
        if (e) setIconColor(false);
    };

    return (
        <div
            onClick={onClick}
            onMouseOver={onOver}
            onMouseLeave={onLeave}
            className={`mt-4 group w-[159px] h-[45px] py-[10px] px-[10px] rounded border-[1px] border-solid border-[#9E9E9E] hover:border-primary capitalize text-base leading-[22px] font-semibold  flex flex-row  items-center gap-[10px] cursor-pointer hover-transition hover:bg-primary  ${className} `}
        >
            <Plus color={`${iconColor === true ? "#ffffff" : "#000000"}`} />
            <span className="text-[#000000] group-hover:text-White ">
                Add Stage
            </span>
        </div>
    );
}

export default AddStageBtn;

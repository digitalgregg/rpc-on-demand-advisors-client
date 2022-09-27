/* eslint-disable @next/next/no-img-element */
import React from "react";
import Select from "react-select";
import TagBadges from "../CustomIcons/TagBadges";

type TagProps = {
    customStyles: object;
    isLabel?: boolean;
    labelClass?: string;
    onChange?: (e: any) => void;
    placeholder?: string;
    name: string;
    options?: object[];
    value?: any[];
    labelContainer?: string;
    isSecondary?: boolean;
};

const UserSettingSelect = ({
    options,
    value,
    customStyles,
    isLabel,
    labelClass,
    onChange,
    placeholder,
    name,
    labelContainer,
    isSecondary,
}: TagProps) => {
    const labelStyle = "flex items-center gap-[8px]";

    // const options = mapData?.map((item: any, index) => ({
    //     value: `${index}`,
    //     label: (
    //         <div className={labelStyle}>
    //             <TagBadges color={item.color} /> {item.title}
    //         </div>
    //     ),
    // }));

    return (
        <div className="w-full ">
            {isLabel === true && (
                <div className={labelContainer}>
                    <label className={labelClass}>{name}</label>
                </div>
            )}
            <Select
                value={value}
                components={{
                    DropdownIndicator: () => (
                        <div className="w-[155px] h-[31px] cursor-pointer text-[#9E9E9E] text-[14px] border rounded-[4px] border-[#9E9E9E] px-[10px] flex items-center justify-between">
                            {name + " "}
                            <span>
                                <img
                                    src="/img/selectDropdown.svg"
                                    alt=""
                                    className="w-[12.94px] h-[4.86px]"
                                />
                            </span>{" "}
                        </div>
                    ),
                }}
                onChange={onChange}
                isMulti
                placeholder={placeholder}
                styles={customStyles}
                options={options}
                className=""
                classNamePrefix="select"
            />
        </div>
    );
};

export default UserSettingSelect;

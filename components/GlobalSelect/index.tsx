import React, { useState } from "react";
import Select from "react-select";

type SelectProps = {
    customStyles: object;
    optionHoverColor: String;
    options?: Object[];
    isLabel?: boolean;
    labelStyles?: string;
    props?: any;
    handleOnChange: (e: any) => void;
    placeholder: string;
    value?: string;
    labelName?: string;
    isMulti: boolean;
    selectClassName: string;
    name?: string;
    defaultValue?: any;
};

const GlobalSelect = ({
    customStyles,
    optionHoverColor,
    options,
    isLabel,
    labelStyles,
    props,
    placeholder,
    value,
    labelName,
    isMulti,
    selectClassName,
    name,
    defaultValue,
    handleOnChange,
}: SelectProps) => {
    return (
        <div className="w-full ">
            {isLabel === true && (
                <label className={labelStyles}>{labelName}</label>
            )}
            <Select
                value={value}
                isMulti={isMulti}
                {...props}
                onChange={handleOnChange}
                placeholder={placeholder}
                defaultValue={defaultValue}
                options={options}
                className={`${selectClassName}`}
                name={`${name}`}
                styles={customStyles}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 4,
                    colors: {
                        ...theme.colors,
                        primary25: `${optionHoverColor}`,
                        primary: "lightgray",
                    },
                })}
            />
        </div>
    );
};

export default GlobalSelect;

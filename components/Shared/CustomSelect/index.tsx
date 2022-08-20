import React from "react";
import Select from "react-select";
import { StylesConfig } from "react-select";

type CustomSelectType = {
    options: object[];
    onChange?: () => void;
    optionColor: string;
    value?: any;
    type: "multi" | "single";
    className?: string;
};

function CustomSelect({
    options,
    onChange,
    optionColor,
    value,
    type,
    className,
}: CustomSelectType) {
    const styles: StylesConfig = {
        multiValue: (styles: any) => {
            return {
                ...styles,
                backgroundColor: optionColor,
            };
        },
        input: (styles) => ({
            ...styles,
            height: "53px",
            padding: 0,
            margin: 0,
        }),
        valueContainer: (styles) => ({
            ...styles,
            paddingTop: 0,
            paddingBottom: 0,
        }),
    };
    return (
        <div>
            <Select
                options={options}
                isMulti={type == "multi" ? true : false}
                onChange={onChange}
                className={className}
                value={value}
                styles={styles}
            />
        </div>
    );
}

CustomSelect.defaultProps = {
    type: "multi",
    optionColor: "#bbb",
};

export default CustomSelect;

import React from "react";
import Select from "react-select";
import { StylesConfig } from "react-select";

type CustomSelectType = {
    options: object[];
    onChange?: (v?: any) => void;
    optionColor: string;
    value?: any;
    type: "multi" | "single";
    className?: string;
    height?: string;
    placeholder?: string;
};

function CustomSelect({
    options,
    onChange,
    optionColor,
    value,
    height,
    type,
    placeholder,
    className,
}: CustomSelectType) {
    const styles: StylesConfig = {
        multiValue: (styles: any) => {
            return {
                ...styles,
                backgroundColor: "#E51937",
                color: "#fff",
            };
        },
        multiValueLabel: (styles) => ({
            ...styles,
            color: "#fff",
        }),

        input: (styles) => ({
            ...styles,

            padding: 0,
            margin: 0,
            fontSize: 14,
            ":focus": {
                outline: "none",
            },
        }),
        placeholder: (styles) => ({ ...styles, fontSize: 14 }),
        control: (styles) => ({
            ...styles,
            boxShadow: "none",
            borderColor: "#676767",
            background: "none",
            border: "none",
            minHeight: height,
            ":focus": {
                borderColor: "#676767",
            },
            ":hover": {
                borderColor: "#676767",
            },
        }),
        clearIndicator: (styles) => ({
            ...styles,
            display: "none",
        }),

        option: (styles, state) => {
            return {
                ...styles,
                ":hover": state.isSelected
                    ? {}
                    : {
                          background: "rgba(229,25,55,0.1)",
                          color: "#E51937",
                          fontWeight: 600,
                      },
                backgroundColor: state.isSelected ? "#E51937" : "transparent",
                fontSize: 14,
                borderRadius: 4,
                fontWeight: state.isSelected ? 700 : 400,
                color: state.isSelected ? "#fff" : "#000",
            };
        },
        valueContainer: (styles) => ({
            ...styles,
            paddingTop: 5,
            paddingBottom: 5,

            paddingLeft: 16,
        }),
        menu: (styles) => ({
            ...styles,
            paddingTop: 8,
            paddingBottom: 8,

            paddingLeft: 10,
            paddingRight: 10,
        }),
        indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
        container: (styles) => ({
            ...styles,

            ":focus": { outline: "none" },
        }),
    };
    return (
        <Select
            instanceId={"djfsjldjljdf"}
            options={options}
            isMulti={type == "multi" ? true : false}
            onChange={onChange}
            className={className}
            placeholder={placeholder}
            value={value}
            styles={styles}
        />
    );
}

CustomSelect.defaultProps = {
    type: "multi",
    optionColor: "#bbb",
    height: "55px",
};

export default CustomSelect;

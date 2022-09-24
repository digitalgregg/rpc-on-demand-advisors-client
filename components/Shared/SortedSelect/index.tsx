import React from "react";
import Select, { ActionMeta, StylesConfig } from "react-select";

type SSType = {
    options: SelectOption[];
    defaultValue: SelectOption;
    value?: SelectOption;
    onChange?: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void;
};

export type SelectOption = {
    value: string;
    label: string;
};

function SortedSelect(props: SSType) {
    const styles: StylesConfig = {
        control: (base: any, state: any) => ({
            ...base,
            border: "1px solid #9E9E9E",
            boxShadow: "none",
            ":focus": {
                borderColor: "#9E9E9E",
            },
            width: 110,
            minHeight: 30,
            background: "none",
            ":hover": {
                borderColor: "#9E9E9E",
            },
        }),
        singleValue: (styles) => ({
            ...styles,
            lineHeight: 1,
            fontSize: 14,
        }),
        input: (styles) => ({
            ...styles,
            opacity: 0,
            padding: 0,
            margin: 0,
            fontSize: 14,
            ":focus": {
                outline: "none",
            },
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            fontSize: "14px",
            backgroundColor: state.isSelected ? "#E51937" : "transparent",
            fontWeight: state.isSelected ? 500 : 400,
            color: state.isSelected ? "#fff" : "#000",
            width: "95%",
            padding: 9,
            lineHeight: 1,

            borderRadius: "4px",
            margin: "0 auto",
            ":hover": {
                background: state.isSelected
                    ? "#E51937"
                    : "rgba(229,25,55,0.1)",
                color: state.isSelected ? "#fff" : "#E51937",
            },
        }),
        indicatorSeparator: (provided: any) => ({
            display: "none",
        }),
        menu: (styles) => ({
            ...styles,
            padding: 2,
        }),
        dropdownIndicator: (base) => ({
            ...base,
            color: "hsl(0,0%,80%)",
            ":hover": {},
        }),
        indicatorsContainer: (base) => ({
            ...base,
            height: 30,
            width: 30,
            padding: 0,
        }),
        container: (styles) => ({
            ...styles,

            ":focus": { outline: "none" },
        }),
    };

    return (
        <Select
            instanceId={"2a9ab63359466724"}
            options={props.options}
            styles={styles}
            onChange={props.onChange}
            value={props.value}
        />
    );
}

const options = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
];

SortedSelect.defaultProps = {
    defaultValue: { value: "newest", label: "Newest" },
    options,
};

export default SortedSelect;

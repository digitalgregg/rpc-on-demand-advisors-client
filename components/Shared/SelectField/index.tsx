import React from "react";
import { FieldHookConfig, useField, ErrorMessage } from "formik";
import classNames from "classnames";
import Select, { StylesConfig } from "react-select";
import { SelectOption } from "../SortedSelect";
interface InputSelectType {
    label?: string;
    options: SelectOption[];
    labelClass?: string;
    styles?: StylesConfig;
}

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
    singleValue: (style) => ({
        ...style,
        fontSize: 14,
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
        minHeight: 55,
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

function SelectField(props: InputSelectType & FieldHookConfig<string>) {
    const [field, meta, helpers] = useField(props);

    return (
        <div className={props.className}>
            <label
                className={
                    "text-base label text-[#000000] leading-[21.79px] font-semibold block" +
                    " " +
                    props.labelClass
                }
                htmlFor={props.label}
            >
                {props.label}
            </label>
            {props.label && <div className="pt-[10px]"></div>}
            <div
                className={` border rounded border-[#E0E0E0] ${
                    meta.touched && meta.error && "!border-rose-400"
                } ${props.className} `}
            >
                <Select
                    styles={Object.assign({}, styles, props.styles)}
                    name={field.name}
                    options={props.options}
                    value={props.options.find(
                        (option) => option.value === field.value
                    )}
                    placeholder={props.placeholder}
                    defaultValue={props.options.find(
                        (option) => option.value === props.defaultValue
                    )}
                    onBlur={() => helpers.setTouched(true)}
                    onChange={(option: any) => helpers.setValue(option.value)}
                />
            </div>
            <ErrorMessage
                component="div"
                className=" error text-error text-[14px]"
                name={field.name}
            />
        </div>
    );
}

export default SelectField;

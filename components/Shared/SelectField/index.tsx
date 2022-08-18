import React from "react";
import { FieldHookConfig, useField, ErrorMessage } from "formik";
import { ReactNode } from "react";
import classNames from "classnames";

interface InputSelectType {
    label?: string;
    children: ReactNode;
    height?: string;
    labelClass?: string;
    selectClass?: string;
    selectArrow?: string;
}

// className="[-webkit-appearance:none] [-moz-appearance:none] bg-transparent bg-[url("/assets/dashboard-billing/arrow.svg")] bg-no-repeat"

function SelectField(props: InputSelectType & FieldHookConfig<string>) {
    const arrowIcon = classNames(
        "[-webkit-appearance:none]",
        "[-moz-appearance:none]",
        "bg-transparent",
        "bg-[url('/assets/dashboard-billing/arrow.svg')]",
        "bg-no-repeat",
        "[background-position-x:calc(100%-14px)]",
        "[background-position-y:50%]"
    );
    const [field, meta] = useField(props);
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
            <div className="relative">
                <select
                    id={props.label}
                    {...field}
                    className={` ${arrowIcon} ${
                        meta.touched && meta.error && "!border-error"
                    } w-full input ${
                        props.selectClass
                    } bg-[#fff] text-sm placeholder:text-[#6D6D6D] border border-[#E0E0E0]  focus:outline-none px-4 text-black rounded-[4px]`}
                    style={{ height: props.height }}
                >
                    {props.children}
                </select>
            </div>
            <ErrorMessage
                component="div"
                className=" error text-error text-[14px]"
                name={field.name}
            />
        </div>
    );
}

SelectField.defaultProps = {
    height: "55px",
};

export default SelectField;

import React, { useState } from "react";
import { useField, FieldHookConfig, ErrorMessage } from "formik";
import { Dropdown } from "../Dropdown";
import { ReactNode } from "react";

interface DropdownFieldType {
    children?: ReactNode;
    label?: string;
    height?: string;
    width?: string;
    labelClass?: string;
    inputClass?: string;
    errorClass?: string;
    placeholderClass?: string;
    iconClass?: string;
}

function DropdownField(props: DropdownFieldType & FieldHookConfig<string>) {
    const [field, meta, helpers] = useField(props.name);
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
                className="relative"
                onClick={() => {
                    helpers.setTouched(true);
                }}
            >
                <Dropdown
                    height={props.height}
                    width={props.width}
                    className={
                        meta.touched && meta.error
                            ? props.className?.replace(
                                  /!?border-\[.*?\]/g,
                                  " "
                              ) + "!border-error"
                            : props.className
                    }
                    placeholder={props.placeholder}
                    placeholderClass={props.placeholderClass}
                    iconClass={props.iconClass}
                    onChange={(v) => {
                        if (v) {
                            helpers.setValue(v);
                        }
                    }}
                >
                    {props.children}
                </Dropdown>
            </div>

            <div className="relative"></div>
            <ErrorMessage
                component="div"
                className=" error text-error text-[14px]"
                name={field.name}
            />
        </div>
    );
}

export default DropdownField;

/* eslint-disable @next/next/no-img-element */
import { useField, FieldHookConfig, ErrorMessage } from "formik";
import { FC, ReactElement } from "react";
import CustomSelect from "./CustomSelect";
import { useEffect } from "react";

interface MultiSelectType {
    label?: string;
    height?: string;
    options: object[];
    labelClass?: string;
    value?: string;
    inputClass?: string;
    placeholder?: string;

    type: "multi" | "single";
    isDual?: boolean;
    valueChange?: (v: any) => void;
}

function MultiSelect(props: MultiSelectType & FieldHookConfig<string>) {
    const [field, meta, helpers] = useField(props);

    useEffect(() => {
        helpers.setValue(props.value);
    }, []);

    return (
        <div className={props.className}>
            <label
                className={
                    "text-base label text-[#000000] leading-[21.79px] font-semibold block" +
                    " " +
                    props.labelClass
                }
            >
                {props.label}
            </label>
            {props.label && <div className="pt-[10px]"></div>}
            <div className="relative">
                <CustomSelect
                    options={props.options}
                    onChange={(v) => {
                        props.valueChange &&
                            props.valueChange(
                                props.type == "single"
                                    ? !props.isDual
                                        ? v.value
                                        : v
                                    : v
                            );
                        helpers.setValue(
                            props.type == "single"
                                ? !props.isDual
                                    ? v.value
                                    : v
                                : v
                        );
                    }}
                    className={` ${
                        meta.touched && meta.error && "!border-error"
                    } w-full input text-sm placeholder:text-[#6D6D6D] border border-[#676767]  ${
                        props.inputClass
                    } focus:outline-none  text-black rounded-[4px]`}
                    placeholder={props.placeholder}
                    type={props.type}
                    height={props.height}
                    value={props.value}
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

MultiSelect.defaultProps = {
    height: "55px",
};

export default MultiSelect;

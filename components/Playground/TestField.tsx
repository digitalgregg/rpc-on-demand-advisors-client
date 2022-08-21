/* eslint-disable @next/next/no-img-element */
import { useField, FieldHookConfig, ErrorMessage } from "formik";
import { FC, ReactElement } from "react";

interface InputFieldType {
    label?: string;
    height: string;
    labelClass?: string;
    inputClass?: string;
}

function TestField(props: InputFieldType & FieldHookConfig<string>) {
    const [field, meta] = useField(props.name);
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
            <div className="relative"></div>
            <ErrorMessage
                component="div"
                className=" error text-error text-[14px]"
                name={field.name}
            />
        </div>
    );
}

TestField.defaultProps = {
    height: "55px",
};

export default TestField;

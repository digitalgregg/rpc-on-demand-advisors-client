/* eslint-disable @next/next/no-img-element */
import { useField, FieldHookConfig, ErrorMessage } from "formik";
import { FC, ReactElement } from "react";

interface TextAreaFieldType {
    label?: string;
    inputImg?: FC;
    height: string;
    labelClass?: string;
    inputClass?: string;
}

function TextAreaField(props: TextAreaFieldType & FieldHookConfig<string>) {
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
                <textarea
                    id={props.label}
                    {...field}
                    className={` ${
                        meta.touched && meta.error && "!border-error"
                    } w-full input bg-[#fff] text-sm placeholder:text-[#6D6D6D] border border-[#E0E0E0]  ${
                        props.inputClass
                    } focus:outline-none p-[16px] resize-none  text-black rounded-[4px]`}
                    placeholder={props.placeholder}
                    style={{ height: props.height }}
                ></textarea>
                {props.inputImg && <props.inputImg />}
            </div>
            <ErrorMessage
                component="div"
                className=" error text-error text-[14px]"
                name={field.name}
            />
        </div>
    );
}

TextAreaField.defaultProps = {
    height: "100px",
};

export default TextAreaField;

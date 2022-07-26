import { useField, FieldHookConfig, ErrorMessage } from "formik";
import { FC, ReactElement, useEffect } from "react";

interface InputFieldType {
    label?: string;
    inputImg?: FC;
    height: string;
    labelClass?: string;
    readOnly?: boolean;
    inputClass?: string;
    value?: any;
    onChange?: any;
    myChange?: (v: string) => any;
}

function InputField(props: InputFieldType & FieldHookConfig<string>) {
    const [field, meta] = useField(props);
    const id = props.label ? props.label.replace(" ", "-") : props.name;

    return (
        <div className={props.className}>
            <label
                className={
                    "text-base label text-[#000000] leading-[21.79px] font-semibold block" +
                    " " +
                    props.labelClass
                }
                htmlFor={id}
            >
                {props.label}
            </label>
            {props.label && <div className="pt-[10px]"></div>}
            <div className="relative">
                <input
                    id={id}
                    {...field}
                    value={props.value || field.value}
                    onChange={
                        props.onChange ||
                        ((v) => {
                            field.onChange(v);
                            props.myChange && props.myChange(v.target.value);
                        })
                    }
                    type={props.type}
                    readOnly={props.readOnly}
                    className={` ${
                        meta.touched && meta.error && "!border-error"
                    } w-full input bg-[#fff] text-sm placeholder:text-[#6D6D6D] border border-[#E0E0E0]  ${
                        props.inputClass
                    } focus:outline-none px-4 text-black rounded-[4px]`}
                    placeholder={props.placeholder}
                    style={{ height: props.height }}
                />
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

InputField.defaultProps = {
    height: "55px",
};

export default InputField;

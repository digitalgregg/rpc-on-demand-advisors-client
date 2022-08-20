import React, { useEffect } from "react";
import { useField, ErrorMessage, Formik, useFormik } from "formik";
const TextField = ({ className, label, placeholder, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className=" w-full flex flex-col">
            <label
                htmlFor={field.name}
                className="text-base text-black_primary leading-[22px] font-semibold"
            >
                {label}
            </label>
            <input
                autoComplete="off"
                {...field}
                {...props}
                className={` ${
                    meta.touched && meta.error && "!border-rose-400"
                } ${
                    className === "" ? "" : className
                } rounded w-full mt-[10px] outline-none bg-White h-[55px] px-[15px] text-[#9E9E9E] border-[1px] border-solid  border-[#9E9E9E]`}
                type="text"
                placeholder={placeholder}
            />
            <ErrorMessage
                component="div"
                className=" text-rose-400 text-[1rem]"
                name={field.name}
            />
        </div>
    );
};
export default TextField;

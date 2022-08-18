import React from 'react'
import { useField, ErrorMessage } from "formik";
const TeaxArea = ({ label, ...props }:any) => {
    const [field, meta] = useField(props);
  return (
    <div className=" w-full flex flex-col my-2">
    <label className=" mb-[10px] mt-[16px]" htmlFor={field.name}>{label}</label>
    <textarea
      autoComplete="off"
      {...field}
      {...props}
      className={` ${
        meta.touched && meta.error && "!border-rose-400"
      } ${props.className || ""} rounded-md w-full h-[55px] bg-transparent !focus:border-[#9E9E9E] py-[18px] px-[15px] border-[1px] border-solid border-[#9E9E9E]`}
      type="text"
    />
    <ErrorMessage component="div" className=" text-rose-400 text-[1rem]" name={field.name} />
  </div>
  )
}

export default TeaxArea
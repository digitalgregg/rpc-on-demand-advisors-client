import React from "react";
import InputField from "../Shared/InputField";
import { useField, Formik, Form, FieldHookConfig, ErrorMessage } from "formik";
import * as Yup from "yup";

const ChangeEmail = () => {
  const inputStyle = "w-[100%] border border-[#676767] text-normal text-[14px]";
  const labelStyle = "font-normal text-[16px] leading-[22px]";

  const changeEmailInfo = {
    current_email: "",
    new_email: ""
  };
  const changeEmailInfoSchema = Yup.object({
    current_email: Yup.string().email("Email is invalid").required("Email is required"),
    new_email: Yup.string().email("Email is invalid").required("Email is required"),
  });
  return (
    <div className="bg-[#FFFFFF] p-[20px] xs:order-last xl:order-none">
      <h2 className="text-semibold text-[18px] leading-[25px] mb-[15px] text-[#000000]">
        Change Email
      </h2>
      <Formik
        initialValues={changeEmailInfo}
        validationSchema={changeEmailInfoSchema}
        onSubmit={(value) => console.log(value)}
      >
        {() => (
          <Form>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 xs:gap-[15px] sm:gap-[16.95px] md:gap-[19.59px] lg:gap-[23.05px] xl:gap-[13.05px] 2xl:gap-[21.36px] 3xl:gap-[20.68px] 4xl:gap-[24.75px]">
              <InputField
                name="current_email"
                placeholder="Enter your email"
                type="email"
                label="Email"
                inputClass={inputStyle}
                height="48px"
                labelClass={labelStyle}
                required
              />
              <InputField
                name="new_email"
                placeholder="New email"
                type="email"
                label="New email"
                inputClass={inputStyle}
                height="48px"
                labelClass={labelStyle}
                required
              />
              <button className="xs:w-[100%] sm:w-[241.56px] md:w-[279.24px] lg:w-[328.52px] xl:w-[186px] 2xl:w-[216px] 3xl:w-[209.14px] 4xl:w-[250.29px] h-[45px] border border-primary rounded font-semibold text-[14px] leading-[19px] text-primary">
                Update email address
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangeEmail;

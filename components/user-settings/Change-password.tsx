import React, { useState } from "react";
import { useField, Formik, Form, FieldHookConfig, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputField from "../Shared/InputField";

const ChangePassword = () => {
  const [isHiddenOldPassword, setIsHiddenOldPassword] = useState(true);
  const [isHiddenNewPassword, setIsHiddenNewPassword] = useState(true);
  const inputStyle = " border border-[#676767] text-normal text-[14px]";
  const labelStyle = "font-normal text-[16px] leading-[22px]";
  const changePasswordInfo = {
    old_password: "",
    new_password: "",
  };
  const changePasswordInfoSchema = Yup.object({
    old_password: Yup.string().min(8).required("Password is required"),
    new_password: Yup.string().min(8).required("Password is required"),
  });
  return (
    <div className="bg-[#FFFFFF] p-[20px]">
      <h2 className="text-semibold text-[18px] leading-[25px] mb-[20px] text-[#000000]">
        Change Password
      </h2>
      <Formik
        initialValues={changePasswordInfo}
        validationSchema={changePasswordInfoSchema}
        onSubmit={(value) => console.log(value)}
      >
        {() => (
          <Form>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 xs:gap-[15px] sm:gap-[16.95px] md:gap-[19.59px] lg:gap-[23.05px] xl:gap-[13.05px] 2xl:gap-[21.36px] 3xl:gap-[20.68px] 4xl:gap-[24.75px]">
              <InputField
                name="old_password"
                placeholder="current password"
                type={isHiddenOldPassword ? "password" : "text"}
                label="Current password"
                inputClass={inputStyle}
                height="48px"
                labelClass={labelStyle}
                required
                inputImg={() => {
                  return (
                    <img
                      onClick={() =>
                        setIsHiddenOldPassword(!isHiddenOldPassword)
                      }
                      src={`/img/${
                        isHiddenOldPassword ? "invisible.svg" : "visible.svg"
                      }`}
                      alt="icon"
                      className="absolute top-[10px] right-[10px]"
                    />
                  );
                }}
              />
              <InputField
                name="new_password"
                placeholder="New password"
                type={isHiddenNewPassword ? "password" : "text"}
                label="New pasword"
                inputClass={inputStyle}
                height="48px"
                labelClass={labelStyle}
                required
                inputImg={() => {
                  return (
                    <img
                      onClick={() =>
                        setIsHiddenNewPassword(!isHiddenNewPassword)
                      }
                      src={`/img/${
                        isHiddenNewPassword ? "invisible.svg" : "visible.svg"
                      }`}
                      alt="icon"
                      className="absolute top-[10px] right-[10px]"
                    />
                  );
                }}
              />
              <button className="xs:w-[100%] sm:w-[241.56px] md:w-[279.24px] lg:w-[328.52px] xl:w-[186px] 2xl:w-[216px] 3xl:w-[209.14px] 4xl:w-[250.29px] h-[45px] border border-[#E51937] rounded font-semibold text-[14px] leading-[19px] text-[#E51937]">
                Update password
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;

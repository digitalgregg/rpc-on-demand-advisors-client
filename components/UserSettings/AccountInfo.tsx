import React from "react";
import { useField, Formik, Form, FieldHookConfig, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputField from "../Shared/InputField";

const AccountInfo = () => {
  const inputStyle = "w-[100%] border border-[#676767] text-normal text-[14px]";
  const labelStyle = "font-normal text-[16px] leading-[22px]";
  const accountInfo = {
    name: "",
    companyName: "",
    team_name: "",
    account_type: "",
  };
  const accountInfoSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    companyName: Yup.string().required("Company name is required"),
    team_name: Yup.string().required("Team name is required"),
    account_type: Yup.string().required("Account type is required"),
  });
  return (
    <div className="w-[100%] bg-[#FFFFFF] p-[20px] mb-[30px]">
      <h3 className="font-semibold text-[18px] leading-[25px] text-[#000805] mb-[15px]">
        Account Info
      </h3>
      <Formik
        initialValues={accountInfo}
        validationSchema={accountInfoSchema}
        onSubmit={(value) => console.log(value)}
      >
        {() => (
          <Form>
            <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-[15px]">
              <InputField
                name="name"
                placeholder="Enter your name"
                type="text"
                label="Profile name"
                inputClass={inputStyle}
                height="48px"
                labelClass={labelStyle}
                required
              />
              <InputField
                name="companyName"
                placeholder="Company Name"
                type="text"
                label="Company name"
                inputClass={inputStyle}
                height="48px"
                labelClass={labelStyle}
                required
              />
              <InputField
                name="team_name"
                placeholder="Team name"
                type="text"
                label="Team name"
                height="48px"
                inputClass={inputStyle}
                labelClass={labelStyle}
                required
              />
              <InputField
                name="account_type"
                placeholder="Account type"
                inputClass={inputStyle}
                height="48px"
                labelClass={labelStyle}
                type="text"
                label="Account type (not editable)"
                required
              />
              <button className="xs:w-[100%] hover:bg-primary transition duration-700 ease-in-out hover:text-[#FFFFFF] sm:w-[207px] h-[45px] border border-primary rounded font-semibold text-[14px] leading-[19px] text-primary">
                Update Account Info
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AccountInfo;

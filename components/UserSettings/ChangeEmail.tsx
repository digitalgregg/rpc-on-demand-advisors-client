import React, { useState } from "react";
import InputField from "../Shared/InputField";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { getLocal, setLocal } from "./../../utils/localStorage";
import { toast } from "react-toastify";
import api from "../../api";
import LodingAnimation from "./../Shared/LodingAnimation/index";

const ChangeEmail = () => {
  const inputStyle = "w-[100%] border border-[#676767] text-normal text-[14px]";
  const labelStyle = "font-normal text-[16px] leading-[22px]";
  const [error, setError] = useState("");
  const user = getLocal("user");
  const team = getLocal("team");
  const userInfo = getLocal("user-info");
  const [buttonLoading, setButtonLoading] = useState(false);

  const changeEmailInfo = {
    current_email: user?.email,
    new_email: "",
  };
  const changeEmailInfoSchema = Yup.object({
    current_email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    new_email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
  });
  return (
    <div className="bg-[#FFFFFF] p-[20px] xs:order-last xl:order-none">
      <h2 className="text-semibold text-[18px] leading-[25px] mb-[15px] text-[#000000]">
        Change Email
      </h2>
      <Formik
        initialValues={changeEmailInfo}
        validationSchema={changeEmailInfoSchema}
        onSubmit={(values) => {
          setButtonLoading(true);
          setError("");
          api
            .put(`/api/user/change-email/${user._id}`, values)
            .then((res) => {
              if (res.status === 200) {
                user.email = values.new_email;
                setLocal("user", user);

                team.email = values.new_email;
                setLocal("team", team);

                userInfo.email = values.new_email;
                setLocal("user-info", userInfo);
                toast.success(res.data.message);
                setButtonLoading(false);
              }
            })
            .catch((err) => {
              setError(err?.response.data.message);
              setButtonLoading(false);
            });
        }}
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
            </div>
            {error && (
              <h3 className="font-normal text-[14px] leading-[19px] text-primary mt-[10px]">
                {error}
              </h3>
            )}
            <button
              type="submit"
              className="xs:w-[100%] hover:bg-primary mt-[20px] transition duration-700 ease-in-out hover:text-[#FFFFFF] sm:w-[241.56px] md:w-[279.24px] lg:w-[328.52px] xl:w-[186px] 2xl:w-[216px] 3xl:w-[209.14px] 4xl:w-[250.29px] h-[45px] border border-primary rounded font-semibold text-[14px] leading-[19px] text-primary"
            >
              {buttonLoading ? (
                <span className="flex items-center gap-[10px] justify-center">
                  <div>
                    <LodingAnimation color="red" />
                  </div>
                  <div>Loading...</div>
                </span>
              ) : (
                "  Update email address"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangeEmail;

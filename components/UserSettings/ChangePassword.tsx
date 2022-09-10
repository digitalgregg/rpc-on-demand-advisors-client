import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../Shared/InputField";
import { getLocal } from "./../../utils/localStorage";
import { toast } from "react-toastify";
import api from "../../api";
import LodingAnimation from "./../Shared/LodingAnimation/index";

const ChangePassword = () => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const user = getLocal("user");
  const [error, setError] = useState("");
  const [isHiddenOldPassword, setIsHiddenOldPassword] = useState(true);
  const [isHiddenNewPassword, setIsHiddenNewPassword] = useState(true);
  const inputStyle = " border border-[#676767] text-normal text-[14px]";
  const labelStyle = "font-normal text-[16px] leading-[22px]";

  const changePasswordInfo = {
    old_password: "",
    new_password: "",
  };
  const changePasswordInfoSchema = Yup.object({
    old_password: Yup.string().required("Password is required"),
    new_password: Yup.string().required("Password is required"),
  });

  return (
    <div className="bg-[#FFFFFF] p-[20px] rounded-[4px]">
      <h2 className="text-semibold text-[18px] leading-[25px] mb-[20px] text-[#000000]">
        Change Password
      </h2>
      <Formik
        initialValues={changePasswordInfo}
        validationSchema={changePasswordInfoSchema}
        onSubmit={(values) => {
          setButtonLoading(true);
          setError("");
          api
            .put(`/api/user/change-password/${user._id}`, values)
            .then((res) => {
              if (res.status === 200) {
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
                      className="absolute top-[14px] right-[10px] cursor-pointer"
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
                      className="absolute top-[14px] right-[10px] cursor-pointer"
                    />
                  );
                }}
              />
            </div>
            {error && (
              <h3 className="font-normal text-[14px] leading-[19px] text-primary mt-[10px]">
                {error}
              </h3>
            )}
            <button
              type="submit"
              className="xs:w-[100%] hover:bg-primary transition duration-700 ease-in-out mt-[20px] hover:text-[#FFFFFF] sm:w-[240px] md:w-[279px] lg:w-[144px] xl:w-[144px] 2xl:w-[187px] 3xl:w-[278.06px] 4xl:w-[278.06px] h-[45px] border border-primary rounded-[4px] font-semibold text-[14px] leading-[19px] text-primary"
            >
              {buttonLoading ? (
                <span className="flex items-center gap-[10px] justify-center">
                  <div>
                    <LodingAnimation color="red" />
                  </div>
                  <div>Loading...</div>
                </span>
              ) : (
                "Update password"
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePassword;

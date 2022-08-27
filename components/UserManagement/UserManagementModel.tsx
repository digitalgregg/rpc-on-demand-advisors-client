import React from "react";
import Modal from "react-modal";
import { UserManagementModelStyle } from "./../../utils/modalCustomStyle";
import { Formik } from "formik";
import { Form } from "formik";
import InputField from "./../Shared/InputField/index";
import ContentTypeStage from "../ContentTypeStage";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};
interface FormValues {
  name: string;
  email: string;
  user_type: string;
}
const initialValues: FormValues = {
  name: "",
  email: "",
  user_type: "",
};
const UserManagementModel = ({ isOpen, onClose }: ModalProps) => {
  const inputStyle = "mb-[30px] xs:w-[100%]";
  const labelStyle = "font-semibold text-[16px] leading-[22px] text-[#000000]";

  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={UserManagementModelStyle}
        contentLabel="Example Modal"
      >
        <div className="w-[100%] bg-[#FFFFFF]">
          <div className="sm:px-[40px] xs:px-[20px] pt-[20px] pb-[40px]">
            <h2 className="mb-[20px] text-center text-[#000000] font-semibold text-[24px] leading-[23px]">
              Edit User
            </h2>
            <Formik
              initialValues={initialValues}
              onSubmit={(valus) => console.log(valus)}
            >
              {() => (
                <Form>
                  <div className="">
                    <InputField
                      name="name"
                      placeholder="Enter your name"
                      type="name"
                      label="Enter your name"
                      inputClass={inputStyle}
                      height="48px"
                      labelClass={labelStyle}
                      required
                    />
                    <InputField
                      name="email"
                      placeholder="Enter your email address"
                      type="email"
                      label="Enter your email"
                      inputClass={inputStyle}
                      height="48px"
                      labelClass={labelStyle}
                      required
                    />
                    <div className="mb-[30px] mt-[0px]">
                      <ContentTypeStage />
                    </div>
                    <div className="flex sm:flex-row xs:flex-col">
                      <button
                        className="w-[202.5px] h-[45px] rounded-[4px] border border-[#E51937] text-[16px] xs:mb-[20px] sm:mb-[0px] font-normal text-[#E51937] cursor-pointer mr-[5px]"
                        onClick={handleClose}
                      >
                        Cancel
                      </button>
                      <button className="bg-[#E51937] rounded-[4px] w-[202.5px] h-[45px] text-[#FFFFFF] text-[16px] font-semibold cursor-pointer">
                        Update
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        {/* <div className="bg-[#FFFFFF] w-[100%] xs:h-[100%] ">
          <div className="xs:px-[20px] sm:px-[40px] pt-[20px] pb-[40px] modal-scroll">
            <h2 className="mb-[20px] text-center text-[#000000] font-semibold text-[24px] leading-[23px]">
              Edit User
            </h2>
            <div>
              <Formik
                initialValues={initialValues}
                onSubmit={(valus) => console.log(valus)}
              >
                {() => (
                  <Form>
                    <div className="">
                      <InputField
                        name="name"
                        placeholder="Enter your name"
                        type="name"
                        label="Enter your name"
                        inputClass={inputStyle}
                        height="48px"
                        labelClass={labelStyle}
                        required
                      />
                      <InputField
                        name="email"
                        placeholder="Enter your email address"
                        type="email"
                        label="Enter your email"
                        inputClass={inputStyle}
                        height="48px"
                        labelClass={labelStyle}
                        required
                      />
                      <div className="mb-[30px]">
                        <ContentTypeStage />
                      </div>
                      <div className="flex justify-between sm:flex-row xs:flex-col w-[100%]">
                        <button
                          className="w-[202.5px] h-[45px] rounded-[4px] border border-[#E51937] text-[16px] xs:mb-[20px] sm:mb-[0px] font-normal text-[#E51937] cursor-pointer"
                          onClick={handleClose}
                        >
                          Cancel
                        </button>
                        <button className="bg-[#E51937] rounded-[4px] w-[202.5px] h-[45px] text-[#FFFFFF] text-[16px] font-semibold cursor-pointer">
                          Update
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div> */}
      </Modal>
    </>
  );
};

export default UserManagementModel;

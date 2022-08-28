import React from "react";
import Modal from "react-modal";
import { Formik } from "formik";
import { Form } from "formik";
import { UserManagementModalStyle } from "./../../../utils/modalCustomStyle";
import InputField from "./../../Shared/InputField/index";
import ContentTypeStage from "./../../ContentTypeStage/index";
import GlobalSelect from "./../../GlobalSelect/index";
import { options } from "../../../utils/GlobalReactSelectData/AssetUse";
import { userManagementstyles } from "./../../../utils/GlobalReactSelectData/AssetUse";

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
  const handleContentChange = (e: any) => {
    console.log(e);
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={UserManagementModalStyle}
        contentLabel="Example Modal"
      >
        <div className="w-[100%] bg-[#FFFFFF]">
          <div className="sm:px-[40px] xs:px-[20px] pt-[20px] pb-[40px] modal-scroll h-[100%]">
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
                      height="55px"
                      labelClass={labelStyle}
                      required
                    />
                    <InputField
                      name="email"
                      placeholder="Enter your email address"
                      type="email"
                      label="Enter your email"
                      inputClass={inputStyle}
                      height="55px"
                      labelClass={labelStyle}
                      required
                    />
                    <div className="mb-[30px]">
                      <GlobalSelect
                        selectClassName="text-[14px] text-[#676767] pt-[10px]"
                        isMulti={false}
                        options={options}
                        labelStyles={labelStyle}
                        isLabel={true}
                        customStyles={userManagementstyles}
                        labelName="Enter user type"
                        handleOnChange={handleContentChange}
                        placeholder="User"
                        optionHoverColor="#E519371A"
                      />
                    </div>
                    <div className="flex">
                      <button
                        className="sm:w-[202.5px] xs:w-[100px] sm:h-[45px] xs:h-[40px] rounded-[4px] border border-[#E51937] sm:text-[16px] xs:text-[12px] font-normal text-[#E51937] cursor-pointer mr-[5px]"
                        onClick={handleClose}
                      >
                        Cancel
                      </button>
                      <button className="bg-[#E51937] rounded-[4px] sm:w-[202.5px] xs:w-[100px] sm:h-[45px] xs:h-[40px] text-[#FFFFFF] sm:text-[16px] xs:text-[12px] font-semibold cursor-pointer">
                        Update
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UserManagementModel;

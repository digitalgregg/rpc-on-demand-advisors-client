import React, { useState } from "react";
import Modal from "react-modal";
import { Formik } from "formik";
import { Form } from "formik";
import InputField from "./../../Shared/InputField/index";
import ContentTypeStage from "./../../ContentTypeStage/index";
import CustomModal from "../../Shared/CustomUtils/CustomModal";
import { motion } from "framer-motion";
import DropdownField from "../../Shared/DropdownField";
import { DropdownItem } from "../../Shared/Dropdown";
import * as Yup from "yup";

const options = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
];

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

const validation = Yup.object({
    name: Yup.string().required("User name required"),
    email: Yup.string().required("Must provided email"),
    user_type: Yup.string().required("Select user type"),
});

const UserManagementModel = ({ isOpen, onClose }: ModalProps) => {
    const inputStyle = "xs:w-[100%]";
    const labelStyle =
        "font-semibold text-[16px] leading-[22px] text-[#000000]";

    const handleClose = () => {
        onClose();
    };
    const handleContentChange = (e: any) => {
        console.log(e);
    };

    return (
        <CustomModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="bg-[#fff] rounded-[4px] w-fit"
        >
            <div className="w-[100%] bg-[#FFFFFF]">
                <div className="sm:px-[40px] xs:px-[20px] pt-[20px] pb-[40px] modal-scroll h-[100%]">
                    <h2 className="mb-[20px] text-center text-[#000000] font-semibold text-[24px] leading-[23px]">
                        Send Invite
                    </h2>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validation}
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
                                    <div className="mb-[30px]"></div>
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
                                    <div className="mb-[30px]"></div>

                                    <div className="mb-[30px]">
                                        <DropdownField
                                            className="!border-[#e0e0e0]"
                                            height="55px"
                                            label="Select a Type"
                                            name="user_type"
                                            placeholderClass="!text-sm"
                                            iconClass="!w-[12px]"
                                            labelClass="!text-sm"
                                            placeholder="Select a Type"
                                        >
                                            {options.map((v, i) => (
                                                <DropdownItem
                                                    key={i}
                                                    value={v.value}
                                                >
                                                    {v.label}
                                                </DropdownItem>
                                            ))}
                                        </DropdownField>
                                    </div>
                                    <div className="flex">
                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ duration: 0.2 }}
                                            whileHover={{
                                                backgroundColor: "#E51937",
                                            }}
                                            className=" sm:w-[202.5px] xs:w-[100px] sm:h-[45px] xs:h-[40px] rounded-[4px] border border-[#E51937] hover:text-White sm:text-[16px] xs:text-[12px] font-normal text-[#E51937] cursor-pointer mr-[5px]"
                                            onClick={handleClose}
                                        >
                                            Cancel
                                        </motion.button>
                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ duration: 0.2 }}
                                            whileHover={{
                                                backgroundColor: "#890F21",
                                            }}
                                            className=" border-primary bg-primary hover:border-primary_dark rounded-[4px] sm:w-[202.5px] xs:w-[100px] sm:h-[45px] xs:h-[40px] border  text-[#FFFFFF] sm:text-[16px] xs:text-[12px] font-semibold cursor-pointer"
                                        >
                                            Update
                                        </motion.button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </CustomModal>
    );
};

export default UserManagementModel;

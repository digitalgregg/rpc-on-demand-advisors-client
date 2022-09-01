/* eslint-disable react/jsx-no-undef */
import { Form, Formik } from "formik";
import React from "react";
import OverflowModal from "../../Shared/CustomUtils/OverflowModal";
import * as Yup from "yup";
import InputField from "../../Shared/InputField";
import MultiSelect from "../../Shared/MultiSelect";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    type: "invite" | "update";
};

const userInitial = {
    name: "",
    email: "",
    user_type: "",
};

const validateSchema = Yup.object({
    name: Yup.string().min(4).required("Name is required"),
    email: Yup.string().required("Email is required"),
    user_type: Yup.string().required("User type is required"),
});

function UserManageModal({ isOpen, onClose, type }: ModalProps) {
    const labelStyle =
        "font-semibold text-[16px] leading-[22px] text-[#000000]";

    const userTypeOptions = [
        { value: "admin", label: "Admin" },
        { value: "user", label: "User" },
    ];
    return (
        <OverflowModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="w-[calc(100vw-40px)] max-w-[500px] bg-white px-5 xs:px-[30px] sm:px-10 pt-5 pb-10 rounded-[4px] overflow-y-auto sm:overflow-hidden"
        >
            <div>
                <h2 className=" text-center text-[#000] font-semibold text-[24px] leading-[32.68px]">
                    {type === "invite" ? "Invite" : "Update"} User
                </h2>
                <div className="pt-5"></div>
                <Formik
                    initialValues={userInitial}
                    onSubmit={(v) => console.log(v)}
                    validationSchema={validateSchema}
                >
                    {() => (
                        <Form>
                            <InputField
                                name="name"
                                placeholder="gregg micky"
                                label="Enter user name"
                                height="55px"
                                labelClass={labelStyle}
                                required
                            />
                            <div className="pt-[30px]"></div>
                            <InputField
                                name="email"
                                placeholder="example@mail.com"
                                type="email"
                                label="Enter user email"
                                height="55px"
                                labelClass={labelStyle}
                                required
                            />
                            <div className="pt-[30px]"></div>
                            <MultiSelect
                                name="user_type"
                                placeholder="Select type..."
                                label="Enter user type"
                                options={userTypeOptions}
                                type="single"
                                inputClass="border-[#E0E0E0]"
                            />
                            <div className="pt-[30px]"></div>
                            <div className="flex gap-[15px]">
                                <button
                                    className="h-[45px] border-primary border basis-1/2 text-primary rounded hover:bg-primary hover:text-white transition-all duration-200"
                                    type="button"
                                    onClick={onClose}
                                >
                                    Cancel
                                </button>
                                <button className="h-[45px] border-primary border basis-1/2 text-white rounded bg-primary hover:bg-primary_dark transition-all duration-200">
                                    {type === "invite"
                                        ? "Send Invite"
                                        : "Update"}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </OverflowModal>
    );
}

UserManageModal.defaultProps = {
    type: "create",
};

export default UserManageModal;

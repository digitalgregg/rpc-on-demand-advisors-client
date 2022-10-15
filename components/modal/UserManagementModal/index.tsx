/* eslint-disable react/jsx-no-undef */
import { Form, Formik } from "formik";
import React from "react";
import OverflowModal from "../../Shared/CustomUtils/OverflowModal";
import * as Yup from "yup";
import InputField from "../../Shared/InputField";
import {
    inviteUserApi,
    updateInviteUser,
} from "../../../api-call/InviteUserApi";
import { useAtom } from "jotai";
import { team_state, UpgradeModalState, UserPlanState } from "../../../state";
import { useState } from "react";
import LodingAnimation from "../../Shared/LodingAnimation";
import {
    GetUserManageContext,
    UserManageType,
} from "../../Context/UserManageProvider";
import SelectField from "../../Shared/SelectField";
import { GetGlobalContext } from "../../Context/GlobalContextProvider";
import { toast } from "react-toastify";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    type: "invite" | "update";
    prevData?: UserManageType;
};

type UserInitialType = {
    name: string;
    email: string;
    role: string;
};

const userInitial: UserInitialType = {
    name: "",
    email: "",
    role: "user",
};

const validateSchema = Yup.object({
    name: Yup.string().min(4).required("Name is required"),
    email: Yup.string().required("Email is required"),
    role: Yup.mixed().required("User type is required"),
});

function UserManageModal({ isOpen, onClose, type, prevData }: ModalProps) {
    const [teamData] = useAtom(team_state);
    const { refetch } = GetUserManageContext();
    const { refetchPlanData } = GetGlobalContext();
    const [buttonLoading, setButtonLoading] = useState(false);
    const [, setUpgradeModal] = useAtom(UpgradeModalState);

    const labelStyle =
        "font-semibold text-[16px] leading-[22px] text-[#000000]";

    const userTypeOptions = [
        { value: "admin", label: "Admin" },
        { value: "user", label: "User" },
    ];
    const [planData] = useAtom(UserPlanState);

    const handleSubmit = async (value: UserInitialType) => {
        if (type === "invite") {
            if (planData.user_limit) {
                toast.error(
                    "User limit exceeded, Please update plan to further process"
                );
                onClose();
                setUpgradeModal("Invited User");
                return;
            }
            setButtonLoading(true);
            const reqData = {
                ...value,
                team_id: teamData.id,
            };
            await inviteUserApi(reqData);
            refetch();
            setButtonLoading(false);
            refetchPlanData();
            onClose();
        }
        if (type === "update") {
            setButtonLoading(true);
            const apiObj = {
                role: value.role,
                team_id: teamData.id,
                _id: prevData?._id,
                name: value.name,
                status: prevData?.status,
            };

            await updateInviteUser(apiObj);
            refetch();
            setButtonLoading(false);
            onClose();
        }
    };
    console.log(planData);
    return (
        <OverflowModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="w-[calc(100vw-40px)] max-w-[500px] bg-white px-5 xs:px-[30px] sm:px-10 pt-5 pb-10 rounded-[4px] modal-scroll overflow-hidden"
        >
            <div>
                <h2 className=" text-center text-[#000] font-semibold text-[24px] leading-[32.68px]">
                    {type === "invite" ? "Invite" : "Update"} User
                </h2>
                <div className="pt-5"></div>
                <Formik
                    initialValues={
                        prevData
                            ? {
                                  name: prevData?.name,
                                  email: prevData?.email,
                                  role: prevData?.role,
                              }
                            : userInitial
                    }
                    onSubmit={handleSubmit}
                    validationSchema={validateSchema}
                >
                    {({ setFieldValue, values }) => (
                        <Form>
                            <InputField
                                name="name"
                                placeholder="gregg micky"
                                label="Enter user name"
                                height="55px"
                                labelClass={labelStyle}
                                onChange={(e: any) =>
                                    (!prevData ||
                                        prevData.status !== "Activated") &&
                                    setFieldValue("name", e.target.value)
                                }
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
                                onChange={(e: any) =>
                                    !prevData &&
                                    setFieldValue("email", e.target.value)
                                }
                                required
                            />
                            <div className="pt-[30px]"></div>
                            <SelectField
                                name="role"
                                options={userTypeOptions}
                                label="Enter user type"
                            />
                            {type === "invite" &&
                            planData &&
                            planData.user_limit ? (
                                <div className="text-primary pt-1 pb-5 font-semibold text-sm">
                                    User limit exceeded, Please upgrade plan to
                                    further process
                                </div>
                            ) : (
                                <div className="pt-[30px]"></div>
                            )}
                            <div className="flex gap-[15px]">
                                <button
                                    className="h-[45px] border-primary border w-full text-primary rounded hover:bg-primary hover:text-white transition-all duration-200"
                                    type="button"
                                    onClick={onClose}
                                >
                                    Cancel
                                </button>
                                {teamData.role === "admin" && (
                                    <button
                                        type="submit"
                                        className="h-[45px] border-primary border w-full text-white rounded bg-primary hover:bg-primary_dark transition-all duration-200 disabled:opacity-30 disabled:hover:bg-primary"
                                        disabled={
                                            type === "invite" &&
                                            planData &&
                                            planData.user_limit
                                        }
                                    >
                                        {buttonLoading ? (
                                            <span className="flex items-center gap-[10px] justify-center">
                                                <div>
                                                    <LodingAnimation color="white" />
                                                </div>
                                                <div>Loading...</div>
                                            </span>
                                        ) : type === "invite" ? (
                                            "Send Invite"
                                        ) : (
                                            "Update"
                                        )}
                                    </button>
                                )}
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </OverflowModal>
    );
}

export function toCapitalized(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

UserManageModal.defaultProps = {
    type: "invite",
};

export default UserManageModal;

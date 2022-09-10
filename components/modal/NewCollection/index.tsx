/* eslint-disable @next/next/no-img-element */
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import CustomModal from "../../Shared/CustomUtils/CustomModal";
import InputField from "../../Shared/InputField";

import MultiSelect from "../../Shared/MultiSelect";
import * as Yup from "yup";
import OverflowModal from "../../Shared/CustomUtils/OverflowModal";
import { removeEmpty } from "../../../utils/removeEmpty";
import { useQuery } from "react-query";
import { fetchTeamUsers } from "../../../api-call/UserManageApi";
import { useAtom } from "jotai";
import { signupState, team_state } from "../../../state";
import {
    getShareWithArr,
    getShareWithData,
} from "../../../api-call/ReuseableApi";
import LodingAnimation from "../../Shared/LodingAnimation";
import api from "../../../api";
import { toast } from "react-toastify";

type ModalType = {
    isOpen: boolean;
    handleClose: () => any;
};

const initialValues = {
    collection_title: "",
    share_with: "",
};

const validationSchema = Yup.object({
    collection_title: Yup.string().required("Title is required"),
    share_with: Yup.mixed().required("Share with is required"),
});

function NewCollectionModal({ isOpen, handleClose }: ModalType) {
    const [teamData] = useAtom(team_state);
    const [userData] = useAtom(signupState);

    const [buttonLoading, setButtonLoading] = useState(false);

    const { data, isSuccess } = useQuery("get-team-users", () =>
        fetchTeamUsers(teamData.id)
    );

    const options = [
        { value: "all-team-members", label: "All Team Members" },
        { value: "no-team-members", label: "No Team Members" },
    ].concat(isSuccess ? getShareWithArr(data?.data, userData._id) : []);

    const handleCollectionCreate = async (v: any) => {
        setButtonLoading(true);
        try {
            const shareWith = getShareWithData(v.share_with);
            const apiObj = {
                team_id: teamData.id,
                user_id: userData._id,
                title: v.collection_title,
                ...shareWith,
            };
            console.log(apiObj);
            await api.post("/api/collection", apiObj);
            setButtonLoading(false);
            toast.success("New collection created");
            handleClose();
        } catch (error) {
            setButtonLoading(false);
            console.log(error);
        }
    };

    return (
        <OverflowModal
            isOpen={isOpen}
            onRequestClose={handleClose}
            className=" w-[calc(100vw-40px)] max-w-[500px] bg-white "
        >
            <div className="flex justify-between items-center p-[16px_30px] bg-[#101010]">
                <img
                    src="/assets/dashboard/logo-lg.svg"
                    alt=""
                    className="w-[104px] sm:w-[130px]"
                />

                <img
                    src="/assets/collections/modal-close.svg"
                    alt="Close btn"
                    onClick={handleClose}
                    className="w-[18px] sm:w-[23.16px] cursor-pointer"
                />
            </div>
            <div className="px-5 pt-[20px] pb-[30px]">
                <div className="text-base font-bold text-[#000805] leading-[24px]">
                    Create new collection
                </div>
                <div className="pt-5"></div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(v) => handleCollectionCreate(removeEmpty(v))}
                >
                    {() => (
                        <Form>
                            <InputField
                                name="collection_title"
                                label="Collection name"
                                placeholder="collection name"
                                height="44px"
                                labelClass="!text-sm !leading-[19.07px] font-normal"
                            />
                            <div className="pt-[10px]"></div>
                            <CollectionsSelect options={options} />
                            <div className="pt-[20px]"></div>
                            <div className="text-sm leading-[21px] text-[#000805]">
                                Collections are private to the team until
                                publish as a site
                            </div>
                            <div className="pt-[20px]"></div>
                            <div className="flex gap-[15px]">
                                <button
                                    className="h-[43px] border border-primary text-center basis-1/2 rounded text-primary text-sm font-bold hover:bg-primary hover:text-white transition-all duration-200"
                                    onClick={handleClose}
                                    type="button"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="h-[43px] border border-primary text-center basis-1/2 rounded bg-primary text-white text-sm font-bold hover:bg-primary_dark transition-all duration-200"
                                >
                                    {buttonLoading ? (
                                        <span className="flex items-center gap-[10px] justify-center">
                                            <div>
                                                <LodingAnimation color="white" />
                                            </div>
                                            <div>Loading...</div>
                                        </span>
                                    ) : (
                                        "Save"
                                    )}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </OverflowModal>
    );
}

const CollectionsSelect = ({
    options,
    defaultValue,
}: {
    options: object[];
    defaultValue?: SelectResultType | SelectResultType[];
}) => {
    const [value, setValue] = useState<SelectResultType | SelectResultType[]>(
        defaultValue || {
            value: "all-team-members",
            label: "All Team Members",
        }
    );
    useEffect(() => {
        const checkValue = value && checkSelectValue(value);
        if (checkValue) {
            if (typeof checkValue == "object") {
                setValue(checkValue);
            }
        }
    }, [value]);

    return (
        <MultiSelect
            options={options}
            name="share_with"
            inputClass="border-[#E0E0E0]"
            type={
                value
                    ? checkSelectValue(value)
                        ? "single"
                        : "multi"
                    : "single"
            }
            label="Share with"
            value={value}
            height="44px"
            labelClass="!text-sm !leading-[19.07px] font-normal"
            isDual={true}
            valueChange={(v) => {
                setValue(v);
            }}
        />
    );
};

type SelectResultType = {
    label: string;
    value: string;
};

const checkSelectValue = (value: SelectResultType[] | SelectResultType) => {
    if (Array.isArray(value)) {
        return value.find(
            (v) => v.value == "all-team-members" || v.value == "no-team-members"
        );
    } else {
        return (
            value.value.includes("all-team-members") ||
            value.value.includes("no-team-members")
        );
    }
};

export default NewCollectionModal;

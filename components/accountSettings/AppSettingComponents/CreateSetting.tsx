import React from "react";
import CustomModal from "../../Shared/CustomUtils/CustomModal";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import api from "../../../api";
import InputField from "../../Shared/InputField";
import TextAreaField from "../../Shared/TextAreaField";
import { motion } from "framer-motion";
import { useState } from "react";
import { removeEmpty } from "../../../utils/removeEmpty";
import { team_state } from "../../../state";
import { useAtom } from "jotai";
import LodingAnimation from "../../Shared/LodingAnimation";
import {
    CreateContentType,
    createAppSetting,
} from "../../../api-call/AppSettingsApi";
import { GetContentContext } from "../../Context/ContentDataProvider";
import { GetSettingsContext } from "../../Context/SettingsDataProvider";

const validationSchema = Yup.object().shape({
    title: Yup.string().required("title is required."),
    description: Yup.string(),
    index: Yup.number().min(1, "min 1").required("required"),
    color: Yup.string(),
});

interface MyFormValues {
    title: string;
    description?: string;
    color?: string;
    index: number;
}

type SettingModal = {
    isOpen: boolean;
    handleClose: () => any;
    type: string;
};

function CreateSetting({ isOpen, handleClose, type }: SettingModal) {
    const { refetch } = GetSettingsContext();
    const [teamData] = useAtom(team_state);
    const [color, setColor] = useState("#E51937");

    const [buttonLoading, setButtonLoading] = useState(false);

    const initialValues: MyFormValues = {
        title: "",
        index: 99,
        description: "",
        color: type === "tags" ? "#E51937" : "",
    };

    const handleCreateSetting = async (value: any) => {
        setButtonLoading(true);
        const apiObj: CreateContentType = {
            ...value,
            index: value.index - 1,
            team_id: teamData.id,
            type,
        };
        await createAppSetting(apiObj);
        setButtonLoading(false);
        handleClose();
        refetch();
    };

    return (
        <CustomModal
            isOpen={isOpen}
            onRequestClose={handleClose}
            className="w-[calc(100vw-40px)] max-w-[540px] bg-[#fff] rounded-[4px]"
        >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(v) => handleCreateSetting(removeEmpty(v))}
            >
                {() => (
                    <Form>
                        <div className="bg-white_secondary p-5 rounded-lg flex flex-col gap-[10px]">
                            <div className=" flex flex-row w-full items-start gap-[12px]">
                                <div
                                    className={`${
                                        type !== "tags" &&
                                        "w-[calc(100%-82px)] sm:w-[calc(100%-112px)]"
                                    } w-[calc(100%-128px)]  sm:w-[calc(100%-204px)] flex flex-col gap-[10px]`}
                                >
                                    <span className=" capitalize text-sm font-normal leading-[19px] text-[#000805]">
                                        add {getTextWithType(type)}
                                    </span>
                                    <InputField
                                        inputClass=" !h-[44px] !text-[14px] !font-normal !leading-[19px] !text-[#676767]"
                                        name="title"
                                        type="text"
                                        placeholder={`${getTextWithType(
                                            type
                                        ).toLowerCase()} title`}
                                    />
                                </div>
                                <div
                                    className={` ${
                                        type !== "tags" &&
                                        "w-[70px] sm:w-[100px]"
                                    } w-[60px] sm:w-[70px] flex flex-col gap-[10px]`}
                                >
                                    <span className=" capitalize text-sm font-normal leading-[19px] text-[#000805]">
                                        order
                                    </span>
                                    <InputField
                                        inputClass="hidden-arrows !max-w-[100px] !w-full  !h-[44px] !text-[14px] !font-normal !leading-[19px] !text-[#676767]"
                                        name="index"
                                        type="number"
                                        placeholder="0"
                                    />
                                </div>
                                {type === "tags" && (
                                    <div className="mt-[29px] sm:w-[110px] !h-[44px] rounded overflow-hidden !p-0  flex flex-row items-center sm:gap-[10px] border border-solid border-[#DEDEDE] bg-White">
                                        <InputField
                                            inputClass="!w-[42px] sm:!w-[30px] !h-[42px] !p-0 !mt-[6px] !border-none !text-[14px] !font-normal !leading-[19px] !text-[#676767] input-color-rounded-[4px] input-color-padding rounded-[4px] !outline-none"
                                            name="color"
                                            type="color"
                                            myChange={(v) => setColor(v)}
                                            placeholder="Color"
                                        />
                                        <span className=" hidden sm:block capitalize text-sm font-normal leading-[19px] text-[#000805]">
                                            {color}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <TextAreaField
                                inputClass=" !h-[150px] !text-[14px] !font-normal !leading-[19px] !text-[#676767]"
                                name="description"
                                type="text"
                                placeholder="description..."
                            />
                            <div className=" flex justify-between gap-[15px]">
                                <motion.button
                                    onClick={handleClose}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    type="button"
                                    className="w-full h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary  capitalize text-sm leading-[19px] font-bold hover:bg-primary hover:text-White text-primary"
                                >
                                    Cancel
                                </motion.button>
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    type="submit"
                                    className=" w-full h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary bg-primary hover:bg-primary_dark capitalize text-sm leading-[19px] font-bold text-White"
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
                                </motion.button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </CustomModal>
    );
}

export function getTextWithType(type: string): string {
    switch (type) {
        case "funnel":
            return "Funnel Stage";
        case "content":
            return "Content Type";
        case "product":
            return "Product";
        case "industry":
            return "Industry";
        case "tags":
            return "Tag";
        case "region":
            return "Region";
        default:
            return "";
    }
}

export default CreateSetting;

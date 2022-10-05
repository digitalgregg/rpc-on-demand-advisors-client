import { Form, Formik } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import InputField from "../../Shared/InputField";
import { getTextWithType } from "./CreateSetting";
import { SItemType } from "./SettingItem";
import { useState } from "react";
import TextAreaField from "../../Shared/TextAreaField";
import LodingAnimation from "../../Shared/LodingAnimation";
import {
    SettingsItem,
    updateAppSetting,
} from "../../../api-call/AppSettingsApi";
import { removeEmpty } from "../../../utils/removeEmpty";
import { GetSettingsContext } from "../../Context/SettingsDataProvider";
import { useAtom } from "jotai";
import { team_state } from "../../../state";

const initialValues = {
    title: "",
    index: 99,
    description: "",
    color: "#E51937",
};

type EditSettingType = SItemType & {
    isExpand: boolean;
    handleExpand: () => any;
};

type NewSettingItem = SettingsItem & { order?: number };

function EditSettingItem({
    data,
    type,
    isExpand,
    handleExpand,
}: EditSettingType) {
    const [buttonLoading, setButtonLoading] = useState(false);
    const { refetch } = GetSettingsContext();
    const [teamData] = useAtom(team_state);

    const handleUpdateSetting = async (v: any) => {
        setButtonLoading(true);
        const apiObj = {
            ...v,
        };
        await updateAppSetting(data._id, apiObj);
        setButtonLoading(false);
        handleExpand();
        refetch();
    };

    return (
        <AnimatePresence initial={false}>
            {isExpand && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "fit-content" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <Formik
                        initialValues={getInitialValue(data, type)}
                        onSubmit={(v) => handleUpdateSetting(removeEmpty(v))}
                    >
                        {({ values }) => (
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
                                                    placeholder="Color"
                                                />
                                                <span className=" hidden sm:block capitalize text-sm font-normal leading-[19px] text-[#000805]">
                                                    {values.color || "#000000"}
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
                                        {teamData.role === "admin" && (
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
                                                    "Update"
                                                )}
                                            </motion.button>
                                        )}
                                        <motion.button
                                            onClick={handleExpand}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ duration: 0.2 }}
                                            type="button"
                                            className="w-full h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary  capitalize text-sm leading-[19px] font-bold hover:bg-primary hover:text-White text-primary"
                                        >
                                            Cancel
                                        </motion.button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function getInitialValue(data: NewSettingItem, type: string) {
    return {
        title: data.title,
        description: data.description,
        index: data.order,
        color: type === "tags" ? data.color : "",
    };
}

export default EditSettingItem;

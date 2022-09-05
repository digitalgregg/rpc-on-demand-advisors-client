import CustomModal from "../../Shared/CustomUtils/CustomModal";
import { motion } from "framer-motion";
import { Formik, Form } from "formik";
import InputField from "../../Shared/InputField";
import TextAreaField from "../../Shared/TextAreaField";
import { useState } from "react";
import * as Yup from "yup";
import api from "../../../api";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
    title: Yup.string().required("title is required."),
    description: Yup.string(),
    index: Yup.number(),
    type: Yup.string(),
    team_id: Yup.string(),
});
interface MyFormValues {
    title: string;
    description: string;
    color: string;
    index: number;
    team_id: string;
    type: string;
}
export const Modals = ({
    modalIsOpen,
    closeModal,
    HTitle,
    modalCloseFuncton,
    type,
    teamId,
}: any) => {
    const [colorChange, setColorChange] = useState("#909090");
    const initialValues: MyFormValues = {
        team_id: teamId,
        title: "",
        index: 0,
        description: "",
        type: type,
        color: "",
    };
    return (
        <CustomModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="bg-[#fff] rounded-[4px] w-fit"
        >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(valus: MyFormValues) => {
                    api.post(
                        "https://oda-center.herokuapp.com/api/application-settings",
                        valus
                    )
                        .then((res) => {
                            toast.success(res.data.message);
                            modalCloseFuncton(false);
                        })
                        .catch((res) => {
                            toast.error(res.message);
                        });
                }}
            >
                {() => (
                    <Form>
                        <div className="bg-white_secondary p-5 rounded-lg flex flex-col gap-[10px]">
                            <div className=" flex flex-row w-full items-end gap-[12px]">
                                <div className="w-full  flex flex-col gap-[10px]">
                                    <span className=" capitalize text-sm font-normal leading-[19px] text-[#000805]">
                                        add {HTitle}
                                    </span>
                                    <InputField
                                        inputClass=" !h-[44px] !text-[14px] !font-normal !leading-[19px] !text-[#676767]"
                                        name="title"
                                        type="text"
                                        placeholder={`${HTitle} name`}
                                    />
                                </div>
                                <div className=" w-[113px] flex flex-col gap-[10px]">
                                    <span className=" capitalize text-sm font-normal leading-[19px] text-[#000805]">
                                        order
                                    </span>
                                    <InputField
                                        inputClass=" !h-[44px] !text-[14px] !font-normal !leading-[19px] !text-[#676767]"
                                        name="index"
                                        type="number"
                                        placeholder="Stage"
                                    />
                                </div>
                                <div className=" shadow !h-[44px] rounded overflow-hidden !p-0 !w-[153px] flex flex-row items-center gap-[10px] border border-solid border-[#DEDEDE] bg-White">
                                    <InputField
                                        inputClass=" !w-[30px] !h-[42px] !p-0 !mt-[6px] !border-none !text-[14px] !font-normal !leading-[19px] !text-[#676767] input-color-rounded-[4px] input-color-padding rounded-[4px] !outline-none"
                                        name="color"
                                        type="color"
                                        onChange={(e: any) => setColorChange(e)}
                                        placeholder="Stage"
                                    />
                                    <span className=" capitalize text-sm font-normal leading-[19px] text-[#000805]">
                                        {colorChange}
                                    </span>
                                </div>
                            </div>
                            <TextAreaField
                                inputClass=" !h-[150px] !text-[14px] !font-normal !leading-[19px] !text-[#676767]"
                                name="description"
                                type="text"
                                placeholder="Description.."
                            />
                            <div className=" flex justify-between gap-[15px]">
                                <motion.button
                                    onClick={closeModal}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    type="button"
                                    className="w-[327.5px] h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary  capitalize text-sm leading-[19px] font-bold hover:bg-primary hover:text-White text-primary"
                                >
                                    Cancel
                                </motion.button>
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    type="submit"
                                    className="w-[327.5px]  h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary bg-primary hover:bg-primary_dark capitalize text-sm leading-[19px] font-bold text-White"
                                >
                                    save
                                </motion.button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </CustomModal>
    );
};

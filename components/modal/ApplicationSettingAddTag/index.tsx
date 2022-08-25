import CustomModal from "../../CustomUtils/CustomModal";
import { motion } from "framer-motion";
import { Formik, Form } from "formik";
import InputField from "../../Shared/InputField";
import TextAreaField from "../../Shared/TextAreaField";
import { useState } from "react";
interface MyFormValues {
    title: string;
    description: string;
    color: string;
    order: number;
}
const initialValues: MyFormValues = {
    title: "",
    description: "",
    order: 0,
    color: "",
};
export const Modals = ({ modalIsOpen, closeModal, HTitle }: any) => {
    const [colorChange, setColorChange] = useState("#909090");
    return (
        <CustomModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="bg-[#fff] rounded-[4px] w-fit"
        >
            <Formik
                initialValues={initialValues}
                onSubmit={(valus: any) => {
                    console.log(valus), setColorChange(valus.color);
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
                                        name="order"
                                        type="text"
                                        placeholder="Stage"
                                    />
                                </div>
                                <div className=" shadow !h-[44px] rounded overflow-hidden !p-0 !w-[153px] flex flex-row items-center gap-[10px] border border-solid border-[#DEDEDE] bg-White">
                                    <InputField
                                        inputClass=" !w-[30px] !h-[42px] !p-0 !mt-[6px] !border-none !text-[14px] !font-normal !leading-[19px] !text-[#676767] input-color-rounded-[4px] input-color-padding rounded-[4px] !outline-none !border-none"
                                        name="color"
                                        type="color"
                                        onChange={(val: any) =>
                                            setColorChange(val)
                                        }
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
                                    type="button"
                                    className="w-[327.5px] h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary  capitalize text-sm leading-[19px] font-bold text-primary"
                                >
                                    Cancel
                                </motion.button>
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    type="submit"
                                    className="w-[327.5px]  h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary bg-primary capitalize text-sm leading-[19px] font-bold text-White"
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

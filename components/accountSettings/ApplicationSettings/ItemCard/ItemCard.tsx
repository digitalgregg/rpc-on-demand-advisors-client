import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form } from "formik";
import InputField from "../../../Shared/InputField";
import TextAreaField from "../../../Shared/TextAreaField";
import { EditIcon, DeleteIcon } from "../../../CustomIcons";
import { DeleteModals } from "../../../modal/ApplicationSettingDeleteItem";
import TagBadges from "../../../CustomIcons/TagBadges";
interface MyFormValues {
    title: string;
    description: string;
    order: number;
}
const initialValues: MyFormValues = {
    title: "",
    description: "",
    order: 0,
};

const Card = (props: any) => {
    const [editeDetails, setEditeDetails] = useState(false);
    const [deletes, setDeletes] = useState(false);
    const handlerEdite = () => {
        setEditeDetails(!editeDetails);
    };
    const handlerUpDateDetails = () => {
        setEditeDetails(false);
    };
    const handlerCancelDetails = () => {
        setEditeDetails(false);
    };
    const handlerDelete = () => {
        setDeletes(true);
    };
    const closeModal = () => {
        setDeletes(false);
    };

    return (
        <>
            <DeleteModals closeModal={closeModal} modalIsOpen={deletes} />
            <div className=" rounded p-[10px] border border-solid border-[#9E9E9E] flex flex-row justify-between">
                <div className=" flex items-center flex-row gap-[16px]">
                    {props.orderShow && (
                        <div className=" w-[30px] h-[30px] flex justify-center items-center bg-[#E519371A] rounded">
                            <span className=" text-base leading-[22px] font-bold text-primary">
                                {props.order}
                            </span>
                        </div>
                    )}
                    {
                        props.tagIconShow && (<TagBadges color={props.color} />)
                    }

                    <span className=" text-sm leading-[19px] font-normal text-black">
                        {props.name}
                    </span>
                </div>
                <div className=" flex items-center flex-row gap-5">
                    <div onClick={handlerEdite} className=" cursor-pointer">
                        <EditIcon width="18px" height="18px" stroke="#E51937" />
                    </div>
                    <div onClick={handlerDelete} className=" cursor-pointer">
                        <DeleteIcon
                            width="18px"
                            height="18px"
                            stroke="#E51937"
                        />
                    </div>
                </div>
            </div>
            {editeDetails === true ? (
                <Formik
                    initialValues={initialValues}
                    onSubmit={(valus) => console.log(valus)}
                >
                    {() => (
                        <Form>
                            <div className="bg-white_secondary p-[10px] rounded-lg flex flex-col gap-[20px]">
                                <div className=" flex flex-row w-full gap-[20px]">
                                    <div className="w-[537px]  flex flex-col gap-[16px]">
                                        <span>Edit Funnel Stage</span>
                                        <InputField name="title" type="text" />
                                    </div>
                                    <div className=" w-[113px] flex flex-col gap-[16px]">
                                        <span>Order</span>
                                        <InputField name="order" type="text" />
                                    </div>
                                </div>
                                <TextAreaField
                                    inputClass="!h-[150px]"
                                    name="description"
                                    type="text"
                                />
                                <div className=" flex justify-between gap-[15px]">
                                    <motion.button
                                        onClick={handlerUpDateDetails}
                                        whileTap={{ scale: 0.9 }}
                                        type="submit"
                                        className="w-[327.5px] h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary bg-primary capitalize text-base leading-[22px] font-semibold text-White"
                                    >
                                        Update
                                    </motion.button>
                                    <motion.button
                                        onClick={handlerCancelDetails}
                                        whileTap={{ scale: 0.9 }}
                                        type="button"
                                        className="w-[327.5px] h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary  capitalize text-base leading-[22px] font-semibold text-primary"
                                    >
                                        Cancel
                                    </motion.button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            ) : undefined}
        </>
    );
};

export default Card;

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Formik, Form } from "formik";
import InputField from "../../../Shared/InputField";
import TextAreaField from "../../../Shared/TextAreaField";
import { EditIcon, DeleteIcon } from "../../../CustomIcons";
import { DeleteModals } from "../../../modal/ApplicationSettingDeleteItem";
import TagBadges from "../../../CustomIcons/TagBadges";
import api from "../../../../api";
import * as Yup from "yup";
import { toast } from "react-toastify";

interface MyFormValues {
    title: string;
    description: string;
    index: number;
}
const initialValues: MyFormValues = {
    title: "",
    description: "",
    index: 0,
};

const Card = (props: any) => {
    const [editeDetails, setEditeDetails] = useState(false);
    const [deletes, setDeletes] = useState(false);
    const [itemId, setItemId] = useState("");
    const [passDeleteApi, setPassDeleteApi] = useState("");

    const validate = Yup.object({
        title: Yup.string().required("title is required"),
        description: Yup.string(),
        order: Yup.number(),
    });
    const handlerEdite = () => {
        setEditeDetails(!editeDetails);
        setItemId(props.id);
    };
    const handlerUpDateDetails = () => {
        setEditeDetails(true);
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
    useEffect(() => {
        if (deletes === true) {
            setItemId(props.id);
            setPassDeleteApi(
                `https://oda-center.herokuapp.com/api/application-settings/${itemId}`
            );
        }
        if (deletes === false) setPassDeleteApi("");
    }, [deletes]);

    return (
        <>
            <DeleteModals
                apiPass={passDeleteApi}
                closeModal={closeModal}
                modalIsOpen={deletes}
                modalCloseFuncton={setDeletes}
            />
            <div className=" rounded p-[10px] border border-solid border-[#9E9E9E] flex flex-row justify-between">
                <div className=" flex items-center flex-row gap-[16px]">
                    {props.orderShow && (
                        <div className=" w-[30px] h-[30px] flex justify-center items-center bg-[#E519371A] rounded">
                            <span className=" text-base leading-[22px] font-bold text-primary">
                                {props.index}
                            </span>
                        </div>
                    )}
                    {props.tagIconShow && <TagBadges color={props.color} />}

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
            <AnimatePresence initial={false}>
                {editeDetails === true && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "fit-content" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validate}
                            onSubmit={(valus) => {
                                api.put(
                                    `https://oda-center.herokuapp.com/api/application-settings/${itemId}`,
                                    valus
                                ).then((res) => {
                                    toast.success(res.data.message);
                                    setEditeDetails(!editeDetails);
                                });
                                console.log(valus);
                            }}
                        >
                            {() => (
                                <Form>
                                    <div className="bg-white_secondary p-[10px] rounded-lg flex flex-col gap-[20px]">
                                        <div className=" flex flex-row w-full gap-[20px]">
                                            <div className="w-[537px]  flex flex-col gap-[16px]">
                                                <span>Edit Funnel Stage</span>
                                                <InputField
                                                    name="title"
                                                    type="text"
                                                    required
                                                />
                                            </div>
                                            <div className=" w-[113px] flex flex-col gap-[16px]">
                                                <span>Order</span>
                                                <InputField
                                                    name="index"
                                                    type="text"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <TextAreaField
                                            inputClass="!h-[150px]"
                                            name="description"
                                            type="text"
                                            required
                                        />
                                        <div className=" flex justify-between gap-[15px]">
                                            <motion.button
                                                onClick={handlerUpDateDetails}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ duration: 0.2 }}
                                                whileHover={{
                                                    backgroundColor: "#890F21",
                                                }}
                                                type="submit"
                                                className="w-[327.5px] h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary bg-primary capitalize text-base leading-[22px] font-semibold text-White"
                                            >
                                                Update
                                            </motion.button>
                                            <motion.button
                                                onClick={handlerCancelDetails}
                                                whileTap={{ scale: 0.9 }}
                                                transition={{ duration: 0.2 }}
                                                whileHover={{
                                                    backgroundColor: "#E51937",
                                                }}
                                                type="button"
                                                className="w-[327.5px] h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary hover:text-White capitalize text-base leading-[22px] font-semibold text-primary"
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
        </>
    );
};

export default Card;

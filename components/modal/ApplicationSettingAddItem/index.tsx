import CustomModal from "../../Shared/CustomUtils/CustomModal";
import { motion } from "framer-motion";
import { Formik, Form } from "formik";
import InputField from "../../Shared/InputField";
import TextAreaField from "../../Shared/TextAreaField";
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
    team_id: string;
    title: string;
    description: string;
    index: number;
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
    const initialValues: MyFormValues = {
        team_id: teamId,
        title: "",
        description: "",
        index: 0,
        type: type,
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
                onSubmit={(valus) => {
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
                            <div className=" flex flex-row w-full gap-[12px]">
                                <div className="w-[537px]  flex flex-col gap-[10px]">
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
                                    whileHover={{ backgroundColor: "#E51937" }}
                                    type="button"
                                    className="w-[327.5px] h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary  hover:text-White capitalize text-sm leading-[19px] font-bold text-primary"
                                >
                                    Cancel
                                </motion.button>
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                    whileHover={{ backgroundColor: "#890F21" }}
                                    type="submit"
                                    className="w-[327.5px]  h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary bg-primary  capitalize text-sm leading-[19px] font-bold text-White"
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

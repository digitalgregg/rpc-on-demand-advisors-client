import CustomModal from "../../Shared/CustomUtils/CustomModal";
import { motion } from "framer-motion";
import { Formik, Form } from "formik";
import InputField from "../../Shared/InputField";
import TextAreaField from "../../Shared/TextAreaField";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    title: Yup.string().email().required("title is required."),
    description: Yup.string(),
    order: Yup.string(),
    type: Yup.string(),
});

interface MyFormValues {
    title: string;
    description: string;
    order: number;
    type: string;
}
const initialValues: MyFormValues = {
    title: "",
    description: "",
    order: 0,
    type: "industry",
};
export const Modals = ({ modalIsOpen, closeModal, HTitle }: any) => {
    return (
        <CustomModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="bg-[#fff] rounded-[4px] w-fit"
        >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(valus) => console.log(valus)}
            >
                {({ handleSubmit, isSubmitting, setFieldValue }) => (
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}
                    >
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
                                        name="order"
                                        type="text"
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
                    </form>
                )}
            </Formik>
        </CustomModal>
    );
};

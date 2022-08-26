import classnames from "classnames";
import { motion } from "framer-motion";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import {
    Sadicon,
    HappyIcon,
    NormalIcon,
    SmileIcon,
    IgnorIcon,
} from "../../CustomIcons";
import CustomModal from "../../Shared/CustomUtils/CustomModal";
import InputField from "../../Shared/InputField";
import TextAreaField from "../../Shared/TextAreaField";
const imageUrl = [
    {
        id: 0,
        Url: Sadicon,
        text: "I don't like something",
    },
    {
        id: 1,
        Url: IgnorIcon,
        text: "I like something...1",
    },
    {
        id: 2,
        Url: NormalIcon,
        text: "I like something...2",
    },
    {
        id: 3,
        Url: SmileIcon,
        text: "I like something...3",
    },
    {
        id: 4,
        Url: HappyIcon,
        text: "I like something...4",
    },
];

const feedbackSchema = Yup.object({
    iconFill: Yup.string(),
    email: Yup.string().required("Email is required"),
    feedbackNote: Yup.string().required("Feedback note is required"),
});
// .required("Icon is required"),
export const Modals = ({ modalIsOpen, closeModal }: any) => {
    const [activeIcon, setActiveIcon] = useState(3);
    const [activeIconFill, setActiveIconFill] = useState("");
    // console.log(activeIconFill, "fill text");
    const IconActionHandlar = (i: any) => {
        setActiveIcon(i);
        return true;
    };

    useEffect(() => {
        imageUrl.map((e) => {
            if (activeIcon === e.id) {
                setActiveIconFill(e.text);
            }
        });
    }, [activeIcon]);
    return (
        <CustomModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="bg-[#fff] rounded-[4px] w-fit"
        >
            <motion.div
                initial={{ zoom: 0.5, opacity: 0.5 }}
                animate={{ zoom: 1, opacity: 1 }}
            >
                <div className=" bg-White max-w-[680px] rounded relative py-[20px] px-[30px] sm:py-[40px] sm:px-[50px]">
                    <h4 className="mb-[10px] text-lg leading-[25px] font-semibold text-[#000805]">
                        Give feedback
                    </h4>
                    <p
                        className={classnames(
                            "text-[#101010] text-base font-normal leading-[22px]"
                        )}
                    >
                        What do you think of the content camel website?
                    </p>
                    <Formik
                        initialValues={{
                            iconFill: "",
                            email: "",
                            feedbackNote: "",
                        }}
                        validationSchema={feedbackSchema}
                        onSubmit={(valus) => console.log(valus)}
                    >
                        {() => (
                            <Form>
                                <div className=" flex flex-row justify-between gap-[20px] my-5">
                                    {imageUrl.map(({ Url }: any, i: any) => (
                                        <motion.div
                                            onClick={() => IconActionHandlar(i)}
                                            key={i}
                                            initial={{
                                                borderRadius: "100%",
                                            }}
                                            whileTap={{ scale: 1 }}
                                            whileHover={{
                                                scale: 1.2,
                                            }}
                                            className={`${
                                                activeIcon === i
                                                    ? "bg-primary"
                                                    : ""
                                            }  rounded-full flex justify-center items-center h-[50px] w-[50px]`}
                                        >
                                            <div>
                                                <Url
                                                    color={`${
                                                        activeIcon === i
                                                            ? "#fff"
                                                            : "#000"
                                                    }`}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <InputField
                                    name="email"
                                    label="Enter your email"
                                    placeholder="...demo@gmil.com"
                                    height="52px"
                                    className="mb-5"
                                    labelClass="!text-base !font-semibold !leading-[22px] !text-[#000805]"
                                />
                                <TextAreaField
                                    name="feedbackNote"
                                    placeholder="Type here"
                                    label="Enter your feedback note"
                                    labelClass="!text-base !font-semibold !leading-[22px] !text-[#000805]"
                                />
                                <div className=" flex justify-between gap-[10px] mt-[30px]">
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        onClick={closeModal}
                                        type="button"
                                        className="w-[182.5px] h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary  capitalize text-base leading-[22px] font-semibold text-primary"
                                    >
                                        Cancel
                                    </motion.button>
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        type="submit"
                                        className="w-[182.5px] h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary bg-primary capitalize text-base leading-[22px] font-semibold text-White"
                                    >
                                        send
                                    </motion.button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </motion.div>
        </CustomModal>
    );
};

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
import { getLocal } from "../../../utils/localStorage";
import api from "../../../api";
import { toast } from "react-toastify";
import LodingAnimation from "../../Shared/LodingAnimation";
const imageUrl = [
  {
    id: 0,
    Url: Sadicon,
    text: "Sad",
  },
  {
    id: 1,
    Url: IgnorIcon,
    text: "Ignor",
  },
  {
    id: 2,
    Url: NormalIcon,
    text: "Satisfied",
  },
  {
    id: 3,
    Url: SmileIcon,
    text: "Smile",
  },
  {
    id: 4,
    Url: HappyIcon,
    text: "Happy",
  },
];

const feedbackSchema = Yup.object({
  user_id: Yup.string(),
  type: Yup.string(),
  email: Yup.string().required("Email is required"),
  message: Yup.string().required("Feedback note is required"),
});

type MyFormValues = {
  user_id: string;
  type: string;
  email: string;
  message: string;
};

export const Modals = ({ modalIsOpen, closeModal, modalCloseFuncton }: any) => {
  const [activeIcon, setActiveIcon] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIconFill, setActiveIconFill] = useState<string>("");
  const teamId = getLocal("user");
  const initialValues: MyFormValues = {
    user_id: teamId?._id,
    type: activeIconFill,
    message: "",
    email: "",
  };

  const IconActionHandlar = ({ i, text }: any) => {
    setActiveIcon(i);
    setActiveIconFill(text);
    return true;
  };

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
            initialValues={initialValues}
            validationSchema={feedbackSchema}
            onSubmit={(valus) => {
              setIsLoading(true);
              api
                .post(`/api/feedback`, {
                  user_id: valus.user_id,
                  type: activeIconFill,
                  message: valus.message,
                  email: valus.email,
                })
                .then((res) => {
                  setIsLoading(false);
                  toast.success(res.data.message);
                  modalCloseFuncton(false);
                })
                .catch((res) => {
                  setIsLoading(false);
                  toast.error(res.message);
                });
            }}
          >
            {() => (
              <Form>
                <div className=" flex flex-row justify-between gap-[20px] my-5">
                  {imageUrl.map(({ Url, text }: any, i: any) => (
                    <motion.div
                      onClick={() =>
                        IconActionHandlar({
                          i,
                          text,
                        })
                      }
                      key={i}
                      initial={{
                        borderRadius: "100%",
                      }}
                      whileTap={{ scale: 1 }}
                      whileHover={{
                        scale: 1.2,
                      }}
                      className={`${
                        activeIcon === i ? "bg-primary" : ""
                      }  rounded-full flex justify-center items-center h-[50px] w-[50px]`}
                    >
                      <div>
                        <Url color={`${activeIcon === i ? "#fff" : "#000"}`} />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <InputField
                  name="email"
                  label="Enter your email"
                  placeholder="...email@gmil.com"
                  height="52px"
                  className="mb-5"
                  labelClass="!text-base !font-semibold !leading-[22px] !text-[#000805]"
                />
                <TextAreaField
                  name="message"
                  placeholder="Type here"
                  label="Enter your feedback note"
                  labelClass="!text-base !font-semibold !leading-[22px] !text-[#000805]"
                />
                <div className=" flex justify-between gap-[10px] mt-[30px]">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    onClick={closeModal}
                    whileHover={{
                      backgroundColor: "#E51937",
                    }}
                    type="button"
                    className="w-[182.5px] h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary  capitalize text-base leading-[22px] font-semibold hover:text-White text-primary"
                  >
                    Cancel
                  </motion.button>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    transition={{ duration: 0.2 }}
                    whileHover={{
                      backgroundColor: "#890F21",
                    }}
                    className="w-[182.5px] h-[45px] py-[11px] px-[32px] rounded border-[1px] border-solid border-primary bg-primary capitalize text-base leading-[22px] font-semibold text-White"
                  >
                    {isLoading === true ? (
                         <span className="flex items-center gap-[10px] justify-start">
                         <div>
                           <LodingAnimation color="white" />
                         </div>
                         <div>Send</div>
                       </span>
                    ) : (
                      "send"
                    )}
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

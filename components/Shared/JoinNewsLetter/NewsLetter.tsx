import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import LodingAnimation from "../LodingAnimation";

const validate = Yup.object({
    email: Yup.string().email().required("Enter a valid email!"),
});
interface MyFormValues {
    email: string;
}
const initialValue: MyFormValues = {
    email: "",
};

const NewsLetter = ({ status, message, onValidated }: any) => {
    return (
        <div className="lg:mb-0 mb-[23px]">
            <div className="mt-[30px] mb-[16.3px]">
                <span className=" text-[#ffffff] text-base leading-[22px]">
                    Join our newsletter
                </span>
            </div>
            <Formik
                initialValues={initialValue}
                validationSchema={validate}
                onSubmit={(value, { resetForm }) => {
                    console.log("submit", value);
                    onValidated({ EMAIL: value.email });
                    resetForm();
                    toast.success("Thank you for subscribing!");
                }}
            >
                {({ values, handleChange }) => (
                    <Form>
                        <div className=" bg-[#ffffff] rounded pl-[10px] py-[3px] pr-[3px] flex items-center">
                            <input
                                className=" bg-transparent border-none outline-none text-[#676767]"
                                name="email"
                                placeholder="Youremail@gmail.com"
                                type="email"
                                onChange={handleChange}
                                value={values.email}
                            />
                            <button
                                type="submit"
                                className=" ml-[3px] text-[#ffffff] text-sm leading-[19px] py-[10px] px-[11px] border border-inherit border-solid border-primary hover:border-[#890F21] hover:text-[#FFFFFF] bg-primary hover:bg-[#890F21] rounded hover-transition"
                            >
                                {status === "sending" ? (
                                    <LodingAnimation color="white" />
                                ) : (
                                    "Subscribe"
                                )}
                            </button>
                        </div>
                        <ErrorMessage
                            component="div"
                            className="font-normal text-primary mt-[5px] text-[14px]"
                            name="email"
                        />
                    </Form>
                )}
            </Formik>
        </div>
    );
};
export default NewsLetter;

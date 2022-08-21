import React, { useState } from "react";
import { Formik, Form } from "formik";
import InputField from "../../Shared/InputField";
import { TeaxArea } from "../../Shared/TeaxArea";
import * as Yup from "yup";
import CustomModal from "../../CustomUtils/CustomModal";
const stypes =
    "text-[16px] leading-[22px] text-[$000000] font-normal mb-[20px]";

const validate = Yup.object({
    yourName: Yup.string()
        .min(3, "Must be 2 characters or less")
        .required("Your Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
});
interface MyFormValues {
    yourName: string;
    subject: string;
    email: string;
    description: string;
}
const initialValues: MyFormValues = {
    yourName: "",
    subject: "",
    email: "",
    description: "",
};
const ContactFrom: React.FC<{}> = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    // console.log(selectedOption);

    return (
        <>
            <CustomModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="bg-[#fff] rounded-[4px] w-fit"
            />
            <div className=" flex flex-col lg:flex-row ">
                <div>
                    <h1 className=" text-2xl leading-[33px] font-semibold text-[#000000] mb-[20px]">
                        Questions. We all have them.
                    </h1>
                    <p className={stypes}>
                        We’re available to connect and talk about sales
                        enablement, go to market, and answer anything you want
                        to know about the product.
                    </p>
                    <p className={stypes}>
                        Want to schedule time to talk or get a demo? Just find a
                        time here that works for you:
                        <a className=" text-primary">Schedule a call.</a>
                    </p>
                    <p className={stypes}>
                        Or email us anytime with the form. <br />
                        <a className=" text-primary">Or use this address.</a>
                    </p>
                    <p className={stypes}>
                        Or chat us up with that icon in the lower right.
                    </p>
                    <p className={stypes}>
                        We’re looking forward to connecting with you!
                    </p>
                </div>
                <div className=" w-full lg:max-w-[600px] lg:w-[600px] bg-White rounded py-[50px] px-[40px]">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validate}
                        onSubmit={(valus) => console.log(valus)}
                    >
                        {() => (
                            <div className=" w-full">
                                {/* {console.log(formik.values)} */}
                                <div className=" mb-[30px]">
                                    <h1 className="mb-[4px] text-[32px] leading-[44px] font-bold text-black_primary">
                                        Get In Touch With Us
                                    </h1>
                                    <p className=" text-[18px] leading-[25px] font-normal text-black_primary">
                                        Let’s contact us if you have any
                                        questions?
                                    </p>
                                </div>

                                <Form>
                                    <InputField
                                        label="Your Name"
                                        name="yourName"
                                        type="text"
                                    />
                                    <InputField
                                        label="Email"
                                        name="email"
                                        type="email"
                                    />
                                    <InputField
                                        label="Subject"
                                        name="subject"
                                        type="text"
                                    />
                                    <TeaxArea
                                        label="Description"
                                        name="description"
                                        type="text"
                                        className=" !h-[150px] !flex !items-start"
                                    />
                                    <button
                                        type="submit"
                                        className=" rounded w-full mt-[40px] h-[55px] bg-primary text-white"
                                    >
                                        Send Request
                                    </button>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
};

export default ContactFrom;

import React, { useState } from "react";
import { Formik, Form } from "formik";
import TextField from "../../Shared/InputField";
import TeaxArea from "../../Shared/TextAreaField";
import * as Yup from "yup";
import CustomModal from "../../Shared/CustomUtils/CustomModal";
import DropdownField from "../../Shared/DropdownField";
import { DropdownItem } from "../../Shared/Dropdown";
const stypes =
    "text-[16px] leading-[22px] text-[$000000] font-normal mb-[20px]";

const SelectaTopic = [
    {
        name: "Billing issue",
    },
    {
        name: "Pricing",
    },
    {
        name: "Feature",
    },
    {
        name: "Bug report",
    },
    {
        name: "Enterprise",
    },
    {
        name: "Others",
    },
];

const validationSchema = Yup.object({
    yourname: Yup.string()
        .min(2, "Must be 2 characters or less")
        .required("Fast Name is required"),
    email: Yup.string()
        .min(2, "Must be 2 characters or less")
        .required("Last Name is required"),
    select: Yup.string(),
    subject: Yup.string(),
    description: Yup.string(),
});
// interface MyFormValues {
//     yourname: string;
//     subject: string;
//     email: string;
//     select: string;
//     description: string;
// }
// const initialValues: MyFormValues = {
//     yourname: "",
//     subject: "",
//     email: "",
//     select: "",
//     description: "",
// };
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
                    <div className=" w-full">
                        {/* {console.log(formik.values)} */}
                        <div className=" mb-[30px]">
                            <h1 className="mb-[4px] text-[32px] leading-[44px] font-bold text-black_primary">
                                Get In Touch With Us
                            </h1>
                            <p className=" text-[18px] leading-[25px] font-normal text-black_primary">
                                Let’s contact us if you have any questions?
                            </p>
                        </div>
                        <Formik
                            initialValues={{
                                yourname: "",
                                email: "",
                                select: "",
                                subject: "",
                                description: "",
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(valus) => console.log(valus)}
                        >
                            {() => (
                                <Form>
                                    <div className=" flex flex-col gap-[16px]">
                                        <DropdownField
                                            className="!border-[#e0e0e0]"
                                            height="44px"
                                            label="Select a Topic"
                                            name="select"
                                            placeholderClass="!text-sm"
                                            iconClass="!w-[12px]"
                                            labelClass="!text-sm"
                                            placeholder="Select a Topic"
                                        >
                                            {SelectaTopic.map((v, i) => (
                                                <DropdownItem
                                                    key={i}
                                                    value={v.name}
                                                >
                                                    {v.name}
                                                </DropdownItem>
                                            ))}
                                        </DropdownField>

                                        <TextField
                                            label="Your Name"
                                            name="yourname"
                                            type="text"
                                            placeholder={"Readme..."}
                                        />
                                        <TextField
                                            label="Email"
                                            name="email"
                                            type="text"
                                            placeholder={"Readme..."}
                                        />
                                        <TextField
                                            label="Subject"
                                            name="subject"
                                            type="text"
                                            placeholder={"Readme..."}
                                        />
                                        <TeaxArea
                                            className={"mt-[10px] "}
                                            label="Description"
                                            name="description"
                                            placeholder="Text here..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className=" rounded w-full mt-[40px] h-[55px] bg-primary text-white"
                                    >
                                        Send Request
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactFrom;

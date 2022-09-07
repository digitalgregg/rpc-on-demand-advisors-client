import React, { useState } from "react";
import { Formik, Form } from "formik";
import TextField from "../../Shared/InputField";
import TeaxArea from "../../Shared/TextAreaField";
import * as Yup from "yup";
import CustomModal from "../../Shared/CustomUtils/CustomModal";
import DropdownField from "../../Shared/DropdownField";
import { DropdownItem } from "../../Shared/Dropdown";
import api from "../../../api";
import { toast } from "react-toastify";
import { Modals } from "../../modal/contactPageModal/modal";
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
    name: Yup.string()
        .min(2, "Must be 2 characters or less")
        .required("Name is required"),
    email: Yup.string().email().required("email is required"),
    select_topic: Yup.string(),
    subject: Yup.string(),
    description: Yup.string(),
});
type MyFormValues = {
    name: string;
    subject: string;
    email: string;
    select_topic: string;
    description: string;
};
const initialValues: MyFormValues = {
    name: "",
    subject: "",
    email: "",
    select_topic: "",
    description: "",
};

const ContactFrom = ({ modalOpenfunction }:any) => {

    return (
        <>
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
                        <a className=" text-primary"> Schedule a call.</a>
                    </p>
                    <p className={stypes}>
                        Or email us anytime with the form. <br />
                        <a className=" text-primary"> Or use this address.</a>
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
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(valus) => {
                                api.post(
                                    `https://oda-center.herokuapp.com/api/get-touch
                                `,
                                    valus
                                )
                                    .then((res) => {
                                        if (res.status === 200) {
                                            toast.success(res.data);
                                            modalOpenfunction(true);
                                        }
                                    })
                                    .catch((err) => {
                                        toast.error(err.message);
                                    });
                            }}
                        >
                            {() => (
                                <Form>
                                    <div className=" flex flex-col gap-[16px]">
                                        <DropdownField
                                            className="!border-[#e0e0e0]"
                                            height="44px"
                                            label="Select a Topic"
                                            name="select_topic"
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
                                            name="name"
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
                                        className="hover-transition hover:bg-primary_dark hover:border-primary_dark border border-solid border-primary rounded w-full mt-[40px] h-[55px] bg-primary text-white"
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

import Link from "next/link";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Layout from "../components/Shared/Layout/Layout";
import TextField from "../components/Shared/InputField";
import TeaxArea from "../components/Shared/TextAreaField";
import { Modals } from "../components/modal/contactPageModal/modal";
import DropdownField from "../components/Shared/DropdownField";
import { DropdownItem, Dropdown } from "../components/Shared/Dropdown";

const SelectaTopic = [
    {
        name: "Woman",
    },
    {
        name: "Transgender",
    },
    {
        name: "Non-binary/non-conforming",
    },
    {
        name: "Prefer not to respond",
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

const ContactUs = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <Layout>
            <Modals closeModal={closeModal} modalIsOpen={modalIsOpen} />
            <div className="bg-black_secondary ">
                <div className="container mx-auto ">
                    <div className="h-[170px] lg:h-[375px] flex items-center ">
                        <h1 className=" text-White">Contact Us</h1>
                    </div>
                </div>
            </div>
            <div className=" bg-white_secondary">
                <div className="container py-[60px] lg:relative mx-auto">
                    <div className=" flex flex-col gap-[40px] lg:flex-row justify-between lg:h-[42.20rem]">
                        <div className="max-w-[500px]">
                            <h2 className="mb-6 ">
                                Questions. We have answers.
                            </h2>
                            <div className="max-w-[408px] flex flex-col gap-[24px]">
                                <p>
                                    We’re available to connect and talk with you
                                    about our sales enablement and content
                                    marketing tool.
                                </p>
                                <p>
                                    Want to schedule a demo? Find a time that
                                    works for you here:{" "}
                                    <Link href="Schedule-demo">
                                        <a className=" text-primary">
                                            Schedule a demo.
                                        </a>
                                    </Link>{" "}
                                </p>

                                <p>
                                    We’re looking forward to connecting with
                                    you!
                                </p>
                            </div>
                        </div>
                        <div className=" lg:absolute -top-[13.5rem] xs:right-[20px] sm:right-[40px] md:right-[50px] lg:right-[47px] xl:right-[60px] 2xl:right-[120px] ">
                            <div className=" rounded-lg xl:w-[610px] 2xl:w-[705px] 4xl:w-[765px] !max-w-[765px] px-[27px] md:px-[30px] 3xl:px-[70px] py-[20px] lg:py-[40px] 2xl:py-[50px] 2xl:px-[40px] 3xl:py-[50px] shadow-sm bg-White">
                                <div className="max-w-[354px] flex flex-col mb-[30px] gap-[4px]">
                                    <h1 className=" text-[32px] font-bold leading-[44px] text-black_primary">
                                        Get In Touch With Us
                                    </h1>
                                    <span className=" text-[18px] font-semibold leading-[25px] text-gray">
                                        Let’s contact us if you have any
                                        questions?
                                    </span>
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
                                                    {SelectaTopic.map(
                                                        (v, i) => (
                                                            <DropdownItem
                                                                key={i}
                                                                value={v.name}
                                                            >
                                                                {v.name}
                                                            </DropdownItem>
                                                        )
                                                    )}
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
                </div>
            </div>
        </Layout>
    );
};

export default ContactUs;

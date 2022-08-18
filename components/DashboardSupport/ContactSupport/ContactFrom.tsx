import React, { useState } from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import TeaxArea from "./TeaxArea";
import * as Yup from "yup";
import Select from "react-select";
import {selectCustomStyles} from "../../../utils/helpers"

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
const flavourOptions = [
    {
        titile: "red",
    },
    {
        titile: "blue",
    },
    {
        titile: "black",
    },
    {
        titile: "orenge",
    },
];



const ContactFrom: React.FC<{}> = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    // console.log(selectedOption);
    const initialValues: MyFormValues = {
        yourName: "",
        subject: "",
        email: "",
        description: "",
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={(valus) => console.log(valus)}
        >
            {(formik) => (
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

                    <Form>
                        <Select
                            placeholder="Select a Topic"
                            onChange={(e: any) =>
                                setSelectedOption(e.value)
                            }
                            options={flavourOptions}
                            styles={selectCustomStyles}
                            components={{
                                DropdownIndicator: () => null,
                                IndicatorSeparator: () => null,
                            }}
                        />
                        <TextField
                            label="Your Name"
                            name="yourName"
                            type="text"
                        />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Subject" name="subject" type="text" />
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
    );
};

export default ContactFrom;

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../../Shared/InputField";
const listItemClass =
    " text-base font-normal leading-[22px] text-[#101010] !max-w-[400px] first:border-none first:p-0 lg:px-5 lg:border-l lg:border-solid lg:border-[#DEDEDE]";
const validate = Yup.object({
    title: Yup.string(),
    location: Yup.string(),
    description: Yup.string(),
});
type ConfirmYourDetailsType = {
    title: string;
    location: string;
    description: string;
};
const initialValues: ConfirmYourDetailsType = {
    title: "",
    location: "",
    description: "",
};
const UpdateYourDetails = () => {
    const datas = {
        name: "greeg",
        email: "gregg@gmail.com",
    };
    return (
        <div>
            <h5 className=" text-center mb-10 mt-16 text-[#000000] text-lg leading-[25px] font-bold capitalize">
                Confirm your details
            </h5>
            <div className=" rounded bg-White p-5  w-full shadow-md">
                <ul className=" flex flex-col lg:flex-row justify-between gap-[20px]">
                    <li className={`${listItemClass}`}>
                        Monday, August 8, 2022
                    </li>
                    <li className={`${listItemClass}`}>
                        8:00pm - 9:00pm +6 @ Zoom
                    </li>
                    <li className={`${listItemClass}`}>
                        Dave + You: (1 hour) [Video/conf call]
                    </li>
                    <li className={`${listItemClass}`}>
                        <a>https:// zoom.us/j/456328967</a>
                    </li>
                </ul>
                <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-10">
                    <div className=" flex flex-col gap-1 sm:gap-2">
                        <span className=" text-lg leading-[25px] text-black font-semibold">Your Name</span>
                        <p className=" text-base leading-[22px] font-normal text-black">{datas.name}</p>
                    </div>
                    <div className=" flex flex-col gap-1 sm:gap-2">
                        <span className=" text-lg leading-[25px] text-black font-semibold">Your Email</span>
                        <p className=" text-base leading-[22px] font-normal text-black">{datas.email}</p>
                    </div>
                </div>
                <div className="mt-10">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validate}
                        onSubmit={(valus) => console.log(valus)}
                    >
                        {() => (
                            <Form>
                                <div className=" flex flex-col lg:flex-row gap-5 w-full">
                                    <InputField
                                        label="Title"
                                        name="title"
                                        type="text"
                                        value=""
                                        className="w-full"
                                        placeholder="type your name..."
                                    />
                                    <InputField
                                        label="Location"
                                        name="location"
                                        type="text"
                                        className="w-full"
                                        value=""
                                        placeholder="type your location..."
                                    />
                                    <InputField
                                        label="Description"
                                        name="description"
                                        type="text"
                                        className="w-full"
                                        value=""
                                        placeholder="type your location..."
                                    />
                                </div>
                                <div className=" mt-10 flex flex-col sm:flex-row gap-3">
                                    <button
                                        type="submit"
                                        className=" text-base leading-[22px] text-White font-semibold rounded py-[11px] px-[32px] bg-primary"
                                    >
                                        Update
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default UpdateYourDetails;

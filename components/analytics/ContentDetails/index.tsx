import { Form, Formik } from "formik";
import React from "react";
import InputField from "../../Shared/InputField";
import Pagination from "../../Shared/Pagination";
import ContentDetailsCard from "./ContentDetailsCard";
import * as Yup from "yup";

const initialWishlist = {
    title: "",
    funnel_stage: "",
    content_type: "",
};

const wishlistSchema = Yup.object({
    funnel_stage: Yup.string().required("Funnel stage Request is required"),
    content_type: Yup.string().required("Content Type is required"),
    title: Yup.string().required("Title is required"),
});
const ContentDetails = () => {
    const ContentDetailsData = [{}, {}];
    return (
        <div className=" bg-White rounded p-3 py-[24px]  sm:p-[30px]">
            <div>
                <div>
                    <Formik
                        initialValues={initialWishlist}
                        onSubmit={(value) => {
                            console.log(value);
                        }}
                    >
                        {() => (
                            <Form>
                                <div className="flex justify-between gap-[20px] w-full mb-[20px]">
                                    <div className="text-base sm:text-xl text-[#000] md:leading-[27.24px] font-semibold">
                                        Content Details
                                    </div>
                                </div>

                                <div className=" flex flex-col md:flex-row justify-between w-full gap-[15px] md:gap-[30px]">
                                    <InputField
                                        name="title"
                                        label="Title"
                                        inputClass="!h-[45px] md:!h-[55px]"
                                        placeholder="Piash"
                                        labelClass="!text-sm !leading-[19.07px]"
                                        className="w-full"
                                    />
                                    <InputField
                                        name="funnel_stage"
                                        label="Funnel Stage"
                                        inputClass="!h-[45px] md:!h-[55px]"
                                        placeholder="Type here...."
                                        labelClass="!text-sm !leading-[19.07px]"
                                        className="w-full"
                                    />
                                    <InputField
                                        name="content_type"
                                        label="Content Type"
                                        placeholder="Type here...."
                                        labelClass="!text-sm !leading-[19.07px]"
                                        className="w-full"
                                        inputClass="!h-[45px] md:!h-[55px]"
                                    />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>

                <div className="pt-4 sm:pt-[30px]"></div>

                <ul className="flex gap-x-3 sm:gap-x-0 items-center md:px-[20px] px-3 py-[17px]  bg-[#222222] rounded-[4px]">
                    <li className="w-[40%] text-white text-[10px] sm:text-sm lg:text-base ">
                        Title
                    </li>
                    <li className="w-[15%] text-white text-[10px] sm:text-sm lg:text-base">
                        Details
                    </li>
                    <li className="w-[15%] text-white text-[10px] sm:text-sm lg:text-base">
                        Views
                    </li>
                    <li className="w-[15%] text-white text-[10px] sm:text-sm lg:text-base">
                        Shares
                    </li>
                    <li className="w-[15%] text-white text-[10px] sm:text-sm lg:text-base">
                        Upvotes
                    </li>
                </ul>
                <div className="flex flex-col gap-[16px] sm:gap-0">
                    <Pagination
                        dataArr={ContentDetailsData}
                        itemsPerPage={4}
                        className=" my-3"
                    >
                        {(currentItems) => (
                            <div className=" flex flex-col">
                                {currentItems.map((i: any) => (
                                    <ContentDetailsCard key={i} />
                                ))}
                            </div>
                        )}
                    </Pagination>
                </div>
            </div>
        </div>
    );
};

export default ContentDetails;

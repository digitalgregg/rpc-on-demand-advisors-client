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
        <div className=" bg-White rounded p-[30px]">
            <div>
                <div>
                    <Formik
                        initialValues={initialWishlist}
                        validationSchema={wishlistSchema}
                        onSubmit={(value) => {
                            console.log(value);
                        }}
                    >
                        {() => (
                            <Form>
                                <div className="flex justify-between gap-[20px] w-full mb-[20px]">
                                    <div className="text-xl text-[#000] leading-[27.24px] font-semibold">
                                    Content Details
                                    </div>
                                    <button
                                        type="submit"
                                        className="basis-1/2 h-[45px] max-w-[152px] text-[16px] leading-[45px] text-center border border-primary hover:bg-primary  transition-all duration-200 hover:text-white text-primary rounded-[4px]"
                                    >
                                        View Heatmap
                                    </button>
                                </div>

                                <div className=" flex flex-col md:flex-row justify-between w-full gap-[30px]">
                                    <InputField
                                        name="title"
                                        label="Title"
                                        placeholder="Piash"
                                        height="52px"
                                        labelClass="!text-sm !leading-[19.07px]"
                                        className=" w-full"
                                    />
                                    <InputField
                                        name="funnel_stage"
                                        label="Funnel Stage"
                                        placeholder="Type here...."
                                        labelClass="!text-sm !leading-[19.07px]"
                                        className=" w-full"
                                    />
                                    <InputField
                                        name="content_type"
                                        label="Content Type"
                                        placeholder="Type here...."
                                        labelClass="!text-sm !leading-[19.07px]"
                                        className=" w-full"
                                    />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>

                <div className="pt-4 sm:pt-[30px]"></div>

                <ul className="flex items-center md:px-[20px] md:h-[72px] px-3 py-[17px] xl:h-[80px] bg-[#222222] rounded-[4px]">
                    <li className="w-[calc(80%/2)] sm:w-[calc(80%/1)] text-white text-[10px] sm:text-base lg:text-base mr-[50px] sm:mr-0">
                        Title
                    </li>
                    <li className="w-[calc(40%/2)] text-white text-[10px] sm:text-base lg:text-base">
                        Details
                    </li>
                    <li className="w-[calc(40%/2)] text-white text-[10px] sm:text-base lg:text-base">
                        Views
                    </li>
                    <li className="w-[calc(40%/2)] text-white text-[10px] sm:text-base lg:text-base">
                        Shares
                    </li>
                    <li className="w-[calc(40%/2)] text-white text-[10px] sm:text-base lg:text-base">
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

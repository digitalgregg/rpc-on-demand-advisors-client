import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import CustomModal from "../../Shared/CustomUtils/CustomModal";
import InputField from "../../Shared/InputField";
import MultiSelect from "../../Shared/MultiSelect";
import SelectField from "../../Shared/SelectField";
import TextAreaField from "../../Shared/TextAreaField";

const initialWishlist = {
    content_request: "",
    content_type: "",
    title: "",
    description: "",
    revenue: "",
};

const wishlistSchema = Yup.object({
    content_request: Yup.string().required("Content Request is required"),
    content_type: Yup.string().required("Content Type is required"),
    title: Yup.string().required("Title is required"),
    description: Yup.string(),
    revenue: Yup.string(),
});

function CreateWishlistDialog({
    modalOpen,
    handleModal,
}: {
    modalOpen: boolean;
    handleModal: () => void;
}) {
    const requestOptions = [
        { value: "all-team-members", label: "All Team Members" },
        { value: "no-team-members", label: "No Team Members" },
        { value: "hell", label: "Rashed Iqbal" },
        { value: "helld", label: "Rakib Islam" },
        { value: "helldgf", label: "Asif 1Ahmed" },
        { value: "helldfs", label: "Asif2 Ahmed" },
        { value: "hellrth", label: "Asif 3Ahmed" },
        { value: "helldf", label: "Asif 4Ahmed" },
    ];
    const typeOptions = [
        { value: "all-team-members", label: "All Team Members" },
        { value: "no-team-members", label: "No Team Members" },
        { value: "hell", label: "Rashed Iqbal" },
        { value: "helld", label: "Rakib Islam" },
        { value: "helldgf", label: "Asif 1Ahmed" },
        { value: "helldfs", label: "Asif2 Ahmed" },
        { value: "hellrth", label: "Asif 3Ahmed" },
        { value: "helldf", label: "Asif 4Ahmed" },
    ];

    return (
        <CustomModal
            isOpen={modalOpen}
            onRequestClose={handleModal}
            className="w-[calc(100vw-40px)] sm:w-[450px] md:w-[520px] lg:w-[560px] xl:w-[650px] 2xl:w-[760px] 3xl:w-[800px] bg-[#fff] rounded-[4px] "
        >
            <div className="p-5 sm:py-[30px]">
                <div className="text-lg leading-[24.51px] text-center text-[#000] font-semibold">
                    Create Wishlist
                </div>
                <div className="pt-[25px]"></div>
                <Formik
                    initialValues={initialWishlist}
                    validationSchema={wishlistSchema}
                    onSubmit={(value) => console.log(value)}
                >
                    {() => (
                        <Form>
                            <div className="flex flex-col sm:flex-row gap-[14px] sm:gap-5">
                                <MultiSelect
                                    name="content_request"
                                    label="Content Request"
                                    type="single"
                                    className="basis-1/2"
                                    inputClass="!h-[52px] border-[#E0E0E0]"
                                    labelClass="!text-sm !leading-[19.07px]"
                                    options={typeOptions}
                                />

                                <MultiSelect
                                    name="content_type"
                                    label="Content Type"
                                    type="single"
                                    className="basis-1/2"
                                    inputClass="!h-[52px] border-[#E0E0E0]"
                                    labelClass="!text-sm !leading-[19.07px]"
                                    placeholder="Select Type"
                                    options={typeOptions}
                                />
                            </div>
                            <div className=" pt-[14px] sm:pt-5"></div>
                            <InputField
                                name="title"
                                label="Title"
                                placeholder="Type here"
                                height="52px"
                                labelClass="!text-sm !leading-[19.07px]"
                            />
                            <div className=" pt-[14px] sm:pt-5"></div>
                            <TextAreaField
                                name="description"
                                placeholder="Type here"
                                label="Description"
                                labelClass="!text-sm !leading-[19.07px]"
                            />
                            <div className=" pt-[14px] sm:pt-5"></div>
                            <InputField
                                name="revenue"
                                label="Revenue impact over 12mos of (optional)"
                                placeholder="$ 0.00"
                                labelClass="!text-sm !leading-[19.07px]"
                            />
                            <div className=" pt-[14px] sm:pt-5"></div>

                            <div className="flex justify-end gap-[20px]">
                                <button
                                    type="button"
                                    onClick={handleModal}
                                    className="basis-1/2 h-[45px] max-w-[152px] text-[16px] leading-[45px] text-center border border-primary hover:bg-primary  transition-all duration-200 hover:text-white text-primary rounded-[4px]"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="basis-1/2 h-[45px] max-w-[152px] text-[16px] leading-[45px] bg-primary text-[#fff] text-center border transition-all duration-200 hover:bg-[#890F21] border-primary rounded-[4px]"
                                >
                                    Add to wish
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </CustomModal>
    );
}

export default CreateWishlistDialog;

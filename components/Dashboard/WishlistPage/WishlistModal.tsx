import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { getLocal } from "../../../utils/localStorage";
import CustomModal from "../../Shared/CustomUtils/CustomModal";
import InputField from "../../Shared/InputField";
import MultiSelect from "../../Shared/MultiSelect";
import SelectField from "../../Shared/SelectField";
import TextAreaField from "../../Shared/TextAreaField";
import api from './../../../api/index';
import LodingAnimation from './../../Shared/LodingAnimation/index';
import { toast } from "react-toastify";
import {useRouter} from "next/router";

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

type WishModalType = {
    modalOpen: boolean;
    handleModal: () => void;
    type: "create" | "update";
};

function WishlistModal({ modalOpen, handleModal, type }: WishModalType) {
    const team = getLocal("team");
    const user = getLocal("user-info");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
  const wishListId = router.query.id;
    const requestOptions = [
        { value: "wish", label: "Wish for" },
        { value: "need", label: "Need" },
        { value: "urgent", label: "Urgently need" },
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
                    {type === "create" ? "Create" : "Update"} Wishlist
                </div>
                <div className="pt-[25px]"></div>
                <Formik
                    initialValues={initialWishlist}
                    validationSchema={wishlistSchema}
                    onSubmit={(value) => {
                        setIsLoading(true);
                        const wishtlistData = {
                            urgency: value.content_request,
                            content_type: value.content_type,
                            wish_title: value.title,
                            needs_to: value.description,
                            revenue: value.revenue,
                            because: "example text",
                            status: "In progress",
                            checked: false,
                            team_id: team.id,
                            user_id: team.user_id,
                            user_name: user.name,
                            profile: "http://profile.com"
                            
                            
                        }
                        const updateWishList = {
                            urgency: value.content_request,
                            content_type: value.content_type,
                            wish_title: value.title,
                            needs_to: value.description,
                            revenue: value.revenue,
                        }
                        
                        if(type === "create") {
                            api.post("/api/wish", wishtlistData)
                        .then((res:any) => {
                            setIsLoading(false);
                            toast.success("Wishlist updated successfully");
                            handleModal();
                            setError("");
                            
                        })
                        .catch((error:any) => {
                            setError(error.message);
                            setIsLoading(false);
                            console.log(error)
                        })
                        }

                        if(type === "update") {
                            api.put(`/api/wish/${wishListId}`, updateWishList)
                            .then((res:any) => {
                                console.log(res, "res from update");
                                setIsLoading(false);
                            })
                            .catch((error:any) => {
                                console.log(error, "error...")
                            })
                        }
                        
                    }}
                >
                    {() => (
                        <Form>
                            <div className="flex flex-col sm:flex-row gap-[14px] sm:gap-5">
                                <MultiSelect
                                    name="content_request"
                                    label="Content Request"
                                    type="single"
                                    height="52px"
                                    className="basis-1/2"
                                    inputClass=" border-[#E0E0E0]"
                                    labelClass="!text-sm !leading-[19.07px]"
                                    options={requestOptions}
                                />

                                <MultiSelect
                                    name="content_type"
                                    label="Content Type"
                                    type="single"
                                    height="52px"
                                    className="basis-1/2"
                                    inputClass=" border-[#E0E0E0]"
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
                            {error &&  <p className="text-red-500 text-[14px] mt-[4px]">{error}</p>}
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
                                    {type == "create"
                                        ? <span>{isLoading === true ? <LodingAnimation color="white" />: "Add to wish"}</span>
                                        : <span>{isLoading === true ? <LodingAnimation color="white" />: "Update wish"}</span>}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </CustomModal>
    );
}

export default WishlistModal;

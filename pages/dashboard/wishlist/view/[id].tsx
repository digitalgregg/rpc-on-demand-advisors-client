/* eslint-disable @next/next/no-img-element */
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { ReactNode } from "react";
import * as Yup from "yup";
import { motion } from "framer-motion";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import WishlistModal from "../../../../components/Dashboard/WishlistPage/WishlistModal";
import PasswordField from "../../../../components/Playground/PasswordField";
import MultiSelect from "../../../../components/Shared/MultiSelect";
import SelectField from "../../../../components/Shared/SelectField";
import TextAreaField from "../../../../components/Shared/TextAreaField";

const updateWish = {
    status: "",
    note: "",
};

const updateWishSchema = Yup.object({
    status: Yup.string().required("Status is required!"),
    note: Yup.string(),
});

function ViewWish() {
    const statusOptions = [
        { value: "all-team-members", label: "All Team Members" },
        { value: "no-team-members", label: "No Team Members" },
        { value: "hell", label: "Rashed Iqbal" },
        { value: "helld", label: "Rakib Islam" },
        { value: "helldgf", label: "Asif 1Ahmed" },
        { value: "helldfs", label: "Asif2 Ahmed" },
        { value: "hellrth", label: "Asif 3Ahmed" },
        { value: "helldf", label: "Asif 4Ahmed" },
    ];

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <DashboardLayout>
                <div className=" min-h-screen">
                    <div className="">
                        <div className="flex flex-col gap-4 sm:gap-5 xl:gap-[30px] lg:flex-row ">
                            <div className="lg:basis-[56%]">
                                <WhiteCard>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <div className="text-base leading-[21.79px] font-semibold text-[#000] sm:text-lg sm:leading-[24.51px]">
                                                Wish Details
                                            </div>
                                            <motion.img
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                src="/assets/dashboard-wishlist/edit.svg"
                                                alt="edit icon"
                                                className="cursor-pointer"
                                                onClick={() => setOpen(!isOpen)}
                                            />
                                        </div>
                                        <div className="pt-4 sm:pt-5"></div>
                                        <LabelText
                                            label="Requested By:"
                                            text="Gregg"
                                        />
                                        <div className="pt-4 sm:pt-5"></div>
                                        <LabelText
                                            label="Title"
                                            text="The pattern of narrative development"
                                        />
                                        <div className="pt-4 sm:pt-5"></div>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <LabelText
                                                    label="Content Type"
                                                    text="eBook"
                                                />
                                                <div className="pt-4 sm:pt-5"></div>
                                                <LabelText
                                                    label="Status"
                                                    text="In progress"
                                                />
                                            </div>
                                            <div className="pt-4 sm:pt-5"></div>
                                            <div>
                                                <LabelText
                                                    label="Content Request"
                                                    text="Urgent"
                                                    className="w-[140px] 2xl:w-[170px] 3xl:w-[260px] 4xl:w-[345px]"
                                                />
                                                <div className="pt-4 sm:pt-5"></div>
                                                <LabelText
                                                    label="Revenue"
                                                    text="$100"
                                                />
                                            </div>
                                        </div>
                                        <div className="pt-4 sm:pt-5"></div>
                                        <LabelText
                                            label="Description"
                                            text="Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes, along with exposition, argumentation, and narration. In practice it would be difficult to write literature that drew on just one of the four basic modes."
                                        />
                                    </div>
                                </WhiteCard>
                            </div>
                            <div className="lg:basis-[42%]">
                                <WhiteCard>
                                    <div>
                                        <Formik
                                            initialValues={updateWish}
                                            validationSchema={updateWishSchema}
                                            onSubmit={(value) =>
                                                console.log(value)
                                            }
                                        >
                                            {() => (
                                                <Form>
                                                    <MultiSelect
                                                        name="status"
                                                        label="Status"
                                                        type="single"
                                                        height="55px"
                                                        inputClass=" border-[#E0E0E0]"
                                                        labelClass="!text-sm !leading-[19.07px]"
                                                        options={statusOptions}
                                                    />

                                                    <div className="pt-4 sm:pt-5"></div>
                                                    <TextAreaField
                                                        name="note"
                                                        label="Note"
                                                        height="200px"
                                                        placeholder="Type here..."
                                                        labelClass="!text-sm !leading-[19.07px]"
                                                    />
                                                    <div className="pt-4 sm:pt-5 flex justify-end">
                                                        <button
                                                            className="h-[45px] leading-[45px] rounded-[4px] bg-primary text-base text-[#fff] hover:bg-[#890F21] transition-all duration-200 w-full sm:w-[129px]"
                                                            type="submit"
                                                        >
                                                            Update
                                                        </button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </WhiteCard>
                            </div>
                        </div>
                        <div className="pt-4 sm:pt-5"></div>
                        <NoteBoxLayout>
                            <WhiteCard>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm sm:text-base sm:leading-[21.79px] font-semibold leading-[19.07px] text-[#000]">
                                            Note
                                        </div>
                                        <div className="text-sm leading-[19.07px] text-[#676767]">
                                            30 July 2022 08:49 PM
                                        </div>
                                    </div>
                                    <div className="pt-[5px]"></div>
                                    <div className="text-xs sm:text-sm sm:leading-[19.07px] leading-[16.34px] text-[#000]">
                                        Description is the pattern of narrative
                                        development that aims to make vivid a
                                        place, object, character, or group.
                                    </div>
                                </div>
                            </WhiteCard>
                        </NoteBoxLayout>
                    </div>
                </div>
            </DashboardLayout>
            <WishlistModal
                handleModal={() => setOpen(!isOpen)}
                modalOpen={isOpen}
                type={"update"}
            />
        </>
    );
}

const LabelText = ({
    label,
    text,
    className,
}: {
    label: string;
    text: string;
    className?: string;
}) => (
    <div className={className}>
        <div className="text-sm sm:text-base sm:leading-[21.79px] font-semibold leading-[19.07px] text-[#000]">
            {label}
        </div>
        <div className="pt-[5px]"></div>
        <div className="text-xs sm:text-sm sm:leading-[19.07px] lg:text-base lg:leading-[21.79px] font-normal leading-[16.34px] text-[#000]">
            {text}
        </div>
    </div>
);

const WhiteCard = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => (
    <div className={"bg-[#fff] rounded-[10px] p-5" + " " + className}>
        {children}
    </div>
);

const NoteBoxLayout = ({ children }: { children: ReactNode }) => (
    <div className="flex flex-col gap-4 sm:gap-5 xl:gap-[30px] lg:flex-row ">
        <div className="lg:basis-[56%]">{children}</div>
        <div className="lg:basis-[42%]"></div>
    </div>
);

export default ViewWish;

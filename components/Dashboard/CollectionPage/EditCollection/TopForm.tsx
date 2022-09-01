import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import InputField from "../../../Shared/InputField";
import MultiSelect from "../../../Shared/MultiSelect";

const initialValues = {
    collection_title: "",
    share_with: "",
};

const validationSchema = Yup.object({
    collection_title: Yup.string(),
    share_with: Yup.mixed(),
});

function TopForm() {
    const options = [
        { value: "all-team-members", label: "All Team Members" },
        { value: "no-team-members", label: "No Team Members" },
        { value: "62e101e037c8919ds737717187", label: "Rashed Iqbal" },
        { value: "62e101e037c8919w757716187", label: "Rakib Islam" },
        { value: "62e101e037c8913727f717187", label: "Asif 1Ahmed" },
        { value: "62e101e037c89137s27717187", label: "Asif2 Ahmed" },
        { value: "62e101e037c89137277c17187", label: "Asif 3Ahmed" },
        { value: "62e101e037c8913f727717187", label: "Asif 4Ahmed" },
    ];

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(value) => console.log(value)}
        >
            {() => (
                <Form>
                    <div className="flex flex-col sm:flex-row   w-full">
                        <InputField
                            name="collection_title"
                            label="Collection title"
                            inputClass="!border-[#676767] [background-color:transparent_!important]"
                            placeholder="Type here...."
                            className="basis-[40%]"
                        />
                        <div className="pt-[15px] sm:pt-0 sm:pl-[15px] lg:pl-[20px]"></div>
                        <CollectionsSelect options={options} />
                        <div className=" pt-[20px] sm:pt-0 sm:pl-[15px] lg:pl-[20px]"></div>
                        <button
                            type="submit"
                            className="h-[55px] sm:mt-[31.78px] sm:w-[130px] rounded-[4px] w-full md:text-sm leading-[54px] hover:bg-[#890F21] transition-all duration-200 text-xs text-[#fff] basis-[28%] font-semibold text-center bg-[#E51937]"
                        >
                            Publish collection
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

const CollectionsSelect = ({ options }: { options: object[] }) => {
    const [value, setValue] = useState<SelectResultType | SelectResultType[]>();
    useEffect(() => {
        const checkValue = value && checkSelectValue(value);
        if (checkValue) {
            if (typeof checkValue == "object") {
                setValue(checkValue);
            }
        }
    }, [value]);

    return (
        <MultiSelect
            options={options}
            name="share_with"
            className="basis-[40%]"
            type={
                value
                    ? checkSelectValue(value)
                        ? "single"
                        : "multi"
                    : "single"
            }
            label="Share with"
            value={value}
            isDual={true}
            valueChange={(v) => {
                setValue(v);
            }}
        />
    );
};

type SelectResultType = {
    label: string;
    value: string;
};

const checkSelectValue = (value: SelectResultType[] | SelectResultType) => {
    if (Array.isArray(value)) {
        return value.find(
            (v) => v.value == "all-team-members" || v.value == "no-team-members"
        );
    } else {
        return (
            value.value.includes("all-team-members") ||
            value.value.includes("no-team-members")
        );
    }
};

export default TopForm;

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import MultiSelect from "../../../../components/Shared/MultiSelect";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import InputField from "../../../../components/Shared/InputField";
import CustomSelect from "../../../../components/Shared/MultiSelect/CustomSelect";
import CheckBox from "../../../../components/CustomIcons/CheckBox";
import { Dropdown, DropdownItem } from "../../../../components/Shared/Dropdown";
import CountrySelect from "../../../../components/Dashboard/BillingPage/CountrySelect";
import TestField from "../../../../components/Playground/TestField";
const initialValues = {
    collection_title: "",
    share_with: "",
};

const validationSchema = Yup.object({
    collection_title: Yup.string(),
    share_with: Yup.mixed(),
});

function CollectionsView() {
    const options = [
        { value: "all-team-members", label: "All Team Members" },
        { value: "no-team-members", label: "No Team Members" },
        // { value: "62e101e037c8919737717187", label: "Rashed Iqbal" },
        // { value: "62e101e037c8919737716187", label: "Rakib Islam" },
        // { value: "62e101e037c8913737717187", label: "Asif Ahmed" },
    ];

    const [selectedContent, setSelectedContent] = useState<any>();
    const [content, setContent] = useState([
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
        {
            title: "Give your blog the perfect",
            type: "Blog",
            img: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        },
    ]);

    return (
        <DashboardLayout>
            <div className="min-h-screen">
                <div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(value) => console.log(value)}
                    >
                        {() => (
                            <Form>
                                <div className="flex flex-col sm:flex-row sm:items-end  w-full">
                                    <InputField
                                        name="collection_title"
                                        label="Collection title"
                                        inputClass="!border-[#676767] [background-color:transparent_!important]"
                                        placeholder="Type here...."
                                        className="basis-[40%]"
                                    />
                                    <div className="pt-[15px] sm:pt-0 sm:pl-[15px] lg:pl-[20px]"></div>
                                    <CollectionsSelect options={options} />
                                    <div className="pt-[15px] sm:pt-0 sm:pl-[15px] lg:pl-[20px]"></div>
                                    <button
                                        type="submit"
                                        className="h-[55px] sm:w-[130px] rounded-[4px] w-full md:text-sm leading-[54px] text-xs text-[#fff] basis-[28%] font-semibold text-center bg-[#E51937]"
                                    >
                                        Publish collection
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="pt-[30px]"></div>
                <div>
                    <div>
                        <div className="flex items-center">
                            <div className="text-base text-[#000] leading-[21.79px] font-semibold">
                                Selected Content
                            </div>
                            <div className="pl-5"></div>
                            <div className="flex items-center gap-[7px]">
                                <img
                                    src="/assets/collections/delete.svg"
                                    alt=""
                                />
                                <span className="text-sm leading-[19.07px] text-[#E51937]">
                                    REMOVE ALL
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5"></div>
                    <div>
                        {selectedContent ? (
                            <div className="grid gap-[10px] sm:grid-cols-2">
                                {selectedContent.map((v: any, i: any) => (
                                    <div key={i}></div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-[#F2F2F2] h-[200px] w-full flex justify-center items-center">
                                <div className="text-lg lg:text-xl text-[#676767]">
                                    No content selected
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="pt-[30px]"></div>

                <div>
                    <div>
                        <div className="flex items-center">
                            <div className="text-base text-[#000] leading-[21.79px] font-semibold">
                                Select Content
                            </div>
                            <div className="pl-5"></div>
                            <div className="flex items-center gap-[7px]">
                                <div className="h-[16px] w-[16px]">
                                    <CheckBox
                                        width={"100%"}
                                        height={"100%"}
                                        isChecked={false}
                                    />
                                </div>
                                <span className="text-sm leading-[19.07px] text-[#E51937]">
                                    SELECT ALL
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5"></div>
                    <div className="grid gap-[10px] sm:grid-cols-2">
                        {content.map((v, i) => (
                            <ContentCard key={i} isChecked={false} data={v} />
                        ))}
                        <div>
                            <button className="h-[84px] font-semibold rounded-[4px] text-[#000] w-full leading-[84px] text-center bg-[#fff] border border-dashed border-[#9D9D9D]">
                                Add New Content
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

const CollectionsSelect = ({ options }: { options: object[] }) => {
    const [value, setValue] = useState<any>(false);
    return (
        <MultiSelect
            options={options}
            name="share_with"
            className="basis-[40%]"
            type={!value ? "single" : "multi"}
            label="Share with"
            onChange={(v: any) => {}}
        />
    );
};

const ContentCard = ({
    className,
    isChecked,
    data,
}: {
    className?: string;
    isChecked: boolean;
    data: any;
}) => {
    return (
        <div
            className={
                "bg-[#fff] p-[10px] cursor-pointer flex gap-[15px] items-center rounded-[4px]" +
                " " +
                className
            }
        >
            <div className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]">
                <CheckBox
                    isChecked={isChecked}
                    width={"100%"}
                    height={"100%"}
                />
            </div>
            <img
                src={data.img}
                className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-[4px]"
                alt=""
            />
            <div>
                <div className="text-[14px] font-semibold xl:text-base xl:leading-[21.79px] line-clamp-2 leading-[19.07px] text-[#000000]">
                    {data.title}
                </div>
                <div className="pt-[10px]"></div>
                <div className="text-xs font-semibold xl:text-sm xl:leading-[19.07px] text-[#222222] leading-[16.34px]">
                    Type:
                    <span className="text-[#676767] pl-[12px]">
                        {data.type}
                    </span>
                </div>
            </div>
        </div>
    );
};

ContentCard.defaultProps = {
    isChecked: true,
};

export default CollectionsView;

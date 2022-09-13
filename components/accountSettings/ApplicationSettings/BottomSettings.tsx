import React from "react";
import { Formik, Form } from "formik";
import InputField from "../../Shared/InputField";

const initialValues = {
    shortlink: "",
};

function BottomSettings() {
    return (
        <div className=" rounded-[10px] bg-White w-full overflow-hidden">
            <div className=" bg-black w-full h-[44px] px-5 flex items-center">
                <span className=" text-base leading-[22px] font-bold text-White ">
                    Short Domain
                </span>
            </div>
            <div className="flex flex-col gap-5 p-5 ">
                <p className=" text-base leading-[22px] font-normal text-[#222222]">
                    This short domain will be used in the creation of short
                    links for content items that are shared and publicly
                    accessible (the default). You can add a custom domain here
                    to change the domain the short links are shared with
                </p>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(valus) => console.log(valus)}
                >
                    {() => (
                        <Form>
                            <div className="flex flex-row w-full ">
                                <div className="!w-fit">
                                    <button
                                        type="submit"
                                        className="!w-[153px] h-[56px] py-[11px] rounded-l border-[1px] border-solid border-primary bg-primary hover:bg-primary_dark hover:border-primary_dark hover-transition capitalize text-base leading-[22px] font-semibold text-White"
                                    >
                                        Current Domain
                                    </button>
                                </div>

                                <InputField
                                    className=" !max-w-[1377px] !w-[1377px]"
                                    inputClass=" !h-[56px] !w-full border-none !bg-[#F8F8F8]"
                                    placeholder="ccml.io"
                                    name="shortlink"
                                    type="text"
                                />
                            </div>
                        </Form>
                    )}
                </Formik>

                <p className=" text-base leading-[22px] font-normal text-[#222222] text-center">
                    New domains may take 10 minutes or longer to take effect.
                    Review the instructions.
                </p>
            </div>
        </div>
    );
}

export default BottomSettings;

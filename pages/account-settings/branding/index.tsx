/* eslint-disable @next/next/no-img-element */
import React from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import { useState } from "react";
import { Layout } from "../../../components/accountSettings/Layout";
import Dropzone, { simpleClasses } from "../../../components/Shared/Dropzone";
import BrandingBg from "../../../components/CustomIcons/BrandingBg";
import TestCodeEditor from "../../../components/Playground/TestCodeEditor";

function Branding() {
    const [color, setColor] = useState("#0D7BEA");

    return (
        <DashboardLayout>
            <Layout>
                <div className="text-xl leading-[27.24px] sm:text-[24px] sm:leading-[32.68px] font-semibold text-[#000]">
                    Styling & Preview
                </div>
                <div className="pt-5 md:pt-[30px]"></div>
                <div className="flex flex-col gap-5 sm:gap-[30px] xl:flex-row">
                    <div className="p-[20px_10px] sm:p-[20px] bg-[#fff] rounded-[4px] flex flex-col ">
                        <div>
                            <div className="text-base font-semibold leading-[21.79px] text-[#000]">
                                Enter your site title
                            </div>
                            <div className="pt-[10px]"></div>
                            <input
                                type="text"
                                className="h-[55px] text-sm leading-[19.07px] text-[#6d6d6d] px-[15px] focus:outline-none [background:none] w-full border rounded-[4px]"
                                placeholder="Example: ODA Center - Content System"
                            />
                        </div>
                        <div className="pt-[17px]"></div>
                        <div>
                            <div className="text-base font-semibold leading-[21.79px] text-[#000]">
                                Accent color
                            </div>
                            <div className="pt-[10px]"></div>

                            <div className="flex gap-5 relative">
                                <div className="w-full border-none rounded-[4px] h-[37px] relative">
                                    <input
                                        id="inputColor"
                                        type={"color"}
                                        className="  w-full h-full input-color-rounded-[4px] !p-0 input-color-padding rounded-[4px] !outline-none !border-none"
                                        onChange={(v) =>
                                            setColor(v.target.value)
                                        }
                                    />
                                </div>

                                <div className="w-full h-[37px] border border-[#676767] rounded-[4px] text-[#101010] text-sm leading-[19.07px] pl-4 flex items-center">
                                    {color}
                                </div>
                            </div>
                        </div>
                        <div className="pt-[17px]"></div>

                        <div>
                            <div className="text-base font-semibold justify leading-[21.79px] text-[#000]">
                                Upload Favicon
                            </div>
                            <div className="pt-[10px]"></div>
                            <Dropzone {...simpleClasses}>
                                <img
                                    src="/assets/collections/upload.svg"
                                    alt=""
                                />
                            </Dropzone>
                            {/* <div {...getRootProps({ style })}>
                                <input {...getInputProps()} />
                                <div>
                                    <img
                                        src="/assets/collections/upload.svg"
                                        alt=""
                                    />
                                </div>
                            </div> */}
                        </div>
                        <div className="pt-[17px]"></div>

                        <div>
                            <div className="text-base font-semibold justify leading-[21.79px] text-[#000]">
                                Upload your brand logo
                            </div>
                            <div className="pt-[10px]"></div>
                            <Dropzone {...simpleClasses}>
                                <img
                                    src="/assets/collections/upload.svg"
                                    alt=""
                                />
                            </Dropzone>
                        </div>
                        <div className="pt-[5px]"></div>

                        <div className="text-xs leading-[16.34px] text-[#000000]">
                            Please use .jpg or .png with non-transparent
                            background. Recommended dimensions of 1000 x 1000
                            Used as Sites og:image or twitter:image
                        </div>
                        <div className="pt-[17px]"></div>
                        <div className="flex gap-[17px]">
                            <button className="hover-transition hover:bg-primary hover:text-White  border border-primary w-full rounded-[4px] text-primary font-semibold text-sm leading-[45px] h-[45px] text-center">
                                Reset
                            </button>
                            <button className="hover-transition hover:bg-primary hover:text-White  border border-primary w-full rounded-[4px] text-primary font-semibold text-sm leading-[45px] h-[45px] text-center">
                                Update
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="p-[10px] sm:p-[20px] bg-[#fff] rounded-[4px]  flex flex-col">
                            <div>
                                <div>
                                    <BrandingBg color={color} />
                                </div>
                                <div className="flex flex-col items-center relative mb-[-50px] top-[-50px]">
                                    <div className="w-[100px] h-[100px] relative">
                                        <img
                                            src="/assets/account-settings/profile-img.jpg"
                                            alt=""
                                            className=" border-[5px] rounded-full border-[#fff]"
                                        />
                                        <img
                                            src="/assets/account-settings/profile-img.jpg"
                                            alt=""
                                            className="absolute bottom-0 right-0 w-[40px] h-[40px] border-[2px] rounded-full border-[#fff]"
                                        />
                                    </div>
                                    <div className="pt-[10px]"></div>
                                    <div className="text-lg font-bold leading-[24.51px] text-[#000]">
                                        Brand Name
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-[50px] flex flex-col gap-[30px] lg:flex-row ">
                    <div className="w-full">
                        <TestCodeEditor />
                    </div>
                    <div className="w-full">
                        <TestCodeEditor />
                    </div>
                </div>
            </Layout>
        </DashboardLayout>
    );
}

{
    /* <div
        className="w-full h-[37px] rounded-[4px] "
        style={{ background: color }}
        onClick={() => setModalOpen(!modalOpen)}
    ></div>

 <div className="absolute top-[37px] w-full">
    <CustomModal isOpen={modalOpen} onRequestClose={handleModal}>
        <HexColorPicker
            className="overflow-hidden"
            color={color}
            onChange={setColor}
        />
    </CustomModal>
</div>; */
}

export default Branding;

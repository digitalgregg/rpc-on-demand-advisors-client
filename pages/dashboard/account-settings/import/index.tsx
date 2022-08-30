/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Layout } from "../../../../components/accountSettings/Layout";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import Dropzone, { simpleClasses } from "../../../../components/Shared/Dropzone";

function Import() {
    return (
        <DashboardLayout>
            <Layout>
                <div className="text-xl leading-[27.24px] sm:text-[24px] sm:leading-[32.68px] font-semibold text-[#000]">
                    Import CSV
                </div>
                <div className="pt-5 md:pt-[30px]"></div>
                <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                    <div className=" w-full">
                        <Dropzone
                            {...simpleClasses}
                            className="!h-[231px] items-center flex-col"
                        >
                            <div className="text-base font-semibold leading-[21.79px] text-center text-[#000805] px-[80px] sm:px-[49px] lg:text-lg lg:font-bold lg:leading-[24.51px] xl:px-[80px]">
                                Select your content items (CSV) to upload.
                            </div>
                            <div className="pt-[13px]"></div>
                            <div></div>
                            <img src="/assets/collections/upload.svg" alt="" />
                        </Dropzone>
                    </div>
                    <div className=" w-full">
                        <div className="h-[231px] bg-[#DEDEDE] rounded flex justify-center items-center flex-col">
                            <div className="text-base  sm:px-[49px] font-semibold leading-[21.79px] text-center text-[#000805] px-[80px] lg:text-lg lg:font-bold lg:leading-[24.51px] xl:px-[80px]">
                                Select your content items (CSV) to upload.
                            </div>
                            <div className="pt-[20px] flex items-center gap-[10px]">
                                <img
                                    src="/assets/account-settings/download.svg"
                                    alt=""
                                />

                                <div className="text-sm leading-[19.07px] text-[#9E9E9E]">
                                    Download an import template
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="pt-4"></div>
                    <div>
                        <input
                            type="file"
                            className="text-primary text-sm leading-[19.07px] upload-button:hover:cursor-pointer upload-button:text-sm upload-button:leading-[19.07px] upload-button:rounded-[4px] upload-button:p-[10px_20px] upload-button:mr-4 upload-button:text-white upload-button:font-normal upload-button:hover:bg-transparent upload-button:hover:border-primary_dark upload-button:border upload-button:border-solid upload-button:border-transparent upload-button:transition upload-button:ease-in-out upload-button:duration-200 upload-button:bg-primary upload-button:hover:bg-primary_dark"
                            accept=".csv"
                        />
                    </div>
                </div>
                <div className="pt-5 sm:pt-[30px]"></div>
                <div>
                    <div className="text-xl text-[#000] leading-[27.24px] font-semibold">
                        Import History
                    </div>
                    <div className="pt-4 sm:pt-[30px]"></div>

                    <div className="hidden sm:flex items-center px-[20px] h-[72px] xl:h-[80px] bg-[#222222] rounded-[4px]">
                        <div className="w-[calc(80%/3)] text-white">Date</div>
                        <div className="w-[calc(80%/3)] text-white">Filename</div>
                        <div className="w-[calc(80%/3)] text-white">Status</div>
                        <div className="w-[20%] text-white">Status Details</div>
                    </div>
                    <div className="flex flex-col gap-[16px] sm:gap-0">
                        <ImportHistoryCard />
                        <ImportHistoryCard />
                        <ImportHistoryCard />
                    </div>
                </div>
            </Layout>
        </DashboardLayout>
    );
}

type ImportHistoryType = {
    date: string;
    filename: string;
    status: "Deleted" | "Completed";
    onDelete?: () => void;
};

const ImportHistoryCard = ({
    date,
    filename,
    status,
    onDelete,
}: ImportHistoryType) => {
    return (
        <div className="bg-[#fff] sm:[background:none] p-[22px] sm:py-4 text-[#000]">
            <div className="sm:flex sm:items-center text-sm leading-[19.07px]">
                <div className="flex items-center sm:w-[calc(80%/3)]">
                    <div className=" w-[40%] sm:hidden  font-semibold">
                        Date
                    </div>
                    <div className="w-1/2 sm:max-w-[90px] sm:w-full text-[#676767]">
                        {date}
                    </div>
                </div>
                <div className="flex  pt-4 sm:pt-0 items-center sm:w-[calc(80%/3)]">
                    <div className=" w-[40%] sm:hidden font-semibold">
                        Filename
                    </div>
                    <div className=" w-1/2 sm:w-full  text-[#676767]">
                        {filename}
                    </div>
                </div>
                <div className="flex pt-4 sm:pt-0 items-center sm:w-[calc(80%/3)]">
                    <div className=" w-[40%] sm:hidden font-semibold">
                        Status
                    </div>
                    <div className=" w-1/2 sm:w-full   text-[#676767]">
                        {status}
                    </div>
                </div>

                <div className="pt-5 sm:hidden"></div>

                <div className="sm:w-[20%]">
                    <button
                        className={` ${
                            status == "Deleted"
                                ? "text-[#828282] border-[#828282] hover:bg-[#828282] hover:text-White"
                                : "text-primary border-primary hover:bg-primary hover:text-White"
                        } transition ease-in-out duration-200 text-sm h-[39px] text-center sm:w-[70px] sm:h-[30px] border rounded-[4px] w-full`}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

ImportHistoryCard.defaultProps = {
    date: "2022-08-03,20:14:11",
    filename: "test.csv",
    status: "Completed",
};

export default Import;

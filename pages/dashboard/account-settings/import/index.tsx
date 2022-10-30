/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useState } from "react";
import { Layout } from "../../../../components/accountSettings/Layout";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import Dropzone, {
    simpleClasses,
} from "../../../../components/Shared/Dropzone";
import Pagination from "../../../../components/Shared/Pagination";
import { motion } from "framer-motion";
import { isFileCsv } from "../../../../components/Library/FileType";
import { parseCsv } from "../../../../components/Library/parseCsv";
import ImportCsvData from "../../../../components/Shared/ImportCsvData";
import YesNoModal from "../../../../components/modal/YesNoModal";
import { useAtom } from "jotai";
import { team_state } from "../../../../state";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { fetchImportHistory } from "../../../../api-call/ImportHistoryApi";
import LodingAnimation from "../../../../components/Shared/LodingAnimation";
import LoadingAnimation from "../../../../components/Shared/LoadingAnimation";
import ImportHistoryCard, {
    ImportHistoryType,
} from "../../../../components/Dashboard/ImportPage/ImportHistoryCard";
import { useRouter } from "next/router";
import Meta from "../../../../components/Meta";

function Import() {
    const router = useRouter();

    const [buttonLoading, setButtonLoading] = useState(false);

    const [csvData, setCsvData] = useState<any[]>([]);
    const [teamData] = useAtom(team_state);

    const [confirmModal, setConfirmModal] = useState(false);

    const handleConfirmModal = () => {
        setConfirmModal(!confirmModal);
    };

    const [csvFileName, setCsvFileName] = useState("");

    const handleOnDrop = useCallback(async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (isFileCsv(file.name)) {
            const result: any = await parseCsv(file);
            if (result.inValidData.length > 0) {
                toast.error("Csv file not valid");
            } else {
                const data = result.data;
                setCsvFileName(file.name);
                setCsvData(data);
            }
        } else {
            toast.error("This is not csv file");
        }
    }, []);

    const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.length && e.target.files[0];
        if (file && isFileCsv(file.name)) {
            const result: any = await parseCsv(file);
            if (result.inValidData.length > 0) {
                toast.error("Csv file not valid");
            } else {
                const data = result.data;
                setCsvFileName(file.name);
                setCsvData(data);
            }

            e.target.value = "";
        }
    };

    const closeImport = () => {
        setCsvData([]);
    };

    const { data, isSuccess, isError, isLoading, refetch } = useQuery(
        "fetch-import",
        () => fetchImportHistory(teamData.id),
        {
            select: (res) => res.data,
            retry(failureCount, error: any) {
                if (error.response.data.success === false) {
                    return false;
                } else {
                    return true;
                }
            },
        }
    );

    const handleCsvImport = async () => {
        setButtonLoading(true);
        const importData = {
            csvData,
            team_id: teamData.id,
            user_id: teamData.user_id,
            csvFileName,
        };
        if (!buttonLoading) {
            await toast.promise(
                handleImportApi(importData, closeImport, refetch),
                {
                    success: "Import csv successfully",
                    pending: "Importing csv",
                    error: "Import csv failed",
                }
            );
            setButtonLoading(false);
        }
        // const response = await api.post("/api/importcsv/import", importData);
        // console.log(response);
    };

    return (
        <>
            <DashboardLayout>
                <Meta title="Import CSV | Account Settings" />

                <Layout>
                    <div className="flex justify-between">
                        <div className="text-xl leading-[27.24px] sm:text-[24px] sm:leading-[32.68px] font-semibold text-[#000]">
                            Import CSV
                        </div>
                        {csvData.length ? (
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setCsvData([])}
                                    className="border border-primary text-primary rounded w-[80px] h-[36px] hover:bg-primary hover:text-white transition-all duration-200"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleCsvImport}
                                    className="border border-primary bg-primary text-white rounded w-[80px] h-[36px]  hover:bg-primary_dark hover:text-white transition-all duration-200"
                                >
                                    {buttonLoading ? (
                                        <LodingAnimation color="white" />
                                    ) : (
                                        "Import"
                                    )}
                                </button>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>

                    {csvData.length ? (
                        <ImportCsvData data={csvData} />
                    ) : (
                        <div>
                            <div className="pt-5 md:pt-[30px]"></div>
                            <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                                <div className=" w-full">
                                    <Dropzone
                                        {...simpleClasses}
                                        onDrop={handleOnDrop}
                                        accept={{ "text/*": [] }}
                                        className="!h-[231px] items-center flex-col cursor-pointer"
                                    >
                                        <div className="text-base font-semibold leading-[21.79px] text-center text-[#000805] px-[80px] sm:px-[49px] lg:text-lg lg:font-bold lg:leading-[24.51px] xl:px-[80px]">
                                            Select your content items (CSV) to
                                            upload.
                                        </div>
                                        <div className="pt-[13px]"></div>
                                        <div></div>
                                        <img
                                            src="/assets/collections/upload.svg"
                                            alt=""
                                        />
                                    </Dropzone>
                                </div>
                                <div className=" w-full">
                                    <div className="h-[231px] bg-[#DEDEDE] rounded flex justify-center items-center flex-col">
                                        <div className="text-base  sm:px-[49px] font-semibold leading-[21.79px] text-center text-[#000805] px-[80px] lg:text-lg lg:font-bold lg:leading-[24.51px] xl:px-[80px]">
                                            Currently import is only supported
                                            in our template format
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="mt-[20px] flex items-center gap-[10px] cursor-pointer"
                                            onClick={() =>
                                                router.push(
                                                    "/example-csv-template.csv"
                                                )
                                            }
                                        >
                                            <img
                                                src="/assets/account-settings/download.svg"
                                                alt=""
                                            />

                                            <div className="text-sm leading-[19.07px] text-[#9E9E9E]">
                                                Download an import template
                                            </div>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="pt-4"></div>
                                <div>
                                    <input
                                        onChange={handleOnChange}
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
                                    <div className="w-[calc(80%/3)] text-white">
                                        Date
                                    </div>
                                    <div className="w-[calc(80%/3)] text-white">
                                        Filename
                                    </div>
                                    <div className="w-[calc(80%/3)] text-white">
                                        Status
                                    </div>
                                    <div className="w-[20%] text-white">
                                        Status Action
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[16px] sm:gap-0">
                                    {isLoading && (
                                        <div>
                                            <div className="flex items-center sm:bg-white gap-3 sm:py-[20px] sm:px-5 ">
                                                <LoadingAnimation />
                                                <div className="text-black">
                                                    Loading...
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {isError && (
                                        <div>
                                            <div className="text-black sm:bg-white text-sm md:text-base py-5 px-5">
                                                No histories found
                                            </div>
                                        </div>
                                    )}
                                    {isSuccess && (
                                        <Pagination
                                            dataArr={data || []}
                                            itemsPerPage={4}
                                            className=" my-3"
                                        >
                                            {(currentItems) => (
                                                <div className=" flex flex-col gap-[10px] sm:gap-[15px] md:gap-[20px]">
                                                    {currentItems.map(
                                                        (v: any, i) => (
                                                            <ImportHistoryCard
                                                                key={i}
                                                                data={v}
                                                                refetch={
                                                                    refetch
                                                                }
                                                            />
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </Pagination>
                                    )}
                                </div>
                                <div className="pt-[50px]"></div>
                            </div>
                        </div>
                    )}
                </Layout>
            </DashboardLayout>
            <YesNoModal
                isOpen={confirmModal}
                handleModal={handleConfirmModal}
                header="Import CSV file"
                description={`${csvData.length} records will be imported, ok? This action cannot be undone
                `}
            />
        </>
    );
}

const handleImportApi = (
    importData: object,
    closeImport: () => void,
    refetch: () => void
) =>
    new Promise(async (resolve, reject) => {
        try {
            await api.post(
                `/api/importcsv/import`,
                importData
            );
            resolve(true);
            closeImport();
            refetch();
        } catch (err) {
            reject();
        }
    });

export default Import;

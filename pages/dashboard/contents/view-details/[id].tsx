import React, { createContext, useContext } from "react";
import TopNav from "../../../../components/Dashboard/TopNav";
import DetailsInput from "../../../../components/DetailsInput";
import FilterFields from "./../../../../components/FilterFields/index";
import InfoSection from "./../../../../components/InfoSection/index";
import FileViewerContainer from "../../../../components/FileViewerContainer";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import {
    getContent,
    updateContent,
    updateFileObj,
} from "../../../../api-call/ContentApi";
import LodingAnimation from "../../../../components/Shared/LodingAnimation";
import ContentDataProvider from "../../../../components/Context/ContentDataProvider";
import { useEffect } from "react";
import Script from "next/script";
import { removeEmpty } from "../../../../utils/removeEmpty";
import { GetContentContext } from "../../../../components/Context/ContentDataProvider";
import { useAtom } from "jotai";
import FileUploadModal, {
    handleUppyModal,
} from "../../../../components/FileUploadModal";
import { team_state } from "../../../../state";
import { updateContentDetails } from "../../../../api-call/ContentApi";
import { useState } from "react";
import {
    isAudio,
    isImage,
    isVideo,
} from "../../../../components/Library/FileType";
import Meta from "../../../../components/Meta";

const ContentDetails = ({ query }: { query: any }) => {
    const id = query.id;
    const { isSuccess, data, error, isLoading, refetch } = useQuery(
        ["get-content", id],
        async () => await getContent(id),
        { enabled: id ? true : false }
    );

    useEffect(() => {
        if (window.myUppy) {
            window.myUppy.setOptions({
                restrictions: {
                    maxNumberOfFiles: 1,
                },
            });
        }

        return () => {
            if (window.myUppy) {
                window.myUppy.setOptions({
                    restrictions: {
                        maxNumberOfFiles: null,
                    },
                });
            }
        };
    }, []);

    async function handleUpdateUpload(response: any) {
        data && (await updateContent(updateFileObj(response), data._id));
        refetch();
    }

    if (!isSuccess) return <LoadingBox />;

    return (
        <>
            <Meta title={data.title} />
            <ContentDataProvider refetch={refetch} contentData={data}>
                <div className="w-[100%] bg-[#F8F8F8] pb-[20px] h-auto]">
                    <div className="px-[20px] sm:px-[40px] md:px-[50px] lg:px-[47px] xl:px-[60px] 2xl:px-[40px] 3xl:px-[120px] 4xl:px-[180px]">
                        <div className="pt-[30px] pb-[32px] sm:pt-[37px] sm:pb-[35px] md:pt-[20px] md:pb-[30px]">
                            <TopNav />
                        </div>

                        <div className="grid grid-cols-1 xl:grid-cols-2 sm:gap-[35px] ">
                            <div className="w-full sm:bg-[#FFFFFF] sm:px-[20px] sm:py-[20px]">
                                <DetailsInput />
                                <div className="mt-[20px] sm:mt-[25px] mb-[30px]">
                                    <FilterFields />
                                </div>
                                {/* <div>{data && data.title}</div> */}
                                {/* Group buttons start */}
                                <ButtonGroup />
                                {/* Group buttons end */}
                                {/* info section start */}
                                <div className="mt-[25px] sm:shadow-[2px_2px_16px_rgba(0,0,0,0.08)]">
                                    <InfoSection />
                                </div>
                                {/* info section end */}
                            </div>

                            {/* second section  */}
                            <div
                                className={`w-full bg-[#FFFFFF] ${
                                    isImage(data.file_url) ||
                                    isAudio(data.file_url) ||
                                    isVideo(data.file_url)
                                        ? "h-fit max-h-[364px] sm:max-h-[495px] md:max-h-[620px] xl:max-h-[542px] 2xl:max-h-[620px]"
                                        : "h-[364px] sm:h-[495px] md:h-[620px] xl:h-[542px] 2xl:h-[620px]"
                                }  rounded-[4px]  flex gap-[20px] file-viewer-media`}
                            >
                                <FileViewerContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </ContentDataProvider>

            <FileUploadModal onSingleUpload={handleUpdateUpload} />
            <Script src="/uppy/singleUppy.js" />
        </>
    );
};

const ButtonGroup = () => {
    const { context, contentData, refetch } = GetContentContext();
    const [teamData] = useAtom(team_state);
    const [buttonLoading, setButtonLoading] = useState(false);

    const handleContentDetails = async () => {
        const apiObj = removeEmpty(context.detailsState);
        if (isObjectEmpty(apiObj)) return;
        setButtonLoading(true);
        await updateContentDetails(contentData._id, apiObj);
        refetch();
        setButtonLoading(false);
    };

    return (
        <div className="flex gap-[20px] sm:justify-end">
            <button
                onClick={handleUppyModal}
                className="border hover:bg-primary transition duration-700 ease-in-out hover:text-[#FFFFFF] border-primary rounded-[4px] text-primary text-[14px] h-[45px] font-semibold w-[50%] sm:w-[198px]"
            >
                Replace Content File{" "}
            </button>
            <button
                onClick={handleContentDetails}
                className="border hover:bg-primary transition duration-700 ease-in-out hover:text-[#FFFFFF] border-primary rounded-[4px] text-primary text-[14px] h-[45px] font-semibold w-[50%] sm:w-[166px]"
            >
                {buttonLoading ? (
                    <span className="flex items-center gap-[10px] justify-center">
                        <div>
                            <LodingAnimation color="white" />
                        </div>
                        <div>Loading...</div>
                    </span>
                ) : (
                    "Update content"
                )}
            </button>
        </div>
    );
};

export const getServerSideProps = (context: any) => {
    return {
        props: {
            query: context.query,
        },
    };
};

export const LoadingBox = () => (
    <div className="flex  justify-center items-center h-screen w-full">
        <LodingAnimation color="#E51937" height={50} width={50} />
    </div>
);

function isObjectEmpty(obj: object) {
    return Object.keys(obj).length === 0;
}

export default ContentDetails;

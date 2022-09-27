/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { getExtension, getFileType } from "./FileType";
import PlyrReact from "plyr-react";
import { DocumentViewer } from "react-documents";
import { LoadingBox } from "../../pages/dashboard/contents/view-details/[id]";
import LodingAnimation from "../Shared/LodingAnimation";
import LoadingAnimation from "../Shared/LoadingAnimation";

type FileViewerType = {
    src: string;
};

function FileViewer({ src }: FileViewerType) {
    const [isLoading, setLoading] = useState(true);
    return (
        <>
            {getFileType(src, (type) => {
                switch (type) {
                    case "image":
                        return (
                            <div className="w-full h-full flex justify-center items-center">
                                <img
                                    src={src}
                                    alt="img"
                                    className="max-w-full max-h-full object-contain 
                               "
                                />
                            </div>
                        );
                    case "video":
                        return (
                            <PlyrReact
                                source={{ type: "video", sources: [{ src }] }}
                            />
                        );
                    case "audio":
                        return (
                            <PlyrReact
                                source={{
                                    type: "audio",
                                    sources: [{ src }],
                                }}
                            />
                        );
                    case "document":
                        return (
                            <>
                                {isLoading && <FileLoadingView />}
                                <DocumentViewer
                                    loaded={() => setLoading(false)}
                                    url={src}
                                    viewer="office"
                                />
                            </>
                        );
                    case "all-document":
                        return (
                            <>
                                {isLoading && <FileLoadingView />}

                                <DocumentViewer
                                    loaded={() => setLoading(false)}
                                    url={src}
                                    viewer="google"
                                />
                            </>
                        );
                    case "unknown":
                        return (
                            <div className="flex h-full w-full justify-center items-center">
                                <div className="">
                                    Sorry, no preview found for .
                                    {getExtension(src)}
                                </div>
                            </div>
                        );
                    default:
                        break;
                }
            })}
        </>
    );
}

const FileLoadingView = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <LoadingAnimation color="#E51937" height={50} width={50} />
            <div>Loading file, Please wait.......</div>
        </div>
    );
};

export default FileViewer;

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { getFileType } from "./FileType";
import PlyrReact from "plyr-react";
import { DocumentViewer } from "react-documents";

type FileViewerType = {
    src: string;
};

function FileViewer({ src }: FileViewerType) {
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
                        return <DocumentViewer url={src} viewer="office" />;
                    case "all-document":
                        return <DocumentViewer url={src} viewer="google" />;
                    default:
                        break;
                }
            })}
        </>
    );
}

// https://web-examples.pspdfkit.com/hello/example.pdf

export default FileViewer;

// errorComponent={CustomErrorComponent}
// onError={this.onError}/>
// type

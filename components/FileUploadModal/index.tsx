/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import React, { useEffect } from "react";
import Script from "next/script";

type FileUploadModalType = {
    onFileUpload?: (v: any) => any;
    onSingleUpload?: (f:any,v: any) => any;
    onUploadCompleted?: (v: any) => any;
};

function FileUploadModal({
    onFileUpload,
    onSingleUpload,
    onUploadCompleted,
}: FileUploadModalType) {
    useEffect(() => {
        window.myOnFileUpload = (v) => {
            if (onFileUpload) {
                onFileUpload(v);
            }
        };
        window.onSingleFileUpload = (f,v) => {
            if (onSingleUpload) {
                onSingleUpload(f,v);
            }
        };

        window.onUploadCompleted = (v) => {
            if (onUploadCompleted) {
                onUploadCompleted(v);
            }
        };

        return () => {};
    }, []);

    return (
        <div>
            <Script src="/uppy/script.js" />
        </div>
    );
}

export const handleUppyModal = () => {
    if (window.myUppy) {
        const dashboard = window.myUppy.getPlugin("Dashboard");
        if (!dashboard.isModalOpen()) {
            dashboard.openModal();
        }
    }
};

export const abortFileUpload = () => {
    console.log("text");
    if (window.myUppy) {
        window.myUppy.cancelAll();
        window.myUppy.getState().files = {};
        window.myUppy.getState().totalProgress = null;
        const dashboard = window.myUppy.getPlugin("Dashboard");
        if (dashboard.isModalOpen()) {
            dashboard.closeModal();
        }
    }
};

export default FileUploadModal;

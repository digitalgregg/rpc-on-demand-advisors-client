/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import React, { useEffect } from "react";
import Script from "next/script";

type FileUploadModalType = {
    onUploadFinished?: (v: any) => any;
    onSingleUpload?: (v: any) => any;
};

function FileUploadModal({
    onUploadFinished,
    onSingleUpload,
}: FileUploadModalType) {
    useEffect(() => {
        window.myOnFileUpload = (v) => {
            if (onUploadFinished) {
                onUploadFinished(v);
            }
        };
        window.onSingleFileUpload = (v) => {
            if (onSingleUpload) {
                onSingleUpload(v);
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

export default FileUploadModal;

/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import React, { useEffect } from "react";
import Script from "next/script";

type FileUploadModalType = {
    onUploadFinished?: (v: any) => any;
};

function FileUploadModal({ onUploadFinished }: FileUploadModalType) {
    useEffect(() => {
        window.myOnFileUpload = (v) => {
            if (onUploadFinished) {
                onUploadFinished(v);
            }
        };

        return () => {};
    }, []);

    return (
        <div>
            <Script
                src="/uppy/uppy.min.js"
                strategy="beforeInteractive"
            ></Script>
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

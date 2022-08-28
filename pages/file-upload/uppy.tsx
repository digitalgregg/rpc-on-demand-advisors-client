/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from "next/script";
import FileUploadModal from "../../components/FileUploadModal";
import { useState, useEffect } from "react";

function UppyFileUpload() {
    const [uploadResult, setUploadResult] = useState();

    const handleUpload = (v: any) => {
        console.log(v);
        setUploadResult(v);
    };

    return (
        <>
            <div className="flex h-screen justify-center items-center flex-col gap-[30px] bg-white w-full ">
                <button className="p-[10px_40px] open-file-uploader bg-blue-500 border-blue-500 border text-white font-semibold">
                    Open Dialog
                </button>
                <div className="w-[400px] h-[300px] bg-[rgba(59,130,246,.2)] text-blue-500 overflow-y-auto break-words p-5 text-sm">
                    {JSON.stringify(uploadResult)}
                </div>
            </div>

            <FileUploadModal onUploadFinished={handleUpload} />
        </>
    );
}

export default UppyFileUpload;

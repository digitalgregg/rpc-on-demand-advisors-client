/* eslint-disable @next/next/no-img-element */
import React, { useMemo } from "react";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone";
import classnames from "classnames";
import { ReactNode } from "react";

const dropzoneStyle = {
    display: "flex",
    width: "100%",
    height: "120px",
    borderWidth: "1px",
    borderStyle: "dashed",
    borderColor: "#676767",
    outline: "none",
    transition: "border .24s ease-in-out",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
};

const acceptStyle = {
    borderColor: "rgb(0,230,118)",
    backgroundColor: "rgba(0,230,118,.1)",
};

const rejectStyle = {
    borderColor: "#ff1744",
    backgroundColor: "#ff174411",
};

type DropzoneType = {
    className?: string;
    children?: ReactNode;
    acceptClass?: string;
    rejectClass?: string;
    focusClass?: string;
    onDrop?:
        | (<T extends File>(
              acceptedFiles: T[],
              fileRejections: FileRejection[],
              event: DropEvent
          ) => void)
        | undefined;
};

function Dropzone({
    className,
    children,
    acceptClass,
    rejectClass,
    onDrop,
}: DropzoneType) {
    const {
        acceptedFiles,
        isDragAccept,
        isDragReject,
        getRootProps,
        getInputProps,
    } = useDropzone({
        accept: { "image/*": [] },
        maxFiles: 1,
        multiple: false,
        onDrop,
    });

    const style = useMemo(
        () => ({
            ...dropzoneStyle,
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isDragAccept, isDragReject]
    );

    const dropdownClasses = classnames(
        className,
        isDragAccept && acceptClass,
        isDragReject && rejectClass
    );

    return (
        <div {...getRootProps({ style, className: dropdownClasses })}>
            <input {...getInputProps()} />
            <>{children}</>
        </div>
    );
}

export const simpleClasses = {
    className:
        "flex w-full h-[120px] border border-[#676767] border-dashed transition-all duration-75 ease-in-out justify-center items-center rounded-[4px]",
    acceptClass: "!border-[rgb(0,230,118)] !bg-[rgba(0,230,118,.1)]",
    rejectClass: "!border-[#ff1744] bg-[#ff174411]",
};

export default Dropzone;

/* eslint-disable @next/next/no-img-element */
import React from "react";
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import { useState, useMemo } from "react";
import { useDropzone } from "react-dropzone";

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

function Trackers() {
    const [color, setColor] = useState("#0D7BEA");
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
    });

    const style = useMemo(
        () => ({
            ...dropzoneStyle,
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isDragAccept, isDragReject]
    );
    return (
        <DashboardLayout>
            <div className="">
                <div className="text-[24px] leading-[32.68px] text-[#000]">
                    Styling & Preview
                </div>
                <div>
                    <div className="p-[20px_10px] sm:p-[20px] bg-[#fff] rounded-[4px] flex flex-col ">
                        <div>
                            <div className="text-base font-semibold leading-[21.79px] text-[#000]">
                                Enter your site title
                            </div>
                            <div className="pt-[10px]"></div>
                            <input
                                type="text"
                                className="h-[55px] text-sm leading-[19.07px] text-[#6d6d6d] px-[15px] focus:outline-none [background:none] w-full border rounded-[4px]"
                                placeholder="Example: ODA Center - Content System"
                            />
                        </div>
                        <div className="pt-[17px]"></div>
                        <div>
                            <div className="text-base font-semibold leading-[21.79px] text-[#000]">
                                Accent color
                            </div>
                            <div className="pt-[10px]"></div>
                            <div className="flex gap-5 relative">
                                <div className="w-full border-none rounded-[4px] h-[37px] relative">
                                    <input
                                        id="inputColor"
                                        type={"color"}
                                        className="  w-full h-full  rounded-[4px] "
                                        onChange={(v) =>
                                            setColor(v.target.value)
                                        }
                                    />
                                    <label
                                        className="w-full absolute top-0 rounded-[4px] left-0 h-full block z-40"
                                        htmlFor="inputColor"
                                        style={{ background: color }}
                                    ></label>
                                </div>

                                <div className="w-full h-[37px] border border-[#676767] rounded-[4px] text-[#101010] text-sm leading-[19.07px] pl-4 flex items-center">
                                    {color}
                                </div>
                            </div>
                        </div>
                        <div className="pt-[17px]"></div>

                        <div>
                            <div className="text-base font-semibold justify leading-[21.79px] text-[#000]">
                                Upload Favicon
                            </div>
                            <div className="pt-[10px]"></div>
                            <div {...getRootProps({ style })}>
                                <input {...getInputProps()} />
                                <div>
                                    <img
                                        src="/assets/collections/upload.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pt-[17px]"></div>

                        <div>
                            <div className="text-base font-semibold justify leading-[21.79px] text-[#000]">
                                Upload your brand logo
                            </div>
                            <div className="pt-[10px]"></div>
                            <div {...getRootProps({ style })}>
                                <input {...getInputProps()} />
                                <div>
                                    <img
                                        src="/assets/collections/upload.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pt-[5px]"></div>

                        <div className="text-xs leading-[16.34px] text-[#000000]">
                            Please use .jpg or .png with non-transparent
                            background. Recommended dimensions of 1000 x 1000
                            Used as Sites og:image or twitter:image
                        </div>
                        <div className="pt-[17px]"></div>
                        <div className="flex gap-[17px]">
                            <button className="border border-primary w-full rounded-[4px] text-primary font-semibold text-sm leading-[45px] h-[45px] text-center">
                                Reset
                            </button>
                            <button className="border border-primary w-full rounded-[4px] text-primary font-semibold text-sm leading-[45px] h-[45px] text-center">
                                Update
                            </button>
                        </div>
                    </div>
                    <div className="p-[20px_10px] sm:p-[20px] bg-[#fff] rounded-[4px] flex flex-col">
                        <div>
                            <div>
                                <img
                                    src="/assets/collections/branding-bg.svg"
                                    alt=""
                                    className="h-[143px] w-full"
                                />
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}

{
    /* <div
        className="w-full h-[37px] rounded-[4px] "
        style={{ background: color }}
        onClick={() => setModalOpen(!modalOpen)}
    ></div>

 <div className="absolute top-[37px] w-full">
    <CustomModal isOpen={modalOpen} onRequestClose={handleModal}>
        <HexColorPicker
            className="overflow-hidden"
            color={color}
            onChange={setColor}
        />
    </CustomModal>
</div>; */
}

export default Trackers;

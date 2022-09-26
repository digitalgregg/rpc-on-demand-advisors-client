import React from "react";
import { sharingData, additionalData, dateAdded } from "./../fake";
import classnames from "classnames";
import InfoSectionMobile from "./../InfoSectionMobile";
import { GetContentContext } from "../Context/ContentDataProvider";
import Moment from "react-moment";
import { ContentDataType } from "../../api-call/ContentApi";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const InfoSection = () => {
    const { contentData } = GetContentContext();

    console.log(contentData);

    const pStyle =
        "sm:text-[#222222] text-[#4F4F4F] text-[14px] leading-[19.07px]  sm:block";
    return (
        <div className="sm:px-[10px]   sm:bg-[#FFFFFF] sm:pt-[16px] sm:pb-[16px]">
            <div className="hidden sm:block">
                <h3 className="font-semibold text-[18px] text-[#101010] mb-[10px] mt-[15px]">
                    Sharing Info
                </h3>
                <div className="grid grid-cols-3 h-[40px] rounded-[4px] bg-[#191919] text-[#FFFFFF] items-center px-[11px]  font-semibold">
                    <p className="text-[14px]">Recipient Name</p>
                    <p className="text-[14px]">Last Viewed</p>
                    <p className="text-[14px]">Views</p>
                </div>

                {contentData?.sharingDetails.length === 0 ? (
                    <div>
                        <div className="grid grid-cols-3 mt-[15px] px-[11px]">
                            <p className={pStyle}>No details found</p>
                        </div>
                        <hr className="divider" />
                    </div>
                ) : (
                    contentData?.sharingDetails.map((item: any) => (
                        <div key={item.id}>
                            <div className="grid grid-cols-3 items-center py-[10px] px-[11px]">
                                <p className={pStyle}>{item.recipient}</p>
                                <p className={pStyle}>
                                    <Moment date={item.updatedAt} fromNow />
                                </p>
                                <p
                                    className={`${pStyle} !flex justify-between items-center`}
                                >
                                    <div>{item.views}</div>
                                    <CopyToClipboard
                                        text={`${window.location.origin}/s/${item.link}`}
                                        onCopy={() =>
                                            toast.success("Link copied")
                                        }
                                    >
                                        <button className="mr-4 leading-[1] text-xs p-[7px_10px] hover:bg-primary hover:text-white transition-all duration-200 rounded-[3px] hover text-primary font-semibold border-primary border">
                                            Link
                                        </button>
                                    </CopyToClipboard>
                                </p>
                            </div>
                            <hr className="divider !my-0" />
                        </div>
                    ))
                )}

                {/* additionl info start */}
                <h3 className="font-semibold text-[18px] text-[#101010] mb-[10px] mt-[15px]">
                    Additional Info
                </h3>
                <div className="grid grid-cols-3 h-[40px] rounded-[4px] bg-[#191919] text-[#FFFFFF] items-center px-[11px]  font-semibold">
                    <p className="text-[14px]">Name</p>
                    {/* <p className="text-[14px]">Last Viewed</p> */}
                    <p className="text-[14px]">Value</p>
                </div>

                <div>
                    <div className="grid grid-cols-3 mt-[15px] px-[11px]">
                        <p className={pStyle}>File Name</p>
                        <p className={`${pStyle} !line-clamp-1`}>
                            {contentData?.additional_info.file_name}
                        </p>
                    </div>
                    <hr className="divider" />
                </div>
                <div>
                    <div className="grid grid-cols-3 mt-[15px] px-[11px]">
                        <p className={pStyle}>File Size</p>
                        <p className={pStyle}>
                            {formatBytes(
                                contentData?.additional_info?.file_size || 0
                            )}
                        </p>
                    </div>
                    <hr className="divider" />
                </div>
                <div>
                    <div className="grid grid-cols-3 mt-[15px] px-[11px]">
                        <p className={pStyle}>File Type</p>
                        <p className={pStyle}>
                            {contentData?.additional_info.file_type}
                        </p>
                    </div>
                    <hr className="divider" />
                </div>
                <div>
                    <div className="grid grid-cols-3 mt-[15px] px-[11px]">
                        <p className={pStyle}>Is Shared</p>
                        <p className={pStyle}>
                            {contentData?.asset_use == "external"
                                ? "true"
                                : "false"}
                        </p>
                    </div>
                    <hr className="divider" />
                </div>

                {/* additionl info end */}
                <div className="grid grid-cols-3 h-[40px] rounded-[4px] bg-[#191919] text-[#FFFFFF] items-center px-[11px]  font-semibold">
                    <p className="text-[14px] col-span-2">Date added</p>
                    <p className="text-[14px]">Last updated</p>
                </div>

                <div>
                    <div className="grid grid-cols-3 mt-[15px] px-[11px]">
                        <p className={classnames(pStyle, "col-span-2")}>
                            <Moment format="MMM D YYYY, h:mm a">
                                {contentData?.createdAt?.toString()}
                            </Moment>
                        </p>
                        <p className={classnames(pStyle, "col-span-1")}>
                            <Moment format="MMM D YYYY, h:mm a">
                                {contentData?.updatedAt?.toString()}
                            </Moment>
                        </p>
                    </div>
                </div>
            </div>
            <div className="sm:hidden">
                <InfoSectionMobile />
            </div>
        </div>
    );
};

function formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

export default InfoSection;

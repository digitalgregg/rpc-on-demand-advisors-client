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

    const pStyle =
        "sm:text-[#222222] text-[#4F4F4F] text-[14px] leading-[19.07px]  sm:block";
    return (
        <div className="sm:px-[10px]   sm:bg-[#FFFFFF] sm:pt-[16px] sm:pb-[16px]">
            <div className="hidden sm:block">
                <h3 className="font-semibold text-[18px] text-[#101010] mb-[10px] mt-[15px]">
                    Sharing Info
                </h3>
                <div className="grid grid-cols-3 h-[40px] rounded-[4px] bg-[#191919] text-[#FFFFFF] items-center px-[11px]  font-semibold">
                    <div className="text-[14px]">Recipient Name</div>
                    <div className="text-[14px]">Last Viewed</div>
                    <div className="text-[14px]">Views</div>
                </div>

                {contentData?.sharingDetails.length === 0 ? (
                    <div>
                        <div className="grid grid-cols-3 mt-[15px] px-[11px]">
                            <div className={pStyle}>No details found</div>
                        </div>
                        <hr className="divider" />
                    </div>
                ) : (
                    contentData?.sharingDetails.map((item: any, i) => (
                        <div key={i}>
                            <div className="grid grid-cols-3 items-center py-[10px] px-[11px]">
                                <div className={pStyle}>{item.recipient}</div>
                                <div className={pStyle}>
                                    <Moment date={item.updatedAt} fromNow />
                                </div>
                                <div
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
                                </div>
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
                    <div className="text-[14px]">Name</div>
                    {/* <p className="text-[14px]">Last Viewed</p> */}
                    <div className="text-[14px]">Value</div>
                </div>

                <div>
                    <div className=" flex mt-[15px] px-[11px]">
                        <div className={`${pStyle} w-1/3`}>File Name</div>
                        <div className={`${pStyle} w-2/3 !line-clamp-1`}>
                            {contentData?.additional_info.file_name}
                        </div>
                    </div>
                    <hr className="divider" />
                </div>
                <div>
                    <div className="flex mt-[15px] px-[11px]">
                        <div className={`${pStyle} w-1/3`}>File Size</div>
                        <div className={`${pStyle} w-2/3`}>
                            {formatBytes(
                                contentData?.additional_info?.file_size || 0
                            )}
                        </div>
                    </div>
                    <hr className="divider" />
                </div>
                <div>
                    <div className="flex mt-[15px] px-[11px]">
                        <div className={`${pStyle} w-1/3`}>File Type</div>
                        <div className={`${pStyle} w-2/3`}>
                            {contentData?.additional_info.file_type}
                        </div>
                    </div>
                    <hr className="divider" />
                </div>
                <div>
                    <div className="flex mt-[15px] px-[11px]">
                        <div className={`${pStyle} w-1/3`}>Is Shared</div>
                        <div className={`${pStyle} w-2/3`}>
                            {contentData?.asset_use == "external"
                                ? "true"
                                : "false"}
                        </div>
                    </div>
                    <hr className="divider" />
                </div>

                {/* additionl info end */}
                <div className="grid grid-cols-3 h-[40px] rounded-[4px] bg-[#191919] text-[#FFFFFF] items-center px-[11px]  font-semibold">
                    <div className="text-[14px] col-span-2">Date added</div>
                    <div className="text-[14px]">Last updated</div>
                </div>

                <div>
                    <div className="grid grid-cols-3 mt-[15px] px-[11px]">
                        <div className={classnames(pStyle, "col-span-2")}>
                            <Moment format="MMM D YYYY, h:mm a">
                                {contentData?.createdAt?.toString()}
                            </Moment>
                        </div>
                        <div className={classnames(pStyle, "col-span-1")}>
                            <Moment format="MMM D YYYY, h:mm a">
                                {contentData?.updatedAt?.toString()}
                            </Moment>
                        </div>
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

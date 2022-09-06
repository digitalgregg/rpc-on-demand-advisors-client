import React from "react";
import { sharingData, additionalData, dateAdded } from "./../fake";
import classnames from "classnames";
import InfoSectionMobile from "./../InfoSectionMobile";
import { GetContentContext } from "../Context/ContentDataProvider";
import Moment from "react-moment";
import { ContentDataType } from "../../api-call/ContentApi";

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
                    <p className="text-[14px]">Recipient Name</p>
                    <p className="text-[14px]">Last Viewed</p>
                    <p className="text-[14px]">Views</p>
                </div>

                {contentData?.sharingDetails ? (
                    <div>
                        <div className="grid grid-cols-3 mt-[15px] px-[11px]">
                            <p className={pStyle}>No details found</p>
                        </div>
                        <hr className="divider" />
                    </div>
                ) : (
                    contentData?.sharingDetails.map((item: any) => (
                        <div key={item.id}>
                            <div className="grid grid-cols-3 mt-[15px] px-[11px]">
                                <p className={pStyle}>{item.recipent}</p>
                                <p className={pStyle}>{item.lastView}</p>
                                <p className={pStyle}>{item.view}</p>
                            </div>
                            <hr className="divider" />
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
                        <p className={pStyle}>
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
                            <Moment format="MMM M YYYY, h:mm a">
                                {contentData?.createdAt?.toString()}
                            </Moment>
                        </p>
                        <p className={classnames(pStyle, "col-span-1")}>
                            <Moment format="MMM M YYYY, h:mm a">
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

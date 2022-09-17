import React from "react";
import { sharingData, additionalData, dateAdded } from "../fake";
import { GetContentContext } from "../Context/ContentDataProvider";
import Moment from "react-moment";

const InfoSectionMobile = () => {
    const { contentData } = GetContentContext();

    const h3Style = " text-[14px] text-[#4F4F4F] font-semibold";
    const pStyle = "text-[14px] text-[#4F4F4F]";
    return (
        <div className="">
            <h3 className="font-semibold text-[18px] text-[#101010] mb-[16px] mt-[15px] ">
                Sharing Info
            </h3>

            {contentData?.sharingDetails.length === 0 ? (
                <div className="bg-[#f1f1f1] rounded-[4px] px-[14px] py-[15px] mb-[16px] ">
                    <div className="grid grid-cols-2 ">
                        {/* <h3 className={h3Style}>Recipient Name</h3> */}
                        <p className={pStyle}>No details found</p>
                    </div>
                </div>
            ) : (
                contentData?.sharingDetails.map((item: any) => (
                    <>
                        <div className="bg-[#f1f1f1] rounded-[4px] px-[14px] py-[15px] mb-[16px] ">
                            {/* <h3 className="block w-full ">adfa <span className="ml-4">asdfasdfasd</span></h3> */}
                            <div className="grid grid-cols-2 ">
                                <h3 className={h3Style}>Recipient Name</h3>
                                <p className={pStyle}>{item.recipient}</p>
                            </div>
                            <hr className="divider2" />
                            <div className="grid grid-cols-2 ">
                                <h3 className={h3Style}>Last viewed</h3>
                                <p className={pStyle}>
                                    <Moment fromNow date={item.updatedAt} />
                                </p>
                            </div>
                            <hr className="divider2" />
                            <div className="grid grid-cols-2 ">
                                <h3 className={h3Style}>Views</h3>
                                <p className={pStyle}>{item.views}</p>
                            </div>
                            <hr className="divider2" />
                            <div className="grid grid-cols-2 ">
                                <h3 className={h3Style}>Link</h3>
                                <p className={`${pStyle} cursor-pointer`}>
                                    Copy
                                </p>
                            </div>
                        </div>
                    </>
                ))
            )}

            {/* start addintional info  */}
            <h3 className="font-semibold text-[18px] text-[#101010] mb-[16px] mt-[15px] ">
                Additional Info
            </h3>

            <>
                <div className="bg-[#f1f1f1] rounded-[4px] px-[14px] py-[15px] mb-[16px] ">
                    <div className="grid grid-cols-2 ">
                        <h3 className={h3Style}>File Name</h3>
                        <p className={`${pStyle} truncate`}>
                            {contentData?.additional_info.file_name}
                        </p>
                    </div>
                    <hr className="divider2" />
                    <div className="grid grid-cols-2 ">
                        <h3 className={h3Style}>File Size</h3>
                        <p className={pStyle}>
                            {formatBytes(
                                contentData?.additional_info?.file_size || 0
                            )}
                        </p>
                    </div>
                    <hr className="divider2" />
                    <div className="grid grid-cols-2 ">
                        <h3 className={h3Style}>File Type</h3>
                        <p className={pStyle}>
                            {contentData?.additional_info.file_type}
                        </p>
                    </div>
                    <hr className="divider2" />
                    <div className="grid grid-cols-2 ">
                        <h3 className={h3Style}>Is Shared</h3>
                        <p className={pStyle}>
                            {contentData?.asset_use == "external"
                                ? "true"
                                : "false"}
                        </p>
                    </div>
                </div>
            </>

            {/* Date added section  */}
            <div className="bg-[#f1f1f1] rounded-[4px] px-[14px] py-[15px] mb-[16px] ">
                <div className="grid grid-cols-2 ">
                    <h3 className={h3Style}>Date Added</h3>
                    <p className={pStyle}>
                        <Moment format="MMM M YYYY, h:mm a">
                            {contentData?.createdAt?.toString()}
                        </Moment>
                    </p>
                </div>
                <hr className="divider2" />
                <div className="grid grid-cols-2 ">
                    <h3 className={h3Style}>Last Updated</h3>
                    <p className={pStyle}>
                        <Moment format="MMM M YYYY, h:mm a">
                            {contentData?.updatedAt?.toString()}
                        </Moment>
                    </p>
                </div>
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

export default InfoSectionMobile;

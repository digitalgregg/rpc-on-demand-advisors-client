/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Moment from "react-moment";
import moment from "moment";
import { ContentDataType, restoreContent } from "../../api-call/ContentApi";
import { isImage } from "../Library/FileType";
import LodingAnimation from "../Shared/LodingAnimation";
import api from "../../api";
import { toast } from "react-toastify";

type CardType = {
    data: ContentDataType;
    refetch: () => void;
};

const Card = ({ data, refetch }: CardType) => {
    const [buttonLoading, setButtonLoading] = useState(false);

    const handleRestore = async () => {
        setButtonLoading(true);

        if (!buttonLoading) {
            try {
                await api.put("/api/content/recycle/restore/" + data._id);
                toast.success("Content restored successfully");
                setButtonLoading(false);
                refetch();
            } catch (err: any) {
                toast.error(err?.response?.data?.message);
                setButtonLoading(false);
            }
        }
    };

    return (
        <div className=" bg-White p-[10px] max-w-[1570px] rounded flex flex-row justify-between items-center w-full">
            <div className=" flex flex-row items-center gap-[15px]">
                <div className=" w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] relative lg:w-[80px] lg:h-[80px] rounded overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src={
                            isImage(data.file_url)
                                ? data.file_url
                                : "/assets/default_poster.png"
                        }
                        alt="images"
                    />
                </div>
                <div className=" flex flex-col gap-[10px]">
                    <h3 className="text-line-clamp-1 text-sm leading-[19.07px] font-semibold lg:text-base lg:leading-[21.79px] text-[#000000] ">
                        {data.title}
                    </h3>
                    <div className=" flex flex-row items-center gap-[10px]">
                        <div className=" w-[12px] h-[12px] sm:w-[16px] sm:h-[16px] relative lg:w-[18px] lg:h-[18px]">
                            <Image
                                layout="fill"
                                src="/assets/recycle-bin/time.svg"
                                alt="icons"
                            />
                        </div>
                        <p className="text-line-clamp-1 text-[10px] leading-[13.62px] sm:text-xs sm:leading-[16.34px] lg:text-sm lg:leading-[19px] text-[#222222] font-normal">
                            <Moment
                                date={moment(data.createdAt).add(30, "days")}
                                fromNow
                            />{" "}
                            (Permanently deleted 30 days)
                        </p>
                    </div>
                </div>
            </div>

            <button
                onClick={handleRestore}
                className=" ease-in-out duration-300 sm:hover:bg-primary_dark border-[1px] border-solid border-primary px-[13px] sm:px-[26px] py-[7px] sm:py-[9px] rounded text-xs sm:text-base leading-[16.34px] sm:leading-[21.79px] bg-primary relative font-semibold text-White"
            >
                {buttonLoading ? (
                    <div>
                        <div className="absolute top-0 w-full flex items-center justify-center  h-full left-0">
                            <LodingAnimation color="white" />
                        </div>
                        <div className="opacity-0">Restore</div>
                    </div>
                ) : (
                    "Restore"
                )}
            </button>
        </div>
    );
};

export default Card;

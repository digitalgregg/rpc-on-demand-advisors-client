/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import CheckBox from "../../../CustomIcons/CheckBox";
import { ContentDataType } from "../../../../api-call/ContentApi";
import { motion } from "framer-motion";
import {
    GetCollectionContext,
    CollectionContext,
} from "../../../Context/CollectionDataProvider";
import { pullContent, pushContent } from "../../../../api-call/CollectionApi";
import { useState } from "react";
import { isImage } from "../../../Library/FileType";

type ContentCardType = {
    className?: string;
    isChecked: boolean;
    data: ContentDataType;
};

const CContentCard = ({ className, isChecked, data }: ContentCardType) => {
    const context: CollectionContext = GetCollectionContext();
    const [loading, setLoading] = useState(false);

    const handleCardClick = async () => {
        const content_id = data._id;
        setLoading(true);
        const team_id = context.collectionData._id;
        try {
            if (isChecked) {
                await pullContent(team_id, content_id);
                context.refetch();
            }
            if (!isChecked) {
                await pushContent(team_id, content_id);
                context.refetch();
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        setLoading(false);
    }, [context]);

    const loadingClass =
        "before:w-full before:h-full before:content-[''] after:content-[''] before:bg-[rgba(0,0,0,.1)] before:absolute after:absolute after:z-30  after:bg-[url('/assets/loading.svg')] after:block after:w-[30px] after:h-[30px] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 before:left-0 before:rounded";

    return (
        <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={handleCardClick}
            className={`bg-[#fff] w-full  p-[10px] relative cursor-pointer flex gap-[15px] sm:gap-[10px] md:gap-[15px] items-center rounded-[4px] ${className} ${
                loading && loadingClass
            }`}
        >
            <div className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]">
                <CheckBox
                    isChecked={isChecked}
                    width={"100%"}
                    height={"100%"}
                />
            </div>
            <img
                src={
                    isImage(data.thumbnail)
                        ? data.thumbnail
                        : "/assets/default_poster.png"
                }
                className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-[4px] object-cover"
                alt=""
            />
            <div className=" w-[calc(100%-108px)] sm:w-[calc(100%-98px)] md:w-[calc(100%-108px)] lg:w-[calc(100%-134px)] ">
                <div className="text-[14px] font-semibold xl:text-base xl:leading-[21.79px] leading-[19.07px] text-[#000000] line-clamp-1">
                    {data.title}
                </div>
                <div className="pt-[10px]"></div>
                <div className="text-xs font-semibold xl:text-sm xl:leading-[19.07px] text-[#222222] leading-[16.34px]">
                    Type:
                    <span className="text-[#676767] pl-[12px]">
                        {data.content_type?.title || "Not selected"}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

CContentCard.defaultProps = {
    isChecked: true,
};

export default CContentCard;

/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import { GetContentContext } from "../Context/ContentDataProvider";
import FavouriteIcon from "../CustomIcons/FavouriteIcon";
import FileViewer from "../Library/FileViewer";
import ViewFile from "../ViewFile/index";
import { useAtom } from "jotai";
import { signupState } from "../../state/index";
import { likeFavoriteApi } from "../../api-call/ContentApi";
import LikeIcon from "../CustomIcons/LikeIcon";

const FileViewerContainer = () => {
    const { contentData, refetch } = GetContentContext();
    const [userData] = useAtom(signupState);

    const iconStyle = "w-[16px] h-[16px]  sm:w-[24px] sm:h-[16px]";

    const isLiked = () => {
        return contentData?.likes.includes(userData._id) ? true : false;
    };

    const isFavorited = () => {
        return contentData?.favorites.includes(userData._id) ? true : false;
    };

    const handleLoveIcon = async () => {
        await likeFavoriteApi(
            userData._id,
            contentData._id,
            "favorites",
            isFavorited()
        );
        refetch();
    };

    const handleLikeIcon = async () => {
        await likeFavoriteApi(
            userData._id,
            contentData._id,
            "likes",
            isLiked()
        );
        refetch();
    };

    return (
        <div className="px-[10]  sm:px-[25px] sm:py-[25px] w-full">
            <div className="h-[54px] sm:h-[60px] bg-[#F8F8F8] rounded-[4px] flex items-center px-[15px] justify-between mb-[10px]">
                <div className="flex gap-[5px]">
                    <img
                        src="/img/videoIcon.svg"
                        alt="video icon"
                        className={iconStyle}
                    />
                    <h3 className="text-[12px] font-semibold text-[#000805]">
                        Video file
                    </h3>
                </div>
                <div className="flex gap-[19px] items-center text-[#000805]">
                    <div className="flex gap-[5px] items-center">
                        <img
                            src="/img/viewIcon.svg"
                            alt="view icon"
                            className={iconStyle}
                        />
                        <p>0</p>
                    </div>
                    <div className="flex gap-[5px] items-center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleLoveIcon}
                        >
                            <FavouriteIcon
                                stroke={isFavorited() ? "#E51937" : "black"}
                                color={isFavorited() ? "#E51937" : "white"}
                            />
                        </motion.button>

                        <p>{contentData?.favorites.length || 0}</p>
                    </div>
                    <div className="flex gap-[5px] items-center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleLikeIcon}
                        >
                            <LikeIcon
                                stroke={isLiked() ? "#E51937" : "black"}
                                color={isLiked() ? "#E51937" : "white"}
                            />
                        </motion.button>
                        <p>{contentData?.likes.length || 0}</p>
                    </div>
                    <div className="flex gap-[5px] items-center">
                        <img
                            src="/img/shareIconRed.svg"
                            alt="view icon"
                            className={iconStyle}
                        />
                        <p>{contentData?.sharingDetails.length || 0}</p>
                    </div>
                </div>
            </div>
            <div className="h-[calc(100%-70px)] overflow-hidden">
                {contentData?.file_url && (
                    <FileViewer src={contentData?.file_url} />
                )}
            </div>
            {/* <ViewFile /> */}
        </div>
    );
};

export default FileViewerContainer;

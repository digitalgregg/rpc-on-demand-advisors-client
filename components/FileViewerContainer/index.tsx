/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import { GetContentContext } from "../Context/ContentDataProvider";
import FavouriteIcon from "../CustomIcons/FavouriteIcon";
import FileViewer from "../Library/FileViewer";
import ViewFile from "../ViewFile/index";
import { useAtom } from "jotai";
import { signupState } from "../../state/index";
import { ContentDataType, likeFavoriteApi } from "../../api-call/ContentApi";
import LikeIcon from "../CustomIcons/LikeIcon";
import { getFileType } from "../Library/FileType";

const FileViewerContainer = () => {
    const { contentData, refetch } = GetContentContext();
    const [userData] = useAtom(signupState);

    const iconStyle = "w-[20px] h-[20px]";

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
                <div className="flex gap-[5px] items-center">
                    {getFileType(contentData.file_url, (type) => {
                        switch (type) {
                            case "image":
                                return (
                                    <>
                                        <img
                                            src="/assets/type/image.svg"
                                            alt="video icon"
                                            className={iconStyle}
                                        />
                                        <h3 className="text-[12px] font-semibold text-[#000805]">
                                            Image file
                                        </h3>
                                    </>
                                );
                            case "video":
                                return (
                                    <>
                                        <img
                                            src="/img/videoIcon.svg"
                                            alt="video icon"
                                            className={iconStyle}
                                        />
                                        <h3 className="text-[12px] font-semibold text-[#000805]">
                                            Video file
                                        </h3>
                                    </>
                                );
                            case "audio":
                                return (
                                    <>
                                        <img
                                            src="/assets/type/audio.svg"
                                            alt="video icon"
                                            className={iconStyle}
                                        />
                                        <h3 className="text-[12px] font-semibold text-[#000805]">
                                            Audio file
                                        </h3>
                                    </>
                                );
                            case "document":
                                return (
                                    <>
                                        <img
                                            src="/assets/type/document.svg"
                                            alt="video icon"
                                            className={iconStyle}
                                        />
                                        <h3 className="text-[12px] font-semibold text-[#000805]">
                                            Document file
                                        </h3>
                                    </>
                                );
                            case "all-document":
                                return (
                                    <>
                                        <img
                                            src="/assets/type/document.svg"
                                            alt="video icon"
                                            className={iconStyle}
                                        />
                                        <h3 className="text-[12px] font-semibold text-[#000805]">
                                            Document file
                                        </h3>
                                    </>
                                );
                            case "unknown":
                                return (
                                    <h3 className="text-[12px] font-semibold text-[#000805]">
                                        Unknown file
                                    </h3>
                                );
                            default:
                                break;
                        }
                    })}
                </div>
                <div className="flex gap-[19px] items-center text-[#000805]">
                    <div className="flex gap-[5px] items-center">
                        <img
                            src="/img/viewIcon.svg"
                            alt="view icon"
                            className="w-[24px]"
                        />
                        <p>{getViewsCount(contentData)}</p>
                    </div>
                    <div className="flex gap-[5px] items-center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleLoveIcon}
                        >
                            <FavouriteIcon
                                stroke={isFavorited() ? "#E51937" : "black"}
                                color={isFavorited() ? "#E51937" : "#f8f8f8"}
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
                                color={isLiked() ? "#E51937" : "#f8f8f8"}
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

const getViewsCount = (data: ContentDataType) => {
    const mapArr = data.sharingDetails.map((v) => v.views);
    return mapArr.reduce((a, b) => a + b, 0);
};

export default FileViewerContainer;

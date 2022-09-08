/* eslint-disable @next/next/no-img-element */
import React, { createRef, useState } from "react";
import { motion } from "framer-motion";
import { OutSideClick } from "../Shared/OutSideClick";
import TagBadges from "../CustomIcons/TagBadges";
import FavouriteIcon from "../CustomIcons/FavouriteIcon";
import LikeIcon from "../CustomIcons/LikeIcon";
import OutSider from "../Shared/OutSider";
import DropdownEdit from "./DropdownEdit";
import TagModal from "../modal/TagModal";
import EditTagModal from "./EditTagModal";
import YesNoModal from "../modal/YesNoModal";
import { useRouter } from "next/router";
import {
    ContentDataType,
    deleteContent,
    likeFavoriteApi,
} from "../../api-call/ContentApi";
import { isImage, getExtension } from "../Library/FileType";
import { useAtom } from "jotai";
import { signupState } from "../../state/index";
import api from "../../api";
import { saveAs } from "file-saver";
import LodingAnimation from "../Shared/LodingAnimation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useRef } from "react";
import useCopyToClipboard from "../Library/useCopyToClipboard";
import { toast } from "react-toastify";

const buttonStyle =
    " h-[30px]  sm:h-[30px] w-[48%] rounded-[4px] border transition ease-in-out duration-200 border-primary text-[12px] font-semibold	text-primary hover:bg-primary hover:text-[#FFFFFF]";

function ContentViewCard({
    data,
    refetch,
}: {
    data: ContentDataType;
    refetch: any;
}) {
    const router = useRouter();
    const [userData] = useAtom(signupState);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [shareOpen, setShareOpen] = useState(false);
    const [tagModal, setTagModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const isLiked = () => {
        return data.likes.includes(userData._id) ? true : false;
    };

    const isFavorited = () => {
        return data.favorites.includes(userData._id) ? true : false;
    };

    const handleDropdown = (e: any) => {
        e.stopPropagation();
        setDropdownOpen(!dropdownOpen);
    };
    const handleShare = () => setShareOpen(!shareOpen);
    const handleTag = () => setTagModal(!tagModal);
    const handleDelete = () => setDeleteModal(!deleteModal);

    const handleLoveIcon = async (e: any) => {
        e.stopPropagation();
        await likeFavoriteApi(
            userData._id,
            data._id,
            "favorites",
            isFavorited()
        );
        refetch();
    };

    const handleLikeIcon = async (e: any) => {
        e.stopPropagation();
        await likeFavoriteApi(userData._id, data._id, "likes", isLiked());
        refetch();
    };

    const handleDropdownClick = (v: any) => {
        switch (v.title) {
            case "Tag":
                return handleTag();
            case "Delete":
                return handleDelete();
            case "Edit":
                return handleViewContent();
            case "Update":
                return handleViewContent();
            case "Download":
                return saveAs(data.file_url, data.additional_info.file_name);
            default:
                break;
        }
    };

    const handleViewContent = () => {
        router.push("/dashboard/contents/view-details/" + data._id);
    };

    const onDeleteContent = async () => {
        await deleteContent(data._id);
        setDeleteModal(false);
        refetch();
    };

    return (
        <>
            <div
                // onClick={handleViewContent}
                className="h-[175px]  w-[100%]  bg-[#FFFFFF] rounded-[4px] p-[10px] relative shadow-[2px_2px_18px_rgba(0,0,0,0.08)]"
            >
                <div className="flex gap-[4%] justify-between items-center relative">
                    {isImage(data.thumbnail) ? (
                        <img
                            src={data.thumbnail}
                            className="h-[155px] w-[48%] rounded-[4px] object-cover"
                            alt="content"
                        />
                    ) : (
                        <img
                            src="/assets/no_preview.jpg"
                            className="h-[155px] w-[48%] rounded-[4px] object-cover"
                            alt="content"
                        />
                    )}

                    {/* <div className="w-[48%] h-[155px] rounded bg-[#a8a8a8] flex justify-center items-center">
                        <div className="uppercase text-white font-bold text-sm">
                            No preview available
                        </div>
                    </div> */}

                    <div className="absolute top-[10px] left-[10px] w-[41px] h-[24px] rounded bg-[rgba(255,255,255,.6)] text-white flex justify-center items-center">
                        <div className="text-[10px] font-medium text-black uppercase">
                            {getExtension(data.file_url)}
                        </div>
                    </div>

                    <div className=" h-[155px] w-[48%]">
                        <div className="flex justify-between items-center mb-[15.34px] relative">
                            <h3 className="text-[14px] font-semibold 4xl:text-[16px] text-[#222222] w-[95%] truncate">
                                {data.title}
                            </h3>
                            <OutSideClick
                                onOutSideClick={() => setDropdownOpen(false)}
                            >
                                <motion.img
                                    onClick={handleDropdown}
                                    src="/img/dotline.svg"
                                    alt="3 dot line"
                                    className="w-[14px] h-[21px] cursor-pointer "
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                />

                                <div
                                    onClick={(e) => e.stopPropagation()}
                                    className="absolute right-[5px] top-[20px] z-10"
                                >
                                    {dropdownOpen && (
                                        <DropdownEdit
                                            onDropdownClick={
                                                handleDropdownClick
                                            }
                                        />
                                    )}
                                </div>
                            </OutSideClick>
                        </div>

                        <div className="flex flex-wrap h-auto gap-[2px] mb-[15.33px] 4xl:mb-[13px]">
                            <TagBadges color={"#E51937"} />
                            <TagBadges color={"#21B979"} />
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <h3 className="xs:text-[12px] xs:font-bold  4xl:text-[14px] 4xl:font-semibold text-[#222222]">
                                Type :
                            </h3>
                            <p className="text-[12px] 4xl:text-[14px] font-normal text-[#676767]">
                                {data.content_type || "Not selected"}
                            </p>
                        </div>
                        <div className="flex gap-[10px] items-center mt-[10px] mb-[15.34px] 4xl:mb-[13px]">
                            <div className="flex gap-[5px] items-center">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handleLoveIcon}
                                >
                                    <FavouriteIcon
                                        stroke={
                                            isFavorited() ? "#E51937" : "black"
                                        }
                                        color={
                                            isFavorited() ? "#E51937" : "white"
                                        }
                                    />
                                </motion.button>
                                <p className="text-[#676767] text-[12px]">
                                    {data.favorites.length}
                                </p>
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
                                <p className="text-[#676767] text-[12px]">
                                    {data.likes.length}
                                </p>
                            </div>
                        </div>
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="flex flex-row gap-[2%]"
                        >
                            <CopyToClipboard
                                text={data.file_url}
                                onCopy={() => toast.success("Link copied!")}
                            >
                                <button className={buttonStyle}>Link</button>
                            </CopyToClipboard>
                            <div className="!w-[48%]">
                                <OutSider
                                    onOutSideClick={() => setShareOpen(false)}
                                >
                                    <button
                                        onClick={handleShare}
                                        className={`${buttonStyle} !w-full`}
                                    >
                                        Share
                                    </button>

                                    {shareOpen && (
                                        <SharingDetails
                                            handleShare={handleShare}
                                            content_id={data._id}
                                        />
                                    )}
                                </OutSider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EditTagModal
                isOpen={tagModal}
                onClose={() => setTagModal(!tagModal)}
            />
            <YesNoModal
                header="Remove my content" // TODO: 'my collection' -> collection name
                description="Are you sure you want to remove my content? This action cannot be undone"
                isOpen={deleteModal}
                onYesClick={onDeleteContent}
                handleModal={handleDelete}
            />
        </>
    );
}

const SharingDetails = ({
    handleShare,
    content_id,
}: {
    handleShare: () => any;
    content_id: string;
}) => {
    const [recipient, setRecipient] = useState<string>("");
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [copyText, setCopyText] = useCopyToClipboard();

    const handleSharingDetails = async () => {
        if (!recipient) {
            return setError(true);
        }
        setLoading(true);
        await api.post("/api/content/sharing", {
            content_id: content_id,
            recipient,
            link: "test",
        });
        setCopyText("link");
        handleShare();
        setLoading(false);
    };

    return (
        <div className="absolute bottom-[-72px] right-[0px] arrow arrow-top p-[6px] flex items-center">
            <div
                className={`rounded-[4px] w-full h-[40px] ${
                    error && "border border-error"
                } bg-[#F4F4F4] flex justify-between  items-center`}
            >
                <input
                    className="placeholder:text-[#a8a8a8] text-[#000] w-[120px] text-[14px] bg-transparent pl-[10px] outline-0 or "
                    type="text"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="Type name"
                />
                <button
                    onClick={handleSharingDetails}
                    type="submit"
                    className="w-[74px] h-[40px] rounded-[4px] bg-primary text-white text-[14px] hover:bg-primary_dark"
                >
                    {isLoading ? <LodingAnimation color="white" /> : "Copy"}
                </button>
            </div>
        </div>
    );
};

export default ContentViewCard;

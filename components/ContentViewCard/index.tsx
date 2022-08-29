/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { OutSideClick } from "../Shared/OutSideClick";
import TagBadges from "../CustomIcons/TagBadges";
import FavouriteIcon from "../CustomIcons/FavouriteIcon";
import LikeIcon from "../CustomIcons/LikeIcon";
import OutSider from "../Shared/OutSider";
import DropdownEdit from "./DropdownEdit";
import TagModal from "../modal/TagModal";

const buttonStyle =
    " h-[30px]  sm:h-[30px] w-[48%] rounded-[4px] border transition ease-in-out duration-200 border-primary text-[12px] font-semibold	text-primary hover:bg-primary hover:text-[#FFFFFF]";

function ContentViewCard() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [shareOpen, setShareOpen] = useState(false);

    const handleDropdown = () => setDropdownOpen(!dropdownOpen);
    const handleShare = () => setShareOpen(!shareOpen);

    const [tagModal, setTagModal] = useState(false);

    const handleDropdownClick = (v: any) => {
        switch (v.title) {
            case "Tag":
                return setTagModal(!tagModal);

            default:
                break;
        }
    };

    return (
        <>
            <div className="h-[175px] w-[100%] bg-[#FFFFFF] rounded-[4px] p-[10px] relative shadow-[2px_2px_18px_rgba(0,0,0,0.08)]">
                <div className="flex gap-[4%] justify-between items-center">
                    <img
                        src="/img/test.jpg"
                        className="h-[155px] w-[48%] rounded-[4px]"
                        alt="content"
                    />

                    <div className=" h-[155px] w-[48%]">
                        <div className="flex justify-between items-center mb-[15.34px] relative">
                            <h3 className="text-[14px] font-semibold 4xl:text-[16px] text-[#222222] w-[95%] truncate">
                                Give your blog title here I like me better
                            </h3>
                            <OutSideClick
                                onOutSideClick={() => setDropdownOpen(false)}
                            >
                                <motion.img
                                    onClick={handleDropdown}
                                    src="/img/dotline.svg"
                                    alt="3 dot line"
                                    className="w-[14px] h-[21px] cursor-pointer "
                                />

                                <div className="absolute right-[5px] top-[20px] z-10">
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
                                Blog
                            </p>
                        </div>
                        <div className="flex gap-[10px] items-center mt-[10px] mb-[15.34px] 4xl:mb-[13px]">
                            <div className="flex gap-[5px] items-center">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FavouriteIcon
                                        stroke={"black"}
                                        color={"white"}
                                    />
                                </motion.button>
                                <p className="text-[#676767] text-[12px]">
                                    {0}
                                </p>
                            </div>
                            <div className="flex gap-[5px] items-center">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <LikeIcon
                                        stroke={"black"}
                                        color={"white"}
                                    />
                                </motion.button>
                                <p className="text-[#676767] text-[12px]">
                                    {0}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-[2%]">
                            <button className={buttonStyle}>Link</button>
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
                                        <div className="absolute bottom-[-62px] right-[0px] arrow arrow-top p-[6px] flex items-center">
                                            <div className="rounded-[4px] w-full h-[40px] bg-[#F4F4F4] flex justify-between  items-center">
                                                <input
                                                    className="placeholder:text-[#a8a8a8] text-[#000] w-[120px] text-[14px] bg-transparent pl-[10px] outline-0"
                                                    type="text"
                                                    name="name"
                                                    placeholder="Type name"
                                                />
                                                <button className="w-[74px] h-[40px] rounded-[4px] bg-primary text-white text-[14px]">
                                                    Copy
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </OutSider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TagModal
                isOpen={tagModal}
                onClose={() => setTagModal(!tagModal)}
            />
        </>
    );
}

export default ContentViewCard;

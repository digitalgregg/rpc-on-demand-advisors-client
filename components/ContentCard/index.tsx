import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import TagBadges from "./../CustomIcons/TagBadges";
import FavouriteIcon from "./../CustomIcons/FavouriteIcon";
import LikeIcon from "./../CustomIcons/LikeIcon";
import EditDropdown from "./../EditDropdown/index";

type CardProps = {
  imgURL: string;
  title: string;
  tagColor: string;
  favourite: number;
  like: number;
  type: string;
  favouriteIconStroke?: string;
  favouriteIconFill?: string;
  likeIconStroke?: string;
  likeIconFill?: string;
  mapIndex: number;
};

const ContentCard = ({
  imgURL,
  title,
  tagColor,
  favourite,
  like,
  type,
  favouriteIconStroke,
  favouriteIconFill,
  likeIconStroke,
  likeIconFill,
  mapIndex,
}: CardProps) => {
  const buttonSyle =
    " h-[30px]  sm:h-[30px] w-[48%] rounded-[4px] border transition ease-in-out duration-200 border-primary text-[12px] font-semibold	text-primary hover:bg-primary hover:text-[#FFFFFF]";
  const [clickedId, setClickedId] = useState(null);
  const [selectId, setSelectId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const handleIconClick = (id: any) => {
    setClickedId(id);
    setIsOpen(!isOpen);
  };
  // handle share button
  const handleShareIcon = (id: any) => {
    setSelectId(id);
    setShareOpen(!shareOpen);
  };
  return (
    <div
      style={{ boxShadow: "2px 2px 18px rgba(0, 0, 0, 0.08)" }}
      className="h-[175px] w-[100%] sm:h-[175px]  md:h-[175px]  lg:h-[175px] xl:h-[175px] 2xl:h-[175px]  bg-[#FFFFFF] rounded-[4px] p-[10px] relative"
    >
      <div className="flex gap-[4%] justify-between items-center">
        <img
          src={imgURL}
          className="h-[155px] w-[48%] s sm:h-[155px] md:h-[155px]  lg:h-[155px]  xl:h-[155px]  rounded-[4px]"
          alt="content"
        />

        <div className=" h-[155px]  sm:h-[155px]  md:h-[155px]  lg:h-[155px]  xl:h-[155px] w-[48%]">
          <div className="flex justify-between items-center mb-[15.34px] relative">
            <h3 className="text-[14px] font-semibold 4xl:text-[16px] text-[#222222] w-[95%] truncate">
              {title}
            </h3>
            <img
              onClick={() => handleIconClick(mapIndex)}
              src="/img/dotline.svg"
              alt="3 dot line"
              className="w-[14px] h-[14px] cursor-pointer"
            />
            <div className="absolute right-[5px] top-[20px] z-10">
              <EditDropdown
                mapIndex={mapIndex}
                clickedId={clickedId}
                isOpen={isOpen}
              />
            </div>
          </div>
          {/* TAG SECTION START  */}
          <div className="flex flex-wrap h-auto gap-[2px] mb-[15.33px] 4xl:mb-[13px]">
            <TagBadges color={tagColor} />
          </div>
          {/* TAG SECTION END  */}
          {/* type section start */}
          <div className="flex items-center gap-[8px]">
            <h3 className="xs:text-[12px] xs:font-bold  4xl:text-[14px] 4xl:font-semibold text-[#222222]">
              Type :
            </h3>
            <p className="text-[12px] 4xl:text-[14px] font-normal ">{type}</p>
          </div>
          {/* type section end */}

          {/* favourite and like start  */}
          <div className="flex gap-[10px] items-center mt-[10px] mb-[15.34px] 4xl:mb-[13px]">
            <div className="flex gap-[5px] items-center">
              <FavouriteIcon
                stroke={favouriteIconStroke ? favouriteIconStroke : "black"}
                color={favouriteIconFill ? favouriteIconFill : "white"}
              />
              <p className="text-[#676767] text-[12px]">{favourite}</p>
            </div>
            <div className="flex gap-[5px] items-center">
              <LikeIcon
                stroke={likeIconStroke ? likeIconStroke : "black"}
                color={likeIconFill ? likeIconFill : "white"}
              />
              <p className="text-[#676767] text-[12px]">{like}</p>
            </div>
          </div>
          {/* favourite and like end  */}
          {/* button sections start */}
          <div className="flex gap-[2%]">
            <button className={buttonSyle}>Link</button>

            <button
              onClick={() => handleShareIcon(mapIndex)}
              className={buttonSyle}
            >
              Share
            </button>
          </div>
          {/* button sections end */}

          {/* copy popup section  */}
          {(selectId === mapIndex) && shareOpen && (
            <div className="absolute bottom-[-9px] right-[40px] arrow arrow-top p-[6px] flex items-center">
              <div className="rounded-[4px] w-full h-[40px] bg-[#F4F4F4] flex justify-between  items-center">
                <input
                  className="text-[#DEDEDE] w-[120px] text-[14px] bg-transparent pl-[10px] outline-0"
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

          {/* copy popup section end */}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;

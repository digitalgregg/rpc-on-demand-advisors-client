import React, {useState} from "react";
import { ToastContainer } from "react-toastify";
import TagBadges from "./../CustomIcons/TagBadges";
import FavouriteIcon from './../CustomIcons/FavouriteIcon';
import LikeIcon from './../CustomIcons/LikeIcon';
import EditDropdown from './../EditDropdown/index';

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
  mapIndex:number;
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
  mapIndex
}: CardProps) => {
  const buttonSyle = "w-[72.25px] h-[30px] sm:w-[121px] sm:h-[30px] md:w-[140.5px] lg:w-[75.88px] xl:w-[95.38px] 2xl:w-[79.5px] 3xl:w-[95.17px] 4xl:w-[81.94px] rounded-[4px] border border-[#E51937] text-[12px] font-semibold	text-[#E51937] hover:bg-[#E51937] hover:text-[#FFFFFF]";
  const [clickedId, setClickedId] = useState(null);
  const [isOpen , setIsOpen] = useState(false);
  const handleIconClick = (id:any) => {
    setClickedId(id);
    setIsOpen(!isOpen)
  }
  return (
    <div
      style={{ boxShadow: "2px 2px 18px rgba(0, 0, 0, 0.08)" }}
      className="w-[335px] h-[175px] sm:w-[530px] sm:h-[175px] md:w-[608px] md:h-[175px] lg:w-[349.5px] lg:h-[175px] xl:w-[427.5px] xl:h-[175px] 2xl:w-[350px] 2xl:h-[175px] 3xl:w-[426.67px]  4xl:w-[373px] bg-[#FFFFFF] rounded-[4px] p-[10px]"
    >


      <div  className="flex gap-[10px] justify-between items-center">
          <img
            src={imgURL}
            className="w-[152.5px] h-[155px] sm:w-[250px] sm:h-[155px]  md:w-[289px] md:h-[155px] lg:w-[159.75px] lg:h-[155px] xl:w-[198.75px] xl:h-[155px] 2xl:w-[153px] 3xl:w-[198.33px] 4xl:w-[171.88px] rounded-[4px]"
            alt="content"
          />


        <div className="w-[152.5px] h-[155px] sm:w-[250px] sm:h-[155px] md:w-[289px] md:h-[155px] lg:w-[159.75px] lg:h-[155px] xl:w-[198.75px] xl:h-[155px] 2xl:w-[167px] 3xl:w-[198.33px] 4xl:w-[171.88px]">
          <div className="flex justify-between items-center mb-[15.34px] relative">
            <h3 className="text-[14px] font-semibold 4xl:text-[16px] text-[#222222] w-[139px] truncate">
              {title}
            </h3>
            <img
              onClick={() => handleIconClick(mapIndex)}
              src="/img/dotline.svg"
              alt="3 dot line"
              className="w-[14px] h-[14px] cursor-pointer"
            />
            <div className="absolute right-[5px] top-[20px] z-50"><EditDropdown mapIndex={mapIndex} clickedId={clickedId} isOpen={isOpen}/></div>
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
                <FavouriteIcon stroke={favouriteIconStroke? favouriteIconStroke : "black"}  color={favouriteIconFill ? favouriteIconFill: "white"}/>
                <p className="text-[#676767] text-[12px]">{favourite}</p>
            </div>
            <div className="flex gap-[5px] items-center">
                <LikeIcon stroke={likeIconStroke? likeIconStroke : "black"}  color={likeIconFill ? likeIconFill: "white"} />
                <p className="text-[#676767] text-[12px]">{like}</p>
            </div>
          </div>
          {/* favourite and like end  */}
          {/* button sections start */}
          <div className="flex gap-[8px]">
            <button className={buttonSyle}>Link</button>

            <button className={buttonSyle}>Share</button>
          </div>
          {/* button sections end */}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;

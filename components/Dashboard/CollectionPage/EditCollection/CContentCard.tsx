/* eslint-disable @next/next/no-img-element */
import React from "react";
import CheckBox from "../../../CustomIcons/CheckBox";
type ContentCardType = {
    className?: string;
    isChecked: boolean;
    data: any;
};

const CContentCard = ({ className, isChecked, data }: ContentCardType) => {
    return (
        <div
            className={`bg-[#fff] p-[10px] cursor-pointer flex gap-[15px] items-center rounded-[4px] ${className}`}
        >
            <div className="w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]">
                <CheckBox
                    isChecked={isChecked}
                    width={"100%"}
                    height={"100%"}
                />
            </div>
            <img
                src={data.img}
                className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] rounded-[4px]"
                alt=""
            />
            <div>
                <div className="text-[14px] font-semibold xl:text-base xl:leading-[21.79px] line-clamp-2 leading-[19.07px] text-[#000000]">
                    {data.title}
                </div>
                <div className="pt-[10px]"></div>
                <div className="text-xs font-semibold xl:text-sm xl:leading-[19.07px] text-[#222222] leading-[16.34px]">
                    Type:
                    <span className="text-[#676767] pl-[12px]">
                        {data.type}
                    </span>
                </div>
            </div>
        </div>
    );
};

CContentCard.defaultProps = {
    isChecked: true,
};

export default CContentCard;

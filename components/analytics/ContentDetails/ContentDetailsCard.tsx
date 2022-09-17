import React from "react";

type ContentDetailsCardType = {
    Title: string;
    Details: string;
    Views: number;
    Shares: number;
    Upvotes: number;
};

const ContentDetailsCard = ({
    Title,
    Details,
    Views,
    Shares,
    Upvotes,
}: ContentDetailsCardType) => {
    return (
        <>
             <div className="bg-[#fff] sm:p-[22px] py-4 px-3 text-[#000]">
                <div className="flex items-center justify-center text-sm leading-[19.07px]">
                    <div className="flex items-center w-[calc(80%/2)] sm:w-[calc(80%/1)] mr-[50px] sm:mr-0">
                        <div className=" max-w-[95%] sm:w-full text-[#676767] line-clamp-1 text-[10px] sm:text-[14px] md:text-[14px]">
                            {Title}
                        </div>
                    </div>
                    <div className="flex  items-center w-[calc(40%/2)]">
                        <div className=" w-1/2 sm:w-full  text-[#676767] text-[10px] sm:text-[14px] md:text-[14px]">
                            {Details}
                        </div>
                    </div>
                    <div className="flex items-center w-[calc(40%/2)]">
                        <div className=" w-1/2 sm:w-full  text-[#676767] text-[10px] sm:text-[14px] md:text-[14px]">
                            {Views}
                        </div>
                    </div>
                    <div className="flex items-center w-[calc(40%/2)]">
                        <div className=" w-1/2 sm:w-full   text-[#676767] text-[10px] sm:text-[14px] md:text-[14px]">
                            {Shares}
                        </div>
                    </div>
                    <div className="flex items-center w-[calc(40%/2)]">
                        <div className=" w-1/2 sm:w-full   text-[#676767] text-[10px] sm:text-[14px] md:text-[14px]">
                            {Upvotes}
                        </div>
                    </div>
                </div>
            </div>
            <hr className=" h-[1px] text-[rgba(0,0,0,0.1)]" />
        </>
    );
};

ContentDetailsCard.defaultProps = {
    Title: "New Microsoft Word Document",
    Details: "View",
    Views: 3,
    Shares: 4,
    Upvotes: 13,
};

export default ContentDetailsCard;

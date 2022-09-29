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
            <ul className="flex gap-x-3 sm:gap-x-0 items-center md:px-[20px] px-3 py-[17px] lg:py-[19px] bg-[#fff] text-black">
                <li className="w-[40%]  text-[10px] sm:text-sm  sm:mr-0">
                    <div className=" line-clamp-1 ">{Title}</div>
                </li>
                <li className="w-[15%]  text-[10px] sm:text-sm ">{Details}</li>
                <li className="w-[15%]  text-[10px] sm:text-sm ">{Views}</li>
                <li className="w-[15%]  text-[10px] sm:text-sm ">{Shares}</li>
                <li className="w-[15%] text-[10px] sm:text-sm ">{Upvotes}</li>
            </ul>

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

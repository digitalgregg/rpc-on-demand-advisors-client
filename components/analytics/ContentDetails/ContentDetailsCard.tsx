import Link from "next/link";
import React from "react";
import { ContentDataType } from "../../../api-call/ContentApi";

type ContentDetailsCardType = {
    data: ContentDataType;
};

const ContentDetailsCard = ({ data }: ContentDetailsCardType) => {
    return (
        <>
            <ul className="flex   items-center md:px-[20px] px-3 py-[17px] lg:py-[19px] bg-[#fff] text-black">
                <li className="w-[40%]   text-[10px] sm:text-sm  sm:mr-0">
                    <div className=" truncate pr-[5px]">{data.title}</div>
                </li>
                <li className="w-[15%]  text-[10px] sm:text-sm ">
                    <Link href={`/dashboard/contents/view-details/${data._id}`}>
                        View
                    </Link>
                </li>
                <li className="w-[15%]  text-[10px] sm:text-sm ">
                    {data.views?.length || 0}
                </li>
                <li className="w-[15%]  text-[10px] sm:text-sm ">
                    {data.sharingDetails.length || 0}
                </li>
                <li className="w-[15%] text-[10px] sm:text-sm ">
                    {data.likes.length || 0}
                </li>
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

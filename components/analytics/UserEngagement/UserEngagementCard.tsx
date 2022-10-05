/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React from "react";
import Moment from "react-moment";

const UserEngagementCard = ({ data }: { data: any }) => {
    return (
        <>
            <ul className="flex w-full  items-center md:px-[20px] px-3 py-[17px] lg:py-[14px] sm:py-[12px]  bg-white rounded-[4px]">
                <li className="w-[17%]  text-[10px] sm:text-sm ">
                    <div className="flex items-center gap-3">
                        <img
                            className="rounded-full hidden w-[30px] h-[30px] sm:block"
                            src={
                                data.user_id.profile ||
                                "/assets/profile-icon.png"
                            }
                            alt=""
                            width={30}
                            height={30}
                        />
                        <div className="line-clamp-1">{data.user_id.name}</div>
                    </div>
                </li>
                <li className="w-[23%] pr-[5px] text-[10px] sm:text-sm ">
                    <div className="line-clamp-1">{data.title}</div>
                </li>
                <li className="w-[15%] text-[10px] sm:text-sm ">
                    <Link href={`/dashboard/contents/view-details/${data._id}`}>
                        View
                    </Link>
                </li>
                <li className="w-[15%]  text-[10px] sm:text-sm ">
                    {data.sharingDetails.length}
                </li>
                <li className="w-[20%]  text-[10px] sm:text-sm ">
                    <div className="line-clamp-1">
                        <Moment date={data.createdAt} format="DD MMM YYYY" />
                    </div>
                </li>
                <li className="w-[10%]  text-[10px] sm:text-sm ">
                    {data.views.length || 0}
                </li>
            </ul>
            <hr className=" h-[1px] text-[rgba(0,0,0,0.1)]" />
        </>
    );
};

export default UserEngagementCard;

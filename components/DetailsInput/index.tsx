/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GetContentContext } from "../Context/ContentDataProvider";
import Link from "next/link";

const DetailsInput = () => {
    const { contentData, context } = GetContentContext();

    const labelStyle =
        "text-[16px] font-semibold leading-[21.79px] text-[#000805] ";
    return (
        <div className="w-full">
            <h3 className="text-[24px] font-semibold text-[#000805] flex items-center gap-[13px] mb-[20px]">
                <Link href={"/dashboard/contents"}>
                    <img
                        src="/img/backArrow.svg"
                        alt="arrow"
                        className="cursor-pointer"
                    />
                </Link>{" "}
                <span>Details</span>
            </h3>

            <label htmlFor="title">
                <span className={labelStyle}>Title</span>
            </label>
            <br />
            <input
                type="text"
                name="title"
                onChange={(e) =>
                    context.dispatchDetails({
                        type: "title",
                        value: e.target.value,
                    })
                }
                defaultValue={contentData?.title}
                className="w-full border bg-white border-[#9E9E9E] outline-0 rounded-[4px] px-[15px] h-[55px] text-[#676767] text-[14px] mt-[10px] mb-[20px]"
            />
            <label htmlFor="description">
                <span className={labelStyle}>Description</span>
            </label>
            <textarea
                onChange={(e) =>
                    context.dispatchDetails({
                        type: "description",
                        value: e.target.value,
                    })
                }
                defaultValue={contentData?.description}
                className="w-full bg-white h-[150px] border border-[#9E9E9E] rounded-[4px] mt-[10px] outline-0 px-[15px] text-[14px] text-[#676767] leading-[19.07px] py-[18px]"
            >
                
            </textarea>
        </div>
    );
};

export default DetailsInput;

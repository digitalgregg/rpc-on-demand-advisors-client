import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardType = {
    link: string;
    title: string;
    url: string;
    timeDate: string;
};

const Card = ({ link, title, url, timeDate }: CardType) => {
    return (
        <div className=" bg-White p-[10px] max-w-[1570px] rounded flex flex-row justify-between items-center w-full">
            <div className=" flex flex-row items-center gap-[15px]">
                <div className=" relative w-[80px] h-[80px] rounded overflow-hidden">
                    <Image layout="fill" src={url} alt="images" />
                </div>
                <div className=" flex flex-col gap-[10px]">
                    <h3 className="text-line-clamp-1 font-semibold text-base leading-[22px] text-[#000000] ">{title}</h3>
                    <div className=" flex flex-row items-center gap-[10px]">
                        <div className=" relative w-[18px] h-[18px]">
                            <Image
                                layout="fill"
                                src="/assets/recycle-bin/time.svg"
                                alt="icons"
                            />
                        </div>
                        <p className="text-line-clamp-1 text-sm leading-[19px] text-[#222222] font-normal">{timeDate}</p>
                    </div>
                </div>
            </div>
            <Link href={link}>
                <button className=" hover:bg-transparent ease-in-out duration-300 hover:text-[#E51937] border-[1px] border-solid border-[#E51937] px-[13px] sm:px-[26px] py-[7px] sm:py-[9px] rounded text-xs sm:text-base leading-[16.34px] sm:leading-[22px] bg-[#E51937] font-semibold text-White">Restore</button>
            </Link>
        </div>
    );
};

export default Card;

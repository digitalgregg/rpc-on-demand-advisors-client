/* eslint-disable @next/next/no-img-element */
import React from "react";
import ContentCard from "../../../ContentCard";
import { motion } from "framer-motion";
import ContentViewCard from "../../../ContentViewCard";
import Link from "next/link";

function ViewCollectionContent() {
    return (
        <div className="w-full">
            <div className="xs:w-[335px] sm:w-[263px] h-[44px] rounded-[4px] flex justify-between items-center bg-[#FFFFFF] shadow-[3px_3px_6px_rgba(0,0,0,0.07)] pl-[20px] py-[10px] pr-[10px] mb-[20px] 4xl:mb-[20px]">
                <h3 className="text-[#000805] ">Collection Name</h3>
                <Link href={"/dashboard/collections/edit/dfsljdf"}>
                    <motion.button
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.1 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="p-[10px] cursor-pointer"
                    >
                        <img
                            src="/img/editIcon.svg"
                            alt="Edit icon"
                            className="w-[14px] h-[14px]"
                        />
                    </motion.button>
                </Link>
            </div>

            {/* filter section  */}
            <div className="flex items-center justify-between pb-[20px] ">
                <h3 className="text-[16px] font-semibold text-[#222222]">
                    Your Content (100)
                </h3>
                <div className="flex items-center gap-[10px] text-[#000] ">
                    <h3 className="text-[14px]">Sorted by</h3>
                    <select
                        placeholder="Sorted"
                        className="w-[111px] h-[30px] bg-transparent focus:outline-none rounded-[4px] border border-[#DEDEDE] px-[5px]"
                    >
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Favorites</option>
                        <option>Voted</option>
                    </select>
                </div>
            </div>
            {/* filter section  end*/}
            <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4 gap-[25px] pb-[20px]">
                {[...Array(16)].map((content: any, i) => (
                    <div key={i} className="w-[100%]">
                        {/* <ContentCard
                            imgURL="/img/test.jpg"
                            title="Give your blog title here I like me better"
                            tagColor="red"
                            type="Blog"
                            favourite={0}
                            like={0}
                            mapIndex={content}
                        /> */}
                        {/* <ContentViewCard /> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewCollectionContent;

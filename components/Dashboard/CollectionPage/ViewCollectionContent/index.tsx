/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import ContentCard from "../../../ContentCard";
import { motion } from "framer-motion";
import ContentViewCard from "../../../ContentViewCard";
import Link from "next/link";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { getCollection } from "../../../../api-call/CollectionApi";
import DataNotFound from "../../../Shared/DataNotFound";
import Pagination, { IsArray } from "../../../Shared/Pagination";
import { useWindowDimensions } from "../../../Shared/DimentionHook";
import LodingAnimation from "../../../Shared/LodingAnimation";
import SortedSelect, { SelectOption } from "../../../Shared/SortedSelect";
import { sortedContentFilter } from "../../../../utils/filter";
import Meta from "../../../Meta";
import { useAtom } from "jotai";
import { team_state } from "../../../../state";

const options = [
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
    { value: "favorites", label: "Favorites" },
    { value: "voted", label: "Voted" },
];

function ViewCollectionContent() {
    const router = useRouter();
    const id = router.query.id;
    const [teamData] = useAtom(team_state);
    // filter section
    const [sortedFilter, setSortedFilter] = useState<SelectOption>({
        value: "newest",
        label: "Newest",
    });

    const { data, isSuccess, refetch, isLoading, isError } = useQuery(
        ["get-collection", id],
        () => getCollection(`${id}`),
        {
            enabled: !!id,
            select: (response) => response.data,
            retry(failureCount, error: any) {
                if (error.response.data.success === false) {
                    return false;
                } else {
                    return true;
                }
            },
        }
    );

    const { width } = useWindowDimensions();
    function getItemsPerPage(): number {
        if (width < 680) {
            return 6;
        } else if (width < 768) {
            return 10;
        } else if (width < 1024) {
            return 4;
        } else if (width < 1440) {
            return 8;
        } else if (width < 1920) {
            return 12;
        } else {
            return 16;
        }
    }

    return (
        <div className="w-full">
            <Meta title={data && data.title} />
            <div className="xs:w-[335px] sm:w-[263px] h-[44px] rounded-[4px] flex justify-between items-center bg-[#FFFFFF] shadow-[3px_3px_6px_rgba(0,0,0,0.07)] pl-[20px] py-[10px] pr-[10px] mb-[20px] 4xl:mb-[20px]">
                <h3 className="text-[#000805] ">{data && data.title}</h3>
                <Link
                    href={`/dashboard/${
                        data && data.shareWith !== "no" ? "shared-" : ""
                    }collections/edit/${data && data._id}`}
                >
                    <>
                        {teamData.role === "admin" ? (
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
                        ) : (
                            data &&
                            teamData.user_id === data.user_id && (
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
                            )
                        )}
                    </>
                </Link>
            </div>

            {/* filter section  */}
            <div className="flex items-center justify-between pb-[20px] ">
                <h3 className="text-[16px] font-semibold text-[#222222]">
                    Your Content ({(data && data.contents.length) || 0})
                </h3>
                <div className="flex items-center gap-[10px] text-[#000] ">
                    <h3 className="text-[14px]">Sorted by</h3>
                    <SortedSelect
                        value={sortedFilter}
                        onChange={(e: any) => setSortedFilter(e)}
                        options={options}
                    />
                </div>
            </div>
            {/* filter section  end*/}

            {/* content cards  */}
            <div className="">
                {isSuccess && data.contents.length > 0 ? (
                    <Pagination
                        dataArr={IsArray(
                            sortedContentFilter(
                                data.contents,
                                sortedFilter.value
                            )
                        )}
                        itemsPerPage={getItemsPerPage()}
                    >
                        {(currentItems) => (
                            <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4 gap-[25px] pb-[20px]">
                                {currentItems.map(
                                    (item: any, index: number) => (
                                        <div
                                            key={index}
                                            className="relative w-[100%]"
                                        >
                                            <ContentViewCard
                                                data={item}
                                                refetch={refetch}
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </Pagination>
                ) : isLoading ? (
                    <div>
                        <div className="flex items-baseline justify-center w-full relative top-[calc((100vh-350px)/2)]">
                            <LodingAnimation
                                color="#E51937"
                                height={50}
                                width={50}
                            />
                            {/* <div className="text-black">No data found</div> */}
                        </div>
                    </div>
                ) : (
                    <DataNotFound
                        imgClass="w-[350px] "
                        className="top-[50px]"
                    />
                )}
                <div className="pt-[70px]"></div>
            </div>
        </div>
    );
}

export default ViewCollectionContent;

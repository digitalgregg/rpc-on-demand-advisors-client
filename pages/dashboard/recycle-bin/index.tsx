import { useAtom } from "jotai";
import React from "react";
import { useQuery } from "react-query";
import { fetchRecycleBin } from "../../../api-call/ContentApi";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import { applicationsettingsFakeData } from "../../../components/fake";
import Meta from "../../../components/Meta";
import RecycleCard from "../../../components/RecycleBin/Card";
import DataNotFound from "../../../components/Shared/DataNotFound";
import LodingAnimation from "../../../components/Shared/LodingAnimation";
import Pagination from "../../../components/Shared/Pagination";
import { team_state } from "../../../state";

const RecycleBinPage = () => {
    const [teamData] = useAtom(team_state);

    const team_id = teamData.id;

    const { data, isSuccess, isLoading, isError, refetch } = useQuery(
        ["fetch-recycle", team_id],
        () => fetchRecycleBin(team_id),
        {
            select: (res) => res.data,
            enabled: !!team_id,
            retry(_, error: any) {
                if (error.response.data.success === false) {
                    return false;
                } else {
                    return true;
                }
            },
        }
    );

    console.log(data);

    return (
        <DashboardLayout>
            <Meta title="Recycle Bin" />
            <div className="bg-white_secondary h-full w-full pb-[35px]">
                <h2 className=" font-bold text-2xl leading-[33px] text-[#101010] mb-[20px]">
                    Recycle Bin
                </h2>
                {isSuccess ? (
                    data.length ? (
                        <Pagination
                            dataArr={data || []}
                            itemsPerPage={4}
                            className=" !justify-start my-3"
                        >
                            {(currentItems) => (
                                <div className=" flex flex-col gap-[10px] sm:gap-[15px] md:gap-[20px]">
                                    {currentItems.map((item: any, i) => (
                                        <RecycleCard
                                            key={i}
                                            data={item}
                                            refetch={refetch}
                                        />
                                    ))}
                                </div>
                            )}
                        </Pagination>
                    ) : (
                        <DataNotFound
                            imgClass="w-[350px] "
                            className="top-[70px]"
                        />
                    )
                ) : (
                    isLoading && (
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
                    )
                )}
            </div>
        </DashboardLayout>
    );
};

export default RecycleBinPage;

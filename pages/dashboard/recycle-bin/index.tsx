import React from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import { applicationsettingsFakeData } from "../../../components/fake";
import Card from "../../../components/RecycleBin/Card";
import Pagination from "../../../components/Shared/Pagination";

const index = () => {
    return (
        <DashboardLayout>
            <div className="bg-white_secondary h-full w-full pb-[35px]">
                <h2 className=" font-bold text-2xl leading-[33px] text-[#101010] mb-[20px]">
                    Recycle Bin
                </h2>

                <Pagination
                    dataArr={applicationsettingsFakeData}
                    itemsPerPage={5}
                    className=" !justify-start"
                >
                    {(currentItems) => (
                        <div className=" flex flex-col gap-[10px] sm:gap-[15px] md:gap-[20px]">
                            {currentItems.map(({name}:any,i) => (
                                <Card
                                    key={i}
                                    timeDate="19m (Permanently deleted 30 days)"
                                    title={name}
                                    link="www.google.com"
                                    url="/demo/aaa.jpg"
                                />
                            ))}
                        </div>
                    )}
                </Pagination>
            </div>
        </DashboardLayout>
    );
};

export default index;

import React, { useState } from "react";
import Card from "./Card";
import HeaderContent from "./headerContent";
import Pagination from "../Shared/Pagination";
import { FakeData } from "../fake";

const FileShare = () => {
    return (
        <div className=" relative bg-white_secondary w-full h-full">
            {/* <div className=" transform -skew-x-[8deg] w-full h-[941.26px] bg-[#0D7BEA]"></div> */}
            <div className=" z-0 h-[1120.67px] flex justify-center items-center bg-white_secondary text-White  text-[36px] absolute w-full overflow-hidden">
                <div className=" bg-[#0D7BEA] absolute w-full h-[385px] sm:h-[410px] md:h-[428px] lg:h-[480px] 2xl:h-[550px] 3xl:h-[1059.26px] -top-[115px] 3xl:-top-[527px] -skew-y-[8deg] overflow-hidden opacity-90"></div>

                <div className="bg-[#6BADF0] absolute w-full h-[99.84px] sm:h-[105px] md:h-[125px] lg:h-[120.23px] 3xl:h-[162px] top-[268px] sm:top-[293px] md:top-[311px] lg:top-[363px] 2xl:top-[434px] 3xl:top-[531px] -skew-y-[8deg] overflow-hidden opacity-90 "></div>

                <div className="bg-[#B6CCE2] absolute w-full h-[99.84px] sm:h-[105px] md:h-[125px] lg:h-[120.23px] 3xl:h-[162px] top-[367px] sm:top-[396px] md:top-[435px] lg:top-[481px] 2xl:top-[552px] 3xl:top-[692px] -skew-y-[8deg] overflow-hidden opacity-90 "></div>
            </div>

            <div className=" relative">
                <div className="container mx-auto ">
                    <div className="gap-[30px] z-50">
                        <div>
                            <h1 className=" uppercase text-center text-White font-bold pt-[35px]">
                                LOGO
                            </h1>
                            <div></div>
                        </div>
                        <HeaderContent />
                        <div className=" max-w-[1200px] mx-auto mt-[30px]">
                            <div className=" bg-White rounded w-full px-[30px] md:px-[40px] lg:px-[80px] xl:px-[110px] py-[49px]">
                                <Pagination
                                    dataArr={FakeData}
                                    itemsPerPage={2}
                                    className=" mt-5"
                                >
                                    {(currentItems) => (
                                        <div className=" grid md:grid-flow-col grid-flow-row gap-[20px] justify-center xl:gap-[40px]">
                                            {currentItems?.map(
                                                (v: any, id: any) => (
                                                    <Card key={id} pre={v.p1} />
                                                )
                                            )}
                                        </div>
                                    )}
                                </Pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileShare;

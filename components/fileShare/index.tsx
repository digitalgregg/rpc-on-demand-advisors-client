import React, { useEffect, useReducer, useState } from "react";
import Card from "./Card";
import HeaderContent from "./headerContent";
import Pagination from "../Shared/Pagination";
import { FakeData } from "../fake";
import { defaultBrandingData } from "../../utils/defaultData";
import { ReducerBranding } from "../../api-call/BrandingApi";
import { ContentDataType } from "../../api-call/ContentApi";

type FSType = {
    branding: any;
    contents: ContentDataType[];
};

const FileShare = ({ branding, contents }: FSType) => {
    const [headerContent, setHeaderContent] = useState(defaultBrandingData);

    useEffect(() => {
        if (branding) {
            setHeaderContent((state) => ({
                ...state,
                ...branding,
            }));
        }
        return () => {};
    }, [branding]);

    return (
        <div className=" relative bg-white_secondary w-full h-full">
            {/* <div className=" transform -skew-x-[8deg] w-full h-[941.26px] bg-[#0D7BEA]"></div> */}
            <div className=" z-0 h-[1120.67px] flex justify-center items-center bg-white_secondary text-White  text-[36px] absolute w-full overflow-hidden">
                <div
                    style={{ backgroundColor: headerContent.accent_color }}
                    className=" absolute w-full h-[385px] sm:h-[410px] md:h-[428px] lg:h-[480px] 2xl:h-[550px] 3xl:h-[1059.26px] -top-[115px] 3xl:-top-[527px] -skew-y-[8deg] overflow-hidden "
                ></div>

                <div
                    style={{ backgroundColor: headerContent.accent_color }}
                    className="absolute w-full h-[99.84px] sm:h-[105px] md:h-[125px] lg:h-[120.23px] 3xl:h-[162px] top-[268px] sm:top-[293px] md:top-[311px] lg:top-[363px] 2xl:top-[434px] 3xl:top-[531px] -skew-y-[8deg] overflow-hidden opacity-80 "
                ></div>

                <div
                    style={{ backgroundColor: headerContent.accent_color }}
                    className=" absolute w-full h-[99.84px] sm:h-[105px] md:h-[125px] lg:h-[120.23px] 3xl:h-[162px] top-[368px] sm:top-[397px] md:top-[436px] lg:top-[482px] 2xl:top-[553px] 3xl:top-[693px] -skew-y-[8deg] overflow-hidden opacity-50 "
                ></div>
            </div>
            <div className=" relative">
                <div className="container mx-auto ">
                    <div className="gap-[30px] z-50">
                        <div>
                            <h1 className=" uppercase text-center text-White font-bold pt-[35px]"></h1>
                            <div></div>
                        </div>
                        <HeaderContent data={headerContent} />
                        <div className=" max-w-[1200px] mx-auto mt-[30px]">
                            <div className=" bg-White rounded w-full px-[30px] md:px-[40px] lg:px-[80px] xl:px-[110px] py-[49px]">
                                <Pagination
                                    dataArr={contents}
                                    itemsPerPage={3}
                                    className=" mt-5"
                                >
                                    {(currentItems) => (
                                        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px] justify-center xl:gap-[40px]">
                                            {currentItems?.map((v: any, i) => (
                                                <Card key={i} content={v} />
                                            ))}
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

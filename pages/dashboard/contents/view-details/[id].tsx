import React from "react";
import TopNav from "../../../../components/Dashboard/TopNav";
import DetailsInput from "../../../../components/DetailsInput";
import FilterFields from "./../../../../components/FilterFields/index";
import InfoSection from "./../../../../components/InfoSection/index";
import FileViewerContainer from "../../../../components/FileViewerContainer";

const ContentDetails = () => {
    return (
        <div className="w-[100%] bg-[#F8F8F8] pb-[20px] h-auto]">
            <div className="px-[20px] sm:px-[40px] md:px-[50px] lg:px-[47px] xl:px-[60px] 2xl:px-[40px] 3xl:px-[120px] 4xl:px-[180px]">
                <div className="pt-[30px] pb-[32px] sm:pt-[37px] sm:pb-[35px] md:pt-[20px] md:pb-[30px]">
                    <TopNav />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 sm:gap-[35px] ">
                    <div className="w-full sm:bg-[#FFFFFF] sm:px-[10px] sm:py-[20px]">
                        <DetailsInput />
                        <div className="mt-[20px] sm:mt-[25px] mb-[20px]">
                            <FilterFields />
                        </div>

                        {/* Group buttons start */}
                        <div className="flex gap-[20px] sm:justify-end">
                            <button className="border hover:bg-primary transition duration-700 ease-in-out hover:text-[#FFFFFF] border-primary rounded-[4px] text-primary text-[14px] h-[45px] font-semibold w-[50%] sm:w-[198px]">
                                Replace Content File{" "}
                            </button>
                            <button className="border hover:bg-primary transition duration-700 ease-in-out hover:text-[#FFFFFF] border-primary rounded-[4px] text-primary text-[14px] h-[45px] font-semibold w-[50%] sm:w-[166px]">
                                Publish content
                            </button>
                        </div>
                        {/* Group buttons end */}
                        {/* info section start */}
                        <div className="mt-[25px] sm:shadow-[2px_2px_16px_rgba(0,0,0,0.08)]">
                            <InfoSection />
                        </div>
                        {/* info section end */}
                    </div>

                    {/* second section  */}
                    <div className="w-full bg-[#FFFFFF] rounded-[4px] h-[364px] sm:h-[495px] md:h-[620px] xl:h-[542px] 2xl:h-[620px] flex gap-[20px]">
                        <FileViewerContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentDetails;

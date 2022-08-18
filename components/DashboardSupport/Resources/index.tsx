import React, { useState } from "react";
import CustomSlider from "../../Shared/customSlider";
import { FakeData } from "../../fake";
import WelcomeCard from "../WelcomeCard";

const Resources = () => {
    const [sliderCount, setSliderCount] = useState();
    return (
        <div>
            <div className=" flex flex-col gap-[5px] 2xl:gap-[10px]">
                <h3 className=" text-[32px] leading-[44px] font-bold text-[#101010]">
                    Welcome
                </h3>
                <p className=" font-normal text-sm 2xl:text-base leading-[19.07px] 2xl:leading-[22px] text-[#676767]">
                    Get started with ODA Center
                </p>
            </div>
            <WelcomeCard>
                <CustomSlider
                    label="ODA center"
                    Slideslength={FakeData}
                    count={(e: any) => setSliderCount(e)}
                >
                    {FakeData.map((item, index) => {
                        return (
                            <div key={index}>
                                {index === sliderCount && (
                                    <div className=" flex flex-col gap-[10px]">
                                        <h1 className=" text-base leading-[160%] font-semibold text-[#222222]">
                                            {item.qa}
                                        </h1>
                                        <p className=" flex-wrap flex text-sm leading-[160%] font-normal text-[#222222]">
                                            {item.p1}
                                        </p>
                                        <p className=" flex-wrap flex  text-sm leading-[160%] font-normal text-[#222222]">
                                            {item.p2}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </CustomSlider>
            </WelcomeCard>
        </div>
    );
};

export default Resources;

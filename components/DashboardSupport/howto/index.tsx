import React, { useState } from "react";
import CustomSlider from "../../Shared/customSlider";
import WelcomeCard from "../WelcomeCard";
import { HowToData } from "../../fake";
import Image from "next/image";

const Howto = () => {
    const [sliderCount, setSliderCount] = useState();
    return (
        <div>
            <div className=" flex flex-col gap-[5px] 2xl:gap-[10px] truncate">
                <h3 className="truncate text-[32px] leading-[44px] font-bold text-[#101010]">
                    How does search work in On Demand Advisors ?
                </h3>
            </div>
            <WelcomeCard>
                <CustomSlider
                    label="Basic search"
                    Slideslength={HowToData}
                    count={(e: any) => setSliderCount(e)}
                >
                    {HowToData.map((item, index) => {
                        return (
                            <div key={index}>
                                {index === sliderCount && (
                                    <div>
                                        <div className=" relative max-w-[966px]">
                                            <Image
                                                width={1}
                                                height={0.7}
                                                layout="responsive"
                                                src={item.images}
                                                alt="images"
                                            />
                                        </div>
                                        <p className=" flex-wrap flex  text-sm leading-[160%] font-normal text-[#222222]">
                                            {item.p1}
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

export default Howto;

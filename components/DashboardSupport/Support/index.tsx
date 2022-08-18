import React, { useState } from 'react'
import { SupportData } from '../../fake';
import CustomSlider from '../../Shared/customSlider';
import WelcomeCard from '../WelcomeCard';

const Support = () => {
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
            Slideslength={SupportData}
            count={(e: any) => setSliderCount(e)}
        >
            {SupportData.map((item, index) => {
                return (
                    <div key={index}>
                        {index === sliderCount && (
                            <div className=' flex flex-col gap-[10px]'>
                                <p className=" flex-wrap flex text-sm leading-[160%] font-normal text-[#222222]">
                                    {item.p1}
                                </p>
                                <p className=" flex-wrap flex  text-sm leading-[160%] font-normal text-[#222222]">
                                    {item.p2}
                                </p>
                                <p className=" flex-wrap flex  text-sm leading-[160%] font-normal text-[#222222]">
                                    {item.p3}
                                </p>
                                <p className=" flex-wrap flex  text-sm leading-[160%] font-normal text-[#222222]">
                                    {item.p4}
                                </p>
                                <p className=" flex-wrap flex  text-sm leading-[160%] font-normal text-[#222222]">
                                    {item.p5}
                                </p>
                                <p className=" flex-wrap flex  text-sm leading-[160%] font-normal text-[#222222]">
                                    {item.p6}
                                </p>
                            </div>
                        )}
                    </div>
                );
            })}
        </CustomSlider>
    </WelcomeCard>
</div>
  )
}

export default Support
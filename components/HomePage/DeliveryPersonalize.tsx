import React, { useState } from "react";
import { RightArrowIcon } from "../CustomIcons";
import {useRouter} from "next/router";

const DeliveryPersonalize = () => {
  const router = useRouter();
  const [iconColor, setIconColor] = useState(false);
  const onOver = (e: any) => {
      if (e) setIconColor(true);
  };
  const onLeave = (e: any) => {
      if (e) setIconColor(false);
  };
  const imgStyle = "xs:w-[309px] xs:h-[205px] sm:w-[520px] sm:h-[345.63px] md:w-[520px] md:h-[345.63px] xs:mt-[-110px] sm:mt-[-190px] md:mt-[-210px] lg:w-[800px] lg:h-[532px] lg:mt-[-285px] xl:mt-[-340px] xl:w-[931px] xl:h-[620px] 2xl:w-[931px] 2xl:h-[620px] mx-auto 3xl:w-[1136px] 3xl:h-[756px] 3xl:mt-[-360px] 4xl:w-[1344px] 4xl:h-[895px] 3xl:mt-[-300px]";

  const vactor2 = "absolute w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] bottom-[10px] right-[3px] sm:bottom-[-10px] sm:right-[20px] lg:w-[90.24px] lg:h-[90.24px] lg:bottom-[-40px] xl:w-[140.12px] xl:h-[140.12px] 2xl:w-[124.45px] 2xl:h-[124.45px] 2xl:right-[160px] 4xl:right-[190px]";

  const vactor1 = " absolute bottom-[8px] left-[5px] w-[50px] sm:w-[70px] sm:h-[70px] h-[50px] sm:bottom-[-20px] sm:left-[40px] lg:w-[90.24px] lg:h-[90.24px] lg:bottom-[-40px] xl:w-[140.12px] xl:h-[140.12px] 2xl:left-[150px] 2xl:bottom-[-100px]"

  return (
    <div className="w-[100%]">
      <div className="bg-[#191919] xs:h-[340px] sm:h-[550px] md:h-[549px] lg:h-[650px] xl:h-[745px] 2xl:h-[763px] 3xl:h-[777px] 4xl:h-[763px]">
        <div className="container relative xs:w-[375px] sm:w-[680px] md:w-[768px] lg:w-[1024px] xl:w-[1200px] 2xl:w-[1440px] 3xl:w-[1680px] 4xl:w-[1920px] ">
          <div className="xs:pt-[40px] sm:pt-[60px] lg:pt-[80px] text-center">
            <h2 className="text-[#FFFFFF] xs:leading-[21.69px] sm:leading-[43.58px] mx-auto sm:w-[403px] md:w-[523px] lg:w-[554px] xl:w-[463px] xs:pb-[10px] sm:pb-[20px] lg:pb-[30px] ">
              Deliver personalized pages in minutes
            </h2>
            <p className="text-[#FAFAFA] xs:pb-[20px] sm:pb-[30px] 4xl:pb-[40px] lg:w-[554px] lg:leading-[21.79px] mx-auto">
              Accelerate pipeline and your buyer’s decision making process with
              super easy content grouping and publishing as branded pages.
            </p>
            <button onClick={() => router.push("/tour")} onMouseOver={onOver}
                            onMouseLeave={onLeave} className="hover:text-White hover:bg-primary hover:border-primary hover-transition w-[161px] h-[46px]  border border-[#FFFFFF] rounded-[4px] text-[#FFFFFF] text-[14px] sm:text-[16px] cursor-pointer leading-[19px] font-semibold xs:mb-[30px]">
              {" "}
              <span className="flex items-center justify-center gap-[11px]">
                <span> Take a tour</span>
                <RightArrowIcon
                                    color={`${
                                        !iconColor === true
                                            ? "#ffffff"
                                            : "#ffffff"
                                    }`}
                                />
                {/* <img
                  src="/img/whiteArrow.svg"
                  className="w-[18px] h-[20px] ml-[11px]"
                /> */}
              </span>{" "}
            </button>
            <img src="/img/vector3.svg" alt="vector" className={vactor1} />


            <img src="/img/vector4.svg" alt="vector" className={vactor2} />
          </div>
          
        </div>
      </div>
      <img src="/img/deleviryImg.svg" alt="deleviryImg" className={imgStyle} />
    </div>
  );
};

export default DeliveryPersonalize;

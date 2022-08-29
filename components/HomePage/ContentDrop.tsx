import React from "react";

const ContentDrop = () => {
  return (
    <div className="w-[100%] xs:mt-[60px] sm:mt-[80px]">
      <div className="container">
        <div className="4xl:w-[1560px] 3xl:w-[1440px] lg:w-[900px]   mx-auto">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="xl:w-[472px] lg:w-[471px] sm:w-[460px]  text-center lg:text-left pl-0 ">
              <h3 className=" xl:text-[32px] xs:text-[21px] sm:text-[28px] md:leading-[38.13px] font-bold 2xl:leading-[43.58px] text-[#1D1D1D]">Wrangle your content. Drop the Drive.</h3>
              <p className="mt-[30px] mb-[40px] leading-[21.79px] text-[#4F4F4F]">One place for your winning content. Better sales conversations.Smoother buyer’s journey. Close more deals</p>
              <div className="w-[339px] h-[56px] flex flex-row gap-[30px] mx-auto lg:mx-0">
                <button className="w-[154px] h-[56px] rounded-[4px] bg-primary text-[#FFFFFF] text-[16px] font-semibold leading-[22px] border border-solid border-primary hover:bg-transparent hover:text-primary hover-transition">Try for Free</button>
                <button className="w-[154px] h-[56px] rounded-[4px] bg-[#FFFFFF] text-primary border border-primary text-[16px] font-semibold leading-[22px] hover:bg-primary hover:text-White hover-transition">Try for Free</button>
              </div>
            </div>
            {/* second section  */}
                <img src="/img/contentDropImg.png" alt="" className="4xl:w-[628.18px] 4xl:h-[551px] 3xl:w-[647.43px] 3xl:h-[551px] 2xl:w-[356px] 2xl:h-[344px] xl:w-[356px] xl:h-[344px] lg:w-[239.75px] lg:h-[232.31px] mt-[60px] lg:mt-0 md:w-[464px] md:h-[448.36px] sm:w-[464px] sm:h-[448px] xs:w-[313px] xs:h-[302px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDrop;

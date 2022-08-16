import React from "react";

const CompanyLogo = () => {
  return (
    <div className="w-[100%] xs:mt-[40px] md:mt-[60px] xs:mb-[20px] sm:mb-[40px] md:mb-[60px] lg:mt-[80px] lg:mb-[80px]">
     <div className="container ">
      <h3 className="xs:text-[16px] sm:text-[28px] 2xl:text-[32px] 2xl:leading-[43.58px] font-bold xs:leading-[21.79px] mb-[20px] sm:mb-[40px] sm:leading-[38.13px] sm:px-12 text-center">Built for your current marketing and sales stack</h3>
        <div className="flex flex-wrap justify-center xs:gap-8 sm:gap-[41px] md:gap-[60px] lg:gap-[51px] xl:gap-[60px] 2xl:gap-[80px]">
          <img src="/img/pipedriveIcon.png" alt="" className="w-[137px] lg:w-[156px] 2xl:w-[183px] 2xl:h-[40px] h-[30px]"/>
          <img src="/img/salesIcon.png" alt="" className="w-[137px] lg:w-[148px] 2xl:w-[173px] 2xl:h-[40px] h-[30px]"/>
          <img src="/img/hubspIcon.png" alt="" className="w-[105px] lg:w-[120px] 2xl:w-[141px] 2xl:h-[40px] h-[30px]"/>
          <img src="/img/contentIcon.png" alt="" className="w-[126px] lg:-[144px] 2xl:w-[169.69px] 2xl:h-[40px] h-[30px]"/>
          <img src="/img/bridgeIcon.png" alt="" className="w-[108px] lg:w-[124px] 2xl:w-[145.44px] 2xl:h-[40px] h-[30px]"/>
        </div>
     </div>
    </div>
  );
};

export default CompanyLogo;

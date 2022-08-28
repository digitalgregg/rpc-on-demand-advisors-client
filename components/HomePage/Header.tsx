import React from 'react';
import headerImg from "../../public/assets/home-page/headerImg.svg";

const Header = () => {
    const leftIconStyle = `xs:w-[30px] sm:w-[60px] xs:h-[26.89px] sm:h-[53.79px] md:w-[92px] md:h-[82.47px] 2xl:h-[125px] 2xl:w-[140px] absolute xs:bottom-[-40px] xs:left-[10px] sm:bottom-[-75px] sm:left-[30px] md:bottom-[-80px] md:left-[20px] lg:w-[124.45px] lg:h-[111.57px] xl:bottom-[-125px] 2xl:bottom-[-140px] 2xl:left-[45px] 3xl:w-[124.45px] 3xl:h-[111.57px] 3xl:bottom-[-80px] 3xl:left-[150px] 4xl:bottom-[-80px] 4xl:left-[210px]`;

    const rightIconStyle = "xs:w-[30px] xs:h-[26.89px] sm:h-[53.79px] sm:w-[60px] md:w-[92.69px] md:h-[91.64px] 2xl:w-[140px] 2xl:h-[138.42px] absolute xs:bottom-[-40px] xs:right-[20px] sm:bottom-[-100px] sm:right-[20px] md:bottom-[-100px] md:right-[30px] lg:w-[140.12px] lg:h-[138.53px] lg:bottom-[-160px] lg:right-[30px] 2xl:right-[60px] 3xl:w-[140.12px] 3xl:h-[138.53px] 3xl:right-[130px] 3xl:bottom-[-90px] 4xl:bottom-[-90px] 4xl:right-[190px]";

    return (
      <div className="w-[100%]  bg-secondary ">
        <div className="xs:w-[375px] sm:w-[680px] xs:h-[380px] sm:h-[600px] md:w-[768px] md:h-[580px] lg:w-[1024px] lg:h-[845px] xl:w-[1200px] xl:h-[845px] 2xl:w-[1440px] 2xl:h-[845px] 3xl:w-[1680px] 3xl:h-[845px] 4xl:w-[1920px] 4xl:h-[845px]  container">
            <div className="text-[#FFFFFF] xs:w-[335px] sm:w-[600px] md:w-[668px] lg:w-[880px] xl:w-[880px] 2xl:w-[879px] 4xl:w-[880px] mx-auto xs:pt-[30px] sm:pt-[60px] lg:pt-[100px] xs:pb-[10px] sm:pb-[20px] lg:pb-[30px]">
                <h1 className="xs:leading-[33px] sm:leading-[54px] md:leading-[54.47px] lg:leading-[70px] text-center">Marketing content and sales content in one place.</h1>
            </div>
            <div className="text-[#FAFAFA] xs:w-[335px]  xs:pb-[20px] sm:pb-[30px] lg:pb-[40px] sm:w-[574px] md:w-[594px] lg:w-[620px] xl:w-[572px] 2xl:w-[508px] 4xl:w-[507px] mx-auto">
                <p className="text-center sm:!text-[16px] xl:!text-[16px] leading-[21px] md:leading-[21.79px] lg:leading-[21.79px]">No more insane drive folders. Search, find, share, and track content everywhere with our sales enablement tools.</p>
            </div>
            {/* group buttons */}
            <div className="flex flex-row gap-[30px] text-[14px] text-[#FFFFFF] justify-center relative">
                <button className="xs:w-[157px] xs:h-[44px] sm:w-[155px] sm:h-[56px] rounded-[4px] p-[11px, 32px, 11px, 32px] bg-primary border border-solid border-primary hover:bg-transparent hover:text-White hover:border-White hover-transition">Take a Tour</button>
                <button className="xs:w-[157px] xs:h-[44px] sm:w-[155px] sm:h-[56px] rounded-[4px] p-[11px, 32px, 11px, 32px] bg-[#191919] border border-[white] hover:bg-primary hover:border-primary hover-transition">Take a Tour</button>
            <img src="/img/vector.svg" alt="" className={leftIconStyle}/>

            <img src="/img/vector1.svg" alt="" className={rightIconStyle}/>
            </div>
        </div>
      </div>
    );
};

export default Header;
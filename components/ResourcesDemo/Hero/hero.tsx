import Image from "next/image";
import React from "react";
import  SalesSuccess  from "../salesSuccess/SalesSuccess";
const Hero = () => {
    return (
        <div className=" bg-[#101010] pt-[100px]">
            <div className="container mx-auto">
                <div className="flex justify-center flex-col">
                    <h1 className=" text-center text-White">
                        Sales Enablement Demo
                    </h1>
                    <p className=" max-w-[592px] mx-auto text-center pt-[30px] pb-10 text-white_primary">
                        ODA center is a streamlined, easy to use, and easy to
                        roll out sales enablement solution to help guide sales
                        and close deals faster.
                    </p>
                    <div className=" flex sm:flex-row flex-col gap-[22px] 2xl:gap-[46px] w-fit mx-auto">
                        <button className=" h-[56px] px-8 text-sm sm:text-base leading-[22px] font-semibold text-White rounded bg-primary hover:bg-transparent hover:border-White hover-transition border border-solid border-primary">
                            Try for Free
                        </button>
                        <button className=" h-[56px] px-8 text-sm sm:text-base leading-[22px] font-semibold text-White rounded border-inherit border-[1px] border-solid border-White hover-transition hover:border-primary hover:bg-primary">
                            Schedule Demo
                        </button>
                    </div>
                </div>
                <div className="md:relative mt-[40px] sm:mt-[54px] md:mt-[60px] lg:mt-[80px]">
                    <div className="md:block hidden absolute -top-24 lg:-top-28 -left-12 lg:left-0 3xl:-left-5 4xl:left-0 max-w-[50px] lg:max-w-[120px]">
                        <Image
                            width={80}
                            height={149}
                            src="/assets/resurces-demo/resources-hero-left.svg"
                            alt="icon"
                        />
                    </div>
                    <div className="md:block hidden  absolute -top-24 lg:-top-32 -right-12 lg:right-0 max-w-[50px] lg:max-w-[140px]">
                        <Image
                            width={109}
                            height={170}
                            src="/assets/resurces-demo/resources-hero-right.svg"
                            alt="icon"
                        />
                    </div>
                    <div className=" max-w-[335px] sm:max-w-[574px] md:max-w-[737.17px] lg:max-w-[] xl:max-w-[799.15px] 3xl:max-w-[1295px] mx-auto">
                        <Image
                            width={1295}
                            height={854}
                            src="/assets/resurces-demo/HeroSectinonMainBg.svg"
                            alt="bg"
                        />
                    </div>
                </div>
                <div className="mt-[40px] lg:mt-[95px]">
                    <SalesSuccess />
                </div>
            </div>
        </div>
    );
};

export default Hero;

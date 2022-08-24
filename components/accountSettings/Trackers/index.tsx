import React from "react";
import Footer from "./footer";
import Header from "./header";

const Trackers = () => {
    return (
        <div className="">
            <h4 className=" text-2xl leading-[33px] font-semibold text-black">
                About Trackers
            </h4>
            <div className=" mt-[30px] mb-[50px] w-full p-[30px] rounded-[10px] bg-White flex flex-col gap-5">
                <p className=" text-base leading-[22px] font-normal text-[#676767]">
                    {`
                        This section allows you to add HTML or Javascript to the
                    header or footer of the published collection pages, also
                    known as "sites".
                        `}
                </p>
                <p className=" text-base leading-[22px] font-normal text-[#676767]">
                    By adding HTML and Javascript you can enable additional 3rd
                    party trackers like Google Tag Manager, Google Analytics,
                    Hubspot and even add interactive features like chat directly
                    to your pages 🙌
                </p>
            </div>
            <div className=" flex flex-col md:flex-row gap-[30px]  w-full">
                <div className="h-fit max-w-[770px] md:w-[770px]">
                    <Header />
                </div>
                <div className="h-fit max-w-[770px] md:w-[770px]">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Trackers;

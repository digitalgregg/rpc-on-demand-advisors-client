import React from "react";
import { VideoControls } from "./VideoControl";

const Card = () => {
    return (
        <div>
            <div className="max-w-[377px] w-[377px] bg-White rounded p-5">
                <div className=" flex flex-col">
                    <div className=" max-w-[337px] w-[337px] h-[218px] rounded overflow-hidden">
                        <VideoControls />
                    </div>
                    <div>
                        <div className="mb-[12px] mt-5 ">
                            <span className="text-lg truncate font-semibold leading-[25px] text-[#000805]">
                                Sign up and create an account
                            </span>
                        </div>

                        <p className=" text-primary text-sm font-semibold leading-[19px]">Do it Now</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

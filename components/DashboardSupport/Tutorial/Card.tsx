import React from "react";
import { VideoControls } from "./VideoControl";

const Card = () => {
  return (
    <div>
      <div className="w-[100%] bg-White rounded p-5">
        <div className="flex flex-col">
          <div className="w-[100%] rounded overflow-hidden">
            <VideoControls />
          </div>
          <div>
            <div className="mb-[12px] mt-5 ">
              <span className="xs:text-[14px] xs:leading-[25px] lg:text-[18px] lg:leading-[19px] font-semibold text-[#000805]">
                Sign up and create an account
              </span>
            </div>
            <div className="flex">
              <img src="/img/hand-icon.svg" alt="handIcon" className="cursor-pointer"/>
              <p className="text-primary text-sm font-semibold leading-[19px] ml-[8px] cursor-pointer">
                Do it Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

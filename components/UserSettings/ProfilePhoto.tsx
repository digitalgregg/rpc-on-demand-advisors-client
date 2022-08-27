import React from "react";

const ProfilePhoto = () => {
  return (
    <div className="bg-[#FFFFFF] divide-y divide-[#DEDEDE]">
      <h2 className="font-semibold text-[16px] leading-[22px] text-[#000805] xs:px-[16.65px] sm:px-[27px] md:px-[30.9px] lg:px-[36px] xl:px-[21.25px] 2xl:px-[20px] 3xl:px-[32.5px] 4xl:px-[38.5px] py-[20.9px]">
        Profile Photo
      </h2>
      <div className="w-[100%] pt-[20.22px] pb-[20.9px] xs:px-[16.65px] sm:px-[27px] md:px-[30.9px] lg:px-[36px] xl:px-[21.25px] 2xl:px-[20px] 3xl:px-[32.5px] 4xl:px-[38.5px]">
        <div className="flex items-center">
          <img
            src="/img/profile-image.svg"
            alt="Profile Photo"
            className="lg:w-[60px] lg:h-[60px]"
          />
          <div className="ml-[10px]">
            <h3 className="font-semibold text-[16px] leading-[22px] text-[#101010] mb-[5px]">
              Profile name
            </h3>
            <h4 className="font-normal text-[12px] leading-[16px] text-primary">
              Remove
            </h4>
          </div>
        </div>
        <button className="w-[100%] h-[45.2px] border border-primary text-primary font-semibold text-[14px] mt-[20.22px] rounded-[4px]">
          Update profile photo
        </button>
      </div>
    </div>
  );
};
export default ProfilePhoto;

import React from "react";

const ProfilePhoto = () => {
  return (
    <div className="bg-[#FFFFFF] divide-y divide-[#DEDEDE]">
      <h2 className="font-semibold text-[16px] leading-[22px] text-[#000805] xs:px-[16.65px] sm:px-[27px] md:px-[30.9px] lg:px-[36px] xl:px-[21.25px] 2xl:px-[20px] 3xl:px-[32.5px] 4xl:px-[38.5px] py-[20.9px]">
        Profile Photo
      </h2>
      <div className="w-[100%] pt-[20.22px] pb-[20.9px] xs:px-[16.65px] sm:px-[27px] md:px-[30.9px] lg:px-[36px] xl:px-[21.25px] 2xl:px-[20px] 3xl:px-[32.5px] 4xl:px-[38.5px]">
        <div className="flex items-center">
          <div className="relative">
            <img
              src="/img/ellipse.svg"
              alt="Profile Photo"
              className="w-[60px] h-[60px] rounded-full "
            />
            <img src="/img/cameraIcon.svg" alt="" className="w-[24px] h-[24px] rounded-full absolute bottom-0 right-0" />
          </div>
          <div className="ml-[10px]">
            <h3 className="font-semibold text-[16px] leading-[22px] text-[#101010] mb-[5px]">
              Profile name
            </h3>
            <h4 className="font-normal text-[12px] leading-[16px] text-primary">
              Remove
            </h4>
          </div>
        </div>
        <button className="w-[100%] hover:bg-primary transition duration-700 ease-in-out hover:text-[#FFFFFF] h-[45.2px] border border-primary text-primary font-semibold text-[14px] mt-[20.22px] rounded-[4px]">
          Update profile photo
        </button>
      </div>
    </div>
  );
};
export default ProfilePhoto;

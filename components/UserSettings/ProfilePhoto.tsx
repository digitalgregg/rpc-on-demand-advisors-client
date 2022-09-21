import React, { useState } from "react";
import api from "../../api";
import { setLocal,removeLocal } from "./../../utils/localStorage";
import { useQuery } from "react-query";
import LodingAnimation from "./../Shared/LodingAnimation/index";
import { toast } from 'react-toastify';
import { useAtom } from 'jotai';
import { profile_state, signupState } from './../../state/index';

const ProfilePhoto = () => {
  const [userData] = useAtom(signupState);
  const [loading,setIsLoading] = useState(false)
  const [profileData, setProfileData] = useAtom(profile_state);

  const { data, refetch,} = useQuery("get profile", () =>
    api.get("http://localhost:8080/api/profile/list")
  );

  const handleUpdateProfile = async (e: any) => {
    setIsLoading(true)
    try {
      const fileData = e.target.files[0];
      const arrayBuffer = await fileData.arrayBuffer();
      const formData = new FormData();
      formData.append(
        "file",
        new Blob([arrayBuffer], { type: fileData.type }),
        fileData.name
      );
       await api.post(
        "http://localhost:8080/api/profile/upload",
        formData
      )
      .then((data) => {
        setIsLoading(false)
        const profileInfo = {
          originalname: data?.data?.originalname,
          key: data?.data?.key,
          location: data?.data?.location,
        };
        setLocal("profile-data", profileInfo);
        setProfileData(profileInfo)
        refetch();
      })
    } catch (err) {
      setIsLoading(false)
      console.log(err);
    }
  };
  
  const handleRemoveProfile = async() => {
    try {
       await api.delete(`http://localhost:8080/api/profile/remove/${profileData?.key}`)
      .then((data) => {
        const profileInfo = {
          originalname: "",
          key: "",
          location: "",
        };
        setProfileData(profileInfo)
        removeLocal("profile-data");
        toast.success(data?.data);
        refetch()
      })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="bg-[#FFFFFF] divide-y divide-[#DEDEDE] rounded-[4px]">
      <h2 className="font-semibold text-[16px] leading-[22px] text-[#000805] xs:px-[16.65px] sm:px-[27px] md:px-[30.9px] lg:px-[36px] xl:px-[21.25px] 2xl:px-[20px] 3xl:px-[32.5px] 4xl:px-[38.5px] py-[20.9px]">
        Profile Photo
      </h2>
      <div className="w-[100%] pt-[20.22px] pb-[20.9px] xs:px-[16.65px] sm:px-[27px] md:px-[30.9px] lg:px-[36px] xl:px-[21.25px] 2xl:px-[20px] 3xl:px-[32.5px] 4xl:px-[38.5px]">
        <div className="flex items-center">
          <div className="relative">
            {profileData?.location ? (
              <img
                src={profileData?.location}
                alt="Profile Photo"
                className="w-[60px] h-[60px] rounded-full "
              />
            ) : (
              <img
                src="/img/ellipse.svg"
                alt="Profile Photo2"
                className="w-[60px] h-[60px] rounded-full "
              />
            )}

            <img
              src="/img/cameraIcon.svg"
              alt=""
              className="w-[24px] h-[24px] rounded-full absolute bottom-0 right-0"
            />
          </div>
          <div className="ml-[10px]">
            <h3 className="font-semibold text-[16px] leading-[22px] text-[#101010] mb-[5px]">
              {userData?.name}
            </h3>
            <h4 onClick={handleRemoveProfile} className="font-normal text-[12px] leading-[16px] text-primary cursor-pointer">
              Remove
            </h4>
          </div>
        </div>
        <div className=" mt-[20.22px] rounded-[4px] w-[100%] hover:bg-primary transition duration-700 ease-in-out h-[45.2px] border border-primary">
          <label className="hover:text-[#FFFFFF] cursor-pointer text-primary transition duration-700 ease-in-out font-semibold text-[14px] w-[100%] flex justify-center items-center h-[100%]">
            <input
              type="file"
              id="upload"
              hidden
              onChange={handleUpdateProfile}
            />
            {loading ? (
              <div className="flex items-center gap-[4px]">
                <LodingAnimation color="red"/> <span className="">Loading...</span>
              </div>
            ) : (
              "Update profile photo"
            )}
          </label>
        </div>
      </div>
    </div>
  );
};
export default ProfilePhoto;

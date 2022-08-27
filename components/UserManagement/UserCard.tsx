import React, { useState } from "react";
import { userManagementData } from "../fake";
import UserManagementModel from "./UserManagementModel";

const UserManagementCard = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="w-full sm:hidden">
        <div className="flex items-center mb-[20px]">
          <h3 className="flex-1 font-semibold text-[18px] leading-[25px] text-[#101010]">
            User Management
          </h3>
          <button className="w-[132px] h-[39px] border border-[#E51937] rounded-[4px] font-normal sm:text-[14px] sm:leading-[19px] md:text-[16px] md:leading-[22px] text-[#E51937]">
            Send Invite
          </button>
        </div>
        {userManagementData.map((user) => {
          return (
            <div className="w-[100%] bg-[#FFFFFF] mb-[16px]" key={user.id}>
              <div className="px-[15px] py-[10px] w-[100%] h-[58px] mb-[20px] bg-[#222222] text-[#FFFFFF] rounded-[4px_4px_0px_0px] flex items-center">
                <img
                  src="/img/girl.svg"
                  alt="girl"
                  className="w-[38px] h-[38px]"
                />
                <h3 className="ml-[10px]">{user.name}</h3>
              </div>
              <div className="px-[15px] w-[100%]">
                <div className="flex justify-between w-[100%]">
                  <div className="mt-[6px] text-[#101010]">
                    <h4 className="font-normal text-[12px] leading-[16px] pb-[16px]">
                      Email
                    </h4>
                    <h4 className="font-normal text-[12px] leading-[16px] pb-[16px]">
                      User type
                    </h4>
                    <h4 className="font-normal text-[12px] leading-[16px]">
                      OnlineStatus
                    </h4>
                  </div>
                  <div className="text-[#101010]">
                    <p className="font-semibold text-[14px] leading-[19px] pb-[16px] truncate w-[200px]">
                      {user.email}
                    </p>
                    <p className="font-semibold text-[14px] leading-[19px] pb-[16px]">
                      {user.userType}
                    </p>
                    <p className="font-semibold text-[14px] leading-[19px] pb-[16px]">
                      {user.onlineStatus}
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-[20px] pb-[20px] mt-[20px] flex justify-between">
                <button className="w-[143px] h-[40px] rounded-[4px] bg-[#E51937] mr-[9px] cursor-pointer font-semibold text-[12px] leading-[16px] text-[#FFFFFF]">
                  Delete
                </button>
                <button
                  onClick={() => setOpenModal(true)}
                  className="w-[143px] h-[40px] rounded-[4px] border border-[#E51937] cursor-pointer text-[#E51937] font-semibold text-[12px] leading-[16px]"
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <UserManagementModel
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};
export default UserManagementCard;

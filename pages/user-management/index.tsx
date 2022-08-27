import React from "react";
import UserManagementCard from "../../components/UserManagement/UserCard";
import DashboardLayout from "./../../components/Dashboard/DashboardLayout";
import UserManagementTable from "./../../components/UserManagement/UserTable";

const UserManagement = () => {
  return (
    <DashboardLayout>
      <div className="w-[100%]  pb-[20px]">
        <div className="w-full bg-[#FFFFFF] sm:px-[10px] md:px-[20px] 2xl:px-[30px] py-[30px] hidden sm:flex sm:flex-col">
          <div className="flex items-center mb-[10px]">
            <h3 className="flex-1 font-semibold text-[18px] leading-[25px] text-[#101010]">
              User Management
            </h3>
            <button className="w-[132px] sm:h-[39px] md:h-[42px] border border-[#E51937] rounded-[4px] font-normal sm:text-[14px] sm:leading-[19px] md:text-[16px] md:leading-[22px] text-[#E51937]">
              Send Invite
            </button>
          </div>
          <UserManagementTable />
        </div>
        <UserManagementCard />
      </div>
    </DashboardLayout>
  );
};
export default UserManagement;

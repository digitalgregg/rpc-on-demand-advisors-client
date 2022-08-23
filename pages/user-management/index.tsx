import React from "react";
import UserManagementCard from "../../components/UserManagement/UserCard";
import DashboardLayout from "./../../components/Dashboard/DashboardLayout";
import UserManagementTable from "./../../components/UserManagement/UserTable";

const UserManagement = () => {
  return (
    <DashboardLayout>
      <div className="w-[100%]  pb-[20px]">
        <UserManagementTable />
        <UserManagementCard />
      </div>
    </DashboardLayout>
  );
};
export default UserManagement;

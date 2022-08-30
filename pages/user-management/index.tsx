import React from "react";
import UserManagementCard from "../../components/accountSettings/UserManagement/UserCard";
import UserManagementTable from "../../components/accountSettings/UserManagement/UserTable";
import DashboardLayout from "./../../components/Dashboard/DashboardLayout";

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

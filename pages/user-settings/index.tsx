import React, { useState } from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import AccountInfo from "../../components/UserSettings/AccountInfo";
import ChangeEmail from "../../components/UserSettings/ChangeEmail";
import ProfilePhoto from "../../components/UserSettings/ProfilePhoto";
import ChangePassword from "../../components/UserSettings/ChangePassword";
import NotificationSettings from "../../components/UserSettings/NotificationSettings";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="w-[100%] pb-[20px]">
        <h2 className="hidden lg:flex font-semibold text-[24px] leading-[33px] text-[#000805] mb-[30px]">
          User Settings
        </h2>
        <AccountInfo />
        <div className="grid xs:grid-cols-1 xl:grid-cols-2 gap-[30px] mb-[30px]">
          <ChangeEmail />
          <ProfilePhoto />
        </div>
        <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-[30px]">
          <ChangePassword />
          <NotificationSettings />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;

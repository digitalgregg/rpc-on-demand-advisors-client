import React, { useState } from "react";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import InputField from "../../components/Shared/InputField";
import ToggleButton from "../../components/Shared/ToggleButton";
import AccountInfo from "./../../components/user-settings/Account-info";
import ChangeEmail from "./../../components/user-settings/Change-email";
import ProfilePhoto from "./../../components/user-settings/Profile-photo";
import ChangePassword from "./../../components/user-settings/Change-password";
import NotificationSettings from "../../components/user-settings/Notification-settings";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="w-[100%]">
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

import React from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import AccountInfo from "../../../components/UserSettings/AccountInfo";
import ChangeEmail from "../../../components/UserSettings/ChangeEmail";
import ProfilePhoto from "../../../components/UserSettings/ProfilePhoto";
import ChangePassword from "../../../components/UserSettings/ChangePassword";
import NotificationSettings from "../../../components/UserSettings/NotificationSettings";
import GlovalTagSelect from "../../../components/GlovalTagSelect/index";
import { useragCustomStyle } from "../../../utils/reactSelectCustomSyle";
import { useQuery } from "react-query";
import { getLocal } from "./../../../utils/localStorage";
import api from "../../../api";

const labelStyle = "text-[16px] text-[#000000] font-normal leading-[21.79px]";

const Index = () => {
    const team = getLocal("team");
    const { isLoading, data, refetch } = useQuery(
        ["get tags", team.id],
        () => api.get(`/api/application-settings?team_id=${team.id}`),
        { enabled: !!team.id }
    );

    const tagData = data?.data;
    const filterData = tagData?.filter((e: any) => e?.type === "tags")[0];

    const handleOnChange = (e: any) => {
        console.log(e);
    };
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
                <div className="w-full lg:w-[70%] bg-[#FFFFFF] rounded-[4px] mt-[30px] px-[20px] pb-[20px]">
                    <h3 className="  font-semibold text-[16px] sm:text-[18px] leading-[24.51px] text-[#000000] mb-[20px] pt-[20px]">
                        Search Filter
                    </h3>
                    <GlovalTagSelect
                        mapData={filterData?.settingsItems}
                        isSecondary={true}
                        placeholder="Add Tags"
                        labelContainer="mb-[20px]"
                        labelClass={labelStyle}
                        isLabel={true}
                        customStyles={useragCustomStyle}
                        handleChange={handleOnChange}
                        name="update tag"
                    />
                    <button className="w-[96px] h-[45px] rounded-[4px] border border-primary text-primary hover:bg-primary hover:text-[#FFFFFF] text-[14px] font-semibold mt-[20px] cursor-pointer  transition duration-700 ease-in-out">
                        Clear
                    </button>
                </div>
                <div className="pt-[140px]"></div>
            </div>
        </DashboardLayout>
    );
};

export default Index;

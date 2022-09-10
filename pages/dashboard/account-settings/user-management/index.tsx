import React from "react";
import { Layout } from "../../../../components/accountSettings/Layout";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import HeaderButton from "../../../../components/accountSettings/UserManagement/HeaderButton";
import ManagementTable from "../../../../components/accountSettings/UserManagement/ManagementTable";
import Pagination from "../../../../components/Shared/Pagination";
import { useQuery } from "react-query";
import {
    fetchInviteUsers,
    fetchTeamUsers,
    UserManageQuery,
} from "../../../../api-call/UserManageApi";
import { useAtom } from "jotai";
import { team_state } from "../../../../state/index";

const UserManagementPage = () => {
    const [teamData] = useAtom(team_state);

    const { data, isSuccess, isLoading } = UserManageQuery(teamData.id);

    return (
        <DashboardLayout>
            <Layout>
                <div className="w-full sm:bg-[#FFFFFF] sm:px-[10px] md:px-[20px] 2xl:px-[30px] py-[30px] mb-[30px] sm:flex sm:flex-col">
                    <HeaderButton />
                    <ManagementTable
                        userData={data}
                        isSuccess={isSuccess}
                        isLoading={isLoading}
                    />
                </div>
            </Layout>
        </DashboardLayout>
    );
};

export default UserManagementPage;

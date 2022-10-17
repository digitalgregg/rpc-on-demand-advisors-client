import React from "react";
import { Layout } from "../../../../components/accountSettings/Layout";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import HeaderButton from "../../../../components/accountSettings/UserManagement/HeaderButton";
import ManagementTable from "../../../../components/accountSettings/UserManagement/ManagementTable";
import Pagination from "../../../../components/Shared/Pagination";
import { useQuery } from "react-query";
import { fetchInviteUsers } from "../../../../api-call/UserManageApi";
import { useAtom } from "jotai";
import { team_state } from "../../../../state/index";
import UserManageProvider from "../../../../components/Context/UserManageProvider";
import { useState } from "react";
import { UserManageType } from "../../../../components/Context/UserManageProvider";
import Meta from "../../../../components/Meta";

const UserManagementPage = () => {
    const [teamData] = useAtom(team_state);

    const { data, isSuccess, isLoading, refetch } = useQuery(
        "fetch-invite-user",
        () => fetchInviteUsers(teamData.id, teamData.user_id),
        {
            select: (response) => {
                return response.data;
            },
            retry(failureCount, error: any) {
                if (error.response.data.success === false) {
                    return false;
                } else {
                    return true;
                }
            },
            isDataEqual: (oldData, newData) => {
                console.log(oldData, newData);
                return false;
            },
            useErrorBoundary: (error, query) => {
                console.log(query);
                return false;
            },
        }
    );

    return (
        <DashboardLayout>
            <Meta title="User Management | Account Settings" />

            <Layout>
                <UserManageProvider data={data} refetch={refetch}>
                    <div className="w-full sm:bg-[#FFFFFF] sm:px-[10px] md:px-[20px] 2xl:px-[30px] py-[30px] mb-[30px] sm:flex sm:flex-col">
                        <HeaderButton />
                        <ManagementTable
                            userData={data}
                            isSuccess={isSuccess}
                            refetch={refetch}
                            isLoading={isLoading}
                        />
                    </div>
                </UserManageProvider>
            </Layout>
        </DashboardLayout>
    );
};

export default UserManagementPage;

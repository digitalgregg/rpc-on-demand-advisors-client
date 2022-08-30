import React from "react";
import { Layout } from "../../../../components/accountSettings/Layout";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";

import UserManagementCard from "../../../../components/accountSettings/UserManagement/UserCard";
import UserManagementTable from "../../../../components/accountSettings/UserManagement/UserTable";

const index = () => {
    return (
        <DashboardLayout>
            <Layout>
                <div className="w-[100%]  pb-[20px]">
                    <UserManagementTable />
                    <UserManagementCard />
                </div>
            </Layout>
        </DashboardLayout>
    );
};

export default index;

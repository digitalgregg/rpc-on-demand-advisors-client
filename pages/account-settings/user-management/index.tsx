import React from "react";
import { Layout } from "../../../components/accountSettings/Layout";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import UserManagementTable from "../../../components/accountSettings/UserManagement/UserTable";
const index = () => {
    return (
        <DashboardLayout>
            <Layout>
                <UserManagementTable />
            </Layout>
        </DashboardLayout>
    );
};

export default index;

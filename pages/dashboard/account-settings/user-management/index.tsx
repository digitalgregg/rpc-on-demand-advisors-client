import React from "react";
import { Layout } from "../../../../components/accountSettings/Layout";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import HeaderButton from "../../../../components/accountSettings/UserManagement/HeaderButton";
import ManagementTable from "../../../../components/accountSettings/UserManagement/ManagementTable";
import Pagination from "../../../../components/Shared/Pagination";

const index = () => {
    return (
        <DashboardLayout>
            <Layout>
                <div className="w-full sm:bg-[#FFFFFF] sm:px-[10px] md:px-[20px] 2xl:px-[30px] py-[30px] sm:flex sm:flex-col">
                    <HeaderButton />
                    <ManagementTable />
                </div>
            </Layout>
        </DashboardLayout>
    );
};

export default index;

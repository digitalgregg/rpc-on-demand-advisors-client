import React from "react";
import { Layout } from "../../../components/accountSettings/Layout";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import ComponentTrackers from "../../../components/accountSettings/Trackers";
const index = () => {
    return (
        <DashboardLayout>
            <Layout>
                <ComponentTrackers />
            </Layout>
        </DashboardLayout>
    );
};

export default index;

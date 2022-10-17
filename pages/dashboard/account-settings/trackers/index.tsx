import React from "react";
import { Layout } from "../../../../components/accountSettings/Layout";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import ComponentTrackers from "../../../../components/accountSettings/Trackers";
import Meta from "../../../../components/Meta";
const index = () => {
    return (
        <DashboardLayout>
            <Meta title="Trackers | Account Settings" />

            <Layout>
                <ComponentTrackers />
            </Layout>
        </DashboardLayout>
    );
};

export default index;

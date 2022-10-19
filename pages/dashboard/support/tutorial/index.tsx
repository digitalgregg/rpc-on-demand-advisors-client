import React from "react";
import { Layout } from "../../../../components/DashboardSupport/Layout";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import ComponentTutorial from "../../../../components/DashboardSupport/Tutorial";
import Meta from "../../../../components/Meta";
const Tutorial = () => {
    return (
        <DashboardLayout>
            <Meta title="Tutorial | Support" />
            <Layout>
                <ComponentTutorial />
            </Layout>
        </DashboardLayout>
    );
};

export default Tutorial;

import React from "react";
import { Layout } from "../../../../components/DashboardSupport/Layout";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import ComponentTutorial from "../../../../components/DashboardSupport/Tutorial";
const Tutorial = () => {
    return (
        <DashboardLayout>
            <Layout>
                <ComponentTutorial />
            </Layout>
        </DashboardLayout>
    );
};

export default Tutorial;

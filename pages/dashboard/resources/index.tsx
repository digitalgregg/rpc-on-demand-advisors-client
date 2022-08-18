import React from "react";
import { Layout } from "../../../components/DashboardSupport/Layout";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import ComponentResources from "../../../components/DashboardSupport/Resources";
const Resources = () => {
    return (
        <DashboardLayout>
            <Layout>
                <ComponentResources />
            </Layout>
        </DashboardLayout>
    );
};

export default Resources;

import React from "react";
import { Layout } from "../../../../components/DashboardSupport/Layout";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import ComponentResources from "../../../../components/DashboardSupport/Resources";
import Meta from "../../../../components/Meta";
const Resources = () => {
    return (
        <DashboardLayout>
            <Meta title="Resources | Support" />
            <Layout>
                <ComponentResources />
            </Layout>
        </DashboardLayout>
    );
};

export default Resources;

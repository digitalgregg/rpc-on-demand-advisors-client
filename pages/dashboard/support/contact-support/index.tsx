import React from "react";
import { Layout } from "../../../../components/DashboardSupport/Layout";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import ComponentContactSupport from "../../../../components/DashboardSupport/ContactSupport";
import Meta from "../../../../components/Meta";
const ContactSupport = () => {
    return (
        <DashboardLayout>
            <Meta title="Contact Support | Support" />
            <Layout>
                <ComponentContactSupport />
            </Layout>
        </DashboardLayout>
    );
};

export default ContactSupport;

import React from "react";
import { Layout } from "../../../../components/DashboardSupport/Layout";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import ComponentContactSupport from "../../../../components/DashboardSupport/ContactSupport"
const ContactSupport = () => {
    return (
        <DashboardLayout>
            <Layout>
                <ComponentContactSupport/>
            </Layout>
        </DashboardLayout>
    );
};

export default ContactSupport;

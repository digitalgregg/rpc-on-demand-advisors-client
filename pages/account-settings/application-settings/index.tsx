import React from "react";
import { Layout } from "../../../components/accountSettings/Layout";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import ComponentApplicationSettings from "../../../components/accountSettings/ApplicationSettings";
const ApplicationSettings = () => {
    return (
        <DashboardLayout>
            <Layout>
                <ComponentApplicationSettings />
            </Layout>
        </DashboardLayout>
    );
};

export default ApplicationSettings;

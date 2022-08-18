import React from "react";
import { Layout } from "../../../components/DashboardSupport/Layout";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import ComponentHowto from "../../../components/DashboardSupport/howto";
const Howto = () => {
    return (
        <DashboardLayout>
            <Layout>
                <ComponentHowto />
            </Layout>
        </DashboardLayout>
    );
};

export default Howto;

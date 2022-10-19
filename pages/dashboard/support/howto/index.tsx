import React from "react";
import { Layout } from "../../../../components/DashboardSupport/Layout";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import ComponentHowto from "../../../../components/DashboardSupport/howto";
import Meta from "../../../../components/Meta";
const Howto = () => {
    return (
        <DashboardLayout>
            <Meta title="Howto | Support" />
            <Layout>
                <ComponentHowto />
            </Layout>
        </DashboardLayout>
    );
};

export default Howto;

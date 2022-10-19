import React, { useEffect, useState } from "react";
import { Layout } from "../../../components/DashboardSupport/Layout";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import ComponentSupport from "../../../components/DashboardSupport/Support";
import Meta from "../../../components/Meta";
const Support = () => {
    return (
        <DashboardLayout>
            <Meta title="Support" />
            <Layout>
                <ComponentSupport />
            </Layout>
        </DashboardLayout>
    );
};

export default Support;

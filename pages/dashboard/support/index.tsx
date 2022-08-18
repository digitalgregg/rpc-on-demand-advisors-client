import React, { useEffect, useState } from "react";
import { Layout } from "../../../components/DashboardSupport/Layout";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import ComponentSupport from "../../../components/DashboardSupport/Support";
const Support = () => {
    return (
        <DashboardLayout>
            <Layout>
                <ComponentSupport />
            </Layout>
        </DashboardLayout>
    );
};

export default Support;

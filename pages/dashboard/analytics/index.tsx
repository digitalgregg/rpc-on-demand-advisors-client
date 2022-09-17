import dynamic from "next/dynamic";
import React from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import Analytic from "../../../components/analytics";

function Analytics() {
    return (
        <DashboardLayout>
            <Analytic />
        </DashboardLayout>
    );
}

export default Analytics;

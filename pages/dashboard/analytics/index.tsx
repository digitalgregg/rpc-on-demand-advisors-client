import React from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import AnalyticsComponent from "../../../components/analytics";
import AnalyticsProvider from "../../../components/Context/AnalyticsProvider";

function Analytics() {
    return (
        <DashboardLayout>
            <AnalyticsProvider>
                <AnalyticsComponent />
            </AnalyticsProvider>
        </DashboardLayout>
    );
}

export default Analytics;

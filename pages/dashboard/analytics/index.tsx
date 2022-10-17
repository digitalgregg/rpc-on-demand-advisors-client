import React from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import AnalyticsComponent from "../../../components/analytics";
import AnalyticsProvider from "../../../components/Context/AnalyticsProvider";
import { useAtom } from "jotai";
import { UserPlanState } from "../../../state";
import UpgradePlan from "../../../components/UpgradePlan";
import Meta from "../../../components/Meta";

function Analytics() {
    const [planValidate] = useAtom(UserPlanState);

    return (
        <DashboardLayout>
            <Meta title="Analytics | Dashboard" />
            <AnalyticsProvider>
                {planValidate.analytics ? (
                    <UpgradePlan topic="Analytics" />
                ) : (
                    <AnalyticsComponent />
                )}
            </AnalyticsProvider>
        </DashboardLayout>
    );
}

export default Analytics;

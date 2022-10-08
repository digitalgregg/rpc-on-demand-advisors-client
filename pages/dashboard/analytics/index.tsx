import React from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import AnalyticsComponent from "../../../components/analytics";
import AnalyticsProvider from "../../../components/Context/AnalyticsProvider";
import { getLocal } from "../../../utils/localStorage";
import { useQuery } from "react-query";
import api from "../../../api";
import UpgratePlan from "../../../components/UpgratePlan";

function Analytics() {
    const { _id } = getLocal("user-info");
    const { isLoading: billLoading, data: billingInfo } = useQuery(
        ["check-plans", _id],
        () => api.get(`/api/billing-record/${_id}`),
        { enabled: !!_id }
    );
    const currentPlan = billingInfo?.data[0];
    return (
        <DashboardLayout>
            <AnalyticsProvider>
                {billingInfo?.data?.length !== 0 &&
                currentPlan?.plan_name !== "Lite" ? (
                    <AnalyticsComponent />
                ) : (
                    <UpgratePlan topic="Analytics" />
                )}
            </AnalyticsProvider>
        </DashboardLayout>
    );
}

export default Analytics;

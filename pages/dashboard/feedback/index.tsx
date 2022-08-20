import React from "react";
import { Layout } from "../../../components/DashboardSupport/Layout";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import ComponentFeedback from "../../../components/DashboardSupport/Feedback";
const Feedback = () => {
    return (
        <DashboardLayout>
            <Layout>
                <ComponentFeedback />
            </Layout>
        </DashboardLayout>
    );
};

export default Feedback;

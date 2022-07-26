import React from "react";
import Layout from "./../components/Shared/Layout/Layout";
import ScheduleDemoComponent from "../components/Shared/ScheduleDemo";

const ScheduleDemo = () => {
    return (
        <div className="bg-[#F8F8F8]">
            <Layout>
                <ScheduleDemoComponent />
            </Layout>
        </div>
    );
};

export default ScheduleDemo;

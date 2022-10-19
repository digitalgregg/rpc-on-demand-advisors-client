import React from "react";
import Meta from "../../components/Meta";
import ScheduleDemoComponent from "../../components/Shared/ScheduleDemo";
import Layout from "./../../components/Shared/Layout/Layout";

const ScheduleDemo = () => {
    return (
        <div className="bg-[#F8F8F8]">
            <Meta title="Schedule Demo" />
            <Layout>
                <ScheduleDemoComponent />
            </Layout>
        </div>
    );
};

export default ScheduleDemo;

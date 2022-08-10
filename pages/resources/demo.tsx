import React from "react";
import Layout from "../../components/Shared/Layout/Layout";
import {
    Hero,
    IncreaseSffectiveness,
    SalesSuccess,
    FaqAns,
} from "../../components/ResourcesDemo";
const demo = () => {
    return (
        <Layout>
            <Hero />
            <SalesSuccess />
            <FaqAns />
            <IncreaseSffectiveness />
        </Layout>
    );
};

export default demo;

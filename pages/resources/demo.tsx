import React from "react";
import Layout from "../../components/Shared/Layout/Layout";
import {
    Hero,
    IncreaseSffectiveness,
    FaqAns,
} from "../../components/ResourcesDemo";
const demo = () => {
    return (
        <Layout>
            <Hero />
            <FaqAns />
            <IncreaseSffectiveness />
        </Layout>
    );
};

export default demo;

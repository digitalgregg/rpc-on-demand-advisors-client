import { Form, Formik } from "formik";
import React from "react";
import { createContext } from "vm";
import InputField from "../../Shared/InputField";
import BottomSettings from "./BottomSettings";
import ContentTypes from "./ContentTypes/ContentTypes";
import FunnelStage from "./FunnelStage/FunnelStage";
import Industry from "./Industry/Industry";
import Product from "./Product/Product";
import Region from "./Region/Region";
import Tag from "./Tag/Tag";

const ApplicationSettings = () => {
    return (
        <div className=" flex flex-col gap-[30px]  w-full">
            <div className=" flex flex-col md:flex-row gap-[30px]  w-full">
                <FunnelStage />
                <ContentTypes />
            </div>
            <div className=" flex flex-col md:flex-row gap-[30px]  w-full">
                <Product />
                <Industry />
            </div>
            <div className=" flex flex-col md:flex-row gap-[30px]  w-full">
                <Tag />
                <Region />
            </div>
            <BottomSettings />
        </div>
    );
};

export default ApplicationSettings;

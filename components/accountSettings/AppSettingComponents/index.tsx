import React from "react";
import AddStageBtn from "./AddStageBtn";
import BlackCard from "./BlackCard";
import CardWithToggle from "./CardWithToggle";
import { GetSettingsContext } from "../../Context/SettingsDataProvider";
import { getSettingsByType } from "../../../api-call/AppSettingsApi";
import SettingItem from "./SettingItem";
import CreateSetting from "./CreateSetting";
import { useState } from "react";
import BottomSettings from "./BottomSettings";
import SettingsComponent from "./SettingsComponent";

const divClassName =
    "[-webkit-column-count:1] [-moz-column-count:1] [column-count:1] [-webkit-column-width:100%] [-moz-column-width:100%] [column-width:100%] lg:[-webkit-column-count:2] lg:[-moz-column-count:2] lg:[column-count:2] lg:[-webkit-column-width:calc(100%/2)] lg:[-moz-column-width:calc(100%/2)] lg:[column-width:calc((100%/2))] [-webkit-column-gap:30px] [column-gap:30px] ";

// @image-gallery className="[-webkit-column-count:2] [-moz-column-count:2] [column-count:2] [-webkit-column-width:50%] [-moz-column-width:50%] [column-width:50%] md:[-webkit-column-count:3] md:[-moz-column-count:3] md:[column-count:3] md:[-webkit-column-width:calc(100%/3)] md:[-moz-column-width:calc(100%/3)] md:[column-width:calc(100%/3)] "

function AppSettingComponents() {
    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-5 sm:gap-[30px]">
                <BlackCard header="Funnel Stage">
                    <SettingsComponent type="funnel" />
                </BlackCard>
                <BlackCard header="Content Type">
                    <SettingsComponent type="content" />
                </BlackCard>
            </div>
            <div className="pt-5 sm:pt-[30px]"></div>
            <div className="flex flex-col lg:flex-row gap-5 sm:gap-[30px]">
                <CardWithToggle header="Product">
                    <SettingsComponent type="product" />
                </CardWithToggle>
                <CardWithToggle header="Industry">
                    <SettingsComponent type="industry" />
                </CardWithToggle>
            </div>
            <div className="pt-5 sm:pt-[30px]"></div>

            <div className="flex flex-col lg:flex-row gap-5 sm:gap-[30px]">
                <CardWithToggle header="Tag">
                    <SettingsComponent type="tags" />
                </CardWithToggle>
                <CardWithToggle header="Region">
                    <SettingsComponent type="region" />
                </CardWithToggle>
            </div>
            <div className="pt-5 sm:pt-[30px]"></div>

            <div>
                <BottomSettings />
            </div>
        </div>
    );
}

export default AppSettingComponents;

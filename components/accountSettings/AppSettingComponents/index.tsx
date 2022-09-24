import React from "react";
import BlackCard from "./BlackCard";
import CardWithToggle from "./CardWithToggle";
import SettingsComponent from "./SettingsComponent";

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

            <div>{/* <BottomSettings /> */}</div>
        </div>
    );
}

export default AppSettingComponents;

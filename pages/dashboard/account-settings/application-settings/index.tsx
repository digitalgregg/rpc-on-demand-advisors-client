import React from "react";
import { Layout } from "../../../../components/accountSettings/Layout";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import SettingsDataProvider from "../../../../components/Context/SettingsDataProvider";
import { useQuery } from "react-query";
import { useAtom } from "jotai";
import { team_state } from "../../../../state";
import { fetchAppSettings } from "../../../../api-call/AppSettingsApi";
import AppSettingComponents from "../../../../components/accountSettings/AppSettingComponents";
import ComponentApplicationSettings from "../../../../components/accountSettings/ApplicationSettings";
import Meta from "../../../../components/Meta";
const ApplicationSettings = () => {
    const [teamData] = useAtom(team_state);

    const { data, refetch, isLoading, isSuccess, isError } = useQuery(
        "application-settings-query",
        () => fetchAppSettings(teamData.id),
        {
            select: (response) => response.data,
            retry(failureCount, error: any) {
                if (
                    error?.response?.data?.message ===
                    "Application Settings not found"
                ) {
                    return false;
                } else {
                    return true;
                }
            },
        }
    );

    return (
        <DashboardLayout>
            <Layout>
                <Meta title="Application Settings | Account Settings" />
                <SettingsDataProvider
                    status={{ isLoading, isSuccess, isError }}
                    settingsData={data}
                    refetch={refetch}
                >
                    <AppSettingComponents />
                </SettingsDataProvider>
            </Layout>
        </DashboardLayout>
    );
};

export default ApplicationSettings;

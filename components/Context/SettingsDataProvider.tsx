import { createContext, useContext } from "react";
import { ReactNode } from "react";
import { SettingResponse } from "../../api-call/AppSettingsApi";

type SettingsType = {
    settingsData: SettingResponse[];
    status: StatusType;
    refetch: () => any;
};

const SettingsContext = createContext<SettingsType | null>(null);

export const GetSettingsContext = () =>
    useContext(SettingsContext) as SettingsType;

type DataProvider = {
    children: ReactNode;
    settingsData: any;
    status: StatusType;
    refetch: () => any;
};

type StatusType = {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
};

function SettingsDataProvider({
    status,
    children,
    settingsData,
    refetch,
}: DataProvider) {
    return (
        <SettingsContext.Provider value={{ settingsData, refetch, status }}>
            {children}
        </SettingsContext.Provider>
    );
}

export default SettingsDataProvider;

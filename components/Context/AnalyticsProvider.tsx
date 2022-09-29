import React, { createContext, ReactNode, useContext } from "react";

type AnalyticsType = {
    data: any;
    refetch?: () => any;
    children?: ReactNode;
};

const AnalyticsContext = createContext<AnalyticsType | null>(null);

export const GetAnalyticsContext = () =>
    useContext(AnalyticsContext) as AnalyticsType;

function AnalyticsProvider({ data, children }: AnalyticsType) {
    return (
        <AnalyticsContext.Provider value={{ data }}>
            {children}
        </AnalyticsContext.Provider>
    );
}

export default AnalyticsProvider;

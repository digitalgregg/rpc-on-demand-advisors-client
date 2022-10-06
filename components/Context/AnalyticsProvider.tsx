import { useAtom } from "jotai";
import React, {
    createContext,
    ReactNode,
    useContext,
    useReducer,
    useState,
} from "react";

import { useFetchAnalytics } from "../../api-call/AnalyticsApi";
import { team_state } from "../../state";
import {
    exampleAnalyticsContentDetails,
    exampleAnalyticsData,
} from "../../utils/ExampleData";

type AnalyticsType = {
    data: any;
    dateRange: [Date, Date];
    setDateRange: React.Dispatch<React.SetStateAction<[Date, Date]>>;
    isError: boolean;
    userDateRange: [Date, Date];
    setUserDateRange: React.Dispatch<React.SetStateAction<[Date, Date]>>;
    isSuccess: boolean;
    isLoading: boolean;
    contentDetails: InitialDetailsType;
    dispatchDetails: React.Dispatch<DetailsActionType>;
};

export type InitialDetailsType = {
    title: string;
    funnel_stage: any[];
    content_type: any[];
};

const initialDetails: InitialDetailsType = {
    title: "",
    funnel_stage: [],
    content_type: [],
};

type DetailsActionType = {
    type: "funnel_stage" | "content_type" | "title";
    value: any[] | string;
};

const contentAction = (
    state: InitialDetailsType,
    action: DetailsActionType
) => {
    const { type, value } = action;
    return { ...state, [type]: value };
};

const AnalyticsContext = createContext<AnalyticsType | null>(null);

export const GetAnalyticsContext = () =>
    useContext(AnalyticsContext) as AnalyticsType;

function AnalyticsProvider({ children }: { children: ReactNode }) {
    const [teamData] = useAtom(team_state);

    const prevDate = new Date();
    prevDate.setDate(prevDate.getDate() - 30);

    const [dateRange, setDateRange] = useState<[Date, Date]>([
        prevDate,
        new Date(),
    ]);

    const [userDateRange, setUserDateRange] = useState<[Date, Date]>([
        prevDate,
        new Date(),
    ]);

    const { data, isLoading, isError, isSuccess } = useFetchAnalytics(
        teamData.id
    );

    const [contentDetails, dispatchDetails] = useReducer(
        contentAction,
        initialDetails
    );
    console.log(data, contentDetails);
    return (
        <AnalyticsContext.Provider
            value={{
                data: exampleAnalyticsData,
                dateRange,
                setDateRange,
                isError,
                isSuccess,
                userDateRange,
                setUserDateRange,
                isLoading,
                contentDetails: exampleAnalyticsContentDetails,
                dispatchDetails,
            }}
        >
            {children}
        </AnalyticsContext.Provider>
    );
}

export default AnalyticsProvider;

import { useQuery } from "react-query";
import api from "../api";
import { ContentDataType } from "./ContentApi";

export const useFetchAnalytics = (team_id: string) => {
    return useQuery(
        ["fetch-analytics"],
        () => api.get("/api/analytics/" + team_id),
        {
            select: (res) => res.data,
        }
    );
};

type TeamUsersType = {
    _id: string;
    team_id: string;
    user_id: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
};

export type AnalyticsDataType = {
    contents: ContentDataType[];
    users: TeamUsersType[];
};

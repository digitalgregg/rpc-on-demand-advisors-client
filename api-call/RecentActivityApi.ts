import api from "../api";

type CreateActivityType = {
    user_id: string;
    team_id: string;
    status_type: "added" | "updated" | "removed";
    activity_id: string;
    activity_type: "wish" | "contents" | "collections";
    action_status: string;
    title: string;
    views?: boolean;
};

export const createActivity = async (data: CreateActivityType) => {
    return await api.post("/api/recent-activity", data);
};

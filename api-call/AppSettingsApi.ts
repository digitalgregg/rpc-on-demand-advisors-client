import { toast } from "react-toastify";
import api from "../api";

export const fetchAppSettings = async (team_id: string) => {
    return await api.get("/api/application-settings?team_id=" + team_id);
};

export const createAppSetting = async (apiObj: CreateContentType) => {
    try {
        await api.post("/api/application-settings", apiObj);
        toast.success("Application Setting created successfully");
    } catch (err: any) {
        console.log(err);
        toast.error(err?.response.data.message);
    }
};
export const deleteAppSetting = async (id: string) => {
    try {
        await api.delete("/api/application-settings/" + id);
        toast.success("Setting deleted successfully");
    } catch (err: any) {
        console.log(err);
        toast.error(err?.response.data.message);
    }
};
export const updateAppSetting = async (item_id: string, apiObj: object) => {
    try {
        await api.put("/api/application-settings/" + item_id, apiObj);
        toast.success("Setting updated successfully");
    } catch (err: any) {
        console.log(err);
        toast.error(err?.response.data.message);
    }
};

export type CreateContentType = {
    title: string;
    description?: string;
    color?: string;
    index: number;
    team_id: string;
    type: string;
};

export type SettingsItem = {
    _id: string;
    title: string;
    __v: number;
    description?: string;
    color?: string;
};

export interface SettingResponse {
    _id: string;
    team_id: string;
    type: string;
    settingsItems: SettingsItem[];
    __v: number;
}

export function getSettingsByType(
    type: "funnel" | "content" | "tags" | "product" | "industry" | "region",
    data: SettingResponse[]
): SettingResponse | undefined {
    return data ? data.find((v) => v.type === type) : undefined;
}

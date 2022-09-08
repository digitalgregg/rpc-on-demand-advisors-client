import api from "../api";
import { AxiosResponse } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchBranding = async (team_id: string) => {
    return await api.get(BASE_URL + "/api/branding/" + team_id);
};

export const updateBranding = (data: ReducerBranding, team_id: string) => {
    let updateData = { ...data, team_id };

    const favicon = URL.revokeObjectURL;
    console.log(favicon);
};

export type BrandingType = {
    _id: string;
    team_id: string;
    favicon?: string;
    accent_color?: string;
    branding_logo?: string;
    site_title?: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
};

export const DefaultBranding = {
    favicon: "",
    accent_color: "#0D7BEA",
    branding_logo: "",
    site_title: "",
};

export type ReducerBranding = {
    favicon: string;
    accent_color: string;
    branding_logo: string;
    site_title: string;
};

type ActionType = {
    field: "favicon" | "accent_color" | "branding_logo" | "site_title";
    value: string;
};

export function brandingReducer(state: ReducerBranding, action: ActionType) {
    const { field, value } = action;
    switch (field) {
        case "accent_color":
            return {
                ...state,
                accent_color: value,
            };
        case "site_title":
            return {
                ...state,
                site_title: value,
            };

        case "favicon":
            return {
                ...state,
                favicon: value,
            };

        case "branding_logo":
            return {
                ...state,
                branding_logo: value,
            };

        default:
            return state;
    }
}

export function responseToObject(res: AxiosResponse) {
    return {
        favicon: res.data.favicon,
        accent_color: res.data.accent_color,
        branding_logo: res.data.branding_logo,
        site_title: res.data.site_title,
    };
}

export async function fileToLink(file: File) {
    const arrayBuffer = await file.arrayBuffer();
    const formData = new FormData();
    formData.append(
        "file",
        new Blob([arrayBuffer], { type: file.type }),
        file.name
    );
    const res = await api.post("/api/content/thumbnail/upload", formData);
    return res.data;
}

export async function createBranding(team_id: string) {
    return await api.post("/api/branding", {
        team_id,
        accent_color: "#0D7BEA",
    });
}

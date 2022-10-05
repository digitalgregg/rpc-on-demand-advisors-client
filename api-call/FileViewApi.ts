import api from "../api";

export const fetchFile = async (url: string) => {
    return await api.get("api/content/short-url/" + url);
};

export const fetchSharedFile = async (url: string) => {
    return await api.get("api/content/sharing/" + url);
};

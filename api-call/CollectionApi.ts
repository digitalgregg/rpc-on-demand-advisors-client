import api from "../api";

export const fetchMyCollections = async (user_id: string) => {
    return await api.get(
        "/api/collection?user_id=" + user_id + "&" + "shareWith=no"
    );
};

export const fetchSharedCollections = async (
    user_id: string,
    team_id: string
) => {
    return await api.get(
        "/api/collection/shared-collections?team_id=" +
            team_id +
            "&user_id=" +
            user_id
    );
};

export const deleteCollection = async (id: string) => {
    return await api.delete("/api/collection/" + id);
};

export const getCollection = async (id: string) => {
    return await api.get("/api/collection/" + id);
};

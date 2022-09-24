import api from "../api";

export const fetchImportHistory = async (team_id: string) => {
    return await api.get("/api/importcsv/" + team_id);
};

export const deleteImportHistory = async (id: string) => {
    return await api.put("/api/importcsv/recycle/" + id);
};

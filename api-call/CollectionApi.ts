import api from "../api";
import { toast } from "react-toastify";

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

export const pushContent = async (
    collection_id: string,
    content_id: string
) => {
    return await api.put("/api/collection/content/" + collection_id, {
        content_id,
    });
};

export const pullContent = async (
    collection_id: string,
    content_id: string
) => {
    return await api.delete("/api/collection/content/" + collection_id, {
        data: { content_id },
    });
};

export const removeAllContent = async (id: string) => {
    return await api.put("/api/collection/content/remove-all/" + id);
};

export const selectAllContent = async (id: string, contents: string[]) => {
    return await api.put("/api/collection/content/select-all/" + id, {
        contents,
    });
};

export const updateCollection = async (id: string, obj: object) => {
    try {
        await api.put("/api/collection/" + id, obj);
        toast.success("Collection updated successfully");
    } catch (error) {
        console.log(error);
    }
};

export const publishCollection = async (obj: object) => {
    return await api.post("/api/collection/publish", obj);
};

export const unPublishCollection = async (id: string) => {
    try {
        await api.delete("/api/collection/publish/" + id);
        toast.success("Collection unpublished successfully");
    } catch (error) {
        console.log(error);
    }
};

export const getContentsCollection = async (id: string) => {
    return await api.get("/api/collection/contents-collection/" + id);
};

import api from "../api/index";
import { toast } from "react-toastify";
import { useQuery } from "react-query";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export type CreateContentType = {
    team_id: string;
    user_id: string;
    title: string;
    thumbnail: string;
    additional_info: {
        file_type: string;
        file_name: string;
        file_size: string;
    };
    file_url: string;
    aws_key: string;
};

export type ReplaceContentFile = {
    thumbnail: string;
    additional_info: {
        file_type: string;
        file_name: string;
        file_size: string;
    };
    file_url: string;
    aws_key: string;
};

export async function getContent(id: string) {
    const res = await fetch(`${BASE_URL}/api/content/${id}`);
    return res.json();
}

export async function createContent(contentData: CreateContentType) {
    try {
        await api.post(BASE_URL + "/api/content", contentData);
        toast.success("Content created successfully");
    } catch (err: any) {
        console.log(err);
        toast.error(err?.response.data.message);
    }
}

export async function updateContent(
    fileData: ReplaceContentFile,
    content_id: string
) {
    try {
        await api.put(BASE_URL + "/api/content/" + content_id, fileData);
        toast.success("Content updated successfully");
    } catch (err: any) {
        console.log(err);
        toast.error(err?.response.data.message);
    }
}

export function updateFileObj(response: any) {
    const { size, key, location, mimetype, originalname } = response.body;
    return {
        thumbnail: location,
        additional_info: {
            file_type: mimetype,
            file_name: originalname,
            file_size: size,
        },
        file_url: location,
        aws_key: key,
    };
}

export async function deleteContent(content_id: string) {
    try {
        await api.delete(BASE_URL + "/api/content/" + content_id);
    } catch (err: any) {
        console.log(err);
        toast.error(err?.response.data.message);
    }
}

export async function likeFavoriteApi(
    user_id: string,
    content_id: string,
    type: "likes" | "favorites",
    isValue: boolean
) {
    try {
        if (isValue) {
            await api.delete("/api/content/pull/" + content_id, {
                data: {
                    [type]: user_id,
                },
            });
        } else {
            await api.put("/api/content/put/" + content_id, {
                [type]: user_id,
            });
        }
    } catch (error) {
        console.log(error);
    }
}

export function responseToObject(
    response: any,
    teamData: any
): CreateContentType {
    const { size, key, location, mimetype, originalname } = response.body;
    return {
        team_id: teamData.id,
        user_id: teamData.user_id,
        thumbnail: location,
        title: originalname,
        additional_info: {
            file_type: mimetype,
            file_name: originalname,
            file_size: size,
        },
        file_url: location,
        aws_key: key,
    };
}

type ContentQueryType = {
    id?: string;
    user_id?: string;
    team_id?: string;
};

export async function fetchContents({
    id,
    user_id,
    team_id,
}: ContentQueryType) {
    const url = new URL("/api/content", BASE_URL);
    id && url.searchParams.append("_id", id);
    user_id && url.searchParams.append("user_id", user_id);
    team_id && url.searchParams.append("team_id", team_id);

    return await api.get(url.toString());
}

interface AdditionalInfo {
    file_type: string;
    file_name: string;
    file_size: number;
}

export interface ContentDataType {
    _id: string;
    user_id: string;
    team_id: string;
    thumbnail: string;
    title: string;
    short_url: string;
    asset_use: string;
    positioning?: string;
    description?: string;
    funnel_stage?: string;
    content_type?: string;
    product?: string;
    industry?: string;
    region?: string;
    tags: any[];
    likes: any[];
    favorites: any[];
    sharingDetails: any[];
    additional_info: AdditionalInfo;
    file_url: string;
    aws_key: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

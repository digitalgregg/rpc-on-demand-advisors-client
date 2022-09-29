import api from "../api/index";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import { SelectOption } from "../components/Shared/SortedSelect";
import {
    filterOriginContent,
    searchContentFilter,
    sortedContentFilter,
} from "../utils/filter";
import { useAtom } from "jotai";
import { FilterOrigin, SearchTextFilter } from "../state";

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

export const restoreContent = async (id: string, refetch: () => void) => {
    try {
        await api.put("/api/content/recycle/restore/" + id);
        toast.success("Content restored successfully");
        refetch();
    } catch (err) {
        toast.error("Something went wrong");
    }
};

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
        toast.success("Content deleted successfully");
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

export interface Tag {
    _id: string;
    title: string;
    color: string;
    __v: number;
}

interface Industry {
    _id: string;
    title: string;
    __v: number;
}

interface Region {
    _id: string;
    title: string;
    __v: number;
}

interface ContentType {
    _id: string;
    title: string;
    __v: number;
}

interface Product {
    _id: string;
    title: string;
    __v: number;
}

interface FunnelStage {
    _id: string;
    title: string;
    __v: number;
}

export interface ContentDataType {
    _id: string;
    user_id: string;
    team_id: string;
    thumbnail: string;
    title: string;
    short_url: string;
    asset_use: string;
    tags?: Tag[];
    likes: any[];
    favorites: any[];
    sharingDetails: any[];
    additional_info: AdditionalInfo;
    file_url: string;
    aws_key: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    industry?: Industry;
    region?: Region;
    content_type?: ContentType;
    product?: Product;
    description?: string;
    funnel_stage?: FunnelStage;
}

interface ContentDataType1 {
    _id: string;
    user_id: string;
    team_id: string;
    thumbnail: string;
    title: string;
    short_url: string;
    asset_use: string;
    positioning?: string;
    description?: string;
    funnel_stage?: any;
    content_type?: any;
    product?: any;
    industry?: any;
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

export type UpdateContentDetailsType = {
    title?: string;
    short_url?: string;
    asset_use?: string;
    description?: string;
    funnel_stage?: string;
    content_type?: string;
    product?: string;
    industry?: string;
    region?: string;
    tags?: any[];
};

export const updateContentDetails = async (
    id: string,
    data: UpdateContentDetailsType
) => {
    try {
        await api.put("/api/content/" + id, data);
        toast.success("Content details updated");
    } catch (error) {
        console.log(error);
    }
};

export const downloadFile = (link: string) => {
    return api.post("/api/content/download/file", { link });
};

export const fetchRecycleBin = async (team_id: string) => {
    return await api.get("/api/content/get/recycle?team_id=" + team_id);
};

export const useFilterContents = (
    team_id: string,
    sortedFilter: SelectOption
) => {
    const [searchText] = useAtom(SearchTextFilter);
    const [filterOrigin] = useAtom(FilterOrigin);

    return useQuery(["fetch-contents"], () => fetchContents({ team_id }), {
        select: (response) => {
            return filterOriginContent(
                sortedContentFilter(
                    searchContentFilter(response.data, searchText),
                    sortedFilter.value
                ),
                filterOrigin
            );
        },
        retry(failureCount, error: any) {
            if (error.response.data?.success === false) {
                return false;
            } else {
                return true;
            }
        },
    });
};

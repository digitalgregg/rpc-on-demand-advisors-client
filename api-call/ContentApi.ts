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

export function createContent(contentData: CreateContentType) {
    api.post(BASE_URL + "/api/content", contentData)
        .then((res) => {
            if (res.status === 200) {
                toast.success("Content created successfully");
            } else {
                toast.error("Something went wrong!");
            }
        })
        .catch((err) => {
            console.log(err);
            toast.error(err?.message);
        });
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
    const url = new URL("/", BASE_URL);
    id && url.searchParams.append(id, id);
    user_id && url.searchParams.append(user_id, user_id);
    team_id && url.searchParams.append(team_id, team_id);

    const res = await fetch(url);
    return res.json();
}

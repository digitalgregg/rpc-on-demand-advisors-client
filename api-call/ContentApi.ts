import api from "../api/index";
import { toast } from "react-toastify";
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
    api.post("/api/content", contentData)
        .then((res) => {
            if (res.status === 200) {
                console.log(res);
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

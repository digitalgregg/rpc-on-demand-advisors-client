import { useRouter } from "next/router";
import React from "react";
import { use100vh } from "react-div-100vh";
import { useQuery } from "react-query";
import api from "../../api";
import { fetchFile, fetchSharedFile } from "../../api-call/FileViewApi";
import { isAudio, isImage, isVideo } from "../../components/Library/FileType";
import FileViewer from "../../components/Library/FileViewer";
import { LoadingBox } from "../dashboard/contents/view-details/[id]";

function ViewShareFile() {
    const router = useRouter();
    const url = router.query.url;
    const { data, isLoading, isSuccess, isError } = useQuery(
        ["view-shared-file", url],
        () => fetchSharedFile(`${url}`),
        {
            enabled: !!url,
            retry(failureCount, error: any) {
                if (error.response.data.success === false) {
                    return false;
                } else {
                    return true;
                }
            },
            select: (response) => response.data,
            onSuccess: async (res) => {
                await api.put("api/content/sharing/" + res.link, {
                    views: res.views + 1,
                });
                console.log("Views updated");
            },
            refetchOnWindowFocus: false,
        }
    );
    const viewHeight = use100vh();
    if (isLoading) return <LoadingBox />;

    if (isError) return <ErrorView />;
    if (isSuccess)
        return (
            <div
                className={`w-full overflow-hidden ${
                    (isImage(data.file_url) ||
                        isAudio(data.file_url) ||
                        isVideo(data.file_url)) &&
                    "flex justify-center items-center"
                }  `}
                style={{ height: viewHeight || "100vh" }}
            >
                <FileViewer src={data.file_url} />
            </div>
        );
}

const ErrorView = () => {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            File not found or Link not valid
        </div>
    );
};

export default ViewShareFile;

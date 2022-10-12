import { useRouter } from "next/router";
import React from "react";
import { use100vh } from "react-div-100vh";
import { useQuery } from "react-query";
import api from "../../api";
import { fetchFile } from "../../api-call/FileViewApi";
import { isAudio, isImage, isVideo } from "../../components/Library/FileType";
import FileViewer from "../../components/Library/FileViewer";
import { LoadingBox } from "../dashboard/contents/view-details/[id]";
import Script from "next/script";
import { getLocal } from "../../utils/localStorage";

function ViewFile() {
    const router = useRouter();
    const url = router.query.url;
    const team = getLocal("team");

    const { isLoading: notificationLoadin, data: notificationData } = useQuery(
        ["getNotification", team?.user_id],
        () => api.get(`/api/notification?user_id=${team?.user_id}`),
        { enabled: !!team?.user_id }
    );
    const webData = notificationData?.data;

    const { data, isLoading, isSuccess, isError } = useQuery(
        ["view-file", url],
        () => fetchFile(`${url}`),
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
                await api.put("api/content/short-url/" + res._id);
                console.log("Views updated");
            },
            refetchOnWindowFocus: false,
            refetchInterval: false,
        }
    );

    const viewHeight = use100vh();
    if (isLoading) return <LoadingBox />;

    if (isError) return <ErrorView />;
    if (isSuccess)
        return (
            <>
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
                {webData?.web_notification === true && (
                    <Script
                        src="/client.js"
                        strategy="afterInteractive"
                    ></Script>
                )}
            </>
        );
}

const ErrorView = () => {
    return (
        <div className="fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            File not found or Link not valid
        </div>
    );
};

export default ViewFile;

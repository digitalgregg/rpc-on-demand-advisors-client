import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React from "react";
import { use100vh } from "react-div-100vh";
import { useQuery } from "react-query";
import api from "../../api";
import { fetchFile, fetchSharedFile } from "../../api-call/FileViewApi";
import { isAudio, isImage, isVideo } from "../../components/Library/FileType";
import FileViewer from "../../components/Library/FileViewer";
import { EmailSentState, signupState } from "../../state";
import { LoadingBox } from "../dashboard/contents/view-details/[id]";

function ViewShareFile() {
    const [userData] = useAtom(signupState);
    const router = useRouter();
    const url = router.query.url;
    const [emailSent, setEmailSent] = useAtom(EmailSentState);
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
                if (userData && userData._id && userData._id == res.user_id) {
                } else {
                    await api.put("api/content/sharing/" + res.link);
                    const apiObj = {
                        user_id: res.user_id,
                        content_id: res.content_id,
                        recipient: res.recipient,
                        views: `${parseInt(res.views) + 1}`,
                        isEmail: !emailSent,
                    };
                    console.log(res);
                    if (!emailSent) {
                        setEmailSent(true);
                    }
                    try {
                        await api.post("/notification-email", apiObj);
                    } catch (error) {
                        console.log(error);
                    }
                }
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

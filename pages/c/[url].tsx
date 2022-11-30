import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import api from "../../api";
import FileShare from "../../components/fileShare";
import { LoadingBox } from "../dashboard/contents/view-details/[id]";

function CollectionViewer() {
    const router = useRouter();
    const url = router.query.url;

    const { isError, isLoading, isSuccess, data } = useQuery(
        ["fetch-publish", url],
        () => fetchPublish(`${url}`),
        {
            enabled: !!url,
            select: (response) => response.data,
            retry(failureCount, error: any) {
                if (error.response.data.success === false) {
                    return false;
                } else {
                    return true;
                }
            },
        }
    );

    if (isLoading) return <LoadingBox />;

    if (isError) return <ErrorView />;

    if (isSuccess)
        return (
            <>
                {data.trackers && data.trackers.header_html && (
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.trackers.header_html,
                        }}
                    ></div>
                )}
                <div>
                    <FileShare
                        branding={data.branding}
                        contents={data.contents}
                    />
                </div>
                <div className="mt-[403px]"></div>
                {data.trackers && data.trackers.footer_html && (
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.trackers.footer_html,
                        }}
                    ></div>
                )}
            </>
        );
}

const fetchPublish = async (url: string) => {
    return await api.get("/api/collection/publish/" + url);
};

const ErrorView = () => {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Collection not published or Link not valid
        </div>
    );
};

export default CollectionViewer;

import React, { createContext, useContext, ReactNode } from "react";

import { ContentDataType } from "../../api-call/ContentApi";

type ContentType = {
    contentData: ContentDataType;
    refetch: () => any;
};

const ContentContext = createContext<ContentType | null>(null);

export const GetContentContext = () =>
    useContext(ContentContext) as ContentType;

function ContentDataProvider({
    children,
    contentData,
    refetch,
}: {
    children: ReactNode;
    contentData: ContentDataType;
    refetch: () => any;
}) {
    return (
        <ContentContext.Provider value={{ contentData, refetch }}>
            {children}
        </ContentContext.Provider>
    );
}

export default ContentDataProvider;

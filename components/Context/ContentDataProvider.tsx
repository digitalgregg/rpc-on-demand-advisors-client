import React, { createContext, useContext, ReactNode, useReducer } from "react";

import { ContentDataType } from "../../api-call/ContentApi";
import {
    detailsAction,
    DetailsActionType,
    INITIAL_DETAILS,
    ContentDetailsType,
} from "./ContentDetailsReducer";

type ContentType = {
    contentData: ContentDataType;
    refetch: () => any;
    context: {
        detailsState: ContentDetailsType;
        dispatchDetails: React.Dispatch<DetailsActionType>;
    };
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
    const [detailsState, dispatchDetails] = useReducer(
        detailsAction,
        INITIAL_DETAILS
    );

    return (
        <ContentContext.Provider
            value={{
                contentData,
                refetch,
                context: { dispatchDetails, detailsState },
            }}
        >
            {children}
        </ContentContext.Provider>
    );
}

export default ContentDataProvider;

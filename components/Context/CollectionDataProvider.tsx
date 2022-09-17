import React, { createContext, useContext, ReactNode } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { getCollection } from "../../api-call/CollectionApi";
import { useState } from "react";
import { useAtom } from "jotai";
import { team_state } from "../../state/index";
import api from "../../api";
import { ContentDataType } from "../../api-call/ContentApi";

export type CollectionData = {
    publish: any;
    _id: string;
    user_id: string;
    team_id: string;
    title: string;
    contents: any[];
    shareWith: string;
    sharedUser: any[];
    sharingDetails: any[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
};
export const initialCollection = {
    _id: "",
    user_id: "",
    team_id: "",
    title: "",
    contents: [],
    shareWith: "",
    sharedUser: [],
    sharingDetails: [],
    createdAt: "",
    updatedAt: "",
    __v: 0,
};

export type CollectionContext = {
    collectionData: CollectionData;
    contents: ContentDataType[];
    refetch: () => any;
};

const CollectionContext = createContext<CollectionContext | null>(null);

export const GetCollectionContext = () =>
    useContext(CollectionContext) as CollectionContext;

function CollectionDataProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    const id = router.query.id;
    const [teamData] = useAtom(team_state);

    const [selectContents, setSelectContents] = useState<any[]>();

    const {
        data: collectionData,
        refetch: refetch1,
        isLoading,
    } = useQuery(["get-collection", id], () => getCollection(`${id}`), {
        enabled: id ? true : false,
        select: (response) => response.data,

        onSuccess: (data) => {
            setSelectContents(data.contents.map((v: any) => v._id));
        },
    });
    const { data: contents, refetch: refetch2 } = useQuery(
        ["get-contents", selectContents],
        () => getFilterContents(teamData.id, selectContents),
        {
            enabled: selectContents ? true : false,
            select: (response) => response.data,
        }
    );

    const refetch = () => {
        refetch1();
        refetch2();
    };

    return (
        <CollectionContext.Provider
            value={{ collectionData, contents, refetch }}
        >
            {children}
        </CollectionContext.Provider>
    );
}

export default CollectionDataProvider;
function getFilterContents(
    team_id: string,
    selectContents: any[] | undefined
): any {
    return api.post("/api/collection/content", {
        team_id,
        contents: selectContents,
    });
}

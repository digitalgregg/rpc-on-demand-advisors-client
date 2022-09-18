import React, { createContext, useContext, ReactNode } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import {
    getCollection,
    getContentsCollection,
} from "../../api-call/CollectionApi";
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

    const { data, refetch, isLoading, isSuccess } = useQuery(
        ["get-collection", id],
        () => getContentsCollection(`${id}`),
        {
            enabled: id ? true : false,
            select: (response) => response.data,
        }
    );
    return (
        <CollectionContext.Provider
            value={{
                collectionData: data && data.collection,
                contents: data && data.contents,
                refetch,
            }}
        >
            {children}
        </CollectionContext.Provider>
    );
}

export default CollectionDataProvider;

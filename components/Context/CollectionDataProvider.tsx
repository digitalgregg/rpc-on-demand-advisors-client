import React, { createContext, useContext, ReactNode } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { getCollection } from "../../api-call/CollectionApi";

type CollectionData = {
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

type CollectionContext = {
    collectionData: CollectionData;
    refetch: () => any;
};

const CollectionContext = createContext<CollectionContext | null>(null);

export const GetCollectionContext = () =>
    useContext(CollectionContext) as CollectionContext;

function CollectionDataProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    const id = router.query.id;

    const { data: collections, refetch: refetch1 } = useQuery(
        "get-collection",
        () => getCollection(`${id}`),
        {
            enabled: id ? true : false,
            select: (response) => response.data,
        }
    );
    const { data: contents, refetch: refetch2 } = useQuery(
        "get-contents",
        () => getCollection(`${id}`),
        {
            enabled: id ? true : false,
            select: (response) => response.data,
        }
    );

    console.log(collections, contents);

    return (
        <CollectionContext.Provider
            value={{ collectionData: collections, refetch: refetch1 }}
        >
            {children}
        </CollectionContext.Provider>
    );
}

export default CollectionDataProvider;

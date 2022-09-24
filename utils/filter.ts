import { ContentDataType } from "../api-call/ContentApi";
import { CollectionData } from "../components/Context/CollectionDataProvider";

export const collectionFilter = (data: CollectionData[], filter: string) => {
    switch (filter) {
        case "newest":
            const result = data.sort((a, b) => {
                var dateA = new Date(a.createdAt).getTime();
                var dateB = new Date(b.createdAt).getTime();
                return dateA < dateB ? 1 : -1;
            });
            return result;
        case "oldest":
            return data.sort((a, b) => {
                var dateA = new Date(a.createdAt).getTime();
                var dateB = new Date(b.createdAt).getTime();
                return dateA > dateB ? 1 : -1;
            });

        default:
            return data;
    }
};

export const sortedContentFilter = (
    data: ContentDataType[],
    filter: string
) => {
    switch (filter) {
        case "newest":
            const result = data.sort((a, b) => {
                var dateA = new Date(a.createdAt).getTime();
                var dateB = new Date(b.createdAt).getTime();
                return dateA < dateB ? 1 : -1;
            });
            return result;
        case "oldest":
            return data.sort((a, b) => {
                var dateA = new Date(a.createdAt).getTime();
                var dateB = new Date(b.createdAt).getTime();
                return dateA > dateB ? 1 : -1;
            });
        case "favorites":
            return data.sort((a: any, b: any) => {
                return (
                    b.favorites.includes(b.user_id) -
                    a.favorites.includes(a.user_id)
                );
            });

        case "voted":
            return data.sort((a: any, b: any) => {
                return (
                    b.likes.includes(b.user_id) - a.likes.includes(a.user_id)
                );
            });

        default:
            return data;
    }
};

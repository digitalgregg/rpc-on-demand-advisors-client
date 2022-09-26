import { ContentDataType } from "../api-call/ContentApi";
import { CollectionData } from "../components/Context/CollectionDataProvider";
import { FilterOriginType } from "../state";

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

export const searchContentFilter = (
    data: ContentDataType[],
    filterText: string
) => {
    return data.filter((v) =>
        v.title.toLowerCase().includes(filterText.toLowerCase())
    );
};

export const filterOriginContent = (
    data: ContentDataType[],
    filterObj: FilterOriginType
) => {
    let filterData = data;
    if (filterObj.funnel_stages.length > 0) {
        const funnelStage = filterObj.funnel_stages.map((v) => v.value);
        filterData = filterData.filter((v) =>
            funnelStage.includes(v.funnel_stage?._id)
        );
    }
    if (filterObj.content_type.length > 0) {
        const contentType = filterObj.content_type.map((v) => v.value);
        filterData = filterData.filter((v) =>
            contentType.includes(v.content_type?._id)
        );
    }
    if (filterObj.product.length > 0) {
        const product = filterObj.product.map((v) => v.value);
        filterData = filterData.filter((v) => product.includes(v.product?._id));
    }
    if (filterObj.industry.length > 0) {
        const industry = filterObj.industry.map((v) => v.value);
        filterData = filterData.filter((v) =>
            industry.includes(v.industry?._id)
        );
    }
    if (filterObj.region.length > 0) {
        const region = filterObj.region.map((v) => v.value);
        filterData = filterData.filter((v) => region.includes(v.region?._id));
    }
    if (filterObj.tags.length > 0) {
        const tags = filterObj.tags.map((v) => v.value);
        filterData = filterData.filter((v, i) => {
            const checkFind =
                v.tags && v.tags.find((c) => tags.includes(c._id));
            if (checkFind) {
                return true;
            }
        });
    }
    return filterData;
};

export type ContentDetailsType = {
    asset_use: string;
    funnel_stage: string;
    content_type: string;
    product: string;
    industry: string;
    region: string;
    tags: string[];
    title: string;
    description: string;
    short_url: string;
};

type SelectObject = {
    label: any;
    value: string;
};

export type DetailsActionType = {
    type:
        | "asset_use"
        | "funnel_stage"
        | "product"
        | "industry"
        | "content_type"
        | "region"
        | "tags"
        | "title"
        | "description"
        | "short_url";
    value: string | string[];
};

export const INITIAL_DETAILS = {
    asset_use: "",
    funnel_stage: "",
    content_type: "",
    product: "",
    industry: "",
    region: "",
    title: "",
    description: "",
    short_url: "",
    tags: [],
};

export const detailsAction = (
    state: ContentDetailsType,
    action: DetailsActionType
) => {
    const { type, value } = action;
    return {
        ...state,
        [type]: value,
    };
};

import { FilterOriginType } from "../../state";
type FilterActionType = {
    type:
        | "funnel_stages"
        | "content_type"
        | "product"
        | "industry"
        | "region"
        | "tags";
    value: any[];
};

export const FilterAction = (
    state: FilterOriginType,
    action: FilterActionType
) => {
    const { type, value } = action;

    return { ...state, [type]: value };
};

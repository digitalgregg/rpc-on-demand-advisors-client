// jotai will be used here for global state management
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const signupState = atomWithStorage("user-info", {
    name: "",
    companyName: "",
    email: "",
    // password: "",
    _id: "",
});

export const team_state = atomWithStorage("team", {
    name: "",
    email: "",
    company_name: "",
    id: "",
    user_id: "",
    team_name: "",
    role: "",
});

export const AppSettingToggle = atomWithStorage("app-setting-toggle", {
    product: false,
    industry: false,
    tag: false,
    region: false,
});

export const planLocalData = atom({
    assetLimit: "",
    isAnnual: false,
    monthPrice: 0,
    name: "",
    storageLimit: "",
    userLimit: "",
});

export const TrackersStateHeaderAtom = atom<any>("");
export const TrackersStateFooterAtom = atom<any>("");
export const NotificationWebAtom = atom<boolean>(false);
export const NotificationEmailAtom = atom<boolean>(false);
// export const  = atom<any>("notifations", {
//     web_notification: ""
// })

// For filter
export const SearchTextFilter = atomWithStorage("search-string", "");

export type FilterOriginType = {
    funnel_stages: any[];
    content_type: any[];
    product: any[];
    industry: any[];
    region: any[];
    tags: any[];
};

export const FilterOrigin = atomWithStorage<FilterOriginType>(
    "filter-content",
    {
        funnel_stages: [],
        content_type: [],
        product: [],
        industry: [],
        region: [],
        tags: [],
    }
);

export type DefaultFilterType = {
    product: any[];
    industry: any[];
    region: any[];
    tags: any[];
};

export const DefaultFilter = atomWithStorage<DefaultFilterType>(
    "default-filter",
    {
        product: [],
        industry: [],
        region: [],
        tags: [],
    }
);

type UserPlanType = {
    storage_limit: boolean;
    user_limit: boolean;
    asset_limit: boolean;
};

export const UserPlanState = atomWithStorage<UserPlanType>("plan-limit", {
    storage_limit: false,
    user_limit: false,
    asset_limit: false,
});

export const RetrieveLimit = atom("abc");

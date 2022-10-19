// jotai will be used here for global state management
import { atom, SetStateAction, WritableAtom } from "jotai";
import { atomWithStorage, RESET } from "jotai/utils";
import { decryptData, encryptData } from "../utils/hashdata";
import { getLocal, setLocal } from "../utils/localStorage";

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
    customer: "",
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

const atomWithLocalStorage: <Value>(
    key: string,
    initialValue: Value
) => WritableAtom<Value, SetStateAction<Value> | typeof RESET> = (
    key,
    initialValue
) => {
    const getInitialValue = () => {
        const item: any = getLocal(key);
        if (item) {
            return decryptData(item);
        }
        return initialValue;
    };
    const baseAtom = atom(getInitialValue());
    const derivedAtom = atom(
        (get) => get(baseAtom),
        (get, set, update) => {
            const nextValue =
                typeof update === "function" ? update(get(baseAtom)) : update;
            set(baseAtom, nextValue);
            setLocal(key, encryptData(nextValue));
        }
    );
    return derivedAtom;
};

type PaymentMethodType = {
    customer: string;
    id: string;
};

type UserPlanType = {
    plan_name?: string;
    storage_limit?: boolean;
    user_limit?: boolean;
    asset_limit?: boolean;
    wishlist?: boolean;
    analytics?: boolean;
    weekly_email?: boolean;
};

export const PaymentMethod = atomWithLocalStorage<PaymentMethodType>(
    "payment-method",
    {
        customer: "",
        id: "",
    }
);

export const UserPlanState = atomWithLocalStorage<UserPlanType>(
    "user-plan-limit",
    {}
);

export const RetrieveLimit = atom("abc");

export const UpgradeModalState = atom("");

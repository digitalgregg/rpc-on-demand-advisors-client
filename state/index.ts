// jotai will be used here for global state management
import { atom, SetStateAction, WritableAtom } from "jotai";
import { atomWithStorage, RESET } from "jotai/utils";
import { PMDTYPE } from "../utils/interfaces";
import secureLocalStorage from "react-secure-storage";

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

export const profile_state = atomWithStorage("profile-data", {
    originalname: "",
    key: "",
    location: "",
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
        const item: any = secureLocalStorage.getItem(key);
        if (item) {
            return item;
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
            secureLocalStorage.setItem(key, nextValue);
        }
    );
    return derivedAtom;
};

type PaymentMethodType = {
    customer: string;
    id: string;
};

export const PaymentMethod = atomWithLocalStorage<PaymentMethodType>(
    "payment-method",
    {
        customer: "",
        id: "",
    }
);

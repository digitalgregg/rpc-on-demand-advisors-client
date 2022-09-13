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

export const TrackersStateHeaderAtom = atom<any>("");
export const TrackersStateFooterAtom = atom<any>("");
export const NotificationWebAtom = atom<boolean>(false);
export const NotificationEmailAtom = atom<boolean>(false);
// export const  = atom<any>("notifations", {
//     web_notification: ""
// })

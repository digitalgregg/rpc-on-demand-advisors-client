// jotai will be used here for global state management
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const signupState = atom({
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
});

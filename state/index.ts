// jotai will be used here for global state management   
import { atom } from "jotai";

export const signupState = atom({
    name: "",
    companyName: "",
    email: "",
    // password: "",
    _id:"",
});


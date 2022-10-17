import { getLocal } from "./localStorage";

const checkRemember = () => {
    const remember = getLocal("remember");
    const cookie = getCookie("remember");
    return remember === false && !cookie;
};

const getCookie = (key: string) => {
    return document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${key}=`))
        ?.split("=")[1];
};

export default checkRemember;

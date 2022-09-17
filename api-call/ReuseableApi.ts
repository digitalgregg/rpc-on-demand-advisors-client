export function getShareWithArr(
    response: object[],
    user_id: string
): { value: string; label: string }[] {
    const data = response
        .filter((v: any) => v.user_id._id !== user_id)
        .map((v: any) => {
            return {
                label: v.user_id.name,
                value: v.user_id._id,
            };
        });
    return data;
}

type ShareWithReturn = {
    shareWith: string;
    sharedUser: string[];
};

export function getShareWithData(value: any): ShareWithReturn {
    let finalArr: any[] = [];
    if (Array.isArray(value)) finalArr = [...value];
    if (typeof value === "object" && !Array.isArray(value) && value !== null)
        finalArr.push(value);

    let shareWith = "";
    let sharedUser: string[] = [];
    if (!value)
        return {
            shareWith: "all",
            sharedUser: [],
        };

    if (finalArr.length == 1 && finalArr[0].value == "all-team-members") {
        (shareWith = "all"), (sharedUser = []);
    } else if (finalArr.length == 1 && finalArr[0].value == "no-team-members") {
        (shareWith = "no"), (sharedUser = []);
    } else {
        (shareWith = "user"),
            (sharedUser = finalArr.map((v) => v.value && v.value));
    }
    return {
        shareWith,
        sharedUser,
    };
}

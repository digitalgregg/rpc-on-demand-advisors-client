export function removeEmpty(obj: object): object {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != ""));
}

import CryptoJS from "crypto-js";

const salt =
    process.env.NEXT_PUBLIC_AUTH_SALT as string;

export const encryptData = (data: any) =>
    CryptoJS.AES.encrypt(JSON.stringify(data), salt).toString();

export const decryptData = (ciphertext: string) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, salt);
    try {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (err) {
        return null;
    }
};

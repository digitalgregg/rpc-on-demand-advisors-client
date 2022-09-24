import { getExtension } from "./FileType";

const createFile = async (url: string) =>
    new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = "blob";
        request.onload = function () {
            var reader = new FileReader();
            reader.readAsDataURL(request.response);
            reader.onload = function (e) {
                resolve(e);
            };
        };
        request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        request.setRequestHeader("Access-Control-Allow-Origin", "*");
        request.onerror = function () {
            reject;
        };
        request.send();
    });

export default createFile;

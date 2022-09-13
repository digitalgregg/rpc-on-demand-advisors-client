export function getExtension(filename: string) {
    var parts = filename.split(".");
    return parts[parts.length - 1];
}

export function isImage(filename: string) {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
        case "jpg":
        case "jpeg":
        case "gif":
        case "bmp":
        case "png":
            // case "svg":
            return true;
    }
    return false;
}

function isVideo(filename: string) {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
        case "m4v":
        case "avi":
        case "mpg":
        case "mp4":
            return true;
    }
    return false;
}

function isAudio(filename: string) {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
        case "m4a":
        case "wav":
        case "mp3":
        case "aac":
        case "wma":
            return true;
    }
    return false;
}

function isPdf(filename: string) {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
        case "pdf":
        case "xls":
        case "csv":
        case "doc":
            return true;
    }
    return false;
}

export function getFileType(
    filename: string,
    onFileType: (type: string) => any
) {
    if (isImage(filename)) return onFileType("image");
    if (isVideo(filename)) return onFileType("video");
    if (isAudio(filename)) return onFileType("audio");
    if (isOfficeDocument(filename)) return onFileType("document");
    if (isOtherDocument(filename)) return onFileType("all-document");
}
function isOfficeDocument(filename: string) {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
        case "ppt":
        case "pptx":
        case "doc":
        case "docx":
        case "xls":
        case "xlsx":
            return true;
    }
    return false;
}
function isOtherDocument(filename: string) {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
        case "txt":
        case "pdf":
        case "html":
        case "css":
        case "csv":
            return true;
    }
    return false;
}

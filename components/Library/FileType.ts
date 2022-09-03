function getExtension(filename: string) {
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
        case "svg":
            return true;
    }
    return false;
}

export function isVideo(filename: string) {
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

export function isAudio(filename: string) {
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

export function isPdf(filename: string) {
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
import axios from "axios";
import { toast } from "react-toastify";
import { isPdf, isThumbnailDocument } from "../pages/dashboard/contents";
import * as pdfjsLib from "pdfjs-dist";
import api from "../api";

pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.1.81/pdf.worker.min.js";

async function GenerateThumbnail(
    fileUrl: string,
    fileBlob: string
): Promise<string> {
    if (!isThumbnailDocument(fileUrl)) return fileUrl;

    const toastId = toast.loading("Generation thumbnail...", {
        closeButton: true,
    });
    try {
        let resultUrl = fileUrl;
        if (isPdf(fileUrl)) {
            resultUrl = await pdfToPng(fileBlob);
        } else {
            const { data } = await axios.post(
                "https://doc-to-thumbnail.herokuapp.com/api/thumbnail",
                {
                    url: fileUrl,
                }
            );
            resultUrl = data;
        }

        toast.update(toastId, {
            render: "Thumbnail generated successfully",
            isLoading: false,
            type: "success",
            autoClose: 3000,
        });
        toast.dismiss(toastId);

        return resultUrl;
    } catch (err) {
        toast.update(toastId, {
            render: "Something went wrong",
            isLoading: false,
            type: "error",
        });
        toast.dismiss(toastId);
        return fileUrl;
    }
}

export async function pdfToPng(fileUrl: string): Promise<string> {
    const pdfDocument = await pdfjsLib.getDocument(fileUrl).promise;

    const page = await pdfDocument.getPage(1);
    const viewPort = page.getViewport({ scale: 1.0 });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.height = viewPort.height;
    canvas.width = viewPort.width;

    const renderContext = { canvasContext: context, viewport: viewPort };

    const renderTask = page.render(renderContext);
    await renderTask.promise;
    const image = canvas.toDataURL("image/png");
    const blob = dataURItoBlob(image);
    const formData = new FormData();
    formData.append("file", blob, "thumbnail.png");
    const { data } = await api.post("/api/content/thumbnail/upload", formData);
    return data.location;
}

function dataURItoBlob(dataURI: string) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(",")[0].indexOf("base64") >= 0)
        byteString = atob(dataURI.split(",")[1]);
    else byteString = unescape(dataURI.split(",")[1]);

    // separate out the mime component
    var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
}

export default GenerateThumbnail;

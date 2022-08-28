const BASE_URL = "http://localhost:7090";

// TRIGGER_BUTTON_CLASS=open-file-uploader

// Uppy file uploader
var uppy = new Uppy.Uppy()
    .use(Uppy.Dashboard, {
        inline: false,
        trigger: ".open-file-uploader",
        target: "body",
        allowMultipleUploads: false,
        proudlyDisplayPoweredByUppy: false,
        showProgressDetails: true,
        animateOpenClose: true,
        browserBackButtonClose: true,
        closeModalOnClickOutside: true,
        closeAfterFinish: true,
        doneButtonHandler: null,
        disablePageScrollWhenModalOpen: false,
    })
    .use(Uppy.GoogleDrive, {
        target: Uppy.Dashboard,
        companionUrl: BASE_URL,
    })
    .use(Uppy.XHRUpload, {
        endpoint: `${BASE_URL}/upload/`,
        fieldName: "my-file",
        method: "post",
        formData: true,
    })
    .use(Uppy.Dropbox, {
        target: Uppy.Dashboard,
        companionUrl: BASE_URL,
    })
    .use(Uppy.Url, {
        target: Uppy.Dashboard,
        companionUrl: BASE_URL,
        locale: {},
    })
    .on("complete", (result) => {
        window.myOnFileUpload(result.successful);
        this.uppy.getState().files = {};
        this.uppy.getState().totalProgress = null;
    });

const uppyDashboarInner = document.getElementsByClassName(
    "uppy-Dashboard-inner"
);

if (uppyDashboarInner.length > 0) {
    const customDiv = document.createElement("div");
    customDiv.innerHTML = `<div class="file-upload-header">
    <img
        src="/assets/dashboard/logo-lg.svg"
        width="104px"
    />
    <div      id="close-file-upload-modal"
    style="cursor:pointer;padding:10px">
    <img
    src="/assets/collections/modal-close.svg"
    alt="Close btn"
    width="18px"
    />
    </div>
</div>`;
    uppyDashboarInner[0].insertAdjacentElement("afterbegin", customDiv);
}

const dashboard = uppy.getPlugin("Dashboard");

const closeUploadModalBtn = document.getElementById("close-file-upload-modal");
if (closeUploadModalBtn) {
    closeUploadModalBtn.addEventListener("click", function () {
        if (dashboard.isModalOpen()) {
            dashboard.closeModal();
        }
    });
}

window.myUppy = uppy;

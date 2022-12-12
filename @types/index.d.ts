export {};

declare global {
    interface Window {
        myOnFileUpload: (v: any) => any;
        myUppy: any;
        onSingleFileUpload: (f: any, v: any) => any;
        onUploadCompleted: (v: any) => any;
    }
}

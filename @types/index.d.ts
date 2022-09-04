export {};

declare global {
    interface Window {
        myOnFileUpload: (v: any) => any;
        myUppy: any;
        onSingleFileUpload: (v: any) => any;
    }
}

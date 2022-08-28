export {};

declare global {
  interface Window {
    myOnFileUpload: (v:any)=>any;
    myUppy:any;
  }
}
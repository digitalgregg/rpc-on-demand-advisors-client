import Papa from "papaparse";
export const parseCsv = (file: File) =>
    new Promise((resolve, reject) => {
        Papa.parse(file, {
            skipEmptyLines: true,
            header: true,
            complete: (results, file) => {
                resolve(results.data);
            },
            error(error, file) {
                reject(error);
            },
        });
    });

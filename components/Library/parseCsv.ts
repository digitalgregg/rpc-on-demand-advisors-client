import CSVFileValidator from "csv-file-validator";

export const parseCsv = async (file: File) => {
    return await CSVFileValidator(file, {
        headers: [
            {
                name: "url",
                inputName: "url",
                required: true,
            },
            {
                name: "title",
                inputName: "title",
                required: true,
            },
            {
                name: "content type",
                inputName: "content type",
                required: false,
            },
            {
                name: "funnel stage",
                inputName: "funnel stage",
                required: false,
            },
            {
                name: "tags",
                inputName: "tags",
                required: false,
            },
            {
                name: "product",
                inputName: "product",
                required: false,
            },
            {
                name: "industry",
                inputName: "industry",
                required: false,
            },
            {
                name: "region",
                inputName: "region",
                required: false,
            },
        ],
    });
};

export const customStyles = {
    control: (base: any, state: any) => ({
        ...base,
        border: "1px solid #9E9E9E",
        boxShadow: "none",
        minHeight: "55px",
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        fontSize: "14px",
        backgroundColor: state.isSelected ? "#E51937" : "transparent",
        fontWeight: state.isSelected ? 700 : 500,
        color: state.isSelected ? "#fff" : "#000",
        width: "95%",

        borderRadius: "4px",
        margin: "0 auto",
        ":hover": {
            background: state.isSelected ? "#E51937" : "rgba(229,25,55,0.1)",
            color: state.isSelected ? "#fff" : "#E51937",
        },
    }),
    indicatorSeparator: (provided: any) => ({
        display: "none",
    }),
};

export const customFilterBoxStyles = {
    control: (base: any, state: any) => ({
        ...base,
        border: "1px solid #9E9E9E",
        boxShadow: "none",
        height: "55px",
    }),
    option: (provided: any) => ({
        ...provided,
        color: "#000000",
        fontSize: "14px",
        fontWeight: 400,
        width: "95%",

        borderRadius: "4px",
        margin: "0 auto",
        "&:hover": {
            color: "#E51937",
            fontWeight: 600,
        },
    }),
    indicatorsContainer: (provided: any) => ({
        border: "none",
    }),
};

export const options = [
    { value: "Demo text1", label: "Demo text1" },
    { value: "Demo text2", label: "Demo text2" },
    { value: "Demo text3", label: "Demo text3" },
    { value: "Demo text4", label: "Demo text4" },
];

export const userManagementstyles = {
    control: (base: any, state: any) => ({
        ...base,
        border: "1px solid #9E9E9E",
        boxShadow: "none",
        height: "55px",
    }),
    option: (provided: any) => ({
        ...provided,
        color: "#000000",
        fontSize: "14px",
        fontWeight: 400,
        width: "95%",

        borderRadius: "4px",
        margin: "0 auto",
        "&:hover": {
            color: "#E51937",
            fontWeight: 600,
        },
    }),
    indicatorsContainer: (provided: any) => ({
        border: "none",
    }),
};
